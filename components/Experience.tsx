import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const { experience, education } = portfolioData;

export default function Experience() {
  return (
    <Section id="experiencia" variant="muted">
      <SectionHeader
        eyebrow="experiencia"
        title="Trayectoria profesional"
        description="Experiencia en SaaS, DevOps, cloud y desarrollo full stack en entornos empresariales y académicos."
      />

      <ol className="relative space-y-0">
        {experience.map((job, index) => (
          <li key={`${job.company}-${job.period}`} className="relative pl-8 sm:pl-10">
            {index < experience.length - 1 ? (
              <span
                className="absolute left-[11px] top-8 bottom-0 w-px bg-border sm:left-[15px]"
                aria-hidden
              />
            ) : null}
            <span
              className="absolute left-0 top-1.5 flex h-6 w-6 items-center justify-center rounded-full border border-accent/40 bg-bg2 sm:left-1 sm:h-7 sm:w-7"
              aria-hidden
            >
              <span className="h-2 w-2 rounded-full bg-accent2" />
            </span>

            <article className="pb-10 last:pb-0">
              <time className="font-mono text-xs uppercase tracking-[0.15em] text-accent2">
                {job.period}
              </time>
              <h3 className="mt-2 text-lg font-semibold text-text">{job.role}</h3>
              <p className="mt-1 flex items-center gap-2 text-sm font-medium text-muted">
                <Briefcase size={14} className="shrink-0 text-accent" aria-hidden />
                {job.company}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
                {job.desc}
              </p>
            </article>
          </li>
        ))}
      </ol>

      <div className="mt-12 rounded-2xl border border-border bg-bg2 p-6 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-bg3 text-accent2">
            <GraduationCap size={22} aria-hidden />
          </span>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              Formación académica
            </p>
            <h3 className="mt-2 text-lg font-semibold text-text">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-accent2">
              <span>{education.period}</span>
              <span className="hidden text-border sm:inline" aria-hidden>
                ·
              </span>
              <span className="rounded-full border border-accent2/30 bg-accent2/10 px-2.5 py-0.5 text-accent2">
                {education.status}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
