import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { Avatar } from "../ui/Avatar";
import { Icon } from "../Icon";
import { useState } from "react";

type ActivityKind = "call" | "email" | "note" | "task";

interface Todo {
  id: string;
  title: string;
  time: string;
  done: boolean;
}

interface Activity {
  id: string;
  kind: ActivityKind;
  actor: string;
  description: string;
  target: string;
  timestamp: string;
}

const todos: Todo[] = [
  { id: "t1", title: "Call Acme Industries — renewal Q4", time: "10:00", done: true },
  { id: "t2", title: "Send proposal to Northwind Co.", time: "11:30", done: false },
  { id: "t3", title: "Review contract terms — Globex", time: "14:00", done: false },
  { id: "t4", title: "Demo call with Initech", time: "16:30", done: false },
];

const activity: Activity[] = [
  {
    id: "a1",
    kind: "email",
    actor: "Sarah Chen",
    description: "replied to",
    target: "Acme Industries — Q4 renewal",
    timestamp: "12 min ago",
  },
  {
    id: "a2",
    kind: "call",
    actor: "Marcus Lee",
    description: "logged a 24m call with",
    target: "Northwind Co.",
    timestamp: "38 min ago",
  },
  {
    id: "a3",
    kind: "note",
    actor: "Priya Patel",
    description: "added a note on",
    target: "Globex deal",
    timestamp: "1h ago",
  },
  {
    id: "a4",
    kind: "task",
    actor: "You",
    description: "completed task",
    target: "Send follow-up to Initech",
    timestamp: "2h ago",
  },
  {
    id: "a5",
    kind: "email",
    actor: "David Park",
    description: "forwarded",
    target: "Pricing v3 to Stark Inc.",
    timestamp: "3h ago",
  },
  {
    id: "a6",
    kind: "call",
    actor: "Sarah Chen",
    description: "scheduled a call with",
    target: "Wayne Enterprises",
    timestamp: "Yesterday",
  },
];

const kindIcon = {
  call: Icon.Phone,
  email: Icon.Mail,
  note: Icon.Note,
  task: Icon.Check,
};

const kindTone = {
  call: "bg-accent-subtle text-accent",
  email: "bg-blue-50 text-blue-600",
  note: "bg-amber-50 text-amber-600",
  task: "bg-emerald-50 text-emerald-600",
} as const;

function TodoItem({ todo, onToggle }: { todo: Todo; onToggle: (id: string) => void }) {
  return (
    <label className="group flex items-start gap-2.5 py-2 cursor-pointer">
      <button
        onClick={() => onToggle(todo.id)}
        className={`mt-0.5 h-4 w-4 rounded border flex-shrink-0 flex items-center justify-center transition-colors ${
          todo.done
            ? "bg-accent border-accent text-white"
            : "border-border-strong group-hover:border-accent"
        }`}
      >
        {todo.done && <Icon.Check size={11} />}
      </button>
      <div className="flex-1 min-w-0">
        <div
          className={`text-[13px] leading-snug ${
            todo.done ? "text-ink-tertiary line-through" : "text-ink-primary"
          }`}
        >
          {todo.title}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-[11px] text-ink-tertiary tabular">
          <Icon.Clock size={10} />
          {todo.time}
        </div>
      </div>
    </label>
  );
}

function ActivityItem({ item }: { item: Activity }) {
  const IconComp = kindIcon[item.kind];
  return (
    <div className="flex gap-2.5 py-2.5">
      <Avatar name={item.actor} size="sm" />
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] leading-snug text-ink-primary">
          <span className="font-medium">{item.actor}</span>{" "}
          <span className="text-ink-secondary">{item.description}</span>{" "}
          <span className="font-medium">{item.target}</span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-ink-tertiary">
          <span
            className={`inline-flex items-center justify-center h-4 w-4 rounded ${kindTone[item.kind]}`}
          >
            <IconComp size={10} />
          </span>
          {item.timestamp}
        </div>
      </div>
    </div>
  );
}

export function ActivityPanel() {
  const [items, setItems] = useState(todos);
  const [tab, setTab] = useState<"today" | "activity">("today");

  const toggle = (id: string) =>
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <Card className="h-full flex flex-col">
      <CardHeader
        title="Activity"
        action={
          <div className="inline-flex items-center bg-canvas border border-border rounded p-0.5">
            {(["today", "activity"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`h-6 px-2 text-[11.5px] font-medium rounded capitalize transition-colors ${
                  tab === t
                    ? "bg-surface text-ink-primary shadow-card"
                    : "text-ink-secondary hover:text-ink-primary"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        }
      />

      <div className="flex-1 overflow-y-auto scrollbar-thin">
        {tab === "today" ? (
          <div className="px-5 pb-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-tertiary mb-1">
              Today's tasks
            </div>
            <div className="divide-y divide-border">
              {items.map((t) => (
                <TodoItem key={t.id} todo={t} onToggle={toggle} />
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-tertiary mb-1">
                Quick filters
              </div>
              <div className="flex flex-wrap gap-1.5">
                <Badge tone="accent">My deals</Badge>
                <Badge tone="neutral">Overdue</Badge>
                <Badge tone="warning">This week</Badge>
                <Badge tone="neutral">High value</Badge>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-5 pb-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.06em] text-ink-tertiary mb-1">
              Recent activity
            </div>
            <div className="divide-y divide-border">
              {activity.map((a) => (
                <ActivityItem key={a.id} item={a} />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="border-t border-border px-5 py-3">
        <Button variant="ghost" size="sm" className="w-full justify-center" trailingIcon={<Icon.ChevronRight size={12} />}>
          View all
        </Button>
      </div>
    </Card>
  );
}
