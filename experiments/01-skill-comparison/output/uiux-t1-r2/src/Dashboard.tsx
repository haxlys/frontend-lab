import { useState } from "react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { StatCard } from "./components/dashboard/StatCard";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityTimeline } from "./components/dashboard/ActivityTimeline";
import { TodoList } from "./components/dashboard/TodoList";
import { CustomerTable } from "./components/dashboard/CustomerTable";
import { stats, pipelineData, activities, todos, customers } from "./data/mock";

export default function Dashboard() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-slate-50">
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 z-30 transition-transform duration-200 lg:translate-x-0 ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>

      <div className="lg:pl-sidebar">
        <TopBar onMenuClick={() => setMobileOpen(true)} />

        <main className="p-4 md:p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-lg font-bold tracking-tight text-slate-900">
              안녕하세요, 김지훈님 👋
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              오늘도 좋은 하루입니다. 진행 중인 딜 134건을 확인해보세요.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="grid gap-6 lg:grid-cols-3 mb-6">
            <div className="lg:col-span-2">
              <PipelineChart data={pipelineData} />
            </div>
            <div className="flex flex-col">
              <ActivityTimeline activities={activities} />
              <TodoList todos={todos} />
            </div>
          </div>

          <CustomerTable customers={customers} />
        </main>
      </div>
    </div>
  );
}
