import { StatsCard } from './StatsCard'
import { PipelineChart } from './PipelineChart'
import { ActivityTimeline } from './ActivityTimeline'
import { CustomerTable } from './CustomerTable'
import { stats, pipelineStages, customers } from '../data/mockData'

export function Dashboard() {
  return (
    <div className="p-4 lg:p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-slate-800">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">Welcome back, Jane. Here's what's happening today.</p>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <button className="text-xs font-medium text-slate-600 hover:text-slate-800 px-3 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50 transition-colors">
            This Month
          </button>
          <button className="text-xs font-medium text-white bg-blue-600 px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">
            Add Deal
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <StatsCard key={stat.title} stat={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <PipelineChart stages={pipelineStages} />
        </div>
        <div className="lg:col-span-1">
          <ActivityTimeline />
        </div>
      </div>

      <div>
        <CustomerTable data={customers} />
      </div>
    </div>
  )
}
