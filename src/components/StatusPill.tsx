import { siteConfig } from "@/data/site";

export function StatusPill() {
  const { available, availabilityLabel } = siteConfig;

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1.5 text-xs text-[var(--color-text-secondary)]">
      <span className="relative flex h-1.5 w-1.5">
        {available && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-success)] opacity-75" />
        )}
        <span
          className="relative inline-flex h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: available ? "var(--color-success)" : "var(--color-text-muted)" }}
        />
      </span>
      {available ? availabilityLabel.available : availabilityLabel.unavailable}
    </div>
  );
}
