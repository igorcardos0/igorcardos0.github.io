"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-items-center">
          <AnimateOnScroll animation="slide-right" className="w-full">
            <div className="mb-8">
              <AnimateOnScroll animation="fade" delay={100}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 whitespace-nowrap">Igor Cardoso</h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={200}>
                <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-6 whitespace-nowrap">{t("hero.title")}</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={300}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("hero.description")}
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade" delay={400}>
              <div className="flex gap-4 mt-8 flex-wrap">
              <a
                href="https://github.com/igorcardos0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-s-cardoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="#contato"
                className="p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label="Contato"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="/curriculo.pdf"
                download
                className="flex items-center gap-2 px-4 py-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label="Download Currículo"
              >
                <Download className="h-5 w-5" />
                <span className="text-sm font-medium">{t("hero.resume")}</span>
              </a>
              </div>
            </AnimateOnScroll>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" delay={200} className="flex justify-center items-center w-full">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-lg overflow-hidden border-2 border-primary">
              <Image
                src="/profile.png"
                alt="Igor Cardoso"
                width={384}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
