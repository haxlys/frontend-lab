import { ActivityPanel } from './ActivityPanel';
import { CustomerTable } from './CustomerTable';
import { PageHeader } from './PageHeader';
import { PipelineChart } from './PipelineChart';
import { StatCards } from './StatCards';

export function Dashboard() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="px-4 lg:px-6 py-5 lg:py-6 max-w-[1600px] mx-auto space-y-5 lg:space-y-6">
        <PageHeader />

        <section>
          <StatCards />
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
          <div className="lg:col-span-2 min-h-[360px]">
            <PipelineChart />
          </div>
          <div className="lg:col-span-1 min-h-[360px]">
            <ActivityPanel />
          </div>
        </section>

        <section>
          <CustomerTable />
        </section>

        <footer className="text-2xs text-ink-400 py-4 flex items-center justify-between">
          <span>© 2026 Lattice CRM</span>
          <span>v0.1.0 · 모의 데이터로 구성되었습니다</span>
        </footer>
      </div>
    </div>
  );
}
