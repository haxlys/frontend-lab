import { useState } from 'react';
import { CheckIcon } from './icons';
import type { TodoItem } from '../data/mock';

interface TodoListProps {
  items: TodoItem[];
}

export default function TodoList({ items }: TodoListProps) {
  const [todos, setTodos] = useState(items);

  function toggle(id: number) {
    setTodos(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    );
  }

  const incomplete = todos.filter(t => !t.done).length;

  return (
    <div className="bg-white border border-navy-200 rounded-lg p-5 h-full">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-sm font-semibold text-navy-800">오늘의 할 일</h3>
          <p className="text-xs text-navy-400 mt-0.5">{incomplete}개 남음</p>
        </div>
        <button className="text-xs font-medium text-accent-600 hover:text-accent-500 transition-colors">
          + 추가
        </button>
      </div>

      <div className="space-y-0.5 max-h-[340px] overflow-y-auto">
        {todos.map((todo) => (
          <button
            key={todo.id}
            onClick={() => toggle(todo.id)}
            className={`
              flex items-center gap-3 w-full text-left py-2.5 px-2 rounded-md
              transition-all duration-100 group
              hover:bg-navy-50
            `}
          >
            <span className={`
              w-5 h-5 rounded border-2 flex-shrink-0 flex items-center justify-center
              transition-colors
              ${todo.done
                ? 'bg-teal-500 border-teal-500 text-white'
                : todo.priority === 'high'
                  ? 'border-red-300 hover:border-red-400'
                  : 'border-navy-300 hover:border-navy-400'
              }
            `}>
              {todo.done && <CheckIcon />}
            </span>
            <span className={`
              text-sm flex-1
              ${todo.done ? 'text-navy-400 line-through' : 'text-navy-700'}
            `}>
              {todo.text}
            </span>
            {!todo.done && (
              <span className={`
                text-[10px] font-semibold uppercase tracking-wide px-1.5 py-0.5 rounded
                ${todo.priority === 'high' ? 'bg-red-50 text-red-500' : ''}
                ${todo.priority === 'medium' ? 'bg-amber-50 text-amber-600' : ''}
                ${todo.priority === 'low' ? 'bg-navy-100 text-navy-500' : ''}
                opacity-0 group-hover:opacity-100 transition-opacity
              `}>
                {todo.priority === 'high' ? '높음' : todo.priority === 'medium' ? '중간' : '낮음'}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
