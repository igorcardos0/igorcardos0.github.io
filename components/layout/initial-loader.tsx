"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/contexts/language-context"

export function InitialLoader() {
  const { language } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    setVisible(true)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const leaveTimer = window.setTimeout(() => setLeaving(true), 1850)
    const finishTimer = window.setTimeout(() => {
      document.body.style.overflow = previousOverflow
      setVisible(false)
      window.dispatchEvent(new Event("portfolio-loader-finished"))
    }, 2200)
    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(finishTimer)
      document.body.style.overflow = previousOverflow
    }
  }, [])

  if (!visible) return null
  const labels = language === "pt"
    ? ["FRONTEND", "AUTOMAÇÕES", "INTEGRAÇÕES"]
    : ["FRONTEND", "AUTOMATION", "INTEGRATIONS"]

  return (
    <div className={"initial-loader " + (leaving ? "initial-loader--leave" : "")} role="status" aria-label={language === "pt" ? "Inicializando portfólio" : "Initializing portfolio"}>
      <div className="initial-loader__content">
        <p className="initial-loader__name">IGOR.CARDOSO</p>
        <p className="initial-loader__message">{language === "pt" ? "INICIALIZANDO PORTFÓLIO..." : "INITIALIZING PORTFOLIO..."}</p>
        <div className="initial-loader__track" aria-hidden="true"><div className="initial-loader__progress" /></div>
        <div className="initial-loader__labels" aria-hidden="true">
          {labels.map((label, index) => <span key={label} style={{ animationDelay: String(index * 130 + 180) + "ms" }}>{label}</span>)}
        </div>
      </div>
    </div>
  )
}
