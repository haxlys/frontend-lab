import type { ReactNode } from "react";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: ReactNode;
}

export default function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  const changeColors = {
    positive: "text-[#059669] bg-[#ecfdf5]",
    negative: "text-[#dc2626] bg-[#fef2f2]",
    neutral: "text-[#64748b] bg-[#f1f5f9]",
  };

  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-[#64748b]">{title}</p>
        <span className="text-[#94a3b8]">{icon}</span>
      </div>
      <p className="mt-2 text-2xl font-bold text-[#0f172a] tracking-tight">{value}</p>
      <span className={`mt-2 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${changeColors[changeType]}`}>
        {changeType === "positive" && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        )}
        {changeType === "negative" && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        )}
        {change}
      </span>
    </div>
  );
}
