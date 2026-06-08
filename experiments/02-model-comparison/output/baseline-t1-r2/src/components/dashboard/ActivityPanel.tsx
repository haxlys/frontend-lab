import { useState } from 'react';
import { Card, SectionHeader } from '@/components/ui/Card';
import { Badge, Avatar } from '@/components/ui/Badge';
import { Icon } from '@/components/Icon';
import { activities, todos, type Todo } from '@/data';
import { cn } from '@/lib/cn';

type Tab = 'activity' | 'tasks';
const tabs: { id: Tab; label: string }[] = [
  { id: 'activity', label: 'Activity' },
  { id: 'tasks', label: 'My tasks' },
];

const channelIcon: Record<string, typeof Icon.Phone> = {
  call: Icon.Phone,
  mail: Icon.Mail,
  note: Icon.Circle,
  meeting: Icon.Calendar,
};

export function ActivityPanel() {
  const [tab, setTab] = useState<Tab>('activity');
  const [taskList, setTaskList] = useState<Todo[]>(todos);

  const toggle = (id: string) =>
    setTaskList((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const doneCount = taskList.filter((t) => t.done).length;

  return (
    <Card className="h-full flex flex-col">
      <SectionHeader
        title={tab === 'activity' ? 'Recent activity' : "Today's tasks"}
        action={
          <div className="flex items-center gap-2">
            <span className="text-2xs text-ink-500 hidden sm:inline">
              {tab === 'activity' ? `${activities.length} events` : `${doneCount}/${taskList.length} done`}
            </span>
            <div className="inline-flex p-0.5 rounded-sm bg-ink-100">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTab(t.id)}
                  className={cn(
                    'px-2.5 h-7 text-xs font-medium rounded-[5px] transition-colors',
                    tab === t.id ? 'bg-white text-ink-900 shadow-soft' : 'text-ink-500 hover:text-ink-700',
                  )}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        }
      />

      {tab === 'activity' ? <ActivityList /> : <TaskList taskList={taskList} toggle={toggle} />}
    </Card>
  );
}

function ActivityList() {
  return (
    <ol className="relative space-y-0.5 -mx-2">
      {activities.map((a, i) => {
        const ChannelIcon = channelIcon[a.channel];
        const isLast = i === activities.length - 1;
        return (
          <li key={a.id} className="relative pl-9 pr-2 py-2.5 rounded-sm hover:bg-ink-50 group cursor-pointer">
            {!isLast && <span className="absolute left-[18px] top-9 bottom-0 w-px bg-ink-200" />}
            <div className="absolute left-2 top-2.5">
              <Avatar initials={a.initials} color={a.color} size="sm" />
            </div>
            <div className="flex items-start gap-2 min-w-0">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-ink-700 leading-snug">
                  <span className="font-semibold text-ink-900">{a.user}</span>{' '}
                  {a.action}{' '}
                  <span className="font-medium text-ink-900">{a.target}</span>
                </p>
                <div className="flex items-center gap-1.5 mt-0.5 text-2xs text-ink-400">
                  <ChannelIcon size={11} />
                  <span>{a.time}</span>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

const priorityStyles: Record<Todo['priority'], ReturnType<typeof cn>> = {
  high: 'border-l-rose-400',
  med: 'border-l-amber-400',
  low: 'border-l-ink-300',
};

const priorityBadge: Record<Todo['priority'], { tone: 'rose' | 'amber' | 'neutral'; label: string }> = {
  high: { tone: 'rose', label: 'High' },
  med: { tone: 'amber', label: 'Med' },
  low: { tone: 'neutral', label: 'Low' },
};

function TaskList({ taskList, toggle }: { taskList: Todo[]; toggle: (id: string) => void }) {
  return (
    <ul className="space-y-1 -mx-1">
      {taskList.map((t) => {
        const meta = priorityBadge[t.priority];
        return (
          <li
            key={t.id}
            className={cn(
              'group flex items-start gap-2.5 pl-2.5 pr-2 py-2 rounded-sm border-l-2 hover:bg-ink-50 cursor-pointer transition-colors',
              priorityStyles[t.priority],
            )}
          >
            <button
              onClick={() => toggle(t.id)}
              className={cn(
                'mt-0.5 h-4 w-4 rounded-sm border flex items-center justify-center transition-colors shrink-0',
                t.done
                  ? 'bg-ink-900 border-ink-900 text-white'
                  : 'border-ink-300 text-transparent group-hover:border-ink-400',
              )}
              aria-label={t.done ? 'Mark as not done' : 'Mark as done'}
            >
              {t.done && <Icon.Check size={11} />}
            </button>
            <div className="flex-1 min-w-0">
              <p
                className={cn(
                  'text-xs leading-snug transition-colors',
                  t.done ? 'line-through text-ink-400' : 'text-ink-900',
                )}
              >
                {t.title}
              </p>
              <p className="text-2xs text-ink-500 mt-0.5">{t.due}</p>
            </div>
            <Badge tone={meta.tone} className="shrink-0">
              {meta.label}
            </Badge>
          </li>
        );
      })}
    </ul>
  );
}
