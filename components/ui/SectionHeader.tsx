type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <header
      className={`mb-10 sm:mb-12 ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent2">
        <span className="text-accent">{"// "}</span>
        {eyebrow}
      </p>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty mt-4 text-base leading-relaxed text-muted">
          {description}
        </p>
      ) : null}
    </header>
  );
}
