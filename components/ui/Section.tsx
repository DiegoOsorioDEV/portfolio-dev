import type { ReactNode } from "react";

type SectionVariant = "default" | "alt";

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
}

const bgByVariant: Record<SectionVariant, string> = {
  default: "bg-bg",
  alt: "bg-bg2",
};

export default function Section({
  id,
  variant = "default",
  children,
  className = "",
  ariaLabel,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={`container-px section-py relative overflow-hidden ${bgByVariant[variant]} ${className}`}
    >
      <div className="relative mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
