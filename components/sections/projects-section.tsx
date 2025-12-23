"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/constants/projects"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"

export function ProjectsSection() {
  const { t } = useLanguage()
  return (
    <section id="projetos" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center md:text-left">{t("projects.title")}</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="scale" delay={index * 100}>
              <Card className="group overflow-hidden bg-card/50 border-primary/30 hover:border-primary transition-all cursor-pointer h-full flex flex-col">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer flex flex-col h-full">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    style={{ willChange: "transform" }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground flex-1">{project.description}</p>
                </div>
              </a>
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
