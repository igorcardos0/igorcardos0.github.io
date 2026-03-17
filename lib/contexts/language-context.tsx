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
        pt: "Engenheiro de Software & Growth Ops",
        en: "Software Engineer & Growth Ops",
      },
      "hero.description": {
        pt: "Transformo desafios operacionais em sistemas escaláveis. Desenvolvedor Full Stack focado em viabilizar o crescimento de negócios através da tecnologia.",
        en: "I turn operational challenges into scalable systems. Full Stack developer focused on enabling business growth through technology.",
      },
      "hero.resume": { pt: "Curriculo PDF", en: "Resume PDF" },
      "hero.aria.github": { pt: "GitHub", en: "GitHub" },
      "hero.aria.linkedin": { pt: "LinkedIn", en: "LinkedIn" },
      "hero.aria.contact": { pt: "Contato", en: "Contact" },
      "hero.aria.resume": { pt: "Download Currículo", en: "Download Resume" },
      
      "about.title": { pt: "Sobre Mim", en: "About Me" },
      "about.description1": {
        pt: "Acredito que um bom código deve, acima de tudo, resolver um problema real. Com experiência na V4 Company, aprendi a alinhar o desenvolvimento de software às necessidades do negócio, garantindo que a tecnologia seja um motor de eficiência, e não apenas um custo.",
        en: "I believe good code should, above all, solve real problems. Working at V4 Company taught me how to align software development with business needs, ensuring technology becomes a driver of efficiency, not just a cost.",
      },
      "about.description2": {
        pt: "No dia a dia, trabalho construindo aplicações web com foco em performance, manutenção e clareza de arquitetura, sempre buscando reduzir retrabalho e dependência de processos manuais.",
        en: "On a daily basis, I build web applications focused on performance, maintainability and clear architecture, always aiming to reduce rework and dependency on manual processes.",
      },
      "about.description3": {
        pt: "Uso ferramentas como Next.js, n8n e Python para automatizar tarefas repetitivas, integrar sistemas e dar mais visibilidade para quem está executando na ponta — seja o time técnico ou as equipes operacionais.",
        en: "I use tools like Next.js, n8n and Python to automate repetitive tasks, integrate systems and give more visibility to the people executing on the front line — whether technical teams or operational squads.",
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
      
      "exp.v4.title": { pt: "Engenheiro de Software Full Stack", en: "Full Stack Software Engineer" },
      "exp.v4.description": {
        pt: "Atuo na V4 Company construindo e sustentando aplicações web que dão suporte ao trabalho diário das equipes de marketing e operações.\n\nTrabalho com interfaces de alta performance e boa experiência de uso, utilizando principalmente Next.js e React.\n\nTambém desenvolvo automações e integrações que conectam diferentes sistemas entre si, reduzindo processos manuais repetitivos e melhorando o fluxo de informação entre áreas.",
        en: "At V4 Company I build and maintain web applications that support the day-to-day work of marketing and operations teams.\n\nI focus on high-performance interfaces with a strong user experience, mainly using Next.js and React.\n\nI also develop automations and integrations that connect different systems, reducing repetitive manual work and improving information flow between teams.",
      },
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
