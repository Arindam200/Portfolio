export default function BlogLoading() {
  return (
    <div className="mt-6 space-y-6 animate-pulse">
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="h-4 w-[110px] rounded bg-neutral-200 dark:bg-neutral-800" />
          <div className="h-4 flex-1 rounded bg-neutral-200 dark:bg-neutral-800" />
        </div>
      ))}
    </div>
  );
}
