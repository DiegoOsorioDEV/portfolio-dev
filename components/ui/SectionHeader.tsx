"use client";

import { motion } from "framer-motion";
import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

interface SectionHeaderProps {
  eyebrow: string;
  eyebrowIcon?: ComponentType<LucideProps>;
  title: ReactNode;
  subtitle?: string;
  meta?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({
  eyebrow,
  eyebrowIcon: Icon,
  title,
  subtitle,
  meta,
  align = "left",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 flex flex-col gap-4 sm:mb-14 ${
        meta ? "sm:flex-row sm:items-end sm:justify-between sm:gap-8" : ""
      }`}
    >
      <div className={`max-w-2xl ${alignClass}`}>
        <div
          className={`mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-bg2 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent2 sm:text-[11px] ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {Icon ? <Icon size={12} aria-hidden /> : null}
          {eyebrow}
        </div>
        <h2 className="section-title text-balance text-text">{title}</h2>
        {subtitle ? (
          <p className="section-subtitle text-pretty mt-4 text-muted">
            {subtitle}
          </p>
        ) : null}
      </div>
      {meta ? (
        <div className="shrink-0 font-mono text-[11px] text-muted sm:text-xs">
          {meta}
        </div>
      ) : null}
    </motion.div>
  );
}
