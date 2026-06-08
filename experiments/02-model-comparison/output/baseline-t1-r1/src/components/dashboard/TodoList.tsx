import { useState } from "react";
import { Check, Plus, Clock, MessageSquare, Phone, Mail } from "lucide-react";
import { cn } from "../../lib/cn";

type Todo = {
  id: string;
  title: string;
  due: string;
  type: "call" | "email" | "task" | "meeting";
  done: boolean;
};

const initial: Todo[] = [
  {
    id: "1",
    title: "Acme Corp과 계약 조건 협의",
    due: "오늘 14:00",
    type: "call",
    done: false,
  },
  {
    id: "2",
    title: "Globex에 견적서 발송",
    due: "오늘 16:30",
    type: "email",
    done: false,
  },
  {
    id: "3",
    title: "Initech 미팅 준비 - 제안서 검토",
    due: "내일 10:00",
    type: "meeting",
    done: false,
  },
  {
    id: "4",
    title: "분기 리드 파이프라인 정리",
    due: "내일",
    type: "task",
    done: true,
  },
];

const iconMap = {
  call: Phone,
  email: Mail,
  task: Check,
  meeting: MessageSquare,
};

export function TodoList() {
  const [items, setItems] = useState(initial);

  const toggle = (id: string) =>
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );

  return (
    <div className="rounded-lg border border-ink-200 bg-white shadow-card">
      <div className="flex items-center justify-between border-b border-ink-200 px-5 py-4">
        <div>
          <h2 className="text-base font-semibold text-ink-900">오늘의 할 일</h2>
          <p className="mt-0.5 text-xs text-ink-500">
            {items.filter((i) => !i.done).length}개의 작업이 남았어요
          </p>
        </div>
        <button className="inline-flex h-7 items-center gap-1 rounded-md border border-ink-200 bg-white px-2 text-xs font-medium text-ink-700 hover:bg-ink-50">
          <Plus className="h-3.5 w-3.5" />
          추가
        </button>
      </div>

      <ul className="divide-y divide-ink-100">
        {items.map((t) => {
          const Icon = iconMap[t.type];
          return (
            <li
              key={t.id}
              className="group flex items-center gap-3 px-5 py-3 hover:bg-ink-50/60"
            >
              <button
                onClick={() => toggle(t.id)}
                className={cn(
                  "flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  t.done
                    ? "border-brand-600 bg-brand-600 text-white"
                    : "border-ink-300 bg-white group-hover:border-ink-400"
                )}
                aria-label="완료 토글"
              >
                {t.done && <Check className="h-3 w-3" />}
              </button>

              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-md",
                  t.done
                    ? "bg-ink-100 text-ink-400"
                    : t.type === "call"
                    ? "bg-brand-50 text-brand-600"
                    : t.type === "email"
                    ? "bg-violet-50 text-violet-600"
                    : t.type === "meeting"
                    ? "bg-emerald-50 text-emerald-600"
                    : "bg-amber-50 text-amber-600"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>

              <div className="min-w-0 flex-1">
                <div
                  className={cn(
                    "truncate text-sm",
                    t.done
                      ? "text-ink-400 line-through"
                      : "text-ink-900"
                  )}
                >
                  {t.title}
                </div>
                <div className="mt-0.5 flex items-center gap-1 text-[11px] text-ink-500">
                  <Clock className="h-3 w-3" />
                  {t.due}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <div className="border-t border-ink-200 px-5 py-3 text-center">
        <button className="text-xs font-medium text-ink-500 hover:text-ink-900">
          모든 작업 보기 →
        </button>
      </div>
    </div>
  );
}
