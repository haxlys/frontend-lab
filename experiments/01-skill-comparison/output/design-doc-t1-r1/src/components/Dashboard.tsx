import StatCard from './StatCard'
import ActivityList from './ActivityList'
import BarChart from './BarChart'
import { stats, activities, chartData } from '../data/mock'

export default function Dashboard() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Overview
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Your SaaS metrics at a glance.
          </p>
        </div>
        <span className="text-xs text-gray-400">
          Last updated: {new Date().toLocaleTimeString()}
        </span>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} data={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <BarChart data={chartData} title="Monthly Revenue Growth" />
        </div>
        <div className="lg:col-span-1">
          <ActivityList items={activities} />
        </div>
      </div>
    </div>
  )
}
