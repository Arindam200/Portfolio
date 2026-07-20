import { cacheLife } from "next/cache";
import { getBlogPosts } from "app/blog/data";
import { getBlogPostPath } from "app/blog/types";

export const baseUrl = "https://arindamm.dev";

export default async function sitemap() {
  "use cache";
  cacheLife("days");

  const posts = await getBlogPosts();

  const blogs = posts.map((post) => ({
    url: `${baseUrl}${getBlogPostPath(post.slug)}`,
    lastModified: post.datePublished,
  }));

  const routes = [
    "",
    "/work",
    "/blog",
    "/videos",
    "/projects",
    "/events",
    "/collaborations",
    "/contact-me",
    "/agency",
    "/resume",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: posts[0]?.datePublished ?? "2026-01-01",
  }));

  return [...routes, ...blogs];
}
