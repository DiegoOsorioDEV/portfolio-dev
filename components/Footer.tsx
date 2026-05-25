import { Terminal } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import SocialLinks from "./ui/SocialLinks";

const { profile } = portfolioData;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-bg py-10">
      <div className="container-x flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
            <Terminal size={14} />
          </span>
          <div>
            <p className="font-mono text-sm font-semibold text-text">
              diego<span className="text-accent2">/</span>dev
            </p>
            <p className="font-mono text-xs text-muted">
              © {year} {profile.name.split(" ").slice(0, 2).join(" ")}
            </p>
          </div>
        </div>

        <div className="order-3 sm:order-2">
          <SocialLinks size="sm" showEmail />
        </div>

        <p className="order-2 font-mono text-xs text-muted sm:order-3">
          Built with{" "}
          <span className="text-accent">Next.js</span> ·{" "}
          <span className="text-accent2">Tailwind</span> ·{" "}
          <span className="text-text">Framer Motion</span>
        </p>
      </div>
    </footer>
  );
}
