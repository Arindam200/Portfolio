import { BlogPosts } from "app/components/posts";
import { getBlogPosts } from "./data";

export async function BlogPostsSection({ query }: { query: string }) {
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

  const featuredPosts = sortedPosts.filter((post) => post.featured);
  const normalPosts = sortedPosts.filter((post) => !post.featured);

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
          <BlogPosts key={query} posts={normalPosts} query={query} />
        </div>
      )}
    </>
  );
}
