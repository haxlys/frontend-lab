import { cn } from "../../lib/utils";
import { Card } from "../ui/Card";
import type { Todo } from "../../data/mock";

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <Card padding="lg" className="mt-4">
      <h3 className="mb-3 text-sm font-semibold text-slate-800">오늘의 할 일</h3>
      <div className="space-y-0.5">
        {todos.map((t) => (
          <label
            key={t.id}
            className={cn(
              "flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 -mx-2 transition-colors hover:bg-slate-50",
              t.done && "opacity-50",
            )}
          >
            <input
              type="checkbox"
              defaultChecked={t.done}
              className="h-4 w-4 rounded border-slate-300 text-royal-600 focus:ring-royal-500"
            />
            <span
              className={cn(
                "text-sm text-slate-700",
                t.done && "line-through",
              )}
            >
              {t.text}
            </span>
          </label>
        ))}
      </div>
    </Card>
  );
}
