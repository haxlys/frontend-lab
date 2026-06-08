import { cn } from "../../lib/utils";
import { Card } from "../ui/Card";
import { Badge } from "../ui/Badge";
import type { Customer } from "../../data/mock";

const statusLabel: Record<Customer["status"], { label: string; variant: "active" | "lead" | "negotiation" | "closed" }> = {
  active: { label: "활성", variant: "active" },
  lead: { label: "리드", variant: "lead" },
  negotiation: { label: "협상 중", variant: "negotiation" },
  closed: { label: "완료", variant: "closed" },
};

export function CustomerTable({ customers }: { customers: Customer[] }) {
  return (
    <Card padding="sm" className="overflow-hidden">
      <div className="mb-4 flex items-center justify-between px-1 pt-1">
        <h3 className="text-sm font-semibold text-slate-800">최근 업데이트된 고객</h3>
        <button className="text-xs font-medium text-royal-600 hover:text-royal-500">
          전체 보기
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="py-2.5 pr-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                고객명
              </th>
              <th className="hidden py-2.5 pr-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:table-cell">
                회사
              </th>
              <th className="hidden py-2.5 pr-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400 md:table-cell">
                이메일
              </th>
              <th className="py-2.5 pr-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                상태
              </th>
              <th className="py-2.5 pr-3 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                예상 금액
              </th>
              <th className="hidden py-2.5 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-400 sm:table-cell">
                업데이트
              </th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c, i) => (
              <tr
                key={c.id}
                className={cn(
                  "transition-colors hover:bg-slate-50",
                  i !== customers.length - 1 && "border-b border-slate-50",
                )}
              >
                <td className="py-3 pr-3">
                  <span className="font-medium text-slate-800">{c.name}</span>
                </td>
                <td className="hidden py-3 pr-3 text-slate-500 sm:table-cell">{c.company}</td>
                <td className="hidden py-3 pr-3 text-slate-500 md:table-cell">{c.email}</td>
                <td className="py-3 pr-3">
                  <Badge variant={statusLabel[c.status].variant}>
                    {statusLabel[c.status].label}
                  </Badge>
                </td>
                <td className="py-3 pr-3 text-right">
                  <span className="font-medium tabular-nums text-slate-800">{c.value}</span>
                </td>
                <td className="hidden py-3 text-right text-slate-400 sm:table-cell">{c.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}
