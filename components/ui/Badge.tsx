import type { ComponentType, ReactNode } from "react";
import type { LucideProps } from "lucide-react";

type BadgeTone = "accent" | "accent2" | "muted";

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  icon?: ComponentType<LucideProps>;
  pulse?: boolean;
  size?: "sm" | "md";
}

const toneClasses: Record<BadgeTone, string> = {
  accent: "border-accent/30 bg-accent/10 text-accent",
  accent2: "border-accent2/30 bg-accent2/10 text-accent2",
  muted: "border-[var(--border)] bg-bg3 text-muted",
};

const sizeClasses = {
  sm: "px-2.5 py-0.5 text-[10px]",
  md: "px-3 py-1 text-[11px]",
};

export default function Badge({
  children,
  tone = "accent2",
  icon: Icon,
  pulse = false,
  size = "md",
}: BadgeProps) {
  const dotColor =
    tone === "accent"
      ? "bg-accent"
      : tone === "accent2"
      ? "bg-accent2"
      : "bg-muted";

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border font-mono uppercase tracking-[0.25em] ${toneClasses[tone]} ${sizeClasses[size]}`}
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
