import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-border bg-bg3 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-muted ${className}`}
    >
      {children}
    </span>
  );
}
