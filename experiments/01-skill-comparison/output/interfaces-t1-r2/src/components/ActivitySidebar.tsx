import { useState } from 'react'
import { Icon } from './Icon'

interface Todo {
  id: number
  text: string
  done: boolean
  time: string
}

const initialTodos: Todo[] = [
  { id: 1, text: 'Follow up with Acme Corp', done: false, time: '10:00 AM' },
  { id: 2, text: 'Review Q2 pipeline report', done: false, time: '11:30 AM' },
  { id: 3, text: 'Send proposal to Globex', done: true, time: '1:00 PM' },
  { id: 4, text: 'Call with design team', done: false, time: '3:00 PM' },
  { id: 5, text: 'Update CRM deal stages', done: false, time: '4:30 PM' },
]

const activities = [
  {
    text: 'New lead from website form',
    time: '2 min ago',
    type: 'lead',
  },
  {
    text: 'Deal "Enterprise Plan" moved to Proposal',
    time: '18 min ago',
    type: 'pipeline',
  },
  {
    text: 'Jane commented on Acme Corp deal',
    time: '1 hour ago',
    type: 'comment',
  },
  {
    text: 'Contract signed — Globex Inc.',
    time: '3 hours ago',
    type: 'won',
  },
]

const typeStyles: Record<string, string> = {
  lead: 'bg-accent-light text-accent',
  pipeline: 'bg-warning-light text-warning',
  comment: 'bg-slate-100 text-slate-600',
  won: 'bg-success-light text-success',
}

export function ActivitySidebar() {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const doneCount = todos.filter((t) => t.done).length

  return (
    <div className="flex flex-col gap-4 h-full">
      {/* Today's Tasks */}
      <div className="bg-white rounded-[8px] border border-slate-200 p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-slate-800">Today's Tasks</h3>
          <span className="text-xs font-medium text-slate-400">
            {doneCount}/{todos.length}
          </span>
        </div>
        <div className="space-y-1.5">
          {todos.map((todo) => (
            <button
              key={todo.id}
              onClick={() => toggleTodo(todo.id)}
              className="flex items-center gap-3 w-full text-left py-2 px-2 rounded-[6px] transition-colors hover:bg-slate-50"
            >
              <div
                className={[
                  'w-4 h-4 rounded-[4px] border-2 flex items-center justify-center shrink-0 transition-colors',
                  todo.done
                    ? 'bg-accent border-accent'
                    : 'border-slate-300 hover:border-accent',
                ].join(' ')}
              >
                {todo.done && <Icon name="check" size={10} className="text-white" />}
              </div>
              <span
                className={[
                  'text-sm flex-1',
                  todo.done
                    ? 'text-slate-300 line-through'
                    : 'text-slate-700',
                ].join(' ')}
              >
                {todo.text}
              </span>
              <span className="text-[11px] text-slate-400">{todo.time}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-[8px] border border-slate-200 p-5 flex-1">
        <h3 className="text-sm font-semibold text-slate-800 mb-4">Recent Activity</h3>
        <div className="space-y-0">
          {activities.map((act, i) => (
            <div
              key={i}
              className="flex items-start gap-3 py-2.5 border-b border-slate-50 last:border-b-0"
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${typeStyles[act.type]}`}
              />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 truncate">{act.text}</p>
                <p className="text-[11px] text-slate-400 mt-0.5">{act.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
