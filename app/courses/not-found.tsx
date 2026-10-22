import Link from "next/link";

export default function CourseNotFound() {
  return (
    <div className="p-8 text-center">
      <h1 className="mb-4 text-3xl font-bold">
        Course not found
      </h1>

      <p className="mb-4">
        Sorry, this course does not exist.
      </p>

      <Link
        href="/courses"
        className="text-blue-600 underline"
      >
        Back to Courses
      </Link>
    </div>
  );
}
