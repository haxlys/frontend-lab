import { cn } from "../lib/utils";

interface StatCard {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}

const stats: StatCard[] = [
  { label: "Total Revenue", value: "$284,240", change: "+12.5%", positive: true },
  { label: "New Leads", value: "1,432", change: "+8.2%", positive: true },
  { label: "Conversion Rate", value: "24.8%", change: "-2.1%", positive: false },
  { label: "Active Deals", value: "148", change: "+5.7%", positive: true },
];

export function StatisticsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-lg border border-slate-200 px-5 py-4 hover:border-slate-300 transition-colors duration-150"
        >
          <p className="text-[12.5px] font-medium text-slate-500 tracking-wide">
            {stat.label}
          </p>
          <p className="mt-1 text-[26px] font-semibold tracking-tight text-slate-900">
            {stat.value}
          </p>
          <p
            className={cn(
              "mt-2 text-[12.5px] font-medium",
              stat.positive ? "text-emerald-600" : "text-rose-500"
            )}
          >
            {stat.change} from last month
          </p>
        </div>
      ))}
    </div>
  );
}
