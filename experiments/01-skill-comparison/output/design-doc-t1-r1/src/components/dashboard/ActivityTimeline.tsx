import { type FC, useState } from "react";
import { Card } from "../ui";

type Activity = {
  id: string;
  type: "call" | "email" | "meeting" | "note";
  title: string;
  description: string;
  time: string;
};

const activities: Activity[] = [
  { id: "1", type: "call", title: "통화 완료", description: "Sarah Chen (Acme Inc)와 통화", time: "10분 전" },
  { id: "2", type: "email", title: "이메일 발송", description: "견적서 발송: TechStart Corp", time: "32분 전" },
  { id: "3", type: "meeting", title: "미팅 완료", description: "제품 데모: GlobalTech", time: "1시간 전" },
  { id: "4", type: "note", title: "메모 추가", description: "다음 미팅 일정 조율 필요", time: "2시간 전" },
  { id: "5", type: "call", title: "통화 예정", description: "James Park (NeoSoft)", time: "오전 10:30" },
];

const typeIcons: Record<Activity["type"], { bg: string; color: string }> = {
  call:     { bg: "bg-accent-50",   color: "text-accent-600" },
  email:    { bg: "bg-teal-100",     color: "text-teal-600" },
  meeting:  { bg: "bg-warning-100",  color: "text-warning-600" },
  note:     { bg: "bg-navy-100",     color: "text-navy-500" },
};

const typeIconPaths: Record<Activity["type"], React.JSX.Element> = {
  call:    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />,
  email:   <><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22 6 12 13 2 6" /></>,
  meeting: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  note:    <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></>,
};

const SvgIcon: FC<{ name: Activity["type"]; className?: string }> = ({ name, className = "h-4 w-4" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
    {typeIconPaths[name]}
  </svg>
);

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

const initialTodos: Todo[] = [
  { id: "t1", text: "GlobalTech 제안서 검토", done: false },
  { id: "t2", text: "신규 리드 12건 배정", done: false },
  { id: "t3", text: "주간 영업 리포트 작성", done: true },
  { id: "t4", text: "다음 분기 예산 초안 작성", done: false },
];

export const ActivityTimeline: FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="text-base font-semibold text-navy-800 mb-4">오늘의 할 일</h3>
        <ul className="space-y-2">
          {todos.map((todo) => (
            <li key={todo.id}>
              <button
                onClick={() => toggleTodo(todo.id)}
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left transition-colors hover:bg-navy-50"
              >
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    todo.done
                      ? "border-accent-600 bg-accent-600"
                      : "border-navy-300 bg-white hover:border-accent-500"
                  }`}
                >
                  {todo.done && (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"
                      className="h-3 w-3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </span>
                <span
                  className={`text-sm ${
                    todo.done ? "text-navy-400 line-through" : "text-navy-700"
                  }`}
                >
                  {todo.text}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h3 className="text-base font-semibold text-navy-800 mb-4">최근 액티비티</h3>
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-navy-100" />
          <ul className="space-y-4">
            {activities.map((a) => (
              <li key={a.id} className="relative flex gap-3 pl-0">
                <span className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${typeIcons[a.type].bg}`}>
                  <SvgIcon name={a.type} className={`h-4 w-4 ${typeIcons[a.type].color}`} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <p className="truncate text-sm font-medium text-navy-700">{a.title}</p>
                    <span className="shrink-0 text-xs text-navy-400">{a.time}</span>
                  </div>
                  <p className="truncate text-xs text-navy-400">{a.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};
