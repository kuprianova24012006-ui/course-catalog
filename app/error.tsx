"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-60 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-2xl font-bold">
        Something went wrong
      </h1>

      <p className="text-gray-600">
        An error occurred while loading the page.
      </p>

      <button
        onClick={() => reset()}
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}
