"use client"

import { Card } from "@/components/ui/card"
import { techSkills, experiences, education } from "@/lib/constants/about"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"

function NextJsIcon() {
  return (
    <Image
      src="/logos/next-logo.webp"
      alt="Next.js"
      width={60}
      height={60}
      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      loading="lazy"
    />
  )
}

function N8nIcon() {
  return (
    <Image
      src="/logos/n8n-logo.png"
      alt="n8n"
      width={60}
      height={60}
      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      loading="lazy"
    />
  )
}

function GA4Icon() {
  return (
    <Image
      src="/logos/ga4-logo.png"
      alt="Google Analytics 4"
      width={60}
      height={60}
      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      loading="lazy"
    />
  )
}

function VercelIcon() {
  return (
    <Image
      src="/logos/vercel-logo.svg"
      alt="Vercel"
      width={60}
      height={60}
      className="object-contain w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
      loading="lazy"
    />
  )
}

export function AboutSection() {
  const { t } = useLanguage()

  const getCustomIcon = (skillName: string) => {
    switch (skillName) {
      case "Next.js":
        return <NextJsIcon />
      case "n8n":
        return <N8nIcon />
      case "Google Analytics 4":
        return <GA4Icon />
      case "Vercel":
        return <VercelIcon />
      default:
        return null
    }
  }

  return (
    <section id="sobre" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center md:text-left">{t("about.title")}</h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={100}>
          <div className="space-y-4 md:space-y-6 text-base sm:text-lg leading-relaxed mb-8 md:mb-12">
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
            <p>{t("about.description3")}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale" delay={200}>
          <Card className="p-4 sm:p-6 mb-6 md:mb-8 bg-card/50 border-primary/30">
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-primary">{t("about.skills")}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
              {techSkills.map((skill, index) => {
                const customIcon = getCustomIcon(skill.name)
                return (
                  <AnimateOnScroll key={skill.name} animation="fade" delay={300 + index * 50}>
                    <div className="flex flex-col items-center gap-1.5 sm:gap-2 p-2 sm:p-3 bg-primary/10 rounded-lg border border-primary/30 hover:bg-primary/20 transition-colors">
                      {customIcon ? (
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                          {customIcon}
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                          <i className={`${skill.deviconClass} colored text-2xl sm:text-3xl md:text-4xl`}></i>
                        </div>
                      )}
                      <span className="text-xs sm:text-sm font-medium text-center leading-tight">{skill.name}</span>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={300}>
          <Card className="p-4 sm:p-6 mb-6 md:mb-8 bg-card/50 border-primary/30">
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-primary">{t("about.experience")}</h3>
            <div className="space-y-4 md:space-y-6">
              {experiences.map((exp, index) => {
                let expKey = "freelance"
                if (exp.company === "V4 Company") {
                  expKey = "v4"
                } else if (exp.company === "ALPLATECH") {
                  expKey = "alplatech"
                } else if (exp.company === "Studio Games Franchising") {
                  expKey = "studiogames"
                }
                const period = exp.period.replace("Presente", t("exp.period.present"))
                return (
                  <AnimateOnScroll key={index} animation="slide-right" delay={400 + index * 100}>
                    <div className="border-l-2 border-primary/50 pl-3 md:pl-4">
                      <h4 className="font-bold text-base sm:text-lg">{t(`exp.${expKey}.title`)}</h4>
                      <p className="text-primary font-semibold text-sm sm:text-base">{exp.company}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground mb-2">{period}</p>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed whitespace-pre-line">{t(`exp.${expKey}.description`)}</p>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={400}>
          <Card className="p-4 sm:p-6 bg-card/50 border-primary/30">
            <h3 className="text-lg sm:text-xl font-bold mb-4 md:mb-6 text-primary">{t("about.education")}</h3>
          <div className="space-y-4 md:space-y-6">
            {education.map((edu, index) => {
              const eduKey = edu.institution.includes("UniMax") ? "bachelor" : "trybe"
              return (
                <AnimateOnScroll key={index} animation="slide-right" delay={500 + index * 100}>
                  <div className="border-l-2 border-primary/50 pl-3 md:pl-4">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block cursor-pointer"
                      >
                        <h4 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors">
                          {t(`edu.${eduKey}.title`)}
                        </h4>
                        <p className="text-primary font-semibold text-sm sm:text-base group-hover:underline">{edu.institution}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{edu.period}</p>
                      </a>
                    ) : (
                      <>
                        <h4 className="font-bold text-base sm:text-lg">{t(`edu.${eduKey}.title`)}</h4>
                        <p className="text-primary font-semibold text-sm sm:text-base">{edu.institution}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{edu.period}</p>
                      </>
                    )}
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>
        </Card>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
