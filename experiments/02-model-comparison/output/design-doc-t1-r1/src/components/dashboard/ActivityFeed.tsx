import { useState } from 'react';
import {
  CheckCircle2,
  Circle,
  MessageSquare,
  PhoneCall,
  Mail,
  FileText,
  ArrowUpRight,
  MoreHorizontal,
} from 'lucide-react';
import { cn } from '../../lib/utils';

type Todo = { id: number; title: string; meta: string; done: boolean };
type Activity = {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  type: 'note' | 'call' | 'email' | 'deal';
};

const todos: Todo[] = [
  { id: 1, title: 'Acme Corp 견적서 발송', meta: '오늘 · 14:00', done: false },
  { id: 2, title: 'Globex 도입 미팅 준비', meta: '오늘 · 16:30', done: false },
  { id: 3, title: 'Initech 데모 후 팔로업 메일', meta: '내일 · 10:00', done: true },
  { id: 4, title: '주간 파이프라인 리뷰', meta: '금요일 · 09:30', done: false },
];

const activities: Activity[] = [
  {
    id: 1,
    user: '소연',
    action: '님이 메모를 남겼습니다',
    target: 'Hooli · Q4 갱신 논의',
    time: '5분 전',
    type: 'note',
  },
  {
    id: 2,
    user: '지훈',
    action: '님이 통화를 완료했습니다',
    target: 'Pied Piper · 32분',
    time: '1시간 전',
    type: 'call',
  },
  {
    id: 3,
    user: '지훈',
    action: '님이 이메일을 보냈습니다',
    target: 'Soylent Corp · 제안서 v2',
    time: '3시간 전',
    type: 'email',
  },
  {
    id: 4,
    user: '소연',
    action: '님이 딜을 성사시켰습니다',
    target: 'Stark Industries · ₩48M',
    time: '어제',
    type: 'deal',
  },
];

const activityIcon = {
  note: FileText,
  call: PhoneCall,
  email: Mail,
  deal: ArrowUpRight,
} as const;

export function ActivityFeed() {
  const [items, setItems] = useState(todos);
  const toggle = (id: number) =>
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  return (
    <section className="flex flex-col rounded-lg border border-ink-200 bg-white shadow-soft">
      <header className="flex items-center justify-between border-b border-ink-200 p-5">
        <div>
          <h2 className="text-base font-semibold tracking-tight text-ink-900">오늘의 할 일</h2>
          <p className="mt-0.5 text-sm text-ink-500">
            {items.filter((t) => !t.done).length}개의 작업이 남았습니다
          </p>
        </div>
        <button
          type="button"
          aria-label="더보기"
          className="rounded-md p-1.5 text-ink-400 hover:bg-ink-100 hover:text-ink-700"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </header>

      <ul className="divide-y divide-ink-100">
        {items.map((t) => (
          <li key={t.id}>
            <button
              type="button"
              onClick={() => toggle(t.id)}
              className="flex w-full items-start gap-3 px-5 py-3 text-left transition-colors hover:bg-ink-50"
            >
              {t.done ? (
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" />
              ) : (
                <Circle className="mt-0.5 h-4 w-4 shrink-0 text-ink-300" />
              )}
              <div className="min-w-0 flex-1">
                <p
                  className={cn(
                    'text-sm font-medium',
                    t.done ? 'text-ink-400 line-through' : 'text-ink-800'
                  )}
                >
                  {t.title}
                </p>
                <p className="mt-0.5 text-xs text-ink-500">{t.meta}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <div className="border-t border-ink-200 p-5">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold tracking-tight text-ink-900">최근 액티비티</h3>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-xs font-medium text-ink-500 transition-colors hover:text-ink-800"
          >
            <MessageSquare className="h-3 w-3" /> 전체 보기
          </button>
        </div>
        <ul className="space-y-3">
          {activities.map((a) => {
            const Icon = activityIcon[a.type];
            return (
              <li key={a.id} className="flex items-start gap-2.5">
                <div
                  className={cn(
                    'mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md',
                    a.type === 'deal' && 'bg-emerald-50 text-emerald-600',
                    a.type === 'call' && 'bg-amber-50 text-amber-600',
                    a.type === 'email' && 'bg-brand-50 text-brand-600',
                    a.type === 'note' && 'bg-ink-100 text-ink-600'
                  )}
                >
                  <Icon className="h-3 w-3" />
                </div>
                <div className="min-w-0 flex-1 text-sm leading-snug">
                  <p className="text-ink-700">
                    <span className="font-medium text-ink-900">{a.user}</span>
                    {a.action}
                    <span className="block truncate text-ink-500">{a.target}</span>
                  </p>
                </div>
                <span className="shrink-0 text-2xs text-ink-400">{a.time}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
