"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Particles } from "@/components/ui/particles"

export function BackgroundParticles() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = mounted ? (resolvedTheme || theme || "dark") : "dark"
  const isDark = currentTheme === "dark"
  const color = isDark ? "#ffffff" : "#3b82f6"
  const quantity = isDark ? 130 : 230
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
