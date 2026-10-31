"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowRight, ArrowUpRight, BrainCircuit, Building2, ChartColumn, CircleCheck, Cloud, CodeXml, Database, 
  Globe, Heart, Layers, Lightbulb, Lock, Mail, Menu, MessageCircle, MessageSquare, Monitor, Search, Settings,
  Star, Target, User, Users, X, Zap, type LucideIcon,
} from "lucide-react";
import { atlasCaseStudy, caseStudies, deliveries, deliveryStudies, experience, nav, skills, type Job } from "./content";
import { alsoWorkWith, heroTech, hubVisual, projectCards, stats, text, type CardVisual } from "./copy";
import { BrandIcon, LinkedinMark } from "./icons";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || "dev.igordesouzacardoso@gmail.com",
};

const links = {
  whatsapp: "https://wa.me/5519999223452",
  email: "mailto:dev.igordesouzacardoso@gmail.com",
  linkedin: "https://www.linkedin.com/in/igor-s-cardoso",
  github: "https://github.com/igorcardos0",
};

const messageLimit = 500;

const uiIcons: Record<string, LucideIcon> = {
  code: CodeXml, layers: Layers, users: Users, star: Star, target: Target, bolt: Zap, brain: BrainCircuit,
  server: Database, monitor: Monitor, cloud: Cloud, search: Search, bulb: Lightbulb, gear: Settings,
  chart: ChartColumn, globe: Globe, check: CircleCheck, heart: Heart,
};

function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Component = uiIcons[name] ?? Star;
  return <Component size={size} strokeWidth={1.8} aria-hidden="true" />;
}

function Pill({ index, label }: { index: string; label: string }) {
  return <span className="pill">{index} <span className="pill-sep">/</span> {label} <i /></span>;
}

function Hand({ lines, className = "" }: { lines: readonly string[]; className?: string }) {
  return (
    <p className={`hand ${className}`} aria-hidden="true">
      {lines.map((line) => <span key={line}>{line}</span>)}
      <svg className="hand-underline" viewBox="0 0 120 12" preserveAspectRatio="none"><path d="M3 9C35 3 80 2 117 4" /></svg>
    </p>
  );
}

function CurvedArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={`curved-arrow ${className}`} viewBox="0 0 80 60" aria-hidden="true">
      <path d="M6 6c-4 22 12 40 52 44" />
      <path d="M48 41l11 9-13 5" />
    </svg>
  );
}

function StatStrip({ items, tone }: { items: (typeof stats)["pt"]; tone: "dark" | "light" }) {
  return (
    <div className={`stat-strip ${tone}`}>
      {items.map((item) => (
        <div className="stat" key={item.value + item.label[0]}>
          <span className="stat-icon"><Icon name={item.icon} size={tone === "light" ? 22 : 26} /></span>
          <strong>{item.value}</strong>
          <span className="stat-label">{item.label[0]}<br />{item.label[1]}</span>
        </div>
      ))}
    </div>
  );
}

function Books({ titles }: { titles: readonly string[] }) {
  return (
    <div className="books" aria-hidden="true">
      {titles.map((title, index) => <span key={title} className={`book book-${index}`}><b>⌇</b>{title}</span>)}
    </div>
  );
}

const jobLogos: Record<Exclude<Job["logo"], "person">, { src: string; name: string }> = {
  lusa: { src: "/logos/lusa.webp", name: "LUSA" },
  v4: { src: "/logos/v4.png", name: "COMPANY" },
  alplatech: { src: "/logos/alplatech.svg", name: "ALPLATECH" },
  games: { src: "/logos/studio-games.webp", name: "STUDIO GAMES" },
};

function Laptop() {
  return (
    <div className="laptop" aria-hidden="true">
      <div className="laptop-lid"><i /></div>
      <div className="laptop-base" />
    </div>
  );
}

function JobLogo({ logo }: { logo: Job["logo"] }) {
  if (logo === "person") return <span className="job-logo"><User size={30} strokeWidth={1.6} /></span>;
  const { src, name } = jobLogos[logo];
  return (
    <span className={`job-logo logo-${logo}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="" loading="lazy" />
      <small aria-hidden="true">{name}</small>
    </span>
  );
}

function HubVisual({ language }: { language: "pt" | "en" }) {
  const h = hubVisual[language];
  const pins = [[22, 18], [40, 30], [58, 14], [72, 40], [34, 58], [62, 64], [84, 22], [48, 46], [80, 72], [26, 80]];
  return (
    <div className="hub-visual">
      <div className="hub-map">{pins.map(([x, y]) => <i key={`${x}-${y}`} style={{ left: `${x}%`, top: `${y}%` }} />)}</div>
      <strong className="hub-title">Hub<br />Freelance</strong>
      <dl className="hub-stats">
        {h.stats.map((label, index) => <div key={label}><dt>{label}</dt><dd>{index % 2 === 0 ? 247 : 89}</dd></div>)}
      </dl>
      <div className="hub-popup">
        <b>{h.name}</b>
        <span>{h.level}</span>
        <ul>{h.checks.map((check) => <li key={check}>{check}</li>)}</ul>
      </div>
    </div>
  );
}

function CardVisualArt({ id, language }: { id: CardVisual; language: "pt" | "en" }) {
  if (id === "hub") return <HubVisual language={language} />;
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`/images/card-${id}.webp`} alt="" loading="lazy" decoding="async" />
      {id === "abajur" && <span className="abajur-logo"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l3 8H4zM11 11h2v7h-2zM7 19h10v2H7z" /></svg>abajur</span>}
    </>
  );
}

export default function Home() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [filter, setFilter] = useState("todos");
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const isEn = language === "en";
  const t = text[language];
  const siteNav = nav[language];
  const siteStats = stats[language];
  const siteCases = caseStudies[language];
  const cards = projectCards[language].filter((card) => filter === "todos" || card.filters.includes(filter));
  const siteDeliveries = deliveries[language].filter((item) => filter === "todos" || item.filters.includes(filter));
  const selectedCaseStudy = useMemo(() => {
    if (!selectedProject) return null;
    if (selectedProject === "atlas") return atlasCaseStudy[language];
    return [...caseStudies[language], ...deliveryStudies[language]].find((study) => study.id === selectedProject) ?? null;
  }, [selectedProject, language]);

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
    function onScroll() {
      setScrolled(window.scrollY > window.innerHeight * 0.75);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    setFormData((previous) => ({ ...previous, [name]: name === "message" ? value.slice(0, messageLimit) : value }));
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
      const company = formData.company ? ` (${formData.company})` : "";
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `${isEn ? "Portfolio Contact" : "Contato do Portfólio"} - ${formData.name}${company}`,
          message: formData.message,
          to_email: emailjsConfig.toEmail,
        },
        publicKey,
      );

      setFormData({ name: "", email: "", company: "", message: "" });
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
      <header className={`topbar ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <a className="brand" href="#inicio" onClick={() => setMenuOpen(false)}><span className="brand-chevron">›</span> DEV. IGOR CARDOSO <i /></a>
        <nav className={menuOpen ? "open" : ""} aria-label={isEn ? "Main navigation" : "Navegação principal"}>
          {siteNav.map((item) => (
            <a key={item.id} className={active === item.id ? "active" : ""} href={`#${item.id}`} onClick={() => setMenuOpen(false)}><span className="nav-num">{item.number}</span>{item.label}</a>
          ))}
          <a className="nav-cta" href="#contato" onClick={() => setMenuOpen(false)}><i /> {t.available}</a>
        </nav>
        <div className="topbar-actions">
          <button className="lang" type="button" onClick={toggleLanguage} aria-label={isEn ? "Mudar para português" : "Switch to English"}>{isEn ? "PT" : "EN"}</button>
          <a className="available" href="#contato"><i /> {t.available}</a>
          <button className="menu-button" type="button" aria-label={menuOpen ? (isEn ? "Close menu" : "Fechar menu") : (isEn ? "Open menu" : "Abrir menu")} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-bg" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-photo" src="/images/igor.webp" alt="" fetchPriority="high" />
            <i className="glow glow-a" /><i className="glow glow-b" />
          </div>

          <div className="hero-deco" aria-hidden="true">
            <div className="metric-card">
              <span className="metric-label">{t.metricLabel} <i /></span>
              <strong>{t.metricValue}</strong>
              <span className="metric-unit">{t.metricUnit}</span>
              <span className="metric-bars"><i /><i /><i /><i /><i /><i /></span>
            </div>
            <div className="code-panel">
              <div className="code-top"><i /><i /><i /></div>
              <div className="code-body">
                <ul className="code-tree">
                  {["platform", "api", "services", "ai-agents", "queues", "apps", "infra", "docs"].map((folder, index) => (
                    <li key={folder} className={index === 0 ? "root" : ""}>{index === 0 ? "▾" : "›"} <span>▢</span> {folder}</li>
                  ))}
                </ul>
                <div className="code-lines">{Array.from({ length: 14 }, (_, index) => <i key={index} style={{ width: `${35 + ((index * 37) % 55)}%`, marginLeft: `${(index % 4) * 8}%` }} />)}</div>
              </div>
            </div>
            <Hand lines={t.handIdeas} className="hand-ideas" />
            <CurvedArrow className="arrow-ideas" />
            <Hand lines={t.handWorld} className="hand-world" />
            <Books titles={t.books} />
            <Laptop />
            <div className="notebook">
              {t.notebook.map((item) => <span key={item}><b>☑</b> {item}</span>)}
            </div>
          </div>

          <div className="hero-inner">
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>
              <span>{t.heroTitle[0]}</span>
              <span>{t.heroTitle[1]}</span>
              <span><em>{t.heroTitle[2]}</em> {t.heroTitle[3]}</span>
            </h1>
            <p className="hero-lead">{t.heroLead.map(([chunk, bold]) => bold ? <strong key={chunk}>{chunk}</strong> : <span key={chunk}>{chunk}</span>)}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#projetos"><ArrowUpRight size={18} /> {t.seeProjects}</a>
              <a className="btn btn-outline" href="#contato"><MessageSquare size={18} /> {t.talk}</a>
            </div>
            <StatStrip items={siteStats} tone="dark" />
            <p className="tech-label">{t.techIUse}</p>
            <ul className="hero-tech">
              {heroTech.map((name) => <li key={name}><span><BrandIcon name={name} dark /></span>{name}</li>)}
            </ul>
          </div>
        </section>

        <section className="about" id="sobre">
          <div className="about-content">
            <div className="about-main">
            <Pill index="02" label={t.aboutIndex} />
            <h2 className="display">{t.aboutTitle[0]}<br /><em>{t.aboutTitle[1]}</em></h2>
            <p className="lead">{t.aboutLead.map(([chunk, bold]) => bold ? <strong key={chunk}>{chunk}</strong> : <span key={chunk}>{chunk}</span>)}</p>
            <p className="lead">{t.aboutBody}</p>
            <div className="value-cards">
              {t.values.map((value) => (
                <article key={value.title} className={`value-card value-${value.icon}`}>
                  <span className="round-icon"><Icon name={value.icon} /></span>
                  <h3>{value.title}</h3>
                  <p>{value.text}</p>
                </article>
              ))}
            </div>
            </div>
            <div className="about-stack">
            <div className="stack-head">
              <div>
                <p className="mini-label"><i /> {t.whatIDo}</p>
                <h3 className="stack-title"><i />{t.stackTitle[0]}<br />{t.stackTitle[1]}</h3>
              </div>
              <div className="stack-hand">
                <CurvedArrow className="arrow-stack" />
                <Hand lines={t.handStack} className="hand-stack" />
              </div>
            </div>
            <div className="stack-cards">
              {skills[language].map((skill) => (
                <article key={skill.title} className={`stack-card stack-${skill.icon}`}>
                  <span className="square-icon"><Icon name={skill.icon} /></span>
                  <div><h4>{skill.title}</h4><p>{skill.items}</p></div>
                </article>
              ))}
            </div>
            <div className="also-work">
              <span className="also-work-label">{t.alsoWork}</span>
              {alsoWorkWith.map((name) => <span key={name} className="also-work-item"><BrandIcon name={name} />{name}</span>)}
            </div>
            </div>
          </div>
        </section>

        <section className="career" id="experiencia">
          <div className="career-intro">
            <Pill index="03" label={t.careerIndex} />
            <h2 className="display xl">{t.careerTitle[0]}<br />{t.careerTitle[1]}<br />{t.careerTitle[2]}<br /><em>{t.careerTitle[3]}</em></h2>
            <p className="lead">{t.careerLead}</p>
            <div className="education">
              <p className="tech-label dark">{t.education}</p>
              {t.degrees.map((degree) => (
                <article key={degree.title} className="degree">
                  <span>{degree.period}</span>
                  <h3>{degree.title}</h3>
                  <p>{degree.school}</p>
                </article>
              ))}
            </div>
          </div>
          <ol className="timeline">
            {experience[language].map((job) => (
              <li key={`${job.company}-${job.start}`} className="timeline-item">
                <div className="timeline-date"><strong>{job.start}</strong><span>— {job.end}</span></div>
                <i className="timeline-dot" />
                <article className="job-card">
                  <JobLogo logo={job.logo} />
                  <div>
                    <h3>{job.company} {job.current && <span className="badge">{t.current}</span>}</h3>
                    <p className="job-role">{job.role}</p>
                    <p className="job-desc">{job.description}</p>
                    <div className="chips">{job.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section className="projects" id="projetos">
          <div className="projects-head">
            <div>
              <Pill index="04" label={t.projectsIndex} />
              <h2 className="display">{t.projectsTitle[0]}<br />{t.projectsTitle[1]}<em>{t.projectsTitle[2]}</em></h2>
              <p className="lead">{t.projectsLead}</p>
            </div>
            <div className="projects-aside">
              <div className="projects-hand"><Hand lines={t.handProjects} className="hand-projects" /><CurvedArrow className="arrow-projects" /></div>
              <div className="delivered-card">
                <span className="square-icon"><Icon name="chart" /></span>
                <strong>{t.deliveredValue}</strong>
                <span>{t.deliveredLabel[0]}<br />{t.deliveredLabel[1]}</span>
              </div>
            </div>
          </div>
          <div className="filters" role="tablist" aria-label={isEn ? "Filter projects" : "Filtrar projetos"}>
            {t.filters.map((item) => (
              <button key={item.id} type="button" role="tab" aria-selected={filter === item.id} className={filter === item.id ? "active" : ""} onClick={() => setFilter(item.id)}>{item.label}</button>
            ))}
          </div>
          {cards.length > 0 ? (
            <div className="project-grid">
              {cards.map((card) => {
                const study = siteCases.find((item) => item.id === card.id);
                if (!study) return null;
                return (
                  <article key={card.id} className={`project-card card-${card.id}`}>
                    <div className="project-art">
                      <span className="project-badge">{card.badge}</span>
                      <span className="project-number">{study.number}</span>
                      <CardVisualArt id={card.id} language={language} />
                    </div>
                    <div className="project-body">
                      <h3>{study.title}</h3>
                      <p>{study.description}</p>
                      <ul className="checks">{card.points.map((point) => <li key={point}><CircleCheck size={17} fill="currentColor" stroke="#fff" />{point}</li>)}</ul>
                      <div className="chips">{study.tags.map((tag) => <span key={tag}>{tag === "Claude Agent SDK" ? "Claude SDK" : tag}</span>)}</div>
                      <div className="project-actions">
                        <button className="btn btn-dark" type="button" onClick={() => setSelectedProject(card.id)}>{card.cta} <ArrowUpRight size={16} /></button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            siteDeliveries.length === 0 && <p className="empty">{t.noResults}</p>
          )}
          {siteDeliveries.length > 0 && (
            <div className="delivered">
              <p className="delivered-label">{t.alsoDelivered}</p>
              <div className="delivered-grid">
                {siteDeliveries.map((item) => (
                  <button key={item.id} type="button" className="delivered-item" onClick={() => setSelectedProject(item.id)}>
                    <span className="square-icon"><Icon name={item.icon} /></span>
                    <span className="delivered-text">
                      <strong>{item.title}</strong>
                      <small>{item.context}</small>
                      <span>{item.description}</span>
                    </span>
                    <span className="delivered-arrow"><ArrowRight size={16} /></span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        <section className="process" id="processo">
          <div className="process-head">
            <div>
              <Pill index="05" label={t.processIndex} />
              <h2 className="display">{t.processTitle[0]}<br />{t.processTitle[1]}<em>{t.processTitle[2]}</em></h2>
            </div>
            <p className="lead">{t.processLead}</p>
          </div>
          <ol className="steps">
            {t.steps.map((step, index) => (
              <li key={step.title} className="step">
                <span className="step-number">0{index + 1}</span>
                <span className="step-icon"><Icon name={step.icon} size={34} /></span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <ul className="checks">{step.items.map((item) => <li key={item}><CircleCheck size={17} fill="currentColor" stroke="#fff" />{item}</li>)}</ul>
              </li>
            ))}
          </ol>
          <p className="swipe-hint" aria-hidden="true">{isEn ? "Swipe to see all 5 steps" : "Deslize para ver as 5 etapas"} <ArrowRight size={14} /></p>
          <div className="focus-banner">
            <span className="focus-icon"><Zap size={40} fill="currentColor" strokeWidth={0} /></span>
            <div>
              <p className="mini-label plain">{t.focusLabel}</p>
              <p className="focus-title">{t.focusTitle[0]}<br />{t.focusTitle[1]}<em>{t.focusTitle[2]}</em></p>
            </div>
            <div className="focus-cta">
              <a className="btn btn-primary" href="#contato">{t.focusCta} <ArrowRight size={17} /></a>
              <small>{t.focusNote}</small>
            </div>
          </div>
        </section>

        <section className="contact" id="contato">
          <div className="contact-grid">
            <div>
              <Pill index="06" label={t.contactIndex} />
              <h2 className="display">{t.contactTitle[0]}<br />{t.contactTitle[1]}<br /><em>{t.contactTitle[2]}</em></h2>
              <p className="lead">{t.contactLead}</p>
              <div className="channels">
                {t.channels.map((channel) => (
                  <a key={channel.id} className="channel" href={links[channel.id]} target={channel.id === "email" ? undefined : "_blank"} rel="noopener noreferrer">
                    <span className="channel-icon">
                      {channel.id === "whatsapp" && <MessageCircle size={24} />}
                      {channel.id === "email" && <Mail size={24} />}
                      {channel.id === "linkedin" && <LinkedinMark />}
                      {channel.id === "github" && <BrandIcon name="GitHub" />}
                    </span>
                    <strong>{channel.title}</strong>
                    <span>{channel.text}</span>
                    <em>{channel.link} <ArrowRight size={14} /></em>
                  </a>
                ))}
              </div>
            </div>
            <form className="contact-form" onSubmit={sendEmail}>
              <h3>{t.formTitle}</h3>
              <p>{t.formLead}</p>
              <div className="form-row">
                <label className="input"><User size={18} /><span className="sr-only">{t.name}</span><input name="name" placeholder={t.name} value={formData.name} onChange={handleFormChange} required autoComplete="name" /></label>
                <label className="input"><Mail size={18} /><span className="sr-only">{t.email}</span><input name="email" type="email" placeholder={t.email} value={formData.email} onChange={handleFormChange} required autoComplete="email" /></label>
              </div>
              <label className="input"><Building2 size={18} /><span className="sr-only">{t.company}</span><input name="company" placeholder={t.company} value={formData.company} onChange={handleFormChange} autoComplete="organization" /></label>
              <label className="input textarea"><MessageSquare size={18} /><span className="sr-only">{t.message}</span><textarea name="message" placeholder={t.message} value={formData.message} onChange={handleFormChange} rows={6} required maxLength={messageLimit} /><small>{formData.message.length}/{messageLimit}</small></label>
              <button className="btn btn-primary btn-block" type="submit" disabled={isSubmitting}>{isSubmitting ? t.sending : t.send} <ArrowRight size={17} /></button>
              <p className="privacy"><Lock size={14} /> {t.privacy}</p>
            </form>
          </div>
          <div className="availability">
            <div>
              <p className="mini-label"><i /> {t.availableFor}</p>
              <p className="availability-title">{t.availableTitle[0]}<br /><em>{t.availableTitle[1]}</em></p>
            </div>
            {t.availability.map((item) => (
              <div key={item.title} className="availability-item">
                <span className="square-icon filled"><Icon name={item.icon} /></span>
                <strong>{item.title}</strong>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
          <footer>
            <span>© 2026 Igor de Souza Cardoso</span>
            <a href="#inicio">{t.backToTop} ↑</a>
          </footer>
        </section>
      </main>

      {showSuccessModal && (
        <div className="modal-backdrop" role="presentation" onClick={() => setShowSuccessModal(false)}>
          <section className="success-modal" role="dialog" aria-modal="true" aria-labelledby="success-modal-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label={isEn ? "Close confirmation" : "Fechar confirmação"} onClick={() => setShowSuccessModal(false)}><X size={18} /></button>
            <span className="success-icon" aria-hidden="true"><CircleCheck size={30} /></span>
            <h2 id="success-modal-title">{isEn ? "Your email has been sent." : "Seu email foi enviado."}<em>{isEn ? "Let's keep in touch." : "Vamos manter contato."}</em></h2>
            <p>{isEn ? "Thank you for reaching out. I will get back to you soon." : "Obrigado por entrar em contato. Responderei o mais breve possível."}</p>
            <div className="modal-actions">
              <button className="btn btn-outline-dark" type="button" onClick={() => setShowSuccessModal(false)}>{isEn ? "Back to site" : "Voltar ao site"}</button>
              <a className="btn btn-primary" href={links.whatsapp} target="_blank" rel="noreferrer">{isEn ? "Talk on WhatsApp" : "Falar no WhatsApp"} <ArrowUpRight size={16} /></a>
            </div>
          </section>
        </div>
      )}

      {selectedCaseStudy && (
        <div className="modal-backdrop" role="presentation" onClick={() => setSelectedProject(null)}>
          <section className="case-modal" role="dialog" aria-modal="true" aria-labelledby="case-study-title" onClick={(event) => event.stopPropagation()}>
            <button className="modal-close" type="button" aria-label={isEn ? "Close case study" : "Fechar estudo de caso"} onClick={() => setSelectedProject(null)}><X size={18} /></button>
            <header className="case-header">
              <span className="mini-label plain">{selectedCaseStudy.modalCategory}</span>
              <h2 id="case-study-title">{selectedCaseStudy.modalTitle}</h2>
              <p>{selectedCaseStudy.summary}</p>
            </header>

            {selectedCaseStudy.media && (
              <figure className="case-media">
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

            <div className="case-content">
              {selectedCaseStudy.challenge.length > 0 && (
                <div className="case-section">
                  <span className="case-label">{isEn ? "THE PROBLEM" : "O PROBLEMA"}</span>
                  <ul>{selectedCaseStudy.challenge.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              )}
              {selectedCaseStudy.solution && (
                <div className="case-section">
                  <span className="case-label">{isEn ? "WHAT I BUILT" : "O QUE CONSTRUÍ"}</span>
                  <p>{selectedCaseStudy.solution}</p>
                </div>
              )}
              {selectedCaseStudy.stack.length > 0 && (
                <div className="case-section">
                  <span className="case-label">{isEn ? "ARCHITECTURE & STACK" : "ARQUITETURA & STACK"}</span>
                  <div className="case-stack">{selectedCaseStudy.stack.map(([label, value]) => <div key={label}><strong>{label}</strong><span>{value}</span></div>)}</div>
                </div>
              )}
              {selectedCaseStudy.modules.length > 0 && (
                <div className="case-section">
                  <span className="case-label">{isEn ? "KEY MODULES" : "PRINCIPAIS MÓDULOS"}</span>
                  <div className="case-modules">{selectedCaseStudy.modules.map(([title, description]) => <article key={title}><strong>{title}</strong><p>{description}</p></article>)}</div>
                </div>
              )}
              {selectedCaseStudy.links && (
                <div className="case-section">
                  <span className="case-label">{isEn ? "LIVE SITES" : "SITES NO AR"}</span>
                  <div className="case-links">{selectedCaseStudy.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={14} /></a>)}</div>
                </div>
              )}
              {(selectedCaseStudy.role.length > 0 || selectedCaseStudy.impact.length > 0) && (
                <div className="case-columns">
                  {selectedCaseStudy.role.length > 0 && (
                    <div className="case-section">
                      <span className="case-label">{isEn ? "MY ROLE" : "MEU PAPEL"}</span>
                      <ul>{selectedCaseStudy.role.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  )}
                  {selectedCaseStudy.impact.length > 0 && (
                    <div className="case-section">
                      <span className="case-label">{isEn ? "RESULT" : "RESULTADO"}</span>
                      <ul>{selectedCaseStudy.impact.map((item) => <li key={item}>{item}</li>)}</ul>
                    </div>
                  )}
                </div>
              )}
            </div>
            <button className="btn btn-primary" type="button" onClick={() => setSelectedProject(null)}>{isEn ? "Back to projects" : "Voltar aos projetos"}</button>
          </section>
        </div>
      )}
    </>
  );
}
