import { type FC } from "react";
import { AppLayout } from "./components/layout";
import { StatCards } from "./components/dashboard/StatCards";
import { PipelineChart } from "./components/dashboard/PipelineChart";
import { ActivityTimeline } from "./components/dashboard/ActivityTimeline";
import { TodoList } from "./components/dashboard/TodoList";
import { CustomerTable } from "./components/dashboard/CustomerTable";

const App: FC = () => (
  <AppLayout>
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[22px] font-semibold text-navy-800 tracking-tight">
            안녕하세요, 김지원님
          </h1>
          <p className="text-[13px] text-navy-400 mt-0.5">
            오늘의 영업 현황을 한눈에 확인하세요
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-[13px] font-medium text-navy-400 border border-navy-200 rounded-md hover:bg-navy-50 transition-colors">
            이번 주
          </button>
          <button className="px-4 py-2 text-[13px] font-medium text-white bg-navy-800 rounded-md hover:bg-navy-700 transition-colors">
            리포트 보기
          </button>
        </div>
      </div>

      <StatCards />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <PipelineChart />
        </div>
        <div className="lg:col-span-1 space-y-4">
          <ActivityTimeline />
          <TodoList />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-3">
          <CustomerTable />
        </div>
      </div>
    </div>
  </AppLayout>
);

export default App;
