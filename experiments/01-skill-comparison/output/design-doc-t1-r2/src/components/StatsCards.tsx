import { statCards } from '../data'

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {statCards.map((card) => (
        <div
          key={card.label}
          className="bg-white rounded-card shadow-sm p-6 transition-all duration-200 hover:shadow-md"
        >
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl">{card.icon}</span>
            <span
              className={`text-sm font-medium px-2.5 py-0.5 rounded-pill ${
                card.changeType === 'up'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {card.change}
            </span>
          </div>
          <p className="text-sm text-slate-500 mb-1">{card.label}</p>
          <p className="text-2xl font-semibold text-slate-800">{card.value}</p>
        </div>
      ))}
    </div>
  )
}
