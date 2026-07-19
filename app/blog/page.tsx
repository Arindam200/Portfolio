import type { Metadata } from "next";
import { Suspense } from "react";
import { baseUrl } from "../sitemap";
import Searchbar from "app/components/searchbar";
import { BlogList } from "./blog-list";
import BlogLoading from "./loading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my blog.",
  openGraph: {
    title: "Blog | Arindam",
    description: "Blogs of Arindam Majumder.",
    url: baseUrl + "/blog",
    siteName: "Arindam Majumder",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Blog | Arindam",
    card: "summary_large_image",
    description: "Blogs of Arindam Majumder.",
  },
};

// TODO(runtime-prefetch): assess with the user (prefetch = 'allow-runtime')
function SearchFallback() {
  return (
    <div className="mb-4 h-10 w-full animate-pulse rounded border border-neutral-200 bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800" />
  );
}

export default function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">My Blog</h1>
      <Suspense fallback={<SearchFallback />}>
        <Searchbar />
      </Suspense>
      <Suspense fallback={<BlogLoading />}>
        <BlogList searchParams={searchParams} />
      </Suspense>
    </section>
  );
}
