import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist", subsets: ["latin"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"] });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://igorcardos0.github.io";
const title = "Igor de Souza Cardoso | Desenvolvedor Full Stack";
const description = "Portfólio de Igor de Souza Cardoso, Desenvolvedor Full Stack e Software Engineer especializado em React, Next.js, TypeScript, automações, APIs e integrações.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Portfólio Igor Cardoso",
  authors: [{ name: "Igor de Souza Cardoso", url: siteUrl }],
  creator: "Igor de Souza Cardoso",
  publisher: "Igor de Souza Cardoso",
  category: "technology",
  keywords: [
    "Igor de Souza Cardoso", "Desenvolvedor Full Stack", "Software Engineer",
    "Desenvolvedor Frontend", "React", "Next.js", "TypeScript", "Node.js",
    "Python", "n8n", "Automações", "APIs", "Integrações", "Indaiatuba",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/", "x-default": "/" },
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    title,
    description,
    siteName: "Igor Cardoso — Software Engineer",
    firstName: "Igor",
    lastName: "Cardoso",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Igor de Souza Cardoso — Desenvolvedor Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/icon", type: "image/png", sizes: "64x64" }],
    apple: [{ url: "/apple-icon", type: "image/png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Igor de Souza Cardoso",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Desenvolvedor Full Stack",
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Indaiatuba",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/in/igor-s-cardoso",
      "https://github.com/igorcardos0",
    ],
    knowsAbout: [
      "React.js", "Next.js", "TypeScript", "Node.js", "Python",
      "PostgreSQL", "Supabase", "n8n", "APIs REST", "Webhooks",
    ],
  };

  return (
    <html lang="pt-BR" className={`${geist.variable} ${mono.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
