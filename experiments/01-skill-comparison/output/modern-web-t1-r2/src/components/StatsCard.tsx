import { TrendingUpIcon, TrendingDownIcon } from './icons';
import type { StatData } from '../data/mock';

interface StatsCardProps {
  data: StatData;
}

export default function StatsCard({ data }: StatsCardProps) {
  const isUp = data.trend === 'up';
  const isDown = data.trend === 'down';

  return (
    <div className="bg-white border border-navy-200 rounded-lg p-5
                    hover:border-navy-300 hover:shadow-sm transition-all duration-150">
      <p className="text-xs font-medium text-navy-400 uppercase tracking-wide mb-2">
        {data.label}
      </p>
      <p className="text-2xl font-bold text-navy-800 tracking-tight mb-2">
        {data.value}
      </p>
      <div className="flex items-center gap-1.5">
        {isUp && (
          <span className="flex items-center gap-0.5 text-xs font-semibold text-teal-600">
            <TrendingUpIcon />
            {data.change}
          </span>
        )}
        {isDown && (
          <span className="flex items-center gap-0.5 text-xs font-semibold text-red-500">
            <TrendingDownIcon />
            {data.change}
          </span>
        )}
        {!isUp && !isDown && (
          <span className="text-xs font-medium text-navy-400">
            {data.change}
          </span>
        )}
        <span className="text-xs text-navy-400">vs 지난달</span>
      </div>
    </div>
  );
}
