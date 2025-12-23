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
      
      "hero.title": { pt: "Engenheiro de Software & Growth Ops", en: "Software Engineer & Growth Ops" },
      "hero.description": { pt: "Especialista em React.js, Next.js e Automação de Processos. Transformo estratégias de marketing em software escalável e de alta performance.", en: "Expert in React.js, Next.js and Process Automation. I transform marketing strategies into scalable, high-performance software." },
      "hero.resume": { pt: "Curriculo PDF", en: "Resume PDF" },
      
      "about.title": { pt: "Sobre Mim", en: "About Me" },
      "about.description1": { pt: "Não atuo apenas escrevendo código; atuo na engenharia de soluções que geram resultado financeiro.", en: "I don't just write code; I engineer solutions that generate financial results." },
      "about.description2": { pt: "Com experiência prática em ambientes de alta performance (atualmente na V4 Company), combino a base técnica da Ciência da Computação com uma visão orientada a vendas e eficiência operacional. Atuo como um desenvolvedor \"Full Cycle\", gerenciando desde a arquitetura e desenvolvimento até os testes (QA), deploy e monitoramento.", en: "With practical experience in high-performance environments (currently at V4 Company), I combine the technical foundation of Computer Science with a sales and operational efficiency-oriented vision. I work as a \"Full Cycle\" developer, managing from architecture and development to testing (QA), deployment and monitoring." },
      "about.description3": { pt: "Meu diferencial está na interseção entre Marketing e Tecnologia: construo aplicações robustas que não apenas funcionam, mas que se integram a CRMs, automatizam processos manuais complexos e garantem que o time comercial receba dados limpos e rápidos.", en: "My differential is at the intersection of Marketing and Technology: I build robust applications that not only work, but integrate with CRMs, automate complex manual processes and ensure that the sales team receives clean and fast data." },
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
      
      "exp.v4.title": { pt: "Engenheiro de Software Full Stack", en: "Full Stack Software Engineer" },
      "exp.v4.description": { pt: "Atuo no desenvolvimento e sustentação de infraestrutura web focada em conversão e vendas para clientes de alta performance. Performance Web: Desenvolvimento de aplicações com Next.js e React otimizadas para Core Web Vitals, garantindo carregamento rápido e melhor rankeamento orgânico. Growth Ops: Criação de automações via n8n e Webhooks que integram campanhas de mídia paga (Ads) diretamente ao CRM, eliminando processos manuais e reduzindo o tempo de resposta aos leads. Qualidade: Implementação de rotinas de testes e monitoramento de erros para assegurar a estabilidade das operações de vendas em produção.", en: "I work on the development and maintenance of web infrastructure focused on conversion and sales for high-performance clients. Web Performance: Development of applications with Next.js and React optimized for Core Web Vitals, ensuring fast loading and better organic ranking. Growth Ops: Creation of automations via n8n and Webhooks that integrate paid media campaigns (Ads) directly into CRM, eliminating manual processes and reducing lead response time. Quality: Implementation of test routines and error monitoring to ensure the stability of sales operations in production." },
      "exp.alplatech.title": { pt: "Desenvolvedor de Software", en: "Software Developer" },
      "exp.alplatech.description": { pt: "Desenvolvimento de sistemas customizados para digitalização de processos de negócios locais. Arquitetura: Criação de soluções em Node.js e Express para migrar fluxos de trabalho manuais para sistemas digitais centralizados. Banco de Dados: Modelagem e implementação de bancos relacionais (PostgreSQL) para garantir a integridade e escalabilidade dos dados dos clientes.", en: "Development of customized systems for digitization of local business processes. Architecture: Creation of solutions in Node.js and Express to migrate manual workflows to centralized digital systems. Database: Modeling and implementation of relational databases (PostgreSQL) to ensure data integrity and scalability for clients." },
      "exp.freelance.title": { pt: "Desenvolvedor Web Full Stack", en: "Full Stack Web Developer" },
      "exp.freelance.description": { pt: "Entrega de soluções web focadas em performance e experiência do usuário. Desenvolvimento de interfaces responsivas e integração de APIs de pagamento e marketing, focando na experiência do usuário final e na facilidade de gestão pelo cliente.", en: "Delivery of web solutions focused on performance and user experience. Development of responsive interfaces and integration of payment and marketing APIs, focusing on end-user experience and ease of management by the client." },
      "exp.period.present": { pt: "Presente", en: "Present" },
      
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
