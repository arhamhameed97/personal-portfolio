import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arham Hameed | Software Developer & Financial Analyst",
  description:
    "Operating at the intersection of technology and finance. Full-stack development, financial modeling, and technical education. Based in San Francisco.",
  keywords: [
    "Arham Hameed",
    "Full-Stack Developer",
    "Financial Analyst",
    "Software Engineer",
    "AI/ML",
    "React",
    "Next.js",
    "Financial Modeling",
    "San Francisco",
  ],
  authors: [{ name: "Arham Hameed" }],
  openGraph: {
    title: "Arham Hameed | Where Code Meets Capital",
    description:
      "Full-stack developer and financial analyst building at the intersection of technology and finance.",
    url: "https://arhamhameed.com",
    siteName: "Arham Hameed",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Hameed | Where Code Meets Capital",
    description:
      "Full-stack developer and financial analyst building at the intersection of technology and finance.",
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
      <body
        className={`${inter.variable} ${syne.variable} ${inter.className}`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
