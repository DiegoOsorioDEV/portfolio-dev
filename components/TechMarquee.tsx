"use client";

import { portfolioData } from "@/data/portfolio";

export default function TechMarquee() {
  const items = [...portfolioData.stack, ...portfolioData.stack];

  return (
    <section
      aria-label="Stack tecnológico en movimiento"
      className="relative border-y border-[var(--border)] bg-bg2/40 py-6"
    >
      <div className="marquee-mask overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-3">
          {items.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-[var(--border)] bg-bg3 px-4 py-2 transition-colors hover:border-accent/40"
            >
              <span
                className="h-2 w-2 shrink-0 rounded-full"
                style={{
                  backgroundColor: tech.color,
                  boxShadow: `0 0 8px ${tech.color}`,
                }}
              />
              <span className="whitespace-nowrap font-mono text-xs text-text">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
