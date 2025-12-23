"use client"

import { useEffect } from "react"

export function ResourceHints() {
  useEffect(() => {
    // Adicionar preconnect para CDN do Devicon
    const preconnect = document.createElement("link")
    preconnect.rel = "preconnect"
    preconnect.href = "https://cdn.jsdelivr.net"
    document.head.appendChild(preconnect)

    // Adicionar dns-prefetch como fallback
    const dnsPrefetch = document.createElement("link")
    dnsPrefetch.rel = "dns-prefetch"
    dnsPrefetch.href = "https://cdn.jsdelivr.net"
    document.head.appendChild(dnsPrefetch)

    return () => {
      document.head.removeChild(preconnect)
      document.head.removeChild(dnsPrefetch)
    }
  }, [])

  return null
}

