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
      className={`section-y relative overflow-hidden ${bgByVariant[variant]} ${className}`}
    >
      <div className={`container-x relative`}>{children}</div>
    </section>
  );
}
