import { Home, User, Briefcase, Mail } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface NavItem {
  href: string
  label: string
  icon: LucideIcon
}

export const navItems: NavItem[] = [
  { href: "#home", label: "INICIO", icon: Home },
  { href: "#sobre", label: "SOBRE", icon: User },
  { href: "#projetos", label: "PROJETOS", icon: Briefcase },
  { href: "#contato", label: "CONTATO", icon: Mail },
]

