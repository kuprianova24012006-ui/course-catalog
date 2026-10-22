"use client";

import { useEffect } from "react";

export default function CoursesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Courses page error:", error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl p-8 text-center">
      <h2 className="mb-4 text-2xl font-bold">
        Could not load courses
      </h2>

      <p className="mb-6 text-gray-600">
        Check that the API is running, then try again.
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
