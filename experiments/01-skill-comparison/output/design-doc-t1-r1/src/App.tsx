import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { StatCard, PipelineChart, ActivityTimeline, CustomerTable } from "./components/dashboard";

function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-navy-50">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed((v) => !v)}
      />

      <div
        className={`transition-all duration-200 ${
          sidebarCollapsed ? "ml-[68px]" : "ml-[240px]"
        }`}
      >
        <TopBar />

        <main className="p-6 space-y-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-navy-800">대시보드</h1>
            <p className="mt-1 text-sm text-navy-400">
              영업 현황 및 주요 지표를 한눈에 확인하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              label="총 매출"
              value="$284,500"
              change="+8.2%"
              changeType="up"
              icon="DollarSign"
            />
            <StatCard
              label="신규 리드"
              value="134"
              change="+12.5%"
              changeType="up"
              icon="UserPlus"
            />
            <StatCard
              label="전환율"
              value="8.74%"
              change="-1.2%"
              changeType="down"
              icon="Percent"
            />
            <StatCard
              label="진행 중인 딜"
              value="42"
              change="+3.1%"
              changeType="up"
              icon="Briefcase"
            />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PipelineChart />
            </div>
            <div className="lg:col-span-1">
              <ActivityTimeline />
            </div>
          </div>

          <CustomerTable />
        </main>
      </div>
    </div>
  );
}

export default App;
