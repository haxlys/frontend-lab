import { useState } from 'react';
import { Check, Plus, Calendar, Phone, Mail, FileText, MessageSquare, Circle } from 'lucide-react';
import { cn } from '../lib/utils';

type ActivityType = 'call' | 'email' | 'meeting' | 'note' | 'task';

type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  customer: string;
  meta: string;
  time: string;
};

const activities: Activity[] = [
  {
    id: 'a1',
    type: 'call',
    title: 'Northwind와 디모 콜 진행',
    customer: 'Northwind Co.',
    meta: '30분 · 영업팀',
    time: '10:00',
  },
  {
    id: 'a2',
    type: 'email',
    title: '견적서 v2 발송',
    customer: 'Acme Inc.',
    meta: '이메일 · 회신 대기',
    time: '11:30',
  },
  {
    id: 'a3',
    type: 'meeting',
    title: '분기 리뷰 미팅',
    customer: 'Globex',
    meta: 'Zoom · 60분',
    time: '14:00',
  },
  {
    id: 'a4',
    type: 'note',
    title: '연락처 정보 메모 추가',
    customer: 'Initech',
    meta: '3줄 메모',
    time: '15:15',
  },
  {
    id: 'a5',
    type: 'task',
    title: '제안서 후속 연락',
    customer: 'Umbrella',
    meta: '내일 오전 마감',
    time: '16:45',
  },
];

const typeMeta: Record<ActivityType, { icon: typeof Phone; color: string; bg: string }> = {
  call: { icon: Phone, color: 'text-blue-600', bg: 'bg-blue-50' },
  email: { icon: Mail, color: 'text-violet-600', bg: 'bg-violet-50' },
  meeting: { icon: Calendar, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  note: { icon: FileText, color: 'text-amber-600', bg: 'bg-amber-50' },
  task: { icon: MessageSquare, color: 'text-rose-600', bg: 'bg-rose-50' },
};

type Todo = {
  id: string;
  title: string;
  customer: string;
  priority: 'high' | 'med' | 'low';
  done: boolean;
};

const initialTodos: Todo[] = [
  { id: 't1', title: 'Acme 견적서 후속 연락', customer: 'Acme Inc.', priority: 'high', done: false },
  { id: 't2', title: 'Globex 데모 자료 준비', customer: 'Globex', priority: 'high', done: false },
  { id: 't3', title: 'Initech 계약서 검토', customer: 'Initech', priority: 'med', done: true },
  { id: 't4', title: '신규 리드 분류', customer: '12건', priority: 'med', done: false },
  { id: 't5', title: '주간 보고서 제출', customer: '내부', priority: 'low', done: false },
];

const priorityStyle: Record<Todo['priority'], string> = {
  high: 'bg-rose-50 text-rose-700 ring-rose-200',
  med: 'bg-amber-50 text-amber-700 ring-amber-200',
  low: 'bg-slate-100 text-slate-600 ring-slate-200',
};

export function ActivityTodoCard() {
  const [todos, setTodos] = useState(initialTodos);
  const remaining = todos.filter((t) => !t.done).length;

  return (
    <section
      aria-label="활동 및 할 일"
      className="flex h-full flex-col rounded-lg border border-border bg-card shadow-soft"
    >
      <header className="flex items-center justify-between border-b border-border p-5">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-foreground">활동 & 할 일</h2>
          <p className="mt-0.5 text-xs text-muted-foreground">
            오늘 예정된 일정과 미완료 작업 {remaining}건
          </p>
        </div>
        <button
          type="button"
          className="flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          aria-label="항목 추가"
        >
          <Plus className="h-4 w-4" />
        </button>
      </header>

      <div className="border-b border-border p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            오늘의 할 일
          </h3>
          <span className="text-xs tabular-nums text-muted-foreground">
            {todos.filter((t) => t.done).length} / {todos.length}
          </span>
        </div>
        <ul className="space-y-1.5">
          {todos.map((todo) => (
            <li key={todo.id}>
              <label
                className={cn(
                  'group flex cursor-pointer items-center gap-2.5 rounded-md border border-transparent px-2 py-1.5 transition-colors hover:border-border hover:bg-muted/60',
                  todo.done && 'opacity-60'
                )}
              >
                <span className="relative inline-flex h-4 w-4 shrink-0 items-center justify-center">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={(e) =>
                      setTodos((prev) =>
                        prev.map((t) => (t.id === todo.id ? { ...t, done: e.target.checked } : t))
                      )
                    }
                    className="peer absolute inset-0 cursor-pointer appearance-none rounded border border-slate-300 bg-card transition-colors checked:border-accent checked:bg-accent focus-visible:ring-2 focus-visible:ring-accent/30"
                  />
                  <Check
                    className={cn(
                      'pointer-events-none h-3 w-3 stroke-[3] text-white opacity-0 transition-opacity',
                      todo.done && 'opacity-100'
                    )}
                  />
                </span>
                <span
                  className={cn(
                    'flex-1 text-sm leading-snug text-foreground',
                    todo.done && 'line-through decoration-muted-foreground/60'
                  )}
                >
                  {todo.title}
                </span>
                <span
                  className={cn(
                    'inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold ring-1 ring-inset',
                    priorityStyle[todo.priority]
                  )}
                >
                  <Circle className="h-1.5 w-1.5 fill-current" />
                  {todo.customer}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            최근 활동
          </h3>
          <a
            href="#"
            className="text-xs font-medium text-accent hover:underline"
          >
            전체 보기
          </a>
        </div>
        <ol className="relative space-y-3 pl-5 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-border">
          {activities.map((act) => {
            const meta = typeMeta[act.type];
            const Icon = meta.icon;
            return (
              <li key={act.id} className="relative">
                <span
                  className={cn(
                    'absolute -left-5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full ring-4 ring-card',
                    meta.bg
                  )}
                >
                  <Icon className={cn('h-2.5 w-2.5', meta.color)} strokeWidth={2.5} />
                </span>
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-foreground">{act.title}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {act.customer} · {act.meta}
                    </p>
                  </div>
                  <time className="shrink-0 text-xs tabular-nums text-muted-foreground">
                    {act.time}
                  </time>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
