"use client"

import { Card } from "@/components/ui/card"
import { techSkills, experiences, education } from "@/lib/constants/about"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export function AboutSection() {
  const { t } = useLanguage()
  return (
    <section id="sobre" className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">{t("about.title")}</h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={100}>
          <div className="space-y-6 text-lg leading-relaxed mb-12">
            <p>{t("about.description1")}</p>
            <p>{t("about.description2")}</p>
            <p>{t("about.description3")}</p>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale" delay={200}>
          <Card className="p-6 mb-8 bg-card/50 border-primary/30">
            <h3 className="text-xl font-bold mb-6 text-primary">{t("about.skills")}</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {techSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <AnimateOnScroll key={skill.name} animation="fade" delay={300 + index * 50}>
                    <div className="flex flex-col items-center gap-2 p-3 bg-primary/10 rounded-lg border border-primary/30 hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium text-center">{skill.name}</span>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={300}>
          <Card className="p-6 mb-8 bg-card/50 border-primary/30">
            <h3 className="text-xl font-bold mb-6 text-primary">{t("about.experience")}</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => {
                const expKey = exp.company === "V4 Company" ? "v4" : exp.company === "ALPLATECH" ? "alplatech" : "freelance"
                const period = exp.period.replace("Presente", t("exp.period.present"))
                return (
                  <AnimateOnScroll key={index} animation="slide-right" delay={400 + index * 100}>
                    <div className="border-l-2 border-primary/50 pl-4">
                      <h4 className="font-bold text-lg">{t(`exp.${expKey}.title`)}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-2">{period}</p>
                      <p className="text-muted-foreground leading-relaxed">{t(`exp.${expKey}.description`)}</p>
                    </div>
                  </AnimateOnScroll>
                )
              })}
            </div>
          </Card>
        </AnimateOnScroll>

        <AnimateOnScroll animation="slide-up" delay={400}>
          <Card className="p-6 bg-card/50 border-primary/30">
            <h3 className="text-xl font-bold mb-6 text-primary">{t("about.education")}</h3>
          <div className="space-y-6">
            {education.map((edu, index) => {
              const eduKey = edu.institution.includes("UniMax") ? "bachelor" : "trybe"
              return (
                <AnimateOnScroll key={index} animation="slide-right" delay={500 + index * 100}>
                  <div className="border-l-2 border-primary/50 pl-4">
                    {edu.link ? (
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block cursor-pointer"
                      >
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors">
                          {t(`edu.${eduKey}.title`)}
                        </h4>
                        <p className="text-primary font-semibold group-hover:underline">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                      </a>
                    ) : (
                      <>
                        <h4 className="font-bold text-lg">{t(`edu.${eduKey}.title`)}</h4>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
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

