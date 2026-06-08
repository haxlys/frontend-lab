import { DollarSign, UserPlus, Target, Briefcase } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { formatCompactNumber, formatPercent } from '../lib/utils';

const stats = [
  {
    label: '총 매출',
    value: formatCompactNumber(2843000),
    delta: 12.4,
    caption: '전월 대비',
    icon: DollarSign,
    trend: [4, 6, 5, 8, 7, 10, 12, 11, 14],
  },
  {
    label: '신규 리드',
    value: formatCompactNumber(1482),
    delta: 8.2,
    caption: '전주 대비',
    icon: UserPlus,
    trend: [5, 7, 6, 8, 9, 8, 11, 12, 11],
  },
  {
    label: '전환율',
    value: formatPercent(24.6),
    delta: -2.1,
    caption: '전월 대비',
    icon: Target,
    trend: [10, 12, 11, 9, 10, 8, 7, 8, 7],
  },
  {
    label: '진행 중인 딜',
    value: formatCompactNumber(327),
    delta: 5.7,
    caption: '전주 대비',
    icon: Briefcase,
    trend: [6, 7, 8, 8, 9, 10, 10, 11, 12],
  },
];

export function StatCardsRow() {
  return (
    <section
      aria-label="주요 지표"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4"
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </section>
  );
}
