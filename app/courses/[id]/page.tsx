import { notFound } from "next/navigation";
import { getCourse, getCourses } from "@/lib/courses";

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({ id: course.id }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <p>Credits: {course.credits}</p>
      <p>❤️ {course.likes}</p>
    </>
  );
}