export default function BlogPostLoading() {
  return (
    <article className="animate-pulse">
      <div className="mb-2 h-8 w-3/4 rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="mb-8 h-4 w-40 rounded bg-neutral-200 dark:bg-neutral-800" />
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-4 rounded bg-neutral-200 dark:bg-neutral-800"
          />
        ))}
      </div>
    </article>
  );
}
