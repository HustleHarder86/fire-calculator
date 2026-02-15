import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FIRE Calculator - Coast FIRE, Barista FIRE & Retirement Planning Tools",
  description: "Free FIRE calculator with Coast FIRE, Barista FIRE, Traditional FIRE projections, safe withdrawal rate scenarios, and 401k/IRA contribution limits for 2025/2026. Plan your early retirement today!",
  keywords: [
    "fire calculator",
    "coast fire calculator",
    "barista fire calculator",
    "401k contribution limit 2025",
    "401k contribution limit 2026",
    "roth ira calculator",
    "safe withdrawal rate calculator",
    "early retirement calculator",
    "financial independence calculator",
    "retirement planning",
    "4 percent rule",
  ],
  authors: [{ name: "FIRE Calculator" }],
  openGraph: {
    title: "FIRE Calculator - Plan Your Path to Financial Independence",
    description: "Calculate your FIRE number, Coast FIRE timeline, and safe withdrawal rates. Free tools for Traditional, Coast, Barista, Lean, and Fat FIRE strategies.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
