import { type FC, useState } from 'react';
import Icon from './Icon';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  const [items, setItems] = useState(todos);

  const toggle = (id: number) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  };

  return (
    <div className="flex flex-col gap-0">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => toggle(item.id)}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md hover:bg-slate-50 transition-colors duration-150 text-left w-full group"
        >
          <div
            className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all duration-150 ${
              item.done
                ? 'bg-blue-500 border-blue-500'
                : 'border-slate-300 group-hover:border-slate-400'
            }`}
          >
            {item.done && <Icon name="Check" className="w-3 h-3 text-white" />}
          </div>
          <span
            className={`text-sm transition-colors duration-150 ${
              item.done ? 'text-slate-400 line-through' : 'text-navy'
            }`}
          >
            {item.text}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TodoList;
