"use client";

import { Link } from "next-view-transitions";
import {
  formatDate,
  getBlogPostPath,
  type BlogPost,
} from "app/blog/types";
import { useMemo, useState } from "react";

const POSTS_PER_PAGE = 30;
const INITIAL_POSTS = 30;

export function BlogPosts({
  posts,
  query,
  hideResultsCount = false,
  variant = "default",
}: {
  posts: BlogPost[];
  query: string;
  hideResultsCount?: boolean;
  variant?: "default" | "featured";
}) {
  const [itemsToShow, setItemsToShow] = useState(INITIAL_POSTS);

  const filteredBlogs = useMemo(() => {
    if (!query) return posts;

    const lowerQuery = query.toLowerCase();
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(lowerQuery) ||
        post.description.toLowerCase().includes(lowerQuery) ||
        post.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );
    });
  }, [posts, query]);

  const displayedBlogs = filteredBlogs.slice(0, itemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prev) =>
      Math.min(prev + POSTS_PER_PAGE, filteredBlogs.length),
    );
  };

  if (filteredBlogs.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-neutral-600 dark:text-neutral-400">
          {query
            ? `No articles found matching "${query}".`
            : "No articles found."}
        </p>
      </div>
    );
  }

  const highlightText = (text: string, searchQuery: string) => {
    if (!searchQuery) return text;
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark
          key={i}
          className="rounded bg-yellow-200 px-0.5 dark:bg-yellow-900/30"
        >
          {part}
        </mark>
      ) : (
        part
      ),
    );
  };

  return (
    <div>
      {query && filteredBlogs.length > 0 && (
        <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Found {filteredBlogs.length} article
          {filteredBlogs.length !== 1 ? "s" : ""} matching "{query}"
        </div>
      )}

      <div>
        {displayedBlogs.map((post) => (
          <Link
            key={post.slug}
            href={getBlogPostPath(post.slug)}
            prefetch={false}
            className={`group mb-6 flex flex-row items-center gap-2 transition-opacity hover:opacity-80 ${
              variant === "featured"
                ? "rounded border border-neutral-200 bg-neutral-50/50 p-4 dark:border-neutral-800 dark:bg-neutral-900/50"
                : ""
            }`}
            aria-label={`Read article: ${post.title}`}
          >
            <p className="w-[110px] shrink-0 text-sm tabular-nums text-neutral-600 dark:text-neutral-400 sm:w-[110px]">
              {formatDate(post.datePublished, false)}
            </p>
            <p
              className={`min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap tracking-tight text-neutral-900 dark:text-neutral-100 ${
                variant === "featured"
                  ? "text-base font-medium"
                  : "text-sm sm:text-base"
              }`}
            >
              {highlightText(post.title, query)}
            </p>
          </Link>
        ))}
      </div>

      {itemsToShow < filteredBlogs.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex cursor-pointer items-center justify-center rounded border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm leading-4 text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
          >
            Load More ({filteredBlogs.length - itemsToShow} remaining)
          </button>
        </div>
      )}

      {!hideResultsCount && (
        <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Showing {displayedBlogs.length} of {filteredBlogs.length} articles
        </div>
      )}
    </div>
  );
}
