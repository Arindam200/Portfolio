"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { formatDate, getBlogPostPath, type BlogPost } from "app/blog/types";
import { useState } from "react";

export function BlogPosts({
  posts,
  query,
  totalPosts,
  nextPageHref,
  hideResultsCount = false,
  variant = "default",
}: {
  posts: BlogPost[];
  query: string;
  totalPosts: number;
  nextPageHref?: string;
  hideResultsCount?: boolean;
  variant?: "default" | "featured";
}) {
  if (posts.length === 0) {
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
      {query && totalPosts > 0 && (
        <div className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
          Found {totalPosts} article{totalPosts !== 1 ? "s" : ""} matching "
          {query}"
        </div>
      )}

      <div>
        {posts.map((post) => (
          <BlogPostLink
            key={post.slug}
            post={post}
            query={query}
            variant={variant}
            highlightText={highlightText}
          />
        ))}
      </div>

      {nextPageHref && (
        <div className="mt-8 flex justify-center">
          <Link
            href={nextPageHref}
            className="inline-flex cursor-pointer items-center justify-center rounded border border-neutral-200 bg-neutral-50 px-4 py-2 text-sm leading-4 text-neutral-900 transition-colors hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 dark:hover:bg-neutral-700"
          >
            Load More ({totalPosts - posts.length} remaining)
          </Link>
        </div>
      )}

      {!hideResultsCount && (
        <div className="mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400">
          Showing {posts.length} of {totalPosts} articles
        </div>
      )}
    </div>
  );
}

function BlogPostLink({
  post,
  query,
  variant,
  highlightText,
}: {
  post: BlogPost;
  query: string;
  variant: "default" | "featured";
  highlightText: (text: string, searchQuery: string) => ReactNode;
}) {
  const [shouldPrefetch, setShouldPrefetch] = useState(false);

  return (
    <Link
      href={getBlogPostPath(post.slug)}
      prefetch={shouldPrefetch ? null : false}
      onMouseEnter={() => setShouldPrefetch(true)}
      onFocus={() => setShouldPrefetch(true)}
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
  );
}
