import { useState } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { Dashboard } from '@/components/dashboard/Dashboard';

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-ink-50 text-ink-900 flex">
      <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0 lg:ml-0">
        <TopBar
          onMenuClick={() => setMobileOpen(true)}
          title="Dashboard"
          subtitle="Workspace overview"
        />
        <main className="flex-1 min-w-0 overflow-x-hidden">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
