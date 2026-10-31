import type { Metadata, Viewport } from "next";
import { Gochi_Hand, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });
const display = Inter_Tight({ variable: "--font-display", subsets: ["latin"], weight: ["600", "700", "800", "900"] });
const hand = Gochi_Hand({ variable: "--font-hand", subsets: ["latin"], weight: "400" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://igorcardos0.github.io";
const title = "Igor de Souza Cardoso | Engenheiro de Software Full Stack";
const description = "Portfólio de Igor de Souza Cardoso, engenheiro de software full stack e líder técnico. Arquitetura de software e de IA, back-end, APIs, pagamentos e sistemas em produção com NestJS, Next.js, React Native, Laravel e Python.";

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
    "Igor de Souza Cardoso", "Engenheiro de Software Full Stack", "Software Engineer",
    "Líder Técnico", "Inteligência Artificial", "Agentes de IA", "NestJS", "Next.js",
    "React Native", "Laravel", "Python", "TypeScript", "Pagamentos", "Pix", "AWS", "Indaiatuba",
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
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Igor de Souza Cardoso — Engenheiro de Software Full Stack" }],
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
  themeColor: "#0b0a12",
  colorScheme: "light dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Igor de Souza Cardoso",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    jobTitle: "Engenheiro de Software Full Stack",
    worksFor: { "@type": "Organization", name: "LUSA Brasil", url: "https://lusabrasil.com" },
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
      "NestJS", "Next.js", "React Native", "TypeScript", "Node.js", "Laravel",
      "Python", "PostgreSQL", "AI agents", "LLMs", "Payments", "AWS", "Docker",
    ],
  };

  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable} ${hand.variable}`}>
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
