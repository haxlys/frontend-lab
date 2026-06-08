import { cn } from "../../lib/utils";

type Tone = "blue" | "violet" | "emerald" | "amber" | "rose" | "slate";

const tones: Record<Tone, string> = {
  blue: "bg-blue-100 text-blue-700",
  violet: "bg-violet-100 text-violet-700",
  emerald: "bg-emerald-100 text-emerald-700",
  amber: "bg-amber-100 text-amber-700",
  rose: "bg-rose-100 text-rose-700",
  slate: "bg-slate-100 text-slate-700",
};

type AvatarProps = {
  initials: string;
  tone?: Tone;
  size?: "xs" | "sm" | "md";
  className?: string;
};

const sizes = {
  xs: "h-5 w-5 text-[10px]",
  sm: "h-7 w-7 text-[11px]",
  md: "h-9 w-9 text-[12px]",
};

export function Avatar({ initials, tone = "slate", size = "sm", className }: AvatarProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-full font-semibold ring-2 ring-white",
        tones[tone],
        sizes[size],
        className
      )}
    >
      {initials}
    </span>
  );
}
