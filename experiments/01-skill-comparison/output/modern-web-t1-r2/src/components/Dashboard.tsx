import StatsCard from './StatsCard';
import PipelineChart from './PipelineChart';
import ActivityTimeline from './ActivityTimeline';
import TodoList from './TodoList';
import CustomerTable from './CustomerTable';
import { stats, pipelineData, activities, todos, customers } from '../data/mock';

export default function Dashboard() {
  return (
    <main className="flex-1 min-w-0">
      <div className="p-4 lg:p-6 space-y-5">
        {/* Page header */}
        <div>
          <h1 className="text-xl lg:text-2xl font-bold text-navy-800 tracking-tight">대시보드</h1>
          <p className="text-sm text-navy-400 mt-1">
            안녕하세요, 정도윤님. 오늘의 영업 현황을 확인해보세요.
          </p>
        </div>

        {/* Row 1: Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {stats.map((stat) => (
            <StatsCard key={stat.label} data={stat} />
          ))}
        </div>

        {/* Row 2: Pipeline chart + Right column */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <PipelineChart data={pipelineData} />
          </div>
          <div className="lg:col-span-1">
            <div className="grid gap-4 h-full">
              <ActivityTimeline activities={activities} />
              <TodoList items={todos} />
            </div>
          </div>
        </div>

        {/* Row 3: Customer table */}
        <CustomerTable customers={customers} />
      </div>
    </main>
  );
}
