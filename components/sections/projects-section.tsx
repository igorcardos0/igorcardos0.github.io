"use client"

import { useState, useEffect, useCallback } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react"
import { projects, type Project } from "@/lib/constants/projects"
import { useLanguage } from "@/lib/contexts/language-context"
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll"
import Image from "next/image"
import { cn } from "@/lib/utils"

function getImageSrc(folder: string, imageName: string): string {
  return `/${folder}/${encodeURIComponent(imageName)}`
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) {
  const { language } = useLanguage()
  const [modalImageIndex, setModalImageIndex] = useState(0)
  const total = project.images.length

  const goTo = useCallback(
    (delta: number) => {
      setModalImageIndex((i) => ((i + delta + total) % total))
    },
    [total]
  )

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleEscape)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl border border-primary/30 bg-card shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-background/90 p-2 hover:bg-background"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-4 sm:p-6">
          {/* Carrossel em maior escala */}
          <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-lg bg-muted">
            {total > 0 && (
              <>
                <Image
                  src={getImageSrc(project.folder, project.images[modalImageIndex])}
                  alt={`${project.title[language]} - ${modalImageIndex + 1}`}
                  width={1200}
                  height={675}
                  className="w-full h-full object-contain"
                  priority
                />
                {total > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => goTo(-1)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background p-2 transition-colors"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="h-6 w-6 text-primary" />
                    </button>
                    <button
                      type="button"
                      onClick={() => goTo(1)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/90 hover:bg-background p-2 transition-colors"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="h-6 w-6 text-primary" />
                    </button>
                    <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-background/90 px-3 py-1 text-sm text-muted-foreground">
                      {modalImageIndex + 1} / {total}
                    </span>
                  </>
                )}
              </>
            )}
          </div>

          <h2 id="project-modal-title" className="text-2xl font-bold text-primary mb-2">
            {project.title[language]}
          </h2>
          <p className="text-muted-foreground mb-4 whitespace-pre-line">
            {project.longDescription[language]}
          </p>

          {project.stacks.length > 0 && (
            <div className="mb-6">
              <span className="text-sm font-medium text-foreground mb-2 block">Stacks utilizadas</span>
              <div className="flex flex-wrap gap-2">
                {project.stacks.map((stack) => (
                  <span
                    key={stack}
                    className={cn(
                      "rounded-md border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary"
                    )}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          )}

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex"
          >
            <Button size="lg" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Visitar projeto
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const { t, language } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState<Record<number, number>>({})
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const goTo = (projectId: number, index: number, total: number) => {
    const next = ((index % total) + total) % total
    setCurrentIndex((prev) => ({ ...prev, [projectId]: next }))
  }

  return (
    <section id="projetos" className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <AnimateOnScroll animation="fade">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-primary text-center md:text-left">{t("projects.title")}</h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => {
            const idx = currentIndex[project.id] ?? 0
            const total = project.images.length
            const src = total > 0 ? getImageSrc(project.folder, project.images[idx]) : "/placeholder.svg"

            return (
              <AnimateOnScroll key={project.id} animation="scale" delay={index * 100}>
                <Card
                  className="group overflow-hidden bg-card/50 border-primary/30 hover:border-primary transition-all cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex cursor-pointer flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={src}
                        alt={`${project.title[language]} - ${idx + 1}`}
                        width={800}
                        height={450}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        style={{ willChange: "transform" }}
                        loading="lazy"
                      />
                      {total > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              goTo(project.id, idx - 1, total)
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background p-1.5 transition-colors"
                            aria-label="Foto anterior"
                          >
                            <ChevronLeft className="h-5 w-5 text-primary" />
                          </button>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation()
                              goTo(project.id, idx + 1, total)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 hover:bg-background p-1.5 transition-colors"
                            aria-label="Próxima foto"
                          >
                            <ChevronRight className="h-5 w-5 text-primary" />
                          </button>
                          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-background/80 px-2 py-0.5 text-xs text-muted-foreground">
                            {idx + 1} / {total}
                          </span>
                        </>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <ExternalLink className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                      </div>
                    </div>
                    <div className="p-3 sm:p-4 flex-1 flex flex-col">
                      <h3 className="text-base sm:text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title[language]}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground flex-1">
                        {project.description[language]}
                      </p>
                    </div>
                  </div>
                </Card>
              </AnimateOnScroll>
            )
          })}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  )
}
