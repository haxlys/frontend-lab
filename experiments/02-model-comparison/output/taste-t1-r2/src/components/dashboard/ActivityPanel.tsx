import { useState } from "react";
import {
  Phone,
  Envelope,
  CheckCircle,
  ChatCircle,
  DotsThree,
} from "phosphor-react";
import { cn } from "../../lib/utils";

type Todo = {
  id: string;
  title: string;
  due: string;
  priority: "high" | "medium" | "low";
  customer: string;
};

type Activity = {
  id: string;
  type: "call" | "email" | "note" | "task";
  actor: string;
  text: string;
  target: string;
  time: string;
};

const todos: Todo[] = [
  {
    id: "1",
    title: "Send proposal to Northwind Co.",
    due: "Today · 14:00",
    priority: "high",
    customer: "Northwind Co.",
  },
  {
    id: "2",
    title: "Follow up with Lighthouse Labs",
    due: "Today · 16:30",
    priority: "medium",
    customer: "Lighthouse Labs",
  },
  {
    id: "3",
    title: "Review contract redlines from Aurora",
    due: "Tomorrow · 10:00",
    priority: "high",
    customer: "Aurora Systems",
  },
  {
    id: "4",
    title: "Schedule discovery call with Helio",
    due: "Thu · 11:00",
    priority: "low",
    customer: "Helio Studio",
  },
  {
    id: "5",
    title: "Update CRM tags for Q2 cohort",
    due: "Fri · 17:00",
    priority: "low",
    customer: "—",
  },
];

const activity: Activity[] = [
  {
    id: "a1",
    type: "call",
    actor: "You",
    text: "logged a 32 min call with",
    target: "Lighthouse Labs",
    time: "12 min ago",
  },
  {
    id: "a2",
    type: "email",
    actor: "Marcus T.",
    text: "replied to your proposal email ·",
    target: "Aurora Systems",
    time: "38 min ago",
  },
  {
    id: "a3",
    type: "task",
    actor: "Yuna P.",
    text: "marked \"Send NDA\" complete for",
    target: "Helio Studio",
    time: "1 h ago",
  },
  {
    id: "a4",
    type: "note",
    actor: "Sora K.",
    text: "added a note on",
    target: "Northwind Co.",
    time: "2 h ago",
  },
  {
    id: "a5",
    type: "call",
    actor: "You",
    text: "missed call from",
    target: "Cobalt Logistics",
    time: "3 h ago",
  },
];

const typeIcon = {
  call: Phone,
  email: Envelope,
  task: CheckCircle,
  note: ChatCircle,
} as const;

const typeColor: Record<Activity["type"], string> = {
  call: "bg-brand-50 text-brand-600",
  email: "bg-amber-50 text-amber-600",
  task: "bg-emerald-50 text-emerald-600",
  note: "bg-ink-100 text-ink-600",
};

const priorityStyle: Record<Todo["priority"], string> = {
  high: "bg-rose-50 text-rose-700 ring-rose-200",
  medium: "bg-amber-50 text-amber-700 ring-amber-200",
  low: "bg-ink-100 text-ink-600 ring-ink-200",
};

const priorityDot: Record<Todo["priority"], string> = {
  high: "bg-rose-500",
  medium: "bg-amber-500",
  low: "bg-ink-400",
};

export function ActivityPanel() {
  const [done, setDone] = useState<Set<string>>(new Set(["3"]));
  const [tab, setTab] = useState<"todo" | "activity">("todo");

  const toggle = (id: string) => {
    setDone((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <section className="bg-white border border-ink-200 rounded-lg shadow-card flex flex-col">
      <header className="flex items-center justify-between px-5 pt-5">
        <div className="inline-flex items-center p-0.5 rounded-md border border-ink-200 bg-ink-50">
          {(["todo", "activity"] as const).map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTab(t)}
              className={cn(
                "h-7 px-2.5 text-xs font-medium rounded-[5px] transition-colors capitalize",
                tab === t
                  ? "bg-white text-ink-900 shadow-card"
                  : "text-ink-500 hover:text-ink-800",
              )}
            >
              {t === "todo" ? "Today" : "Activity"}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label="More"
          className="w-7 h-7 inline-flex items-center justify-center rounded-md text-ink-500 hover:bg-ink-50 hover:text-ink-800 transition-colors"
        >
          <DotsThree className="w-4 h-4" weight="bold" />
        </button>
      </header>

      <div className="px-5 pt-3">
        <h2 className="text-sm font-semibold text-ink-900">
          {tab === "todo" ? "Today's tasks" : "Recent activity"}
        </h2>
        <p className="text-2xs text-ink-500 mt-0.5">
          {tab === "todo"
            ? `${todos.length - done.size} open · ${done.size} completed`
            : "Last 24 hours across your accounts"}
        </p>
      </div>

      <div className="flex-1 px-3 py-3 overflow-y-auto">
        {tab === "todo" ? (
          <ul className="space-y-1">
            {todos.map((t) => {
              const isDone = done.has(t.id);
              return (
                <li key={t.id}>
                  <button
                    type="button"
                    onClick={() => toggle(t.id)}
                    className="w-full flex items-start gap-2.5 p-2 rounded-md hover:bg-ink-50 text-left transition-colors"
                  >
                    <span
                      className={cn(
                        "mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-colors",
                        isDone
                          ? "bg-ink-900 border-ink-900"
                          : "bg-white border-ink-300",
                      )}
                    >
                      {isDone && (
                        <CheckCircle
                          className="w-3.5 h-3.5 text-white"
                          weight="fill"
                        />
                      )}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span
                        className={cn(
                          "block text-xs leading-snug",
                          isDone
                            ? "text-ink-400 line-through"
                            : "text-ink-800",
                        )}
                      >
                        {t.title}
                      </span>
                      <span className="flex items-center gap-2 mt-1 text-2xs text-ink-500">
                        <span
                          className={cn(
                            "inline-flex items-center gap-1 px-1.5 h-4 rounded ring-1",
                            priorityStyle[t.priority],
                          )}
                        >
                          <span
                            className={cn(
                              "w-1 h-1 rounded-full",
                              priorityDot[t.priority],
                            )}
                          />
                          {t.priority}
                        </span>
                        <span>{t.due}</span>
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <ol className="relative pl-5">
            <span className="absolute left-1.5 top-1.5 bottom-1.5 w-px bg-ink-200" />
            {activity.map((a) => {
              const Icon = typeIcon[a.type];
              return (
                <li key={a.id} className="relative pb-4 last:pb-0">
                  <span
                    className={cn(
                      "absolute -left-[14px] top-0.5 w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white",
                      typeColor[a.type],
                    )}
                  >
                    <Icon className="w-3 h-3" weight="bold" />
                  </span>
                  <div className="text-xs text-ink-700 leading-snug">
                    <span className="font-medium text-ink-900">{a.actor}</span>{" "}
                    {a.text}{" "}
                    <span className="font-medium text-ink-900">
                      {a.target}
                    </span>
                  </div>
                  <div className="text-2xs text-ink-500 mt-0.5">{a.time}</div>
                </li>
              );
            })}
          </ol>
        )}
      </div>
    </section>
  );
}
