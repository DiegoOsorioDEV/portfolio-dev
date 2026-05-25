import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-text text-bg hover:bg-accent hover:text-bg hover:shadow-[0_0_40px_rgba(123,97,255,0.5)]",
  secondary:
    "border border-[var(--border)] bg-bg2/60 text-text backdrop-blur hover:border-accent2/50 hover:bg-bg3 hover:text-accent2",
  ghost:
    "border border-[var(--border)] bg-bg2/60 text-muted backdrop-blur hover:border-accent/40 hover:bg-bg3 hover:text-text",
};

export default function Button({
  variant = "primary",
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <a
      {...props}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-mono text-xs font-semibold transition-all hover:scale-[1.02] sm:px-6 sm:py-3.5 sm:text-sm ${
        variantClasses[variant]
      } ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
