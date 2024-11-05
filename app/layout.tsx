import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from 'nuqs/adapters/next/app'

export const metadata: Metadata = {
  title: "Exploring Nuqs",
  description: "Just exploring nuqs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full w-full">
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
