import { type FC } from "react";
import { Card } from "../ui";

type PipeStage = {
  label: string;
  count: number;
  value: number;
  color: string;
};

const stages: PipeStage[] = [
  { label: "리드", count: 48, value: 120000, color: "bg-accent-400" },
  { label: "연락", count: 32, value: 96000, color: "bg-accent-500" },
  { label: "미팅", count: 18, value: 72000, color: "bg-teal-500" },
  { label: "제안", count: 12, value: 58000, color: "bg-navy-500" },
  { label: "협상", count: 6, value: 42000, color: "bg-navy-600" },
];

const maxValue = Math.max(...stages.map((s) => s.value));

export const PipelineChart: FC = () => (
  <Card>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-base font-semibold text-navy-800">영업 파이프라인</h3>
      <span className="text-xs font-medium text-navy-400">Funnel View</span>
    </div>
    <div className="space-y-4">
      {stages.map((stage) => (
        <div key={stage.label}>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className={`block h-2.5 w-2.5 rounded-sm ${stage.color}`} />
              <span className="text-sm font-medium text-navy-700">{stage.label}</span>
            </div>
            <span className="text-sm text-navy-400">
              {stage.count}건 · ${(stage.value / 1000).toFixed(0)}k
            </span>
          </div>
          <div className="h-3 w-full rounded-full bg-navy-50">
            <div
              className={`h-full rounded-full transition-all duration-500 ${stage.color}`}
              style={{ width: `${(stage.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-6 grid grid-cols-2 gap-4 border-t border-navy-100 pt-4">
      <div>
        <p className="text-xs text-navy-400">전체 딜 금액</p>
        <p className="text-lg font-bold text-navy-800">$388k</p>
      </div>
      <div>
        <p className="text-xs text-navy-400">리드 → 딜 전환율</p>
        <p className="text-lg font-bold text-success-600">12.5%</p>
      </div>
    </div>
  </Card>
);
