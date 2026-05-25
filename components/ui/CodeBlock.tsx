"use client";

import { motion } from "framer-motion";

const lines: Array<{ tokens: Array<{ text: string; cls?: string }> }> = [
  {
    tokens: [
      { text: "const ", cls: "text-[#ff7b72]" },
      { text: "developer", cls: "text-[#79c0ff]" },
      { text: " = {" },
    ],
  },
  {
    tokens: [
      { text: "  name", cls: "text-[#79c0ff]" },
      { text: ": " },
      { text: '"Diego Osorio"', cls: "text-[#a5d6ff]" },
      { text: "," },
    ],
  },
  {
    tokens: [
      { text: "  role", cls: "text-[#79c0ff]" },
      { text: ": " },
      { text: '"Software & DevOps"', cls: "text-[#a5d6ff]" },
      { text: "," },
    ],
  },
  {
    tokens: [
      { text: "  location", cls: "text-[#79c0ff]" },
      { text: ": " },
      { text: '"🇲🇽 Toluca, México"', cls: "text-[#a5d6ff]" },
      { text: "," },
    ],
  },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "  stack", cls: "text-[#79c0ff]" },
      { text: ": [" },
    ],
  },
  {
    tokens: [
      { text: "    " },
      { text: '"React Native"', cls: "text-[#a5d6ff]" },
      { text: ", " },
      { text: '"AWS"', cls: "text-[#a5d6ff]" },
      { text: "," },
    ],
  },
  {
    tokens: [
      { text: "    " },
      { text: '"NestJS"', cls: "text-[#a5d6ff]" },
      { text: ", " },
      { text: '"Next.js"', cls: "text-[#a5d6ff]" },
      { text: "," },
    ],
  },
  {
    tokens: [
      { text: "    " },
      { text: '"CI/CD"', cls: "text-[#a5d6ff]" },
      { text: ", " },
      { text: '"Spring Boot"', cls: "text-[#a5d6ff]" },
    ],
  },
  { tokens: [{ text: "  ]," }] },
  { tokens: [{ text: "" }] },
  {
    tokens: [
      { text: "  available", cls: "text-[#79c0ff]" },
      { text: ": " },
      { text: "true", cls: "text-[#ff7b72]" },
      { text: "," },
    ],
  },
  {
    tokens: [
      { text: "  contact", cls: "text-[#79c0ff]" },
      { text: ": () => " },
      { text: "hire", cls: "text-[#d2a8ff]" },
      { text: "(" },
      { text: "me", cls: "text-[#ffa657]" },
      { text: ")," },
    ],
  },
  {
    tokens: [
      { text: "} " },
      { text: "as const", cls: "text-[#ff7b72]" },
      { text: ";" },
    ],
  },
];

export default function CodeBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      className="relative w-full max-w-[440px]"
      aria-hidden
    >
      {/* Halo behind */}
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/30 via-transparent to-accent2/30 opacity-50 blur-3xl" />

      {/* Window frame */}
      <div className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[#0d1117] shadow-[0_30px_80px_-30px_rgba(123,97,255,0.4)] backdrop-blur-xl">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-white/5 bg-[#161b22] px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex items-center gap-2 rounded-md border border-white/5 bg-[#0d1117] px-2.5 py-1 font-mono text-[10px] text-[#7d8590]">
            <span className="text-accent2">●</span>
            <span>profile.ts</span>
          </div>
          <span className="font-mono text-[10px] text-[#7d8590]">~/diego</span>
        </div>

        {/* Code area */}
        <pre className="overflow-x-auto px-5 py-4 font-mono text-[12px] leading-relaxed text-[#c9d1d9] sm:text-[13px]">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                <span className="mr-4 w-5 shrink-0 select-none text-right text-[#484f58]">
                  {String(i + 1).padStart(2, " ")}
                </span>
                <span className="min-w-0 flex-1 whitespace-pre">
                  {line.tokens.length === 1 && line.tokens[0].text === ""
                    ? "\u00a0"
                    : line.tokens.map((t, j) => (
                        <span key={j} className={t.cls}>
                          {t.text}
                        </span>
                      ))}
                </span>
              </div>
            ))}
          </code>
        </pre>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/5 bg-[#161b22] px-4 py-2 font-mono text-[10px] text-[#7d8590]">
          <span className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
              <span className="relative inline-flex h-full w-full rounded-full bg-accent2" />
            </span>
            ready
          </span>
          <span>TypeScript · UTF-8</span>
          <span>Ln 14, Col 13</span>
        </div>
      </div>
    </motion.div>
  );
}
