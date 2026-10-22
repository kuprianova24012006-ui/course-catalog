"use client";

import { useState } from "react";
import useSWR from "swr";

type Course = {
  id: string;
  title: string;
  description: string;
  credits: number;
  isElective: boolean;
  likes: number;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function ElectiveFilter() {
  const [onlyElectives, setOnlyElectives] = useState(false);

  const url = `${API_URL}/courses${
    onlyElectives ? "?is_elective=true" : ""
  }`;

  const fetcher = async (url: string): Promise<Course[]> => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка API: ${response.status}`);
    }

    return response.json();
  };

  const { data, error, isLoading } = useSWR<Course[]>(url, fetcher);

  return (
    <section className="space-y-6">
      <label className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={onlyElectives}
          onChange={(event) => setOnlyElectives(event.target.checked)}
          className="h-4 w-4"
        />
        Показывать только факультативные курсы
      </label>

      {isLoading && <p>Загрузка курсов...</p>}

      {error && (
        <p className="text-red-600">
          Не удалось загрузить курсы. Проверь соединение с API.
        </p>
      )}

      {data && (
        <div className="grid gap-4">
          {data.map((course) => (
            <article
              key={course.id}
              className="rounded-xl border bg-white p-5 shadow-sm"
            >
              <h2 className="text-xl font-bold">{course.title}</h2>
              <p className="mt-2 text-gray-600">
                {course.description}
              </p>
              <p className="mt-3 text-sm">
                Кредиты: {course.credits} · ❤️ {course.likes}
              </p>
            </article>
          ))}

          {data.length === 0 && <p>Курсы не найдены.</p>}
        </div>
      )}
    </section>
  );
}
