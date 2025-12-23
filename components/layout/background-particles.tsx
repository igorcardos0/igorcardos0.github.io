"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export function BackgroundParticles() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
      setPrefersReducedMotion(mediaQuery.matches)
      
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches)
      }
      
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  const currentTheme = mounted ? (resolvedTheme || theme || "dark") : "dark"
  const isDark = currentTheme === "dark"
  const color = isDark ? "#ffffff" : "#3b82f6"
  // Reduzir quantidade de partículas para melhor performance, ainda mais se reduzir movimento
  const baseQuantity = prefersReducedMotion ? 30 : (isDark ? 80 : 120)
  const quantity = baseQuantity
  const lineDistance = 150
  const lineOpacity = isDark ? 0.35 : 0.75

  return (
    <div className="fixed inset-0 w-screen h-screen -z-[1] pointer-events-auto" style={{ width: '100vw', height: '100vh' }}>
      <Particles
        className="absolute inset-0 w-full h-full"
        quantity={quantity}
        ease={80}
        staticity={50}
        color={color}
        size={0.6}
        lineDistance={lineDistance}
        lineOpacity={lineOpacity}
        lineWidth={1}
      />
    </div>
  )
}
