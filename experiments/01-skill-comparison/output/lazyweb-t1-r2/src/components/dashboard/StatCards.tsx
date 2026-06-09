import { type FC } from "react";
import { Card } from "../ui/Card";

interface StatData {
  label: string;
  value: string;
  change: { value: string; positive: boolean };
  icon: string;
  accentClass: string;
}

const stats: StatData[] = [
  {
    label: "총 매출",
    value: "₩2.48억",
    change: { value: "+12.5%", positive: true },
    icon: "M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    accentClass: "bg-accent-100 text-accent-600",
  },
  {
    label: "신규 리드",
    value: "847건",
    change: { value: "+18.2%", positive: true },
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.87 M17 3.13a4 4 0 0 1 0 7.75",
    accentClass: "bg-green-100 text-green-600",
  },
  {
    label: "전환율",
    value: "24.6%",
    change: { value: "+3.8%", positive: true },
    icon: "M18 20V10 M12 20V4 M6 20v-6",
    accentClass: "bg-teal-100 text-teal-600",
  },
  {
    label: "진행 중 딜",
    value: "₩3.15억",
    change: { value: "-2.1%", positive: false },
    icon: "M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3",
    accentClass: "bg-amber-100 text-amber-600",
  },
];

export const StatCards: FC = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
    {stats.map((stat) => (
      <Card key={stat.label}>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-[13px] font-medium text-navy-400">{stat.label}</p>
            <p className="text-2xl font-semibold text-navy-800 tracking-tight">{stat.value}</p>
          </div>
          <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${stat.accentClass}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d={stat.icon} />
            </svg>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1.5">
          <svg
            width="14"
            height="14"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`${stat.change.positive ? "text-green-600" : "text-red-500"} ${stat.change.positive ? "" : "rotate-180"}`}
          >
            <path d="M5 12l5-5 5 5" />
          </svg>
          <span className={`text-[13px] font-medium ${stat.change.positive ? "text-green-600" : "text-red-500"}`}>
            {stat.change.value}
          </span>
          <span className="text-[12px] text-navy-400">vs 지난달</span>
        </div>
      </Card>
    ))}
  </div>
);
