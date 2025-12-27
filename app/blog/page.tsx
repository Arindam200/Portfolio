import { BlogPosts } from "app/components/posts";
import type { Metadata } from "next";
import { baseUrl } from "../sitemap";
import Searchbar from "app/components/searchbar";
import { getBlogPosts } from "./utils";

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

export default async function BlogPage({
  searchParams,
}: {
  searchParams?: Promise<{
    query?: string;
  }>;
}) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";
  const posts = await getBlogPosts();

  // Sort posts by date (newest first) on the server side for consistent rendering
  const sortedPosts = [...posts].sort((a, b) => {
    if (new Date(a.datePublished) > new Date(b.datePublished)) {
      return -1;
    }
    return 1;
  });

  // Separate featured and normal posts
  const featuredPosts = sortedPosts.filter((post) => post.featured);
  const normalPosts = sortedPosts.filter((post) => !post.featured);

  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <Searchbar />
      {featuredPosts.length > 0 && (
        <div className="mb-12">
          <h2 className="font-semibold text-xl mb-6 tracking-tighter">
            Featured Posts
          </h2>
          <BlogPosts posts={featuredPosts} query={query} hideResultsCount />
        </div>
      )}
      {normalPosts.length > 0 && (
        <div>
          {featuredPosts.length > 0 && (
            <>
              <div className="border-t border-neutral-200 dark:border-neutral-700 my-8"></div>
              <h2 className="font-semibold text-xl mb-6 tracking-tighter">
                All Posts
              </h2>
            </>
          )}
          <BlogPosts posts={normalPosts} query={query} />
        </div>
      )}
    </section>
  );
}
