const stages = [
  { label: "Prospecting", value: 24, color: "bg-navy-300" },
  { label: "Qualified", value: 18, color: "bg-accent-600" },
  { label: "Proposal", value: 12, color: "bg-accent-500" },
  { label: "Negotiation", value: 8, color: "bg-navy-600" },
  { label: "Closed Won", value: 14, color: "bg-emerald-500" },
];

export function PipelineChart() {
  const max = Math.max(...stages.map((s) => s.value));

  return (
    <div className="flex h-full flex-col">
      <div className="mb-6 flex items-center gap-4 text-[12px] text-navy-400">
        <div className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-navy-200" />
          Pipeline total
        </div>
        <span className="text-sm font-semibold text-navy-900">76 deals</span>
      </div>

      <div className="flex flex-1 items-end gap-4">
        {stages.map((stage) => {
          const height = (stage.value / max) * 100;
          return (
            <div
              key={stage.label}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <span className="text-[12px] font-semibold text-navy-700">
                {stage.value}
              </span>
              <div className="w-full rounded-t-md bg-navy-100">
                <div
                  className={`w-full rounded-t-md transition-all duration-500 ${stage.color}`}
                  style={{ height: `${Math.max(height * 3.2, 8)}px` }}
                />
              </div>
              <span className="text-center text-[11px] font-medium leading-tight text-navy-500">
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
