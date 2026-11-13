"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowDownToLine, ArrowRight, ArrowUpRight, BarChart3, BriefcaseBusiness, Check, Code2, Copy, Cpu, FolderKanban,
  Gamepad2, House, Layers, Mail, Menu, MessageCircle, PawPrint, User, X, type LucideIcon,
} from "lucide-react";
import { atlasCaseStudy, caseStudies, deliveries, deliveryStudies, experience, skills, type CaseStudy } from "./content";
import { alsoWorkWith, hubVisual, projectCards, text } from "./copy";
import { ui } from "./ui";

const EMAIL = "dev.igordesouzacardoso@gmail.com";
const LINKS = {
  github: "https://github.com/igorcardos0",
  linkedin: "https://www.linkedin.com/in/igor-s-cardoso",
  whatsapp: "https://wa.me/5519999223452",
};

const emailjsConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || EMAIL,
};

const navIcons: Record<string, LucideIcon> = {
  inicio: House, sobre: User, projetos: FolderKanban, experiencia: BriefcaseBusiness, tecnologias: Cpu, contato: Mail,
};
const featuredIds = ["lusa", "icharity", "bitenglish"] as const;
const projectImages: Record<string, string> = { abajur: "/images/card-abajur.webp", lusa: "/images/card-lusa.webp", icharity: "/images/card-icharity.webp", bitenglish: "/images/card-bitenglish.webp" };
const featuredIcons: Record<string, LucideIcon> = { lusa: PawPrint, icharity: Layers, bitenglish: Gamepad2 };

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.7 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" /></svg>;
}
function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.83v1.54h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13V21h-4v-5.02c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.93 1.3-1.93 2.65V21h-4V9.75Z" /></svg>;
}

function CaseDrawer({ study, labels, closeLabel, onClose }: { study: CaseStudy; labels: (typeof ui)["pt"]["caseLabels"]; closeLabel: string; onClose: () => void }) {
  return (
    <div className="drawer-backdrop" role="presentation" onClick={onClose}>
      <article className="drawer" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={(event) => event.stopPropagation()}>
        <div className="drawer-bar">
          <span className="kicker">{study.modalCategory}</span>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={closeLabel}><X size={18} /></button>
        </div>
        <h2 id="case-title">{study.modalTitle}</h2>
        <p className="drawer-lead">{study.summary}</p>
        {study.media && (
          <figure className="drawer-media">
            {study.media.kind === "video" ? (
              <video autoPlay muted loop playsInline preload="metadata" poster={study.media.poster} aria-label={study.media.alt}>
                <source src={study.media.src} type="video/webm" />
                {study.media.fallback && <source src={study.media.fallback} type="video/mp4" />}
              </video>
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={study.media.src} alt={study.media.alt} loading="lazy" decoding="async" />
            )}
            <figcaption>{study.media.caption}</figcaption>
          </figure>
        )}
        {study.challenge.length > 0 && <section className="drawer-block"><h3>{labels.problem}</h3><ul>{study.challenge.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {study.solution && <section className="drawer-block"><h3>{labels.built}</h3><p>{study.solution}</p></section>}
        {study.stack.length > 0 && <section className="drawer-block"><h3>{labels.stack}</h3><dl className="kv">{study.stack.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>}
        {study.modules.length > 0 && <section className="drawer-block"><h3>{labels.modules}</h3><div className="modules">{study.modules.map(([label, value]) => <div key={label}><strong>{label}</strong><p>{value}</p></div>)}</div></section>}
        {study.links && <section className="drawer-block"><h3>{labels.links}</h3><div className="pills">{study.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer noopener">{link.label} <ArrowUpRight size={13} /></a>)}</div></section>}
        {study.role.length > 0 && <section className="drawer-block"><h3>{labels.role}</h3><ul>{study.role.map((item) => <li key={item}>{item}</li>)}</ul></section>}
        {study.impact.length > 0 && <section className="drawer-block result"><h3>{labels.result}</h3><ul>{study.impact.map((item) => <li key={item}>{item}</li>)}</ul></section>}
      </article>
    </div>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [index, setIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const wheelLock = useRef(0);
  const lastWheel = useRef(0);
  const lastDelta = useRef(0);
  const scrolledAt = useRef(0);
  const scrollAnim = useRef<{ slide: HTMLElement; target: number; frame: number } | null>(null);
  const stageRef = useRef<HTMLElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const isEn = language === "en";
  const u = ui[language];
  const t = text[language];
  const total = u.nav.length;

  const study = useMemo(() => {
    if (!selected) return null;
    if (selected === "atlas") return atlasCaseStudy[language];
    return [...caseStudies[language], ...deliveryStudies[language]].find((item) => item.id === selected) ?? null;
  }, [selected, language]);

  const go = useCallback((next: number) => {
    const clamped = Math.max(0, Math.min(total - 1, next));
    setMenuOpen(false);
    if (window.matchMedia("(min-width: 1024px)").matches) {
      setIndex(clamped);
    } else {
      document.getElementById(ui.pt.nav[clamped].id)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [total]);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!isDesktop || selected) return;
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("input, textarea")) return;
      if (event.key === "ArrowRight") setIndex((value) => Math.min(total - 1, value + 1));
      if (event.key === "ArrowLeft") setIndex((value) => Math.max(0, value - 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isDesktop, selected, total]);

  useEffect(() => {
    const locked = Boolean(selected) || menuOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    if (!locked) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setSelected(null);
      setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, menuOpen]);

  /**
   * Desktop: the mouse wheel drives everything. It scrolls the current slide while it has content
   * left in that direction; once at the edge, the next tick moves to the next or previous slide.
   * Scrolling is done in code because the browser does not reliably scroll a slide that was just
   * moved into view with a transform.
   */
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage || !isDesktop || selected) return;
    function stopScroll() {
      if (scrollAnim.current) cancelAnimationFrame(scrollAnim.current.frame);
      scrollAnim.current = null;
    }
    /** Eases a slide's scrollTop toward a target; new wheel ticks just move the target. */
    function scrollTo(slide: HTMLElement, target: number) {
      const running = scrollAnim.current;
      if (running && running.slide === slide) { running.target = target; return; }
      stopScroll();
      const state = { slide, target, frame: 0 };
      const step = () => {
        const distance = state.target - slide.scrollTop;
        if (Math.abs(distance) < 1) { slide.scrollTop = state.target; scrollAnim.current = null; return; }
        const before = slide.scrollTop;
        slide.scrollTop = before + Math.sign(distance) * Math.max(1, Math.abs(distance) * 0.22);
        if (slide.scrollTop === before) { scrollAnim.current = null; return; }
        state.frame = requestAnimationFrame(step);
      };
      scrollAnim.current = state;
      state.frame = requestAnimationFrame(step);
    }
    function onWheel(event: WheelEvent) {
      if (event.ctrlKey) return;
      event.preventDefault();
      const unit = event.deltaMode === 1 ? 40 : event.deltaMode === 2 ? window.innerHeight : 1;
      const horizontal = Math.abs(event.deltaX) > Math.abs(event.deltaY);
      const delta = (horizontal ? event.deltaX : event.deltaY) * unit;
      const size = Math.abs(delta);
      if (size < 1) return;
      const now = Date.now();
      const sameGesture = now - lastWheel.current < 120;
      const decaying = sameGesture && size < 40 && size <= lastDelta.current;
      lastWheel.current = now;
      lastDelta.current = size;
      if (now - wheelLock.current < 420) return;
      const slides = stage!.querySelectorAll<HTMLElement>(".slide");
      const slide = slides[index];
      if (!slide) return;
      const direction = delta > 0 ? 1 : -1;
      if (!horizontal) {
        const max = slide.scrollHeight - slide.clientHeight;
        const anim = scrollAnim.current;
        const from = anim && anim.slide === slide ? anim.target : slide.scrollTop;
        const room = direction > 0 ? max - from : from;
        if (room > 2) {
          scrolledAt.current = now;
          scrollTo(slide, Math.max(0, Math.min(max, from + delta)));
          return;
        }
        if (decaying || now - scrolledAt.current < 300) return;
      } else if (size < 30 || decaying) return;
      const next = index + direction;
      if (next < 0 || next >= total) return;
      wheelLock.current = now;
      stopScroll();
      const target = slides[next];
      if (target) target.scrollTop = direction > 0 ? 0 : target.scrollHeight;
      setIndex(next);
    }
    stage.addEventListener("wheel", onWheel, { passive: false });
    return () => { stage.removeEventListener("wheel", onWheel); stopScroll(); };
  }, [isDesktop, selected, index, total]);

  function onTouchStart(event: React.TouchEvent) {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }

  function onTouchEnd(event: React.TouchEvent) {
    if (!isDesktop || !touchStart.current) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.current.x;
    const dy = touch.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > 70 && Math.abs(dx) > Math.abs(dy) * 1.5) setIndex((value) => Math.max(0, Math.min(total - 1, value + (dx < 0 ? 1 : -1))));
  }

  function toggleLanguage() {
    const next = isEn ? "pt" : "en";
    setLanguage(next);
    document.documentElement.lang = next === "en" ? "en" : "pt-BR";
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      window.alert(isEn ? "Please fill in all fields." : "Por favor, preencha todos os campos.");
      return;
    }
    const { serviceId, templateId, publicKey } = emailjsConfig;
    if (!serviceId || !templateId || !publicKey) {
      window.alert(isEn ? "The form is not configured yet. Please email me directly." : "O formulário ainda não está configurado. Me mande um e-mail direto.");
      return;
    }
    setIsSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: `${isEn ? "Portfolio Contact" : "Contato do Portfólio"} - ${formData.name}`,
        message: formData.message,
        to_email: emailjsConfig.toEmail,
      }, publicKey);
      setFormData({ name: "", email: "", message: "" });
      setSent(true);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === "object" && "text" in error ? String(error.text) : undefined;
      window.alert(errorMessage || (isEn ? "An error occurred while sending the message." : "Ocorreu um erro ao enviar a mensagem."));
    } finally {
      setIsSubmitting(false);
    }
  }

  const navItems = u.nav.map(({ id, label }, position) => {
    const Icon = navIcons[id];
    return (
      <a
        key={id}
        href={`#${id}`}
        className={isDesktop && index === position ? "active" : ""}
        aria-current={isDesktop && index === position ? "page" : undefined}
        onClick={(event) => { event.preventDefault(); go(position); }}
      >
        <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
        <span>{label}</span>
      </a>
    );
  });

  const slideProps = (position: number) => ({ id: ui.pt.nav[position].id, inert: isDesktop && index !== position, "aria-hidden": isDesktop && index !== position ? true : undefined });

  return (
    <div className="app">
      <aside className="sidebar">
        <a href="#inicio" className="brand" onClick={(event) => { event.preventDefault(); go(0); }}>
          <Code2 className="brand-mark" size={44} strokeWidth={2.2} aria-hidden="true" />
          <strong>Igor Cardoso</strong>
          <span>{u.role}</span>
        </a>
        <nav className="side-nav" aria-label={isEn ? "Main navigation" : "Navegação principal"}>{navItems}</nav>
        <div className="side-foot">
          <p className="available"><i aria-hidden="true" /> <span>{u.available[0]}<br />{u.available[1]}</span></p>
          <div className="side-social">
            <a href={LINKS.github} target="_blank" rel="noreferrer noopener" aria-label="GitHub"><GithubIcon /></a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a href={`mailto:${EMAIL}`} aria-label="E-mail"><Mail size={22} strokeWidth={1.8} /></a>
            <button type="button" className="side-lang" onClick={toggleLanguage} aria-label={u.langLabel}>{u.lang}</button>
          </div>
        </div>
      </aside>

      <header className="topbar">
        <a href="#inicio" className="top-brand" onClick={(event) => { event.preventDefault(); go(0); }}><Code2 size={24} strokeWidth={2.4} aria-hidden="true" /> Igor Cardoso</a>
        <div className="top-actions">
          <button type="button" className="top-lang" onClick={toggleLanguage} aria-label={u.langLabel}>{u.lang}</button>
          <button type="button" className="top-menu" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={u.menu}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>
      <nav id="mobile-menu" className={`mobile-menu ${menuOpen ? "open" : ""}`} aria-label={u.menu} inert={!menuOpen}>
        {navItems}
        <p className="available"><i aria-hidden="true" /> {u.available[0]} {u.available[1]}</p>
      </nav>

      <main className="stage" ref={stageRef} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <div className="track" style={isDesktop ? { transform: `translateX(-${index * 100}%)` } : undefined}>
          {/* ---------- 01 Início ---------- */}
          <section className="slide" {...slideProps(0)}>
            <div className="slide-inner">
              <div className="hero">
                <div className="hero-copy">
                  <p className="hello">{u.hello}</p>
                  <h1>Igor de Souza<br />Cardoso</h1>
                  <p className="hero-role">{u.title}</p>
                  <p className="hero-intro">{u.intro}</p>
                  <div className="actions">
                    <button type="button" className="btn btn-dark" onClick={() => go(2)}>{u.seeProjects} <ArrowRight size={17} /></button>
                    <button type="button" className="btn btn-light" onClick={() => go(5)}><MessageCircle size={17} /> {u.talk}</button>
                  </div>
                </div>
                <div className="hero-photo">
                  <div className="photo-bg" aria-hidden="true" />
                  <i className="deco deco-a" aria-hidden="true" />
                  <i className="deco deco-b" aria-hidden="true" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/igor.webp" alt={isEn ? "Portrait of Igor de Souza Cardoso" : "Retrato de Igor de Souza Cardoso"} fetchPriority="high" />
                  <span className="badge badge-code" aria-hidden="true"><Code2 size={24} strokeWidth={2.2} /></span>
                  <span className="badge badge-chart" aria-hidden="true"><BarChart3 size={24} strokeWidth={2.4} /></span>
                </div>
              </div>

              <div className="home-about">
                <div>
                  <h2>{u.aboutTitle}</h2>
                  <p>{u.aboutShort}</p>
                </div>
                <dl className="stats">
                  {u.stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
                </dl>
              </div>

              <div className="home-projects">
                <div className="row-head">
                  <h2>{u.featured}</h2>
                  <button type="button" className="link" onClick={() => go(2)}>{u.seeAll} <ArrowUpRight size={16} /></button>
                </div>
                <div className="mini-cards">
                  {featuredIds.map((id) => {
                    const item = caseStudies[language].find((entry) => entry.id === id);
                    if (!item) return null;
                    const Icon = featuredIcons[id];
                    return (
                      <button key={id} type="button" className="mini-card" onClick={() => setSelected(id)}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img className="mini-media" src={projectImages[id]} alt="" loading="lazy" />
                        <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
                        <ArrowUpRight className="mini-arrow" size={18} aria-hidden="true" />
                        <strong>{id === "lusa" ? "LUSA Brasil" : item.title}</strong>
                        <span>{u.short[id]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* ---------- 02 Sobre ---------- */}
          <section className="slide" {...slideProps(1)}>
            <div className="slide-inner">
              <p className="kicker">02 · {u.nav[1].label}</p>
              <h2 className="page-title">{u.aboutPage}</h2>
              <div className="split">
                <div className="prose">
                  <p className="lead">{t.aboutLead.map(([chunk]) => chunk).join("")}</p>
                  <p>{t.aboutBody}</p>
                  <p>{t.careerLead}</p>
                  <dl className="stats stats-inline">
                    {u.stats.map(([value, label]) => <div key={label}><dt>{value}</dt><dd>{label}</dd></div>)}
                  </dl>
                </div>
                <div>
                  <h3 className="sub">{u.howIWork}</h3>
                  <ol className="steps">
                    {t.steps.map((step, position) => (
                      <li key={step.title}><span>{String(position + 1).padStart(2, "0")}</span><div><strong>{step.title}</strong><p>{step.text}</p></div></li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- 03 Projetos ---------- */}
          <section className="slide" {...slideProps(2)}>
            <div className="slide-inner">
              <p className="kicker">03 · {u.nav[2].label}</p>
              <h2 className="page-title">{u.projectsPage}</h2>
              <p className="page-lead">{u.projectsLead}</p>
              <div className="project-grid">
                {caseStudies[language].map((item) => {
                  const card = projectCards[language].find((entry) => entry.id === item.id);
                  return (
                    <button key={item.id} type="button" className="project" onClick={() => setSelected(item.id)}>
                      <span className="project-media" aria-hidden="true">
                        {projectImages[item.id] ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={projectImages[item.id]} alt="" loading="lazy" />
                        ) : (
                          <span className="hub-mock">
                            <span className="hub-stats">{hubVisual[language].stats.map((label, position) => <span key={label}><b>{[128, 37, 94, 21][position]}</b>{label}</span>)}</span>
                            <span className="hub-lead"><b>{hubVisual[language].name}</b><em>{hubVisual[language].level}</em>{hubVisual[language].checks.map((check) => <i key={check}>✓ {check}</i>)}</span>
                          </span>
                        )}
                      </span>
                      <span className="project-top"><span>{item.number}</span><span>{item.owner}</span></span>
                      <strong>{item.title}</strong>
                      <span className="project-cat">{item.category}</span>
                      <span className="project-desc">{item.description}</span>
                      {card && <span className="project-points">{card.points.map((point) => <span key={point}>{point}</span>)}</span>}
                      <span className="project-foot"><span>{item.tags.slice(0, 3).join(" · ")}</span><span className="link">{u.openCase} <ArrowUpRight size={15} /></span></span>
                    </button>
                  );
                })}
              </div>
              <h3 className="sub">{u.alsoDelivered}</h3>
              <ul className="also">
                {deliveries[language].map((item) => (
                  <li key={item.id}>
                    <button type="button" onClick={() => setSelected(item.id)}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                      <em>{item.context}</em>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ---------- 04 Experiência ---------- */}
          <section className="slide" {...slideProps(3)}>
            <div className="slide-inner">
              <p className="kicker">04 · {u.nav[3].label}</p>
              <h2 className="page-title">{u.expPage}</h2>
              <ol className="jobs">
                {experience[language].map((job) => (
                  <li key={`${job.company}-${job.start}`}>
                    <span className="job-when">{job.start} — {job.current ? u.now : job.end}</span>
                    <div>
                      <strong>{job.company}{job.current && <em className="tag-now">{u.now}</em>}</strong>
                      <span className="job-role">{job.role}</span>
                    </div>
                    <p>{job.description}</p>
                  </li>
                ))}
              </ol>
              <h3 className="sub">{u.education}</h3>
              <ul className="edu">
                {t.degrees.map((degree) => <li key={degree.title}><strong>{degree.title}</strong><span>{degree.school}</span><em>{degree.period}</em></li>)}
              </ul>
            </div>
          </section>

          {/* ---------- 05 Tecnologias ---------- */}
          <section className="slide" {...slideProps(4)}>
            <div className="slide-inner">
              <p className="kicker">05 · {u.nav[4].label}</p>
              <h2 className="page-title">{u.techPage}</h2>
              <div className="tech-grid">
                {skills[language].map((group) => (
                  <div key={group.title} className="tech">
                    <h3>{group.title}</h3>
                    <ul>{group.items.split(" · ").map((item) => <li key={item}>{item}</li>)}</ul>
                  </div>
                ))}
              </div>
              <p className="also-use"><strong>{u.alsoUse}:</strong> {alsoWorkWith.join(" · ")}</p>
            </div>
          </section>

          {/* ---------- 06 Contato ---------- */}
          <section className="slide" {...slideProps(5)}>
            <div className="slide-inner">
              <p className="kicker">06 · {u.nav[5].label}</p>
              <h2 className="page-title">{u.contactPage}</h2>
              <div className="split">
                <div>
                  <p className="page-lead">{u.contactLead}</p>
                  <ul className="channels">
                    <li><button type="button" onClick={copyEmail}><Mail size={20} /><span><em>E-mail</em>{EMAIL}</span>{copied ? <Check size={18} /> : <Copy size={18} />}</button></li>
                    <li><a href={LINKS.whatsapp} target="_blank" rel="noreferrer noopener"><MessageCircle size={20} /><span><em>WhatsApp</em>+55 (19) 99922-3452</span><ArrowUpRight size={18} /></a></li>
                    <li><a href={LINKS.linkedin} target="_blank" rel="noreferrer noopener"><LinkedinIcon /><span><em>LinkedIn</em>igor-s-cardoso</span><ArrowUpRight size={18} /></a></li>
                    <li><a href={LINKS.github} target="_blank" rel="noreferrer noopener"><GithubIcon /><span><em>GitHub</em>@igorcardos0</span><ArrowUpRight size={18} /></a></li>
                  </ul>
                  <a className="btn btn-light resume" href="/igor-cardoso-curriculo.pdf" download><ArrowDownToLine size={17} /> {u.resume}</a>
                </div>
                <div className="form-card">
                  {sent ? (
                    <p className="sent"><Check size={20} /> {u.form.sent}</p>
                  ) : (
                    <form onSubmit={sendEmail}>
                      <label><span>{u.form.name}</span><input value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} required autoComplete="name" /></label>
                      <label><span>{u.form.email}</span><input type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required autoComplete="email" /></label>
                      <label><span>{u.form.message}</span><textarea rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} required maxLength={800} /></label>
                      <button className="btn btn-dark" type="submit" disabled={isSubmitting}>{isSubmitting ? u.form.sending : u.form.send} <ArrowRight size={17} /></button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {study && <CaseDrawer study={study} labels={u.caseLabels} closeLabel={u.close} onClose={() => setSelected(null)} />}
    </div>
  );
}
