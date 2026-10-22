import { getCourses } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        Available Courses
      </h1>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            id={course.id}
            title={course.title}
            description={course.description}
            credits={course.credits}
            likes={course.likes}
          />
        ))}
      </div>
    </div>
  );
}
