import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type BadgeTone = "accent" | "accent2" | "muted";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ComponentType<LucideProps>;
  pulse?: boolean;
}

const toneClasses: Record<BadgeTone, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  accent2: "border-accent2/30 bg-accent2/10 text-accent2",
  muted: "border-[var(--border)] bg-bg3 text-muted",
};

export default function Badge({
  children,
  tone = "accent2",
  icon: Icon,
  pulse = false,
}: BadgeProps) {
  const dotColor =
    tone === "accent"
      ? "bg-accent"
      : tone === "accent2"
        ? "bg-accent2"
        : "bg-muted";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] ${toneClasses[tone]}`}
    >
      {pulse ? (
        <span className="relative flex h-1.5 w-1.5">
          <span
            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${dotColor}`}
          />
          <span
            className={`relative inline-flex h-full w-full rounded-full ${dotColor}`}
          />
        </span>
      ) : Icon ? (
        <Icon size={11} aria-hidden />
      ) : null}
      {children}
    </span>
  );
}
