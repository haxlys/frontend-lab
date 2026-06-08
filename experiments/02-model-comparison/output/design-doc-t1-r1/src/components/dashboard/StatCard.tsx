import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '../../lib/utils';

type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  icon: LucideIcon;
  helper?: string;
};

export function StatCard({ label, value, delta, icon: Icon, helper }: StatCardProps) {
  const isPositive = delta >= 0;
  return (
    <div className="group relative flex flex-col gap-3 rounded-lg border border-ink-200 bg-white p-5 shadow-soft transition-colors hover:border-ink-300">
      <div className="flex items-start justify-between">
        <span className="text-sm font-medium text-ink-500">{label}</span>
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-100 text-ink-600 transition-colors group-hover:bg-brand-50 group-hover:text-brand-600">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </div>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-ink-900">{value}</span>
      </div>
      <div className="flex items-center gap-2 text-xs">
        <span
          className={cn(
            'inline-flex items-center gap-0.5 rounded-md px-1.5 py-0.5 font-medium',
            isPositive ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'
          )}
        >
          {isPositive ? (
            <ArrowUpRight className="h-3 w-3" />
          ) : (
            <ArrowDownRight className="h-3 w-3" />
          )}
          {Math.abs(delta).toFixed(1)}%
        </span>
        <span className="text-ink-500">{helper ?? '지난 30일 대비'}</span>
      </div>
    </div>
  );
}
