import type { Language } from "./content";

export type StatIcon = "code" | "layers" | "users" | "star";

export const stats: Record<Language, { icon: StatIcon; value: string; label: [string, string] }[]> = {
  pt: [
    { icon: "code", value: "7", label: ["anos programando", "desde 2019"] },
    { icon: "layers", value: "+40", label: ["projetos", "entregues"] },
    { icon: "users", value: "41", label: ["agentes de IA", "no meu time"] },
    { icon: "star", value: "5", label: ["áreas, do back-end", "ao mobile e à IA"] },
  ],
  en: [
    { icon: "code", value: "7", label: ["years coding", "since 2019"] },
    { icon: "layers", value: "40+", label: ["projects", "delivered"] },
    { icon: "users", value: "41", label: ["AI agents", "on my team"] },
    { icon: "star", value: "5", label: ["areas, from back-end", "to mobile and AI"] },
  ],
};

export const heroTech = ["Next.js", "NestJS", "React", "TypeScript", "Python", "Docker", "AWS", "PostgreSQL"];

export const alsoWorkWith = ["Prisma", "Drizzle", "Vitest", "OpenAPI", "GitHub Actions", "n8n"];

export const hubVisual = {
  pt: { stats: ["Leads encontrados", "Oportunidades", "Sites analisados", "Propostas geradas"], name: "Restaurante Exemplo", level: "Oportunidade alta", checks: ["CNPJ encontrado", "PageSpeed: 42", "Proposta gerada"] },
  en: { stats: ["Leads found", "Opportunities", "Sites analyzed", "Proposals drafted"], name: "Example Restaurant", level: "High opportunity", checks: ["Company ID found", "PageSpeed: 42", "Proposal drafted"] },
};

export const text = {
  pt: {
    available: "DISPONÍVEL PARA PROJETOS FREELANCE",
    eyebrow: "SOFTWARE ENGINEER · ARQUITETURA & IA",
    heroTitle: ["Engenharia", "de software", "com IA", "no núcleo."],
    heroLead: [["Projeto e construo ", false], ["sistemas de ponta a ponta", true], [": back-ends e APIs, pagamentos, apps e arquiteturas com ", false], ["agentes de IA", true], [", do desenho da arquitetura ao deploy.", false]] as [string, boolean][],
    seeProjects: "Ver projetos",
    talk: "Falar comigo",
    techIUse: "TECNOLOGIAS QUE USO",
    metricLabel: "Projetos entregues",
    metricValue: "+40",
    metricUnit: "desde 2019",
    books: ["Clean Architecture", "Data-Intensive Applications", "Domain-Driven Design", "Inteligência Artificial"],
    notebook: ["ARQUITETURA", "TESTES", "DEPLOY"],

    aboutIndex: "SOBRE MIM",
    aboutTitle: ["Mais do que código,", "engenharia de verdade."],
    aboutLead: [["Sou ", false], ["Igor de Souza Cardoso", true], [", engenheiro de software full stack na ", false], ["LUSA Brasil", true], [". Projeto e desenvolvo os sistemas do setor animal: APIs, pagamentos com gateway próprio, apps e agentes de IA.", false]] as [string, boolean][],
    aboutBody: "Gosto dos problemas difíceis de sistema: modelagem de dados, integrações, filas, consistência de pagamentos e arquiteturas de IA que funcionam em produção, não só em demo.",
    values: [
      { icon: "layers", title: "Arquitetura", text: "Domínios, contratos e decisões técnicas." },
      { icon: "users", title: "Back-end sólido", text: "APIs, dados, filas e integrações." },
      { icon: "bolt", title: "Ponta a ponta", text: "Do desenho ao deploy, com testes." },
    ],
    whatIDo: "O QUE EU FAÇO",
    stackTitle: ["Stack para sistemas", "em produção."],
    handStack: ["ESCOLHER A", "FERRAMENTA", "CERTA TAMBÉM", "É ARQUITETURA."],
    alsoWork: "Também uso:",

    careerIndex: "CARREIRA",
    careerTitle: ["Experiência", "construindo", "sistemas", "em produção."],
    careerLead: "Programo desde 2019. Comecei estudando sozinho, passei pela Trybe e por projetos freelance, e hoje projeto e construo sistemas com APIs, pagamentos, apps e automação com IA em produção.",
    education: "FORMAÇÃO",
    degrees: [
      { period: "2025 — 2029", title: "Bacharelado em Ciência da Computação", school: "UniMAX — Centro Universitário Max Planck" },
      { period: "2020 — 2022 · 1.500h+", title: "Desenvolvimento Web Full Stack", school: "Trybe" },
    ],
    current: "Atual",

    projectsIndex: "PROJETOS EM DESTAQUE",
    projectsTitle: ["Sistemas construídos", "para ", "rodar em produção."],
    projectsLead: "Uma seleção entre os mais de 40 projetos que já entreguei, muitos deles em repositórios privados. Cada um abre um estudo de caso com o problema, a arquitetura, a stack e o resultado.",
    handProjects: ["ARQUITETURA", "ANTES DO", "CÓDIGO."],
    deliveredValue: "+40",
    deliveredLabel: ["projetos entregues", "desde 2019"],
    filters: [
      { id: "todos", label: "Todos" },
      { id: "proprios", label: "Projetos próprios" },
      { id: "lusa", label: "LUSA Brasil" },
      { id: "sistemas", label: "Back-end e sistemas" },
      { id: "ia", label: "IA e automação" },
      { id: "web", label: "Front-end e apps" },
    ],
    alsoDelivered: "TAMBÉM ENTREGUEI",
    noResults: "Nenhum projeto nesta categoria.",

    processIndex: "PROCESSO",
    processTitle: ["Como construo", "sistemas ", "que duram."],
    processLead: "Engenharia com método: entender o domínio, decidir a arquitetura por escrito, construir com testes e só então colocar em produção, com observabilidade para evoluir sem medo.",
    steps: [
      { icon: "search", title: "Entendo o domínio", text: "Mapeio regras de negócio, restrições e riscos antes de escrever código.", items: ["Requisitos e restrições", "Modelagem do domínio", "Riscos técnicos", "Critérios de aceite"] },
      { icon: "bulb", title: "Desenho a arquitetura", text: "Defino serviços, contratos e dados, e registro as decisões para o time.", items: ["ADRs e contratos de API", "Modelo de dados", "Segurança desde o início", "Entrega em etapas"] },
      { icon: "code", title: "Construo com testes", text: "Back-end, front-end e integrações com testes automatizados e revisão de código.", items: ["Back-end e front-end", "Testes automatizados", "Code review", "CI/CD"] },
      { icon: "gear", title: "Coloco em produção", text: "Deploy reproduzível, com logs, métricas e caminho de volta se algo falhar.", items: ["Deploy com Docker", "Logs e observabilidade", "Rollback seguro", "Documentação"] },
      { icon: "chart", title: "Evoluo e escalo", text: "Meço desempenho e custo, refatoro o que precisa e adiciono IA onde ela resolve.", items: ["Performance e custos", "Refatoração contínua", "Escala horizontal", "Novas features com IA"] },
    ],
    focusLabel: "FOCO NO QUE IMPORTA",
    focusTitle: ["Engenharia séria para sistemas que não podem parar:", "", "pagamentos, dados e IA em produção."],
    focusCta: "Vamos conversar?",
    focusNote: "Projetos, consultoria e oportunidades.",

    contactIndex: "CONTATO",
    contactTitle: ["Vamos construir", "um sistema", "sólido juntos?"],
    contactLead: "Se você precisa de um back-end confiável, de uma arquitetura com IA ou de alguém para assumir a parte técnica de um produto, me conte o contexto. Respondo com uma proposta técnica, não com um orçamento genérico.",
    channels: [
      { id: "whatsapp", title: "WhatsApp", text: "Conversa rápida e direta.", link: "Falar no WhatsApp" },
      { id: "email", title: "E-mail", text: "Para detalhes e propostas.", link: "Enviar e-mail" },
      { id: "linkedin", title: "LinkedIn", text: "Carreira e recomendações.", link: "Ver meu perfil" },
      { id: "github", title: "GitHub", text: "Código e projetos públicos.", link: "github.com/igorcardos0" },
    ],
    formTitle: "Me envie uma mensagem",
    formLead: "Conte o contexto do sistema e o problema. Respondo o mais rápido possível.",
    name: "Seu nome",
    email: "Seu e-mail",
    company: "Empresa (opcional)",
    message: "Qual é o sistema e o desafio?",
    send: "Enviar mensagem",
    sending: "Enviando...",
    privacy: "Seus dados estão seguros. Não compartilho suas informações.",
    availableFor: "DISPONÍVEL PARA FREELANCE",
    availableTitle: ["Sistemas sob medida,", "do back-end à IA."],
    availability: [
      { icon: "server", title: "Back-end e APIs", text: "Serviços, integrações, filas e modelagem de dados." },
      { icon: "brain", title: "Arquitetura de IA", text: "Agentes, RAG e LLMs integrados ao seu sistema." },
      { icon: "layers", title: "Arquitetura de software", text: "Desenho, revisão e evolução de sistemas existentes." },
      { icon: "monitor", title: "Front-end e apps", text: "Interfaces web e mobile ligadas ao back-end." },
    ],
    backToTop: "Voltar ao topo",
  },
  en: {
    available: "AVAILABLE FOR FREELANCE PROJECTS",
    eyebrow: "SOFTWARE ENGINEER · ARCHITECTURE & AI",
    heroTitle: ["Software", "engineering", "with AI", "at the core."],
    heroLead: [["I design and build ", false], ["end-to-end systems", true], [": back-ends and APIs, payments, apps and architectures with ", false], ["AI agents", true], [", from the architecture to the deploy.", false]] as [string, boolean][],
    seeProjects: "View projects",
    talk: "Talk to me",
    techIUse: "TECHNOLOGIES I USE",
    metricLabel: "Projects delivered",
    metricValue: "40+",
    metricUnit: "since 2019",
    books: ["Clean Architecture", "Data-Intensive Applications", "Domain-Driven Design", "Artificial Intelligence"],
    notebook: ["ARCHITECTURE", "TESTS", "DEPLOY"],

    aboutIndex: "ABOUT ME",
    aboutTitle: ["More than code,", "real engineering."],
    aboutLead: [["I'm ", false], ["Igor de Souza Cardoso", true], [", a full stack software engineer at ", false], ["LUSA Brasil", true], [". I design and build the animal sector's systems: APIs, payments with our own gateway, apps and AI agents.", false]] as [string, boolean][],
    aboutBody: "I enjoy the hard system problems: data modeling, integrations, queues, payment consistency and AI architectures that work in production, not just in a demo.",
    values: [
      { icon: "layers", title: "Architecture", text: "Domains, contracts and technical decisions." },
      { icon: "users", title: "Solid back-end", text: "APIs, data, queues and integrations." },
      { icon: "bolt", title: "End to end", text: "From design to deploy, with tests." },
    ],
    whatIDo: "WHAT I DO",
    stackTitle: ["A stack for systems", "in production."],
    handStack: ["CHOOSING THE", "RIGHT TOOL", "IS ALSO", "ARCHITECTURE."],
    alsoWork: "I also use:",

    careerIndex: "CAREER",
    careerTitle: ["Experience", "building", "systems", "in production."],
    careerLead: "I've been coding since 2019. I started self-taught, went through Trybe and freelance work, and today I design and build systems with APIs, payments, apps and AI automation in production.",
    education: "EDUCATION",
    degrees: [
      { period: "2025 — 2029", title: "Bachelor's Degree in Computer Science", school: "UniMAX — Centro Universitário Max Planck" },
      { period: "2020 — 2022 · 1,500h+", title: "Full Stack Web Development Program", school: "Trybe" },
    ],
    current: "Current",

    projectsIndex: "FEATURED PROJECTS",
    projectsTitle: ["Systems built", "to ", "run in production."],
    projectsLead: "A selection from the 40+ projects I've delivered, many of them in private repositories. Each one opens a case study with the problem, the architecture, the stack and the result.",
    handProjects: ["ARCHITECTURE", "BEFORE", "CODE."],
    deliveredValue: "40+",
    deliveredLabel: ["projects delivered", "since 2019"],
    filters: [
      { id: "todos", label: "All" },
      { id: "proprios", label: "Personal projects" },
      { id: "lusa", label: "LUSA Brasil" },
      { id: "sistemas", label: "Back-end & systems" },
      { id: "ia", label: "AI & automation" },
      { id: "web", label: "Front-end & apps" },
    ],
    alsoDelivered: "ALSO DELIVERED",
    noResults: "No projects in this category.",

    processIndex: "PROCESS",
    processTitle: ["How I build", "systems ", "that last."],
    processLead: "Engineering with method: understand the domain, decide the architecture in writing, build with tests and only then ship, with observability to keep evolving safely.",
    steps: [
      { icon: "search", title: "I map the domain", text: "I map business rules, constraints and risks before writing code.", items: ["Requirements and constraints", "Domain modeling", "Technical risks", "Acceptance criteria"] },
      { icon: "bulb", title: "I design the architecture", text: "I define services, contracts and data, and record the decisions for the team.", items: ["ADRs and API contracts", "Data model", "Security from day one", "Incremental delivery"] },
      { icon: "code", title: "I build with tests", text: "Back-end, front-end and integrations with automated tests and code review.", items: ["Back-end and front-end", "Automated tests", "Code review", "CI/CD"] },
      { icon: "gear", title: "I ship to production", text: "Reproducible deploys with logs, metrics and a way back if something fails.", items: ["Docker deploys", "Logs and observability", "Safe rollback", "Documentation"] },
      { icon: "chart", title: "I evolve and scale", text: "I measure performance and cost, refactor what needs it and add AI where it helps.", items: ["Performance and cost", "Continuous refactoring", "Horizontal scaling", "AI-powered features"] },
    ],
    focusLabel: "FOCUS ON WHAT MATTERS",
    focusTitle: ["Serious engineering for systems that can't go down:", "", "payments, data and AI in production."],
    focusCta: "Let's talk?",
    focusNote: "Projects, consulting and opportunities.",

    contactIndex: "CONTACT",
    contactTitle: ["Let's build", "a solid system", "together?"],
    contactLead: "If you need a reliable back-end, an AI architecture or someone to own the technical side of a product, tell me the context. I'll reply with a technical proposal, not a generic quote.",
    channels: [
      { id: "whatsapp", title: "WhatsApp", text: "Quick, direct conversation.", link: "Chat on WhatsApp" },
      { id: "email", title: "Email", text: "For details and proposals.", link: "Send an email" },
      { id: "linkedin", title: "LinkedIn", text: "Career and recommendations.", link: "View my profile" },
      { id: "github", title: "GitHub", text: "Code and public projects.", link: "github.com/igorcardos0" },
    ],
    formTitle: "Send me a message",
    formLead: "Tell me about the system and the problem. I'll reply as soon as I can.",
    name: "Your name",
    email: "Your email",
    company: "Company (optional)",
    message: "What's the system and the challenge?",
    send: "Send message",
    sending: "Sending...",
    privacy: "Your data is safe. I don't share your information.",
    availableFor: "AVAILABLE FOR FREELANCE",
    availableTitle: ["Custom systems,", "from back-end to AI."],
    availability: [
      { icon: "server", title: "Back-end and APIs", text: "Services, integrations, queues and data modeling." },
      { icon: "brain", title: "AI architecture", text: "Agents, RAG and LLMs integrated into your system." },
      { icon: "layers", title: "Software architecture", text: "Design, review and evolution of existing systems." },
      { icon: "monitor", title: "Front-end and apps", text: "Web and mobile interfaces wired to the back-end." },
    ],
    backToTop: "Back to top",
  },
} as const;

export type CardVisual = "abajur" | "lusa" | "icharity" | "hub" | "bitenglish";

export const projectCards: Record<Language, { id: CardVisual; badge: string; points: string[]; cta: string; filters: string[] }[]> = {
  pt: [
    { id: "abajur", badge: "PROJETO PRÓPRIO", points: ["~144 fps", "Milhares de testes", "Instalador para Windows"], cta: "Ver estudo de caso", filters: ["proprios", "ia", "sistemas", "web"] },
    { id: "lusa", badge: "LUSA BRASIL", points: ["Em produção nas lojas", "Pix e Pix Automático", "Failover entre gateways"], cta: "Ver estudo de caso", filters: ["lusa", "sistemas", "web"] },
    { id: "icharity", badge: "LUSA BRASIL", points: ["100% para a ONG", "Conciliação automática", "~400 testes"], cta: "Ver estudo de caso", filters: ["lusa", "sistemas"] },
    { id: "hub", badge: "PROJETO PRÓPRIO", points: ["Lista de leads pontuados em minutos", "Abre com dois cliques", "Proposta escrita com IA"], cta: "Ver estudo de caso", filters: ["proprios", "ia", "sistemas"] },
    { id: "bitenglish", badge: "PROJETO PRÓPRIO", points: ["12 mini-jogos em pixel art", "~600 palavras do A1 ao B1", "Ranking de alunos e turmas"], cta: "Ver estudo de caso", filters: ["proprios", "sistemas", "web"] },
  ],
  en: [
    { id: "abajur", badge: "PERSONAL PROJECT", points: ["~144 fps", "Thousands of tests", "Windows installer"], cta: "View case study", filters: ["proprios", "ia", "sistemas", "web"] },
    { id: "lusa", badge: "LUSA BRASIL", points: ["Live on the app stores", "Pix and recurring Pix", "Gateway failover"], cta: "View case study", filters: ["lusa", "sistemas", "web"] },
    { id: "icharity", badge: "LUSA BRASIL", points: ["100% to the NGO", "Automatic reconciliation", "~400 tests"], cta: "View case study", filters: ["lusa", "sistemas"] },
    { id: "hub", badge: "PERSONAL PROJECT", points: ["Scored lead list in minutes", "Opens with two clicks", "AI-written proposals"], cta: "View case study", filters: ["proprios", "ia", "sistemas"] },
    { id: "bitenglish", badge: "PERSONAL PROJECT", points: ["12 pixel art mini-games", "~600 words from A1 to B1", "Student and class rankings"], cta: "View case study", filters: ["proprios", "sistemas", "web"] },
  ],
};
