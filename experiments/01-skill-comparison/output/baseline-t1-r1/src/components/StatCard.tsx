import type { JSX } from "react";

export interface StatCardData {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down" | "neutral";
  icon: JSX.Element;
}

interface StatCardProps {
  card: StatCardData;
}

export function StatCard({ card }: StatCardProps) {
  const changeColor =
    card.changeType === "up"
      ? "text-success bg-success-subtle"
      : card.changeType === "down"
        ? "text-danger bg-danger-subtle"
        : "text-navy-700 bg-slate-100";

  const arrow =
    card.changeType === "up" ? (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    ) : card.changeType === "down" ? (
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ) : null;

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-5
                    hover:border-slate-300 transition-colors duration-150">
      <div className="flex items-start justify-between mb-4">
        <span className="text-sm font-medium text-slate-500">{card.label}</span>
        <div className="w-9 h-9 bg-slate-50 rounded-default flex items-center justify-center text-slate-500">
          {card.icon}
        </div>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-[28px] font-semibold text-navy-900 tracking-tight leading-none">
          {card.value}
        </span>
        <span className={`inline-flex items-center gap-0.5 text-xs font-semibold px-1.5 py-0.5 rounded-full ${changeColor}`}>
          {arrow}
          {card.change}
        </span>
      </div>
    </div>
  );
}
