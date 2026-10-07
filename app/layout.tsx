import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Course Catalog",
  description: "Advanced Web Technologies course catalog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex gap-4 p-4 border-b border-gray-300">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="/about" className="hover:underline">
            About
          </Link>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}