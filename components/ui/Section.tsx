"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "muted";
};

export default function Section({
  id,
  children,
  className = "",
  variant = "default",
}: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`py-16 sm:py-20 ${
        variant === "muted" ? "border-y border-border bg-bg2/50" : ""
      } ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container-x">{children}</div>
    </motion.section>
  );
}
