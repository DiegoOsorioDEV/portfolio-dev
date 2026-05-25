"use client";

import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

const levelStyles: Record<string, string> = {
  Experto: "text-accent2 border-accent2/40 bg-accent2/10",
  Avanzado: "text-accent border-accent/40 bg-accent/10",
  Intermedio: "text-muted border-[var(--border)] bg-bg3",
};

export default function Stack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Tecnologías"
        eyebrowIcon={Layers}
        title={
          <>
            Stack <span className="gradient-text">técnico</span> que domino
          </>
        }
        subtitle="Herramientas y plataformas que utilizo a diario para diseñar, construir y operar productos en producción."
        meta={
          <>
            {portfolioData.stack.length} tecnologías ·{" "}
            <span className="text-accent2">en uso activo</span>
          </>
        }
      />

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {portfolioData.stack.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.04, 0.3) }}
            className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-bg2 p-4 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-bg3 sm:p-5"
          >
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-50"
              style={{ backgroundColor: tech.color }}
            />
            <div className="flex items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-2.5">
                <div
                  className="h-2.5 w-2.5 shrink-0 rounded-full"
                  style={{
                    backgroundColor: tech.color,
                    boxShadow: `0 0 12px ${tech.color}`,
                  }}
                />
                <p className="truncate font-mono text-xs font-semibold text-text sm:text-sm">
                  {tech.name}
                </p>
              </div>
              <span
                className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider ${
                  levelStyles[tech.level] ?? levelStyles.Intermedio
                }`}
              >
                {tech.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
