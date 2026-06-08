import { useState } from "react";
import { Card } from "../ui/Card";
import { Avatar } from "../ui/Avatar";
import { activities, todos } from "../../data/mock";
import { cn } from "../../lib/utils";
import {
  Phone,
  EnvelopeSimple,
  CalendarBlank,
  NotePencil,
  Check,
} from "@phosphor-icons/react";

const activityIcons = {
  call: Phone,
  email: EnvelopeSimple,
  meeting: CalendarBlank,
  note: NotePencil,
};

const activityTones = {
  call: "bg-emerald-50 text-emerald-600",
  email: "bg-brand-50 text-brand-600",
  meeting: "bg-violet-50 text-violet-600",
  note: "bg-amber-50 text-amber-600",
};

type Tab = "activity" | "today";

export function ActivityPanel() {
  const [tab, setTab] = useState<Tab>("activity");
  const [todoState, setTodoState] = useState(todos);

  const toggleTodo = (id: string) => {
    setTodoState((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex p-0.5 bg-ink-100 rounded-md">
          {(["activity", "today"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "h-6 px-2.5 text-[12px] font-medium rounded-[5px] transition-colors",
                tab === t
                  ? "bg-white text-ink-900 shadow-sm"
                  : "text-ink-500 hover:text-ink-800",
              )}
            >
              {t === "activity" ? "Recent activity" : "Today's tasks"}
            </button>
          ))}
        </div>
        <span className="text-[11px] text-ink-500 tabular-nums">
          {tab === "activity" ? `${activities.length} events` : `${todoState.filter((t) => !t.done).length} open`}
        </span>
      </div>

      {tab === "activity" ? (
        <ul className="space-y-3.5 -mx-1 px-1 overflow-y-auto max-h-[420px] scrollbar-thin">
          {activities.map((a) => {
            const Icon = activityIcons[a.type];
            return (
              <li key={a.id} className="flex gap-2.5 group">
                <div className="flex flex-col items-center pt-0.5">
                  <div
                    className={cn(
                      "h-7 w-7 rounded-full flex items-center justify-center shrink-0",
                      activityTones[a.type],
                    )}
                  >
                    <Icon size={13} weight="regular" />
                  </div>
                </div>
                <div className="flex-1 min-w-0 pb-3.5 border-b border-ink-100 last:border-0 group-last:border-0">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-[12.5px] font-medium text-ink-900 leading-snug">
                      {a.title}
                    </p>
                    <Avatar initials={a.user.initials} color={a.user.color} size="xs" />
                  </div>
                  <p className="text-[12px] text-ink-500 leading-snug mt-0.5">
                    {a.description}
                  </p>
                  <p className="text-[11px] text-ink-400 mt-1">{a.time}</p>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul className="space-y-1 -mx-1 px-1 overflow-y-auto max-h-[420px] scrollbar-thin">
          {todoState.map((todo) => {
            const priorityDot = {
              high: "bg-rose-500",
              medium: "bg-amber-500",
              low: "bg-ink-300",
            }[todo.priority];
            return (
              <li key={todo.id}>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={cn(
                    "w-full flex items-start gap-2.5 p-2 rounded-md text-left transition-colors",
                    "hover:bg-ink-50",
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 h-4 w-4 rounded border flex items-center justify-center shrink-0 transition-colors",
                      todo.done
                        ? "bg-brand-500 border-brand-500"
                        : "bg-white border-ink-300",
                    )}
                  >
                    {todo.done && <Check size={10} weight="bold" className="text-white" />}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p
                      className={cn(
                        "text-[12.5px] leading-snug",
                        todo.done ? "text-ink-400 line-through" : "text-ink-800",
                      )}
                    >
                      {todo.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[11px] text-ink-500">{todo.due}</span>
                      <span className={cn("h-1.5 w-1.5 rounded-full", priorityDot)} />
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}
