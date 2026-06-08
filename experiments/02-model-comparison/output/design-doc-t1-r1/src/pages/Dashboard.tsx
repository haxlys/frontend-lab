import { DollarSign, UserPlus, Target, Briefcase, ChevronDown } from 'lucide-react';
import { Sidebar } from '../components/layout/Sidebar';
import { TopBar } from '../components/layout/TopBar';
import { StatCard } from '../components/dashboard/StatCard';
import { PipelineChart } from '../components/dashboard/PipelineChart';
import { ActivityFeed } from '../components/dashboard/ActivityFeed';
import { RecentCustomers } from '../components/dashboard/RecentCustomers';
import { formatCurrency, formatNumber } from '../lib/utils';

export function Dashboard() {
  return (
    <div className="flex min-h-screen bg-ink-50">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <PageHeader />
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <StatCard
              label="총 매출"
              value={formatCurrency(2840000)}
              delta={12.4}
              icon={DollarSign}
              helper="지난 30일 대비"
            />
            <StatCard
              label="신규 리드"
              value={formatNumber(348)}
              delta={8.2}
              icon={UserPlus}
              helper="지난 30일 대비"
            />
            <StatCard
              label="전환율"
              value="24.6%"
              delta={-1.8}
              icon={Target}
              helper="지난 30일 대비"
            />
            <StatCard
              label="진행 중인 딜"
              value="42"
              delta={4.5}
              icon={Briefcase}
              helper="지난 30일 대비"
            />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PipelineChart />
            </div>
            <div className="lg:col-span-1">
              <ActivityFeed />
            </div>
          </div>

          <div className="mt-6">
            <RecentCustomers />
          </div>
        </main>
      </div>
    </div>
  );
}

function PageHeader() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-ink-900">대시보드</h1>
        <p className="mt-1 text-sm text-ink-500">
          오늘의 핵심 지표와 영업 활동 요약을 확인하세요.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-ink-200 bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
        >
          이번 분기
          <ChevronDown className="h-3.5 w-3.5 text-ink-400" />
        </button>
        <button
          type="button"
          className="inline-flex h-9 items-center gap-1.5 rounded-md border border-ink-200 bg-white px-3 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50"
        >
          내 팀
          <ChevronDown className="h-3.5 w-3.5 text-ink-400" />
        </button>
      </div>
    </div>
  );
}
