"use client"

import { useEffect, useRef, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface AnimateOnScrollProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  animation?: "fade" | "slide-up" | "slide-down" | "slide-left" | "slide-right" | "scale"
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  duration = 600,
  animation = "fade",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  const animationClasses = {
    fade: isVisible ? "opacity-100" : "opacity-0",
    "slide-up": isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    "slide-down": isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8",
    "slide-left": isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    "slide-right": isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        animationClasses[animation],
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        willChange: isVisible ? "auto" : "transform, opacity",
      }}
    >
      {children}
    </div>
  )
}
