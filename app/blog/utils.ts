// DEV.to API Types
export interface DevToArticle {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string | null;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string;
  user: {
    name: string;
    username: string;
    twitter_username: string | null;
    github_username: string | null;
    user_id: number;
    website_url: string | null;
    profile_image: string;
    profile_image_90: string;
  };
  flare_tag?: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  } | null;
  organization?: {
    name: string;
    username: string;
    slug: string;
    profile_image: string;
    profile_image_90: string;
  } | null;
}

export interface BlogPost {
  title: string;
  datePublished: string;
  url: string;
  description: string;
  coverImage: string | null;
  tags: string[];
  featured?: boolean;
}

const DEV_TO_API_BASE = "https://dev.to/api";
const DEV_TO_USERNAME = process.env.DEV_TO_USERNAME || "arindam_1729";

// Local list of featured blog post titles
// Add or remove post titles here to feature/unfeature them
const FEATURED_POST_TITLES: string[] = [
  // "How to Fine-Tune and Deploy an Open-Source Model",
  // "Scraping Is Dead. Navigation Is the New API",
  // Example: "My Amazing Blog Post Title"
  // Add your featured post titles here
];

async function fetchDevToArticles(): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `${DEV_TO_API_BASE}/articles?username=${DEV_TO_USERNAME}&per_page=100`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
        headers: {
          "api-key": process.env.DEV_TO_API_KEY || "",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch DEV.to articles: ${response.statusText}`,
      );
    }

    const articles: DevToArticle[] = await response.json();
    return articles;
  } catch (error) {
    console.error("Error fetching DEV.to articles:", error);
    return [];
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const articles = await fetchDevToArticles();

  return articles
    .filter((article) => !article.title.includes("[Boost]"))
    .map((article) => ({
      title: article.title,
      datePublished: article.published_at,
      url: article.url,
      description: article.description,
      coverImage: article.cover_image,
      tags: article.tag_list || [],
      featured: FEATURED_POST_TITLES.includes(article.title),
    }));
}

export function searchBlogPosts(
  articles: BlogPost[],
  query: string,
): BlogPost[] {
  if (!query) return articles;

  const lowerQuery = query.toLowerCase();
  return articles.filter((post) => {
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.description.toLowerCase().includes(lowerQuery) ||
      post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

export function formatDate(date: string, includeRelative = true): string {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedDate})`;
}
