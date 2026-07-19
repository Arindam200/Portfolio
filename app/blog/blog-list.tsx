import { BlogPostsSection } from "./blog-posts-section";

export async function BlogList({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";

  return <BlogPostsSection query={query} />;
}
