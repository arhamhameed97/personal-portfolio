import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arham Hameed | Full-Stack Developer & AI/ML Enthusiast",
  description: "Full-stack developer specializing in building scalable web applications with React, Next.js, and AI/ML. Based in San Francisco, CA.",
  keywords: ["Arham Hameed", "Full-Stack Developer", "AI/ML", "React", "Next.js", "TypeScript", "San Francisco"],
  authors: [{ name: "Arham Hameed" }],
  openGraph: {
    title: "Arham Hameed | Full-Stack Developer",
    description: "Full-stack developer specializing in building scalable web applications with React, Next.js, and AI/ML.",
    url: "https://arhamhameed.com",
    siteName: "Arham Hameed Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Hameed | Full-Stack Developer",
    description: "Full-stack developer specializing in building scalable web applications with React, Next.js, and AI/ML.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
