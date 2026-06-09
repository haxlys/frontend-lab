import { useState } from 'react'
import type { TodoItem } from '../types'
import { cn } from '../utils'

interface TodoListProps {
  todos: TodoItem[]
}

export default function TodoList({ todos }: TodoListProps) {
  const [items, setItems] = useState(todos)

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    )
  }

  const doneCount = items.filter((t) => t.done).length

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm flex flex-col h-full">
      <h3 className="mb-1 text-sm font-semibold text-slate-800">오늘의 할 일</h3>
      <p className="mb-4 text-xs text-slate-400">{doneCount}/{items.length} 완료</p>
      <div className="flex-1 space-y-1.5 overflow-y-auto max-h-[180px]">
        {items.map((todo) => (
          <label
            key={todo.id}
            className="flex cursor-pointer items-start gap-3 rounded-md px-1.5 py-1.5 hover:bg-slate-50 transition-colors"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => toggle(todo.id)}
              className="mt-0.5 size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span
              className={cn(
                'text-sm leading-tight',
                todo.done ? 'text-slate-400 line-through' : 'text-slate-700'
              )}
            >
              {todo.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}
