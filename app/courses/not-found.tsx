import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Course not found</h1>
      <p>The course you are looking for does not exist.</p>
      <Link href="/courses">← Back to all courses</Link>
    </main>
  );
}