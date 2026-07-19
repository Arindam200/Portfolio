import { Suspense } from "react";
import type { Metadata } from "next";
import { getBlogPost, getBlogPosts } from "app/blog/data";
import { baseUrl } from "app/sitemap";
import { BlogPostContent } from "./blog-post-content";
import BlogPostLoading from "./loading";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${baseUrl}/blog/${post.slug}`,
      type: "article",
      publishedTime: post.datePublished,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      title: post.title,
      description: post.description,
      card: "summary_large_image",
    },
  };
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<BlogPostLoading />}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}
