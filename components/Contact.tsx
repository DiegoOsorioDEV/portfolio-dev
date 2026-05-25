"use client";

import { motion } from "framer-motion";
import {
  Calendar,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";
import type { ComponentType } from "react";
import { useState } from "react";
import type { LucideProps } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Section from "./ui/Section";
import Badge from "./ui/Badge";

const { socials, profile } = portfolioData;

type ChannelAccent = "accent" | "accent2" | "text";

interface Channel {
  Icon: ComponentType<LucideProps>;
  label: string;
  value: string;
  href: string;
  accent: ChannelAccent;
  external?: boolean;
}

const channels: Channel[] = [
  {
    Icon: Mail,
    label: "Email",
    value: socials.email,
    href: `mailto:${socials.email}`,
    accent: "accent",
  },
  {
    Icon: Phone,
    label: "Teléfono",
    value: socials.phone,
    href: `tel:${socials.phone.replace(/\s/g, "")}`,
    accent: "accent2",
  },
  {
    Icon: GithubIcon,
    label: "GitHub",
    value: "Perfil profesional",
    href: socials.github,
    accent: "text",
    external: true,
  },
  {
    Icon: LinkedinIcon,
    label: "LinkedIn",
    value: "Red profesional",
    href: socials.linkedin,
    accent: "text",
    external: true,
  },
];

const accentClasses: Record<ChannelAccent, string> = {
  accent: "bg-accent/10 text-accent border-accent/20",
  accent2: "bg-accent2/10 text-accent2 border-accent2/20",
  text: "bg-bg2 text-text border-[var(--border)]",
};

function ChannelCard({ channel }: { channel: Channel }) {
  const { Icon, label, value, href, accent, external } = channel;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group relative flex items-center gap-4 overflow-hidden rounded-xl border border-[var(--border)] bg-bg2 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-bg3"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div
        className={`shrink-0 rounded-lg border p-2.5 transition-transform group-hover:scale-110 ${accentClasses[accent]}`}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-text">{value}</p>
      </div>
      <span className="font-mono text-xs text-muted opacity-0 transition-opacity group-hover:opacity-100">
        →
      </span>
    </a>
  );
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-bg2 px-4 py-2 font-mono text-xs text-muted transition-all hover:border-accent/40 hover:text-text"
    >
      <Copy size={12} />
      {copied ? "¡Copiado!" : "Copiar email"}
    </button>
  );
}

export default function Contact() {
  return (
    <Section id="contacto" variant="alt">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[50vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />
      <div className="pointer-events-none absolute top-0 right-0 h-[30vmin] w-[30vmin] rounded-full bg-accent2/10 blur-[100px]" />

      <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
        {/* LEFT — Pitch & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Badge tone="accent2" icon={Send}>
            Contacto
          </Badge>

          <h2 className="text-balance mt-4 text-4xl font-bold leading-[1.05] tracking-tight text-text sm:text-5xl lg:text-6xl">
            ¿Trabajamos{" "}
            <span className="gradient-text">juntos</span>?
          </h2>

          <p className="text-pretty mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Disponible para oportunidades en desarrollo Full Stack, DevOps y
            arquitecturas Cloud. Si tienes un proyecto interesante o quieres
            colaborar, escríbeme.
          </p>

          {/* Meta info */}
          <ul className="mt-7 flex flex-col gap-2.5">
            <li className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent2/20 bg-accent2/10 text-accent2">
                <MapPin size={14} />
              </span>
              <span className="text-text">Toluca, México</span>
              <span className="text-muted">·</span>
              <span className="font-mono text-xs text-muted">UTC−6</span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
                <Calendar size={14} />
              </span>
              <span className="text-text">Lun – Vie</span>
              <span className="text-muted">·</span>
              <span className="font-mono text-xs text-muted">
                9:00 – 19:00 hrs
              </span>
            </li>
            <li className="flex items-center gap-3 text-sm">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-accent2/20 bg-accent2/10 text-accent2">
                <Sparkles size={14} />
              </span>
              <span className="text-text">Respuesta promedio</span>
              <span className="text-muted">·</span>
              <span className="font-mono text-xs text-accent2">&lt; 24h</span>
            </li>
          </ul>

          {/* Primary CTA */}
          <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <a
              href={`mailto:${socials.email}?subject=Contacto desde portafolio - ${profile.name}`}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 font-mono text-sm font-semibold text-bg transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(123,97,255,0.5)] sm:w-auto"
            >
              <Send size={16} />
              Enviar mensaje
              <span className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <CopyEmailButton />
          </div>
        </motion.div>

        {/* RIGHT — Channels */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-[var(--border)] bg-bg3/60 p-5 backdrop-blur sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent2">
                · Canales directos
              </p>
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
                  <span className="relative inline-flex h-full w-full rounded-full bg-accent2" />
                </span>
                online
              </span>
            </div>

            <div className="grid gap-3">
              {channels.map((channel) => (
                <ChannelCard key={channel.label} channel={channel} />
              ))}
            </div>

            <p className="mt-5 border-t border-[var(--border)] pt-4 text-center font-mono text-xs text-muted">
              Prefiero que escribas claro y al grano.{" "}
              <span className="text-accent2">No formalidades.</span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
