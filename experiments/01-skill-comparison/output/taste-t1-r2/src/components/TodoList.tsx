import { useState } from "react";
import { Check } from "@phosphor-icons/react";
import { cn } from "../lib/utils";

const tasks = [
  { id: 1, text: "Follow up with Acme Corp proposal", done: false },
  { id: 2, text: "Review Q2 pipeline forecasts", done: false },
  { id: 3, text: "Send contract to Stark Industries", done: true },
  { id: 4, text: "Prepare demo for TechStart", done: false },
  { id: 5, text: "Update CRM contact records", done: true },
];

export function TodoList() {
  const [items, setItems] = useState(tasks);

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-5 flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-[15px] font-semibold text-slate-900">
          Today's Tasks
        </h3>
        <span className="text-[12px] text-slate-400">
          {items.filter((t) => t.done).length}/{items.length} done
        </span>
      </div>
      <p className="text-[12.5px] text-slate-400 mb-4">
        Priority items for today
      </p>

      <div className="flex-1 flex flex-col gap-1.5">
        {items.map((task) => (
          <button
            key={task.id}
            onClick={() => toggle(task.id)}
            className="flex items-start gap-3 rounded-md hover:bg-slate-50 transition-colors duration-150 -mx-1 px-1 py-1.5 text-left w-full"
          >
            <div
              className={cn(
                "w-5 h-5 rounded border shrink-0 flex items-center justify-center mt-px transition-all duration-150",
                task.done
                  ? "bg-[#2563EB] border-[#2563EB]"
                  : "border-slate-300 hover:border-slate-400 bg-white"
              )}
            >
              {task.done && <Check size={12} weight="bold" className="text-white" />}
            </div>
            <span
              className={cn(
                "text-[13.5px] transition-colors duration-150",
                task.done
                  ? "text-slate-400 line-through"
                  : "text-slate-700"
              )}
            >
              {task.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
