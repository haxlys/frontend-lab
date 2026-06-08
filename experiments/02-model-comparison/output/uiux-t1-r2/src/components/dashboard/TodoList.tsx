import { useState } from "react";
import { Card, CardHeader } from "../ui/Card";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { MoreHorizontal, Plus } from "../ui/icons";
import { todos } from "../../data/mock";
import { cn } from "../../lib/utils";

const priorityTone = {
  high: "rose" as const,
  medium: "amber" as const,
  low: "neutral" as const,
};

export function TodoList() {
  const [items, setItems] = useState(todos);
  const completed = items.filter((t) => t.done).length;

  const toggle = (id: string) => {
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  return (
    <Card className="flex flex-col h-full">
      <CardHeader
        title="Today's Tasks"
        description={`${completed} of ${items.length} completed`}
        action={
          <div className="flex items-center gap-1">
            <Button size="icon" variant="ghost" aria-label="Add">
              <Plus size={16} />
            </Button>
            <Button size="icon" variant="ghost" aria-label="More">
              <MoreHorizontal size={16} />
            </Button>
          </div>
        }
      />

      <div className="px-5 pb-5 flex-1">
        <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-emerald-500 transition-all duration-300"
            style={{ width: `${(completed / items.length) * 100}%` }}
          />
        </div>

        <ul className="space-y-0.5">
          {items.map((t) => (
            <li key={t.id}>
              <label
                className={cn(
                  "group flex items-start gap-3 rounded-md px-2 py-2 -mx-2 cursor-pointer hover:bg-slate-50 transition-colors",
                  t.done && "opacity-60"
                )}
              >
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    toggle(t.id);
                  }}
                  className={cn(
                    "mt-0.5 h-4 w-4 shrink-0 rounded border transition-colors grid place-items-center",
                    t.done
                      ? "bg-slate-900 border-slate-900"
                      : "border-slate-300 group-hover:border-slate-400"
                  )}
                >
                  {t.done ? (
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6.5L4.5 9L10 3"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </button>
                <div className="flex-1 min-w-0">
                  <div
                    className={cn(
                      "text-[13px] leading-snug text-slate-700",
                      t.done && "line-through text-slate-400"
                    )}
                  >
                    {t.title}
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="text-[11.5px] text-slate-500">{t.due}</span>
                    <Badge tone={priorityTone[t.priority]} className="capitalize">
                      {t.priority}
                    </Badge>
                  </div>
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
