# Course Catalog

Lab 1 for the **Advanced Web Technologies** course — a course catalog built
with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Features

- File-based routing with the Next.js App Router
- Four routes: `/`, `/about`, `/courses`, `/courses/[id]`
- Server Components for data loading (no `useEffect`, no client state)
- One Client Component (`LikeButton`) for interactivity
- Dynamic route `/courses/[id]` with `await params`, `notFound()`, and
  `generateStaticParams`
- `loading.tsx` and `not-found.tsx` for the courses route
- Shared navigation in `app/layout.tsx` via `next/link`

## Data

Mock data lives in `lib/courses.ts` and simulates a backend with a 300 ms
delay (so `loading.tsx` is actually visible). A real FastAPI backend will
replace it in a later lab.

## Run locally

```bash
npm install
npm run dev