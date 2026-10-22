"use client";

import { useState } from "react";

type EnrollFormProps = {
  courseId: string;
};

export default function EnrollForm({ courseId }: EnrollFormProps) {
  const [studentName, setStudentName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      if (!apiUrl) {
        throw new Error("API URL не настроен");
      }

      const response = await fetch(`${apiUrl}/enrollments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          courseId,
          studentName: studentName.trim(),
        }),
      });

      if (!response.ok) {
        if (response.status === 422) {
          throw new Error("Проверь имя: введи минимум 2 символа.");
        }

        if (response.status === 404) {
          throw new Error("Курс не найден.");
        }

        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      setMessage("Запись успешно создана!");
      setStudentName("");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Не удалось отправить заявку."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-8 space-y-4 border-t pt-6"
    >
      <h2 className="text-xl font-bold">Записаться на курс</h2>

      <label className="block">
        <span className="mb-1 block">Имя студента</span>
        <input
          type="text"
          value={studentName}
          onChange={(event) => setStudentName(event.target.value)}
          minLength={2}
          required
          className="w-full rounded-lg border px-4 py-3"
          placeholder="Введите имя"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Отправка..." : "Записаться"}
      </button>

      {message && <p className="text-green-700">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  );
}
