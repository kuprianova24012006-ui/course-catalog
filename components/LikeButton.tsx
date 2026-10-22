"use client";

import { useState } from "react";

type LikeButtonProps = {
  courseId: string;
  initialLikes: number;
};

export default function LikeButton({
  courseId,
  initialLikes,
}: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [error, setError] = useState("");

  async function handleLike() {
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("API URL не настроен");
      }

      const response = await fetch(
        `${apiUrl}/courses/${courseId}/like`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const course = await response.json();
      setLikes(course.likes);
    } catch {
      setError("Не удалось поставить лайк. Попробуй ещё раз.");
    }
  }

  return (
    <div>
      <button
        onClick={handleLike}
        className="rounded-lg bg-red-100 px-5 py-3 font-semibold text-red-700 hover:bg-red-200"
      >
        ❤️ {likes}
      </button>

      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}
