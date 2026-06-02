import { Brain, Cloud, Code2, Shield, type LucideIcon } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

const { stack } = portfolioData;

const categoryMeta: Record<
  string,
  { icon: LucideIcon; accent: string; glow: string }
> = {
  "Lenguajes y Frameworks": {
    icon: Code2,
    accent: "text-accent",
    glow: "from-accent/25 via-accent/5 to-transparent",
  },
  "Cloud & DevOps": {
    icon: Cloud,
    accent: "text-accent2",
    glow: "from-accent2/25 via-accent2/5 to-transparent",
  },
  "Herramientas e IA": {
    icon: Brain,
    accent: "text-[#10A37F]",
    glow: "from-[#10A37F]/25 via-[#10A37F]/5 to-transparent",
  },
  "Seguridad y Redes": {
    icon: Shield,
    accent: "text-[#FF5722]",
    glow: "from-[#FF5722]/20 via-[#FF5722]/5 to-transparent",
  },
};

function groupByCategory(items: typeof stack) {
  return items.reduce<Record<string, typeof stack>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});
}

const grouped = groupByCategory(stack);

function TechChip({
  name,
  color,
}: {
  name: string;
  color: string;
}) {
  return (
    <li>
      <span className="group/chip relative inline-flex max-w-full items-center gap-2.5 overflow-hidden rounded-xl border border-border bg-bg3/90 px-3.5 py-2.5 text-sm font-medium text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-bg3 hover:shadow-[0_8px_28px_-12px_rgba(123,97,255,0.45)]">
        <span
          className="relative flex h-2 w-2 shrink-0 rounded-full"
          aria-hidden
        >
          <span
            className="absolute inset-0 rounded-full opacity-40 blur-[3px]"
            style={{ backgroundColor: color }}
          />
          <span
            className="relative h-full w-full rounded-full ring-1 ring-white/20"
            style={{ backgroundColor: color }}
          />
        </span>
        <span className="truncate">{name}</span>
        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-300 group-hover/chip:scale-x-100"
          aria-hidden
        />
      </span>
    </li>
  );
}

export default function Stack() {
  return (
    <Section id="stack" variant="muted">
      <SectionHeader
        eyebrow="stack"
        title="Tecnologías y herramientas"
        description="Stack orientado a desarrollo full stack, cloud serverless, DevOps e integración de IA en productos SaaS."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {Object.entries(grouped).map(([category, items]) => {
          const meta = categoryMeta[category] ?? categoryMeta["Cloud & DevOps"];
          const Icon = meta.icon;

          return (
            <article
              key={category}
              className="group relative overflow-hidden rounded-2xl border border-border bg-bg2 p-5 sm:p-6"
            >
              <div
                className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br opacity-80 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${meta.glow}`}
                aria-hidden
              />

              <header className="relative flex items-start gap-3 border-b border-border pb-4">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg3 ${meta.accent}`}
                >
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    {category}
                  </h3>
                  <p className="mt-1 text-xs text-muted/80">
                    {items.length} tecnologías
                  </p>
                </div>
              </header>

              <ul className="relative mt-4 flex flex-wrap gap-2.5">
                {items.map((tech) => (
                  <TechChip key={tech.name} name={tech.name} color={tech.color} />
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
