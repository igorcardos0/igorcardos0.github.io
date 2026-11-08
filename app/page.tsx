"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import { ArrowUpRight, Cloud, MousePointer2, Orbit, X } from "lucide-react";
import { atlasCaseStudy, caseStudies, deliveries, deliveryStudies, experience, skills } from "./content";
import { alsoWorkWith, text } from "./copy";
import { ui } from "./ui";

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

const links = [
  ["Email", "mailto:dev.igordesouzacardoso@gmail.com"],
  ["WhatsApp", "https://wa.me/5519999223452"],
  ["LinkedIn", "https://www.linkedin.com/in/igor-s-cardoso"],
  ["GitHub", "https://github.com/igorcardos0"],
] as const;

const rev = process.env.NEXT_PUBLIC_REV || "local";

function Dots({ items }: { items: readonly React.ReactNode[] }) {
  return (
    <ul className="dots">
      {items.map((item, index) => (
        <li key={index}>{item}{index < items.length - 1 && <span className="faint" aria-hidden="true"> · </span>}</li>
      ))}
    </ul>
  );
}

function Mark() {
  return (
    <svg className="mark" viewBox="0 0 32 32" aria-hidden="true">
      <path d="M5 11 16 3l11 8-11 18Z" />
      <path d="M5 11h22M11 11l5 18 5-18M11 11l5-8 5 8" />
    </svg>
  );
}

function Signature() {
  return (
    <span className="sig" aria-hidden="true">
      <span>Igor</span>
      <svg viewBox="0 0 120 30"><path d="M4 22c22 6 58 7 112-12" /></svg>
    </span>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<"pt" | "en">("pt");
  const [selected, setSelected] = useState<string | null>(null);
  const [clock, setClock] = useState("");
  const [viewport, setViewport] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const isEn = language === "en";
  const u = ui[language];
  const t = text[language];

  const study = useMemo(() => {
    if (!selected) return null;
    if (selected === "atlas") return atlasCaseStudy[language];
    return [...caseStudies[language], ...deliveryStudies[language]].find((item) => item.id === selected) ?? null;
  }, [selected, language]);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("pt-BR", { timeZone: "America/Sao_Paulo", hour: "2-digit", minute: "2-digit" });
    const tick = () => setClock(format.format(new Date()));
    const resize = () => setViewport(`${window.innerWidth}×${window.innerHeight}`);
    tick();
    resize();
    const timer = window.setInterval(tick, 15000);
    window.addEventListener("resize", resize);
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  function toggleLanguage() {
    const next = isEn ? "pt" : "en";
    setLanguage(next);
    document.documentElement.lang = next === "en" ? "en" : "pt-BR";
  }

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
      setSent(true);
    } catch (error: unknown) {
      const errorMessage = error && typeof error === "object" && "text" in error ? String(error.text) : undefined;
      window.alert(errorMessage || (isEn ? "An error occurred while sending the message." : "Ocorreu um erro ao enviar a mensagem."));
    } finally {
      setIsSubmitting(false);
    }
  }

  function renderLead() {
    return u.lead.map(([chunk, target]) => {
      if (!target) return <span key={chunk}>{chunk}</span>;
      if (target.startsWith("case:")) {
        const id = target.slice(5);
        return <button key={chunk} type="button" className="prose-link" onClick={() => setSelected(id)}>{chunk}</button>;
      }
      const external = target.startsWith("http");
      return <a key={chunk} className="prose-link" href={target} target={external ? "_blank" : undefined} rel={external ? "noreferrer noopener" : undefined}>{chunk}</a>;
    });
  }

  return (
    <>
      <a className="corner" href="#topo" aria-label={u.top}><Mark /></a>
      <div className="grid-bg" aria-hidden="true" />

      <main id="topo">
        <header className="intro">
          <h1>Igor de Souza<br />Cardoso</h1>
          <p className="meta">{u.meta[0]}<br />{u.meta[1]}</p>
        </header>

        <p className="lead">{renderLead()}</p>

        <div className="nav-row">
          <nav aria-label={isEn ? "Sections" : "Seções"}>
            <Dots
              items={[
                ...u.nav.map(([label, href]) => <a key={href} className="ui-link" href={href}>{label}</a>),
                <button key="lang" type="button" className="ui-link" onClick={toggleLanguage} aria-label={isEn ? "Mudar para português" : "Switch to English"}>{u.lang}</button>,
              ]}
            />
          </nav>
          <Signature />
        </div>

        <div className="meta muted stats"><Dots items={u.stats} /></div>

        <section id="projetos" aria-labelledby="projetos-title">
          <h2 id="projetos-title" className="label">{u.featured}</h2>
          <ul className="list">
            {caseStudies[language].map((item) => (
              <li key={item.id}>
                <button type="button" className="row" onClick={() => setSelected(item.id)} aria-label={`${u.openCase}: ${item.title}`}>
                  <MousePointer2 className="cursor" size={15} strokeWidth={1.6} aria-hidden="true" />
                  <span className="row-title">{item.title}</span>
                  <span className="row-note">{item.category}</span>
                  <span className="row-desc">{item.description}</span>
                </button>
              </li>
            ))}
          </ul>

          <h3 className="label sub">{u.alsoDelivered}</h3>
          <ul className="list">
            {deliveries[language].map((item) => (
              <li key={item.id}>
                <button type="button" className="row" onClick={() => setSelected(item.id)} aria-label={`${u.openCase}: ${item.title}`}>
                  <MousePointer2 className="cursor" size={15} strokeWidth={1.6} aria-hidden="true" />
                  <span className="row-title">{item.title}</span>
                  <span className="row-note">{item.context}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="sobre" aria-labelledby="sobre-title">
          <h2 id="sobre-title" className="label">{u.about}</h2>
          <p>{t.aboutLead.map(([chunk]) => chunk).join("")}</p>
          <p>{t.aboutBody}</p>
          <dl className="pairs">
            {t.values.map((value) => (
              <div key={value.title}><dt>{value.title}</dt><dd>{value.text}</dd></div>
            ))}
          </dl>
        </section>

        <section id="carreira" aria-labelledby="carreira-title">
          <h2 id="carreira-title" className="label">{u.career}</h2>
          <ol className="timeline">
            {experience[language].map((job) => (
              <li key={`${job.company}-${job.start}`}>
                <span className="when">{job.start} — {job.current ? u.present : job.end}</span>
                <div>
                  <p className="what">{job.role} <span className="muted">· {job.company}</span></p>
                  <p className="desc">{job.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="stack-title">
          <h2 id="stack-title" className="label">{u.stack}</h2>
          <dl className="pairs">
            {skills[language].map((skill) => (
              <div key={skill.title}><dt>{skill.title}</dt><dd>{skill.items}</dd></div>
            ))}
            <div><dt>{u.alsoUse}</dt><dd>{alsoWorkWith.join(" · ")}</dd></div>
          </dl>
        </section>

        <section aria-labelledby="processo-title">
          <h2 id="processo-title" className="label">{u.process}</h2>
          <ol className="timeline">
            {t.steps.map((step, index) => (
              <li key={step.title}>
                <span className="when">0{index + 1}</span>
                <div><p className="what">{step.title}</p><p className="desc">{step.text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="formacao-title">
          <h2 id="formacao-title" className="label">{u.education}</h2>
          <ol className="timeline">
            {t.degrees.map((degree) => (
              <li key={degree.title}>
                <span className="when">{degree.period}</span>
                <div><p className="what">{degree.title}</p><p className="desc">{degree.school}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contato" aria-labelledby="contato-title">
          <h2 id="contato-title" className="label">{u.contact}</h2>
          <p>{t.contactLead}</p>
          <p className="meta muted avail">{u.available}: {t.availability.map((item) => item.title).join(" · ")}</p>
          {sent ? (
            <p className="sent">{isEn ? "Message sent. I'll get back to you soon." : "Mensagem enviada. Respondo em breve."}</p>
          ) : (
            <form className="form" onSubmit={sendEmail}>
              <label><span className="sr-only">{u.namePh}</span><input name="name" placeholder={u.namePh} value={formData.name} onChange={handleFormChange} required autoComplete="name" /></label>
              <label><span className="sr-only">{u.emailPh}</span><input name="email" type="email" placeholder={u.emailPh} value={formData.email} onChange={handleFormChange} required autoComplete="email" /></label>
              <label className="full"><span className="sr-only">{u.companyPh}</span><input name="company" placeholder={u.companyPh} value={formData.company} onChange={handleFormChange} autoComplete="organization" /></label>
              <label className="full"><span className="sr-only">{u.messagePh}</span><textarea name="message" placeholder={u.messagePh} value={formData.message} onChange={handleFormChange} rows={4} required maxLength={500} /></label>
              <button className="submit ui-link" type="submit" disabled={isSubmitting}>{isSubmitting ? u.sending : u.send} <ArrowUpRight size={13} /></button>
            </form>
          )}
          <p className="meta muted note">{u.formNote}</p>
          <Dots items={links.map(([label, href]) => <a key={label} className="ui-link" href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer noopener">{label}</a>)} />
        </section>

        <footer>
          <ul className="status">
            <li><Orbit size={13} aria-hidden="true" /> {u.status}</li>
            <li><Cloud size={13} aria-hidden="true" /> {u.location}{clock && ` · ${clock}`}</li>
          </ul>
          <p className="meta faint">© 2026 Igor Cardoso · {u.rev} {rev} · {u.viewport} {viewport || "—"} · {u.footer}</p>
        </footer>
      </main>

      {study && (
        <div className="backdrop" role="presentation" onClick={() => setSelected(null)}>
          <article className="sheet" role="dialog" aria-modal="true" aria-labelledby="case-title" onClick={(event) => event.stopPropagation()}>
            <button className="close ui-link" type="button" onClick={() => setSelected(null)} aria-label={u.close}><X size={16} /></button>
            <p className="meta muted">{study.modalCategory}</p>
            <h2 id="case-title">{study.modalTitle}</h2>
            <p>{study.summary}</p>

            {study.media && (
              <figure>
                {study.media.kind === "video" ? (
                  <video autoPlay muted loop playsInline preload="metadata" poster={study.media.poster} aria-label={study.media.alt}>
                    <source src={study.media.src} type="video/webm" />
                    {study.media.fallback && <source src={study.media.fallback} type="video/mp4" />}
                  </video>
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={study.media.src} alt={study.media.alt} loading="lazy" decoding="async" />
                )}
                <figcaption className="meta muted">{study.media.caption}</figcaption>
              </figure>
            )}

            {study.challenge.length > 0 && (
              <>
                <h3 className="label">{isEn ? "The problem" : "O problema"}</h3>
                <ul className="bullets">{study.challenge.map((item) => <li key={item}>{item}</li>)}</ul>
              </>
            )}
            {study.solution && (
              <>
                <h3 className="label">{isEn ? "What I built" : "O que construí"}</h3>
                <p>{study.solution}</p>
              </>
            )}
            {study.stack.length > 0 && (
              <>
                <h3 className="label">Stack</h3>
                <dl className="pairs">{study.stack.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              </>
            )}
            {study.modules.length > 0 && (
              <>
                <h3 className="label">{isEn ? "Key modules" : "Principais módulos"}</h3>
                <dl className="pairs">{study.modules.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
              </>
            )}
            {study.links && (
              <>
                <h3 className="label">{isEn ? "Live sites" : "Sites no ar"}</h3>
                <Dots items={study.links.map((link) => <a key={link.href} className="ui-link" href={link.href} target="_blank" rel="noreferrer noopener">{link.label}</a>)} />
              </>
            )}
            {study.role.length > 0 && (
              <>
                <h3 className="label">{isEn ? "My role" : "Meu papel"}</h3>
                <ul className="bullets">{study.role.map((item) => <li key={item}>{item}</li>)}</ul>
              </>
            )}
            {study.impact.length > 0 && (
              <>
                <h3 className="label">{isEn ? "Result" : "Resultado"}</h3>
                <ul className="bullets">{study.impact.map((item) => <li key={item}>{item}</li>)}</ul>
              </>
            )}
            <button className="ui-link back" type="button" onClick={() => setSelected(null)}>← {u.back}</button>
          </article>
        </div>
      )}
    </>
  );
}
