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
    description: "Plataforma interna de inteligência de dados da V4 Company — operacional, comercial e ADS.",
    longDescription:
      "O Atlas é uma plataforma interna de inteligência de dados desenvolvida para a V4 Company, criada para substituir a dependência de planilhas e de soluções externas (como Power BI terceirizado), centralizando a visibilidade de dados da empresa em um único sistema.\n\n" +
      "• ADS — Integração com Meta Ads e Google Ads: visão unificada das campanhas, envio de vitórias, métricas e conquistas em anúncios.\n\n" +
      "• Operacional — Conexão com o Ecite: acompanhamento de tarefas, performance da equipe, horas trabalhadas e custos operacionais em tempo real.\n\n" +
      "• Comercial — Gestão de leads: cadastro, pipeline (vendido, perdido, em andamento), valores, faturamento por cliente e métricas comerciais que antes ficavam dispersas em planilhas.\n\n" +
      "Inclui ainda um sistema de calculadora para definição de metas e métricas do comercial, projeção de custos e metas mensais, apoiando o planejamento e a tomada de decisão com base em dados.",
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
    description: "Primeiro SDR com IA para concessionárias — auditoria de vendas em tempo real e triagem automática de leads.",
    longDescription:
      "O TurboLead é uma plataforma de atendimento inteligente focada em concessionárias, que transforma o WhatsApp em uma máquina de vendas.\n\n" +
      "Funciona como o primeiro SDR com Inteligência Artificial: atende em segundos, filtra curiosos, faz a triagem de crédito, de troca e de intenção real de compra antes de passar o lead para o time humano.\n\n" +
      "Além disso, a plataforma audita as conversas em tempo real, avaliando tempo de resposta, qualidade do atendimento e gerando uma nota objetiva de 0 a 10 para cada vendedor. Isso elimina a 'cegueira gerencial': o dono passa a enxergar exatamente o que acontece entre o anúncio e o contrato assinado — fim do conflito entre marketing e vendas.\n\n" +
      "Com dashboards de performance, distribuição inteligente de leads por performance, previsibilidade de receita e insights de estoque (quais modelos mais pedidos, como SUV, Hatch e Sedan), o TurboLead ajuda a reduzir CAC, aumentar conversão e profissionalizar a operação comercial das revendas.",
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
