import { Card, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { pipelineData, revenueTrend } from "../../data/mock";
import { formatCurrency, formatNumber } from "../../lib/utils";
import { DotsThree, ArrowUpRight } from "@phosphor-icons/react";

const maxRevenue = Math.max(...revenueTrend.map((d) => d.value));
const totalValue = pipelineData.reduce((sum, s) => sum + s.value, 0);

export function PipelineChart() {
  return (
    <Card className="h-full">
      <CardHeader
        title="Sales pipeline"
        subtitle="Revenue (12-mo) and stage distribution"
        action={
          <div className="flex items-center gap-1.5">
            <Badge variant="muted" className="!py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              This year
            </Badge>
            <Button variant="ghost" size="sm" icon={<DotsThree size={16} weight="bold" />} className="!h-7 !w-7 !p-0">
              <span className="sr-only">More</span>
            </Button>
          </div>
        }
      />

      <div className="mb-5 flex items-end gap-2">
        <div className="text-[28px] font-semibold text-ink-900 tabular-nums leading-none tracking-tight">
          {formatCurrency(totalValue * 4.2)}
        </div>
        <div className="flex items-center gap-1 text-[12.5px] text-emerald-600 font-medium mb-1">
          <ArrowUpRight size={12} weight="bold" />
          <span className="tabular-nums">18.4%</span>
        </div>
        <span className="text-[12px] text-ink-500 mb-1">total pipeline value</span>
      </div>

      <div className="h-44 mb-6">
        <svg viewBox="0 0 600 160" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 1, 2, 3].map((i) => (
            <line
              key={i}
              x1="0"
              x2="600"
              y1={(160 / 4) * i}
              y2={(160 / 4) * i}
              stroke="#F1F5F9"
              strokeWidth="1"
            />
          ))}

          {(() => {
            const w = 600;
            const h = 160;
            const points = revenueTrend.map((d, i) => ({
              x: (i / (revenueTrend.length - 1)) * w,
              y: h - (d.value / maxRevenue) * (h - 12) - 6,
            }));
            const linePath = points
              .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
              .join(" ");
            const areaPath = `${linePath} L${w},${h} L0,${h} Z`;
            return (
              <>
                <path d={areaPath} fill="url(#lineGrad)" />
                <path d={linePath} fill="none" stroke="#2563EB" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                {points.map((p, i) =>
                  i === points.length - 1 ? (
                    <g key={i}>
                      <circle cx={p.x} cy={p.y} r="4" fill="#fff" stroke="#2563EB" strokeWidth="2" />
                      <circle cx={p.x} cy={p.y} r="1.5" fill="#2563EB" />
                    </g>
                  ) : null,
                )}
              </>
            );
          })()}
        </svg>
        <div className="flex justify-between mt-2 text-[10.5px] text-ink-400 tabular-nums">
          {revenueTrend.map((d) => (
            <span key={d.month}>{d.month}</span>
          ))}
        </div>
      </div>

      <div className="border-t border-ink-200 pt-4">
        <div className="text-[11px] font-semibold tracking-[0.08em] uppercase text-ink-500 mb-3">
          Stage breakdown
        </div>
        <div className="space-y-2.5">
          {pipelineData.map((stage) => {
            const pct = (stage.value / totalValue) * 100;
            return (
              <div key={stage.name} className="grid grid-cols-[110px_1fr_70px] items-center gap-3 text-[12.5px]">
                <div className="flex items-center gap-1.5 text-ink-700">
                  <span className="h-2 w-2 rounded-sm" style={{ backgroundColor: stage.color }} />
                  <span className="font-medium">{stage.name}</span>
                </div>
                <div className="h-1.5 bg-ink-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, backgroundColor: stage.color }}
                  />
                </div>
                <div className="text-right text-ink-600 tabular-nums">
                  {formatNumber(stage.count)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
