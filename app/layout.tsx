import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body>
        
<nav className="flex flex-wrap gap-4 border-b border-slate-200 px-6 py-4">
  <Link
    href="/"
    className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-blue-600"
  >
    Home
  </Link>

  <Link
    href="/courses"
    className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-blue-600"
  >
    Courses
  </Link>

  <Link
    href="/about"
    className="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-blue-600"
  >
    About
  </Link>
</nav>

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}