"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Languages,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const { socials, location, languages } = portfolioData;

const contactMethods = [
  {
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    Icon: Mail,
  },
  {
    label: "Teléfono",
    value: socials.phone,
    href: `tel:${socials.phone.replace(/\s/g, "")}`,
    Icon: Phone,
  },
  {
    label: "Ubicación",
    value: location,
    href: undefined,
    Icon: MapPin,
  },
];

const socialLinks = [
  { label: "GitHub", href: socials.github, Icon: GithubIcon },
  { label: "LinkedIn", href: socials.linkedin, Icon: LinkedinIcon },
];

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(
      `Contacto portafolio${name ? ` — ${name}` : ""}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${socials.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <Section id="contacto">
      <SectionHeader
        eyebrow="contacto"
        title="Hablemos de tu próximo proyecto"
        description="¿Tienes una oportunidad, un proyecto o una colaboración? Escríbeme y te respondo lo antes posible."
        align="center"
      />

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="space-y-6 lg:col-span-2">
          <ul className="space-y-3">
            {contactMethods.map(({ label, value, href, Icon }) => (
              <li key={label}>
                {href ? (
                  <a
                    href={href}
                    className="group flex items-start gap-4 rounded-xl border border-border bg-bg2 p-4 transition-colors hover:border-accent2/30 hover:bg-bg3"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg3 text-accent2 transition-colors group-hover:border-accent2/40">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-text">
                        {value}
                      </span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-start gap-4 rounded-xl border border-border bg-bg2 p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg3 text-accent2">
                      <Icon size={18} aria-hidden />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                        {label}
                      </span>
                      <span className="mt-1 block text-sm font-medium text-text">
                        {value}
                      </span>
                    </span>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="rounded-xl border border-border bg-bg2 p-4">
            <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              <Languages size={14} className="text-accent" aria-hidden />
              Idiomas
            </p>
            <ul className="mt-3 space-y-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-text">{lang.name}</span>
                  <span className="font-mono text-xs text-accent2">
                    {lang.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg2 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-text"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border bg-bg2 p-6 sm:p-8 lg:col-span-3"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block sm:col-span-1">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Nombre
              </span>
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-bg3 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                placeholder="Tu nombre"
              />
            </label>
            <label className="block sm:col-span-1">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Email
              </span>
              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-bg3 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                placeholder="tu@email.com"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Mensaje
              </span>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-border bg-bg3 px-4 py-3 text-sm text-text outline-none transition-colors placeholder:text-muted/50 focus:border-accent/50 focus:ring-1 focus:ring-accent/30"
                placeholder="Cuéntame sobre el proyecto, rol o colaboración..."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-text px-6 py-3 text-sm font-semibold text-bg transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(123,97,255,0.4)]"
            >
              Enviar mensaje
              <Send size={16} aria-hidden />
            </button>
            {status === "sent" ? (
              <p className="text-sm text-accent2" role="status">
                Se abrió tu cliente de correo. Si no aparece, escríbeme
                directamente.
              </p>
            ) : (
              <p className="text-xs text-muted">
                Al enviar se abrirá tu app de correo con el mensaje preparado.
              </p>
            )}
          </div>

          <a
            href={`mailto:${socials.email}`}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-accent2"
          >
            O escribe directo a {socials.email}
            <ArrowRight size={14} aria-hidden />
          </a>
        </form>
      </div>
    </Section>
  );
}
