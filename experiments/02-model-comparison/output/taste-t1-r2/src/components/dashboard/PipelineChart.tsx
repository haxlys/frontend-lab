import { useState } from "react";
import { DotsThree, ArrowUpRight } from "phosphor-react";
import { cn } from "../../lib/utils";

type Stage = {
  key: string;
  label: string;
  count: number;
  value: number;
};

const stages: Stage[] = [
  { key: "lead", label: "Lead", count: 142, value: 184000 },
  { key: "qualified", label: "Qualified", count: 98, value: 312000 },
  { key: "proposal", label: "Proposal", count: 64, value: 421000 },
  { key: "negotiation", label: "Negotiation", count: 37, value: 286000 },
  { key: "won", label: "Closed Won", count: 21, value: 195000 },
];

const monthly = [
  { m: "Jan", won: 12, lost: 6 },
  { m: "Feb", won: 14, lost: 5 },
  { m: "Mar", won: 18, lost: 9 },
  { m: "Apr", won: 16, lost: 7 },
  { m: "May", won: 22, lost: 8 },
  { m: "Jun", won: 25, lost: 11 },
  { m: "Jul", won: 21, lost: 9 },
  { m: "Aug", won: 28, lost: 10 },
  { m: "Sep", won: 31, lost: 12 },
  { m: "Oct", won: 27, lost: 11 },
  { m: "Nov", won: 33, lost: 13 },
  { m: "Dec", won: 36, lost: 14 },
];

const formatCompact = (n: number) =>
  n >= 1000 ? `$${(n / 1000).toFixed(0)}k` : `$${n}`;

export function PipelineChart() {
  const [view, setView] = useState<"pipeline" | "trend">("pipeline");
  const maxValue = Math.max(...stages.map((s) => s.value));
  const maxBar = Math.max(...monthly.map((m) => m.won + m.lost));

  return (
    <section className="bg-white border border-ink-200 rounded-lg shadow-card">
      <header className="flex items-start justify-between gap-3 px-5 pt-5">
        <div>
          <h2 className="text-sm font-semibold text-ink-900">
            Sales pipeline
          </h2>
          <p className="text-2xs text-ink-500 mt-0.5">
            Deal volume and value across active stages
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center p-0.5 rounded-md border border-ink-200 bg-ink-50">
            {(["pipeline", "trend"] as const).map((v) => (
              <button
                key={v}
                type="button"
                onClick={() => setView(v)}
                className={cn(
                  "h-7 px-2.5 text-xs font-medium rounded-[5px] transition-colors capitalize",
                  view === v
                    ? "bg-white text-ink-900 shadow-card"
                    : "text-ink-500 hover:text-ink-800",
                )}
              >
                {v}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="More"
            className="w-7 h-7 inline-flex items-center justify-center rounded-md text-ink-500 hover:bg-ink-50 hover:text-ink-800 transition-colors"
          >
            <DotsThree className="w-4 h-4" weight="bold" />
          </button>
        </div>
      </header>

      <div className="px-5 pt-5 pb-3">
        <div className="flex items-end gap-6">
          <div>
            <div className="text-2xs text-ink-500 uppercase tracking-wider">
              Pipeline value
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl font-semibold tracking-tight text-ink-900 tabular-nums">
                $1.4M
              </span>
              <span className="inline-flex items-center gap-0.5 text-xs font-medium text-emerald-600 tabular-nums">
                <ArrowUpRight className="w-3 h-3" weight="bold" />
                +12.4%
              </span>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-ink-200" />
          <div className="hidden sm:block">
            <div className="text-2xs text-ink-500 uppercase tracking-wider">
              Weighted forecast
            </div>
            <div className="text-2xl font-semibold tracking-tight text-ink-900 tabular-nums mt-1">
              $612k
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5">
        {view === "pipeline" ? (
          <div className="space-y-3.5">
            {stages.map((s) => {
              const widthPct = (s.value / maxValue) * 100;
              return (
                <div key={s.key} className="grid grid-cols-[110px_1fr_80px] items-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-ink-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                    {s.label}
                  </div>
                  <div className="relative h-7 rounded-md bg-ink-50 overflow-hidden">
                    <div
                      className="absolute inset-y-0 left-0 rounded-md bg-brand-500/90 transition-[width] duration-500"
                      style={{ width: `${widthPct}%` }}
                    />
                    <div
                      className="absolute inset-y-0 left-0 flex items-center pl-2 text-2xs font-medium text-white tabular-nums"
                      style={{ width: `${widthPct}%` }}
                    >
                      {s.count}
                    </div>
                  </div>
                  <div className="text-right text-xs font-medium text-ink-900 tabular-nums">
                    {formatCompact(s.value)}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-4 mb-2 text-2xs text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-brand-500" />
                Won
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-sm bg-ink-200" />
                Lost
              </span>
            </div>
            <div className="h-44 flex items-end gap-2 border-b border-ink-200">
              {monthly.map((m) => {
                const wonH = (m.won / maxBar) * 100;
                const lostH = (m.lost / maxBar) * 100;
                return (
                  <div
                    key={m.m}
                    className="flex-1 flex flex-col items-stretch justify-end gap-0.5 group"
                  >
                    <div className="flex flex-col items-stretch justify-end h-full">
                      <div
                        className="rounded-t-sm bg-ink-200 group-hover:bg-ink-300 transition-colors"
                        style={{ height: `${lostH}%` }}
                      />
                      <div
                        className="rounded-t-sm bg-brand-500 group-hover:bg-brand-600 transition-colors"
                        style={{ height: `${wonH}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-2 grid grid-cols-12 text-2xs text-ink-500">
              {monthly.map((m) => (
                <div key={m.m} className="text-center">
                  {m.m}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
