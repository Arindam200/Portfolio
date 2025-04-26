export function BlogSkeleton() {
  return (
    <div className="mt-6 animate-pulse space-y-4">
      <div className="h-6 bg-neutral-200 rounded dark:bg-neutral-700 w-3/4"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-5/6"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-4/5"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-3/4"></div>
    </div>
  );
}

export function ArticleSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-neutral-200 rounded dark:bg-neutral-700 w-2/3"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-4/5"></div>
      <div className="h-64 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-5/6"></div>
      <div className="h-4 bg-neutral-200 rounded dark:bg-neutral-700 w-full"></div>
    </div>
  );
}
