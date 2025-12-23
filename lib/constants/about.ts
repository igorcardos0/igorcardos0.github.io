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
      "Atuo no desenvolvimento e sustentação de infraestrutura web focada em conversão e vendas para clientes de alta performance.\n\nPerformance Web: Desenvolvimento de aplicações com Next.js e React otimizadas para Core Web Vitals, garantindo carregamento rápido e melhor rankeamento orgânico.\n\nGrowth Ops: Criação de automações via n8n e Webhooks que integram campanhas de mídia paga (Ads) diretamente ao CRM, eliminando processos manuais e reduzindo o tempo de resposta aos leads.\n\nQualidade: Implementação de rotinas de testes e monitoramento de erros para assegurar a estabilidade das operações de vendas em produção.",
  },
  {
    title: "Desenvolvedor de Software",
    company: "ALPLATECH",
    period: "Nov 2024 - Set 2025",
    description:
      "Atuei no desenvolvimento de sistemas customizados para digitalização de processos de negócios locais, transformando operações manuais em fluxos digitais eficientes.\n\nArquitetura: Criação de soluções em Node.js e Express para migrar fluxos de trabalho manuais para sistemas digitais centralizados, melhorando a produtividade e reduzindo erros operacionais.\n\nBanco de Dados: Modelagem e implementação de bancos relacionais (PostgreSQL) para garantir a integridade, segurança e escalabilidade dos dados dos clientes.\n\nIntegração: Desenvolvimento de APIs e integrações para conectar sistemas legados com novas plataformas digitais, facilitando a transição tecnológica dos clientes.",
  },
  {
    title: "Técnico de TI",
    company: "Studio Games Franchising",
    period: "Jan 2024 - Ago 2024",
    description:
      "Atuei na manutenção e suporte técnico de infraestrutura de TI, garantindo a operação contínua dos sistemas e equipamentos da empresa.\n\nManutenção: Realizei manutenção preventiva e corretiva em computadores e consoles, incluindo upgrades de hardware, formatação e montagem de PCs gamer para otimizar performance.\n\nSuporte: Ofereci suporte técnico presencial a clientes, garantindo agilidade na resolução de problemas e organização do ambiente de trabalho para maximizar a produtividade.\n\nInfraestrutura: Atuei na administração e manutenção de redes locais, assegurando conectividade e segurança dos sistemas para proteger dados e garantir acesso contínuo.\n\nAutomação: Desenvolvi e mantive softwares em Python para atualização de jogos e aplicativos, além de gerenciar sistemas de login, garantindo eficiência e continuidade operacional.",
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
