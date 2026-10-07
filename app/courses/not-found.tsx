import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Course not found</h1>
      <p>The course you are looking for does not exist.</p>
      <Link href="/courses" className="text-blue-600 hover:underline">
        ← Back to all courses
      </Link>
    </>
  );
}