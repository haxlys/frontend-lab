import { type FC } from "react";
import { Card, Badge, Avatar } from "../ui";

type Customer = {
  id: string;
  name: string;
  company: string;
  email: string;
  stage: string;
  value: string;
  lastContact: string;
};

const data: Customer[] = [
  { id: "1", name: "Sarah Chen", company: "Acme Inc", email: "sarah@acme.com", stage: "협상", value: "$48,000", lastContact: "1시간 전" },
  { id: "2", name: "James Park", company: "NeoSoft", email: "james@neosoft.io", stage: "제안", value: "$32,500", lastContact: "3시간 전" },
  { id: "3", name: "Maria Gomez", company: "GlobalTech", email: "maria@globaltech.com", stage: "미팅", value: "$28,000", lastContact: "1일 전" },
  { id: "4", name: "David Kim", company: "StartLab", email: "david@startlab.kr", stage: "연락", value: "$15,200", lastContact: "2일 전" },
  { id: "5", name: "Anna Müller", company: "CloudX GmbH", email: "anna@cloudx.de", stage: "리드", value: "$8,900", lastContact: "3일 전" },
];

const stageColors: Record<string, "success" | "accent" | "teal" | "warning" | "default"> = {
  협상: "success",
  제안: "accent",
  미팅: "teal",
  연락: "warning",
  리드: "default",
};

export const CustomerTable: FC = () => (
  <Card padded={false}>
    <div className="flex items-center justify-between px-6 pt-5 pb-3">
      <h3 className="text-base font-semibold text-navy-800">최근 업데이트된 고객</h3>
      <button className="text-sm font-medium text-accent-600 hover:underline">
        전체 보기 →
      </button>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-navy-100">
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-navy-400">이름</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-navy-400 hidden sm:table-cell">이메일</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-navy-400">단계</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-navy-400">금액</th>
            <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider text-navy-400 hidden md:table-cell">마지막 연락</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-navy-50 transition-colors hover:bg-navy-50/60"
            >
              <td className="px-6 py-3.5">
                <div className="flex items-center gap-3">
                  <Avatar initials={row.name.split(" ").map(n => n[0]).join("")} size="sm" />
                  <div>
                    <p className="text-sm font-medium text-navy-800">{row.name}</p>
                    <p className="text-xs text-navy-400">{row.company}</p>
                  </div>
                </div>
              </td>
              <td className="px-6 py-3.5 hidden sm:table-cell">
                <span className="text-sm text-navy-500">{row.email}</span>
              </td>
              <td className="px-6 py-3.5">
                <Badge variant={stageColors[row.stage] ?? "default"}>{row.stage}</Badge>
              </td>
              <td className="px-6 py-3.5 text-right">
                <span className="text-sm font-medium text-navy-700">{row.value}</span>
              </td>
              <td className="px-6 py-3.5 text-right hidden md:table-cell">
                <span className="text-sm text-navy-400">{row.lastContact}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
