import { BlogPostsSection } from "./blog-posts-section";

export async function BlogList({
  searchParams,
}: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";
  const page = Number.parseInt(resolvedSearchParams?.page || "1", 10);

  return (
    <BlogPostsSection
      query={query}
      page={Number.isFinite(page) && page > 0 ? page : 1}
    />
  );
}
