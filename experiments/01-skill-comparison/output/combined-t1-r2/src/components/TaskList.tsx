import type { Task } from '../types'

interface TaskListProps {
  tasks: Task[]
}

const priorityColors: Record<Task['priority'], string> = {
  high: 'bg-red-500',
  medium: 'bg-amber-500',
  low: 'bg-slate-300',
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900">Today's Tasks</h3>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
          {tasks.filter((t) => !t.done).length} remaining
        </span>
      </div>
      <div className="flex flex-col gap-0.5">
        {tasks.map((task) => (
          <label
            key={task.id}
            className="flex cursor-pointer items-start gap-3 rounded-md px-2 py-2 transition-colors hover:bg-slate-50"
          >
            <input
              type="checkbox"
              defaultChecked={task.done}
              className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-accent focus:ring-accent/20"
            />
            <div className="min-w-0 flex-1">
              <span className={`block text-[13px] leading-snug ${task.done ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                {task.title}
              </span>
              <span className="mt-0.5 block text-[11px] text-slate-400">{task.due}</span>
            </div>
            <span className={`mt-1 h-2 w-2 shrink-0 rounded-full ${priorityColors[task.priority]}`} />
          </label>
        ))}
      </div>
    </div>
  )
}
