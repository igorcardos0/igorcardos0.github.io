import { Code2, Database, Layers, GitBranch, TestTube, Server } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface TechSkill {
  name: string
  icon: LucideIcon
}

export interface Experience {
  title: string
  company: string
  period: string
  description: string
}

export interface Education {
  title: string
  institution: string
  period: string
  link?: string
}

export const techSkills: TechSkill[] = [
  { name: "React.js", icon: Code2 },
  { name: "Next.js", icon: Layers },
  { name: "Node.js", icon: Server },
  { name: "TypeScript", icon: Code2 },
  { name: "JavaScript", icon: Code2 },
  { name: "Python", icon: Code2 },
  { name: ".NET", icon: Server },
  { name: "C#", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Git", icon: GitBranch },
  { name: "TDD", icon: TestTube },
  { name: "Clean Architecture", icon: Layers },
]

export const experiences: Experience[] = [
  {
    title: "Desenvolvedor Full-Stack Pleno",
    company: "V4 Company",
    period: "Set 2025 - Presente",
    description:
      "Desenvolvimento de aplicações web full stack utilizando React, Next.js, Node.js e TypeScript. Implementação de sistemas de automação, integrações com APIs e desenvolvimento de interfaces responsivas e performáticas.",
  },
  {
    title: "Desenvolvedor de Software",
    company: "ALPLATECH",
    period: "Ago 2025 - Set 2025",
    description:
      "Desenvolvimento de aplicações web e sistemas personalizados utilizando React, Node.js, Express e TypeScript. Implementação de arquiteturas escaláveis e manutenção de código seguindo boas práticas de engenharia de software.",
  },
  {
    title: "Desenvolvedor Web",
    company: "Autônomo",
    period: "Set 2020 - Jan 2024",
    description: "Desenvolvimento de aplicações web utilizando tecnologias modernas, com foco em performance, escalabilidade e boas práticas de desenvolvimento.",
  },
]

export const education: Education[] = [
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "UniMax - Centro Universitário Max Planck",
    period: "Fev 2025 - Jan 2029",
  },
  {
    title: "Desenvolvimento Web Full Stack",
    institution: "Trybe",
    period: "Mar 2020 - Dez 2022 • +1.500 horas",
    link: "https://www.credential.net/c9afcd88-d1b9-4178-92c9-8986cd9955bb#acc.ns7LjHd5",
  },
]

