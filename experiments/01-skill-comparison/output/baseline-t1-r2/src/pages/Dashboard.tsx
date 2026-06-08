import StatCard from '../components/StatCard';
import PipelineChart from '../components/PipelineChart';
import ActivityTimeline from '../components/ActivityTimeline';
import TodoList from '../components/TodoList';
import CustomerTable from '../components/CustomerTable';
import {
  statCards,
  pipelineData,
  recentActivities,
  todos,
  customers,
} from '../data/mock';

export default function Dashboard() {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-navy-800 tracking-tight">대시보드</h1>
          <p className="text-sm text-navy-500 mt-0.5">
            영업 현황을 한눈에 확인하세요
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-navy-400 hidden sm:inline">
            마지막 업데이트: 2026년 6월 8일
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((stat) => (
          <StatCard key={stat.title} data={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <PipelineChart data={pipelineData} />
        </div>
        <div className="flex flex-col gap-4">
          <ActivityTimeline activities={recentActivities} />
          <TodoList todos={todos} />
        </div>
      </div>

      <div>
        <CustomerTable customers={customers} />
      </div>
    </div>
  );
}
