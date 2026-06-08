import { useState } from 'react';
import type { Todo } from '../data/mock';

interface TodoListProps {
  todos: Todo[];
}

const priorityColors: Record<Todo['priority'], string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-navy-300',
};

export default function TodoList({ todos: initialTodos }: TodoListProps) {
  const [todos, setTodos] = useState(initialTodos);

  const toggle = (id: string) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="bg-white rounded-md border border-navy-200 shadow-[var(--shadow-card)]">
      <div className="px-5 py-4 border-b border-navy-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-navy-800">오늘의 할 일</h3>
        <span className="text-xs text-navy-400">
          {todos.filter((t) => !t.done).length}개 남음
        </span>
      </div>
      <div className="p-2">
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => toggle(todo.id)}
            className="w-full flex items-start gap-3 px-3 py-2.5 rounded-sm hover:bg-navy-50 transition-colors text-left group"
          >
            <div
              className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors ${
                todo.done
                  ? 'bg-accent-600 border-accent-600'
                  : 'border-navy-300 group-hover:border-accent-400'
              }`}
            >
              {todo.done && (
                <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <span
                className={`text-sm block truncate ${
                  todo.done ? 'text-navy-300 line-through' : 'text-navy-700'
                }`}
              >
                {todo.text}
              </span>
            </div>
            <span
              className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${priorityColors[todo.priority]}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
