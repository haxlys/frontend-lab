import { Badge } from "../ui/Badge";
import { Avatar } from "../ui/Avatar";
import { MoreHorizontal } from "lucide-react";

type Status = "Active" | "Trial" | "Churned" | "Lead";

interface Customer {
  company: string;
  contact: string;
  initials: string;
  email: string;
  value: string;
  status: Status;
  updated: string;
}

const customers: Customer[] = [
  {
    company: "Acme Corp",
    contact: "Alice Johnson",
    initials: "AJ",
    email: "alice@acmecorp.com",
    value: "$48,000",
    status: "Active",
    updated: "Today",
  },
  {
    company: "Initech",
    contact: "Bob Martinez",
    initials: "BM",
    email: "bob@initech.io",
    value: "$32,500",
    status: "Active",
    updated: "Yesterday",
  },
  {
    company: "Globex Inc",
    contact: "Carol Wu",
    initials: "CW",
    email: "carol@globex.com",
    value: "$18,200",
    status: "Trial",
    updated: "2 days ago",
  },
  {
    company: "Umbrella Co",
    contact: "David Kim",
    initials: "DK",
    email: "david@umbrella.co",
    value: "$9,800",
    status: "Lead",
    updated: "3 days ago",
  },
  {
    company: "Stark Industries",
    contact: "Elena Torres",
    initials: "ET",
    email: "elena@stark.com",
    value: "$55,600",
    status: "Active",
    updated: "1 week ago",
  },
];

const statusVariant: Record<Status, "success" | "accent" | "danger" | "neutral"> =
  {
    Active: "success",
    Trial: "accent",
    Churned: "danger",
    Lead: "neutral",
  };

export function CustomerTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-navy-200">
            <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
              Company
            </th>
            <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
              Contact
            </th>
            <th className="hidden pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400 md:table-cell">
              Deal Value
            </th>
            <th className="hidden pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400 sm:table-cell">
              Status
            </th>
            <th className="pb-3 pr-4 text-[11px] font-semibold uppercase tracking-wider text-navy-400">
              Updated
            </th>
            <th className="w-10 pb-3" />
          </tr>
        </thead>
        <tbody className="divide-y divide-navy-100">
          {customers.map((c) => (
            <tr
              key={c.company}
              className="transition-colors hover:bg-navy-50/70"
            >
              <td className="py-3 pr-4">
                <div className="flex items-center gap-3">
                  <Avatar initials={c.initials} size="sm" />
                  <span className="font-medium text-navy-800">
                    {c.company}
                  </span>
                </div>
              </td>
              <td className="py-3 pr-4">
                <p className="text-[13px] font-medium text-navy-700">
                  {c.contact}
                </p>
                <p className="text-[12px] text-navy-400">{c.email}</p>
              </td>
              <td className="hidden py-3 pr-4 font-medium text-navy-800 md:table-cell">
                {c.value}
              </td>
              <td className="hidden py-3 pr-4 sm:table-cell">
                <Badge variant={statusVariant[c.status]}>{c.status}</Badge>
              </td>
              <td className="py-3 pr-4 text-[12px] text-navy-400">
                {c.updated}
              </td>
              <td className="py-3">
                <button className="rounded p-1 text-navy-400 transition-colors hover:bg-navy-100 hover:text-navy-600">
                  <MoreHorizontal size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
