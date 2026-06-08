import { type FC } from 'react';
import Icon from './Icon';

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
  description: string;
}

const StatCard: FC<StatCardProps> = ({ label, value, change, trend, description }) => {
  const isUp = trend === 'up';
  return (
    <div className="bg-white border border-slate-200 rounded-md p-5 flex flex-col gap-1 shadow-card">
      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">{label}</span>
      <span className="text-2xl font-bold text-navy">{value}</span>
      <div className="flex items-center gap-1.5 mt-0.5">
        <span
          className={`inline-flex items-center gap-0.5 text-xs font-semibold rounded-full px-1.5 py-0.5 ${
            isUp ? 'text-green-500 bg-green-50' : 'text-red-500 bg-red-50'
          }`}
        >
          <Icon name={isUp ? 'ArrowUp' : 'ArrowDown'} className="w-3 h-3" />
          {change}
        </span>
        <span className="text-xs text-slate-400">{description}</span>
      </div>
    </div>
  );
};

export default StatCard;
