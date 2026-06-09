const variants = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  danger: "bg-red-50 text-red-700 border-red-200",
  neutral: "bg-navy-100 text-navy-600 border-navy-200",
  accent: "bg-accent-50 text-accent-600 border-blue-200",
} as const;

interface BadgeProps {
  variant?: keyof typeof variants;
  children: React.ReactNode;
}

export function Badge({ variant = "neutral", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[11px] font-medium leading-5 ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
