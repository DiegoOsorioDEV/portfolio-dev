import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";

const { projects } = portfolioData;

function isPlaceholder(href: string) {
  return href === "#" || !href;
}

export default function Projects() {
  return (
    <Section id="proyectos">
      <SectionHeader
        eyebrow="proyectos"
        title="Trabajo destacado"
        description="Proyectos reales en SaaS multitenant, IA aplicada, cloud AWS y digitalización de trámites públicos."
      />

      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => {
          const hasDemo = !isPlaceholder(project.demo);
          const hasRepo = !isPlaceholder(project.repo);

          return (
            <li
              key={project.title}
              className={index === 0 ? "md:col-span-2" : undefined}
            >
              <article
                className={`group flex h-full flex-col rounded-2xl border border-border bg-bg2 p-6 transition-all hover:border-accent/25 hover:shadow-[0_20px_50px_-24px_rgba(123,97,255,0.35)] ${
                  index === 0 ? "md:p-8" : ""
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent2">
                      {project.company}
                    </p>
                    <h3
                      className={`mt-2 font-semibold text-text ${
                        index === 0 ? "text-xl sm:text-2xl" : "text-lg"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg3 font-mono text-xs text-muted transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.desc}
                </p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge>{tag}</Badge>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                  {hasDemo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent2"
                    >
                      <ExternalLink size={14} aria-hidden />
                      Demo
                      <ArrowUpRight size={12} className="opacity-70" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted/60">
                      <ExternalLink size={14} aria-hidden />
                      Demo privado
                    </span>
                  )}
                  {hasRepo ? (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-text transition-colors hover:text-accent2"
                    >
                      <FolderGit2 size={14} aria-hidden />
                      Repositorio
                      <ArrowUpRight size={12} className="opacity-70" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-sm text-muted/60">
                      <FolderGit2 size={14} aria-hidden />
                      Repo privado
                    </span>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
