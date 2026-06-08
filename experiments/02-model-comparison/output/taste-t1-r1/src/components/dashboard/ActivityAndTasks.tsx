import { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Icon } from '@/components/ui/Icon';
import { Segmented } from '@/components/ui/Controls';
import { activities, todos } from '@/lib/data';
import type { Activity, Todo } from '@/lib/types';
import { cn } from '@/lib/cn';

type Tab = 'activity' | 'tasks';

const kindMeta: Record<
  Activity['kind'],
  { icon: keyof typeof Icon; tone: 'blue' | 'amber' | 'violet' | 'green' | 'neutral'; label: string }
> = {
  call: { icon: 'Phone', tone: 'blue', label: 'Call' },
  email: { icon: 'Mail', tone: 'amber', label: 'Email' },
  note: { icon: 'Message', tone: 'neutral', label: 'Note' },
  meeting: { icon: 'Calendar', tone: 'violet', label: 'Meeting' },
  stage: { icon: 'Tag', tone: 'green', label: 'Stage' },
};

function formatTime(iso: string): string {
  const d = new Date(iso);
  const now = new Date('2026-06-08T12:00:00Z');
  const diffMs = now.getTime() - d.getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return 'just now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days === 1) return 'yesterday';
  return `${days}d ago`;
}

function priorityTone(p: Todo['priority']): 'rose' | 'amber' | 'slate' {
  if (p === 'high') return 'rose';
  if (p === 'med') return 'amber';
  return 'slate';
}

export function ActivityAndTasks() {
  const [tab, setTab] = useState<Tab>('activity');

  return (
    <Card padding="none" className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div>
          <h3 className="text-md font-semibold text-ink-primary">Today</h3>
          <p className="text-2xs text-ink-tertiary">Mon, Jun 8 · 3 tasks · 7 updates</p>
        </div>
        <Segmented<Tab>
          value={tab}
          onChange={setTab}
          options={[
            { value: 'activity', label: 'Activity' },
            { value: 'tasks', label: 'Tasks' },
          ]}
        />
      </div>

      {tab === 'activity' ? <ActivityList /> : <TaskList />}
    </Card>
  );
}

function ActivityList() {
  return (
    <ul className="flex-1 divide-y divide-line overflow-y-auto">
      {activities.map((a) => {
        const m = kindMeta[a.kind];
        const IconCmp = Icon[m.icon];
        return (
          <li key={a.id} className="group flex gap-3 px-4 py-3 transition-colors duration-150 hover:bg-surface-sunken/60">
            <div
              className={cn(
                'mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-sm border',
                m.tone === 'blue' && 'border-blue-100 bg-blue-50 text-blue-700',
                m.tone === 'amber' && 'border-amber-100 bg-amber-50 text-amber-700',
                m.tone === 'green' && 'border-emerald-100 bg-emerald-50 text-emerald-700',
                m.tone === 'violet' && 'border-violet-100 bg-violet-50 text-violet-700',
                m.tone === 'neutral' && 'border-line bg-surface-base text-ink-secondary',
              )}
            >
              <IconCmp size={13} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate text-sm text-ink-primary">
                  <span className="font-medium">{a.actor}</span>{' '}
                  <span className="text-ink-tertiary">·</span>{' '}
                  <span className="text-ink-secondary">{a.subject}</span>
                </p>
                <span className="ml-auto shrink-0 text-2xs text-ink-muted">
                  {formatTime(a.at)}
                </span>
              </div>
              {a.context ? (
                <p className="mt-0.5 truncate text-xs text-ink-tertiary">{a.context}</p>
              ) : null}
            </div>
          </li>
        );
      })}
      <li className="px-4 py-2.5">
        <button
          type="button"
          className="inline-flex items-center gap-1 text-xs font-medium text-accent hover:text-accent-hover focus-ring rounded-xs"
        >
          View all activity
          <Icon.ChevronRight size={12} />
        </button>
      </li>
    </ul>
  );
}

function TaskList() {
  const [items, setItems] = useState(todos);

  const toggle = (id: string) =>
    setItems((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const remaining = items.filter((t) => !t.done).length;

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between px-4 py-2 text-2xs text-ink-tertiary">
        <span>
          <span className="font-medium text-ink-primary num">{remaining}</span> of {items.length} remaining
        </span>
        <button type="button" className="inline-flex items-center gap-1 hover:text-ink-secondary">
          <Icon.Plus size={11} /> Add task
        </button>
      </div>

      <ul className="flex-1 divide-y divide-line">
        {items.map((t) => (
          <li
            key={t.id}
            className={cn(
              'group flex items-center gap-3 px-4 py-2.5 transition-colors duration-150 hover:bg-surface-sunken/60',
            )}
          >
            <Checkbox checked={t.done} onChange={() => toggle(t.id)} />
            <div className="min-w-0 flex-1">
              <p
                className={cn(
                  'truncate text-sm',
                  t.done ? 'text-ink-tertiary line-through' : 'text-ink-primary',
                )}
              >
                {t.title}
              </p>
              <div className="mt-0.5 flex items-center gap-1.5">
                <span className="text-2xs text-ink-tertiary">{t.due}</span>
                <span className="text-ink-muted">·</span>
                <Badge size="xs" tone={priorityTone(t.priority)} className="capitalize">
                  {t.priority}
                </Badge>
              </div>
            </div>
            <button
              type="button"
              aria-label="More"
              className="grid h-6 w-6 place-items-center rounded-xs text-ink-muted opacity-0 hover:bg-surface-sunken hover:text-ink-secondary group-hover:opacity-100 focus-ring"
            >
              <Icon.More size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Checkbox({ checked, onChange }: { checked: boolean; onChange: () => void }) {
  return (
    <button
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={onChange}
      className={cn(
        'grid h-4 w-4 shrink-0 place-items-center rounded-xs border transition-colors duration-150 focus-ring',
        checked
          ? 'border-accent bg-accent text-white'
          : 'border-line-strong bg-surface-raised hover:border-ink-primary/40',
      )}
    >
      {checked ? <Icon.Check size={11} /> : null}
    </button>
  );
}
