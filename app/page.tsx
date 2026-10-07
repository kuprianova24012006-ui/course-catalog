import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Course Catalog</h1>
      <p>Welcome to the course catalog.</p>
      <p>
        <Link href="/courses" className="text-blue-600 hover:underline">
          Browse courses →
        </Link>
      </p>
    </>
  );
}