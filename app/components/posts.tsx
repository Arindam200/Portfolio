import { Link } from "next-view-transitions";
import { formatDate, getBlogPosts, searchBlogPosts } from "app/blog/utils";

export function BlogPosts({ query }: { query: string }) {
  let allBlogs = getBlogPosts();

  let filteredBlogs = query ? searchBlogPosts(query) : allBlogs;

  return (
    <div>
      {filteredBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.datePublished) >
            new Date(b.metadata.datePublished)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[145px] tabular-nums">
                {formatDate(post.metadata.datePublished, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
