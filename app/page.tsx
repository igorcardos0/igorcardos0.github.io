"use client";

import { FormEvent, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { alsoWorkWith, atlasCaseStudy, caseStudies, deliveries, experience, nav, skills } from "./content";

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

const freelanceUrl = "https://alplatech-dev.vercel.app/";

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
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const isEn = language === "en";
  const siteNav = nav[language];
  const siteSkills = skills[language];
  const siteExperience = experience[language];
  const siteCases = caseStudies[language];
  const siteDeliveries = deliveries[language];
  const selectedCaseStudy = selectedProject === "atlas"
    ? atlasCaseStudy[language]
    : siteCases.find((study) => study.id === selectedProject) ?? null;

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
    if (!selectedProject) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setSelectedProject(null);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedProject]);

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
            <span className="availability"><i /> {isEn ? "AVAILABLE FOR FREELANCE PROJECTS" : "DISPONÍVEL PARA PROJETOS FREELANCE"}</span>
          </div>
          <div className="hero-content reveal">
            <div className="eyebrow"><span /> SOFTWARE ENGINEER · FULL STACK & {isEn ? "AI" : "IA"}</div>
            <h1>
              Igor de Souza Cardoso
              <em>{isEn ? "Full Stack Software Engineer." : "Engenheiro de Software Full Stack."}</em>
            </h1>
            <p>
              {isEn ? "Full stack software engineer. I build the technology behind social impact campaigns: pages, checkout, apps and AI automations." : "Engenheiro de software full stack. Construo a tecnologia por trás de campanhas de impacto social: páginas, checkout, apps e automações com IA."}
            </p>
            <div className="actions">
              <a className="button primary" href="#projetos">{isEn ? "View case studies" : "Ver estudos de caso"} <span>↓</span></a>
              <a className="button ghost" href="#contato">{isEn ? "Talk to me" : "Falar comigo"} <Arrow /></a>
              <a className="button freelance" href={freelanceUrl} target="_blank" rel="noopener noreferrer">
                <span className="freelance-button-title">{isEn ? "Freelance project" : "Projeto freelance"}</span> <Arrow />
              </a>
            </div>
          </div>
          <div className="hero-metrics">
            <div><strong>{isEn ? "Since" : "Desde"}<br />2022</strong><span>{isEn ? <>shipping<br />software</> : <>entregando<br />software</>}</span></div>
            <div><strong>Full<br />Stack</strong><span>{isEn ? <>from checkout<br />to AI agents</> : <>do checkout<br />aos agentes de IA</>}</span></div>
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
              <p>{isEn ? "I'm a full stack software engineer at LUSA Brasil, where I lead the technology of the animal sector and build the tech behind NGO fundraising campaigns: the LUSA donation app, payments with our own gateway and process automation with AI." : "Sou engenheiro de software full stack na LUSA Brasil, onde lidero tecnicamente o setor animal e construo a tecnologia das campanhas de arrecadação para ONGs: o app de doação da LUSA, pagamentos com gateway próprio e automação de processos com IA."}</p>
              <p>{isEn ? "On the backend I work with NestJS, Node.js, Laravel and Python; on the frontend, with Next.js, React and TypeScript; for data, PostgreSQL, Supabase and Redis; and for infrastructure, Docker, AWS, DigitalOcean and CI/CD." : "No backend trabalho com NestJS, Node.js, Laravel e Python; no frontend, com Next.js, React e TypeScript; nos dados, com PostgreSQL, Supabase e Redis; e na infraestrutura, com Docker, AWS, DigitalOcean e CI/CD."}</p>
              <p>{isEn ? "Before that I worked at V4 Company and ALPLATECH, delivering internal platforms, integrations and custom systems. I also use AI in my own process: I organized a team of 41 Claude Code agents and built Abajur to watch it work live." : "Antes passei pela V4 Company e pela ALPLATECH, entregando plataformas internas, integrações e sistemas sob medida. Também uso IA no meu próprio processo: organizei um time de 41 agentes do Claude Code e criei o Abajur para acompanhá-lo ao vivo."}</p>
              <p>{isEn ? "I'm studying Computer Science at UniMAX and preparing for the AWS certification." : "Curso Ciência da Computação na UniMAX e me preparo para a certificação AWS."}</p>
              <a className="text-link" href="#experiencia">{isEn ? "Explore my career" : "Conheça minha trajetória"} <Arrow /></a>
            </div>
            <div>
              <div className="skill-grid">
                {siteSkills.map(([title, items], index) => (
                  <article className="skill-card" key={title}>
                    <span>0{index + 1}</span>
                    <h3>{title}</h3>
                    <p>{items}</p>
                  </article>
                ))}
              </div>
              <p className="also-work">{alsoWorkWith[language]}</p>
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
            <p className="case-notice"><strong>{isEn ? "CASE STUDIES" : "ESTUDOS DE CASO"}</strong> {isEn ? "Personal projects are shown in full. Work built at LUSA is presented as case studies, with no internal screens or donor data." : "Projetos próprios aparecem por inteiro. Os construídos na LUSA são apresentados como estudos de caso, sem telas internas nem dados de doadores."}</p>
          </header>
          <div className="case-grid">
            {siteCases.map((study) => (
              <article
                className="project-card has-case-study"
                key={study.id}
                data-cta={isEn ? "OPEN CASE STUDY ↗" : "ABRIR ESTUDO DE CASO ↗"}
                onClick={() => setSelectedProject(study.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    setSelectedProject(study.id);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`${study.title} — ${isEn ? "open case study" : "abrir estudo de caso"}`}
              >
                <div className={`project-visual case-${study.id}`}>
                  <div className="visual-bar"><span>{study.category}</span><i /><i /><i /></div>
                  <div className="visual-content">
                    <span className="visual-kicker">{study.owner} / {study.number}</span>
                    <strong>{study.title}</strong>
                    <div className="visual-lines"><i /><i /><i /><i /></div>
                  </div>
                </div>
                <div className="project-card-copy">
                  <div className="project-number">{study.number} <span>{study.owner}</span></div>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <p className="case-result"><span>{isEn ? "RESULT" : "RESULTADO"}</span>{study.result}</p>
                  <div className="tags">{study.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </article>
            ))}
          </div>

          <div className="deliveries">
            <span className="section-index">{isEn ? "ALSO DELIVERED" : "TAMBÉM ENTREGUEI"}</span>
            <div className="delivery-list">
              {siteDeliveries.map((delivery) => (
                <article className="delivery" key={delivery.title}>
                  <div className="delivery-head">
                    <h3>{delivery.title}</h3>
                    <span>{delivery.context}</span>
                  </div>
                  <p>{delivery.description}</p>
                  {delivery.links && (
                    <div className="delivery-links">
                      {delivery.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <Arrow /></a>
                      ))}
                    </div>
                  )}
                  {delivery.caseStudy && (
                    <button className="text-link" type="button" onClick={() => setSelectedProject(delivery.caseStudy ?? null)}>
                      {isEn ? "Open case study" : "Abrir estudo de caso"} <Arrow />
                    </button>
                  )}
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
            <p>{isEn ? "Open to conversations about technology for social impact, payments, automation and AI agents, and to freelance projects." : "Aberto a conversas sobre tecnologia para impacto social, pagamentos, automação e agentes de IA, e a projetos freelance."}</p>
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
            aria-labelledby="case-study-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button className="case-study-close" type="button" aria-label={isEn ? "Close case study" : "Fechar estudo de caso"} onClick={() => setSelectedProject(null)}>×</button>
            <div className="case-study-header">
              <span className="section-index">{selectedCaseStudy.modalCategory}</span>
              <h2 id="case-study-title">{selectedCaseStudy.modalTitle}</h2>
              <p>{selectedCaseStudy.summary}</p>
            </div>

            {selectedCaseStudy.media && (
              <figure className="case-study-media">
                {selectedCaseStudy.media.kind === "video" ? (
                  <video autoPlay muted loop playsInline preload="metadata" poster={selectedCaseStudy.media.poster} aria-label={selectedCaseStudy.media.alt}>
                    <source src={selectedCaseStudy.media.src} type="video/webm" />
                    {selectedCaseStudy.media.fallback && <source src={selectedCaseStudy.media.fallback} type="video/mp4" />}
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={selectedCaseStudy.media.src} alt={selectedCaseStudy.media.alt} loading="lazy" decoding="async" />
                )}
                <figcaption>{selectedCaseStudy.media.caption}</figcaption>
              </figure>
            )}

            <div className="case-study-content">
              <div className="case-study-section">
                <span className="case-study-label">01 / {isEn ? "THE PROBLEM" : "O PROBLEMA"}</span>
                <ul>{selectedCaseStudy.challenge.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">02 / {isEn ? "WHAT I BUILT" : "O QUE CONSTRUÍ"}</span>
                <p>{selectedCaseStudy.solution}</p>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">03 / {isEn ? "ARCHITECTURE & STACK" : "ARQUITETURA & STACK"}</span>
                <div className="case-study-stack">{selectedCaseStudy.stack.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
              </div>
              <div className="case-study-section">
                <span className="case-study-label">04 / {isEn ? "KEY MODULES" : "PRINCIPAIS MÓDULOS"}</span>
                <div className="case-study-modules">{selectedCaseStudy.modules.map(([title, description]) => <article key={title}><strong>{title}</strong><p>{description}</p></article>)}</div>
              </div>
              <div className="case-study-columns">
                <div className="case-study-section">
                  <span className="case-study-label">05 / {isEn ? "MY ROLE" : "MEU PAPEL"}</span>
                  <ul>{selectedCaseStudy.role.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div className="case-study-section">
                  <span className="case-study-label">06 / {isEn ? "RESULT" : "RESULTADO"}</span>
                  <ul>{selectedCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </div>
            </div>
            <button className="button primary case-study-back" type="button" onClick={() => setSelectedProject(null)}>{isEn ? "Back to projects" : "Voltar aos projetos"} <span>↓</span></button>
          </section>
        </div>
      )}
    </>
  );
}
