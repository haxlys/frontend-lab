import { pipeline } from "../data";

export function PipelineChart() {
  const maxValue = Math.max(...pipeline.map((s) => s.value));

  return (
    <div className="stat-card">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-slate-800">Pipeline Progress</h3>
        <span className="text-xs text-slate-400 font-medium">This quarter</span>
      </div>

      <div className="space-y-3">
        {pipeline.map((stage) => (
          <div key={stage.name} className="space-y-1.5">
            <div className="flex items-center justify-between text-xs">
              <span className="font-medium text-slate-600">{stage.name}</span>
              <span className="font-mono text-slate-500 tabular-nums">{stage.value}</span>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${(stage.value / maxValue) * 100}%`,
                  backgroundColor: stage.color,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>Total pipeline: {pipeline.reduce((sum, s) => sum + s.value, 0).toLocaleString()} deals</span>
        <span>Win rate: 34%</span>
      </div>
    </div>
  );
}
