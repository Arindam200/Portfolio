"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p>Something went wrong...Try to refresh and see if it stays or not?</p>
      <button
        className="justify-center py-2 border cursor-pointer border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100"
        onClick={() => reset()}
      />
    </div>
  );
}
