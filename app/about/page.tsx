export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>
        This course catalog was built as part of the Advanced Web Technologies
        course. It showcases a Next.js App Router project with Server and
        Client Components, dynamic routes, and TypeScript typing.
      </p>
      <p>
        The data is currently mocked locally in <code>lib/courses.ts</code> and
        will be replaced by a real FastAPI backend in a later lab.
      </p>
    </main>
  );
}