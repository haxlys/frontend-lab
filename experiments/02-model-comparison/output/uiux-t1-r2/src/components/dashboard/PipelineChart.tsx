import { useState } from "react";
import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { MoreHorizontal } from "../ui/icons";
import { pipelineTrend, pipelineStages } from "../../data/mock";

const ranges = ["7D", "30D", "3M", "12M"] as const;
type Range = (typeof ranges)[number];

export function PipelineChart() {
  const [range, setRange] = useState<Range>("12M");
  const data = pipelineTrend;
  const max = Math.max(...data.map((d) => d.value));

  const points = data
    .map((d, i) => {
      const x = (i / (data.length - 1)) * 100;
      const y = 100 - (d.value / max) * 100;
      return `${x},${y}`;
    })
    .join(" ");

  const areaPath = `M 0,100 L ${points} L 100,100 Z`;
  const linePath = `M ${points.replace(/ /g, " L ")}`;

  return (
    <Card className="flex flex-col">
      <CardHeader
        title="Sales Pipeline"
        description="Deal value progression over time"
        action={
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center bg-slate-100 rounded-md p-0.5">
              {ranges.map((r) => (
                <button
                  key={r}
                  onClick={() => setRange(r)}
                  className={`px-2.5 h-7 text-[12px] font-medium rounded ${
                    range === r
                      ? "bg-white text-slate-900 shadow-card"
                      : "text-slate-500 hover:text-slate-700"
                  } transition-all`}
                >
                  {r}
                </button>
              ))}
            </div>
            <Button size="icon" variant="ghost" aria-label="More">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        }
      />

      <div className="px-5 pb-5">
        <div className="flex items-baseline gap-3">
          <div className="text-[28px] font-semibold tracking-tight text-slate-900">
            $1.04M
          </div>
          <div className="text-[12.5px] font-medium text-emerald-600">+18.4%</div>
          <div className="text-[12.5px] text-slate-500">vs previous period</div>
        </div>

        <div className="mt-5 relative h-[200px]">
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 w-full h-full overflow-visible"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
              </linearGradient>
            </defs>

            {[0, 1, 2, 3, 4].map((i) => (
              <line
                key={i}
                x1="0"
                x2="100"
                y1={i * 25}
                y2={i * 25}
                stroke="#e2e8f0"
                strokeWidth="0.15"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            <path d={areaPath} fill="url(#lineGrad)" />
            <path
              d={linePath}
              fill="none"
              stroke="#2563eb"
              strokeWidth="0.6"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - (d.value / max) * 100;
              return (
                <g key={i}>
                  <circle cx={x} cy={y} r="0.9" fill="white" stroke="#2563eb" strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
                </g>
              );
            })}
          </svg>
        </div>

        <div className="mt-2 flex justify-between text-[10.5px] font-medium text-slate-400">
          {data.map((d) => (
            <span key={d.month}>{d.month}</span>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-5 gap-4">
          {pipelineStages.map((stage) => (
            <div key={stage.stage} className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className="h-2 w-2 rounded-sm shrink-0"
                  style={{ background: stage.color }}
                />
                <span className="text-[11.5px] font-medium text-slate-500 truncate">
                  {stage.stage}
                </span>
              </div>
              <div className="mt-1.5 text-[15px] font-semibold text-slate-900">
                {stage.count}
              </div>
              <div className="text-[11px] text-slate-500">${stage.value}k</div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
