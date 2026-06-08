import type { StatData } from '../types'

interface Props {
  data: StatData
}

const colorMap = {
  indigo: {
    bg: 'bg-indigo-50',
    icon: 'bg-indigo-500',
    text: 'text-indigo-600',
    glow: 'shadow-indigo-500/15',
  },
  pink: {
    bg: 'bg-pink-50',
    icon: 'bg-pink-500',
    text: 'text-pink-600',
    glow: 'shadow-pink-500/15',
  },
  emerald: {
    bg: 'bg-emerald-50',
    icon: 'bg-emerald-500',
    text: 'text-emerald-600',
    glow: 'shadow-emerald-500/15',
  },
  amber: {
    bg: 'bg-amber-50',
    icon: 'bg-amber-500',
    text: 'text-amber-600',
    glow: 'shadow-amber-500/15',
  },
}

const iconMap: Record<StatData['color'], string> = {
  indigo: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z',
  pink: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
  emerald: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
  amber: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z',
}

export default function StatCard({ data }: Props) {
  const c = colorMap[data.color]
  const isPositive = data.change >= 0

  return (
    <div className="relative overflow-hidden bg-brand-surface rounded-card shadow-card p-5 sm:p-6 transition-all duration-200 hover:shadow-elevated hover:-translate-y-0.5">
      <div className={`absolute top-0 right-0 w-24 h-24 ${c.bg} rounded-bl-full opacity-40 -mr-8 -mt-8`} />

      <div className="relative flex items-start justify-between">
        <div className="space-y-1">
          <span className="text-xs font-medium tracking-wide uppercase text-brand-text-secondary">
            {data.title}
          </span>
          <p className="text-2xl sm:text-[28px] font-bold tracking-tight text-brand-text-primary">
            {data.value}
          </p>
        </div>

        <div className={`flex-shrink-0 w-10 h-10 ${c.bg} rounded-card flex items-center justify-center ${c.glow} shadow-lg`}>
          <svg className={`w-5 h-5 ${c.text.replace('text', 'text')}`} fill="currentColor" viewBox="0 0 24 24">
            <path d={iconMap[data.color]} />
          </svg>
        </div>
      </div>

      <div className="relative mt-4 flex items-center gap-1.5">
        <span className={`inline-flex items-center text-xs font-semibold ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
          <svg className="w-3.5 h-3.5 mr-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isPositive ? 'M5 10l7-7m0 0l7 7m-7-7v18' : 'M19 14l-7 7m0 0l-7-7m7 7V3'} />
          </svg>
          {Math.abs(data.change)}%
        </span>
        <span className="text-xs text-brand-text-secondary">vs last month</span>
      </div>
    </div>
  )
}
