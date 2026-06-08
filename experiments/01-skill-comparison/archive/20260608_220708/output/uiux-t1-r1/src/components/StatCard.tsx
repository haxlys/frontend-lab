import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative";
  icon: ReactNode;
}

export function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="text-2xl font-bold tracking-tight text-slate-900">{value}</p>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
          {icon}
        </div>
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-sm">
        <span
          className={`font-semibold ${
            changeType === "positive" ? "text-emerald-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
        <span className="text-slate-400">vs last month</span>
      </div>
    </div>
  );
}
