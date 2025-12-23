"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { projects } from "@/lib/constants/projects"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"

export function ProjectsSection() {
  const { t } = useLanguage()
  return (
    <section id="projetos" className="min-h-screen py-20 px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-primary">{t("projects.title")}</h2>
        </AnimateOnScroll>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimateOnScroll key={project.id} animation="scale" delay={index * 100}>
              <Card className="group overflow-hidden bg-card/50 border-primary/30 hover:border-primary transition-all cursor-pointer">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                    <ExternalLink className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
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

