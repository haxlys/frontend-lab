import StatCard from './StatCard'
import PipelineChart from './PipelineChart'
import ActivityTimeline from './ActivityTimeline'
import TodoList from './TodoList'
import CustomerTable from './CustomerTable'
import { stats, pipelineStages, recentActivities, todayTodos, customers } from '../data/mock'

export default function Dashboard() {
  return (
    <main className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">대시보드</h1>
          <p className="text-sm text-slate-500 mt-0.5">영업 현황을 한눈에 확인하세요</p>
        </div>
        <div className="flex items-center gap-2">
          <select className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500">
            <option>이번 달</option>
            <option>지난 달</option>
            <option>이번 분기</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PipelineChart stages={pipelineStages} />
        </div>
        <div className="space-y-6">
          <ActivityTimeline activities={recentActivities} />
          <TodoList todos={todayTodos} />
        </div>
      </div>

      <CustomerTable customers={customers} />
    </main>
  )
}
