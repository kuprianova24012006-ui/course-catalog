
"use client";

import { useState } from "react";

type LikeButtonProps = {
  initialLikes: number;
};

export default function LikeButton({
  initialLikes,
}: LikeButtonProps) {
  const [likes, setLikes] = useState<number>(initialLikes);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="rounded-lg bg-red-100 px-5 py-3 font-semibold text-red-700 hover:bg-red-200"
    >
      ❤️ {likes}
    </button>
  );
}
