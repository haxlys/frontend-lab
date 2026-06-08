import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: ReactNode;
}

export default function StatCard({ label, value, change, trend, icon }: StatCardProps) {
  return (
    <div className="rounded-xl bg-surface-elevated border border-border p-5 flex flex-col gap-3 transition-shadow hover:shadow-lg hover:shadow-brand/5">
      <div className="flex items-center justify-between">
        <span className="text-text-muted text-sm font-medium tracking-wide uppercase">{label}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface text-brand-light">
          {icon}
        </span>
      </div>
      <div className="text-2xl font-bold text-text-primary tracking-tight">{value}</div>
      <div className="flex items-center gap-1.5 text-sm">
        <span className={trend === "up" ? "text-success" : "text-danger"}>
          {trend === "up" ? "▲" : "▼"} {change}
        </span>
        <span className="text-text-muted">vs last month</span>
      </div>
    </div>
  );
}
