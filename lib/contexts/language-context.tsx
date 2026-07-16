"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "pt" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language
      if (savedLanguage && (savedLanguage === "pt" || savedLanguage === "en")) {
        setLanguageState(savedLanguage)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang)
    }
  }

  const t = (key: string): string => {
    const translations: Record<string, Record<Language, string>> = {
      "nav.home": { pt: "INICIO", en: "HOME" },
      "nav.sobre": { pt: "SOBRE", en: "ABOUT" },
      "nav.projetos": { pt: "PROJETOS", en: "PROJECTS" },
      "nav.contato": { pt: "CONTATO", en: "CONTACT" },
      
      "hero.title": {
        pt: "Software Engineer",
        en: "Software Engineer",
      },
      "hero.subtitle": { pt: "Frontend, Automações e Integrações", en: "Frontend, Automation and Integrations" },
      "hero.description": {
        pt: "Desenvolvedor Full Stack focado em arquitetura de software, APIs e ecossistemas de alta performance.",
        en: "Full Stack Developer focused on software architecture, APIs, and high-performance ecosystems.",
      },
      "hero.resume": { pt: "Curriculo PDF", en: "Resume PDF" },
      "hero.luciaCta": { pt: "Use minha Plataforma de Inteligência para Freelancers", en: "Use my Intelligence Platform for Freelancers" },
      "hero.aria.github": { pt: "GitHub", en: "GitHub" },
      "hero.aria.linkedin": { pt: "LinkedIn", en: "LinkedIn" },
      "hero.aria.contact": { pt: "Contato", en: "Contact" },
      "hero.aria.resume": { pt: "Download Currículo", en: "Download Resume" },
      "hero.aria.luciaCta": { pt: "Abrir LucIA — Plataforma de Inteligência para Freelancers", en: "Open LucIA — Intelligence Platform for Freelancers" },
      
      "about.title": { pt: "Sobre Mim", en: "About Me" },
      "about.description1": {
        pt: "Acredito que um bom código deve resolver problemas reais com foco em performance e manutenibilidade.",
        en: "I believe good code should solve real problems focusing on performance and maintainability.",
      },
      "about.description2": {
        pt: "Com experiência consolidada na V4 Company, alinho engenharia de software a objetivos de eficiência operacional.",
        en: "With solid experience at V4 Company, I align software engineering with operational efficiency goals.",
      },
      "about.description3": {
        pt: "No dia a dia, construo APIs robustas, integro ecossistemas complexos via n8n e desenvolvo pipelines de dados escaláveis utilizando Next.js, Node.js e Python.",
        en: "On a daily basis, I build robust APIs, integrate complex ecosystems via n8n, and develop scalable data pipelines using Next.js, Node.js, and Python.",
      },
      "about.skills": { pt: "Competências Técnicas", en: "Technical Skills" },
      "about.experience": { pt: "Experiência Profissional", en: "Professional Experience" },
      "about.education": { pt: "Formação Acadêmica", en: "Education" },
      
      "projects.title": { pt: "Projetos", en: "Projects" },
      
      "contact.title": { pt: "Contato", en: "Contact" },
      "contact.connect": { pt: "CONECTE-SE", en: "CONNECT" },
      "contact.connectDescription": { pt: "Aberto a oportunidades profissionais e conexões na área de tecnologia. Vamos conversar sobre projetos, colaborações e oportunidades de carreira.", en: "Open to professional opportunities and connections in the technology area. Let's talk about projects, collaborations and career opportunities." },
      "contact.getInTouch": { pt: "Vamos construir algo escalável?", en: "Let's build something scalable?" },
      "contact.getInTouchDescription": { pt: "Estou sempre aberto a discutir como a tecnologia pode resolver gargalos operacionais e impulsionar resultados. Se você busca um engenheiro que entende o impacto do código no negócio, entre em contato.", en: "I'm always open to discussing how technology can solve operational bottlenecks and drive results. If you're looking for an engineer who understands the impact of code on business, get in touch." },
      "contact.name": { pt: "Nome *", en: "Name *" },
      "contact.namePlaceholder": { pt: "Seu nome", en: "Your name" },
      "contact.email": { pt: "Email *", en: "Email *" },
      "contact.emailPlaceholder": { pt: "seu@email.com", en: "your@email.com" },
      "contact.subject": { pt: "Assunto", en: "Subject" },
      "contact.subjectPlaceholder": { pt: "Assunto da mensagem", en: "Message subject" },
      "contact.message": { pt: "Mensagem *", en: "Message *" },
      "contact.messagePlaceholder": { pt: "Sua mensagem...", en: "Your message..." },
      "contact.send": { pt: "Enviar Mensagem", en: "Send Message" },
      "contact.sending": { pt: "Enviando...", en: "Sending..." },
      "contact.whatsapp": { pt: "Chamar no WhatsApp", en: "Call on WhatsApp" },
      "contact.address": { pt: "ENDEREÇO", en: "ADDRESS" },
      "contact.toast.required": { pt: "Campos obrigatórios", en: "Required fields" },
      "contact.toast.requiredDesc": { pt: "Por favor, preencha todos os campos obrigatórios.", en: "Please fill in all required fields." },
      "contact.toast.invalidEmail": { pt: "Email inválido", en: "Invalid email" },
      "contact.toast.invalidEmailDesc": { pt: "Por favor, insira um endereço de email válido.", en: "Please enter a valid email address." },
      "contact.toast.sent": { pt: "Formulário enviado", en: "Form sent" },
      "contact.toast.sentDesc": { pt: "Seu cliente de email será aberto. Obrigado pelo contato!", en: "Your email client will open. Thank you for contacting!" },
      "contact.toast.sentSuccess": { pt: "Mensagem enviada com sucesso! Entrarei em contato em breve.", en: "Message sent successfully! I'll get back to you soon." },
      "contact.toast.error": { pt: "Erro ao enviar", en: "Error sending" },
      "contact.toast.errorDesc": { pt: "Ocorreu um erro ao enviar a mensagem. Verifique as configurações do EmailJS.", en: "An error occurred while sending the message. Please check EmailJS configuration." },
      "contact.email.greeting": { pt: "Olá Igor", en: "Hello Igor" },
      "contact.email.nameLabel": { pt: "Meu nome é", en: "My name is" },
      "contact.email.subjectPrefix": { pt: "Contato do Portfólio", en: "Portfolio Contact" },
      
      "exp.v4.title": { pt: "Engenheiro de Software Full Stack Pleno", en: "Mid-Level Full Stack Software Engineer" },
      "exp.v4.period": { pt: "Set 2025 — Jul 2026", en: "Sep 2025 — Jul 2026" },
      "exp.v4.description": {
        pt: "Desenvolvimento e sustentação de interfaces web de alta performance utilizando React, Next.js e TypeScript.\nConstrução de APIs RESTful, pipelines de sincronização de dados e automações de processos via n8n e webhooks.\nGerenciamento de infraestrutura em nuvem (AWS/VPS) e implementação de soluções inteligentes baseadas em LLMs.",
        en: "Development and maintenance of high-performance web interfaces using React, Next.js, and TypeScript.\nBuilding RESTful APIs, data synchronization pipelines, and process automation via n8n and webhooks.\nCloud infrastructure management (AWS/VPS) and implementation of intelligent solutions based on LLMs.",
      },
      "exp.alplatech.title": { pt: "Desenvolvedor de Software", en: "Software Developer" },
      "exp.alplatech.period": { pt: "Nov 2024 — Set 2025", en: "Nov 2024 — Sep 2025" },
      "exp.alplatech.description": { pt: "Liderança técnica no desenvolvimento de produtos digitais, sites e sistemas web sob medida para negócios.\nArquitetura e implementação de soluções de ponta a ponta utilizando a stack React, Node.js e PostgreSQL.\nTransformação de processos operacionais manuais em fluxos digitais, desde a prototipagem no Figma até o deploy.", en: "Technical leadership in the development of digital products, websites, and custom web systems for businesses.\nArchitecture and implementation of end-to-end solutions using the React, Node.js, and PostgreSQL stack.\nTransformation of manual operational processes into digital flows, from Figma prototyping to deployment." },
      "exp.studiogames.title": { pt: "Técnico de TI & Automação", en: "IT & Automation Technician" },
      "exp.studiogames.period": { pt: "Jan 2024 — Ago 2024", en: "Jan 2024 — Aug 2024" },
      "exp.studiogames.description": { pt: "Desenvolvimento de ferramentas em Python para automação de rotinas internas e atualização automatizada de sistemas.\nSuporte técnico especializado e manutenção preventiva/corretiva de hardware e setups de alta performance.\nAdministração de redes locais, assegurando a conectividade, segurança e integridade dos sistemas da empresa.", en: "Development of Python tools for automating internal routines and automated system updates.\nSpecialized technical support and preventive/corrective maintenance of hardware and high-performance setups.\nAdministration of local networks, ensuring connectivity, security, and integrity of company systems." },
      "exp.period.present": { pt: "Presente", en: "Present" },
      
      "edu.bachelor.title": { pt: "Bacharelado em Ciência da Computação", en: "Bachelor's in Computer Science" },
      "edu.bachelor.period": { pt: "Fev 2025 — Jan 2029", en: "Feb 2025 — Jan 2029" },
      "edu.bachelor.description": { pt: "Graduação voltada aos fundamentos da computação, desenvolvimento de software, bancos de dados, engenharia de software e arquitetura de sistemas.", en: "Degree focused on computer science fundamentals, software development, databases, software engineering and system architecture." },
      "edu.trybe.title": { pt: "Desenvolvimento Web Full Stack", en: "Full Stack Web Development" },
      "edu.trybe.period": { pt: "Mar 2020 — Dez 2022 · +1.500 horas", en: "Mar 2020 — Dec 2022 · 1,500+ hours" },
      "edu.trybe.description": { pt: "Formação prática em desenvolvimento frontend, backend, bancos de dados, testes, metodologias ágeis e construção de aplicações completas.", en: "Practical training in frontend development, backend development, databases, testing, agile methodologies and full application development." },
      "skills.restApisWebhooks": { pt: "APIs REST e Webhooks", en: "REST APIs and Webhooks" },
    }

    return translations[key]?.[language] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
