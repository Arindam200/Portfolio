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
  tag_list: string[] | string;
  tags: string[] | string;
  body_markdown?: string;
  body_html?: string;
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
  id: number;
  slug: string;
  title: string;
  datePublished: string;
  description: string;
  coverImage: string | null;
  tags: string[];
  featured?: boolean;
  externalUrl: string;
}

export interface BlogPostDetail extends BlogPost {
  content: string;
  contentHtml: string;
  readingTimeMinutes: number;
}

export function getBlogPostPath(slug: string): string {
  return `/blog/${slug}`;
}

export function formatDate(date: string, includeRelative = true): string {
  const isoDate = date.includes("T") ? date : `${date}T00:00:00Z`;
  const targetDate = new Date(isoDate);

  const fullDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(targetDate);

  if (!includeRelative) {
    return fullDate;
  }

  const currentDate = new Date();
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

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

  return `${fullDate} (${formattedDate})`;
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

function normalizeTags(article: DevToArticle): string[] {
  if (Array.isArray(article.tag_list)) {
    return article.tag_list;
  }

  if (typeof article.tag_list === "string" && article.tag_list.length > 0) {
    return article.tag_list.split(",").map((tag) => tag.trim());
  }

  if (Array.isArray(article.tags)) {
    return article.tags;
  }

  return [];
}

export function mapDevToArticleToBlogPost(article: DevToArticle): BlogPost {
  return {
    id: article.id,
    slug: article.slug,
    title: article.title,
    datePublished: article.published_at,
    description: article.description,
    coverImage: article.cover_image,
    tags: normalizeTags(article),
    externalUrl: article.url,
  };
}

export function mapDevToArticleToBlogPostDetail(
  article: DevToArticle,
): BlogPostDetail {
  return {
    ...mapDevToArticleToBlogPost(article),
    content: article.body_markdown || "",
    contentHtml: article.body_html || "",
    readingTimeMinutes: article.reading_time_minutes,
  };
}
