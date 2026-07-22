export const BLOG_POSTS_CACHE_TAG = "blog-posts";

export function getBlogPostCacheTag(slug: string): string {
  return `blog-post:${slug}`;
}
