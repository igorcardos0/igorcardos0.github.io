export interface TechSkill {
  name: string;
  deviconClass: string;
  category: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  link?: string;
}

export const techSkills: TechSkill[] = [
  {
    name: "React.js",
    deviconClass: "devicon-react-original",
    category: "Frontend",
  },
  {
    name: "Next.js",
    deviconClass: "devicon-nextjs-original",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    deviconClass: "devicon-typescript-plain",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    deviconClass: "devicon-javascript-plain",
    category: "Frontend",
  },
  { name: "HTML", deviconClass: "devicon-html5-plain", category: "Frontend" },
  { name: "CSS", deviconClass: "devicon-css3-plain", category: "Frontend" },
  {
    name: "Tailwind CSS",
    deviconClass: "devicon-tailwindcss-plain",
    category: "Frontend",
  },
  {
    name: "Node.js",
    deviconClass: "devicon-nodejs-plain",
    category: "Backend e APIs",
  },
  {
    name: "NestJS",
    deviconClass: "devicon-nestjs-plain",
    category: "Backend e APIs",
  },
  {
    name: "Express",
    deviconClass: "devicon-express-original",
    category: "Backend e APIs",
  },
  {
    name: "Python",
    deviconClass: "devicon-python-plain",
    category: "Backend e APIs",
  },
  {
    name: "APIs REST e Webhooks",
    deviconClass: "devicon-fastapi-plain",
    category: "Backend e APIs",
  },
  {
    name: "PostgreSQL",
    deviconClass: "devicon-postgresql-plain",
    category: "Bancos de dados",
  },
  {
    name: "Supabase",
    deviconClass: "devicon-supabase-plain",
    category: "Bancos de dados",
  },
  {
    name: "MySQL",
    deviconClass: "devicon-mysql-plain",
    category: "Bancos de dados",
  },
  {
    name: "MongoDB",
    deviconClass: "devicon-mongodb-plain",
    category: "Bancos de dados",
  },
  {
    name: "n8n",
    deviconClass: "devicon-n8n-plain",
    category: "Automação e dados",
  },
  {
    name: "Google Analytics 4",
    deviconClass: "devicon-googleanalytics-plain",
    category: "Automação e dados",
  },
  {
    name: "Docker",
    deviconClass: "devicon-docker-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "AWS",
    deviconClass: "devicon-amazonwebservices-plain-wordmark",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "Linux",
    deviconClass: "devicon-linux-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "Vercel",
    deviconClass: "devicon-vercel-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "Git",
    deviconClass: "devicon-git-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "GitHub",
    deviconClass: "devicon-github-original",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "Jest",
    deviconClass: "devicon-jest-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "Figma",
    deviconClass: "devicon-figma-plain",
    category: "Infraestrutura e ferramentas",
  },
  {
    name: "WordPress",
    deviconClass: "devicon-wordpress-plain",
    category: "Infraestrutura e ferramentas",
  },
];

export const experiences: Experience[] = [
  {
    title: "Engenheiro de Software Full Stack",
    company: "V4 Company",
    period: "Set 2025 — Jul 2026",
    description:
      "Atuei no desenvolvimento e na sustentação de aplicações internas utilizadas por equipes de operação, marketing e gestão.\n\nMinha participação envolveu diferentes partes dos sistemas, incluindo interfaces, APIs, bancos de dados, integrações e automações.\n\nPrincipais atividades\n• Desenvolvimento de interfaces com React, Next.js e TypeScript.\n• Construção e manutenção de APIs utilizando Node.js e Python.\n• Criação de automações e workflows com n8n.\n• Integração com plataformas externas por meio de APIs e webhooks.\n• Sincronização e processamento de dados de diferentes fontes.\n• Desenvolvimento de funcionalidades para visualização e gerenciamento de informações.\n• Trabalho com PostgreSQL, Supabase e regras de acesso.\n• Apoio em deploys, Docker, servidores VPS e sustentação das aplicações.",
  },
  {
    title: "Engenheiro de Software Full Stack",
    company: "ALPLATECH",
    period: "Nov 2024 — Set 2025",
    description:
      "Atuei no desenvolvimento de sites, sistemas web e soluções digitais sob medida para empresas e negócios locais.\n\nParticipei das diferentes etapas dos projetos, desde o entendimento da necessidade e prototipagem até o desenvolvimento e publicação das soluções.\n\nPrincipais atividades\n• Desenvolvimento de interfaces responsivas com React e JavaScript.\n• Construção de aplicações utilizando Node.js, Express e PostgreSQL.\n• Criação de APIs e integrações com serviços externos.\n• Modelagem de bancos de dados relacionais.\n• Digitalização de processos anteriormente realizados de forma manual.\n• Desenvolvimento de sites institucionais e landing pages.\n• Integração de formulários, sistemas e ferramentas externas.",
  },
  {
    title: "Técnico de TI e Automação",
    company: "Studio Games Franchising",
    period: "Jan 2024 — Ago 2024",
    description:
      "Atuei no suporte técnico, manutenção de equipamentos, administração de redes locais e automação de rotinas internas.\n\nPrincipais atividades\n• Manutenção preventiva e corretiva de computadores e consoles.\n• Montagem, configuração e atualização de computadores.\n• Administração e manutenção de redes locais.\n• Suporte técnico presencial e resolução de problemas.\n• Desenvolvimento de ferramentas e scripts em Python.\n• Automação de atualizações de jogos e aplicativos.\n• Manutenção de sistemas internos de acesso e login.",
  },
];

export const education: Education[] = [
  {
    title: "Bacharelado em Ciência da Computação",
    institution: "UniMAX — Centro Universitário Max Planck",
    period: "Fev 2025 — Jan 2029",
    description:
      "Graduação voltada aos fundamentos da computação, desenvolvimento de software, bancos de dados, engenharia de software e arquitetura de sistemas.",
  },
  {
    title: "Desenvolvimento Web Full Stack",
    institution: "Trybe",
    period: "Mar 2020 — Dez 2022 · +1.500 horas",
    description:
      "Formação prática em desenvolvimento frontend, backend, bancos de dados, testes, metodologias ágeis e construção de aplicações completas.",
    link: "https://www.credential.net/c9afcd88-d1b9-4178-92c9-8986cd9955bb#acc.ns7LjHd5",
  },
];
