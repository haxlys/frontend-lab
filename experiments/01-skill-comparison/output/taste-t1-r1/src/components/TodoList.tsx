import { CheckCircle, Circle } from "@phosphor-icons/react"

interface Todo {
  id: number
  text: string
  done: boolean
}

export function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div className="bg-white rounded-lg border border-navy-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">Today's Tasks</h3>
      <ul className="space-y-1">
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className="flex items-center gap-3 py-2 px-2 rounded-md hover:bg-navy-50 cursor-pointer transition-colors group">
              <span className="shrink-0">
                {todo.done ? (
                  <CheckCircle size={20} weight="fill" className="text-navy-300" />
                ) : (
                  <Circle size={20} weight="bold" className="text-navy-300 group-hover:text-accent-600 transition-colors" />
                )}
              </span>
              <span
                className={`text-sm ${
                  todo.done
                    ? "text-navy-400 line-through"
                    : "text-navy-700"
                }`}
              >
                {todo.text}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
