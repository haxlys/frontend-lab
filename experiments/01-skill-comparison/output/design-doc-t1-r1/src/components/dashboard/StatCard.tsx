import { type FC } from "react";
import { Card } from "../ui";

const iconMap: Record<string, React.JSX.Element> = {
  DollarSign: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></>,
  UserPlus: <><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="23" y1="11" x2="17" y2="11" /></>,
  Percent: <><line x1="19" y1="5" x2="5" y2="19" /><circle cx="6.5" cy="6.5" r="2.5" /><circle cx="17.5" cy="17.5" r="2.5" /></>,
  Briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></>,
  TrendingUp: <><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></>,
};

const SvgIcon: FC<{ name: string; className?: string }> = ({ name, className = "h-5 w-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {iconMap[name] ?? null}
  </svg>
);

type StatCardProps = {
  label: string;
  value: string;
  change: string;
  changeType: "up" | "down";
  icon: string;
};

export const StatCard: FC<StatCardProps> = ({ label, value, change, changeType, icon }) => (
  <Card>
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-navy-400">{label}</p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-navy-800">{value}</p>
      </div>
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-50 text-navy-400">
        <SvgIcon name={icon} className="h-5 w-5" />
      </span>
    </div>
    <div className="mt-4 flex items-center gap-1.5">
      <SvgIcon
        name="TrendingUp"
        className={`h-4 w-4 ${changeType === "up" ? "text-success-600" : "text-danger-600"}`}
      />
      <span
        className={`text-sm font-medium ${changeType === "up" ? "text-success-600" : "text-danger-600"}`}
      >
        {change}
      </span>
      <span className="text-sm text-navy-400">vs. last month</span>
    </div>
  </Card>
);
