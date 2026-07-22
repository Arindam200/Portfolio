import Image from "next/image";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getBlogPost } from "app/blog/data";
import { sanitizeDevToMarkdown } from "app/blog/markdown";
import { formatDate } from "app/blog/types";
import { BlogPostBody } from "./blog-post-body";

export async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <h1 className="title mb-2 text-2xl font-medium tracking-tighter">
        {post.title}
      </h1>
      <p className="mb-8 text-sm text-neutral-500 dark:text-neutral-400">
        {formatDate(post.datePublished, false)}
        {post.readingTimeMinutes > 0
          ? ` · ${post.readingTimeMinutes} min read`
          : ""}
      </p>

      {post.coverImage && (
        <div className="relative mb-8 aspect-[50/21] w-full overflow-hidden rounded border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
          <Image
            src={post.coverImage}
            alt={`${post.title} cover image`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain"
          />
        </div>
      )}

      <div className="prose prose-neutral dark:prose-invert">
        {post.contentHtml ? (
          <BlogPostBody html={post.contentHtml} />
        ) : (
          <CustomMDX source={sanitizeDevToMarkdown(post.content)} />
        )}
      </div>

      {post.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-neutral-200 px-2.5 py-1 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <p className="mt-12 text-sm text-neutral-500 dark:text-neutral-400">
        Also published on{" "}
        <a
          href={post.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          DEV.to
        </a>
        .
      </p>
    </article>
  );
}
