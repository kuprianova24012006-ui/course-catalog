import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({
  id,
  title,
  description,
  credits,
  likes,
}: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`}>
      <article>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>
          Credits: {credits} · ❤️ {likes}
        </p>
      </article>
    </Link>
  );
}