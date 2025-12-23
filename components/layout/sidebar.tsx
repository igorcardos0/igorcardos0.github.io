"use client"

import { useState, useEffect } from "react"
import { Menu, X, Sun, Moon, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navItems } from "@/lib/constants/navigation"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/contexts/language-context"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  const toggleLanguage = () => {
    setLanguage(language === "pt" ? "en" : "pt")
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden bg-card/80 backdrop-blur-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full w-20 bg-card/50 backdrop-blur-sm border-r border-primary/30 z-40 flex flex-col items-center py-8 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <nav className="flex flex-col gap-8 flex-1 justify-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="group flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-all relative cursor-pointer"
            >
              <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              
              {/* Texto Corrigido: Removido rotate e writing-mode */}
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase transition-colors">
                {t(`nav.${item.href.replace("#", "")}`)}
              </span>

              {/* Tooltip opcional que aparece ao passar o mouse */}
              <div className="absolute left-full ml-4 px-3 py-1 bg-popover border border-primary/50 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap text-xs text-popover-foreground z-50">
                {t(`nav.${item.href.replace("#", "")}`)}
              </div>
            </a>
          ))}
        </nav>

        {/* Botões de Toggle de Tema e Idioma */}
        <div className="mt-auto mb-8 flex flex-col gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLanguage}
            className="w-10 h-10 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer"
            aria-label="Alternar idioma"
            title={language === "pt" ? "Switch to English" : "Mudar para Português"}
          >
            <Languages className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all cursor-pointer"
            aria-label="Alternar tema"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-400" />
            )}
          </Button>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 md:hidden cursor-pointer" 
          onClick={() => setIsOpen(false)} 
        />
      )}
    </>
  )
}