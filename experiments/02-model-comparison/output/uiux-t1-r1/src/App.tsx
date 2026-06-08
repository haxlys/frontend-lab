import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';
import { PageHeader } from './components/PageHeader';
import { StatCardsRow } from './components/StatCardsRow';
import { PipelineChartCard } from './components/PipelineChartCard';
import { ActivityTodoCard } from './components/ActivityTodoCard';
import { CustomersTableCard } from './components/CustomersTableCard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-dvh w-full bg-background text-foreground">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto px-4 py-6 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-6">
            <PageHeader />

            <StatCardsRow />

            <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="xl:col-span-2">
                <PipelineChartCard />
              </div>
              <div className="xl:col-span-1">
                <ActivityTodoCard />
              </div>
            </div>

            <CustomersTableCard />

            <footer className="flex flex-col items-center justify-between gap-2 border-t border-border pt-4 text-xs text-muted-foreground sm:flex-row">
              <p>© 2025 Pulse CRM. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-foreground">개인정보처리방침</a>
                <a href="#" className="hover:text-foreground">이용약관</a>
                <a href="#" className="hover:text-foreground">상태</a>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
