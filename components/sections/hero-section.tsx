"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const reveal = () => setIsReady(true)
    window.addEventListener("portfolio-loader-finished", reveal)
    const fallback = window.setTimeout(reveal, 2400)
    return () => {
      window.removeEventListener("portfolio-loader-finished", reveal)
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <section
      id="home"
      className={"relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden py-12 md:py-0 " + (isReady ? "hero-ready" : "")}
    >
      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center justify-items-center">
          <AnimateOnScroll animation="slide-right" className="w-full order-2 md:order-1">
            <div className="mb-6 md:mb-8 text-center md:text-left">
              <AnimateOnScroll animation="fade" delay={100}>
                <h1 className="hero-item hero-item-1 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 break-words">Igor Cardoso</h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={200}>
                <h2 className="hero-item hero-item-2 text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary font-semibold mb-4 md:mb-6 break-words">{t("hero.title")}</h2>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade" delay={300}>
                <p className="hero-item hero-item-3 text-base sm:text-lg md:text-xl text-primary font-semibold mb-3">
                  {t("hero.subtitle")}
                </p>
                <p className="hero-item hero-item-4 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                  {t("hero.description")}
                </p>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade" delay={400}>
              <div className="hero-item hero-item-5 flex gap-3 md:gap-4 mt-6 md:mt-8 flex-wrap justify-center md:justify-start">
              <a
                href="https://github.com/igorcardos0"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-control p-2.5 md:p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 cursor-pointer"
                aria-label={t("hero.aria.github")}
              >
                <Github className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/igor-s-cardoso/"
                target="_blank"
                rel="noopener noreferrer"
                className="interactive-control p-2.5 md:p-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 cursor-pointer"
                aria-label={t("hero.aria.linkedin")}
              >
                <Linkedin className="h-5 w-5 md:h-6 md:w-6" />
              </a>
              <a
                href="#contato"
                className="interactive-control flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 cursor-pointer text-xs md:text-sm"
                aria-label={t("hero.aria.contact")}
              >
                <Mail className="h-5 w-5 md:h-6 md:w-6" />
                <span className="font-medium">{t("hero.contact")}</span>
              </a>
              <a
                href="/Igor_Cardoso_Curriculo.pdf"
                download
                className="interactive-control flex items-center gap-2 px-3 md:px-4 py-2 md:py-3 rounded-lg bg-card hover:bg-primary/20 border border-primary/50 cursor-pointer text-xs md:text-sm"
                aria-label={t("hero.aria.resume")}
              >
                <Download className="h-4 w-4 md:h-5 md:w-5" />
                <span className="font-medium">{t("hero.resume")}</span>
              </a>
              </div>
            </AnimateOnScroll>
          </AnimateOnScroll>

          <AnimateOnScroll animation="slide-left" delay={200} className="flex justify-center items-center w-full order-1 md:order-2 mb-6 md:mb-0">
            <div className="hero-item hero-item-6 group relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg overflow-hidden border-2 border-primary transition-transform duration-500 ease-out md:hover:scale-[1.02] md:hover:rotate-[0.6deg] md:hover:border-primary/70">
              <Image
                src="/profile.png"
                alt="Igor Cardoso"
                width={384}
                height={384}
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-[1.015]"
                priority
              />
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  )
}
