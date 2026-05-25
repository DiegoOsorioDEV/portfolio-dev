"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import SocialLinks from "./ui/SocialLinks";
import StatItem from "./ui/StatItem";
import CodeBlock from "./ui/CodeBlock";

const { profile, socials } = portfolioData;

const stats = [
  { value: profile.yearsExp, label: "Años exp." },
  { value: profile.projectsCount, label: "Proyectos" },
  { value: profile.commitsCount, label: "Commits" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16 sm:pt-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 35% 45%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 35% 45%, black 0%, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -top-1/4 -left-[10%] h-[55vmax] w-[55vmax] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-1/4 right-[5%] h-[45vmax] w-[45vmax] rounded-full bg-accent2/12 blur-[120px]" />

      <div className="container-x relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-14"
        >
          {/* LEFT — Content */}
          <div>
            <motion.div
              variants={item}
              className="mb-6 flex flex-wrap items-center gap-3"
            >
              <Badge tone="accent2" pulse>
                Disponible
              </Badge>
              <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />
              <span className="hidden items-center gap-1.5 font-mono text-xs text-muted sm:inline-flex">
                <MapPin size={12} aria-hidden />
                Toluca, México
              </span>
              <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />
              <span className="hidden font-mono text-xs text-muted sm:inline">
                <span className="text-accent2">$</span> @ Databits
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-muted sm:text-sm"
            >
              <span className="text-accent2">{"// "}</span>
              Hola, soy
            </motion.p>

            <motion.h1
              variants={item}
              className="text-balance mb-4 text-5xl font-extrabold leading-[0.95] tracking-tight text-text sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl"
            >
              Diego Osorio
            </motion.h1>

            <motion.h2
              variants={item}
              className="text-balance mb-6 max-w-2xl text-lg font-medium leading-snug text-muted sm:text-xl lg:text-2xl"
            >
              Construyo{" "}
              <span className="font-semibold text-text">
                arquitecturas cloud
              </span>{" "}
              escalables y{" "}
              <span className="gradient-text font-semibold">
                aplicaciones full-stack
              </span>{" "}
              con visión DevOps.
            </motion.h2>

            <motion.p
              variants={item}
              className="text-pretty mb-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mb-10 flex flex-wrap items-center gap-3"
            >
              <Button href="#proyectos" variant="primary">
                Ver mi trabajo
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Button>
              <Button href={`mailto:${socials.email}`} variant="secondary">
                <Mail size={16} />
                Hablemos
              </Button>
              <Button
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
              >
                <Download size={16} />
                CV
              </Button>
              <span className="ml-1 hidden h-8 w-px bg-[var(--border)] sm:block" />
              <SocialLinks size="md" />
            </motion.div>

            <motion.div
              variants={item}
              className="grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-6 sm:max-w-md sm:gap-10 sm:pt-8"
            >
              {stats.map((stat) => (
                <StatItem key={stat.label} {...stat} />
              ))}
            </motion.div>
          </div>

          {/* RIGHT — Code block (desktop only) */}
          <div className="relative hidden items-center justify-center lg:flex">
            <CodeBlock />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
