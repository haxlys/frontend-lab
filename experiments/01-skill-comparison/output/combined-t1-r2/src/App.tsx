import type { StatData, Activity, BarData } from './types'
import StatCard from './components/StatCard'
import ActivityList from './components/ActivityList'
import BarChart from './components/BarChart'

const stats: StatData[] = [
  { title: 'Revenue', value: '$48,294', change: 12.5, color: 'indigo' },
  { title: 'Users', value: '2,841', change: 8.2, color: 'pink' },
  { title: 'Orders', value: '1,293', change: -3.1, color: 'emerald' },
  { title: 'Growth', value: '24.8%', change: 4.7, color: 'amber' },
]

const activities: Activity[] = [
  { id: 1, user: '김민수', action: 'Pro 플랜 구독 완료', time: '5분 전', status: 'completed' },
  { id: 2, user: '박지현', action: '새 프로젝트 생성', time: '12분 전', status: 'completed' },
  { id: 3, user: '이서연', action: '결제 수단 등록', time: '28분 전', status: 'pending' },
  { id: 4, user: '최준호', action: '팀원 초대', time: '1시간 전', status: 'in_progress' },
  { id: 5, user: '정다은', action: 'API 키 회전', time: '2시간 전', status: 'failed' },
  { id: 6, user: '강태현', action: '월간 리포트 다운로드', time: '3시간 전', status: 'completed' },
  { id: 7, user: '윤미래', action: '엔터프라이즈 전환', time: '4시간 전', status: 'completed' },
]

const chartData: BarData[] = [
  { month: '1월', value: 4200 },
  { month: '2월', value: 3800 },
  { month: '3월', value: 5100 },
  { month: '4월', value: 4600 },
  { month: '5월', value: 5900 },
  { month: '6월', value: 5400 },
  { month: '7월', value: 7200 },
  { month: '8월', value: 6800 },
  { month: '9월', value: 8100 },
  { month: '10월', value: 7600 },
  { month: '11월', value: 8800 },
  { month: '12월', value: 9400 },
]

export default function App() {
  return (
    <div className="min-h-screen bg-brand-bg">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-brand-surface/80 backdrop-blur-lg border-b border-slate-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-primary rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg className="w-4.5 h-4.5 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-sm font-bold tracking-tight text-brand-text-primary">AcmeDash</span>
          </div>

          <div className="flex items-center gap-3">
            <button className="relative p-2 text-brand-text-secondary hover:text-brand-text-primary hover:bg-slate-100 rounded-lg transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-brand-secondary rounded-full ring-2 ring-white" />
            </button>

            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-xs font-bold ring-2 ring-white">
              A
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        {/* Stats Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <StatCard key={s.title} data={s} />
          ))}
        </section>

        {/* Charts + Activity */}
        <section className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3">
            <BarChart data={chartData} />
          </div>
          <div className="lg:col-span-2">
            <ActivityList activities={activities} />
          </div>
        </section>
      </main>
    </div>
  )
}
