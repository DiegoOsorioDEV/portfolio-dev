interface TechBadgeProps {
  name: string;
  color: string;
  size?: "sm" | "md";
}

export default function TechBadge({ name, color, size = "md" }: TechBadgeProps) {
  const sizeClasses =
    size === "sm"
      ? "px-2 py-1 text-[10px] gap-1.5"
      : "px-3 py-1.5 text-[11px] gap-2";

  return (
    <span
      className={`inline-flex items-center rounded-full border border-[var(--border)] bg-bg3 font-mono text-text ${sizeClasses}`}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`,
        }}
      />
      <span className="whitespace-nowrap">{name}</span>
    </span>
  );
}
