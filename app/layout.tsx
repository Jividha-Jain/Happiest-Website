import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Happiest.team | Communities that make life feel more connected",
  description: "Discover communities, join interest-based clubs, attend events, and connect with like-minded people. A clean, premium platform for meaningful communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${font.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-[var(--font-primary)] bg-white text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">{children}</body>
    </html>
  );
}

