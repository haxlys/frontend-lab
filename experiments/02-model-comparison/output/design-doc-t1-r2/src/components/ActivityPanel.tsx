import { useState } from 'react';
import { SectionHeader } from './ui/SectionHeader';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';
import { activities, todos } from '../data/mock';
import { IconCheck, IconMore, IconPlus } from './icons';

export function ActivityPanel() {
  const [tab, setTab] = useState<'activity' | 'todo'>('activity');
  const [items, setItems] = useState(todos);

  const toggle = (id: string) =>
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  return (
    <div className="card p-5 h-full flex flex-col">
      <SectionHeader
        title="오늘의 포커스"
        description="최근 활동과 진행 중인 할 일"
        action={
          <button className="text-ink-400 hover:text-ink-700">
            <IconMore size={16} />
          </button>
        }
      />

      <div className="inline-flex p-0.5 bg-ink-100 rounded-md self-start mb-4">
        {(
          [
            { id: 'activity', label: '액티비티' },
            { id: 'todo', label: '할 일' },
          ] as const
        ).map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`h-6 px-2.5 text-2xs font-medium rounded ${
              tab === t.id
                ? 'bg-white text-ink-900 shadow-card'
                : 'text-ink-500 hover:text-ink-800'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === 'activity' ? (
        <ul className="space-y-3 overflow-y-auto pr-1 -mr-1">
          {activities.map((a, i) => (
            <li key={a.id} className="flex gap-3">
              <div className="flex flex-col items-center">
                <Avatar name={a.actor} size="sm" />
                {i !== activities.length - 1 && (
                  <span className="w-px flex-1 bg-ink-200 mt-2" />
                )}
              </div>
              <div className="pb-3 min-w-0">
                <p className="text-xs text-ink-800">
                  <span className="font-semibold text-ink-900">{a.actor}</span>{' '}
                  {a.action}
                </p>
                <p className="text-2xs text-ink-500 mt-0.5 truncate">
                  {a.target}
                </p>
                <div className="mt-1.5 flex items-center gap-2">
                  <Badge tone={a.tone}>
                    {a.tone === 'success'
                      ? '성사'
                      : a.tone === 'brand'
                        ? '업데이트'
                        : '시스템'}
                  </Badge>
                  <span className="text-2xs text-ink-400">{a.time}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="space-y-1.5 overflow-y-auto pr-1 -mr-1">
          {items.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => toggle(t.id)}
                className="w-full flex items-start gap-2.5 p-2 rounded-md text-left hover:bg-ink-50 transition-colors"
              >
                <span
                  className={`mt-0.5 h-4 w-4 grid place-items-center rounded-[5px] border ${
                    t.done
                      ? 'bg-ink-900 border-ink-900 text-white'
                      : 'border-ink-300 text-transparent hover:border-ink-500'
                  }`}
                >
                  <IconCheck size={11} />
                </span>
                <span className="flex-1 min-w-0">
                  <span
                    className={`block text-xs ${
                      t.done
                        ? 'text-ink-400 line-through'
                        : 'text-ink-800 font-medium'
                    }`}
                  >
                    {t.label}
                  </span>
                  <span className="block text-2xs text-ink-500 mt-0.5">
                    {t.due}
                  </span>
                </span>
              </button>
            </li>
          ))}
          <li>
            <button className="w-full mt-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-md border border-dashed border-ink-200 text-2xs text-ink-500 hover:text-ink-800 hover:border-ink-300 hover:bg-ink-50">
              <IconPlus size={12} />
              할 일 추가
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
