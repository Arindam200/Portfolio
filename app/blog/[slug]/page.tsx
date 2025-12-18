import { redirect } from "next/navigation";
import { getBlogPosts } from "app/blog/utils";

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPosts();

  // Try to find the article by slug and redirect to DEV.to
  const post = posts.find((post) => {
    // Extract slug from DEV.to URL (format: https://dev.to/username/slug-xxxx)
    const urlSlug = post.url
      .split("/")
      .pop()
      ?.split("-")
      .slice(0, -1)
      .join("-");
    return urlSlug === slug;
  });

  if (post) {
    redirect(post.url);
  }

  // If not found, redirect to blog listing
  redirect("/blog");
}
