import { BlogPosts } from "app/components/posts";
import type { Metadata } from "next";
import { baseUrl } from "../sitemap";

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

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
