interface StatItemProps {
  value: string;
  label: string;
}

export default function StatItem({ value, label }: StatItemProps) {
  return (
    <div>
      <p className="font-mono text-2xl font-bold text-text sm:text-3xl lg:text-4xl">
        {value}
      </p>
      <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted">
        {label}
      </p>
    </div>
  );
}
