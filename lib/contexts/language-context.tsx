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
      "hero.aria.github": { pt: "GitHub", en: "GitHub" },
      "hero.aria.linkedin": { pt: "LinkedIn", en: "LinkedIn" },
      "hero.aria.contact": { pt: "Contato", en: "Contact" },
      "hero.aria.resume": { pt: "Download Currículo", en: "Download Resume" },
      
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
      "contact.toast.sentSuccess": { pt: "Mensagem enviada com sucesso! Entrarei em contato em breve.", en: "Message sent successfully! I'll get back to you soon." },
      "contact.toast.error": { pt: "Erro ao enviar", en: "Error sending" },
      "contact.toast.errorDesc": { pt: "Ocorreu um erro ao enviar a mensagem. Verifique as configurações do EmailJS.", en: "An error occurred while sending the message. Please check EmailJS configuration." },
      "contact.email.greeting": { pt: "Olá Igor", en: "Hello Igor" },
      "contact.email.nameLabel": { pt: "Meu nome é", en: "My name is" },
      "contact.email.subjectPrefix": { pt: "Contato do Portfólio", en: "Portfolio Contact" },
      
      "exp.v4.title": { pt: "Engenheiro de Software Full Stack", en: "Full Stack Software Engineer" },
      "exp.v4.description": { pt: "Atuo no desenvolvimento e sustentação de infraestrutura web focada em conversão e vendas para clientes de alta performance.\n\nPerformance Web: Desenvolvimento de aplicações com Next.js e React otimizadas para Core Web Vitals, garantindo carregamento rápido e melhor rankeamento orgânico.\n\nGrowth Ops: Criação de automações via n8n e Webhooks que integram campanhas de mídia paga (Ads) diretamente ao CRM, eliminando processos manuais e reduzindo o tempo de resposta aos leads.\n\nQualidade: Implementação de rotinas de testes e monitoramento de erros para assegurar a estabilidade das operações de vendas em produção.", en: "I work on the development and maintenance of web infrastructure focused on conversion and sales for high-performance clients.\n\nWeb Performance: Development of applications with Next.js and React optimized for Core Web Vitals, ensuring fast loading and better organic ranking.\n\nGrowth Ops: Creation of automations via n8n and Webhooks that integrate paid media campaigns (Ads) directly into CRM, eliminating manual processes and reducing lead response time.\n\nQuality: Implementation of test routines and error monitoring to ensure the stability of sales operations in production." },
      "exp.alplatech.title": { pt: "Desenvolvedor de Software", en: "Software Developer" },
      "exp.alplatech.description": { pt: "Atuei no desenvolvimento de sistemas customizados para digitalização de processos de negócios locais, transformando operações manuais em fluxos digitais eficientes.\n\nArquitetura: Criação de soluções em Node.js e Express para migrar fluxos de trabalho manuais para sistemas digitais centralizados, melhorando a produtividade e reduzindo erros operacionais.\n\nBanco de Dados: Modelagem e implementação de bancos relacionais (PostgreSQL) para garantir a integridade, segurança e escalabilidade dos dados dos clientes.\n\nIntegração: Desenvolvimento de APIs e integrações para conectar sistemas legados com novas plataformas digitais, facilitando a transição tecnológica dos clientes.", en: "I worked on the development of customized systems for digitization of local business processes, transforming manual operations into efficient digital flows.\n\nArchitecture: Creation of solutions in Node.js and Express to migrate manual workflows to centralized digital systems, improving productivity and reducing operational errors.\n\nDatabase: Modeling and implementation of relational databases (PostgreSQL) to ensure data integrity, security and scalability for clients.\n\nIntegration: Development of APIs and integrations to connect legacy systems with new digital platforms, facilitating clients' technological transition." },
      "exp.studiogames.title": { pt: "Técnico de TI", en: "IT Technician" },
      "exp.studiogames.description": { pt: "Atuei na manutenção e suporte técnico de infraestrutura de TI, garantindo a operação contínua dos sistemas e equipamentos da empresa.\n\nManutenção: Realizei manutenção preventiva e corretiva em computadores e consoles, incluindo upgrades de hardware, formatação e montagem de PCs gamer para otimizar performance.\n\nSuporte: Ofereci suporte técnico presencial a clientes, garantindo agilidade na resolução de problemas e organização do ambiente de trabalho para maximizar a produtividade.\n\nInfraestrutura: Atuei na administração e manutenção de redes locais, assegurando conectividade e segurança dos sistemas para proteger dados e garantir acesso contínuo.\n\nAutomação: Desenvolvi e mantive softwares em Python para atualização de jogos e aplicativos, além de gerenciar sistemas de login, garantindo eficiência e continuidade operacional.", en: "I worked on maintenance and technical support of IT infrastructure, ensuring continuous operation of company systems and equipment.\n\nMaintenance: Performed preventive and corrective maintenance on computers and consoles, including hardware upgrades, formatting and gaming PC assembly to optimize performance.\n\nSupport: Provided on-site technical support to customers, ensuring quick problem resolution and workplace organization to maximize productivity.\n\nInfrastructure: Worked on local network administration and maintenance, ensuring connectivity and system security to protect data and guarantee continuous access.\n\nAutomation: Developed and maintained Python software for game and application updates, as well as managing login systems, ensuring efficiency and operational continuity." },
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
