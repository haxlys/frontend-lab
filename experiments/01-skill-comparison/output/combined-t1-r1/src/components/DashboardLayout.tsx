import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex min-h-[100dvh] bg-slate-50">
      <Sidebar />

      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-60 bg-navy-950">
            <div className="flex items-center justify-between px-5 h-16 border-b border-navy-800">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 bg-accent rounded-md flex items-center justify-center">
                  <span className="text-white font-bold text-xs">C</span>
                </div>
                <span className="font-semibold text-white text-base">CRM</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-1.5 rounded-md text-slate-400 hover:bg-navy-800 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>
            <Sidebar />
          </div>
        </div>
      )}

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <div className="lg:hidden flex items-center gap-3 px-4 h-12 border-b border-slate-200 bg-white">
          <button
            onClick={() => setMobileOpen(true)}
            className="p-1.5 rounded-md hover:bg-slate-100 text-slate-500"
          >
            <List size={20} />
          </button>
          <span className="text-sm font-medium text-slate-700">Dashboard</span>
        </div>

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
