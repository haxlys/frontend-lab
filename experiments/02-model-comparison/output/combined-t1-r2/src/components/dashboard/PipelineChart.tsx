import { Card, CardHeader, CardBody } from "../ui/Card";
import { Button } from "../ui/Button";
import { Icon } from "../Icon";
import { useState } from "react";

const series = [
  { name: "Qualified", color: "#2563EB", data: [42, 48, 52, 58, 65, 72, 78, 84, 92, 96, 104, 118] },
  { name: "Proposal", color: "#7C3AED", data: [28, 30, 34, 38, 42, 45, 48, 52, 56, 60, 64, 70] },
  { name: "Negotiation", color: "#0EA5E9", data: [18, 20, 22, 24, 28, 30, 32, 36, 38, 42, 45, 48] },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function Chart() {
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const w = 720;
  const h = 240;
  const padX = 32;
  const padY = 24;
  const innerW = w - padX * 2;
  const innerH = h - padY * 2;

  const allValues = series.flatMap((s) => s.data);
  const max = Math.max(...allValues) * 1.1;
  const min = 0;
  const stepX = innerW / (months.length - 1);

  function toPoint(value: number, idx: number) {
    const x = padX + idx * stepX;
    const y = padY + innerH - ((value - min) / (max - min)) * innerH;
    return [x, y] as const;
  }

  function buildPath(data: number[]) {
    return data
      .map((v, i) => {
        const [x, y] = toPoint(v, i);
        return `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)}`;
      })
      .join(" ");
  }

  function buildArea(data: number[]) {
    const path = buildPath(data);
    const [startX] = toPoint(0, 0);
    const [endX] = toPoint(0, data.length - 1);
    return `${path} L ${endX} ${padY + innerH} L ${startX} ${padY + innerH} Z`;
  }

  // 4 evenly-spaced horizontal grid lines
  const gridLines = [0, 0.25, 0.5, 0.75, 1].map((t) => padY + innerH * t);

  return (
    <div className="relative">
      <svg
        viewBox={`0 0 ${w} ${h}`}
        className="w-full h-auto"
        onMouseLeave={() => setHoverIdx(null)}
        onMouseMove={(e) => {
          const rect = (e.currentTarget as SVGSVGElement).getBoundingClientRect();
          const x = ((e.clientX - rect.left) / rect.width) * w;
          const idx = Math.round((x - padX) / stepX);
          if (idx >= 0 && idx < months.length) setHoverIdx(idx);
        }}
      >
        {/* Grid */}
        {gridLines.map((y, i) => (
          <line
            key={i}
            x1={padX}
            x2={w - padX}
            y1={y}
            y2={y}
            stroke="#F1F5F9"
            strokeWidth="1"
          />
        ))}

        {/* Areas + lines */}
        {series.map((s) => (
          <g key={s.name}>
            <path d={buildArea(s.data)} fill={s.color} fillOpacity="0.06" />
            <path
              d={buildPath(s.data)}
              fill="none"
              stroke={s.color}
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        ))}

        {/* Hover line */}
        {hoverIdx !== null && (
          <line
            x1={padX + hoverIdx * stepX}
            x2={padX + hoverIdx * stepX}
            y1={padY}
            y2={padY + innerH}
            stroke="#CBD5E1"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
        )}

        {/* Hover dots */}
        {hoverIdx !== null &&
          series.map((s) => {
            const [x, y] = toPoint(s.data[hoverIdx], hoverIdx);
            return (
              <g key={s.name}>
                <circle cx={x} cy={y} r="4" fill="white" stroke={s.color} strokeWidth="2" />
              </g>
            );
          })}

        {/* X-axis labels (sparse) */}
        {months.map((m, i) => {
          if (i % 2 !== 0 && i !== months.length - 1) return null;
          return (
            <text
              key={m}
              x={padX + i * stepX}
              y={h - 4}
              textAnchor="middle"
              className="fill-ink-tertiary"
              style={{ fontSize: 10, fontFamily: "Inter, sans-serif" }}
            >
              {m}
            </text>
          );
        })}
      </svg>

      {hoverIdx !== null && (
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none bg-ink-primary text-white text-[11px] font-medium rounded px-2.5 py-2 shadow-lg"
          style={{ transform: `translateX(calc(-50% + ${hoverIdx * stepX - innerW / 2}px))` }}
        >
          <div className="text-ink-tertiary text-[10px] uppercase tracking-[0.06em] mb-1">
            {months[hoverIdx]}
          </div>
          {series.map((s) => (
            <div key={s.name} className="flex items-center gap-2 tabular">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-ink-tertiary flex-1">{s.name}</span>
              <span className="font-semibold">{s.data[hoverIdx]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function PipelineChart() {
  const total = series.reduce((acc, s) => acc + s.data[s.data.length - 1], 0);
  return (
    <Card className="h-full">
      <CardHeader
        title="Pipeline progress"
        subtitle={`${total} open deals across all stages`}
        action={
          <div className="flex items-center gap-1.5 text-[11.5px]">
            {series.map((s) => (
              <div key={s.name} className="flex items-center gap-1.5 text-ink-secondary">
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name}
              </div>
            ))}
          </div>
        }
      />
      <CardBody>
        <Chart />
        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
          <div className="flex gap-6">
            <div>
              <div className="text-[11px] text-ink-tertiary uppercase tracking-[0.06em]">
                Won this quarter
              </div>
              <div className="mt-0.5 text-[15px] font-semibold tabular text-ink-primary">
                $284,300
              </div>
            </div>
            <div>
              <div className="text-[11px] text-ink-tertiary uppercase tracking-[0.06em]">
                Avg deal size
              </div>
              <div className="mt-0.5 text-[15px] font-semibold tabular text-ink-primary">
                $18,420
              </div>
            </div>
            <div>
              <div className="text-[11px] text-ink-tertiary uppercase tracking-[0.06em]">
                Win rate
              </div>
              <div className="mt-0.5 text-[15px] font-semibold tabular text-ink-primary">
                31.2%
              </div>
            </div>
          </div>
          <Button variant="ghost" size="sm" trailingIcon={<Icon.ChevronRight size={12} />}>
            View report
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}
