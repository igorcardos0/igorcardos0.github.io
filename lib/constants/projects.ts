export interface Project {
  id: number
  title: string
  description: string
  /** Descrição longa para o modal (o que é o projeto) */
  longDescription: string
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
    title: "Projeto Atlas",
    description:
      "Internal data intelligence platform for V4 Company. I architected the integration between Operational, Commercial, and Paid Ads data.",
    longDescription:
      "Contexto: a V4 Company operava com dados espalhados entre planilhas, ferramentas externas e times diferentes (Operacional, Comercial e Ads). Isso gerava silos de informação, dificuldade de leitura de lucro real e lentidão para decidir onde investir o próximo real de mídia.\n\n" +
      "Ação: desenhei e desenvolvi o Atlas, uma plataforma interna de inteligência de dados que unifica as frentes Operacional, Comercial e de Ads em uma única interface. Estruturei integrações com Meta Ads e Google Ads, Ecite (operacional) e dados comerciais, criando uma camada única de visualização e controle.\n\n" +
      "Resultado: transformei dados dispersos em uma single source of truth, reduzindo o tempo de geração de relatórios e permitindo alocação de orçamento em tempo quase real, baseada em ROI e lucro — em vez de feeling ou planilhas manuais.",
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
    title: "TurboLead",
    description:
      "AI-powered SDR for the automotive industry. Real-time sales auditing and automated lead qualification.",
    longDescription:
      "Contexto: concessionárias investem pesado em tráfego pago, mas perdem dinheiro no básico — demora na resposta, leads frios chegando no CRM e zero visibilidade sobre a qualidade do atendimento.\n\n" +
      "Ação: desenvolvi o TurboLead, o primeiro SDR com IA focado no setor automotivo. A plataforma assume a primeira abordagem no WhatsApp, responde em segundos, faz triagem de crédito, troca e intenção real de compra, e só então encaminha o lead qualificado para o vendedor. Em paralelo, audita cada conversa em tempo real, medindo tempo de resposta, qualidade das mensagens e gerando uma nota objetiva por atendimento.\n\n" +
      "Resultado: automação de 100% da triagem inicial de leads, aumento da velocidade de resposta (speed-to-lead) e filtro automático de curiosos e contatos desqualificados antes de chegarem ao CRM, elevando a taxa de conversão da operação.",
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
]
