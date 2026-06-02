import Image from "next/image";
import { ArrowRight, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { portfolioData } from "@/data/portfolio";

const { profile, socials, location } = portfolioData;

const stats = [
  { value: profile.yearsExp, label: "Años de exp." },
  { value: profile.projectsCount, label: "Proyectos" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="container-x flex min-h-[calc(100svh-var(--nav-height))] flex-col justify-center pb-12 pt-[calc(var(--nav-height)+1.5rem)] sm:pb-16 sm:pt-[calc(var(--nav-height)+2rem)] lg:pb-20"
    >
      {/* Primera vista: foto + identidad + resumen */}
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
        <div className="relative shrink-0">
          <div
            className="pointer-events-none absolute -inset-3 rounded-3xl opacity-50 blur-2xl sm:-inset-4"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)",
            }}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-bg2 p-1.5 shadow-[0_24px_60px_-20px_rgba(123,97,255,0.35)]">
            <div className="relative aspect-[4/5] w-44 overflow-hidden rounded-xl sm:w-52 md:w-48 lg:w-56 xl:w-64">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 208px, (max-width: 1280px) 224px, 256px"
                className="object-cover object-top"
              />
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 max-w-[calc(100%+1rem)] -translate-x-1/2 truncate rounded-full border border-border bg-bg2/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted backdrop-blur-md sm:text-[11px] sm:tracking-[0.15em]">
            {profile.tagline}
          </div>
        </div>

        <div className="min-w-0 flex-1 text-center md:text-left">
          <p className="mb-3 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent2 sm:text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-accent2" />
            </span>
            Disponible para colaborar
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted sm:text-xs">
            <span className="text-accent2">{"// "}</span>
            Hola, soy
          </p>

          <h1 className="text-balance mt-1 text-3xl font-bold tracking-tight text-text sm:text-4xl lg:text-5xl">
            {profile.shortName}
          </h1>

          <p className="mt-2 text-base font-medium text-muted sm:text-lg">
            {profile.title}
          </p>

          <p className="text-pretty mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base md:mx-0">
            {profile.bio}
          </p>

          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
            <p className="flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} className="shrink-0 text-accent2" aria-hidden />
              {location}
            </p>
            <span className="hidden h-4 w-px bg-border sm:block" aria-hidden />
            <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-bg2 px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:text-text"
              >
                <GithubIcon
                  size={15}
                  className="shrink-0 transition-colors group-hover:text-accent2"
                />
                GitHub
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                  aria-hidden
                />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-bg2 px-3.5 py-1.5 text-sm font-medium text-muted transition-colors hover:border-accent2/50 hover:text-accent2"
              >
                <LinkedinIcon
                  size={15}
                  className="shrink-0 transition-colors group-hover:text-accent2"
                />
                LinkedIn
                <ArrowUpRight
                  size={11}
                  className="opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-70"
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Acciones y métricas — debajo del pliegue visual en móvil, mismo bloque en desktop */}
      <div className="mt-8 border-t border-border pt-8 lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-semibold text-bg transition-all hover:bg-accent hover:shadow-[0_0_30px_rgba(123,97,255,0.4)] sm:px-6 sm:py-3"
          >
            Contáctame
            <ArrowRight size={16} />
          </a>
          <a
            href={`mailto:${socials.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg2 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-accent2/50 hover:text-accent2 sm:px-6 sm:py-3"
          >
            <Mail size={16} />
            Email
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-bg2 px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/50 hover:text-text sm:px-6 sm:py-3"
          >
            CV
          </a>
        </div>

        <div className="mt-8 grid max-w-xs grid-cols-2 gap-6 mx-auto md:mx-0 md:max-w-sm">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-mono text-2xl font-bold text-text sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
