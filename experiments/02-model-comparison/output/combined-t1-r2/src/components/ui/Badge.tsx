import type { HTMLAttributes } from "react";

type Tone = "neutral" | "accent" | "success" | "warning" | "danger";

const tones: Record<Tone, string> = {
  neutral: "bg-surface-subtle text-ink-secondary border-border",
  accent: "bg-accent-subtle text-accent border-accent-ring",
  success: "bg-success-subtle text-success border-emerald-200",
  warning: "bg-warning-subtle text-warning border-amber-200",
  danger: "bg-danger-subtle text-danger border-red-200",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "neutral", className = "", children, ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 h-5 px-1.5 text-[11px] font-medium rounded border ${tones[tone]} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
