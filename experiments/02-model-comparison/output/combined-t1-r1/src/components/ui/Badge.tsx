import { cn } from "../../lib/utils";

type Variant = "neutral" | "brand" | "success" | "warning" | "danger" | "muted";

const styles: Record<Variant, string> = {
  neutral: "bg-ink-100 text-ink-700",
  brand: "bg-brand-50 text-brand-700",
  success: "bg-emerald-50 text-emerald-700",
  warning: "bg-amber-50 text-amber-700",
  danger: "bg-rose-50 text-rose-700",
  muted: "bg-ink-50 text-ink-500 border border-ink-200",
};

export function Badge({
  children,
  variant = "neutral",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-medium leading-4",
        styles[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
