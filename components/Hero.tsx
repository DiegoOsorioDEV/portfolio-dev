"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
import SocialLinks from "./ui/SocialLinks";
import StatItem from "./ui/StatItem";

const { profile, socials } = portfolioData;

const stats = [
  { value: profile.yearsExp, label: "Años exp." },
  { value: profile.projectsCount, label: "Proyectos" },
  { value: profile.commitsCount, label: "Commits" },
];

const HERO_NAME = "Diego Osorio";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="container-px relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-32 pb-16 sm:pt-36"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px)
          `,
          backgroundSize: "clamp(48px, 5vw, 80px) clamp(48px, 5vw, 80px)",
          maskImage:
            "radial-gradient(ellipse 75% 65% at 35% 45%, black 0%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 75% 65% at 35% 45%, black 0%, transparent 75%)",
        }}
      />

      {/* Glow orbs */}
      <div className="pointer-events-none absolute -top-1/4 -left-[10%] h-[55vmax] w-[55vmax] rounded-full bg-accent/20 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-1/4 right-[5%] h-[45vmax] w-[45vmax] rounded-full bg-accent2/12 blur-[120px]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-5xl"
      >
        {/* Status row */}
        <motion.div
          variants={itemVariants}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <Badge tone="accent2" pulse>
            Disponible
          </Badge>
          <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />
          <span className="hidden items-center gap-1.5 font-mono text-[11px] text-muted sm:inline-flex">
            <MapPin size={11} className="text-muted" aria-hidden />
            Toluca, México
          </span>
          <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />
          <span className="hidden font-mono text-[11px] text-muted sm:inline">
            <span className="text-accent2">$</span> currently @ Databits
          </span>
        </motion.div>

        {/* Intro line */}
        <motion.p
          variants={itemVariants}
          className="hero-eyebrow mb-4 font-mono text-muted"
        >
          <span className="text-accent2">{"// "}</span>
          Hola, soy
        </motion.p>

        {/* Name — clean, no broken decorations */}
        <motion.h1
          variants={itemVariants}
          className="hero-name text-balance mb-6 text-text"
        >
          {HERO_NAME}
        </motion.h1>

        {/* Role / pitch */}
        <motion.h2
          variants={itemVariants}
          className="hero-title text-balance mb-8 max-w-3xl text-muted"
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

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="hero-desc text-pretty mb-10 max-w-2xl text-muted"
        >
          {profile.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap items-center gap-3"
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

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-6 border-t border-[var(--border)] pt-8 sm:max-w-2xl sm:gap-10 lg:gap-12"
        >
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
