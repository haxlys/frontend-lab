import { DollarSign, Users, TrendingUp, Briefcase, ArrowUp, ArrowDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/Card";
import type { StatProps } from "../../data/mock";

const iconMap = {
  dollar: DollarSign,
  users: Users,
  trending: TrendingUp,
  briefcase: Briefcase,
} as const;

export function StatCard({ label, value, change, changeType, icon }: StatProps) {
  const Icon = iconMap[icon];
  const isUp = changeType === "up";

  return (
    <Card className="flex items-start justify-between" padding="lg">
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
          {label}
        </span>
        <span className="text-2xl font-bold tracking-tight text-slate-900">{value}</span>
        <span
          className={cn(
            "inline-flex items-center gap-0.5 text-xs font-medium",
            isUp ? "text-emerald-600" : "text-red-500",
          )}
        >
          {isUp ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          {change}
        </span>
      </div>
      <div
        className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-md",
          isUp ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>
    </Card>
  );
}
