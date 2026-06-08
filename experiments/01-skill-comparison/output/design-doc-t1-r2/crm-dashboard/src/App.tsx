import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import StatCard from './components/StatCard';
import BarChart from './components/BarChart';
import ActivityTimeline from './components/ActivityTimeline';
import TodoList from './components/TodoList';
import CustomerTable from './components/CustomerTable';
import { stats, pipelineData, activities, customers, todos } from './data/dashboard';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar mobileOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <TopBar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            <div>
              <h1 className="text-xl font-bold text-navy">대시보드</h1>
              <p className="text-sm text-slate-500 mt-0.5">
                영업 현황을 한눈에 확인하세요
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white border border-slate-200 rounded-md shadow-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-sm font-semibold text-navy">영업 파이프라인</h2>
                    <p className="text-xs text-slate-400 mt-0.5">단계별 딜 현황</p>
                  </div>
                  <div className="flex gap-1">
                    {['이번 달', '이번 분기', '올해'].map((p, i) => (
                      <button
                        key={p}
                        className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                          i === 0
                            ? 'bg-blue-50 text-blue-700'
                            : 'text-slate-500 hover:bg-slate-100'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
                <BarChart data={pipelineData} />
              </div>

              <div className="bg-white border border-slate-200 rounded-md shadow-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-navy">To Do</h2>
                  <span className="text-xs text-slate-400">
                    {todos.filter((t) => !t.done).length}개 남음
                  </span>
                </div>
                <TodoList todos={todos} />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-white border border-slate-200 rounded-md shadow-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-navy">최근 업데이트된 고객</h2>
                  <button className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    전체 보기 →
                  </button>
                </div>
                <CustomerTable customers={customers} />
              </div>

              <div className="bg-white border border-slate-200 rounded-md shadow-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-navy">최근 활동</h2>
                  <button className="text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors">
                    전체 보기 →
                  </button>
                </div>
                <ActivityTimeline activities={activities} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
