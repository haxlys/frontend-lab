import { ArrowUpRight, ArrowDownRight, type Icon } from "phosphor-react";
import { cn } from "../../lib/utils";

type StatCardProps = {
  label: string;
  value: string;
  delta: number;
  deltaLabel: string;
  icon: Icon;
  hint?: string;
};

export function StatCard({
  label,
  value,
  delta,
  deltaLabel,
  icon: IconCmp,
  hint,
}: StatCardProps) {
  const positive = delta >= 0;
  return (
    <div className="group bg-white border border-ink-200 rounded-lg p-5 shadow-card hover:shadow-cardHover hover:border-ink-300 transition-colors">
      <div className="flex items-start justify-between">
        <span className="text-xs font-medium text-ink-500">{label}</span>
        <span className="flex items-center justify-center w-7 h-7 rounded-md bg-ink-50 text-ink-600">
          <IconCmp className="w-3.5 h-3.5" weight="duotone" />
        </span>
      </div>

      <div className="mt-3 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-ink-900 tabular-nums">
          {value}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-0.5 text-xs font-medium tabular-nums",
            positive ? "text-emerald-600" : "text-rose-600",
          )}
        >
          {positive ? (
            <ArrowUpRight className="w-3 h-3" weight="bold" />
          ) : (
            <ArrowDownRight className="w-3 h-3" weight="bold" />
          )}
          {positive ? "+" : ""}
          {delta.toFixed(1)}%
        </span>
        <span className="text-2xs text-ink-500">{deltaLabel}</span>
      </div>

      {hint && (
        <div className="mt-3 pt-3 border-t border-ink-100 text-2xs text-ink-500">
          {hint}
        </div>
      )}
    </div>
  );
}
