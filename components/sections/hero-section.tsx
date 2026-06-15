"use client"

import { Github, Linkedin, Mail, Download, Sparkles } from "lucide-react"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden py-12 md:py-0"
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
          <AnimateOnScroll animation="slide-right" className="w-full order-2 md:order-1">
            <div className="mb-6 md:mb-8 text-center md:text-left">
              <AnimateOnScroll animation="fade" delay={100}>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 break-words">Igor Cardoso</h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={200}>
                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4 md:mb-6 break-words">{t("hero.title")}</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={300}>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                  {t("hero.description")}
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade" delay={400}>
              <div className="flex gap-3 md:gap-4 mt-6 md:mt-8 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/igorcardos0"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label={t("hero.aria.github")}
              >
                <Github className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-s-cardoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 md:p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label={t("hero.aria.linkedin")}
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="#contato"
                className="p-2.5 md:p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer"
                aria-label={t("hero.aria.contact")}
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="/Igor%20de%20Souza%20Cardoso%20-%20Curriculo.pdf"
                download
                className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer text-xs md:text-sm"
                aria-label={t("hero.aria.resume")}
              >
                <Download className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium">{t("hero.resume")}</span>
              </a>
              {/* <a
                href="https://freelancer-navigator.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 transition-colors cursor-pointer text-xs md:text-sm"
                aria-label={t("hero.aria.luciaCta")}
              >
                <Sparkles className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium">{t("hero.luciaCta")}</span>
              </a> */}
              </div>
            </AnimateOnScroll>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" delay={200} className="flex justify-center items-center w-full order-1 md:order-2 mb-6 md:mb-0">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-2 border-primary">
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
