import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from "./data";
import { searchBlogPosts } from "./types";

const POSTS_PER_PAGE = 30;

export async function BlogPostsSection({
  query,
  page,
}: {
  query: string;
  page: number;
}) {
  const posts = await getBlogPosts();

  if (!Array.isArray(posts) || posts.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          No blog posts available at the moment.
        </p>
      </div>
    );
  }

  const sortedPosts = [...posts].sort(
    (a, b) =>
      new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime(),
  );

  const filteredPosts = searchBlogPosts(sortedPosts, query);
  const featuredPosts = filteredPosts.filter((post) => post.featured);
  const normalPosts = filteredPosts.filter((post) => !post.featured);

  if (filteredPosts.length === 0) {
    return (
      <div className="mt-8 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          {query
            ? `No articles found matching "${query}".`
            : "No blog posts available at the moment."}
        </p>
      </div>
    );
  }

  const visibleNormalPosts = normalPosts.slice(0, page * POSTS_PER_PAGE);
  const nextPageHref =
    visibleNormalPosts.length < normalPosts.length
      ? `/blog?${new URLSearchParams({
          ...(query ? { query } : {}),
          page: String(page + 1),
        }).toString()}`
      : undefined;

  return (
    <>
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="mb-6 text-xl font-semibold tracking-tighter">
            Featured Posts
          </h2>
          <BlogPosts
            key={query}
            posts={featuredPosts}
            query={query}
            totalPosts={featuredPosts.length}
            hideResultsCount
            variant="featured"
          />
        </div>
      )}
      {normalPosts.length > 0 && (
        <div>
          {featuredPosts.length > 0 && (
            <>
              <div className="my-8 border-t border-neutral-200 dark:border-neutral-700" />
              <h2 className="mb-6 text-xl font-semibold tracking-tighter">
                All Posts
              </h2>
            </>
          )}
          <BlogPosts
            key={`${query}-${page}`}
            posts={visibleNormalPosts}
            query={query}
            totalPosts={normalPosts.length}
            nextPageHref={nextPageHref}
          />
        </div>
      )}
    </>
  );
}
