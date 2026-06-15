import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono, Fira_Code } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { BackgroundParticles } from "@/components/layout/background-particles"
import { ResourceHints } from "@/components/layout/resource-hints"
import { Toaster } from "@/components/ui/toaster"
import { LanguageProvider } from "@/lib/contexts/language-context"
import "./globals.css"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  preload: true,
})
const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Igor Cardoso | Software Engineer",
  description:
    "Especialista em React.js, Next.js e Automação de Processos. Transformo estratégias de marketing em software escalável e de alta performance.",
  icons: {
    icon: "/icon.svg",
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
        <ResourceHints />
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
