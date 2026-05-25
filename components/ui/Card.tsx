import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  interactive?: boolean;
  variant?: "default" | "elevated";
}

export default function Card({
  children,
  interactive = true,
  variant = "default",
  className = "",
  ...props
}: CardProps) {
  const base =
    variant === "elevated"
      ? "bg-gradient-to-br from-bg3 to-bg2"
      : "bg-bg2";

  const interactiveClasses = interactive
    ? "transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(123,97,255,0.4)]"
    : "";

  return (
    <div
      {...props}
      className={`group relative overflow-hidden rounded-2xl border border-[var(--border)] p-5 sm:p-6 ${base} ${interactiveClasses} ${className}`}
    >
      {children}
    </div>
  );
}
