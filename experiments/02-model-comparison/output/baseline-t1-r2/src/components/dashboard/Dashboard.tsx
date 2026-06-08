import { Button } from '@/components/ui/Button';
import { KpiGrid } from '@/components/dashboard/KpiGrid';
import { PipelineChart } from '@/components/dashboard/PipelineChart';
import { ActivityPanel } from '@/components/dashboard/ActivityPanel';
import { CustomersTable } from '@/components/dashboard/CustomersTable';
import { Icon } from '@/components/Icon';

export function Dashboard() {
  return (
    <div className="p-4 sm:p-6 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink-900">
            Good afternoon, Eleanor
          </h2>
          <p className="text-sm text-ink-500 mt-0.5">
            Here's what's happening with your pipeline today, Monday, June 8.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="md" leftIcon={<Icon.Calendar size={14} />}>
            This month
          </Button>
          <Button variant="primary" size="md" leftIcon={<Icon.Plus size={14} />}>
            Add customer
          </Button>
        </div>
      </div>

      <KpiGrid />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <PipelineChart />
        </div>
        <div className="lg:col-span-1">
          <ActivityPanel />
        </div>
      </div>

      <CustomersTable />
    </div>
  );
}
