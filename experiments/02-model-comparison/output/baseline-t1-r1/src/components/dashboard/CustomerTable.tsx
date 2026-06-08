import { MoreHorizontal, ArrowUpDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Avatar } from "../ui/Avatar";

type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  value: string;
  stage: "Lead" | "Qualified" | "Proposal" | "Negotiation" | "Closed";
  owner: { name: string; initials: string };
  updated: string;
};

const stageTone: Record<Customer["stage"], "neutral" | "brand" | "success" | "warning" | "muted"> = {
  Lead: "muted",
  Qualified: "neutral",
  Proposal: "brand",
  Negotiation: "warning",
  Closed: "success",
};

const customers: Customer[] = [
  {
    id: "1",
    name: "Acme Corporation",
    contact: "James Park",
    email: "james@acme.com",
    value: "₩84.2M",
    stage: "Negotiation",
    owner: { name: "Sarah Kim", initials: "SK" },
    updated: "2분 전",
  },
  {
    id: "2",
    name: "Globex Industries",
    contact: "Hannah Cho",
    email: "h.cho@globex.io",
    value: "₩42.0M",
    stage: "Proposal",
    owner: { name: "Daniel Lee", initials: "DL" },
    updated: "32분 전",
  },
  {
    id: "3",
    name: "Initech",
    contact: "Bill Lumbergh",
    email: "bill@initech.co",
    value: "₩126.5M",
    stage: "Qualified",
    owner: { name: "Mina Park", initials: "MP" },
    updated: "1시간 전",
  },
  {
    id: "4",
    name: "Hooli",
    contact: "Gavin Belson",
    email: "gavin@hooli.xyz",
    value: "₩58.8M",
    stage: "Negotiation",
    owner: { name: "Jisoo Han", initials: "JH" },
    updated: "오늘 09:14",
  },
  {
    id: "5",
    name: "Pied Piper",
    contact: "Richard Hendricks",
    email: "richard@piedpiper.com",
    value: "₩21.4M",
    stage: "Lead",
    owner: { name: "Sarah Kim", initials: "SK" },
    updated: "어제",
  },
  {
    id: "6",
    name: "Stark Industries",
    contact: "Pepper Potts",
    email: "pepper@stark.co",
    value: "₩212.0M",
    stage: "Closed",
    owner: { name: "Daniel Lee", initials: "DL" },
    updated: "어제",
  },
];

const headers: { key: keyof Customer | "actions"; label: string; sortable?: boolean; className?: string }[] = [
  { key: "name", label: "고객", sortable: true },
  { key: "contact", label: "담당자" },
  { key: "value", label: "금액", sortable: true, className: "text-right" },
  { key: "stage", label: "단계" },
  { key: "owner", label: "담당 영업" },
  { key: "updated", label: "업데이트", sortable: true },
  { key: "actions", label: "" },
];

export function CustomerTable() {
  return (
    <div className="rounded-lg border border-ink-200 bg-white shadow-card">
      <div className="flex flex-col gap-3 border-b border-ink-200 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-ink-900">
            최근 업데이트된 고객
          </h2>
          <p className="mt-0.5 text-xs text-ink-500">
            가장 최근에 활동이 있었던 6개의 고객
          </p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md border border-ink-200 bg-white p-0.5 text-xs">
            {["전체", "내 딜", "팀"].map((r, i) => (
              <button
                key={r}
                className={
                  i === 0
                    ? "rounded-sm bg-ink-900 px-2.5 py-1 font-medium text-white"
                    : "rounded-sm px-2.5 py-1 text-ink-500 hover:text-ink-700"
                }
              >
                {r}
              </button>
            ))}
          </div>
          <button className="inline-flex h-7 items-center rounded-md border border-ink-200 bg-white px-2.5 text-xs font-medium text-ink-700 hover:bg-ink-50">
            필터
          </button>
          <button className="inline-flex h-7 items-center rounded-md border border-ink-200 bg-white px-2.5 text-xs font-medium text-ink-700 hover:bg-ink-50">
            내보내기
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[860px] text-sm">
          <thead>
            <tr className="border-b border-ink-200 bg-ink-50/60 text-left text-[11px] font-semibold uppercase tracking-wider text-ink-500">
              {headers.map((h) => (
                <th
                  key={h.key}
                  className={
                    "px-5 py-2.5 font-semibold " + (h.className ?? "")
                  }
                >
                  <span
                    className={
                      "inline-flex items-center gap-1 " +
                      (h.className?.includes("text-right") ? "ml-auto" : "")
                    }
                  >
                    {h.label}
                    {h.sortable && (
                      <ArrowUpDown className="h-3 w-3 text-ink-300" />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100">
            {customers.map((c) => (
              <tr
                key={c.id}
                className="group cursor-pointer transition-colors hover:bg-ink-50/70"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-md bg-ink-100 text-xs font-semibold text-ink-700">
                      {c.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-medium text-ink-900">
                        {c.name}
                      </div>
                      <div className="truncate text-xs text-ink-500">
                        {c.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-3 text-ink-700">{c.contact}</td>
                <td className="px-5 py-3 text-right font-semibold tabular-nums text-ink-900">
                  {c.value}
                </td>
                <td className="px-5 py-3">
                  <Badge tone={stageTone[c.stage]}>{c.stage}</Badge>
                </td>
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Avatar initials={c.owner.initials} className="h-6 w-6 text-[10px]" />
                    <span className="text-ink-700">{c.owner.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3 text-ink-500">{c.updated}</td>
                <td className="px-5 py-3 text-right">
                  <button className="rounded-md p-1 text-ink-400 opacity-0 transition-opacity hover:bg-ink-100 hover:text-ink-700 group-hover:opacity-100">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-ink-200 px-5 py-3 text-xs text-ink-500">
        <div>총 6 / 248 고객</div>
        <div className="flex items-center gap-1">
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 hover:bg-ink-50">
            이전
          </button>
          <button className="rounded-md bg-ink-900 px-2.5 py-1 font-medium text-white">
            1
          </button>
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 hover:bg-ink-50">
            2
          </button>
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 hover:bg-ink-50">
            3
          </button>
          <button className="rounded-md border border-ink-200 bg-white px-2.5 py-1 hover:bg-ink-50">
            다음
          </button>
        </div>
      </div>
    </div>
  );
}
