type Language = "pt" | "en"

export interface Project {
  id: number
  /** Título do projeto em PT/EN */
  title: Record<Language, string>
  /** Descrição curta (card) em PT/EN */
  description: Record<Language, string>
  /** Descrição longa para o modal (Contexto → Ação → Resultado) em PT/EN */
  longDescription: Record<Language, string>
  /** Stacks/tecnologias usadas no projeto */
  stacks: string[]
  /** Pasta em public (ex: "projeto-atlas") */
  folder: string
  /** Nomes dos arquivos de imagem dentro da pasta (ordem do carrossel) */
  images: string[]
  link: string
}

/**
 * Projetos: cada item é uma pasta em public com fotos dentro.
 * Para adicionar um projeto: crie uma pasta em public (ex: public/meu-projeto),
 * coloque as imagens dentro e adicione aqui com folder: "meu-projeto" e images: ["foto1.png", "foto2.jpg", ...].
 */
export const projects: Project[] = [
  {
    id: 1,
    title: {
      pt: "Projeto Atlas",
      en: "Atlas Project",
    },
    description: {
      pt: "Plataforma interna de inteligência operacional desenvolvida para centralizar dados de campanhas, vendas, financeiro e operação dentro da unidade da V4 Company.",
      en: "Internal operational intelligence platform developed to centralize campaign, sales, financial and operational data inside a V4 Company unit.",
    },
    longDescription: {
      pt:
        "O Atlas foi uma plataforma interna criada para centralizar informações operacionais, comerciais, financeiras e de mídia dentro da unidade da V4 Company.\n\nA operação lidava com dados distribuídos entre planilhas, ferramentas externas, grupos de WhatsApp e processos manuais. Isso dificultava a visualização de indicadores importantes, o acompanhamento de campanhas e a comunicação entre áreas.\n\nAtuei no desenvolvimento e evolução da plataforma, trabalhando em interfaces, APIs, integrações, automações e processamento de dados.\n\nEntre as funcionalidades desenvolvidas estavam dashboards operacionais, integração com dados de campanhas, monitoramento de saldo de contas Meta Ads, acompanhamento comercial, notificações de vendas em tempo real, controle diário da operação e automações com IA para análise de interações em grupos de WhatsApp.\n\nO projeto utilizou tecnologias como React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Supabase, n8n, Redis, Docker, APIs REST e webhooks.\n\nO Atlas ajudou a transformar dados dispersos em uma plataforma centralizada, facilitando o acompanhamento da operação e reduzindo etapas manuais em processos importantes.",
      en:
        "Atlas was an internal platform developed inside a V4 Company unit to centralize operational, commercial, financial and media-related information in a single environment.\n\nThe operation handled data across spreadsheets, external tools, WhatsApp groups and manual processes. This made it harder to view key indicators, track campaigns and communicate across teams.\n\nI worked on the development and evolution of the platform, contributing to interfaces, APIs, integrations, automations and data processing.\n\nThe features included operational dashboards, campaign-data integrations, Meta Ads balance monitoring, commercial tracking, real-time sales notifications, daily operation tracking and AI-powered automations for analyzing WhatsApp group interactions.\n\nThe project used technologies such as React, Next.js, TypeScript, Node.js, Python, PostgreSQL, Supabase, n8n, Redis, Docker, REST APIs and webhooks.\n\nAtlas helped transform scattered data into a centralized platform, making it easier to monitor operations and reducing manual steps in important processes.",
    },
    stacks: ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "Supabase", "n8n", "Redis", "Docker", "REST APIs", "Webhooks"],
    folder: "projeto-atlas",
    images: [
      "atlas1 operacional.png",
      "atlas 1 comercial.png",
      "atlas1 ads.png",
    ],
    link: "https://atlas.v4rv.com/",
  },
  {
    id: 2,
    title: {
      pt: "Landing Pages Diversas",
      en: "Multiple Landing Pages",
    },
    description: {
      pt: "Desenvolvimento de páginas para campanhas e negócios.",
      en: "Pages focused on performance, conversion and integration.",
    },
    longDescription: {
      pt:
        "Coleção de landing pages e sites desenvolvidos para diferentes empresas, segmentos e objetivos de aquisição.\n\nOs projetos foram construídos com foco em responsividade, clareza da comunicação, velocidade de carregamento e integração com ferramentas de marketing.\n\nPrincipais entregas\n• Desenvolvimento de interfaces responsivas.\n• Criação de componentes reutilizáveis.\n• Implementação de formulários de captação.\n• Integração com APIs, webhooks e automações.\n• Configuração de eventos no Google Analytics 4.\n• Implementação do Google Tag Manager.\n• Otimização de performance e Core Web Vitals.\n• Aplicação de boas práticas de SEO técnico.\n• Configuração de domínio e deploy.",
      en:
        "Collection of landing pages and websites developed for campaigns, local businesses and different acquisition goals.\n\n" +
        "The projects were built with a focus on responsiveness, loading speed, clear communication, integrated forms, event tracking and technical SEO best practices.",
    },
    stacks: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "GA4", "Google Tag Manager", "SEO", "Vercel"],
    folder: "projetos-lps-diversas",
    images: ["bins lp.png", "cardamomo.png", "ozzy lp.png", "temakeria.png"],
    link: "/#projetos",
  },
]
