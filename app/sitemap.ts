import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://www.arindammajumder.com";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.datePublished,
  }));

  let routes = [
    "",
    "/work",
    // "/blog",
    "/testimonials",
    "/contact-me",
    "/agency",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
