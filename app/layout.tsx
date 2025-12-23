import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { BackgroundParticles } from "@/components/layout/background-particles"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/lib/contexts/language-context"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Igor Cardoso | Engenheiro de Software",
  description:
    "Portfólio profissional de Igor Cardoso - Engenheiro de Software especializado em React.js, Next.js & Node.js. Master Resume e projetos desenvolvidos.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${jetbrainsMono.className} antialiased`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            <BackgroundParticles />
            {children}
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
