import { type FC } from "react";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";

interface Stage {
  name: string;
  count: number;
  value: string;
  pct: number;
}

const stages: Stage[] = [
  { name: "리드", count: 142, value: "₩4.2억", pct: 72 },
  { name: "미팅", count: 86, value: "₩2.8억", pct: 55 },
  { name: "제안", count: 47, value: "₩1.9억", pct: 40 },
  { name: "협상", count: 28, value: "₩1.4억", pct: 22 },
  { name: "계약", count: 12, value: "₩0.6억", pct: 10 },
];

export const PipelineChart: FC = () => (
  <Card>
    <div className="flex items-center justify-between mb-5">
      <h3 className="text-[15px] font-semibold text-navy-800">영업 파이프라인</h3>
      <Badge label="2026년 6월" variant="neutral" />
    </div>

    <div className="space-y-4">
      {stages.map((stage) => (
        <div key={stage.name} className="group">
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-medium text-navy-700">{stage.name}</span>
              <span className="text-[12px] text-navy-400">{stage.count}건</span>
            </div>
            <span className="text-[13px] font-medium text-navy-600">{stage.value}</span>
          </div>
          <div className="relative h-2.5 bg-navy-100 rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent-500 transition-all duration-500"
              style={{ width: `${stage.pct}%` }}
            />
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ width: `${stage.pct}%` }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="mt-5 pt-4 border-t border-navy-100 flex items-center justify-between text-[12px] text-navy-400">
      <span>총 315건 / ₩11.1억</span>
      <span>평균 진행률 39.8%</span>
    </div>
  </Card>
);
