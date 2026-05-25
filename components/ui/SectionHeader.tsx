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
  const alignClasses =
    align === "center" ? "mx-auto text-center items-center" : "items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 flex flex-col gap-3 sm:mb-12 lg:mb-14 ${
        meta ? "sm:flex-row sm:items-end sm:justify-between sm:gap-8" : ""
      }`}
    >
      <div className={`flex max-w-2xl flex-col ${alignClasses}`}>
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-bg2 px-3 py-1 font-mono text-xs uppercase tracking-[0.25em] text-accent2">
          {Icon ? <Icon size={12} aria-hidden /> : null}
          {eyebrow}
        </span>
        <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="text-pretty mt-4 text-base leading-relaxed text-muted sm:text-lg">
            {subtitle}
          </p>
        ) : null}
      </div>
      {meta ? (
        <div className="shrink-0 font-mono text-xs text-muted">{meta}</div>
      ) : null}
    </motion.div>
  );
}
