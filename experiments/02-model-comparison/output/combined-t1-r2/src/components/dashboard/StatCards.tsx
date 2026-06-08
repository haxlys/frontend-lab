import { Icon } from "../Icon";

type Trend = "up" | "down" | "flat";

interface Stat {
  label: string;
  value: string;
  delta: string;
  trend: Trend;
  sparkline: number[];
  iconKey: "Pipeline" | "Users" | "Chart" | "Calendar";
  iconTone: "accent" | "success" | "warning" | "neutral";
}

const stats: Stat[] = [
  {
    label: "Total revenue",
    value: "$1,284,500",
    delta: "+12.4%",
    trend: "up",
    sparkline: [30, 38, 35, 50, 47, 60, 58, 72, 70, 84, 82, 95],
    iconKey: "Pipeline",
    iconTone: "accent",
  },
  {
    label: "New leads",
    value: "348",
    delta: "+8.1%",
    trend: "up",
    sparkline: [40, 32, 48, 45, 55, 52, 62, 60, 70, 68, 78, 75],
    iconKey: "Users",
    iconTone: "success",
  },
  {
    label: "Conversion rate",
    value: "24.6%",
    delta: "−1.2%",
    trend: "down",
    sparkline: [60, 58, 62, 55, 50, 53, 48, 46, 50, 45, 48, 42],
    iconKey: "Chart",
    iconTone: "warning",
  },
  {
    label: "Active deals",
    value: "127",
    delta: "+4.3%",
    trend: "up",
    sparkline: [20, 25, 30, 32, 35, 40, 38, 45, 50, 55, 58, 62],
    iconKey: "Calendar",
    iconTone: "neutral",
  },
];

const toneMap = {
  accent: "bg-accent-subtle text-accent",
  success: "bg-success-subtle text-success",
  warning: "bg-warning-subtle text-warning",
  neutral: "bg-surface-subtle text-ink-secondary",
};

function Sparkline({ data, trend }: { data: number[]; trend: Trend }) {
  const w = 88;
  const h = 28;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const stepX = w / (data.length - 1);
  const points = data.map((v, i) => {
    const x = i * stepX;
    const y = h - ((v - min) / range) * h;
    return [x, y] as const;
  });
  const path = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${path} L ${w} ${h} L 0 ${h} Z`;
  const stroke = trend === "down" ? "#EF4444" : trend === "up" ? "#2563EB" : "#94A3B8";
  const fill = trend === "down" ? "rgba(239,68,68,0.08)" : trend === "up" ? "rgba(37,99,235,0.08)" : "rgba(148,163,184,0.06)";

  return (
    <svg width={w} height={h} className="overflow-visible">
      <path d={area} fill={fill} stroke="none" />
      <path d={path} fill="none" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StatCard({ stat }: { stat: Stat }) {
  const IconComp = Icon[stat.iconKey];
  const TrendIcon = stat.trend === "up" ? Icon.ArrowUp : stat.trend === "down" ? Icon.ArrowDown : null;
  const deltaTone =
    stat.trend === "up"
      ? "text-success bg-success-subtle"
      : stat.trend === "down"
      ? "text-danger bg-danger-subtle"
      : "text-ink-tertiary bg-surface-subtle";

  return (
    <div className="group bg-surface border border-border rounded-lg p-5 shadow-card transition-shadow duration-150 hover:shadow-card-hover">
      <div className="flex items-start justify-between">
        <div
          className={`h-8 w-8 rounded inline-flex items-center justify-center ${toneMap[stat.iconTone]}`}
        >
          <IconComp size={16} />
        </div>
        <span
          className={`inline-flex items-center gap-0.5 h-5 px-1.5 text-[11px] font-semibold tabular rounded ${deltaTone}`}
        >
          {TrendIcon && <TrendIcon size={10} />}
          {stat.delta}
        </span>
      </div>
      <div className="mt-4">
        <div className="text-[11px] font-medium uppercase tracking-[0.06em] text-ink-tertiary">
          {stat.label}
        </div>
        <div className="mt-1 text-[24px] font-semibold tracking-[-0.015em] tabular text-ink-primary">
          {stat.value}
        </div>
      </div>
      <div className="mt-3 -mb-1">
        <Sparkline data={stat.sparkline} trend={stat.trend} />
      </div>
    </div>
  );
}

export function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <StatCard key={stat.label} stat={stat} />
      ))}
    </div>
  );
}
