import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { cookies } from "next/headers";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Footer } from "@/components/site/Footer";
import { Nav } from "@/components/site/Nav";
import { layers } from "@/components/site/layers";
import { person } from "@/content/site";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

const description =
  "Samiullah is a senior AI engineer. He leads the rext.ai backend at Revnix and architects TheBotLab, a Shopify agent platform.";

export const metadata: Metadata = {
  metadataBase: new URL(person.site),
  title: {
    default: "Samiullah, Senior AI Engineer",
    template: "%s | Samiullah",
  },
  description,
  authors: [{ name: person.name }],
  openGraph: {
    title: "Samiullah, Senior AI Engineer",
    description,
    url: person.site,
    siteName: "Samiullah",
    type: "website",
    images: [{ url: "/visuals/portrait.jpg", width: 848, height: 1216, alt: "Samiullah" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samiullah, Senior AI Engineer",
    description,
    images: ["/visuals/portrait.jpg"],
  },
  robots: { index: true, follow: true },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  const theme = jar.get("theme")?.value === "light" ? "light" : "dark";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    email: person.email,
    url: person.site,
    address: { "@type": "PostalAddress", addressLocality: "Haripur", addressCountry: "PK" },
    sameAs: [person.github, person.linkedin],
  };

  return (
    <html lang="en" className={`${theme} ${geist.variable} ${mono.variable}`}>
      <body className="min-h-[100dvh] antialiased">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:rounded-xl focus:bg-[var(--ink)] focus:px-3 focus:py-2 focus:text-sm focus:text-[var(--ink-text)]"
          style={{ zIndex: layers.skip }}
        >
          Skip to content
        </a>
        <Nav />
        <main id="content">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Analytics />
        <GoogleAnalytics gaId="G-J05E99QEPB" />
      </body>
    </html>
  );
}
