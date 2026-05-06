import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./learn.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-learn",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Learn to Code with Arham | AI-Integrated Coding Classes",
  description:
    "Project-based coding classes for kids and teens. Build real games, websites, and AI projects from day one. Free trial available. $88/month — 40% off launch price.",
  keywords: [
    "coding classes for kids",
    "learn to code",
    "AI coding classes",
    "kids programming",
    "coding instructor",
    "Arham Hameed coding",
    "online coding classes",
    "Python for kids",
    "JavaScript classes",
    "Scratch programming",
    "San Francisco coding tutor",
  ],
  authors: [{ name: "Arham Hameed" }],
  openGraph: {
    title: "Learn to Code with Arham | AI-Integrated Coding Classes",
    description:
      "No boring theory. No pointless drills. Students build real projects from day one — games, websites, and AI apps they can actually show off.",
    url: "https://arhamhameed.xyz/learn",
    siteName: "Arham Hameed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn to Code with Arham | AI-Integrated Coding Classes",
    description:
      "No boring theory. No pointless drills. Students build real projects from day one — games, websites, and AI apps they can actually show off.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <div className={nunito.variable}>{children}</div>;
}
