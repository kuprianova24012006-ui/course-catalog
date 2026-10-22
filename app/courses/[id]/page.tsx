
import { getCourse, getCourses } from "@/lib/courses";
import { notFound } from "next/navigation";
import LikeButton from "@/components/LikeButton";

type CoursePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  const courses = await getCourses();

  return courses.map((course) => ({
    id: course.id,
  }));
}

export default async function CoursePage({
  params,
}: CoursePageProps) {
  const { id } = await params;
  const course = await getCourse(id);

  if (!course) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-3xl rounded-xl bg-white p-8 shadow">
        <h1 className="mb-4 text-3xl font-bold">
          {course.title}
        </h1>

        <p className="mb-6 text-gray-600">
          {course.description}
        </p>

        <p className="mb-4">
          Credits: {course.credits}
        </p>

        <LikeButton initialLikes={course.likes} />
      </div>
    </div>
  );
}
