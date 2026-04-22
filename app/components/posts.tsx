"use client";

import { formatDate, type BlogPost } from "app/blog/utils";
import { useMemo, useState, useEffect } from "react";

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

  // Reset itemsToShow when query changes
  useEffect(() => {
    setItemsToShow(INITIAL_POSTS);
  }, [query]);

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
    // Escape special regex characters
    const escapedQuery = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const parts = text.split(new RegExp(`(${escapedQuery})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === searchQuery.toLowerCase() ? (
        <mark
          key={i}
          className="bg-yellow-200 dark:bg-yellow-900/30 px-0.5 rounded"
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
      {/* Search Results Info */}
      {query && filteredBlogs.length > 0 && (
        <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Found {filteredBlogs.length} article
          {filteredBlogs.length !== 1 ? "s" : ""} matching "{query}"
        </div>
      )}

      {/* Blog Posts List */}
      <div>
        {displayedBlogs.map((post) => (
          <a
            key={post.url}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group flex flex-row items-center mb-6 hover:opacity-80 transition-opacity gap-2 ${
              variant === "featured"
                ? "p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50"
                : ""
            }`}
            aria-label={`Read article: ${post.title}`}
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:w-[110px] tabular-nums flex-shrink-0">
              {formatDate(post.datePublished, false)}
            </p>
            <p
              className={`text-neutral-900 dark:text-neutral-100 tracking-tight whitespace-nowrap overflow-hidden text-ellipsis flex-1 min-w-0 ${
                variant === "featured"
                  ? "font-medium text-base"
                  : "text-sm sm:text-base"
              }`}
            >
              {highlightText(post.title, query)}
            </p>
          </a>
        ))}
      </div>

      {/* Load More Button */}
      {itemsToShow < filteredBlogs.length && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={handleLoadMore}
            className="justify-center py-2 px-4 border cursor-pointer border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            Load More ({filteredBlogs.length - itemsToShow} remaining)
          </button>
        </div>
      )}

      {/* Results Count */}
      {!hideResultsCount && (
        <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Showing {displayedBlogs.length} of {filteredBlogs.length} articles
        </div>
      )}
    </div>
  );
}
