import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gradient";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-text text-bg hover:bg-accent hover:shadow-[0_0_40px_rgba(123,97,255,0.45)]",
  secondary:
    "border border-[var(--border)] bg-bg2/60 text-text backdrop-blur hover:border-accent2/60 hover:bg-bg3 hover:text-accent2",
  ghost:
    "border border-[var(--border)] bg-bg2/60 text-muted backdrop-blur hover:border-accent/50 hover:bg-bg3 hover:text-text",
  gradient:
    "bg-gradient-to-r from-accent to-accent2 text-bg hover:shadow-[0_0_40px_rgba(123,97,255,0.5)]",
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
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold font-mono transition-all hover:scale-[1.02] sm:px-6 sm:py-3 ${variantClasses[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
