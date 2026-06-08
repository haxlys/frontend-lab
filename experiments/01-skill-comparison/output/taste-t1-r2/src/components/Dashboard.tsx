import { useState } from "react";
import { cn } from "../lib/utils";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { MobileSidebar } from "./MobileSidebar";
import { StatisticsCards } from "./StatisticsCards";
import { PipelineChart } from "./PipelineChart";
import { ActivityTimeline } from "./ActivityTimeline";
import { TodoList } from "./TodoList";
import { CustomersTable } from "./CustomersTable";

export function Dashboard() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <Sidebar />

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="w-60 h-full bg-white border-r border-slate-200 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MobileSidebar onClose={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar
          onMobileMenuToggle={() => setMobileMenuOpen((v) => !v)}
          mobileMenuOpen={mobileMenuOpen}
        />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className={cn("max-w-[1400px] mx-auto space-y-5")}>
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[22px] font-semibold text-slate-900 tracking-tight">
                  Dashboard
                </h1>
                <p className="text-[13px] text-slate-500 mt-0.5">
                  Welcome back, Jane. Here's what's happening today.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="text-[12px] text-slate-400">
                  Last updated: just now
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
            </div>

            <StatisticsCards />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              <div className="lg:col-span-2">
                <PipelineChart />
              </div>
              <div className="flex flex-col gap-5">
                <ActivityTimeline />
                <TodoList />
              </div>
            </div>

            <CustomersTable />
          </div>
        </main>
      </div>
    </div>
  );
}
