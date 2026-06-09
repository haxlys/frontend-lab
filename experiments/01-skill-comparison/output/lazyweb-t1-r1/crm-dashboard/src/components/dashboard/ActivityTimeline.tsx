import { useState } from 'react'
import {
  PhoneIcon,
  MailIcon,
  CalendarIcon,
  StickyNoteIcon,
  ChevronRightIcon,
} from '../Icons'
import type { Activity, TodoItem } from '../../types'

const activityIconMap = {
  call: { icon: PhoneIcon, bg: 'bg-blue-50 text-blue-600' },
  email: { icon: MailIcon, bg: 'bg-purple-50 text-purple-600' },
  meeting: { icon: CalendarIcon, bg: 'bg-emerald-50 text-emerald-600' },
  note: { icon: StickyNoteIcon, bg: 'bg-amber-50 text-amber-600' },
}

interface ActivityTimelineProps {
  activities: Activity[]
  todos: TodoItem[]
  onToggleTodo: (id: string) => void
}

function classNames(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function ActivityTimeline({
  activities,
  todos,
  onToggleTodo,
}: ActivityTimelineProps) {
  const [showActivities, setShowActivities] = useState(true)

  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm flex flex-col h-full">
      <div className="flex border-b border-slate-200">
        <button
          onClick={() => setShowActivities(true)}
          className={classNames(
            'flex-1 py-3 text-sm font-medium transition-colors',
            showActivities
              ? 'text-accent-600 border-b-2 border-accent-600'
              : 'text-slate-400 hover:text-slate-600'
          )}
        >
          오늘의 할 일
        </button>
        <button
          onClick={() => setShowActivities(false)}
          className={classNames(
            'flex-1 py-3 text-sm font-medium transition-colors',
            !showActivities
              ? 'text-accent-600 border-b-2 border-accent-600'
              : 'text-slate-400 hover:text-slate-600'
          )}
        >
          최근 활동
        </button>
      </div>

      <div className="flex-1 overflow-auto p-4">
        {showActivities ? (
          <ul className="space-y-1">
            {todos.map((todo) => (
              <li key={todo.id}>
                <label className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-slate-50 cursor-pointer transition-colors group">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggleTodo(todo.id)}
                    className="
                      w-4 h-4 rounded border-slate-300 text-accent-600
                      focus:ring-2 focus:ring-accent-500/20 focus:ring-offset-0
                      cursor-pointer
                    "
                  />
                  <span
                    className={classNames(
                      'flex-1 text-sm transition-colors',
                      todo.done
                        ? 'text-slate-400 line-through'
                        : 'text-slate-700'
                    )}
                  >
                    {todo.text}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        ) : (
          <ul className="space-y-0">
            {activities.map((activity, i) => {
              const { icon: Icon, bg } = activityIconMap[activity.type]
              const isLast = i === activities.length - 1

              return (
                <li key={activity.id} className="relative flex gap-3">
                  {!isLast && (
                    <div className="absolute left-[18px] top-9 bottom-0 w-px bg-slate-200" />
                  )}
                  <div
                    className={`w-9 h-9 rounded-full ${bg} flex items-center justify-center shrink-0 mt-0.5`}
                  >
                    <Icon />
                  </div>
                  <div className="flex-1 pb-5">
                    <p className="text-sm font-medium text-slate-700 leading-tight">
                      {activity.title}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {activity.description}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">
                      {activity.timestamp}
                    </p>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      <div className="px-4 py-2.5 border-t border-slate-200">
        <a
          href="#"
          className="flex items-center justify-center gap-1 text-xs font-medium text-slate-400 hover:text-accent-600 transition-colors"
        >
          전체 보기
          <ChevronRightIcon />
        </a>
      </div>
    </div>
  )
}
