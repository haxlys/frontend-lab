import { useMemo, useState } from "react";
import {
  MagnifyingGlass,
  DotsThree,
  ArrowUp,
  ArrowDown,
  CaretRight,
} from "phosphor-react";
import { cn } from "../../lib/utils";

type Customer = {
  id: string;
  name: string;
  contact: string;
  email: string;
  status: "active" | "pending" | "at-risk" | "churned";
  owner: { initials: string; tone: "brand" | "amber" | "emerald" | "rose" };
  value: number;
  updated: string;
};

const customers: Customer[] = [
  {
    id: "1",
    name: "Northwind Co.",
    contact: "Hanna M.",
    email: "hanna@northwind.io",
    status: "active",
    owner: { initials: "SO", tone: "brand" },
    value: 48000,
    updated: "12 min ago",
  },
  {
    id: "2",
    name: "Aurora Systems",
    contact: "Marcus T.",
    email: "marcus@aurora.systems",
    status: "pending",
    owner: { initials: "YP", tone: "amber" },
    value: 32000,
    updated: "1 h ago",
  },
  {
    id: "3",
    name: "Lighthouse Labs",
    contact: "Priya R.",
    email: "priya@lighthouselabs.co",
    status: "active",
    owner: { initials: "SK", tone: "emerald" },
    value: 96500,
    updated: "2 h ago",
  },
  {
    id: "4",
    name: "Helio Studio",
    contact: "Jonas K.",
    email: "jonas@helio.studio",
    status: "at-risk",
    owner: { initials: "MT", tone: "rose" },
    value: 18500,
    updated: "4 h ago",
  },
  {
    id: "5",
    name: "Cobalt Logistics",
    contact: "Renée A.",
    email: "renee@cobaltlogi.com",
    status: "active",
    owner: { initials: "SO", tone: "brand" },
    value: 71200,
    updated: "Yesterday",
  },
  {
    id: "6",
    name: "Quill & Quartz",
    contact: "Theo B.",
    email: "theo@quillq.studio",
    status: "pending",
    owner: { initials: "YP", tone: "amber" },
    value: 12400,
    updated: "Yesterday",
  },
  {
    id: "7",
    name: "Meridian Health",
    contact: "Aliya N.",
    email: "aliya@meridian.health",
    status: "churned",
    owner: { initials: "SK", tone: "emerald" },
    value: 0,
    updated: "2 days ago",
  },
];

const ownerTone: Record<Customer["owner"]["tone"], string> = {
  brand: "bg-brand-50 text-brand-700",
  amber: "bg-amber-50 text-amber-700",
  emerald: "bg-emerald-50 text-emerald-700",
  rose: "bg-rose-50 text-rose-700",
};

const statusStyle: Record<Customer["status"], string> = {
  active: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  pending: "bg-amber-50 text-amber-700 ring-amber-200",
  "at-risk": "bg-rose-50 text-rose-700 ring-rose-200",
  churned: "bg-ink-100 text-ink-600 ring-ink-200",
};

const statusLabel: Record<Customer["status"], string> = {
  active: "Active",
  pending: "Pending",
  "at-risk": "At risk",
  churned: "Churned",
};

type SortKey = "name" | "status" | "value" | "updated";

export function RecentCustomers() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<{ key: SortKey; dir: "asc" | "desc" }>({
    key: "updated",
    dir: "desc",
  });

  const rows = useMemo(() => {
    const filtered = customers.filter(
      (c) =>
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.contact.toLowerCase().includes(query.toLowerCase()) ||
        c.email.toLowerCase().includes(query.toLowerCase()),
    );
    const sorted = [...filtered].sort((a, b) => {
      const av = a[sort.key];
      const bv = b[sort.key];
      if (typeof av === "number" && typeof bv === "number") {
        return sort.dir === "asc" ? av - bv : bv - av;
      }
      return sort.dir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return sorted;
  }, [query, sort]);

  const onSort = (key: SortKey) => {
    setSort((s) =>
      s.key === key ? { key, dir: s.dir === "asc" ? "desc" : "asc" } : { key, dir: "asc" },
    );
  };

  const SortHead = ({ k, children, align = "left" }: { k: SortKey; children: React.ReactNode; align?: "left" | "right" }) => (
    <th
      scope="col"
      className={cn(
        "py-2.5 text-2xs font-medium uppercase tracking-wider text-ink-500",
        align === "right" ? "text-right" : "text-left",
      )}
    >
      <button
        type="button"
        onClick={() => onSort(k)}
        className={cn(
          "inline-flex items-center gap-1 hover:text-ink-800 transition-colors",
          align === "right" && "ml-auto",
        )}
      >
        {children}
        {sort.key === k ? (
          sort.dir === "asc" ? (
            <ArrowUp className="w-2.5 h-2.5" weight="bold" />
          ) : (
            <ArrowDown className="w-2.5 h-2.5" weight="bold" />
          )
        ) : (
          <span className="w-2.5 h-2.5" />
        )}
      </button>
    </th>
  );

  return (
    <section className="bg-white border border-ink-200 rounded-lg shadow-card">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 pt-5">
        <div>
          <h2 className="text-sm font-semibold text-ink-900">
            Recently updated customers
          </h2>
          <p className="text-2xs text-ink-500 mt-0.5">
            Showing {rows.length} of {customers.length} accounts
          </p>
        </div>
        <div className="flex items-center gap-2">
          <label className="relative flex items-center h-8 px-2.5 rounded-md border border-ink-200 bg-white hover:border-ink-300 focus-within:border-ink-400 transition-colors w-full sm:w-56">
            <MagnifyingGlass className="w-3.5 h-3.5 text-ink-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Filter customers…"
              className="ml-1.5 flex-1 bg-transparent text-xs placeholder:text-ink-400 focus:outline-none"
            />
          </label>
          <button
            type="button"
            className="hidden sm:inline-flex items-center gap-1 h-8 px-2.5 text-xs font-medium text-ink-700 border border-ink-200 rounded-md hover:bg-ink-50 transition-colors"
          >
            View all
            <CaretRight className="w-3 h-3" weight="bold" />
          </button>
        </div>
      </header>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-y border-ink-200 bg-ink-50/60">
              <SortHead k="name">Customer</SortHead>
              <th scope="col" className="py-2.5 px-4 text-left text-2xs font-medium uppercase tracking-wider text-ink-500">
                Owner
              </th>
              <SortHead k="status">Status</SortHead>
              <SortHead k="value" align="right">
                Value
              </SortHead>
              <SortHead k="updated" align="right">
                Updated
              </SortHead>
              <th scope="col" className="py-2.5 pl-4 pr-5 w-10" />
            </tr>
          </thead>
          <tbody>
            {rows.map((c) => (
              <tr
                key={c.id}
                className="border-b border-ink-100 last:border-0 hover:bg-ink-50/70 transition-colors group"
              >
                <td className="py-3 pl-5 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-ink-100 text-ink-700 text-xs font-semibold flex items-center justify-center shrink-0">
                      {c.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-medium text-ink-900 truncate">
                        {c.name}
                      </div>
                      <div className="text-2xs text-ink-500 truncate">
                        {c.contact} · {c.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={cn(
                      "inline-flex items-center justify-center w-7 h-7 rounded-full text-2xs font-semibold",
                      ownerTone[c.owner.tone],
                    )}
                  >
                    {c.owner.initials}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={cn(
                      "inline-flex items-center gap-1.5 h-5 px-2 rounded-full text-2xs font-medium ring-1",
                      statusStyle[c.status],
                    )}
                  >
                    <span
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        c.status === "active" && "bg-emerald-500",
                        c.status === "pending" && "bg-amber-500",
                        c.status === "at-risk" && "bg-rose-500",
                        c.status === "churned" && "bg-ink-400",
                      )}
                    />
                    {statusLabel[c.status]}
                  </span>
                </td>
                <td className="py-3 px-4 text-right tabular-nums">
                  <span className="text-xs font-medium text-ink-900">
                    {c.value ? `$${c.value.toLocaleString()}` : "—"}
                  </span>
                </td>
                <td className="py-3 px-4 text-right text-2xs text-ink-500">
                  {c.updated}
                </td>
                <td className="py-3 pl-4 pr-5 text-right">
                  <button
                    type="button"
                    aria-label="Row actions"
                    className="w-7 h-7 inline-flex items-center justify-center rounded-md text-ink-400 opacity-0 group-hover:opacity-100 hover:bg-ink-100 hover:text-ink-800 transition-all"
                  >
                    <DotsThree className="w-4 h-4" weight="bold" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
