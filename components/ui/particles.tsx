"use client"

import { useEffect, useRef, useState } from "react"

interface ParticlesProps {
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  size?: number
  refresh?: boolean
  color?: string
  vx?: number
  vy?: number
  lineDistance?: number
  lineOpacity?: number
  lineWidth?: number
}

interface Circle {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
  lineDistance = 150,
  lineOpacity = 0.4,
  lineWidth = 1,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const canvasContainerRef = useRef<HTMLDivElement>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mousePosition = useRef({ x: 0, y: 0 })
  const mouseMoveHandler = useRef<((e: MouseEvent) => void) | null>(null)
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 })
  const animationFrameId = useRef<number | null>(null)
  const isVisibleRef = useRef(true)
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d", { alpha: true, desynchronized: true })
    }
    
    // Detectar quando a aba está visível/oculta
    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden
      if (isVisibleRef.current && !animationFrameId.current) {
        animate()
      }
    }
    document.addEventListener("visibilitychange", handleVisibilityChange)
    
    const timeoutId = setTimeout(() => {
      initCanvas()
      animate()
    }, 0)
    
    window.addEventListener("resize", initCanvas)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", initCanvas)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [color])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    requestAnimationFrame(() => {
      drawParticles()
    })
  }

  const onMouseMove = (e: MouseEvent) => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }
  }

  const onMouseLeave = () => {
    if (canvasContainerRef.current) {
      const rect = canvasContainerRef.current.getBoundingClientRect()
      mousePosition.current = {
        x: rect.width / 2,
        y: rect.height / 2,
      }
    }
  }

  useEffect(() => {
    mouseMoveHandler.current = onMouseMove
    const container = canvasContainerRef.current
    
    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", onMouseMove)
      
      return () => {
        window.removeEventListener("mousemove", onMouseMove)
      }
    }
  }, [])

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0
      const container = canvasContainerRef.current
      const width = container.offsetWidth || window.innerWidth
      const height = container.offsetHeight || window.innerHeight
      
      if (width > 0 && height > 0) {
        canvasRef.current.width = width * dpr
        canvasRef.current.height = height * dpr
        canvasRef.current.style.width = `${width}px`
        canvasRef.current.style.height = `${height}px`
        context.current.scale(dpr, dpr)
        setCanvasSize({
          w: width,
          h: height,
        })
      }
    }
  }

  const circleParams = (): Circle | null => {
    const width = canvasSize.w || (canvasContainerRef.current?.offsetWidth || 0)
    const height = canvasSize.h || (canvasContainerRef.current?.offsetHeight || 0)
    
    if (width === 0 || height === 0) {
      return null
    }
    
    const x = Math.floor(Math.random() * width)
    const y = Math.floor(Math.random() * height)
    const translateX = 0
    const translateY = 0
    const pSize = Math.floor(Math.random() * 2) + size
    const alpha = 0
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.1
    const dy = (Math.random() - 0.5) * 0.1
    const magnetism = 0.1 + Math.random() * 4
    return {
      x,
      y,
      translateX,
      translateY,
      size: pSize,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  }

  const drawCircle = (circle: Circle, update = false) => {
    if (context.current) {
      const { x, y, translateX, translateY, size, alpha } = circle
      context.current.translate(translateX, translateY)
      context.current.beginPath()
      context.current.arc(x, y, size, 0, 2 * Math.PI)
      context.current.fillStyle = `rgba(${hexToRgb(color)}, ${alpha})`
      context.current.fill()
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (!update) {
        circles.current.push(circle)
      }
    }
  }

  const drawLines = () => {
    if (!context.current) return

    const rgb = hexToRgb(color)
    const mouseX = mousePosition.current.x
    const mouseY = mousePosition.current.y
    const circlesArray = circles.current
    const circlesLength = circlesArray.length
    
    // Otimização: reduzir cálculos desnecessários
    const lineDistanceSquared = lineDistance * lineDistance
    
    for (let i = 0; i < circlesLength; i++) {
      const circle1 = circlesArray[i]
      const x1 = circle1.x + circle1.translateX
      const y1 = circle1.y + circle1.translateY

      // Limitar busca para melhor performance
      const maxJ = Math.min(i + 50, circlesLength)
      for (let j = i + 1; j < maxJ; j++) {
        const circle2 = circlesArray[j]
        const x2 = circle2.x + circle2.translateX
        const y2 = circle2.y + circle2.translateY

        const dx = x1 - x2
        const dy = y1 - y2
        const distanceSquared = dx * dx + dy * dy

        // Usar distância ao quadrado para evitar sqrt quando possível
        if (distanceSquared < lineDistanceSquared) {
          const distance = Math.sqrt(distanceSquared)
          let opacity = (1 - distance / lineDistance) * lineOpacity * Math.min(circle1.alpha, circle2.alpha)
          
          const midX = (x1 + x2) / 2
          const midY = (y1 + y2) / 2
          const distToMouse = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2)
          const mouseInfluence = Math.max(0, 1 - distToMouse / 200)
          opacity = Math.min(1, opacity + mouseInfluence * 0.3)
          
          if (opacity > 0.01) {
            context.current.beginPath()
            context.current.moveTo(x1, y1)
            context.current.lineTo(x2, y2)
            context.current.strokeStyle = `rgba(${rgb}, ${opacity})`
            context.current.lineWidth = lineWidth
            context.current.stroke()
          }
        }
      }
    }
  }

  const clearContext = () => {
    if (context.current && canvasRef.current) {
      const width = canvasSize.w || canvasRef.current.width / dpr
      const height = canvasSize.h || canvasRef.current.height / dpr
      context.current.clearRect(0, 0, width, height)
    }
  }

  const drawParticles = () => {
    const width = canvasSize.w || (canvasContainerRef.current?.offsetWidth || 0)
    const height = canvasSize.h || (canvasContainerRef.current?.offsetHeight || 0)
    
    if (width === 0 || height === 0) {
      setTimeout(() => {
        if (canvasContainerRef.current) {
          resizeCanvas()
          drawParticles()
        }
      }, 100)
      return
    }
    
    clearContext()
    const particleCount = quantity
    for (let i = 0; i < particleCount; i++) {
      const circle = circleParams()
      if (circle) {
        drawCircle(circle)
      }
    }
  }

  const remapValue = (value: number, start1: number, end1: number, start2: number, end2: number): number => {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    if (!isVisibleRef.current) {
      animationFrameId.current = null
      return
    }
    
    const width = canvasSize.w || (canvasContainerRef.current?.offsetWidth || window.innerWidth)
    const height = canvasSize.h || (canvasContainerRef.current?.offsetHeight || window.innerHeight)
    
    if (width === 0 || height === 0) {
      animationFrameId.current = requestAnimationFrame(animate)
      return
    }
    
    clearContext()
    
    drawLines()
    
    circles.current.forEach((circle: Circle, i: number) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        width - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        height - circle.y - circle.translateY - circle.size,
      ]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = Number.parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2))
      if (remapClosestEdge > 1) {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge
      }
      circle.x += circle.dx + vx
      circle.y += circle.dy + vy
      
      const dx = mousePosition.current.x - (circle.x + circle.translateX)
      const dy = mousePosition.current.y - (circle.y + circle.translateY)
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      if (distance > 0 && distance < 200) {
        const force = (200 - distance) / 200
        const angle = Math.atan2(dy, dx)
        circle.translateX -= (Math.cos(angle) * force * circle.magnetism) / ease
        circle.translateY -= (Math.sin(angle) * force * circle.magnetism) / ease
      } else {
        circle.translateX += (0 - circle.translateX) / ease
        circle.translateY += (0 - circle.translateY) / ease
      }

      if (
        circle.x < -circle.size ||
        circle.x > width + circle.size ||
        circle.y < -circle.size ||
        circle.y > height + circle.size
      ) {
        circles.current.splice(i, 1)
        const newCircle = circleParams()
        if (newCircle) {
          drawCircle(newCircle)
        }
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true,
        )
      }
    })
    animationFrameId.current = requestAnimationFrame(animate)
  }

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

function hexToRgb(hex: string): string {
  hex = hex.replace("#", "")

  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("")
  }

  const bigint = Number.parseInt(hex, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255

  return `${r}, ${g}, ${b}`
}
