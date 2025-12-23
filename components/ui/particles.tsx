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
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
    }
    // Aguarda o próximo frame para garantir que o DOM está pronto
    const timeoutId = setTimeout(() => {
      initCanvas()
      animate()
    }, 0)
    
    window.addEventListener("resize", initCanvas)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("resize", initCanvas)
    }
  }, [color])

  useEffect(() => {
    initCanvas()
  }, [refresh])

  const initCanvas = () => {
    resizeCanvas()
    // Aguarda um frame para garantir que o canvasSize foi atualizado
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
    // Quando o mouse sai, reseta para o centro para um efeito suave
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
    
    // Adiciona listener na janela para capturar movimento em toda a tela
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
    // Garante que temos dimensões válidas
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
    
    for (let i = 0; i < circles.current.length; i++) {
      const circle1 = circles.current[i]
      const x1 = circle1.x + circle1.translateX
      const y1 = circle1.y + circle1.translateY

      for (let j = i + 1; j < circles.current.length; j++) {
        const circle2 = circles.current[j]
        const x2 = circle2.x + circle2.translateX
        const y2 = circle2.y + circle2.translateY

        const dx = x1 - x2
        const dy = y1 - y2
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < lineDistance) {
          // Calcula a opacidade baseada na distância (mais próximo = mais opaco)
          let opacity = (1 - distance / lineDistance) * lineOpacity * Math.min(circle1.alpha, circle2.alpha)
          
          // Aumenta a opacidade das linhas próximas ao mouse
          const midX = (x1 + x2) / 2
          const midY = (y1 + y2) / 2
          const distToMouse = Math.sqrt((midX - mouseX) ** 2 + (midY - mouseY) ** 2)
          const mouseInfluence = Math.max(0, 1 - distToMouse / 200) // 200px de influência
          opacity = Math.min(1, opacity + mouseInfluence * 0.3)
          
          if (opacity > 0) {
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
      // Tenta novamente após um pequeno delay
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
    const width = canvasSize.w || (canvasContainerRef.current?.offsetWidth || window.innerWidth)
    const height = canvasSize.h || (canvasContainerRef.current?.offsetHeight || window.innerHeight)
    
    if (width === 0 || height === 0) {
      window.requestAnimationFrame(animate)
      return
    }
    
    clearContext()
    
    // Desenha as linhas primeiro (atrás das partículas)
    drawLines()
    
    // Depois desenha as partículas
    circles.current.forEach((circle: Circle, i: number) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.translateX - circle.size, // distance from left edge
        width - circle.x - circle.translateX - circle.size, // distance from right edge
        circle.y + circle.translateY - circle.size, // distance from top edge
        height - circle.y - circle.translateY - circle.size, // distance from bottom edge
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
      
      // Interação com o mouse - partículas são atraídas/repelidas pelo mouse
      const dx = mousePosition.current.x - (circle.x + circle.translateX)
      const dy = mousePosition.current.y - (circle.y + circle.translateY)
      const distance = Math.sqrt(dx * dx + dy * dy)
      
      // Efeito de repulsão/atração baseado na distância do mouse
      if (distance > 0 && distance < 200) {
        const force = (200 - distance) / 200 // Força diminui com a distância
        const angle = Math.atan2(dy, dx)
        // Repulsão suave - partículas se afastam do mouse
        circle.translateX -= (Math.cos(angle) * force * circle.magnetism) / ease
        circle.translateY -= (Math.sin(angle) * force * circle.magnetism) / ease
      } else {
        // Retorna suavemente à posição original quando longe do mouse
        circle.translateX += (0 - circle.translateX) / ease
        circle.translateY += (0 - circle.translateY) / ease
      }

      if (
        circle.x < -circle.size ||
        circle.x > width + circle.size ||
        circle.y < -circle.size ||
        circle.y > height + circle.size
      ) {
        // Remove the circle from the array
        circles.current.splice(i, 1)
        // Create a new circle
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
    window.requestAnimationFrame(animate)
  }

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}

function hexToRgb(hex: string): string {
  // Remove the "#" if present
  hex = hex.replace("#", "")

  // Check if it's a valid hex color
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
