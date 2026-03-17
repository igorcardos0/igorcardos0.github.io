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
      pt: "Plataforma interna de inteligência de dados que unifica Operacional, Comercial e Ads na V4 Company.",
      en: "Internal data intelligence platform for V4 Company. I architected the integration between Operational, Commercial, and Paid Ads data.",
    },
    longDescription: {
      pt:
        "Contexto: a V4 Company operava com dados espalhados entre planilhas, ferramentas externas e times diferentes (Operacional, Comercial e Ads). Isso gerava silos de informação, dificuldade de leitura de lucro real e lentidão para decidir onde investir o próximo real de mídia.\n\n" +
        "Ação: desenhei e desenvolvi o Atlas, uma plataforma interna de inteligência de dados que unifica as frentes Operacional, Comercial e de Ads em uma única interface. Estruturei integrações com Meta Ads e Google Ads, Ecite (operacional) e dados comerciais, criando uma camada única de visualização e controle.\n\n" +
        "Resultado: transformei dados dispersos em uma single source of truth, reduzindo o tempo de geração de relatórios e permitindo alocação de orçamento em tempo quase real, baseada em lucro e retorno sobre investimento — em vez de feeling ou planilhas manuais.",
      en:
        "Context: V4 Company had data scattered across spreadsheets, external tools and different teams (Operations, Sales and Ads). This created silos, made it hard to see true profit and slowed down decisions on where to invest the next real in media.\n\n" +
        "Action: I designed and developed Atlas, an internal data intelligence platform that unifies Operational, Commercial and Ads fronts in a single interface. I structured integrations with Meta Ads, Google Ads, Ecite (operations) and commercial data, creating one consolidated layer of visibility and control.\n\n" +
        "Result: turned dispersed data into a single source of truth, reducing reporting time and enabling near real‑time budget allocation decisions based on profit and ROI instead of gut feeling or manual spreadsheets.",
    },
    stacks: ["React", "TypeScript", "Next.js", "Dashboards", "Analytics", "Data visualization"],
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
      pt: "TurboLead",
      en: "TurboLead",
    },
    description: {
      pt: "Primeiro SDR com IA focado no setor automotivo, com auditoria de vendas em tempo real e qualificação automática de leads.",
      en: "AI-powered SDR for the automotive industry. Real-time sales auditing and automated lead qualification.",
    },
    longDescription: {
      pt:
        "Contexto: concessionárias investem pesado em tráfego pago, mas perdem dinheiro no básico — demora na resposta, leads frios chegando no CRM e pouca visibilidade sobre a qualidade do atendimento.\n\n" +
        "Ação: desenvolvi o TurboLead, o primeiro SDR com IA focado no setor automotivo. A plataforma assume a primeira abordagem no WhatsApp, responde em segundos, faz triagem de crédito, troca e intenção real de compra, e só então encaminha o lead qualificado para o vendedor. Em paralelo, audita cada conversa em tempo real, medindo tempo de resposta, qualidade das mensagens e gerando uma nota objetiva por atendimento.\n\n" +
        "Resultado: automação de 100% da triagem inicial de leads, aumento da velocidade de resposta (speed‑to‑lead) e filtro automático de curiosos e contatos desqualificados antes de chegarem ao CRM, elevando a taxa de conversão da operação.",
      en:
        "Context: automotive dealerships invest heavily in paid traffic but lose money on the basics — slow response times, cold leads hitting the CRM and very little visibility into service quality.\n\n" +
        "Action: I built TurboLead, the first AI‑powered SDR focused on the automotive sector. The platform takes over the first contact on WhatsApp, replies in seconds, performs credit, trade‑in and real purchase‑intent qualification, and only then hands over the qualified lead to the sales rep. In parallel, it audits each conversation in real time, tracking response time, message quality and generating an objective score per interaction.\n\n" +
        "Result: automated 100% of initial lead triage, improved speed‑to‑lead and automatically filtered out low‑intent contacts before they hit the CRM, increasing the overall conversion rate of the sales operation.",
    },
    stacks: ["N8N", "Python", "React", "Node.js", "WhatsApp Business API", "IA aplicada a vendas"],
    folder: "projeto-turbo-lead",
    images: [
      "turbolead.lp.png",
      "turbolead.lp2.png",
      "turbolead.lp3.png",
      "turbolead.dash.png",
      "turbolead2.png",
    ],
    link: "/#projetos",
  },
  {
    id: 3,
    title: {
      pt: "Landing Pages Diversas",
      en: "Multiple Landing Pages",
    },
    description: {
      pt: "Coleção de landing pages otimizadas para performance e testes de aquisição em diferentes nichos.",
      en: "Collection of high-performing landing pages built for acquisition experiments across different niches.",
    },
    longDescription: {
      pt:
        "Contexto: empresas em fase de crescimento precisam testar rapidamente propostas de valor, ofertas e mensagens diferentes sem depender de um ciclo lento de desenvolvimento.\n\n" +
        "Ação: desenvolvi um conjunto de landing pages focadas em captação de leads e vendas, usando Next.js e Tailwind CSS, sempre com atenção a tempo de carregamento, rastreabilidade de eventos (GA4/Pixel) e facilidade de iteração.\n\n" +
        "Resultado: criação de uma base de páginas reutilizáveis e fáceis de adaptar para novos produtos e campanhas, reduzindo o tempo entre a ideia e o teste em tráfego pago.",
      en:
        "Context: growing companies need to quickly test different value propositions, offers and messaging without being blocked by slow development cycles.\n\n" +
        "Action: I built a set of landing pages focused on lead generation and sales using Next.js and Tailwind CSS, with special attention to load time, tracking (GA4/Pixel) and ease of iteration.\n\n" +
        "Result: a reusable library of landing pages that can be quickly adapted to new products and campaigns, reducing the time from idea to paid-traffic test.",
    },
    stacks: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GA4", "Landing Pages"],
    folder: "projetos-lps-diversas",
    images: ["bins lp.png", "cardamomo.png", "ozzy lp.png", "temakeria.png"],
    link: "/#projetos",
  },
]
