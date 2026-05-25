"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon, LinkedinIcon } from "./Icons";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

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
  accent: "bg-accent/10 text-accent",
  accent2: "bg-accent2/10 text-accent2",
  text: "bg-bg2 text-text",
};

function ChannelCard({ channel }: { channel: Channel }) {
  const { Icon, label, value, href, accent, external } = channel;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-[var(--border)] bg-bg3 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 sm:p-5"
    >
      <div
        className={`shrink-0 rounded-lg p-2.5 transition-transform group-hover:scale-110 sm:p-3 ${accentClasses[accent]}`}
      >
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:text-[11px]">
          {label}
        </p>
        <p className="truncate text-sm font-semibold text-text">{value}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <Section id="contacto" variant="alt">
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-[50vmin] w-[80vmin] -translate-x-1/2 rounded-full bg-accent/15 blur-[140px]" />

      <div className="relative mx-auto max-w-3xl">
        <SectionHeader
          eyebrow="Contacto"
          eyebrowIcon={Send}
          align="center"
          title={
            <>
              ¿Trabajamos <span className="gradient-text">juntos</span>?
            </>
          }
          subtitle="Disponible para oportunidades en desarrollo Full Stack, DevOps y arquitecturas Cloud. Escríbeme por el canal que prefieras."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <ChannelCard key={channel.label} channel={channel} />
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-3 sm:mt-12 sm:gap-4">
            <Button
              href={`mailto:${socials.email}?subject=Contacto desde portafolio - ${profile.name}`}
              variant="primary"
              className="!bg-gradient-to-r !from-accent !to-accent2 !text-bg hover:!from-accent hover:!to-accent"
            >
              <Send size={16} />
              Enviar mensaje
            </Button>
            <p className="font-mono text-[11px] text-muted sm:text-xs">
              Tiempo de respuesta promedio:{" "}
              <span className="text-accent2">&lt; 24h</span>
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
