import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../Icons";
import { portfolioData } from "@/data/portfolio";

interface SocialLinksProps {
  size?: "sm" | "md";
  showEmail?: boolean;
}

const sizeMap = {
  sm: { padding: "p-2", icon: 14 },
  md: { padding: "p-3", icon: 16 },
};

export default function SocialLinks({
  size = "md",
  showEmail = false,
}: SocialLinksProps) {
  const { socials } = portfolioData;
  const cfg = sizeMap[size];

  const items = [
    {
      Icon: GithubIcon,
      href: socials.github,
      label: "GitHub",
      hover: "hover:text-text",
    },
    {
      Icon: LinkedinIcon,
      href: socials.linkedin,
      label: "LinkedIn",
      hover: "hover:text-[#0A66C2]",
    },
    ...(showEmail
      ? [
          {
            Icon: Mail,
            href: `mailto:${socials.email}`,
            label: "Email",
            hover: "hover:text-accent",
          },
        ]
      : []),
  ];

  return (
    <div className="flex items-center gap-2">
      {items.map(({ Icon, href, label, hover }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          className={`rounded-full border border-[var(--border)] bg-bg2/60 text-muted backdrop-blur transition-all hover:-translate-y-0.5 hover:border-accent/40 ${cfg.padding} ${hover}`}
        >
          <Icon size={cfg.icon} />
        </a>
      ))}
    </div>
  );
}
