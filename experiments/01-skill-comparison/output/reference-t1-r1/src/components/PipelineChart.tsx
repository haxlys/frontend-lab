const stages = [
  { label: "Lead In", value: 24, total: 42, color: "#94a3b8" },
  { label: "Qualified", value: 18, total: 42, color: "#60a5fa" },
  { label: "Proposal", value: 12, total: 42, color: "#2563eb" },
  { label: "Negotiation", value: 8, total: 42, color: "#7c3aed" },
  { label: "Closed Won", value: 6, total: 42, color: "#059669" },
];

export default function PipelineChart() {
  const maxValue = Math.max(...stages.map((s) => s.value));

  return (
    <div className="rounded-lg border border-[#e2e8f0] bg-white p-5 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-[#0f172a]">Pipeline Progress</h3>
        <span className="rounded-md bg-[#f1f5f9] px-2.5 py-1 text-xs font-medium text-[#64748b]">This Quarter</span>
      </div>

      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.label} className="flex items-center gap-3">
            <span className="w-20 shrink-0 text-xs font-medium text-[#475569]">{stage.label}</span>
            <div className="flex-1">
              <div className="h-6 w-full overflow-hidden rounded bg-[#f1f5f9]">
                <div
                  className="h-full rounded transition-all duration-500 ease-out"
                  style={{
                    width: `${(stage.value / maxValue) * 100}%`,
                    backgroundColor: stage.color,
                  }}
                />
              </div>
            </div>
            <span className="w-10 text-right text-sm font-semibold text-[#0f172a]">{stage.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-5 gap-2 border-t border-[#e2e8f0] pt-4">
        {stages.map((stage) => (
          <div key={stage.label} className="text-center">
            <p className="text-lg font-bold text-[#0f172a]">{stage.value}</p>
            <p className="text-[10px] font-medium text-[#94a3b8]">{stage.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
