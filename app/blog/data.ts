import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { cacheLife, cacheTag } from "next/cache";
import { BLOG_POSTS_CACHE_TAG, getBlogPostCacheTag } from "./cache";
import type { BlogPost, BlogPostDetail, DevToArticle } from "./types";
import {
  mapDevToArticleToBlogPost,
  mapDevToArticleToBlogPostDetail,
} from "./types";

const execFileAsync = promisify(execFile);

const DEV_TO_API_BASE = "https://dev.to/api";
const DEV_TO_USERNAME = process.env.DEV_TO_USERNAME || "arindam_1729";
const DEV_TO_PAGE_SIZE = 50;
const DEV_TO_MAX_PAGES = 20;

const FEATURED_POST_TITLES: string[] = [];
// Retires list entries created before tag-based invalidation was introduced.
const BLOG_POSTS_CACHE_VERSION = 4;

async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * DEV.to's CDN rate-limits Node/undici fetch (returns sticky 429s) while
 * curl from the same machine succeeds. Use curl for reliable server fetches.
 */
async function curlGet(url: string): Promise<{ status: number; body: string }> {
  const args = ["-sS", "-L", "--max-time", "30", "-w", "\n%{http_code}"];

  if (process.env.DEV_TO_API_KEY) {
    args.push("-H", `api-key: ${process.env.DEV_TO_API_KEY}`);
  }

  args.push(url);

  const { stdout } = await execFileAsync("curl", args, {
    maxBuffer: 12 * 1024 * 1024,
    timeout: 35_000,
  });

  const separator = stdout.lastIndexOf("\n");
  if (separator === -1) {
    return { status: 0, body: stdout };
  }

  const body = stdout.slice(0, separator);
  const status = Number(stdout.slice(separator + 1));

  return {
    status: Number.isFinite(status) ? status : 0,
    body,
  };
}

async function fetchWithRetry(
  url: string,
  retries = 4,
): Promise<{ status: number; body: string } | null> {
  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      const result = await curlGet(url);

      if (result.status >= 200 && result.status < 300) {
        return result;
      }

      if (
        (result.status === 429 || result.status >= 500) &&
        attempt < retries
      ) {
        await sleep(Math.min(2000 * 2 ** attempt, 15_000));
        continue;
      }

      console.error(`DEV.to request failed (${result.status}) for ${url}`);
      return result;
    } catch (error) {
      if (attempt === retries) {
        console.error(`Error fetching "${url}":`, error);
        return null;
      }

      await sleep(Math.min(2000 * 2 ** attempt, 15_000));
    }
  }

  return null;
}

async function fetchDevToArticleBySlug(
  slug: string,
): Promise<DevToArticle | null> {
  const response = await fetchWithRetry(
    `${DEV_TO_API_BASE}/articles/${DEV_TO_USERNAME}/${slug}`,
  );

  if (!response || response.status < 200 || response.status >= 300) {
    return null;
  }

  try {
    const article: DevToArticle = JSON.parse(response.body);
    return article?.slug ? article : null;
  } catch (error) {
    console.error(`Error parsing DEV.to article "${slug}":`, error);
    return null;
  }
}

async function fetchAllDevToArticles(): Promise<DevToArticle[]> {
  const articles: DevToArticle[] = [];
  let page = 1;

  while (page <= DEV_TO_MAX_PAGES) {
    const response = await fetchWithRetry(
      `${DEV_TO_API_BASE}/articles?username=${DEV_TO_USERNAME}&per_page=${DEV_TO_PAGE_SIZE}&page=${page}`,
    );

    if (!response || response.status < 200 || response.status >= 300) {
      break;
    }

    try {
      const batch: DevToArticle[] = JSON.parse(response.body);

      if (!Array.isArray(batch) || batch.length === 0) {
        break;
      }

      articles.push(...batch);

      if (batch.length < DEV_TO_PAGE_SIZE) {
        break;
      }

      page += 1;
    } catch (error) {
      console.error(`Error parsing DEV.to articles page ${page}:`, error);
      break;
    }
  }

  return articles;
}

async function getCachedBlogPosts(cacheVersion: number): Promise<BlogPost[]> {
  "use cache";
  void cacheVersion;
  cacheLife({
    stale: 5 * 60,
    revalidate: 6 * 60 * 60,
    expire: 24 * 60 * 60,
  });
  cacheTag(BLOG_POSTS_CACHE_TAG);

  const articles = await fetchAllDevToArticles();

  return articles
    .filter((article) => !article.title.includes("[Boost]"))
    .map((article) => ({
      ...mapDevToArticleToBlogPost(article),
      featured: FEATURED_POST_TITLES.includes(article.title),
    }));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return getCachedBlogPosts(BLOG_POSTS_CACHE_VERSION);
}

export async function getBlogPost(
  slug: string,
): Promise<BlogPostDetail | null> {
  "use cache";
  cacheTag(getBlogPostCacheTag(slug));

  const article = await fetchDevToArticleBySlug(slug);

  if (!article?.body_html && !article?.body_markdown) {
    // New slugs may be requested before DEV.to finishes publishing them.
    cacheLife("minutes");
    return null;
  }

  cacheLife("days");
  return mapDevToArticleToBlogPostDetail(article);
}
