import { cn } from "../../lib/utils";

type Size = "xs" | "sm" | "md" | "lg";

const sizes: Record<Size, string> = {
  xs: "h-5 w-5 text-[9px]",
  sm: "h-7 w-7 text-[11px]",
  md: "h-9 w-9 text-[12px]",
  lg: "h-10 w-10 text-[13px]",
};

export function Avatar({
  initials,
  color = "#2563EB",
  size = "sm",
  className,
}: {
  initials: string;
  color?: string;
  size?: Size;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold text-white shrink-0 ring-2 ring-white",
        sizes[size],
        className,
      )}
      style={{ backgroundColor: color }}
    >
      {initials}
    </span>
  );
}
