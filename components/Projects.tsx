"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderGit2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { GithubIcon } from "./Icons";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

function isValidLink(href: string | undefined) {
  return Boolean(href && href !== "#" && href.trim().length > 0);
}

export default function Projects() {
  return (
    <Section id="proyectos" variant="alt">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, rgba(123,97,255,0.08), transparent 60%)",
        }}
      />

      <SectionHeader
        eyebrow="Portafolio"
        eyebrowIcon={FolderGit2}
        title={
          <>
            Proyectos <span className="gradient-text">destacados</span>
          </>
        }
        subtitle="Una selección de productos en producción donde he liderado arquitectura, desarrollo y despliegue."
        meta={
          <>{portfolioData.projects.length} casos · ámbito profesional</>
        }
      />

      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {portfolioData.projects.map((project, i) => {
          const demoOk = isValidLink(project.demo);
          const repoOk = isValidLink(project.repo);
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.08, 0.3) }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-bg3 p-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(123,97,255,0.4)] sm:p-6"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

              <header className="mb-4 flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <p className="mb-3 inline-block rounded-full border border-accent2/20 bg-accent2/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent2">
                    {project.company}
                  </p>
                  <h3 className="text-base font-bold leading-tight text-text transition-colors group-hover:text-accent sm:text-lg lg:text-xl">
                    {project.title}
                  </h3>
                </div>
                <div className="flex shrink-0 gap-2">
                  <a
                    href={repoOk ? project.repo : undefined}
                    target={repoOk ? "_blank" : undefined}
                    rel={repoOk ? "noopener noreferrer" : undefined}
                    aria-label="Repositorio"
                    aria-disabled={!repoOk}
                    tabIndex={repoOk ? 0 : -1}
                    onClick={(e) => {
                      if (!repoOk) e.preventDefault();
                    }}
                    className={`rounded-lg border border-[var(--border)] p-2 transition-all ${
                      repoOk
                        ? "text-muted hover:-translate-y-0.5 hover:border-text/40 hover:text-text"
                        : "cursor-not-allowed text-muted/30"
                    }`}
                  >
                    <GithubIcon size={14} />
                  </a>
                  <a
                    href={demoOk ? project.demo : undefined}
                    target={demoOk ? "_blank" : undefined}
                    rel={demoOk ? "noopener noreferrer" : undefined}
                    aria-label="Demo"
                    aria-disabled={!demoOk}
                    tabIndex={demoOk ? 0 : -1}
                    onClick={(e) => {
                      if (!demoOk) e.preventDefault();
                    }}
                    className={`rounded-lg border p-2 transition-all ${
                      demoOk
                        ? "border-accent/40 bg-accent/10 text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-bg"
                        : "cursor-not-allowed border-[var(--border)] text-muted/30"
                    }`}
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </header>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-muted">
                {project.desc}
              </p>

              <footer className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--border)] bg-bg2 px-2.5 py-1 font-mono text-[10px] text-muted transition-colors group-hover:border-accent/20 group-hover:text-text"
                  >
                    {tag}
                  </span>
                ))}
              </footer>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
