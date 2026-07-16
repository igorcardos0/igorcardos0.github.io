"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/constants/navigation"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/contexts/language-context"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section))
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.35, 0.6] }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card/80 backdrop-blur-sm border border-primary/30"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
      </Button>

      <aside
        className={`fixed left-0 top-0 h-full w-20 bg-card/50 backdrop-blur-sm border-r border-primary/30 z-40 flex flex-col items-center py-6 sm:py-8 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <nav className="flex flex-col gap-6 sm:gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={activeSection === item.href.slice(1) ? "page" : undefined}
              className={"group interactive-control flex flex-col items-center gap-1 hover:text-primary transition-all relative cursor-pointer px-2 " + (activeSection === item.href.slice(1) ? "text-primary" : "text-muted-foreground")}
            >
              <span className={"absolute -left-2 h-8 w-0.5 bg-primary transition-opacity duration-200 " + (activeSection === item.href.slice(1) ? "opacity-100" : "opacity-0")} aria-hidden="true" />
              <item.icon className={"h-4 w-4 sm:h-5 sm:w-5 transition-transform " + (activeSection === item.href.slice(1) ? "scale-110" : "group-hover:scale-110")} />
              
              <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-colors text-center leading-tight">
                {t(`nav.${item.href.replace("#", "")}`)}
              </span>

              <div className="absolute left-full ml-4 px-3 py-1 bg-popover border border-primary/50 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs text-popover-foreground z-50 hidden md:block">
                {t(`nav.${item.href.replace("#", "")}`)}
              </div>
            </a>
          ))}
        </nav>

        <div className="mt-auto mb-6 sm:mb-8 flex flex-col gap-2 sm:gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="interactive-control w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 cursor-pointer"
            aria-label="Alternar idioma"
            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <Languages className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="interactive-control w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 cursor-pointer"
            aria-label="Alternar tema"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
            )}
          </Button>
        </div>
      </aside>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden cursor-pointer" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  )
}
