import { Card } from '@/components/ui/Card';
import { Icon } from '@/components/Icon';
import { kpis } from '@/data';
import { cn } from '@/lib/cn';

export function KpiGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {kpis.map((k) => {
        const IconComp = Icon[k.icon];
        const positive = k.delta >= 0;
        return (
          <Card key={k.label} className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-ink-500">{k.label}</span>
              <span className="h-7 w-7 inline-flex items-center justify-center rounded-sm bg-ink-100 text-ink-600">
                <IconComp size={14} />
              </span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-semibold tracking-tight text-ink-900 tabular-nums">
                {k.value}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-2xs">
              <span
                className={cn(
                  'inline-flex items-center gap-0.5 font-semibold',
                  positive ? 'text-emerald-600' : 'text-rose-600',
                )}
              >
                {positive ? <Icon.ArrowUp size={12} /> : <Icon.ArrowDown size={12} />}
                {Math.abs(k.delta).toFixed(1)}%
              </span>
              <span className="text-ink-500">{k.deltaLabel}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
