"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import Section from "./ui/Section";
import SectionHeader from "./ui/SectionHeader";

const { experience, education } = portfolioData;

function isCurrent(period: string) {
  const now = new Date();
  const months: Record<string, number> = {
    enero: 0,
    febrero: 1,
    marzo: 2,
    abril: 3,
    mayo: 4,
    junio: 5,
    julio: 6,
    agosto: 7,
    septiembre: 8,
    octubre: 9,
    noviembre: 10,
    diciembre: 11,
  };
  const end = period.split("-").pop()?.trim().toLowerCase();
  if (!end) return false;
  const match = end.match(/([a-záéíóú]+)\s+(\d{4})/i);
  if (!match) return false;
  const monthIdx = months[match[1].toLowerCase()];
  const year = Number(match[2]);
  if (monthIdx === undefined || Number.isNaN(year)) return false;
  const endDate = new Date(year, monthIdx + 1, 0);
  return endDate >= now;
}

interface TimelineItemProps {
  job: (typeof experience)[number];
  index: number;
}

function TimelineItem({ job, index }: TimelineItemProps) {
  const current = isCurrent(job.period);
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.3) }}
      className="relative flex gap-6 sm:pl-10"
    >
      <div className="absolute left-0 top-5 hidden sm:block">
        <span
          className={`relative block h-4 w-4 rounded-full border-2 ${
            current
              ? "border-accent2 bg-accent2/30 shadow-[0_0_12px_rgba(0,229,195,0.7)]"
              : "border-accent bg-bg"
          }`}
        >
          {current ? (
            <span className="absolute inset-0 animate-ping rounded-full bg-accent2/50" />
          ) : null}
        </span>
      </div>
      <div className="flex-1 rounded-xl border border-[var(--border)] bg-bg2 p-5 transition-all hover:-translate-y-0.5 hover:border-accent/30 sm:p-6">
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <span className="inline-flex items-center gap-2 font-mono text-[11px] text-accent2 sm:text-xs">
            {current ? (
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent2 opacity-75" />
                <span className="relative inline-flex h-full w-full rounded-full bg-accent2" />
              </span>
            ) : null}
            {job.period}
          </span>
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
            {job.company}
          </span>
        </div>
        <h3 className="mb-2 text-base font-bold text-text sm:text-lg">
          {job.role}
        </h3>
        <p className="text-sm leading-relaxed text-muted">{job.desc}</p>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <Section id="experiencia">
      <SectionHeader
        eyebrow="Trayectoria"
        eyebrowIcon={Briefcase}
        title={
          <>
            Experiencia & <span className="gradient-text">educación</span>
          </>
        }
        subtitle="Historial profesional construyendo software empresarial, cloud y aplicaciones móviles."
      />

      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-accent via-accent2 to-transparent sm:block" />
        <div className="space-y-4 sm:space-y-6">
          {experience.map((job, i) => (
            <TimelineItem
              key={`${job.company}-${job.period}`}
              job={job}
              index={i}
            />
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 overflow-hidden rounded-2xl border border-accent2/20 bg-gradient-to-br from-bg3 to-bg2 p-5 sm:mt-10 sm:p-7"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl border border-accent2/30 bg-accent2/10 p-3 text-accent2">
              <GraduationCap size={22} />
            </div>
            <div className="min-w-0">
              <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.25em] text-accent2 sm:text-[11px]">
                Educación
              </p>
              <h3 className="text-base font-bold text-text sm:text-lg">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm text-accent">{education.school}</p>
            </div>
          </div>
          <p className="shrink-0 self-start rounded-full border border-[var(--border)] bg-bg px-4 py-1.5 font-mono text-[11px] text-muted sm:self-center sm:text-xs">
            {education.period}
          </p>
        </div>
      </motion.div>
    </Section>
  );
}
