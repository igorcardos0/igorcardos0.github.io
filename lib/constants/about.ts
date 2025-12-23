export interface TechSkill {
  name: string
  deviconClass: string
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
  { name: "React.js", deviconClass: "devicon-react-original" },
  { name: "Next.js", deviconClass: "devicon-nextjs-original" },
  { name: "Node.js", deviconClass: "devicon-nodejs-plain" },
  { name: "TypeScript", deviconClass: "devicon-typescript-plain" },
  { name: "Python", deviconClass: "devicon-python-plain" },
  { name: "n8n", deviconClass: "devicon-n8n-plain" },
  { name: "SQL", deviconClass: "devicon-mysql-plain" },
  { name: "PostgreSQL", deviconClass: "devicon-postgresql-plain" },
  { name: "MongoDB", deviconClass: "devicon-mongodb-plain" },
  { name: "Docker", deviconClass: "devicon-docker-plain" },
  { name: "Vercel", deviconClass: "devicon-vercel-plain" },
  { name: "Jest", deviconClass: "devicon-jest-plain" },
  { name: "Google Analytics 4", deviconClass: "devicon-googleanalytics-plain" },
  { name: "Git", deviconClass: "devicon-git-plain" },
  { name: "Tailwind CSS", deviconClass: "devicon-tailwindcss-plain" },
]

export const experiences: Experience[] = [
  {
    title: "Engenheiro de Software Full Stack",
    company: "V4 Company",
    period: "Set 2025 - Presente",
    description:
      "Atuo no desenvolvimento e sustentação de infraestrutura web focada em conversão e vendas para clientes de alta performance. Performance Web: Desenvolvimento de aplicações com Next.js e React otimizadas para Core Web Vitals, garantindo carregamento rápido e melhor rankeamento orgânico. Growth Ops: Criação de automações via n8n e Webhooks que integram campanhas de mídia paga (Ads) diretamente ao CRM, eliminando processos manuais e reduzindo o tempo de resposta aos leads. Qualidade: Implementação de rotinas de testes e monitoramento de erros para assegurar a estabilidade das operações de vendas em produção.",
  },
  {
    title: "Desenvolvedor de Software",
    company: "ALPLATECH",
    period: "Ago 2025 - Set 2025",
    description:
      "Desenvolvimento de sistemas customizados para digitalização de processos de negócios locais. Arquitetura: Criação de soluções em Node.js e Express para migrar fluxos de trabalho manuais para sistemas digitais centralizados. Banco de Dados: Modelagem e implementação de bancos relacionais (PostgreSQL) para garantir a integridade e escalabilidade dos dados dos clientes.",
  },
  {
    title: "Desenvolvedor Web Full Stack",
    company: "Autônomo",
    period: "Set 2020 - Jan 2024",
    description: "Entrega de soluções web focadas em performance e experiência do usuário. Desenvolvimento de interfaces responsivas e integração de APIs de pagamento e marketing, focando na experiência do usuário final e na facilidade de gestão pelo cliente.",
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
