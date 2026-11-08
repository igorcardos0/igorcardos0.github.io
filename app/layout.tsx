import type { Metadata, Viewport } from "next";
import { Geist_Mono, Homemade_Apple, Inter } from "next/font/google";
import "./globals.css";

const sans = Inter({ variable: "--font-sans", subsets: ["latin"], weight: ["300", "400", "500"] });
const mono = Geist_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "500"] });
const hand = Homemade_Apple({ variable: "--font-hand", subsets: ["latin"], weight: "400" });
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://igorcardos0.github.io";
const title = "Igor de Souza Cardoso | Engenheiro de Software e IA";
const shareTitle = "Igor Cardoso — Engenharia de software com IA no núcleo";
const shareDescription = "Engenheiro de software full stack. Mais de 40 projetos desde 2019: back-end, APIs, pagamentos e agentes de IA em produção.";
const ogAlt = "Igor de Souza Cardoso — Engenheiro de Software Full Stack. Engenharia de software com IA no núcleo.";
const description = "Engenheiro de software full stack. Arquitetura de software e de IA, back-end, APIs e sistemas em produção. Mais de 40 projetos desde 2019.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  applicationName: "Igor de Souza Cardoso · Portfólio",
  authors: [{ name: "Igor de Souza Cardoso", url: siteUrl }],
  creator: "Igor de Souza Cardoso",
  publisher: "Igor de Souza Cardoso",
  category: "technology",
  keywords: [
    "Igor de Souza Cardoso", "Igor Cardoso", "Engenheiro de Software", "Engenheiro de Software Full Stack",
    "Software Engineer", "Full Stack Engineer", "Arquitetura de Software",
    "Arquitetura de IA", "Agentes de IA", "LLM", "RAG", "Back-end", "APIs", "NestJS", "Node.js", "Next.js",
    "React", "React Native", "TypeScript", "Python", "Laravel", "PostgreSQL", "Docker", "AWS",
    "Sistemas de pagamento", "Indaiatuba", "São Paulo",
  ],
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/", "x-default": "/" },
  },
  openGraph: {
    type: "profile",
    locale: "pt_BR",
    url: "/",
    title: shareTitle,
    description: shareDescription,
    siteName: "Igor de Souza Cardoso · Portfólio",
    firstName: "Igor",
    lastName: "de Souza Cardoso",
    username: "igor-s-cardoso",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: ogAlt, type: "image/png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: shareTitle,
    description: shareDescription,
    images: [{ url: "/opengraph-image.png", alt: ogAlt }],
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
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: "Igor de Souza Cardoso",
    alternateName: "Igor Cardoso",
    url: siteUrl,
    image: `${siteUrl}/images/igor.webp`,
    jobTitle: "Engenheiro de Software Full Stack",
    description,
    worksFor: { "@type": "Organization", name: "LUSA Brasil", url: "https://lusabrasil.com" },
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "UniMAX — Centro Universitário Max Planck" },
      { "@type": "EducationalOrganization", name: "Trybe" },
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Engenheiro de Software",
      skills: "Arquitetura de software, arquitetura de IA, back-end, APIs, sistemas de pagamento, agentes de IA",
    },
    address: { "@type": "PostalAddress", addressLocality: "Indaiatuba", addressRegion: "SP", addressCountry: "BR" },
    knowsLanguage: ["pt-BR", "en"],
    sameAs: ["https://www.linkedin.com/in/igor-s-cardoso", "https://github.com/igorcardos0"],
    knowsAbout: [
      "Software architecture", "AI architecture", "AI agents", "LLMs", "RAG", "Back-end development", "APIs",
      "Payment systems", "NestJS", "Node.js", "Next.js", "React", "React Native", "TypeScript", "Python",
      "Laravel", "PostgreSQL", "Docker", "AWS",
    ],
  };
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      person,
      { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "Igor de Souza Cardoso · Portfólio", inLanguage: "pt-BR", publisher: { "@id": `${siteUrl}/#person` } },
      { "@type": "ProfilePage", "@id": `${siteUrl}/#profile`, url: siteUrl, name: title, description, inLanguage: "pt-BR", isPartOf: { "@id": `${siteUrl}/#website` }, mainEntity: { "@id": `${siteUrl}/#person` }, primaryImageOfPage: `${siteUrl}/opengraph-image.png` },
    ],
  };

  return (
    <html lang="pt-BR" className={`${sans.variable} ${mono.variable} ${hand.variable}`}>
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
