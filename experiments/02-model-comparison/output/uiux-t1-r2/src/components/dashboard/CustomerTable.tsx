import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";
import { Badge, Dot } from "../ui/Badge";
import { Filter, Download, MoreHorizontal } from "../ui/icons";
import { customers } from "../../data/mock";
import { formatCurrency } from "../../lib/utils";

const statusTone: Record<string, "green" | "amber" | "rose" | "blue"> = {
  Active: "green",
  Pending: "amber",
  "At Risk": "rose",
  New: "blue",
};

const avatarTone: Record<string, "blue" | "violet" | "emerald" | "amber" | "rose" | "slate"> = {
  SK: "blue",
  MR: "emerald",
  JL: "violet",
  TP: "amber",
  RH: "rose",
  PP: "violet",
  WW: "slate",
};

export function CustomerTable() {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader
        title="Recently Updated Customers"
        description="Deals with activity in the last 7 days"
        action={
          <div className="flex items-center gap-1.5">
            <Button size="sm" variant="outline" leftIcon={<Filter size={13} />}>
              Filter
            </Button>
            <Button size="sm" variant="outline" leftIcon={<Download size={13} />}>
              <span className="hidden sm:inline">Export</span>
            </Button>
            <Button size="icon" variant="ghost" aria-label="More">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        }
        className="border-b border-slate-100"
      />

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 bg-slate-50/50">
              <th className="px-5 py-2.5 font-semibold">Customer</th>
              <th className="px-3 py-2.5 font-semibold hidden md:table-cell">Status</th>
              <th className="px-3 py-2.5 font-semibold">Value</th>
              <th className="px-3 py-2.5 font-semibold hidden lg:table-cell">Contact</th>
              <th className="px-5 py-2.5 font-semibold text-right hidden sm:table-cell">
                Updated
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-t border-slate-100 hover:bg-slate-50/70 transition-colors group cursor-pointer"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar
                      initials={c.avatar}
                      tone={avatarTone[c.avatar] ?? "slate"}
                      size="sm"
                    />
                    <div className="min-w-0">
                      <div className="text-[13.5px] font-semibold text-slate-900 truncate">
                        {c.name}
                      </div>
                      <div className="text-[12px] text-slate-500 truncate md:hidden">
                        {c.contact} · {c.status}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 hidden md:table-cell">
                  <Badge tone={statusTone[c.status]}>
                    <Dot tone={statusTone[c.status]} />
                    {c.status}
                  </Badge>
                </td>
                <td className="px-3 py-3">
                  <div className="text-[13.5px] font-semibold text-slate-900 tabular-nums">
                    {formatCurrency(c.value)}
                  </div>
                </td>
                <td className="px-3 py-3 hidden lg:table-cell">
                  <div className="text-[12.5px] text-slate-700">{c.contact}</div>
                  <div className="text-[11.5px] text-slate-500">{c.email}</div>
                </td>
                <td className="px-5 py-3 text-right text-[12px] text-slate-500 hidden sm:table-cell">
                  {c.updated}
                </td>
                <td className="pr-5 py-3">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity h-7 w-7 grid place-items-center rounded-md text-slate-500 hover:bg-slate-200/60">
                    <MoreHorizontal size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between px-5 py-3 border-t border-slate-100 text-[12.5px] text-slate-500">
        <span>Showing 7 of 248 customers</span>
        <div className="flex items-center gap-1">
          <Button size="sm" variant="ghost">
            Previous
          </Button>
          <Button size="sm" variant="ghost">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
