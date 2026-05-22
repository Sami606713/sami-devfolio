import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Analytics } from "@vercel/analytics/react";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://samiullah.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Samiullah — ML Engineer & AI Developer",
    template: "%s | Samiullah",
  },
  description:
    "ML Engineer & AI Developer specializing in LLMs, RAG systems, MLOps, and full-stack AI products. Available for freelance & remote work.",
  keywords: [
    "ML Engineer", "AI Developer", "LLM", "MLOps", "RAG", "LangChain",
    "LangGraph", "Python", "FastAPI", "Next.js", "Pakistan", "Freelance AI",
  ],
  authors: [{ name: "Samiullah" }],
  openGraph: {
    title: "Samiullah — ML Engineer & AI Developer",
    description:
      "I build AI systems that go to production — from model to deployment to product. LLMs, RAG, MLOps, AI Agents.",
    url: siteUrl,
    siteName: "Samiullah Portfolio",
    type: "website",
    images: [
      {
        url: "/branding/professional_profile.png",
        width: 1024,
        height: 1024,
        alt: "Samiullah — ML Engineer & AI Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samiullah — ML Engineer & AI Developer",
    description: "I build AI systems that go to production.",
    images: ["/branding/professional_profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden`}>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
