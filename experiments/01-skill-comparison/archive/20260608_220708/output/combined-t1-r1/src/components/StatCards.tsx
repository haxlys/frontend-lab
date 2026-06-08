interface Stat {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: string
}

const STATS: Stat[] = [
  { label: 'Revenue', value: '$48,574', change: '+12.5%', changeType: 'up', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z' },
  { label: 'Users', value: '24,312', change: '+8.2%', changeType: 'up', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
  { label: 'Orders', value: '1,847', change: '-3.1%', changeType: 'down', icon: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z' },
  { label: 'Growth', value: '18.6%', change: '+4.8%', changeType: 'up', icon: 'M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z' },
]

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="bg-white rounded-card shadow-[0_1px_2px_rgba(0,0,0,0.06)] p-5 flex items-start justify-between transition-shadow duration-200 hover:shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]"
        >
          <div className="min-w-0">
            <p className="text-[14px] text-[#64748b] font-medium mb-1">{stat.label}</p>
            <p className="text-[24px] font-semibold text-[#1e293b] tracking-tight">{stat.value}</p>
            <p
              className={`text-[14px] font-medium mt-1 ${
                stat.changeType === 'up' ? 'text-emerald-500' : 'text-rose-500'
              }`}
            >
              {stat.change}
              <span className="text-[#64748b] font-normal ml-1">vs last month</span>
            </p>
          </div>
          <div className="shrink-0 w-11 h-11 rounded-[8px] bg-primary-50 flex items-center justify-center ml-3">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" className="text-primary-500">
              <path d={stat.icon} />
            </svg>
          </div>
        </div>
      ))}
    </div>
  )
}
