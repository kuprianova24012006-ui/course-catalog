
# Course Catalog

Lab 1 for the **Advanced Web Technologies** course — a course catalog built with Next.js 16 (App Router), TypeScript, and Tailwind CSS.

## Features

- File-based routing with the Next.js App Router
- Four routes: `/`, `/about`, `/courses`, and `/courses/[id]`
- Server Components for data loading
- One Client Component (`LikeButton`) for interactivity
- Dynamic routes with `await params`, `notFound()`, and `generateStaticParams`
- Loading UI and a custom not-found page
- Shared navigation in `app/layout.tsx` using `next/link`
- Typed course data and reusable `CourseCard` component

## Data

Mock data lives in `lib/courses.ts` and simulates a backend with a 300 ms delay. A real FastAPI backend will replace it in a later lab.

## Run locally

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To verify the production build, run:

```bash
npm run build
```
