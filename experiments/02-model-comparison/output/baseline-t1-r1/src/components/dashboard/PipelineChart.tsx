const data = [
  { month: "1월", value: 32, deals: 22 },
  { month: "2월", value: 41, deals: 28 },
  { month: "3월", value: 38, deals: 26 },
  { month: "4월", value: 52, deals: 34 },
  { month: "5월", value: 47, deals: 31 },
  { month: "6월", value: 61, deals: 40 },
  { month: "7월", value: 58, deals: 38 },
  { month: "8월", value: 72, deals: 46 },
  { month: "9월", value: 68, deals: 44 },
  { month: "10월", value: 81, deals: 52 },
  { month: "11월", value: 79, deals: 50 },
  { month: "12월", value: 94, deals: 61 },
];

const W = 720;
const H = 240;
const PAD = { top: 20, right: 16, bottom: 28, left: 36 };
const innerW = W - PAD.left - PAD.right;
const innerH = H - PAD.top - PAD.bottom;
const maxY = 100;
const stepX = innerW / (data.length - 1);

const points = data.map((d, i) => ({
  x: PAD.left + i * stepX,
  y: PAD.top + innerH - (d.value / maxY) * innerH,
  raw: d,
}));

const linePath = points
  .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
  .join(" ");

const areaPath =
  `M ${points[0].x} ${PAD.top + innerH} ` +
  points.map((p) => `L ${p.x} ${p.y}`).join(" ") +
  ` L ${points[points.length - 1].x} ${PAD.top + innerH} Z`;

const yTicks = [0, 25, 50, 75, 100];

export function PipelineChart() {
  return (
    <div className="rounded-lg border border-ink-200 bg-white p-5 shadow-card">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-base font-semibold text-ink-900">
            영업 파이프라인 진행 현황
          </h2>
          <p className="mt-0.5 text-xs text-ink-500">
            월별 매출 진행액과 성사된 딜 수 추이
          </p>
        </div>
        <div className="flex items-center gap-1 rounded-md border border-ink-200 bg-white p-0.5 text-xs">
          {["7일", "30일", "분기", "연간"].map((r, i) => (
            <button
              key={r}
              className={
                i === 1
                  ? "rounded-sm bg-ink-100 px-2.5 py-1 font-medium text-ink-900"
                  : "rounded-sm px-2.5 py-1 text-ink-500 hover:text-ink-700"
              }
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-4 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-brand-600" />
          <span className="text-ink-600">매출 (₩M)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-ink-300" />
          <span className="text-ink-600">성사 딜</span>
        </div>
        <div className="ml-auto text-ink-500">
          평균 <span className="font-semibold text-ink-900">₩60.3M</span> / 월
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-64 w-full min-w-[640px]"
          role="img"
        >
          <defs>
            <linearGradient id="fillBrand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* grid */}
          {yTicks.map((t) => {
            const y = PAD.top + innerH - (t / maxY) * innerH;
            return (
              <g key={t}>
                <line
                  x1={PAD.left}
                  x2={W - PAD.right}
                  y1={y}
                  y2={y}
                  stroke="#F1F5F9"
                  strokeDasharray={t === 0 ? "0" : "3 3"}
                />
                <text
                  x={PAD.left - 8}
                  y={y + 3}
                  textAnchor="end"
                  fontSize="10"
                  fill="#94A3B8"
                >
                  {t}
                </text>
              </g>
            );
          })}

          {/* area */}
          <path d={areaPath} fill="url(#fillBrand)" />
          {/* line */}
          <path
            d={linePath}
            fill="none"
            stroke="#2563EB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* points */}
          {points.map((p, i) => (
            <g key={i}>
              <circle
                cx={p.x}
                cy={p.y}
                r={i === points.length - 1 ? 4 : 0}
                fill="#fff"
                stroke="#2563EB"
                strokeWidth="2"
              />
            </g>
          ))}

          {/* x labels */}
          {data.map((d, i) => (
            <text
              key={d.month}
              x={PAD.left + i * stepX}
              y={H - 8}
              textAnchor="middle"
              fontSize="10"
              fill="#94A3B8"
            >
              {d.month}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
