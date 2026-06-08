import { useState } from 'react'
import { Icon } from './Icon'
import type { Activity, TodoItem } from '../types'
import { activities, todoItems } from '../data/mockData'

export function ActivityTimeline() {
  const [todos, setTodos] = useState<TodoItem[]>(todoItems)

  const toggleTodo = (id: string) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const priorityColor: Record<string, string> = {
    high: 'bg-red-500',
    medium: 'bg-amber-500',
    low: 'bg-slate-400',
  }

  return (
    <div className="bg-white rounded-lg border border-slate-200 h-full flex flex-col">
      <div className="p-5 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-slate-800">Today's Tasks</h3>
          <span className="text-xs text-slate-400 font-medium">
            {todos.filter((t) => t.done).length}/{todos.length} done
          </span>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-5 space-y-1 scrollbar-thin">
        {todos.map((todo) => (
          <label
            key={todo.id}
            className="flex items-start gap-3 py-2 cursor-pointer group"
          >
            <div className="relative mt-0.5 shrink-0">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="sr-only"
              />
              <div className={`
                w-4 h-4 rounded border-2 flex items-center justify-center transition-colors
                ${todo.done
                  ? 'bg-blue-600 border-blue-600'
                  : 'border-slate-300 group-hover:border-blue-400'
                }
              `}>
                {todo.done && <Icon name="check" size={10} className="text-white" />}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm truncate ${todo.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {todo.text}
              </p>
            </div>
            <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${priorityColor[todo.priority]}`} />
          </label>
        ))}
      </div>

      <div className="p-5 border-t border-slate-100">
        <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Recent Activity</h4>
        <div className="space-y-3">
          {activities.slice(0, 4).map((act) => (
            <ActivityRow key={act.id} activity={act} />
          ))}
        </div>
      </div>
    </div>
  )
}

function ActivityRow({ activity }: { activity: Activity }) {
  return (
    <div className="flex gap-3">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
        <span className="text-[11px] font-semibold text-slate-500">{activity.avatar}</span>
      </div>
      <div className="min-w-0">
        <p className="text-sm text-slate-700">
          <span className="font-medium">{activity.user}</span>{' '}
          <span className="text-slate-500">{activity.action}</span>{' '}
          <span className="font-medium text-slate-800">{activity.target}</span>
        </p>
        <p className="text-xs text-slate-400 mt-0.5">{activity.time}</p>
      </div>
    </div>
  )
}
