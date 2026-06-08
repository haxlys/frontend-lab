import {
  DollarSign,
  UserPlus,
  TrendingUp,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
} from "../ui/icons";
import { Card } from "../ui/Card";
import { stats } from "../../data/mock";
import { cn } from "../../lib/utils";

const iconMap = {
  DollarSign,
  UserPlus,
  TrendingUp,
  Briefcase,
};

const iconBg: Record<string, string> = {
  DollarSign: "bg-emerald-50 text-emerald-600",
  UserPlus: "bg-blue-50 text-blue-600",
  TrendingUp: "bg-violet-50 text-violet-600",
  Briefcase: "bg-amber-50 text-amber-600",
};

export function StatGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((s) => {
        const Icon = iconMap[s.icon as keyof typeof iconMap];
        const positive = s.delta >= 0;
        return (
          <Card key={s.id} className="p-5 hover:shadow-soft transition-shadow">
            <div className="flex items-start justify-between">
              <div
                className={cn(
                  "h-9 w-9 rounded-md grid place-items-center",
                  iconBg[s.icon] ?? "bg-slate-100 text-slate-600"
                )}
              >
                <Icon size={17} />
              </div>
              <div
                className={cn(
                  "flex items-center gap-0.5 text-[12px] font-semibold",
                  positive ? "text-emerald-600" : "text-rose-600"
                )}
              >
                {positive ? <ArrowUpRight size={13} /> : <ArrowDownRight size={13} />}
                {Math.abs(s.delta).toFixed(1)}%
              </div>
            </div>
            <div className="mt-4">
              <div className="text-[11.5px] font-medium uppercase tracking-wider text-slate-500">
                {s.label}
              </div>
              <div className="mt-1 text-[24px] font-semibold tracking-tight text-slate-900">
                {s.value}
              </div>
              <div className="mt-1 text-[12px] text-slate-500">{s.deltaLabel}</div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
