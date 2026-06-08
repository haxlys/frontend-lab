import {
  DollarSign,
  UserPlus,
  TrendingUp,
  Briefcase,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Card } from "../ui/Card";

type Stat = {
  label: string;
  value: string;
  delta: number;
  icon: LucideIcon;
  caption: string;
};

const stats: Stat[] = [
  {
    label: "총 매출",
    value: "₩482.6M",
    delta: 12.4,
    icon: DollarSign,
    caption: "지난 30일",
  },
  {
    label: "신규 리드",
    value: "1,284",
    delta: 8.2,
    icon: UserPlus,
    caption: "지난 30일",
  },
  {
    label: "전환율",
    value: "24.6%",
    delta: -1.8,
    icon: TrendingUp,
    caption: "지난 30일",
  },
  {
    label: "진행 중인 딜",
    value: "186",
    delta: 4.3,
    icon: Briefcase,
    caption: "₩1.2B 파이프라인",
  },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => {
        const positive = s.delta >= 0;
        return (
          <Card key={s.label} className="p-5">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-medium text-ink-500">
                  {s.label}
                </div>
                <div className="mt-2 text-2xl font-semibold tracking-tight text-ink-900">
                  {s.value}
                </div>
              </div>
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-ink-100 text-ink-600">
                <s.icon className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs">
              <span
                className={
                  positive
                    ? "inline-flex items-center gap-0.5 rounded-md bg-emerald-50 px-1.5 py-0.5 font-medium text-emerald-700"
                    : "inline-flex items-center gap-0.5 rounded-md bg-rose-50 px-1.5 py-0.5 font-medium text-rose-700"
                }
              >
                {positive ? (
                  <ArrowUpRight className="h-3 w-3" />
                ) : (
                  <ArrowDownRight className="h-3 w-3" />
                )}
                {Math.abs(s.delta)}%
              </span>
              <span className="text-ink-500">{s.caption}</span>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
