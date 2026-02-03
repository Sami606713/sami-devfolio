import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Samiullah - ML Engineer & Full-Stack AI Developer",
  description: "Portfolio of Samiullah, a Machine Learning Engineer specializing in MLOps, Python, PyTorch, LangChain, and AI solutions. Explore my projects and get in touch.",
  keywords: ["Machine Learning", "AI", "MLOps", "Python", "PyTorch", "LangChain", "Data Science", "Portfolio"],
  authors: [{ name: "Samiullah" }],
  openGraph: {
    title: "Samiullah - ML Engineer & Full-Stack AI Developer",
    description: "Portfolio showcasing ML and AI projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-grid" />
        <div className="bg-glow" />
        {children}
      </body>
    </html>
  );
}
