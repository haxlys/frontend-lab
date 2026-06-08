import {
  CurrencyDollar,
  UserPlus,
  Target,
  Briefcase,
  ArrowUp,
  ArrowDown,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";
import { stats } from "../data";
import clsx from "clsx";

type PhosphorIcon = ComponentType<{ size?: number; weight?: "fill" | "regular" }>;

const iconMap: Record<string, PhosphorIcon> = {
  "currency-dollar": CurrencyDollar,
  "user-plus": UserPlus,
  target: Target,
  briefcase: Briefcase,
};

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const IconComponent = iconMap[stat.icon];
        const isPositive = stat.change >= 0;

        return (
          <div key={stat.label} className="stat-card">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-slate-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-semibold text-slate-800 tracking-tight">
                  {stat.value}
                </p>
              </div>
              {IconComponent && (
                <div className="p-2 bg-slate-50 rounded-md text-slate-500">
                  <IconComponent size={20} />
                </div>
              )}
            </div>

            <div className="flex items-center gap-1.5 mt-4">
              <span
                className={clsx(
                  "flex items-center gap-0.5 text-xs font-medium",
                  isPositive ? "text-emerald-600" : "text-rose"
                )}
              >
                {isPositive ? (
                  <ArrowUp size={12} weight="bold" />
                ) : (
                  <ArrowDown size={12} weight="bold" />
                )}
                {Math.abs(stat.change)}%
              </span>
              <span className="text-xs text-slate-400">{stat.changeLabel}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
