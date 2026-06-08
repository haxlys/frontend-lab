import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Avatar } from "../ui/Avatar";
import { Badge } from "../ui/Badge";
import { Icon } from "../Icon";

interface Customer {
  id: string;
  name: string;
  contact: string;
  email: string;
  value: string;
  stage: "Lead" | "Qualified" | "Proposal" | "Negotiation" | "Won";
  owner: string;
  updated: string;
}

const stageTone = {
  Lead: "neutral",
  Qualified: "accent",
  Proposal: "warning",
  Negotiation: "warning",
  Won: "success",
} as const;

const customers: Customer[] = [
  { id: "c1", name: "Acme Industries", contact: "Sarah Chen", email: "sarah@acme.com", value: "$48,200", stage: "Negotiation", owner: "Jordan Mills", updated: "12 min ago" },
  { id: "c2", name: "Northwind Co.", contact: "Marcus Lee", email: "m.lee@northwind.io", value: "$124,500", stage: "Proposal", owner: "Priya Patel", updated: "38 min ago" },
  { id: "c3", name: "Globex Corporation", contact: "David Park", email: "david@globex.com", value: "$86,900", stage: "Qualified", owner: "Sarah Chen", updated: "1h ago" },
  { id: "c4", name: "Initech", contact: "Bill Lumbergh", email: "bill@initech.co", value: "$12,300", stage: "Lead", owner: "Marcus Lee", updated: "2h ago" },
  { id: "c5", name: "Stark Industries", contact: "Pepper Potts", email: "pepper@stark.com", value: "$284,000", stage: "Won", owner: "Jordan Mills", updated: "Yesterday" },
  { id: "c6", name: "Wayne Enterprises", contact: "Lucius Fox", email: "l.fox@we.com", value: "$156,800", stage: "Negotiation", owner: "Priya Patel", updated: "Yesterday" },
];

export function CustomersTable() {
  return (
    <Card>
      <CardHeader
        title="Recently updated customers"
        subtitle="6 customers updated in the last 24 hours"
        action={
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center bg-canvas border border-border rounded p-0.5">
              {(["All", "Mine", "Team"] as const).map((label, i) => (
                <button
                  key={label}
                  className={`h-6 px-2 text-[11.5px] font-medium rounded transition-colors ${
                    i === 0
                      ? "bg-surface text-ink-primary shadow-card"
                      : "text-ink-secondary hover:text-ink-primary"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
            <Button variant="ghost" size="sm" trailingIcon={<Icon.ChevronRight size={12} />}>
              View all
            </Button>
          </div>
        }
      />
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="border-y border-border bg-canvas/50">
              <th className="text-left font-medium text-[11px] uppercase tracking-[0.06em] text-ink-tertiary px-5 py-2.5 w-[40%]">
                Customer
              </th>
              <th className="text-left font-medium text-[11px] uppercase tracking-[0.06em] text-ink-tertiary px-3 py-2.5 hidden md:table-cell">
                Value
              </th>
              <th className="text-left font-medium text-[11px] uppercase tracking-[0.06em] text-ink-tertiary px-3 py-2.5 hidden lg:table-cell">
                Stage
              </th>
              <th className="text-left font-medium text-[11px] uppercase tracking-[0.06em] text-ink-tertiary px-3 py-2.5 hidden lg:table-cell">
                Owner
              </th>
              <th className="text-left font-medium text-[11px] uppercase tracking-[0.06em] text-ink-tertiary px-3 py-2.5 hidden md:table-cell">
                Updated
              </th>
              <th className="w-10 px-3 py-2.5" />
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-b border-border last:border-0 hover:bg-surface-hover transition-colors duration-150 cursor-pointer group"
              >
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <Avatar name={c.name} size="md" />
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-ink-primary truncate">
                        {c.name}
                      </div>
                      <div className="text-[12px] text-ink-tertiary truncate">
                        {c.contact} · {c.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3 hidden md:table-cell">
                  <span className="text-[13px] font-semibold tabular text-ink-primary">
                    {c.value}
                  </span>
                </td>
                <td className="px-3 py-3 hidden lg:table-cell">
                  <Badge tone={stageTone[c.stage]}>{c.stage}</Badge>
                </td>
                <td className="px-3 py-3 hidden lg:table-cell">
                  <div className="flex items-center gap-2">
                    <Avatar name={c.owner} size="xs" />
                    <span className="text-[12.5px] text-ink-secondary truncate">
                      {c.owner}
                    </span>
                  </div>
                </td>
                <td className="px-3 py-3 hidden md:table-cell text-[12.5px] text-ink-tertiary">
                  {c.updated}
                </td>
                <td className="px-3 py-3">
                  <button className="h-7 w-7 inline-flex items-center justify-center rounded text-ink-tertiary opacity-0 group-hover:opacity-100 hover:bg-surface hover:text-ink-primary transition-all">
                    <Icon.More size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 border-t border-border flex items-center justify-between text-[12px] text-ink-tertiary">
        <span>Showing 6 of 248 customers</span>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="sm" disabled>
            Previous
          </Button>
          <Button variant="ghost" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  );
}
