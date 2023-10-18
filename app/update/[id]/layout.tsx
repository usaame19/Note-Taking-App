import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "update note ",
  description:
    "update note",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
