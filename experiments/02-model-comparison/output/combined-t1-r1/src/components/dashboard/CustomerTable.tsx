import { useState } from "react";
import { Card, CardHeader } from "../ui/Card";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";
import { customers } from "../../data/mock";
import { formatCurrency } from "../../lib/utils";
import { DotsThree, Funnel, ArrowSquareOut } from "@phosphor-icons/react";

const planVariant: Record<string, "brand" | "neutral" | "muted"> = {
  Enterprise: "brand",
  Business: "neutral",
  Starter: "muted",
};

const statusVariant: Record<string, "success" | "warning" | "danger" | "muted" | "brand"> = {
  Active: "success",
  Trial: "brand",
  "At risk": "warning",
  Churned: "danger",
};

type FilterKey = "all" | "active" | "trial" | "risk";

export function CustomerTable() {
  const [filter, setFilter] = useState<FilterKey>("all");

  const counts = {
    all: customers.length,
    active: customers.filter((c) => c.status === "Active").length,
    trial: customers.filter((c) => c.status === "Trial").length,
    risk: customers.filter((c) => c.status === "At risk").length,
  };

  const filtered = customers.filter((c) => {
    if (filter === "all") return true;
    if (filter === "active") return c.status === "Active";
    if (filter === "trial") return c.status === "Trial";
    if (filter === "risk") return c.status === "At risk";
    return true;
  });

  return (
    <Card padded={false}>
      <div className="p-5 pb-3">
        <CardHeader
          title="Recently updated customers"
          subtitle="Sorted by last activity"
          action={
            <div className="flex items-center gap-1.5">
              <Button variant="secondary" size="sm" icon={<Funnel size={12} weight="bold" />}>
                Filter
              </Button>
              <Button variant="secondary" size="sm">
                Export
              </Button>
              <Button variant="ghost" size="sm" icon={<DotsThree size={16} weight="bold" />} className="!h-7 !w-7 !p-0">
                <span className="sr-only">More</span>
              </Button>
            </div>
          }
        />

        <div className="flex items-center gap-1 text-[12px]">
          {([
            { key: "all", label: "All" },
            { key: "active", label: "Active" },
            { key: "trial", label: "Trial" },
            { key: "risk", label: "At risk" },
          ] as { key: FilterKey; label: string }[]).map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`h-6 px-2 rounded-md font-medium transition-colors ${
                filter === f.key
                  ? "bg-ink-900 text-white"
                  : "text-ink-500 hover:text-ink-800 hover:bg-ink-100"
              }`}
            >
              {f.label}
              <span className={`ml-1.5 tabular-nums ${filter === f.key ? "text-ink-300" : "text-ink-400"}`}>
                {counts[f.key]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-y border-ink-200 bg-ink-50/50">
              <th className="text-left font-medium text-ink-500 text-[11px] uppercase tracking-[0.06em] py-2 px-5">
                Customer
              </th>
              <th className="text-left font-medium text-ink-500 text-[11px] uppercase tracking-[0.06em] py-2 px-3 hidden md:table-cell">
                Plan
              </th>
              <th className="text-left font-medium text-ink-500 text-[11px] uppercase tracking-[0.06em] py-2 px-3">
                Status
              </th>
              <th className="text-right font-medium text-ink-500 text-[11px] uppercase tracking-[0.06em] py-2 px-3 hidden sm:table-cell">
                ARR
              </th>
              <th className="text-right font-medium text-ink-500 text-[11px] uppercase tracking-[0.06em] py-2 px-5">
                Updated
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((c) => (
              <tr
                key={c.id}
                className="border-b border-ink-100 last:border-0 hover:bg-ink-50/70 transition-colors group cursor-pointer"
              >
                <td className="py-3 px-5">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Avatar initials={c.initials} color={c.color} size="sm" />
                    <div className="min-w-0">
                      <div className="font-medium text-ink-900 truncate flex items-center gap-1">
                        {c.name}
                        <ArrowSquareOut
                          size={11}
                          className="text-ink-300 opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                        />
                      </div>
                      <div className="text-[11.5px] text-ink-500 truncate">
                        {c.contact} · {c.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-3 hidden md:table-cell">
                  <Badge variant={planVariant[c.plan]}>{c.plan}</Badge>
                </td>
                <td className="py-3 px-3">
                  <Badge variant={statusVariant[c.status]}>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${
                        c.status === "Active"
                          ? "bg-emerald-500"
                          : c.status === "Trial"
                          ? "bg-brand-500"
                          : c.status === "At risk"
                          ? "bg-amber-500"
                          : "bg-rose-500"
                      }`}
                    />
                    {c.status}
                  </Badge>
                </td>
                <td className="py-3 px-3 text-right tabular-nums text-ink-800 font-medium hidden sm:table-cell">
                  {c.value > 0 ? formatCurrency(c.value) : "—"}
                </td>
                <td className="py-3 px-5 text-right text-ink-500 text-[12px]">{c.updated}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="border-t border-ink-200 px-5 py-3 flex items-center justify-between">
        <p className="text-[12px] text-ink-500">
          Showing <span className="font-medium text-ink-800 tabular-nums">{filtered.length}</span> of{" "}
          <span className="tabular-nums">{customers.length}</span> customers
        </p>
        <div className="flex items-center gap-1">
          <Button variant="secondary" size="sm" disabled>
            Previous
          </Button>
          <Button variant="secondary" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
