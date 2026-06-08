import { cn } from "../../lib/utils";

interface BadgeProps {
  variant: "active" | "lead" | "negotiation" | "closed" | "success" | "warning" | "neutral";
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeProps["variant"], string> = {
  active: "bg-emerald-50 text-emerald-700 border-emerald-200",
  lead: "bg-royal-50 text-royal-600 border-royal-50",
  negotiation: "bg-amber-50 text-amber-700 border-amber-200",
  closed: "bg-slate-100 text-slate-500 border-slate-200",
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  neutral: "bg-slate-100 text-slate-500 border-slate-200",
};

const variantLabels: Record<BadgeProps["variant"], string> = {
  active: "활성",
  lead: "리드",
  negotiation: "협상 중",
  closed: "완료",
  success: "성공",
  warning: "주의",
  neutral: "중립",
};

export function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className,
      )}
    >
      {children ?? variantLabels[variant]}
    </span>
  );
}
