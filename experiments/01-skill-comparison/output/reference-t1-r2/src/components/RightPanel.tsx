import { useState } from 'react'
import type { Activity, Todo } from '../data/types'

interface Props {
  activities: Activity[]
  todos: Todo[]
}

export default function RightPanel({ activities, todos: initialTodos }: Props) {
  const [todos, setTodos] = useState(initialTodos)
  const [tab, setTab] = useState<'activity' | 'todos'>('activity')

  const toggleTodo = (id: number) => {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))
  }

  const completed = todos.filter((t) => t.done).length

  return (
    <div className="bg-white border border-slate-200 rounded-card overflow-hidden">
      <div className="flex border-b border-slate-200">
        <button
          className={[
            'flex-1 py-3 text-xs font-semibold tracking-wide uppercase transition-colors',
            tab === 'activity'
              ? 'text-accent border-b-2 border-accent bg-accent/[0.03]'
              : 'text-slate-400 hover:text-slate-600',
          ].join(' ')}
          onClick={() => setTab('activity')}
        >
          Activity
        </button>
        <button
          className={[
            'flex-1 py-3 text-xs font-semibold tracking-wide uppercase transition-colors',
            tab === 'todos'
              ? 'text-accent border-b-2 border-accent bg-accent/[0.03]'
              : 'text-slate-400 hover:text-slate-600',
          ].join(' ')}
          onClick={() => setTab('todos')}
        >
          To-Do ({completed}/{todos.length})
        </button>
      </div>

      {tab === 'activity' && (
        <div className="p-4 space-y-0">
          {activities.map((a, i) => (
            <div
              key={a.id}
              className={[
                'flex gap-3 py-3',
                i < activities.length - 1 ? 'border-b border-slate-100' : '',
              ].join(' ')}
            >
              <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-[11px] font-semibold text-slate-500 shrink-0 mt-0.5">
                {a.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700">
                  <span className="font-medium">{a.user}</span>{' '}
                  <span className="text-slate-400">{a.action}</span>{' '}
                  <span className="font-medium text-slate-700">{a.target}</span>
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'todos' && (
        <div className="p-4 space-y-1">
          {todos.map((todo) => (
            <label
              key={todo.id}
              className="flex items-center gap-3 py-2 px-2 -mx-2 rounded-btn hover:bg-slate-50 cursor-pointer transition-colors"
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="w-4 h-4 rounded border-slate-300 text-accent focus:ring-accent/20 cursor-pointer"
              />
              <span
                className={[
                  'text-sm',
                  todo.done ? 'text-slate-300 line-through' : 'text-slate-600',
                ].join(' ')}
              >
                {todo.text}
              </span>
            </label>
          ))}
        </div>
      )}
    </div>
  )
}
