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
    // Carrega o idioma salvo do localStorage
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
      // Navigation
      "nav.home": { pt: "INICIO", en: "HOME" },
      "nav.sobre": { pt: "SOBRE", en: "ABOUT" },
      "nav.projetos": { pt: "PROJETOS", en: "PROJECTS" },
      "nav.contato": { pt: "CONTATO", en: "CONTACT" },
      
      // Hero Section
      "hero.title": { pt: "Engenheiro de Software", en: "Software Engineer" },
      "hero.specialization": { pt: "Especializado em React.js, Next.js & Node.js | Clean Architecture, TDD & Performance | TypeScript", en: "Specialized in React.js, Next.js & Node.js | Clean Architecture, TDD & Performance | TypeScript" },
      "hero.resume": { pt: "Curriculo PDF", en: "Resume PDF" },
      
      // About Section
      "about.title": { pt: "Sobre", en: "About" },
      "about.description1": { pt: "Engenheiro de Software com experiência em desenvolvimento full stack, especializado em criar soluções digitais escaláveis e de alta performance.", en: "Software Engineer with experience in full stack development, specialized in creating scalable and high-performance digital solutions." },
      "about.description2": { pt: "Atuo no desenvolvimento de aplicações web modernas, sistemas de automação e integrações, utilizando tecnologias como React, Next.js, Node.js, TypeScript, Python, .NET e bancos de dados relacionais e NoSQL.", en: "I work on developing modern web applications, automation systems and integrations, using technologies such as React, Next.js, Node.js, TypeScript, Python, .NET and relational and NoSQL databases." },
      "about.description3": { pt: "Minha stack técnica inclui React, Next.js, TypeScript, Tailwind, Node.js, Python, .NET, C#, MySQL, PostgreSQL e MongoDB. Aplico boas práticas de engenharia de software, Clean Architecture, TDD e foco em performance e escalabilidade.", en: "My technical stack includes React, Next.js, TypeScript, Tailwind, Node.js, Python, .NET, C#, MySQL, PostgreSQL and MongoDB. I apply software engineering best practices, Clean Architecture, TDD and focus on performance and scalability." },
      "about.skills": { pt: "Competências Técnicas", en: "Technical Skills" },
      "about.experience": { pt: "Experiência Profissional", en: "Professional Experience" },
      "about.education": { pt: "Formação Acadêmica", en: "Education" },
      
      // Projects Section
      "projects.title": { pt: "Projetos", en: "Projects" },
      
      // Contact Section
      "contact.title": { pt: "Contato", en: "Contact" },
      "contact.connect": { pt: "CONECTE-SE", en: "CONNECT" },
      "contact.connectDescription": { pt: "Aberto a oportunidades profissionais e conexões na área de tecnologia. Vamos conversar sobre projetos, colaborações e oportunidades de carreira.", en: "Open to professional opportunities and connections in the technology area. Let's talk about projects, collaborations and career opportunities." },
      "contact.getInTouch": { pt: "Entre em contato", en: "Get in touch" },
      "contact.getInTouchDescription": { pt: "Engenheiro de Software apaixonado por criar soluções tecnológicas inovadoras. Busco oportunidades para contribuir com projetos desafiadores, aplicar minhas habilidades técnicas e continuar crescendo profissionalmente.", en: "Software Engineer passionate about creating innovative technological solutions. I seek opportunities to contribute to challenging projects, apply my technical skills and continue growing professionally." },
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
      
      // Experiences
      "exp.v4.title": { pt: "Desenvolvedor Full-Stack Pleno", en: "Full-Stack Developer" },
      "exp.v4.description": { pt: "Desenvolvimento de aplicações web full stack utilizando React, Next.js, Node.js e TypeScript. Implementação de sistemas de automação, integrações com APIs e desenvolvimento de interfaces responsivas e performáticas.", en: "Full stack web application development using React, Next.js, Node.js and TypeScript. Implementation of automation systems, API integrations and development of responsive and performant interfaces." },
      "exp.alplatech.title": { pt: "Desenvolvedor de Software", en: "Software Developer" },
      "exp.alplatech.description": { pt: "Desenvolvimento de aplicações web e sistemas personalizados utilizando React, Node.js, Express e TypeScript. Implementação de arquiteturas escaláveis e manutenção de código seguindo boas práticas de engenharia de software.", en: "Development of web applications and custom systems using React, Node.js, Express and TypeScript. Implementation of scalable architectures and code maintenance following software engineering best practices." },
      "exp.freelance.title": { pt: "Desenvolvedor Web", en: "Web Developer" },
      "exp.freelance.description": { pt: "Desenvolvimento de aplicações web utilizando tecnologias modernas, com foco em performance, escalabilidade e boas práticas de desenvolvimento.", en: "Development of web applications using modern technologies, focusing on performance, scalability and development best practices." },
      "exp.period.present": { pt: "Presente", en: "Present" },
      
      // Education
      "edu.bachelor.title": { pt: "Bacharelado em Ciência da Computação", en: "Bachelor's in Computer Science" },
      "edu.trybe.title": { pt: "Desenvolvimento Web Full Stack", en: "Full Stack Web Development" },
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

