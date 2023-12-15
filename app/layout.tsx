import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code Snap App",
  description: "このアプリは Next.js を使用した、コードを画像としてアウトプットできるアプリです。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
