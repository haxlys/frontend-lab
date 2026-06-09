import { type LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  changeLabel: string;
  icon: LucideIcon;
}

export function StatCard({
  title,
  value,
  change,
  changeLabel,
  icon: Icon,
}: StatCardProps) {
  const isPositive = change >= 0;

  return (
    <div className="rounded-lg border border-navy-200 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-start justify-between">
        <p className="text-[13px] font-medium tracking-tight text-navy-500">
          {title}
        </p>
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 ring-1 ring-navy-200/60">
          <Icon size={16} className="text-navy-600" />
        </div>
      </div>
      <p className="mb-2 text-2xl font-bold tracking-tight text-navy-900">
        {value}
      </p>
      <div className="flex items-center gap-1.5">
        {isPositive ? (
          <TrendingUp size={13} className="text-emerald-600" />
        ) : (
          <TrendingDown size={13} className="text-red-500" />
        )}
        <span
          className={`text-[12px] font-medium ${
            isPositive ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {isPositive ? "+" : ""}
          {change}%
        </span>
        <span className="text-[12px] text-navy-400">{changeLabel}</span>
      </div>
    </div>
  );
}
