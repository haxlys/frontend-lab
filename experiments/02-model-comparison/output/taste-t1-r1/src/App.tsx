import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Badge } from '@/components/ui/Badge';
import { KpiRow } from '@/components/dashboard/KpiRow';
import { PipelineChart } from '@/components/dashboard/PipelineChart';
import { ActivityAndTasks } from '@/components/dashboard/ActivityAndTasks';
import { CustomersTable } from '@/components/dashboard/CustomersTable';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-full min-h-[100dvh] w-full bg-surface-base text-ink-primary">
      {/* Desktop sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen ? (
        <div className="fixed inset-0 z-50 flex lg:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-ink-primary/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative z-10 h-full w-sidebar max-w-[85%] animate-in slide-in-from-left">
            <Sidebar onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuToggle={() => setMobileOpen(true)} />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-[1400px] px-4 pb-12 pt-6 sm:px-6 lg:px-8">
            {/* Page header */}
            <div className="flex flex-col gap-3 pb-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-lg font-semibold tracking-tight text-ink-primary sm:text-xl">
                    Good morning, Sara
                  </h1>
                  <Badge tone="blue" size="xs" leadingIcon={<Icon.Sparkles size={10} />}>
                    4 deals closing this week
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-ink-tertiary">
                  Here's what's happening across your pipeline today.
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="md" leadingIcon={<Icon.Download size={14} />}>
                  Export
                </Button>
                <Button variant="primary" size="md" leadingIcon={<Icon.Plus size={14} />}>
                  New deal
                </Button>
              </div>
            </div>

            {/* KPI row */}
            <KpiRow />

            {/* Row 2: Pipeline (2/3) + Activity (1/3) */}
            <div className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="lg:col-span-1">
                <ActivityAndTasks />
              </div>
            </div>

            {/* Row 3: Customers table */}
            <div className="mt-5">
              <CustomersTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
