import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Note Taking App",
  description:
    "A user-friendly note-taking application that helps you stay organized and capture your ideas, tasks, and important information. With our app, you can create, edit, and organize your notes effortlessly, making it easy to manage your thoughts and tasks on the go.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
