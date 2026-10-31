export type Language = "pt" | "en";

export interface Job {
  logo: "lusa" | "v4" | "alplatech" | "games" | "person";
  current?: boolean;
  start: string;
  end: string;
  company: string;
  role: string;
  description: string;
  tags: string[];
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
  links?: { label: string; href: string }[];
}

export interface Delivery {
  id: string;
  icon: "chart" | "globe" | "check" | "layers";
  title: string;
  context: string;
  description: string;
  filters: string[];
}

export const nav = {
  pt: [
    { id: "inicio", label: "Início", number: "01" },
    { id: "sobre", label: "Sobre", number: "02" },
    { id: "experiencia", label: "Carreira", number: "03" },
    { id: "projetos", label: "Projetos", number: "04" },
    { id: "processo", label: "Processo", number: "05" },
    { id: "contato", label: "Contato", number: "06" },
  ],
  en: [
    { id: "inicio", label: "Home", number: "01" },
    { id: "sobre", label: "About", number: "02" },
    { id: "experiencia", label: "Career", number: "03" },
    { id: "projetos", label: "Projects", number: "04" },
    { id: "processo", label: "Process", number: "05" },
    { id: "contato", label: "Contact", number: "06" },
  ],
};

export const skills: Record<Language, { icon: "brain" | "server" | "monitor" | "cloud"; title: string; items: string }[]> = {
  pt: [
    { icon: "brain", title: "IA aplicada", items: "LLMs · Agentes · Claude SDK · RAG · Embeddings · Vector Store · n8n" },
    { icon: "server", title: "Backend e dados", items: "NestJS · Node.js · Laravel · Python · Rust · PostgreSQL · MongoDB · Supabase · Redis · MySQL" },
    { icon: "monitor", title: "Frontend e mobile", items: "Next.js · React · React Native (Expo) · Angular · TypeScript · Tailwind CSS · Electron" },
    { icon: "cloud", title: "Infra e DevOps", items: "Docker · AWS · DigitalOcean · VPS · CI/CD · GitHub Actions · Linux · Vercel · Git" },
  ],
  en: [
    { icon: "brain", title: "Applied AI", items: "LLMs · Agents · Claude SDK · RAG · Embeddings · Vector Store · n8n" },
    { icon: "server", title: "Backend & data", items: "NestJS · Node.js · Laravel · Python · Rust · PostgreSQL · MongoDB · Supabase · Redis · MySQL" },
    { icon: "monitor", title: "Frontend & mobile", items: "Next.js · React · React Native (Expo) · Angular · TypeScript · Tailwind CSS · Electron" },
    { icon: "cloud", title: "Infra & DevOps", items: "Docker · AWS · DigitalOcean · VPS · CI/CD · GitHub Actions · Linux · Vercel · Git" },
  ],
};

export const experience: Record<Language, Job[]> = {
  pt: [
    { logo: "lusa", current: true, start: "Out 2026", end: "Atual", company: "LUSA Brasil", role: "Engenheiro de Software Full Stack Pleno · Líder Técnico", description: "Liderança técnica do setor animal: arquitetura dos sistemas, agentes de IA e automação, além do desenvolvimento do back-end, dos pagamentos e do app de doações.", tags: ["Next.js", "NestJS", "React", "Docker", "AWS", "IA"] },
    { logo: "lusa", start: "Jul 2026", end: "Set 2026", company: "LUSA Brasil", role: "Engenheiro de Software Full Stack Pleno", description: "Ecossistema de doações: app iOS e Android, API em NestJS, painel com checkout e a infraestrutura de pagamentos com failover entre gateways.", tags: ["React Native", "Next.js", "NestJS", "MongoDB", "Pix"] },
    { logo: "v4", start: "Dez 2025", end: "Jun 2026", company: "V4 Company", role: "Engenheiro de Software Full Stack Pleno", description: "Desenvolvimento de aplicações internas, automações e integrações para operação, marketing e gestão de dados.", tags: ["Next.js", "Node.js", "Python", "n8n", "Meta Ads", "APIs"] },
    { logo: "v4", start: "Set 2025", end: "Dez 2025", company: "V4 Company", role: "Engenheiro de Software Full Stack · Martech", description: "Front-end e integrações para marketing e vendas: aplicações em React e Next.js, rastreamento de conversão e integrações com IA.", tags: ["WordPress", "WooCommerce", "Next.js", "React", "IA"] },
    { logo: "alplatech", start: "Nov 2024", end: "Set 2025", company: "ALPLATECH", role: "Engenheiro de Software Full Stack", description: "Sistemas web sob medida, APIs e integrações com Node.js e PostgreSQL, da descoberta e prototipação ao deploy.", tags: ["React", "Node.js", "PostgreSQL", "APIs", "WordPress"] },
    { logo: "games", start: "Jan 2024", end: "Ago 2024", company: "Studio Games Franchising", role: "Técnico de TI e Automação", description: "Suporte técnico, infraestrutura local e automação de rotinas.", tags: ["Python", "Redes", "Automação"] },
    { logo: "person", start: "Dez 2022", end: "Jan 2024", company: "Autônomo", role: "Desenvolvedor Web Freelance", description: "Projetos web para pequenos negócios, sites e lojas online.", tags: ["WordPress", "PHP", "React", "Node.js"] },
  ],
  en: [
    { logo: "lusa", current: true, start: "Oct 2026", end: "Present", company: "LUSA Brasil", role: "Mid-Level Full Stack Software Engineer · Tech Lead", description: "Technical leadership of the animal sector: system architecture, AI agents and automation, plus building the back-end, payments and the donation app.", tags: ["Next.js", "NestJS", "React", "Docker", "AWS", "AI"] },
    { logo: "lusa", start: "Jul 2026", end: "Sep 2026", company: "LUSA Brasil", role: "Mid-Level Full Stack Software Engineer", description: "Donation ecosystem: iOS and Android app, NestJS API, dashboard with checkout and the payment infrastructure with gateway failover.", tags: ["React Native", "Next.js", "NestJS", "MongoDB", "Pix"] },
    { logo: "v4", start: "Dec 2025", end: "Jun 2026", company: "V4 Company", role: "Mid-Level Full Stack Software Engineer", description: "Internal applications, automations and integrations for operations, marketing and data management.", tags: ["Next.js", "Node.js", "Python", "n8n", "Meta Ads", "APIs"] },
    { logo: "v4", start: "Sep 2025", end: "Dec 2025", company: "V4 Company", role: "Full Stack Software Engineer · Martech", description: "Front-end and integrations for marketing and sales: React and Next.js applications, conversion tracking and AI integrations.", tags: ["WordPress", "WooCommerce", "Next.js", "React", "AI"] },
    { logo: "alplatech", start: "Nov 2024", end: "Sep 2025", company: "ALPLATECH", role: "Full Stack Software Engineer", description: "Custom web systems, APIs and integrations with Node.js and PostgreSQL, from discovery and prototyping to deploy.", tags: ["React", "Node.js", "PostgreSQL", "APIs", "WordPress"] },
    { logo: "games", start: "Jan 2024", end: "Aug 2024", company: "Studio Games Franchising", role: "IT & Automation Technician", description: "Technical support, local infrastructure and automation of routines.", tags: ["Python", "Networking", "Automation"] },
    { logo: "person", start: "Dec 2022", end: "Jan 2024", company: "Self-employed", role: "Freelance Web Developer", description: "Web projects for small businesses: websites and online stores.", tags: ["WordPress", "PHP", "React", "Node.js"] },
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
    {
      id: "bitenglish",
      number: "05",
      title: "BitEnglish",
      owner: "PROJETO PRÓPRIO",
      category: "EDTECH · PWA",
      description: "PWA gratuito e mobile-first para adultos aprenderem vocabulário de inglês com mini-jogos em pixel art, XP, sequência de dias, rankings e chat entre alunos.",
      result: "12 mini-jogos em pixel art · ~600 palavras do A1 ao B1 · ranking de turmas",
      tags: ["Next.js", "Supabase", "PostgreSQL", "PWA", "Tailwind CSS"],
      modalTitle: "BitEnglish — inglês um bit por dia",
      modalCategory: "05 / PROJETO PRÓPRIO / EDTECH",
      summary: "Um PWA gratuito para aprender vocabulário de inglês \"um bit por dia\": mini-jogos curtos em pixel art, XP, sequência de dias, conquistas, ranking de pessoas e turmas e um chat em inglês entre os alunos.",
      media: {
        kind: "image",
        src: "/cases/bitenglish-telas.webp",
        alt: "Telas do BitEnglish: início, jogo da memória, ranking de turmas e gestão de turmas",
        caption: "Início, jogo da memória, ranking de turmas e gestão de turmas, com a identidade em pixel art do próprio app.",
      },
      challenge: [
        "Apps de vocabulário parecem lição de casa, e a maioria dos adultos desiste nas primeiras semanas.",
        "Professores não tinham um jeito simples de juntar alunos em turmas e acompanhar o progresso.",
        "Ferramentas com jogos e ranking costumam ser pagas ou cheias de anúncios.",
      ],
      solution: "Construí um único app Next.js full-stack hospedado na Vercel, com o Supabase cuidando de banco, autenticação e tempo real. Cada etapa da trilha do A1 ao B1 é jogada por mini-jogos com as palavras dela, e a revisão espaçada traz de volta as que o aluno errou. Os alunos entram em turmas, disputam o ranking da semana e praticam num chat moderado. O dono administra pessoas, turmas, conteúdo e moderação numa área admin dentro do próprio app. Toda a identidade visual (logo, mascote, ícones, conquistas e animações) foi desenhada em pixel art para o projeto.",
      stack: [
        ["App", "Next.js (App Router) · React · TypeScript · Tailwind CSS · PWA"],
        ["Dados e auth", "Supabase · PostgreSQL com RLS · Auth · Realtime"],
        ["Conteúdo e IA", "~600 palavras do A1 ao B1 geradas com IA · tutor com Claude atrás de flag"],
        ["Qualidade e infra", "Vercel · Vitest · Playwright · stack de custo zero"],
      ],
      modules: [
        ["12 mini-jogos", "Memória, caça-palavras, forca, palavras cruzadas e mais 8, todos com as palavras de cada etapa."],
        ["Trilha e revisão", "Níveis divididos em etapas, meta diária e revisão espaçada das palavras erradas."],
        ["Gamificação", "XP, sequência de dias, conquistas e ranking semanal de pessoas e turmas."],
        ["Turmas e admin", "Área do professor para criar turmas, acompanhar alunos, gerenciar conteúdo e moderar o chat."],
      ],
      role: [
        "Produto, arquitetura e desenvolvimento full stack.",
        "Modelagem com segurança por linha (RLS) no Supabase.",
        "Identidade em pixel art: logo, mascote, 64 ícones, conquistas e emblemas de turma.",
      ],
      impact: [
        "Aprender vira jogo, em sessões de poucos minutos por dia.",
        "As turmas competem entre si, o que faz os alunos voltarem.",
        "Gratuito para os alunos, rodando numa infraestrutura de custo zero.",
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
    {
      id: "bitenglish",
      number: "05",
      title: "BitEnglish",
      owner: "PERSONAL PROJECT",
      category: "EDTECH · PWA",
      description: "Free, mobile-first PWA for Brazilian adults to learn English vocabulary through pixel art mini-games, with XP, streaks, rankings and a student chat.",
      result: "12 pixel art mini-games · ~600 words A1→B1 · class rankings",
      tags: ["Next.js", "Supabase", "PostgreSQL", "PWA", "Tailwind CSS"],
      modalTitle: "BitEnglish — English one bit a day",
      modalCategory: "05 / PERSONAL PROJECT / EDTECH",
      summary: "A free PWA to learn English vocabulary \"one bit a day\": short pixel art mini-games, XP, streaks, achievements, rankings for students and classes, and a chat in English between learners.",
      media: {
        kind: "image",
        src: "/cases/bitenglish-telas.webp",
        alt: "BitEnglish screens: home, memory game, class ranking and class admin",
        caption: "Home, memory game, class ranking and class admin, all in the app's own pixel art identity.",
      },
      challenge: [
        "Vocabulary apps feel like homework, and most adult learners quit in the first weeks.",
        "Teachers had no simple way to group students into classes and follow their progress.",
        "Learning tools with games and rankings are usually paid or full of ads.",
      ],
      solution: "I built a single full-stack Next.js app hosted on Vercel with Supabase for the database, authentication and realtime. Each stage of the A1→B1 track is played through mini-games about its words, and spaced review brings back the ones the learner got wrong. Students join classes, compete in weekly rankings and practice in a moderated chat. The owner manages people, classes, content and moderation in an admin area inside the same app. The whole visual identity — logo, mascot, icons, achievements and animations — was designed in pixel art for the project.",
      stack: [
        ["App", "Next.js (App Router) · React · TypeScript · Tailwind CSS · PWA"],
        ["Data & auth", "Supabase · PostgreSQL with RLS · Auth · Realtime"],
        ["Content & AI", "~600 words A1→B1 generated with AI · Claude tutor behind a feature flag"],
        ["Quality & infra", "Vercel · Vitest · Playwright · zero-cost stack"],
      ],
      modules: [
        ["12 mini-games", "Memory, word search, hangman, crossword and 8 more, all built on each stage's words."],
        ["Track and review", "Levels split into stages, daily goal and spaced review of missed words."],
        ["Gamification", "XP, daily streak, achievements and weekly rankings for people and classes."],
        ["Classes and admin", "Teacher area to create classes, follow students, manage content and moderate the chat."],
      ],
      role: [
        "Product, architecture and full stack development.",
        "Data model with row-level security in Supabase.",
        "Pixel art identity: logo, mascot, 64 icons, achievements and class badges.",
      ],
      impact: [
        "Learning that feels like a game, in sessions of a few minutes a day.",
        "Classes compete with each other, which keeps students coming back.",
        "Free for learners, running on a zero-cost infrastructure.",
      ],
    },
  ],
};

export const deliveries: Record<Language, Delivery[]> = {
  pt: [
    { id: "regua", icon: "chart", title: "Régua de orçamento com IA", context: "LUSA Brasil", description: "Serviço em Docker que cruza o gasto de anúncios com a receita real e ajusta o orçamento por ROI, com travas de segurança e modo observação.", filters: ["lusa", "ia", "sistemas"] },
    { id: "gateway", icon: "layers", title: "Pacote de gateway de pagamentos", context: "LUSA Brasil", description: "Biblioteca TypeScript que conecta os sistemas aos provedores de Pix, com failover entre gateways, Pix Automático e erros tipados.", filters: ["lusa", "sistemas"] },
    { id: "taskflow", icon: "check", title: "TaskFlow", context: "LUSA Brasil", description: "Sistema de gestão de tarefas com aprovações, metas e cofre de acessos. API NestJS com Prisma e front Next.js no padrão BFF.", filters: ["lusa", "sistemas"] },
    { id: "atlas", icon: "layers", title: "Projeto Atlas", context: "V4 Company", description: "Plataforma interna que centralizou dados de operação, financeiro, comercial e mídia paga, antes espalhados em planilhas.", filters: ["sistemas", "ia"] },
  ],
  en: [
    { id: "regua", icon: "chart", title: "AI budget controller", context: "LUSA Brasil", description: "Docker service that matches ad spend with real revenue and adjusts budgets by ROI, with safety limits and an observation mode.", filters: ["lusa", "ia", "sistemas"] },
    { id: "gateway", icon: "layers", title: "Payment gateway package", context: "LUSA Brasil", description: "TypeScript library connecting our systems to Pix providers, with gateway failover, recurring Pix and typed errors.", filters: ["lusa", "sistemas"] },
    { id: "taskflow", icon: "check", title: "TaskFlow", context: "LUSA Brasil", description: "Task management system with approvals, goals and a credentials vault. NestJS API with Prisma and a Next.js front end using the BFF pattern.", filters: ["lusa", "sistemas"] },
    { id: "atlas", icon: "layers", title: "Atlas Project", context: "V4 Company", description: "Internal platform that centralized operations, finance, sales and paid media data that used to live in spreadsheets.", filters: ["sistemas", "ia"] },
  ],
};

const shortStudy = (s: Partial<CaseStudy> & Pick<CaseStudy, "id" | "modalTitle" | "modalCategory" | "summary">): CaseStudy => ({
  number: "", title: s.modalTitle, owner: "", category: "", description: "", result: "", tags: [],
  challenge: [], solution: "", stack: [], modules: [], role: [], impact: [], ...s,
});

export const deliveryStudies: Record<Language, CaseStudy[]> = {
  pt: [
    shortStudy({
      id: "regua", modalTitle: "Régua de orçamento com IA", modalCategory: "TAMBÉM ENTREGUEI / LUSA BRASIL",
      summary: "Uma vez por dia, a régua compara o gasto de cada campanha de Meta Ads com a receita que ela gerou no sistema de pagamentos e decide pausar, reduzir ou aumentar o orçamento.",
      challenge: ["Ajustar orçamento campanha a campanha, à mão, todos os dias.", "Campanha sem retorno continuava gastando até alguém perceber."],
      solution: "Automação em container Docker que cruza o gasto da Meta com a receita da LUSA, calcula o ROI por campanha e aplica a decisão dentro de travas de segurança. Um painel mostra o que a régua decidiu em cada rodada, e um fluxo n8n observa as decisões do gestor para a IA aprender com elas.",
      stack: [["Automação", "Node.js · Docker · n8n"], ["Integrações", "Meta Marketing API · sistema de pagamentos LUSA"], ["Painel", "Next.js · somente leitura"]],
      impact: ["Orçamento ajustado todo dia pelo ROI real, não pelo do Gerenciador de Anúncios.", "Modo observação para validar as decisões antes de agir."],
    }),
    shortStudy({
      id: "gateway", modalTitle: "Pacote de gateway de pagamentos", modalCategory: "TAMBÉM ENTREGUEI / LUSA BRASIL",
      summary: "Biblioteca TypeScript que conecta os sistemas de doação aos provedores de pagamento: Pix avulso, Pix Automático, failover entre gateways, acompanhamento do pagamento e Pix pendente.",
      challenge: ["Cada sistema falava com os provedores do seu jeito, com tratamento de erro duplicado.", "Quando um gateway caía, a doação falhava em vez de ir para outro provedor."],
      solution: "Isolei toda a comunicação com os provedores num pacote único, sem tela e sem React. O gateway ativo é escolhido pelo painel, a falha de um provedor aciona o próximo, e todo erro sai com um tipo, para cada sistema decidir a mensagem. Os opcionais só entram no build de quem os importa.",
      stack: [["Pacote", "TypeScript · tsup · ESM"], ["Pagamentos", "Pix · Pix Automático · múltiplos provedores com failover"], ["Qualidade", "Vitest com a rede simulada · nunca gera cobrança real em teste"]],
      impact: ["Um contrato único de pagamento para todos os sistemas.", "Queda de um provedor não derruba a doação."],
    }),
    shortStudy({
      id: "taskflow", modalTitle: "TaskFlow", modalCategory: "TAMBÉM ENTREGUEI / LUSA BRASIL",
      summary: "Gestor de tarefas dos sites de arrecadação da LUSA, com aprovações, metas, cronômetro, calendário, cofre de acessos, sugestões e notificações push.",
      solution: "Front em Next.js instalável (PWA) e API em NestJS com Prisma e MySQL. O navegador fala só com o Next, que repassa o JWT guardado em cookie httpOnly para a API (padrão BFF), então o token nunca fica exposto ao JavaScript.",
      stack: [["Front", "Next.js · React · PWA"], ["API", "NestJS · Prisma · MySQL · WebSockets"], ["Segurança", "BFF com cookie httpOnly · rate limiting"]],
      impact: ["Fluxo de aprovação das páginas num lugar só.", "Acessos dos sites guardados num cofre, fora de planilhas e conversas."],
    }),
  ],
  en: [
    shortStudy({
      id: "regua", modalTitle: "AI budget controller", modalCategory: "ALSO DELIVERED / LUSA BRASIL",
      summary: "Once a day, it compares each Meta Ads campaign's spend with the revenue it generated in the payment system and decides to pause, cut or scale its budget.",
      challenge: ["Adjusting budgets campaign by campaign, by hand, every day.", "Campaigns with no return kept spending until someone noticed."],
      solution: "A Docker automation that matches Meta spend with LUSA revenue, computes ROI per campaign and applies the decision within safety limits. A dashboard shows what it decided each round, and an n8n flow watches the media buyer's decisions so the AI can learn from them.",
      stack: [["Automation", "Node.js · Docker · n8n"], ["Integrations", "Meta Marketing API · LUSA payment system"], ["Dashboard", "Next.js · read-only"]],
      impact: ["Budgets adjusted daily by real ROI, not the Ads Manager estimate.", "Observation mode to validate decisions before acting."],
    }),
    shortStudy({
      id: "gateway", modalTitle: "Payment gateway package", modalCategory: "ALSO DELIVERED / LUSA BRASIL",
      summary: "TypeScript library connecting the donation systems to payment providers: one-off Pix, recurring Pix, gateway failover, payment tracking and pending Pix.",
      challenge: ["Each system talked to providers its own way, with duplicated error handling.", "When a gateway went down, the donation failed instead of moving to another provider."],
      solution: "I isolated all provider communication in a single package, with no UI and no React. The active gateway is chosen from the dashboard, a provider failure triggers the next one, and every error comes out typed so each system picks its own message. Optional parts are only bundled for whoever imports them.",
      stack: [["Package", "TypeScript · tsup · ESM"], ["Payments", "Pix · recurring Pix · multiple providers with failover"], ["Quality", "Vitest with a simulated network · never creates real charges in tests"]],
      impact: ["One payment contract for every system.", "A provider outage doesn't take donations down."],
    }),
    shortStudy({
      id: "taskflow", modalTitle: "TaskFlow", modalCategory: "ALSO DELIVERED / LUSA BRASIL",
      summary: "Task manager for LUSA's fundraising sites, with approvals, goals, timer, calendar, credentials vault, suggestions and push notifications.",
      solution: "Installable Next.js front end (PWA) and a NestJS API with Prisma and MySQL. The browser only talks to Next, which forwards the JWT stored in an httpOnly cookie to the API (BFF pattern), so the token is never exposed to JavaScript.",
      stack: [["Front", "Next.js · React · PWA"], ["API", "NestJS · Prisma · MySQL · WebSockets"], ["Security", "BFF with httpOnly cookie · rate limiting"]],
      impact: ["Page approval flow in one place.", "Site credentials kept in a vault, out of spreadsheets and chats."],
    }),
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
