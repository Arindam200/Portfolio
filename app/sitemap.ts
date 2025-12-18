import { getBlogPosts } from "app/blog/utils";

export const baseUrl = "https://www.arindammajumder.com";

export default async function sitemap() {
  const posts = await getBlogPosts();

  let blogs = posts.map((post) => ({
    url: post.url, // Use DEV.to URL directly
    lastModified: post.datePublished,
  }));

  let routes = [
    "",
    "/work",
    "/blog",
    "/testimonials",
    "/contact-me",
    "/agency",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
