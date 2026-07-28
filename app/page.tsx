"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "dev.igordesouzacardoso@gmail.com",
};

const nav = [
  { id: "inicio", label: "Home", number: "01" },
  { id: "sobre", label: "Sobre mim", number: "02" },
  { id: "experiencia", label: "Carreira", number: "03" },
  { id: "projetos", label: "Projetos", number: "04" },
  { id: "contato", label: "Contato", number: "05" },
];

const skills = [
  ["Frontend", "React.js · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind CSS · Framer Motion · tsParticles · Three.js · React Three Fiber"],
  ["Backend & dados", "Node.js · NestJS · Express · Laravel · Python · REST · Webhooks · PostgreSQL · Supabase · MySQL · MongoDB"],
  ["Operação", "n8n · GA4 · Docker · AWS · Linux · Vercel · Git · GitHub · Jest"],
  ["Produto", "Figma · WordPress · Arquitetura · Performance · Automações"],
];

const experience = [
  {
    role: "Engenheiro de Software Full Stack Pleno",
    company: "V4 Company",
    period: "Dez 2025 — Jun 2026 · 7 meses",
    description:
      "Desenvolvimento e evolução de aplicações internas, automações e integrações para operação, marketing, gestão e dados.",
    bullets: [
      "Interfaces e funcionalidades para sistemas internos com React e Next.js",
      "APIs com Node.js, Express e Python; workflows avançados com n8n",
      "Integrações com Meta Ads, Google Ads, WhatsApp e sistemas internos",
      "Projeto Atlas, monitoramento de saldos, notificações, Docker e VPS",
    ],
  },
  {
    role: "Engenheiro de Software Web Full Stack · Martech",
    company: "V4 Company",
    period: "Set 2025 — Dez 2025 · 4 meses",
    description:
      "Soluções digitais para campanhas, aquisição e presença online, apoiando marketing, tráfego, vendas e design.",
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
    description:
      "Sites, sistemas web e soluções digitais sob medida, da descoberta e prototipação à publicação.",
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
    description:
      "Suporte técnico, infraestrutura local e automação de rotinas internas.",
    bullets: [
      "Manutenção de computadores, consoles e redes locais",
      "Ferramentas e scripts de automação em Python",
      "Automação de atualizações e sistemas internos de acesso",
    ],
  },
];

const projects = [
  {
    number: "01",
    title: "Projeto Atlas",
    category: "INTELIGÊNCIA OPERACIONAL",
    description:
      "Plataforma interna criada para centralizar dados operacionais, financeiros, comerciais e de mídia. O backend nasceu em Laravel e evoluiu para uma arquitetura moderna com Express e NestJS.",
    tags: ["Next.js", "TypeScript", "Laravel", "Express", "NestJS", "PostgreSQL", "Supabase"],
    type: "atlas",
  },
  {
    number: "02",
    title: "Landing Pages",
    category: "PERFORMANCE & CONVERSÃO",
    description:
      "Páginas de campanha responsivas e orientadas à conversão, com integrações, rastreamento, SEO técnico e alto desempenho em diferentes segmentos.",
    tags: ["Next.js", "React", "Tailwind", "WordPress", "GA4", "GTM", "Vercel"],
    type: "landing",
  },
  {
    number: "03",
    title: "E-commerce",
    category: "COMÉRCIO DIGITAL",
    description:
      "Experiências de compra completas com catálogo, páginas de produto, checkout, integrações comerciais e customizações para operações digitais.",
    tags: ["WooCommerce", "WordPress", "Laravel", "JavaScript", "APIs", "Analytics"],
    type: "commerce",
  },
];

const navEn = [
  { id: "inicio", label: "Home", number: "01" },
  { id: "sobre", label: "About me", number: "02" },
  { id: "experiencia", label: "Career", number: "03" },
  { id: "projetos", label: "Projects", number: "04" },
  { id: "contato", label: "Contact", number: "05" },
];

const skillsEn = [
  ["Frontend", "React.js · Next.js · TypeScript · JavaScript · HTML · CSS · Tailwind CSS · Framer Motion · tsParticles · Three.js · React Three Fiber"],
  ["Backend & data", "Node.js · NestJS · Express · Laravel · Python · REST · Webhooks · PostgreSQL · Supabase · MySQL · MongoDB"],
  ["Operations", "n8n · GA4 · Docker · AWS · Linux · Vercel · Git · GitHub · Jest"],
  ["Product", "Figma · WordPress · Architecture · Performance · Automations"],
];

const experienceEn = [
  {
    role: "Mid-Level Full Stack Software Engineer", company: "V4 Company", period: "Dec 2025 — Jun 2026 · 7 months",
    description: "Development and evolution of internal applications, automations and integrations for operations, marketing, management and data.",
    bullets: ["Interfaces and features for internal systems with React and Next.js", "APIs with Node.js, Express and Python; advanced workflows with n8n", "Integrations with Meta Ads, Google Ads, WhatsApp and internal systems", "Atlas Project, balance monitoring, notifications, Docker and VPS"],
  },
  {
    role: "Full Stack Web Software Engineer · Martech", company: "V4 Company", period: "Sep 2025 — Dec 2025 · 4 months",
    description: "Digital solutions for campaigns, acquisition and online presence, supporting marketing, paid media, sales and design.",
    bullets: ["Landing pages, institutional websites, campaigns and e-commerce", "WordPress, WooCommerce, Laravel, React, Next.js and Tailwind CSS", "Forms, pixels, conversion events and AI integrations", "GA4, GTM, performance, technical SEO and user experience"],
  },
  {
    role: "Full Stack Software Engineer", company: "ALPLATECH", period: "Nov 2024 — Sep 2025 · 11 months",
    description: "Custom websites, web systems and digital solutions, from discovery and prototyping to launch.",
    bullets: ["Responsive interfaces with React and JavaScript", "Applications with Node.js, Express and PostgreSQL", "APIs, integrations and relational database modeling", "Process digitization, websites and landing pages"],
  },
  {
    role: "IT & Automation Technician", company: "Studio Games Franchising", period: "Jan 2024 — Aug 2024 · 8 months",
    description: "Technical support, local infrastructure and automation of internal routines.",
    bullets: ["Computer, console and local network maintenance", "Automation tools and scripts in Python", "Update automation and internal access systems"],
  },
];

const projectsEn = [
  {
    number: "01", title: "Atlas Project", category: "OPERATIONAL INTELLIGENCE",
    description: "Internal platform built to centralize operational, financial, commercial and media data. The backend started in Laravel and evolved into a modern architecture with Express and NestJS.",
    tags: ["Next.js", "TypeScript", "Laravel", "Express", "NestJS", "PostgreSQL", "Supabase"], type: "atlas",
  },
  {
    number: "02", title: "Landing Pages", category: "PERFORMANCE & CONVERSION",
    description: "Responsive, conversion-focused campaign pages featuring integrations, analytics, technical SEO and high performance across multiple industries.",
    tags: ["Next.js", "React", "Tailwind", "WordPress", "GA4", "GTM", "Vercel"], type: "landing",
  },
  {
    number: "03", title: "E-commerce", category: "DIGITAL COMMERCE",
    description: "Complete shopping experiences with catalogs, product pages, checkout flows, commercial integrations and customizations for digital operations.",
    tags: ["WooCommerce", "WordPress", "Laravel", "JavaScript", "APIs", "Analytics"], type: "commerce",
  },
];

const atlasCaseStudy = {
  title: "Atlas — Plataforma Interna de Automação & Inteligência Operacional",
  category: "ESTUDO DE CASO / V4 COMPANY",
  summary:
    "Plataforma de inteligência e automação criada para transformar dados dispersos em decisões estratégicas, centralizando mídia paga, operação, performance comercial e monitoramento de clientes via WhatsApp.",
  challenge: [
    "Dados fragmentados em diversas plataformas e planilhas.",
    "Processos manuais de coleta e apresentação de resultados.",
    "Baixa visibilidade estratégica em tempo real para a diretoria.",
    "Dificuldade para mensurar eficiência da equipe e margem operacional por cliente.",
  ],
  solution:
    "O Atlas foi construído do zero. O backend começou em Laravel e evoluiu para uma arquitetura moderna baseada em serviços com Node.js, NestJS, Laravel 11 e Python/FastAPI, criando um hub centralizado para dados operacionais, financeiros, comerciais e de mídia.",
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
};

const landingCaseStudy = {
  title: "Landing Pages Orientadas à Conversão",
  category: "02 / PERFORMANCE & CONVERSÃO / LANDING PAGES",
  summary: "Páginas de campanha responsivas e otimizadas, com integrações avançadas, rastreamento de dados, SEO técnico e alto desempenho para maximizar resultados em diferentes segmentos.",
  challenge: ["Baixas taxas de conversão causadas por páginas genéricas ou lentas.", "Falta de rastreamento preciso para campanhas de mídia paga.", "Dificuldade de retenção da atenção do usuário no mobile.", "Necessidade de cumprir os requisitos do Core Web Vitals."],
  solution: "Desenvolvimento de ecossistemas de alta conversão, unindo design focado em UX/UI com engenharia de front-end para garantir carregamento rápido e coleta de dados confiável para as equipes de marketing.",
  stack: [["Frontend", "Next.js · React · Tailwind CSS"], ["CMS & gestão", "WordPress Headless ou Monolítico"], ["Tracking & analytics", "Google Analytics 4 · Google Tag Manager"], ["Infraestrutura", "Vercel · Edge Computing"]],
  modules: [["Otimização de performance", "Arquitetura estática e SSR para tempos de carregamento na casa dos milissegundos."], ["Rastreamento avançado", "Datalayer e eventos personalizados para mapear toda a jornada do lead."], ["SEO técnico", "Semântica HTML, meta tags dinâmicas e otimização de imagens."], ["Design mobile-first", "Adaptação fluida para qualquer tela, priorizando smartphones."]],
  role: ["Desenvolvimento front-end com componentização e reutilização de código.", "Implementação e validação de Pixel, Conversions API, GA4 e GTM.", "Otimização contínua com Lighthouse e Web Vitals.", "Deploy e gerenciamento de infraestrutura na Vercel."],
  impact: ["Aumento expressivo na conversão das campanhas.", "Redução do CPA com velocidade e melhoria do Índice de Qualidade.", "Clareza total dos dados de jornada para otimização de campanhas."],
};

const commerceCaseStudy = {
  title: "E-commerces e Operações Digitais",
  category: "03 / COMÉRCIO DIGITAL / E-COMMERCE",
  summary: "Experiências de compra completas e escaláveis, com catálogo, páginas de produto focadas em conversão, checkout otimizado e integrações comerciais complexas.",
  challenge: ["Digitalização segura e escalável de canais de vendas físicos.", "Abandono de carrinho causado por checkouts complexos ou lentos.", "Sistemas engessados para catálogo e controle de estoque.", "Falta de sincronização entre loja, pagamentos e logística."],
  solution: "Construção de plataformas de comércio digital robustas e customizadas, removendo atritos da jornada de compra e garantindo segurança transacional e autonomia administrativa para os lojistas.",
  stack: [["Plataforma & core", "WooCommerce · WordPress"], ["Backend & lógica", "Laravel · APIs REST"], ["Frontend", "JavaScript · CSS customizado"], ["Dados", "Analytics para e-commerce"]],
  modules: [["Vitrine & catálogo dinâmico", "Filtros avançados, busca otimizada, variações, galerias e cross-sell."], ["Checkout frictionless", "Fluxo de pagamento simples, transparente e seguro."], ["Integrações de negócio", "Stripe, Mercado Pago, Pagar.me e APIs de logística."], ["Painel administrativo", "Gestão de pedidos, clientes e estoque automatizado."]],
  role: ["Desenvolvimento Full Stack e customização de temas e plugins.", "Integrações com gateways, CRMs e ERPs via APIs.", "Otimização de segurança e vulnerabilidades em transações.", "Refatoração de checkout para testes A/B e melhoria de UX."],
  impact: ["Crescimento do faturamento e aumento do ticket médio.", "Redução do abandono de carrinho com checkout otimizado.", "Maior autonomia operacional para o cliente.", "Estabilidade durante Black Friday e grandes campanhas."],
};

const freelanceCtas = [
  { pt: "Ver Serviços de Freelance", en: "View Freelance Services" },
  { pt: "Solicitar Serviço Freelance", en: "Request Freelance Service" },
  { pt: "Contratar Dev Freelancer", en: "Hire a Freelance Developer" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function NavIcon({ id }: { id: string }) {
  const paths: Record<string, React.ReactNode> = {
    inicio: <><path d="M3 10.5 12 3l9 7.5" /><path d="M5.5 9.5V21h13V9.5M9 21v-7h6v7" /></>,
    sobre: <><circle cx="12" cy="8" r="4" /><path d="M4.5 21c.7-4.2 3.2-6.5 7.5-6.5s6.8 2.3 7.5 6.5" /></>,
    experiencia: <><rect x="3" y="6.5" width="18" height="14" rx="2" /><path d="M8 6.5V4h8v2.5M3 12h18M10 12v2h4v-2" /></>,
    projetos: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
    contato: <><path d="M4 5h16v14H4z" /><path d="m4 7 8 6 8-6" /></>,
  };

  return (
    <span className="nav-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {paths[id]}
      </svg>
    </span>
  );
}

export default function Home() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [freelanceCtaIndex, setFreelanceCtaIndex] = useState(0);
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const isEn = language === "en";
  const siteNav = isEn ? navEn : nav;
  const siteSkills = isEn ? skillsEn : skills;
  const siteExperience = isEn ? experienceEn : experience;
  const siteProjects = isEn ? projectsEn : projects;
  const selectedCaseStudy = selectedProject === "atlas"
    ? atlasCaseStudy
    : selectedProject === "landing"
      ? landingCaseStudy
      : selectedProject === "commerce"
        ? commerceCaseStudy
        : null;

  function toggleLanguage() {
    const nextLanguage = isEn ? "pt" : "en";
    setLanguage(nextLanguage);
    document.documentElement.lang = nextLanguage === "en" ? "en" : "pt-BR";
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0.05, 0.25, 0.5] },
    );
    siteNav.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, [siteNav]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setFreelanceCtaIndex((current) => (current + 1) % freelanceCtas.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, []);

  function handleFormChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  }

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      window.alert(isEn ? "Please fill in all required fields." : "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      window.alert(isEn ? "Please enter a valid email address." : "Por favor, insira um endereço de email válido.");
      return;
    }

    const { serviceId, templateId, publicKey } = emailjsConfig;
    if (!serviceId || !templateId || !publicKey) {
      window.alert(
        isEn
          ? "The contact form is not configured yet. Please try again later."
          : "O formulário de contato ainda não está configurado. Tente novamente mais tarde.",
      );
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `${isEn ? "Portfolio Contact" : "Contato do Portfólio"} - ${formData.name}`,
          message: formData.message,
          to_email: emailjsConfig.toEmail,
        },
        publicKey,
      );

      setFormData({ name: "", email: "", subject: "", message: "" });
      setShowSuccessModal(true);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === "object" && "text" in error ? String(error.text) : undefined;
      window.alert(errorMessage || (isEn ? "An error occurred while sending the message. Please check the EmailJS configuration." : "Ocorreu um erro ao enviar a mensagem. Verifique as configurações do EmailJS."));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <aside className="side-nav" aria-label={isEn ? "Main navigation" : "Navegação principal"}>
        <a className="monogram" href="#inicio" aria-label="Voltar ao início">IC<span>.</span></a>
        <a className="mobile-brand" href="#inicio" onClick={() => setMenuOpen(false)}>DEV. IGOR CARDOSO</a>
        <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={isEn ? "Mudar para português" : "Switch to English"}>
          {isEn ? "PT" : "EN"}
        </button>
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <i /><i />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          {siteNav.map((item) => (
            <a key={item.id} className={active === item.id ? "active" : ""} href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
              <NavIcon id={item.id} />
              <span className="nav-label">{item.label}</span>
              <i />
            </a>
          ))}
        </nav>
        <span className="side-caption">SOFTWARE ENGINEER · 2026</span>
      </aside>

      <main>
        <section className="hero section" id="inicio">
          <div className="aurora" aria-hidden="true"><i /><i /><i /></div>
          <div className="hero-top">
            <a className="signature" href="#inicio">DEV. IGOR S. CARDOSO <Arrow /></a>
            <span className="availability"><i /> {isEn ? "OPEN TO WORK" : "ABERTO A OPORTUNIDADES"}</span>
          </div>
          <div className="hero-content reveal">
            <div className="eyebrow"><span /> SOFTWARE ENGINEER · {isEn ? "BRAZIL" : "BRASIL"}</div>
            <h1>
              Igor de Souza Cardoso
              <em>{isEn ? "Full Stack Developer." : "Desenvolvedor Full Stack."}</em>
            </h1>
            <p>
              {isEn ? "Full Stack Developer focused on Frontend, automations and integrations, building modern, responsive and high-performance applications." : "Desenvolvedor Full Stack com ênfase em Frontend, automações e integrações, criando aplicações modernas, responsivas e de alta performance."}
            </p>
            <div className="actions">
              <a className="button primary" href="#contato">{isEn ? "Get in touch" : "Entrar em contato"} <Arrow /></a>
              <a className="button freelance" href="https://alplatech-dev.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label={isEn ? "View freelance services" : "Ver serviços de freelance"}>
                <span className="freelance-button-title" key={`${language}-${freelanceCtaIndex}`}>
                  {isEn ? freelanceCtas[freelanceCtaIndex].en : freelanceCtas[freelanceCtaIndex].pt}
                </span> <Arrow />
              </a>
              <a className="button ghost" href="#projetos">{isEn ? "Explore projects" : "Explorar projetos"} <span>↓</span></a>
            </div>
          </div>
          <div className="hero-metrics">
            <div><strong>05+</strong><span>{isEn ? <>years building<br />digital solutions</> : <>anos construindo<br />soluções digitais</>}</span></div>
            <div><strong>Full<br />Stack</strong><span>{isEn ? <>complete product<br />perspective</> : <>visão completa<br />de produto</>}</span></div>
            <div className="system-card">
              <span className="system-head"><i /> SYSTEM ONLINE</span>
              <span className="code-line">01 &nbsp; architecture_first()</span>
              <span className="code-line">02 &nbsp; automate_workflows()</span>
              <span className="code-line">03 &nbsp; scale_with_data()</span>
            </div>
          </div>
          <span className="scroll-hint">{isEn ? "SCROLL TO EXPLORE" : "ROLE PARA EXPLORAR"} <i /></span>
        </section>

        <section className="section about" id="sobre">
          <header className="section-heading">
            <span className="section-index">02 / {isEn ? "ABOUT" : "SOBRE"}</span>
          </header>
          <div className="about-grid">
            <div className="about-intro">
              <p>{isEn ? "I build modern, responsive and high-performance web applications with React, Next.js and TypeScript, always focusing on software architecture and the value generated for the business." : "Desenvolvo aplicações web modernas, responsivas e de alta performance com React, Next.js e TypeScript, sempre focando na arquitetura de software e no valor gerado para o negócio."}</p>
              <p>{isEn ? "Across backend and data modeling, I build solid RESTful APIs and efficient integrations using NestJS, Python, PostgreSQL, Supabase, n8n and webhooks." : "No backend e na modelagem de dados, construo APIs RESTful sólidas e integrações eficientes utilizando NestJS, Python, PostgreSQL, Supabase, n8n e webhooks."}</p>
              <p>{isEn ? "I also have experience developing internal platforms and management systems, as well as infrastructure with Docker, AWS and Vercel." : "Também tenho vivência no desenvolvimento de plataformas internas, sistemas de gestão, infraestrutura com Docker, AWS e Vercel."}</p>
              <p>{isEn ? "I am pursuing Full Stack Developer, Backend Developer or Software Engineer opportunities to build robust, scalable products and solve complex software problems." : "Busco oportunidades como Desenvolvedor Full Stack, Desenvolvedor Front End ou Software Engineer para construir produtos digitais robustos, escaláveis e resolver problemas complexos de software."}</p>
              <a className="text-link" href="#experiencia">{isEn ? "Explore my career" : "Conheça minha trajetória"} <Arrow /></a>
            </div>
            <div className="skill-grid">
              {siteSkills.map(([title, items], index) => (
                <article className="skill-card" key={title}>
                  <span>0{index + 1}</span>
                  <h3>{title}</h3>
                  <p>{items}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section career" id="experiencia">
          <header className="section-heading">
            <span className="section-index">03 / {isEn ? "CAREER" : "CARREIRA"}</span>
            <h2>{isEn ? "Experience connecting" : "Experiência que conecta"}<br /><em>{isEn ? "technology and business." : "tecnologia e negócio."}</em></h2>
          </header>
          <div className="timeline">
            {siteExperience.map((job, index) => (
              <article className="job" key={`${job.company}-${job.role}`}>
                <div className="job-marker"><span>0{index + 1}</span><i /></div>
                <div className="job-title">
                  <span>{job.period}</span>
                  <h3>{job.role}</h3>
                  <strong>{job.company}</strong>
                </div>
                <div className="job-detail">
                  <p>{job.description}</p>
                  <ul>{job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <div className="education">
            <span className="section-index">{isEn ? "EDUCATION" : "FORMAÇÃO"}</span>
            <article><span>2025 — 2029</span><h3>{isEn ? "Bachelor's Degree in Computer Science" : "Bacharelado em Ciência da Computação"}</h3><p>UniMAX — Centro Universitário Max Planck</p></article>
            <article><span>2020 — 2022 · 1,500H+</span><h3>{isEn ? "Full Stack Web Development Program" : "Curso de Desenvolvimento Web Full Stack"}</h3><p>Trybe</p></article>
          </div>
        </section>

        <section className="section projects" id="projetos">
          <header className="section-heading split">
            <div><span className="section-index">04 / {isEn ? "PROJECTS" : "PROJETOS"}</span><h2>{isEn ? "Products built" : "Produtos construídos"}<br />{isEn ? "to" : "para"} <em>{isEn ? "perform." : "performar."}</em></h2></div>
            <p className="case-notice"><strong>{isEn ? "CASE STUDIES" : "ESTUDOS DE CASO"}</strong> {isEn ? "Due to confidentiality and the rights of the companies where they were developed, these projects are presented as case studies without internal interfaces or data." : "Por confidencialidade e direitos das empresas onde foram desenvolvidos, os projetos são apresentados como estudos de caso, sem interfaces ou dados internos."}</p>
          </header>
          <div className="project-gallery">
            <div className="project-track">
              {[...siteProjects, ...siteProjects].map((project, index) => (
                <article
                  className={`project-card ${["atlas", "landing", "commerce"].includes(project.type) ? "has-case-study" : ""}`}
                  key={`${project.title}-${index}`}
                  aria-hidden={index >= siteProjects.length}
                  onClick={() => ["atlas", "landing", "commerce"].includes(project.type) && setSelectedProject(project.type)}
                  onKeyDown={(event) => {
                    if (["atlas", "landing", "commerce"].includes(project.type) && (event.key === "Enter" || event.key === " ")) {
                      event.preventDefault();
                      setSelectedProject(project.type);
                    }
                  }}
                  role={["atlas", "landing", "commerce"].includes(project.type) ? "button" : undefined}
                  tabIndex={["atlas", "landing", "commerce"].includes(project.type) ? 0 : undefined}
                >
                  <div className={`project-visual ${project.type}`}>
                    <div className="visual-bar"><span>{project.category}</span><i /><i /><i /></div>
                    <div className="visual-content">
                      <span className="visual-kicker">PROJECT / {project.number}</span>
                      <strong>{project.title}</strong>
                      <div className="visual-lines"><i /><i /><i /><i /></div>
                    </div>
                  </div>
                  <div className="project-card-copy">
                    <div className="project-number">{project.number} <span>{project.category}</span></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contato">
          <div className="contact-glow" aria-hidden="true" />
          <header className="section-heading">
            <span className="section-index">05 / {isEn ? "CONTACT" : "CONTATO"}</span>
            <h2>{isEn ? "Let's build something" : "Vamos construir algo"}<br /><em>{isEn ? "scalable?" : "escalável?"}</em></h2>
            <p>{isEn ? "Open to opportunities, collaborations and projects where technology needs to create real impact." : "Aberto a oportunidades, colaborações e projetos em que tecnologia precisa gerar impacto real."}</p>
          </header>
          <div className="contact-grid">
            <div className="contact-links">
              <a href="https://www.linkedin.com/in/igor-s-cardoso" target="_blank" rel="noreferrer"><span>LINKEDIN</span><strong>igor-s-cardoso</strong><Arrow /></a>
              <a href="https://github.com/igorcardos0" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>@igorcardos0</strong><Arrow /></a>
              <a href="https://wa.me/5519999223452" target="_blank" rel="noreferrer"><span>WHATSAPP</span><strong>+55 (19) 99922-3452</strong><Arrow /></a>
              <a href="mailto:dev.igordesouzacardoso@gmail.com"><span>EMAIL</span><strong>dev.igordesouzacardoso@gmail.com</strong><Arrow /></a>
              <div><span>{isEn ? "LOCATION" : "ENDEREÇO"}</span><strong>Indaiatuba, SP — {isEn ? "Brazil" : "Brasil"}</strong><i>GMT−3</i></div>
            </div>
            <form onSubmit={sendEmail}>
              <div className="field"><label htmlFor="name">{isEn ? "YOUR NAME" : "SEU NOME"}</label><input id="name" name="name" placeholder={isEn ? "What should I call you?" : "Como posso te chamar?"} value={formData.name} onChange={handleFormChange} required /></div>
              <div className="field"><label htmlFor="email">{isEn ? "YOUR EMAIL" : "SEU E-MAIL"}</label><input id="email" name="email" type="email" placeholder="you@company.com" value={formData.email} onChange={handleFormChange} required /></div>
              <div className="field full"><label htmlFor="subject">{isEn ? "SUBJECT" : "ASSUNTO"}</label><input id="subject" name="subject" placeholder={isEn ? "What would you like to discuss?" : "Sobre o que vamos conversar?"} value={formData.subject} onChange={handleFormChange} /></div>
              <div className="field full"><label htmlFor="message">{isEn ? "YOUR MESSAGE" : "SUA MENSAGEM"}</label><textarea id="message" name="message" placeholder={isEn ? "Tell me about the project, challenge or opportunity..." : "Conte um pouco sobre o projeto, desafio ou oportunidade..."} value={formData.message} onChange={handleFormChange} rows={4} required /></div>
              <button className="button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? (isEn ? "Sending..." : "Enviando...") : (isEn ? "Send message" : "Enviar mensagem")} <Arrow /></button>
            </form>
          </div>
          <footer>
            <a className="signature" href="#inicio">DEV. IGOR S. CARDOSO <Arrow /></a>
            <span>© 2026 · {isEn ? "BUILT WITH PRECISION" : "CONSTRUÍDO COM PRECISÃO"}</span>
            <a href="#inicio">{isEn ? "BACK TO TOP" : "VOLTAR AO TOPO"} ↑</a>
          </footer>
        </section>
      </main>

      {showSuccessModal && (
        <div className="success-modal-backdrop" role="presentation" onClick={() => setShowSuccessModal(false)}>
          <section
            className="success-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="success-modal-close"
              type="button"
              aria-label={isEn ? "Close confirmation" : "Fechar confirmação"}
              onClick={() => setShowSuccessModal(false)}
            >
              ×
            </button>
            <div className="success-modal-icon" aria-hidden="true">✓</div>
            <span className="section-index">05 / {isEn ? "MESSAGE SENT" : "MENSAGEM ENVIADA"}</span>
            <h2 id="success-modal-title">
              {isEn ? "Your email has been sent." : "Seu email foi enviado."}
              <em>{isEn ? "Let's keep in touch." : "Vamos manter contato."}</em>
            </h2>
            <p>
              {isEn
                ? "Thank you for reaching out. I will get back to you soon."
                : "Obrigado por entrar em contato. Responderei o mais breve possível."}
            </p>
            <div className="success-modal-actions">
              <button className="button ghost" type="button" onClick={() => setShowSuccessModal(false)}>
                {isEn ? "Back to site" : "Voltar ao site"} <span>↓</span>
              </button>
              <a className="button primary" href="https://wa.me/5519999223452" target="_blank" rel="noreferrer">
                {isEn ? "Talk on WhatsApp" : "Falar no WhatsApp"} <Arrow />
              </a>
            </div>
          </section>
        </div>
      )}

      {selectedCaseStudy && (
        <div className="case-study-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <section
            className="case-study-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="atlas-case-study-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="case-study-close" type="button" aria-label="Fechar estudo de caso" onClick={() => setSelectedProject(null)}>×</button>
            <div className="case-study-header">
              <span className="section-index">{selectedCaseStudy.category}</span>
              <h2 id="atlas-case-study-title">{selectedCaseStudy.title}</h2>
              <p>{selectedCaseStudy.summary}</p>
            </div>

            <div className="case-study-content">
              <div className="case-study-section">
                <span className="case-study-label">01 / O CENÁRIO E O DESAFIO</span>
                <ul>{selectedCaseStudy.challenge.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">02 / A SOLUÇÃO</span>
                <p>{selectedCaseStudy.solution}</p>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">03 / ARQUITETURA & STACK</span>
                <div className="case-study-stack">{selectedCaseStudy.stack.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">04 / PRINCIPAIS MÓDULOS</span>
                <div className="case-study-modules">{selectedCaseStudy.modules.map(([title, description]) => <article key={title}><strong>{title}</strong><p>{description}</p></article>)}</div>
              </div>
              <div className="case-study-columns">
                <div className="case-study-section">
                  <span className="case-study-label">05 / MEU PAPEL</span>
                  <ul>{selectedCaseStudy.role.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="case-study-section">
                  <span className="case-study-label">06 / IMPACTO</span>
                  <ul>{selectedCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </div>
            <button className="button primary case-study-back" type="button" onClick={() => setSelectedProject(null)}>Voltar aos projetos <span>↓</span></button>
          </section>
        </div>
      )}
    </>
  );
}
