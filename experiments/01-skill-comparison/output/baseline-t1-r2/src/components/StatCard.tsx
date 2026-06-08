import type { StatCardData } from '../data/mock';

interface StatCardProps {
  data: StatCardData;
}

export default function StatCard({ data }: StatCardProps) {
  return (
    <div className="bg-white rounded-md border border-navy-200 px-5 py-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-navy-400 uppercase tracking-wide">
          {data.title}
        </span>
        {data.title === '총 매출' && (
          <div className="w-8 h-8 rounded-md bg-accent-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="20" x2="12" y2="10" />
              <line x1="18" y1="20" x2="18" y2="4" />
              <line x1="6" y1="20" x2="6" y2="16" />
            </svg>
          </div>
        )}
        {data.title === '신규 리드' && (
          <div className="w-8 h-8 rounded-md bg-teal-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-teal-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
              <circle cx="8.5" cy="7" r="4" />
              <line x1="20" y1="8" x2="20" y2="14" />
              <line x1="23" y1="11" x2="17" y2="11" />
            </svg>
          </div>
        )}
        {data.title === '전환율' && (
          <div className="w-8 h-8 rounded-md bg-green-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
              <polyline points="17 6 23 6 23 12" />
            </svg>
          </div>
        )}
        {data.title === '진행 중인 딜' && (
          <div className="w-8 h-8 rounded-md bg-amber-50 flex items-center justify-center">
            <svg className="w-4 h-4 text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
            </svg>
          </div>
        )}
      </div>
      <div className="text-2xl font-bold text-navy-800 tracking-tight">
        {data.value}
      </div>
      <div className="flex items-center gap-1.5 mt-1">
        <span
          className={`text-xs font-semibold ${
            data.changeType === 'up' ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {data.change}
        </span>
        <span className="text-xs text-navy-400">{data.period}</span>
      </div>
    </div>
  );
}
