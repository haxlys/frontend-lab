import type { LucideIcon } from 'lucide-react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

export type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  icon: LucideIcon;
  trend?: number[];
  caption?: string;
};

export function StatCard({ label, value, delta, icon: Icon, trend, caption }: StatCardProps) {
  const positive = delta >= 0;
  return (
    <div className="group relative flex flex-col gap-3 rounded-lg border border-border bg-card p-5 shadow-soft transition-colors hover:border-slate-300">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-muted-foreground">{label}</p>
          <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-tight text-foreground tabular-nums">
            {value}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors group-hover:bg-accent/10 group-hover:text-accent">
          <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              'inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 text-xs font-semibold tabular-nums',
              positive
                ? 'bg-emerald-50 text-emerald-700'
                : 'bg-rose-50 text-rose-700'
            )}
          >
            {positive ? (
              <ArrowUpRight className="h-3 w-3" strokeWidth={2.5} />
            ) : (
              <ArrowDownRight className="h-3 w-3" strokeWidth={2.5} />
            )}
            {Math.abs(delta)}%
          </span>
          {caption && (
            <span className="text-xs text-muted-foreground">{caption}</span>
          )}
        </div>
        {trend && <Sparkline values={trend} positive={positive} />}
      </div>
    </div>
  );
}

function Sparkline({ values, positive }: { values: number[]; positive: boolean }) {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const width = 72;
  const height = 24;
  const step = width / (values.length - 1);
  const points = values
    .map((v, i) => {
      const x = i * step;
      const y = height - ((v - min) / range) * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const last = values[values.length - 1];
  const lastY = height - ((last - min) / range) * height;
  const lastX = width;

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      className="overflow-visible"
      aria-hidden
    >
      <polyline
        points={points}
        fill="none"
        stroke={positive ? '#10B981' : '#EF4444'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={lastX} cy={lastY} r="2.5" fill={positive ? '#10B981' : '#EF4444'} />
    </svg>
  );
}
