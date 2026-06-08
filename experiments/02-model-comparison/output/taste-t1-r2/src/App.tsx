import { CurrencyDollar, TrendUp, Funnel, Handshake } from "phosphor-react";
import { Sidebar } from "./components/layout/Sidebar";
import { TopBar } from "./components/layout/TopBar";
import { StatCard } from "./components/dashboard/StatCard";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityPanel } from "./components/dashboard/ActivityPanel";
import { RecentCustomers } from "./components/dashboard/RecentCustomers";

export default function App() {
  return (
    <div className="min-h-[100dvh] flex bg-ink-50 text-ink-800">
      <Sidebar />

      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar />

        <main className="flex-1 px-4 md:px-6 lg:px-8 py-6 md:py-8 max-w-[1600px] w-full mx-auto">
          <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold tracking-tight text-ink-900">
                Dashboard
              </h1>
              <p className="text-sm text-ink-500 mt-1">
                A snapshot of pipeline health, account activity, and what needs
                attention today.
              </p>
            </div>
            <div className="flex items-center gap-2 text-2xs text-ink-500">
              <span className="inline-flex items-center gap-1.5 h-7 px-2.5 rounded-md border border-ink-200 bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live · synced 2 min ago
              </span>
              <span className="hidden sm:inline">Last 30 days</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <StatCard
              label="Total revenue"
              value="$1.42M"
              delta={12.4}
              deltaLabel="vs. last period"
              icon={CurrencyDollar}
              hint="7 deals closed in the last 30 days"
            />
            <StatCard
              label="New leads"
              value="284"
              delta={8.2}
              deltaLabel="vs. last period"
              icon={TrendUp}
              hint="42 from referral · 31 from outbound"
            />
            <StatCard
              label="Conversion rate"
              value="24.6%"
              delta={-1.8}
              deltaLabel="vs. last period"
              icon={Funnel}
              hint="Lead → Closed-won across 142 cohorts"
            />
            <StatCard
              label="Deals in progress"
              value="63"
              delta={4.7}
              deltaLabel="vs. last period"
              icon={Handshake}
              hint="$1.4M weighted forecast"
            />
          </div>

          <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 min-w-0">
              <PipelineChart />
            </div>
            <div className="lg:col-span-1 min-w-0">
              <ActivityPanel />
            </div>
          </div>

          <div className="mt-4 md:mt-6">
            <RecentCustomers />
          </div>

          <footer className="mt-8 pt-6 border-t border-ink-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-2xs text-ink-500">
            <div>© 2026 Lumen CRM · v3.4.1</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-ink-800 transition-colors" href="#">
                Changelog
              </a>
              <a className="hover:text-ink-800 transition-colors" href="#">
                Status
              </a>
              <a className="hover:text-ink-800 transition-colors" href="#">
                Docs
              </a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
