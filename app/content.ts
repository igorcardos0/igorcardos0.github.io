export type Language = "pt" | "en";

export interface Job {
  role: string;
  company: string;
  period: string;
  description: string;
  bullets: string[];
}

export interface CaseMedia {
  kind: "video" | "image";
  src: string;
  fallback?: string;
  poster?: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  owner: string;
  category: string;
  description: string;
  result: string;
  tags: string[];
  modalTitle: string;
  modalCategory: string;
  summary: string;
  media?: CaseMedia;
  challenge: string[];
  solution: string;
  stack: [string, string][];
  modules: [string, string][];
  role: string[];
  impact: string[];
}

export interface Delivery {
  title: string;
  context: string;
  description: string;
  caseStudy?: string;
  links?: { label: string; href: string }[];
}

export const nav = {
  pt: [
    { id: "inicio", label: "Home", number: "01" },
    { id: "sobre", label: "Sobre mim", number: "02" },
    { id: "experiencia", label: "Carreira", number: "03" },
    { id: "projetos", label: "Projetos", number: "04" },
    { id: "contato", label: "Contato", number: "05" },
  ],
  en: [
    { id: "inicio", label: "Home", number: "01" },
    { id: "sobre", label: "About me", number: "02" },
    { id: "experiencia", label: "Career", number: "03" },
    { id: "projetos", label: "Projects", number: "04" },
    { id: "contato", label: "Contact", number: "05" },
  ],
};

export const skills: Record<Language, [string, string][]> = {
  pt: [
    ["IA aplicada", "LLMs · agentes com ferramentas · Claude Agent SDK · RAG · embeddings · vector store · n8n"],
    ["Backend e dados", "NestJS · Node.js · Express · Laravel · PHP · Python · Rust · PostgreSQL · MongoDB · Supabase · Redis · MySQL"],
    ["Frontend e mobile", "Next.js · React · React Native (Expo) · Angular · TypeScript · Tailwind CSS · Electron"],
    ["Infra e DevOps", "Docker · AWS · DigitalOcean · VPS · CI/CD · GitHub Actions · Linux · Vercel · Git"],
  ],
  en: [
    ["Applied AI", "LLMs · tool-using agents · Claude Agent SDK · RAG · embeddings · vector store · n8n"],
    ["Backend & data", "NestJS · Node.js · Express · Laravel · PHP · Python · Rust · PostgreSQL · MongoDB · Supabase · Redis · MySQL"],
    ["Frontend & mobile", "Next.js · React · React Native (Expo) · Angular · TypeScript · Tailwind CSS · Electron"],
    ["Infra & DevOps", "Docker · AWS · DigitalOcean · VPS · CI/CD · GitHub Actions · Linux · Vercel · Git"],
  ],
};

export const alsoWorkWith: Record<Language, string> = {
  pt: "Também trabalho com: WordPress · WooCommerce · GA4 · GTM · Meta Pixel e Conversions API · Figma",
  en: "I also work with: WordPress · WooCommerce · GA4 · GTM · Meta Pixel & Conversions API · Figma",
};

export const experience: Record<Language, Job[]> = {
  pt: [
    {
      role: "Engenheiro de Software Full Stack Pleno · Líder Técnico do Setor Animal",
      company: "LUSA Brasil",
      period: "Out 2026 — o momento",
      description: "Liderança técnica do setor animal: arquitetura, prioridades e a frente de IA, agentes e automação, sem deixar de programar.",
      bullets: [
        "Lidero tecnicamente um desenvolvedor júnior: arquitetura, padrões, code review e distribuição das demandas",
        "Régua de tráfego com IA que pausa, reduz ou aumenta o orçamento de Meta Ads conforme o ROI",
        "iCharity: plataforma de doações com gateway próprio, split na origem e conciliação automática",
        "Agentes e automações com IA para a operação; deploy e CI/CD com Docker, DigitalOcean e AWS",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack Pleno",
      company: "LUSA Brasil",
      period: "Jul 2026 — Set 2026 · 3 meses",
      description: "Sistemas, páginas, checkout e app para as campanhas de arrecadação de ONGs.",
      bullets: [
        "Ecossistema de doações: app iOS e Android (Expo), API em NestJS e painel em Next.js com checkout",
        "Pipeline de webhooks e conversão com Facebook CAPI e Utmify; pacote de gateway com failover",
        "10 sites de ONGs migrados de WordPress para Next.js, validados por screenshot contra o original",
        "TaskFlow: gestor de tarefas com aprovações, metas, cofre de acessos e push, em NestJS e Next.js (PWA)",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack Pleno",
      company: "V4 Company",
      period: "Dez 2025 — Jun 2026 · 7 meses",
      description: "Desenvolvimento e evolução de aplicações internas, automações e integrações para operação, marketing, gestão e dados.",
      bullets: [
        "Interfaces e funcionalidades para sistemas internos com React e Next.js",
        "APIs com Node.js, Express e Python; workflows avançados com n8n",
        "Integrações com Meta Ads, Google Ads, WhatsApp e sistemas internos",
        "Projeto Atlas, monitoramento de saldos, notificações, Docker e VPS",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack · Martech",
      company: "V4 Company",
      period: "Set 2025 — Dez 2025 · 4 meses",
      description: "Soluções digitais para campanhas, aquisição e presença online, apoiando marketing, tráfego, vendas e design.",
      bullets: [
        "Landing pages, sites institucionais, campanhas e e-commerces",
        "WordPress, WooCommerce, Laravel, React, Next.js e Tailwind CSS",
        "Formulários, pixels, eventos de conversão e integrações com IA",
        "GA4, GTM, performance, SEO técnico e experiência do usuário",
      ],
    },
    {
      role: "Engenheiro de Software Full Stack",
      company: "ALPLATECH",
      period: "Nov 2024 — Set 2025 · 11 meses",
      description: "Sites, sistemas web e soluções digitais sob medida, da descoberta e prototipação à publicação.",
      bullets: [
        "Interfaces responsivas com React e JavaScript",
        "Aplicações com Node.js, Express e PostgreSQL",
        "APIs, integrações e modelagem de bancos relacionais",
        "Digitalização de processos, sites e landing pages",
      ],
    },
    {
      role: "Técnico de TI e Automação",
      company: "Studio Games Franchising",
      period: "Jan 2024 — Ago 2024 · 8 meses",
      description: "Suporte técnico, infraestrutura local e automação de rotinas internas.",
      bullets: [
        "Manutenção de computadores, consoles e redes locais",
        "Ferramentas e scripts de automação em Python",
        "Automação de atualizações e sistemas internos de acesso",
      ],
    },
    {
      role: "Desenvolvedor Web Freelance",
      company: "Autônomo",
      period: "Dez 2022 — Jan 2024 · 1 ano e 2 meses",
      description: "Projetos web para pequenos negócios, em paralelo à gerência de uma loja.",
      bullets: [
        "Sites e lojas em WordPress e PHP",
        "Aplicações com React e Node.js",
      ],
    },
  ],
  en: [
    {
      role: "Mid-Level Full Stack Software Engineer · Animal Sector Tech Lead",
      company: "LUSA Brasil",
      period: "Oct 2026 — Present",
      description: "Technical leadership of the animal sector: architecture, priorities and the AI, agents and automation front, while still writing code.",
      bullets: [
        "Lead a junior developer: architecture, standards, code review and task distribution",
        "AI traffic controller that pauses, cuts or scales Meta Ads budgets based on ROI",
        "iCharity: donation platform with its own payment gateway, split at source and automatic reconciliation",
        "AI agents and automations for operations; deploy and CI/CD with Docker, DigitalOcean and AWS",
      ],
    },
    {
      role: "Mid-Level Full Stack Software Engineer",
      company: "LUSA Brasil",
      period: "Jul 2026 — Sep 2026 · 3 months",
      description: "Systems, pages, checkout and apps for NGO fundraising campaigns.",
      bullets: [
        "Donation ecosystem: iOS and Android app (Expo), NestJS API and Next.js dashboard with checkout",
        "Webhook and conversion pipeline with Facebook CAPI and Utmify; gateway package with failover",
        "10 NGO websites migrated from WordPress to Next.js, validated by screenshot against the original",
        "TaskFlow: task manager with approvals, goals, credentials vault and push, built with NestJS and Next.js (PWA)",
      ],
    },
    {
      role: "Mid-Level Full Stack Software Engineer",
      company: "V4 Company",
      period: "Dec 2025 — Jun 2026 · 7 months",
      description: "Development and evolution of internal applications, automations and integrations for operations, marketing, management and data.",
      bullets: [
        "Interfaces and features for internal systems with React and Next.js",
        "APIs with Node.js, Express and Python; advanced workflows with n8n",
        "Integrations with Meta Ads, Google Ads, WhatsApp and internal systems",
        "Atlas Project, balance monitoring, notifications, Docker and VPS",
      ],
    },
    {
      role: "Full Stack Software Engineer · Martech",
      company: "V4 Company",
      period: "Sep 2025 — Dec 2025 · 4 months",
      description: "Digital solutions for campaigns, acquisition and online presence, supporting marketing, paid media, sales and design.",
      bullets: [
        "Landing pages, institutional websites, campaigns and e-commerce",
        "WordPress, WooCommerce, Laravel, React, Next.js and Tailwind CSS",
        "Forms, pixels, conversion events and AI integrations",
        "GA4, GTM, performance, technical SEO and user experience",
      ],
    },
    {
      role: "Full Stack Software Engineer",
      company: "ALPLATECH",
      period: "Nov 2024 — Sep 2025 · 11 months",
      description: "Custom websites, web systems and digital solutions, from discovery and prototyping to launch.",
      bullets: [
        "Responsive interfaces with React and JavaScript",
        "Applications with Node.js, Express and PostgreSQL",
        "APIs, integrations and relational database modeling",
        "Process digitization, websites and landing pages",
      ],
    },
    {
      role: "IT & Automation Technician",
      company: "Studio Games Franchising",
      period: "Jan 2024 — Aug 2024 · 8 months",
      description: "Technical support, local infrastructure and automation of internal routines.",
      bullets: [
        "Computer, console and local network maintenance",
        "Automation tools and scripts in Python",
        "Update automation and internal access systems",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-employed",
      period: "Dec 2022 — Jan 2024 · 1 year 2 months",
      description: "Web projects for small businesses, alongside managing a retail store.",
      bullets: [
        "Websites and stores with WordPress and PHP",
        "Applications with React and Node.js",
      ],
    },
  ],
};

export const caseStudies: Record<Language, CaseStudy[]> = {
  pt: [
    {
      id: "abajur",
      number: "01",
      title: "Abajur",
      owner: "PROJETO PRÓPRIO",
      category: "IA · APP DESKTOP",
      description: "App desktop que mostra, ao vivo, um time de 41 agentes do Claude Code trabalhando num escritório em pixel art, com controle, replay e métricas.",
      result: "~144 fps · milhares de testes · instalador para Windows",
      tags: ["Electron", "Next.js", "Rust", "Claude Agent SDK", "SQLite"],
      modalTitle: "Abajur + time de 41 agentes de IA",
      modalCategory: "01 / PROJETO PRÓPRIO / IA & DESKTOP",
      summary: "Um time de 41 agentes do Claude Code organizado como uma empresa de software, e o app desktop que mostra esse time trabalhando ao vivo, num escritório isométrico em pixel art.",
      media: {
        kind: "video",
        src: "/cases/abajur.webm",
        fallback: "/cases/abajur.mp4",
        poster: "/cases/abajur-poster.webp",
        alt: "Escritório em pixel art do Abajur com agentes trabalhando nas mesas",
        caption: "Replay de uma sessão real: cada personagem é um agente, e o balão mostra o que ele está fazendo.",
      },
      challenge: [
        "Acompanhar vários agentes pelo terminal é trabalhar às cegas: não dá para ver quem travou, quem pediu permissão ou quanto cada sessão custou.",
        "Com 41 agentes em camadas (TechLead, leads e especialistas), entender quem está fazendo o quê exige ler logs longos.",
        "Para intervir era preciso esperar o turno do agente acabar.",
      ],
      solution: "Organizei um time de 41 agentes: um TechLead que faz as perguntas, monta o plano e delega para 10 leads (frontend, backend, dados, infra, design, QA, segurança, mobile, vídeo e mídia social), cada um com 3 especialistas. Depois o próprio time construiu, sob minha direção, o Abajur: um app desktop que recebe os eventos por hooks globais do Claude Code e mostra tudo num escritório em pixel art, ao vivo, com controle total das sessões.",
      stack: [
        ["Desktop", "Electron · Next.js (export estático) · React 19 · Tailwind CSS"],
        ["Hooks e controle", "Rust (named pipe autenticado) · TypeScript"],
        ["IA", "Claude Agent SDK · hooks do Claude Code · 41 agentes em 3 camadas"],
        ["Dados e qualidade", "SQLite local · segredos mascarados · Vitest · Playwright · testes de desempenho"],
      ],
      modules: [
        ["Escritório ao vivo", "Cada agente na sua mesa, com a tarefa atual, as ferramentas usadas, o briefing e o relatório."],
        ["Controle do time", "Mandar mensagem a um agente, pausar, retomar, parar e aprovar permissões sem abrir o terminal."],
        ["Replay e métricas", "Execuções passadas com linha do tempo, tokens, tempo, ações e gargalos."],
        ["Time de 41 agentes", "Questionário, plano, execução em ondas e gates de QA e segurança, com instalador e validador."],
      ],
      role: [
        "Produto, arquitetura e decisões técnicas do app e do time.",
        "Desenho dos 41 agentes, do protocolo de delegação e dos padrões técnicos.",
        "Direção e revisão do trabalho dos agentes, onda a onda.",
        "Empacotamento e instalador para Windows.",
      ],
      impact: [
        "Cena a ~144 fps, medida no p50.",
        "Milhares de testes automatizados entre app, hooks, dados e interface.",
        "Ingestão de 3 mil eventos por segundo; métricas sobre 1 milhão de eventos em 107 ms (p95).",
        "Nenhum evento perdido com o app fechado, graças ao spool local.",
      ],
    },
    {
      id: "lusa",
      number: "02",
      title: "Ecossistema de doações",
      owner: "LUSA BRASIL",
      category: "APP · API · PAINEL",
      description: "App de doação para iOS e Android, API central e painel web com checkout próprio, ligados a uma infraestrutura de pagamentos com failover entre gateways.",
      result: "Em produção nas lojas · Pix e Pix Automático · failover entre gateways",
      tags: ["React Native", "Expo", "NestJS", "MongoDB", "Next.js", "Pix"],
      modalTitle: "Ecossistema de doações da LUSA",
      modalCategory: "02 / LUSA BRASIL / APP, API & PAINEL",
      summary: "O app onde o doador acompanha as ONGs que ajuda, a API que guarda tudo e o painel onde a LUSA e cada ONG gerenciam campanhas, animais, repasses e doações.",
      challenge: [
        "Doações espalhadas por páginas e gateways diferentes, sem uma visão única do doador.",
        "ONGs sem um lugar próprio para publicar animais, notícias e prestar contas.",
        "Queda de um gateway de pagamento significava campanha parada.",
      ],
      solution: "Evoluí um ecossistema com três clientes sobre uma API única: o app do doador e do admin de ONG, o painel web da LUSA e das ONGs, e o checkout público de doação. Por baixo, montei a infraestrutura de pagamentos e conversão: um pacote de gateway com failover entre provedores e um pipeline de webhooks que confirma a doação e envia o evento de conversão para as plataformas de anúncio.",
      stack: [
        ["Mobile", "React Native · Expo · Expo Router · EAS Update · notificações push"],
        ["Backend", "NestJS · MongoDB · JWT · Swagger"],
        ["Web", "Next.js · Tailwind CSS · ApexCharts · Angular (painel de conversão)"],
        ["Pagamentos e conversão", "Pix · Pix Automático · failover entre gateways · Facebook CAPI · Utmify"],
      ],
      modules: [
        ["App do doador", "Feed das ONGs, adoção, apadrinhamento, transparência dos repasses e sequência de dias com pontos."],
        ["Área da ONG", "Cadastro de animais, posts, voluntários e acompanhamento dos repasses recebidos."],
        ["Painel da LUSA", "Doações, alocação de repasses, aprovação de ONGs, analytics de navegação e downloads das lojas."],
        ["Pagamentos", "Pix avulso e mensal, failover entre gateways, status do pagamento e Pix pendente."],
      ],
      role: [
        "Entrei com a API já em produção e passei a evoluir API, app e painel juntos.",
        "Criei o pacote de gateway com failover e o pipeline de webhooks e conversão.",
        "Desenvolvi telas do app, do painel e o checkout de doação.",
        "Deploy e sustentação em produção.",
      ],
      impact: [
        "App publicado para iOS e Android, com atualizações sem nova versão na loja.",
        "Uma API atendendo app, painel, checkout e os webhooks dos gateways.",
        "Campanha continua recebendo mesmo quando um gateway cai.",
        "Conversões confirmadas no servidor chegando às plataformas de anúncio.",
      ],
    },
    {
      id: "icharity",
      number: "03",
      title: "iCharity",
      owner: "LUSA BRASIL",
      category: "PAGAMENTOS · FINTECH",
      description: "Plataforma de doações para ONGs com gateway próprio: split na origem para a ONG receber 100%, razão contábil e conciliação automática.",
      result: "100% para a ONG · conciliação automática · ~400 testes",
      tags: ["Laravel", "PHP", "PostgreSQL", "Pix Automático", "Webhooks"],
      modalTitle: "iCharity — a ONG recebe 100%",
      modalCategory: "03 / LUSA BRASIL / PAGAMENTOS",
      summary: "Plataforma de doações no estilo GoFundMe com gateway próprio. O dinheiro cai direto na conta da ONG e a taxa só existe se o doador escolher cobri-la.",
      media: {
        kind: "image",
        src: "/cases/icharity-split.webp",
        alt: "Diagrama do fluxo de doação da iCharity: doador, checkout, roteador de provedores, split para a ONG, webhook, razão contábil e conciliação",
        caption: "Fluxo do dinheiro e da confirmação: split na origem, webhook guardado bruto, razão só de acréscimo e conciliação com o provedor.",
      },
      challenge: [
        "Plataformas de doação ficam com uma parte do valor e a ONG espera dias pelo repasse.",
        "Webhook perdido vira doação paga que nunca aparece no painel.",
        "Conciliação feita à mão, em planilha, não fecha com o extrato.",
      ],
      solution: "Construí a plataforma em Laravel com um gateway próprio: um roteador escolhe o provedor de Pix com fallback, e o split acontece na origem, então o valor da doação cai direto na conta da ONG. O checkout entra no site da ONG com uma linha de código. Todo webhook é guardado bruto antes de processar, o processamento é idempotente, e um razão contábil só de acréscimo registra cada movimento.",
      stack: [
        ["Backend", "Laravel · PHP 8.3 · Sanctum · filas"],
        ["Pagamentos", "Pix · Pix Automático · roteador de provedores com fallback · split na origem"],
        ["Dados", "PostgreSQL · razão contábil só de acréscimo, protegido por trigger"],
        ["Qualidade", "~400 testes · provedores simulados nos testes · CI com GitHub Actions"],
      ],
      modules: [
        ["Checkout incorporável", "Três estilos para o site da ONG, doação única ou mensal e a caixinha opcional de cobrir a taxa."],
        ["Cadastro de ONGs", "Documentos, análise pela equipe e abertura da conta de recebimento."],
        ["Razão e conciliação", "Lançamentos imutáveis, verificação diária de integridade e recuperação de webhooks perdidos."],
        ["Painel da ONG", "Doações, doadores mensais, funil de conversão, pixels de anúncio e avisos assinados para o site da ONG."],
      ],
      role: [
        "Arquitetura do gateway, do split e do razão contábil.",
        "Backend, checkout e painéis da ONG e da equipe.",
        "Testes dos fluxos de pagamento, estorno e conciliação.",
      ],
      impact: [
        "A ONG recebe 100% da doação, direto na conta dela.",
        "Taxa de R$ 5 só quando o doador escolhe cobrir; sem isso, a plataforma absorve o custo.",
        "Doação paga não se perde: a conciliação recupera o que o webhook não entregou.",
        "Cerca de 400 testes cobrindo pagamento, estorno, razão e avisos.",
      ],
    },
    {
      id: "hub",
      number: "04",
      title: "Hub Freelance",
      owner: "PROJETO PRÓPRIO",
      category: "PROSPECÇÃO · IA",
      description: "Ferramenta que busca empresas no Google Places, lê o site, encontra o CNPJ, mede o PageSpeed, pontua a oportunidade e escreve a proposta com IA.",
      result: "Lista de leads pontuados em minutos · abre com dois cliques",
      tags: ["Next.js", "BullMQ", "Redis", "PostgreSQL", "Claude API", "Docker"],
      modalTitle: "Hub Freelance — prospecção com IA",
      modalCategory: "04 / PROJETO PRÓPRIO / AUTOMAÇÃO",
      summary: "Caçador de leads, pipeline e propostas para freelancer: você escolhe região, nicho e serviço, e o hub entrega a lista pronta para abordar 1:1 pelo WhatsApp.",
      challenge: [
        "Prospectar à mão é lento: buscar empresas, abrir cada site, achar o CNPJ e avaliar se vale a abordagem.",
        "Sem critério, a lista mistura empresas que já têm site bom com as que realmente precisam do serviço.",
        "Escrever cada primeira mensagem e cada proposta do zero consome o dia.",
      ],
      solution: "Construí um hub que roda localmente e abre com dois cliques. Ele busca no Google Places, coloca cada empresa numa fila de enriquecimento que lê o site (contatos, plataforma, HTTPS, CNPJ no rodapé), consulta o cadastro do CNPJ e mede o PageSpeed no celular. Cada lead recebe notas de 0 a 100 por serviço, e a IA resume a empresa e escreve a primeira mensagem e a proposta.",
      stack: [
        ["App", "Next.js · React · Zod"],
        ["Filas e dados", "BullMQ · Redis · PostgreSQL com PostGIS · Drizzle ORM"],
        ["Coleta", "Google Places API · PageSpeed Insights API · crawler com Cheerio"],
        ["IA e infra", "Claude API · Docker Compose · atalho de inicialização no Windows"],
      ],
      modules: [
        ["Busca e mapa", "Região, nicho e serviço; resultados ordenados por nota, com mapa e ações em lote."],
        ["Ficha do lead", "Notas, presença digital, CNPJ, contatos, resumo da IA e histórico."],
        ["Pipeline", "Kanban de novo a fechado, follow-ups do dia e limite diário de abordagens."],
        ["Propostas", "Preço sugerido, escopo, perguntas, alertas e texto pronto para enviar."],
      ],
      role: [
        "Produto, arquitetura e desenvolvimento de ponta a ponta.",
        "Regras de pontuação, com pesos editáveis.",
        "Respeito a opt-out e exclusão automática de leads descartados após 6 meses.",
      ],
      impact: [
        "Lista de leads pontuados e com contato válido em minutos, em vez de horas.",
        "Primeira mensagem e proposta escritas pela IA, revisadas antes de enviar.",
        "Abordagem 1:1 pelo WhatsApp, sem disparo em massa.",
      ],
    },
  ],
  en: [
    {
      id: "abajur",
      number: "01",
      title: "Abajur",
      owner: "PERSONAL PROJECT",
      category: "AI · DESKTOP APP",
      description: "Desktop app that shows, live, a team of 41 Claude Code agents working in a pixel art office, with control, replay and metrics.",
      result: "~144 fps · thousands of tests · Windows installer",
      tags: ["Electron", "Next.js", "Rust", "Claude Agent SDK", "SQLite"],
      modalTitle: "Abajur + a team of 41 AI agents",
      modalCategory: "01 / PERSONAL PROJECT / AI & DESKTOP",
      summary: "A team of 41 Claude Code agents organized like a software company, and the desktop app that shows this team working live in an isometric pixel art office.",
      media: {
        kind: "video",
        src: "/cases/abajur.webm",
        fallback: "/cases/abajur.mp4",
        poster: "/cases/abajur-poster.webp",
        alt: "Abajur pixel art office with agents working at their desks",
        caption: "Replay of a real session: each character is an agent, and the speech bubble shows what it is doing.",
      },
      challenge: [
        "Following several agents in the terminal means working blind: you can't see who got stuck, who asked for permission or how much each session cost.",
        "With 41 agents in layers (TechLead, leads and specialists), knowing who is doing what requires reading long logs.",
        "To step in, you had to wait for the agent's turn to finish.",
      ],
      solution: "I organized a team of 41 agents: a TechLead that asks the questions, writes the plan and delegates to 10 leads (frontend, backend, data, infra, design, QA, security, mobile, video and social media), each with 3 specialists. Then the team itself built Abajur under my direction: a desktop app that receives events through global Claude Code hooks and shows everything live in a pixel art office, with full control of the sessions.",
      stack: [
        ["Desktop", "Electron · Next.js (static export) · React 19 · Tailwind CSS"],
        ["Hooks & control", "Rust (authenticated named pipe) · TypeScript"],
        ["AI", "Claude Agent SDK · Claude Code hooks · 41 agents in 3 layers"],
        ["Data & quality", "Local SQLite · masked secrets · Vitest · Playwright · performance tests"],
      ],
      modules: [
        ["Live office", "Each agent at its desk, with its current task, tools used, briefing and report."],
        ["Team control", "Message an agent, pause, resume, stop and approve permissions without opening the terminal."],
        ["Replay & metrics", "Past runs with a timeline, tokens, time, actions and bottlenecks."],
        ["41-agent team", "Questionnaire, plan, execution in waves and QA and security gates, with installer and validator."],
      ],
      role: [
        "Product, architecture and technical decisions for the app and the team.",
        "Design of the 41 agents, the delegation protocol and the technical standards.",
        "Directing and reviewing the agents' work, wave by wave.",
        "Packaging and Windows installer.",
      ],
      impact: [
        "Scene at ~144 fps, measured at p50.",
        "Thousands of automated tests across app, hooks, data and UI.",
        "Ingestion of 3,000 events per second; metrics over 1 million events in 107 ms (p95).",
        "No events lost while the app is closed, thanks to a local spool.",
      ],
    },
    {
      id: "lusa",
      number: "02",
      title: "Donation ecosystem",
      owner: "LUSA BRASIL",
      category: "APP · API · DASHBOARD",
      description: "Donation app for iOS and Android, a central API and a web dashboard with its own checkout, backed by a payment infrastructure with gateway failover.",
      result: "Live on the app stores · Pix and recurring Pix · gateway failover",
      tags: ["React Native", "Expo", "NestJS", "MongoDB", "Next.js", "Pix"],
      modalTitle: "LUSA donation ecosystem",
      modalCategory: "02 / LUSA BRASIL / APP, API & DASHBOARD",
      summary: "The app where donors follow the NGOs they support, the API that stores everything, and the dashboard where LUSA and each NGO manage campaigns, animals, payouts and donations.",
      challenge: [
        "Donations spread across different pages and gateways, with no single view of the donor.",
        "NGOs had no place of their own to publish animals and news and report on spending.",
        "A payment gateway outage meant a stalled campaign.",
      ],
      solution: "I evolved an ecosystem with three clients on top of a single API: the donor and NGO admin app, the LUSA and NGO web dashboard, and the public donation checkout. Underneath, I built the payment and conversion infrastructure: a gateway package with failover between providers and a webhook pipeline that confirms the donation and sends the conversion event to ad platforms.",
      stack: [
        ["Mobile", "React Native · Expo · Expo Router · EAS Update · push notifications"],
        ["Backend", "NestJS · MongoDB · JWT · Swagger"],
        ["Web", "Next.js · Tailwind CSS · ApexCharts · Angular (conversion dashboard)"],
        ["Payments & conversion", "Pix · recurring Pix · gateway failover · Facebook CAPI · Utmify"],
      ],
      modules: [
        ["Donor app", "NGO feed, adoption, sponsorship, payout transparency and a daily streak with points."],
        ["NGO area", "Animals, posts, volunteers and tracking of received payouts."],
        ["LUSA dashboard", "Donations, payout allocation, NGO approval, navigation analytics and app store downloads."],
        ["Payments", "One-off and monthly Pix, gateway failover, payment status and pending Pix."],
      ],
      role: [
        "Joined with the API already in production and evolved API, app and dashboard together.",
        "Built the gateway package with failover and the webhook and conversion pipeline.",
        "Developed app screens, dashboard pages and the donation checkout.",
        "Deploy and production support.",
      ],
      impact: [
        "App published for iOS and Android, with updates that skip a new store release.",
        "One API serving the app, dashboard, checkout and gateway webhooks.",
        "Campaigns keep receiving donations even when a gateway goes down.",
        "Server-confirmed conversions reaching the ad platforms.",
      ],
    },
    {
      id: "icharity",
      number: "03",
      title: "iCharity",
      owner: "LUSA BRASIL",
      category: "PAYMENTS · FINTECH",
      description: "Donation platform for NGOs with its own payment gateway: split at source so the NGO receives 100%, a ledger and automatic reconciliation.",
      result: "100% to the NGO · automatic reconciliation · ~400 tests",
      tags: ["Laravel", "PHP", "PostgreSQL", "Recurring Pix", "Webhooks"],
      modalTitle: "iCharity — the NGO receives 100%",
      modalCategory: "03 / LUSA BRASIL / PAYMENTS",
      summary: "A GoFundMe-style donation platform with its own payment gateway. The money goes straight to the NGO's account, and the fee only exists if the donor chooses to cover it.",
      media: {
        kind: "image",
        src: "/cases/icharity-split.webp",
        alt: "Diagram of the iCharity donation flow: donor, checkout, provider router, split to the NGO, webhook, ledger and reconciliation",
        caption: "Money and confirmation flow (in Portuguese): split at source, raw webhook storage, append-only ledger and reconciliation with the provider.",
      },
      challenge: [
        "Donation platforms keep part of the amount, and the NGO waits days for the payout.",
        "A lost webhook becomes a paid donation that never shows up in the dashboard.",
        "Manual reconciliation in spreadsheets never matches the bank statement.",
      ],
      solution: "I built the platform in Laravel with its own gateway: a router picks the Pix provider with fallback, and the split happens at source, so the donation goes straight to the NGO's account. The checkout goes into the NGO's website with one line of code. Every webhook is stored raw before processing, processing is idempotent, and an append-only ledger records every movement.",
      stack: [
        ["Backend", "Laravel · PHP 8.3 · Sanctum · queues"],
        ["Payments", "Pix · recurring Pix · provider router with fallback · split at source"],
        ["Data", "PostgreSQL · append-only ledger protected by a trigger"],
        ["Quality", "~400 tests · simulated providers in tests · CI with GitHub Actions"],
      ],
      modules: [
        ["Embeddable checkout", "Three styles for the NGO's site, one-off or monthly donation and the optional cover-the-fee box."],
        ["NGO onboarding", "Documents, team review and opening of the payout account."],
        ["Ledger & reconciliation", "Immutable entries, daily integrity check and recovery of lost webhooks."],
        ["NGO dashboard", "Donations, monthly donors, conversion funnel, ad pixels and signed notifications to the NGO's site."],
      ],
      role: [
        "Architecture of the gateway, the split and the ledger.",
        "Backend, checkout and the NGO and staff dashboards.",
        "Tests for payment, refund and reconciliation flows.",
      ],
      impact: [
        "The NGO receives 100% of the donation, straight into its account.",
        "A R$ 5 fee only when the donor chooses to cover it; otherwise the platform absorbs the cost.",
        "Paid donations are never lost: reconciliation recovers what the webhook didn't deliver.",
        "About 400 tests covering payments, refunds, ledger and notifications.",
      ],
    },
    {
      id: "hub",
      number: "04",
      title: "Hub Freelance",
      owner: "PERSONAL PROJECT",
      category: "PROSPECTING · AI",
      description: "Tool that searches businesses on Google Places, reads their website, finds the company ID, measures PageSpeed, scores the opportunity and writes the proposal with AI.",
      result: "Scored lead list in minutes · opens with two clicks",
      tags: ["Next.js", "BullMQ", "Redis", "PostgreSQL", "Claude API", "Docker"],
      modalTitle: "Hub Freelance — AI-powered prospecting",
      modalCategory: "04 / PERSONAL PROJECT / AUTOMATION",
      summary: "Lead finder, pipeline and proposals for freelancers: you pick the region, niche and service, and the hub delivers a ready list to reach out to one by one on WhatsApp.",
      challenge: [
        "Prospecting by hand is slow: finding businesses, opening each site, looking up the company ID and judging whether it's worth reaching out.",
        "Without criteria, the list mixes businesses that already have a good site with the ones that actually need the service.",
        "Writing every first message and proposal from scratch eats the whole day.",
      ],
      solution: "I built a hub that runs locally and opens with two clicks. It searches Google Places and puts each business into an enrichment queue that reads the website (contacts, platform, HTTPS, company ID in the footer), checks the company registry and measures mobile PageSpeed. Each lead gets 0–100 scores per service, and the AI summarizes the business and writes the first message and the proposal.",
      stack: [
        ["App", "Next.js · React · Zod"],
        ["Queues & data", "BullMQ · Redis · PostgreSQL with PostGIS · Drizzle ORM"],
        ["Collection", "Google Places API · PageSpeed Insights API · Cheerio crawler"],
        ["AI & infra", "Claude API · Docker Compose · Windows launch shortcut"],
      ],
      modules: [
        ["Search & map", "Region, niche and service; results sorted by score, with a map and bulk actions."],
        ["Lead profile", "Scores, digital presence, company ID, contacts, AI summary and history."],
        ["Pipeline", "Kanban from new to closed, daily follow-ups and a daily outreach limit."],
        ["Proposals", "Suggested price, scope, questions, warnings and ready-to-send text."],
      ],
      role: [
        "Product, architecture and end-to-end development.",
        "Scoring rules with editable weights.",
        "Opt-out handling and automatic deletion of discarded leads after 6 months.",
      ],
      impact: [
        "A list of scored leads with valid contacts in minutes instead of hours.",
        "First message and proposal written by AI and reviewed before sending.",
        "One-to-one outreach on WhatsApp, no mass messaging.",
      ],
    },
  ],
};

const ngoSites = [
  { label: "SOS Animal Help", href: "https://sosanimalhelp.org" },
  { label: "Doe SOS Animal Help", href: "https://doe.sosanimalhelp.org" },
  { label: "Caio Protetor", href: "https://caioprotetor.com" },
  { label: "Doe Caio Protetor", href: "https://doe.caioprotetor.com" },
  { label: "Cayo Rescatista", href: "https://cayorescatista.org" },
  { label: "Kyle Rescuer", href: "https://donate.kylerescuer.org" },
  { label: "Casa da Mili", href: "https://casadamili.org" },
  { label: "Doe Casa da Mili", href: "https://doe.casadamili.org" },
  { label: "Lar Joana D'arc", href: "https://doe.larjoanadarc.org" },
  { label: "Siulsan Resgate", href: "https://siulsanresgate.org" },
];

export const deliveries: Record<Language, Delivery[]> = {
  pt: [
    {
      title: "Régua de tráfego com IA",
      context: "LUSA Brasil",
      description: "Automação diária que compara o gasto de cada campanha de Meta Ads com a receita no sistema de pagamentos e pausa, reduz ou aumenta o orçamento pelo ROI, com travas de segurança. Roda em Docker, com painel próprio.",
    },
    {
      title: "10 sites de ONGs em Next.js",
      context: "LUSA Brasil",
      description: "Migração de WordPress e Elementor para Next.js com export estático, mantendo URLs e visual, validados por screenshot contra o original. Um deles em espanhol.",
      links: ngoSites,
    },
    {
      title: "TaskFlow",
      context: "LUSA Brasil",
      description: "Gestor de tarefas dos sites de arrecadação: aprovações, metas, cronômetro, calendário, cofre de acessos e notificações push. NestJS e Prisma no backend, Next.js instalável (PWA) no front.",
    },
    {
      title: "Projeto Atlas",
      context: "V4 Company",
      description: "Plataforma interna que centralizou dados de operação, financeiro, comercial e mídia paga, antes espalhados em planilhas.",
      caseStudy: "atlas",
    },
  ],
  en: [
    {
      title: "AI traffic controller",
      context: "LUSA Brasil",
      description: "Daily automation that compares each Meta Ads campaign's spend with the revenue in the payment system and pauses, cuts or scales its budget by ROI, with safety limits. Runs in Docker, with its own dashboard.",
    },
    {
      title: "10 NGO websites in Next.js",
      context: "LUSA Brasil",
      description: "Migration from WordPress and Elementor to statically exported Next.js, keeping URLs and design, validated by screenshot against the original. One of them in Spanish.",
      links: ngoSites,
    },
    {
      title: "TaskFlow",
      context: "LUSA Brasil",
      description: "Task manager for the fundraising websites: approvals, goals, timer, calendar, credentials vault and push notifications. NestJS and Prisma on the backend, installable Next.js (PWA) on the front.",
    },
    {
      title: "Atlas Project",
      context: "V4 Company",
      description: "Internal platform that centralized operations, finance, sales and paid media data that used to live in spreadsheets.",
      caseStudy: "atlas",
    },
  ],
};

export const atlasCaseStudy: Record<Language, CaseStudy> = {
  pt: {
    id: "atlas",
    number: "05",
    title: "Projeto Atlas",
    owner: "V4 COMPANY",
    category: "INTELIGÊNCIA OPERACIONAL",
    description: "",
    result: "",
    tags: [],
    modalTitle: "Atlas — Plataforma Interna de Automação & Inteligência Operacional",
    modalCategory: "ESTUDO DE CASO / V4 COMPANY",
    summary: "Plataforma de inteligência e automação criada para transformar dados dispersos em decisões estratégicas, centralizando mídia paga, operação, performance comercial e monitoramento de clientes via WhatsApp.",
    challenge: [
      "Dados fragmentados em diversas plataformas e planilhas.",
      "Processos manuais de coleta e apresentação de resultados.",
      "Baixa visibilidade estratégica em tempo real para a diretoria.",
      "Dificuldade para mensurar eficiência da equipe e margem operacional por cliente.",
    ],
    solution: "O Atlas foi construído do zero. O backend começou em Laravel e evoluiu para uma arquitetura moderna baseada em serviços com Node.js, NestJS, Laravel 11 e Python/FastAPI, criando um hub centralizado para dados operacionais, financeiros, comerciais e de mídia.",
    stack: [
      ["Frontend", "Next.js · Tailwind CSS · Dashboards dinâmicos · Painéis para TVs corporativas"],
      ["Backend", "Node.js · NestJS · Laravel 11 · Python · FastAPI"],
      ["Dados & cache", "PostgreSQL via Supabase · MySQL · Redis"],
      ["Integrações", "Meta Marketing API · Google Ads API · Evolution API · Ekite"],
      ["Infraestrutura", "Docker · CI/CD · VPS · Workers · Logs estruturados"],
    ],
    modules: [
      ["Inteligência de mídia paga", "Integração com Meta e Google Ads para ROAS, CPA, pacing de budget e performance em tempo real."],
      ["Eficiência operacional", "Cruzamento entre horas estimadas e realizadas, rentabilidade, margem operacional e capacidade por cliente e squad."],
      ["Dashboard comercial & telão", "Painéis em tempo real com metas, gamificação e transparência das métricas comerciais."],
      ["Monitoramento com IA", "Análise de sentimento em grupos de WhatsApp com Google Gemini, Health Score e alertas de risco."],
    ],
    role: [
      "Concepção estratégica e arquitetura junto à diretoria executiva.",
      "Desenvolvimento Full Stack, do banco relacional ao frontend em Next.js.",
      "Engenharia de dados, ETL e integração com APIs complexas.",
      "Infraestrutura, filas com Redis, workers, Docker e CI/CD.",
    ],
    impact: [
      "Redução drástica do trabalho manual em controles e relatórios.",
      "Fonte única de verdade para o C-Level e a operação.",
      "Maior previsibilidade na entrega de projetos e no burn rate de campanhas.",
      "Evolução de planilhas isoladas para um ecossistema próprio de engenharia de software.",
    ],
  },
  en: {
    id: "atlas",
    number: "05",
    title: "Atlas Project",
    owner: "V4 COMPANY",
    category: "OPERATIONAL INTELLIGENCE",
    description: "",
    result: "",
    tags: [],
    modalTitle: "Atlas — Internal Automation & Operational Intelligence Platform",
    modalCategory: "CASE STUDY / V4 COMPANY",
    summary: "Intelligence and automation platform built to turn scattered data into strategic decisions, centralizing paid media, operations, sales performance and client monitoring via WhatsApp.",
    challenge: [
      "Data fragmented across many platforms and spreadsheets.",
      "Manual processes to collect and present results.",
      "Little real-time strategic visibility for leadership.",
      "Hard to measure team efficiency and operating margin per client.",
    ],
    solution: "Atlas was built from scratch. The backend started in Laravel and evolved into a modern service-based architecture with Node.js, NestJS, Laravel 11 and Python/FastAPI, creating a central hub for operational, financial, sales and media data.",
    stack: [
      ["Frontend", "Next.js · Tailwind CSS · Dynamic dashboards · Office TV panels"],
      ["Backend", "Node.js · NestJS · Laravel 11 · Python · FastAPI"],
      ["Data & cache", "PostgreSQL via Supabase · MySQL · Redis"],
      ["Integrations", "Meta Marketing API · Google Ads API · Evolution API · Ekite"],
      ["Infrastructure", "Docker · CI/CD · VPS · Workers · Structured logs"],
    ],
    modules: [
      ["Paid media intelligence", "Meta and Google Ads integration for ROAS, CPA, budget pacing and real-time performance."],
      ["Operational efficiency", "Estimated vs. actual hours, profitability, operating margin and capacity per client and squad."],
      ["Sales dashboard & TV wall", "Real-time panels with goals, gamification and transparent sales metrics."],
      ["AI monitoring", "Sentiment analysis of WhatsApp groups with Google Gemini, Health Score and risk alerts."],
    ],
    role: [
      "Strategy and architecture alongside the executive team.",
      "Full stack development, from the relational database to the Next.js frontend.",
      "Data engineering, ETL and integration with complex APIs.",
      "Infrastructure, Redis queues, workers, Docker and CI/CD.",
    ],
    impact: [
      "Drastic reduction of manual work in controls and reports.",
      "Single source of truth for leadership and operations.",
      "More predictable project delivery and campaign burn rate.",
      "From isolated spreadsheets to an in-house software ecosystem.",
    ],
  },
};
