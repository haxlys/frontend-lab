import { Sidebar } from "./components/Sidebar"
import { TopBar } from "./components/TopBar"
import { StatCard } from "./components/StatCard"
import { PipelineChart } from "./components/PipelineChart"
import { ActivityTimeline } from "./components/ActivityTimeline"
import { TodoList } from "./components/TodoList"
import { CustomerTable } from "./components/CustomerTable"
import { stats, pipelineStages, activities, todos, customers } from "./data/dashboard"
import { List } from "@phosphor-icons/react"
import { useState } from "react"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-navy-50">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full">
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 lg:ml-56 flex flex-col min-h-screen">
        <div className="lg:hidden flex items-center gap-4 px-4 h-14 border-b border-navy-200 bg-white">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md text-navy-600 hover:bg-navy-100 transition-colors"
          >
            <List size={22} weight="bold" />
          </button>
          <span className="font-semibold text-navy-900 text-lg tracking-tight">FlowCRM</span>
        </div>

        <TopBar />

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 max-w-[1400px] w-full mx-auto">
          <h1 className="text-xl font-semibold text-navy-900 tracking-tight">
            Overview
          </h1>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <PipelineChart data={pipelineStages} />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <ActivityTimeline activities={activities} />
              <TodoList todos={todos} />
            </div>
          </div>

          <div>
            <CustomerTable customers={customers} />
          </div>
        </main>
      </div>
    </div>
  )
}
