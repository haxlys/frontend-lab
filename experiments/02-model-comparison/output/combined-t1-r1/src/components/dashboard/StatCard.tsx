import type { ReactNode } from "react";
import { ArrowUpRight, ArrowDownRight } from "@phosphor-icons/react";
import { cn } from "../../lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  icon: ReactNode;
  iconColor?: string;
  sparkline?: number[];
};

export function StatCard({ label, value, delta, icon, iconColor = "#2563EB", sparkline }: StatCardProps) {
  const positive = delta >= 0;
  const path = sparkline
    ? sparkline
        .map((v, i) => {
          const max = Math.max(...sparkline);
          const min = Math.min(...sparkline);
          const range = max - min || 1;
          const x = (i / (sparkline.length - 1)) * 100;
          const y = 24 - ((v - min) / range) * 22 - 1;
          return `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ")
    : "";

  const areaPath = sparkline
    ? `${path} L100,28 L0,28 Z`
    : "";

  return (
    <div className="bg-white border border-ink-200 rounded-lg p-5 shadow-card hover:border-ink-300 transition-colors group">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div
            className="h-8 w-8 rounded-md flex items-center justify-center"
            style={{ backgroundColor: `${iconColor}14`, color: iconColor }}
          >
            {icon}
          </div>
          <span className="text-[12.5px] font-medium text-ink-500">{label}</span>
        </div>
      </div>

      <div className="mt-3 flex items-end justify-between gap-3">
        <div>
          <div className="text-[24px] font-semibold text-ink-900 tracking-tight tabular-nums leading-none">
            {value}
          </div>
          <div
            className={cn(
              "mt-2 inline-flex items-center gap-1 text-[12px] font-medium",
              positive ? "text-emerald-600" : "text-rose-600",
            )}
          >
            {positive ? <ArrowUpRight size={12} weight="bold" /> : <ArrowDownRight size={12} weight="bold" />}
            <span className="tabular-nums">{Math.abs(delta).toFixed(1)}%</span>
            <span className="text-ink-400 font-normal">vs last month</span>
          </div>
        </div>

        {sparkline && (
          <svg
            viewBox="0 0 100 28"
            preserveAspectRatio="none"
            className="w-24 h-7 shrink-0"
            aria-hidden
          >
            <path d={areaPath} fill={iconColor} fillOpacity="0.08" />
            <path d={path} fill="none" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>
    </div>
  );
}
