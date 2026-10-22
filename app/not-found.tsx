import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-60 flex-col items-center justify-center gap-4 p-8">
      <h1 className="text-3xl font-bold">404 — Course not found</h1>

      <p className="text-gray-600">
        The page or course you are looking for does not exist.
      </p>

      <Link
        href="/courses"
        className="rounded-lg bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
      >
        Back to courses
      </Link>
    </div>
  );
}
