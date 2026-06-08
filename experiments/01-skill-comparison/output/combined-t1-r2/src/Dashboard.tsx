import {
  CurrencyDollar,
  Users,
  TrendUp,
  Briefcase,
} from '@phosphor-icons/react/dist/ssr'
import { StatCard } from './components/StatCard'
import { PipelineChart } from './components/PipelineChart'
import { ActivityFeed } from './components/ActivityFeed'
import { TaskList } from './components/TaskList'
import { CustomerTable } from './components/CustomerTable'
import { stats, pipelineData, activities, customers, tasks } from './data'

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500">Welcome back, Alex. Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard {...stats[0]} icon={<CurrencyDollar className="h-[18px] w-[18px]" />} />
        <StatCard {...stats[1]} icon={<Users className="h-[18px] w-[18px]" />} />
        <StatCard {...stats[2]} icon={<TrendUp className="h-[18px] w-[18px]" />} />
        <StatCard {...stats[3]} icon={<Briefcase className="h-[18px] w-[18px]" />} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PipelineChart data={pipelineData} />
        </div>
        <div className="flex flex-col gap-4">
          <ActivityFeed activities={activities} />
          <TaskList tasks={tasks} />
        </div>
      </div>

      <CustomerTable customers={customers} />
    </div>
  )
}
