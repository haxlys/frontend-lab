import type { PipelineStage } from '../data/mock';

interface PipelineChartProps {
  data: PipelineStage[];
}

const stageColors = ['bg-accent-600', 'bg-accent-500', 'bg-accent-400', 'bg-navy-400', 'bg-navy-300'];

export default function PipelineChart({ data }: PipelineChartProps) {
  const maxValue = Math.max(...data.map((d) => d.value));

  return (
    <div className="bg-white rounded-md border border-navy-200 shadow-[var(--shadow-card)]">
      <div className="px-5 py-4 border-b border-navy-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-navy-800">영업 파이프라인 진행 현황</h3>
        <span className="text-xs text-navy-400">이번 달 기준</span>
      </div>
      <div className="p-5">
        <div className="flex items-end gap-2 h-48">
          {data.map((stage, i) => (
            <div key={stage.stage} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-semibold text-navy-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  ₩{stage.value}M
                </span>
                <span className="text-[10px] text-navy-400">{stage.count}건</span>
              </div>
              <div
                className={`w-full ${stageColors[i]} rounded-t-sm transition-all duration-300 group-hover:brightness-110`}
                style={{ height: `${(stage.value / maxValue) * 80}%` }}
              />
              <span className="text-[11px] font-medium text-navy-500 text-center leading-tight mt-1">
                {stage.stage}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="px-5 py-3 border-t border-navy-100 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-600" />
          <span className="text-[11px] text-navy-500">초기 단계</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-accent-400" />
          <span className="text-[11px] text-navy-500">중간 단계</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-navy-300" />
          <span className="text-[11px] text-navy-500">후반 단계</span>
        </div>
      </div>
    </div>
  );
}
