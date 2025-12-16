import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getBlogPosts } from "app/blog/utils";
import { baseUrl } from "app/sitemap";
import React, { Suspense } from "react";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  let post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    datePublished: publishedTime,
    seoDescription: description,
    cover,
  } = post.metadata;
  let ogImage = cover ? `${cover}` : `/og?title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

const ImageWithSuspense = React.lazy(() => import("next/image"));

export default async function Blog({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const imageSrc = post.metadata.cover
    ? `${post.metadata.cover}`
    : "/default-image-path.jpg";

  const tags = post.metadata.tags?.split(",").map((tag) => tag.trim());

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.datePublished,
            dateModified: post.metadata.datePublished,
            description: post.metadata.seoDescription,
            image: imageSrc,
            url: `${baseUrl}/blog/${slug}`,
            author: {
              "@type": "Person",
              name: "Arindam Majumder",
            },
          }),
        }}
      />
      <Suspense fallback={<div>Loading image...</div>}>
        <ImageWithSuspense
          src={imageSrc}
          alt={post.metadata.title}
          layout="responsive"
          width={700}
          height={365}
        />
      </Suspense>
      <h1 className="title pt-10 font-semibold text-2xl tracking-tighter">
        {post.metadata.title}
      </h1>

      <div className="flex justify-between items-center mt-2 mb-2 text-sm">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.datePublished)}
          </p>
        </Suspense>
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags?.map((tag) => (
          <span
            key={tag}
            className="text-xs border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 px-2 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
