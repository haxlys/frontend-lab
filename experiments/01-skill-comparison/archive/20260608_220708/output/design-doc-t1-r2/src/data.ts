export interface StatCard {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: string
}

export interface Activity {
  id: number
  user: string
  action: string
  time: string
  status: 'success' | 'pending' | 'failed'
}

export interface ChartData {
  month: string
  value: number
}

export const statCards: StatCard[] = [
  {
    label: 'Revenue',
    value: '$48,294',
    change: '+12.5%',
    changeType: 'up',
    icon: '💰',
  },
  {
    label: 'Users',
    value: '2,842',
    change: '+8.2%',
    changeType: 'up',
    icon: '👤',
  },
  {
    label: 'Orders',
    value: '1,257',
    change: '-3.1%',
    changeType: 'down',
    icon: '📦',
  },
  {
    label: 'Growth',
    value: '24.6%',
    change: '+5.4%',
    changeType: 'up',
    icon: '📈',
  },
]

export const activities: Activity[] = [
  { id: 1, user: 'Sarah Kim', action: 'Completed purchase', time: '2 min ago', status: 'success' },
  { id: 2, user: 'James Chen', action: 'Created account', time: '14 min ago', status: 'success' },
  { id: 3, user: 'Priya Patel', action: 'Refund requested', time: '38 min ago', status: 'pending' },
  { id: 4, user: 'Alex Morgan', action: 'Payment failed', time: '1 hour ago', status: 'failed' },
  { id: 5, user: 'Elena Torres', action: 'Upgraded to Pro', time: '2 hours ago', status: 'success' },
  { id: 6, user: 'Marcus Webb', action: 'Downloaded report', time: '3 hours ago', status: 'success' },
]

export const chartData: ChartData[] = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 45 },
  { month: 'Mar', value: 78 },
  { month: 'Apr', value: 56 },
  { month: 'May', value: 89 },
  { month: 'Jun', value: 72 },
  { month: 'Jul', value: 94 },
  { month: 'Aug', value: 82 },
  { month: 'Sep', value: 68 },
  { month: 'Oct', value: 85 },
  { month: 'Nov', value: 76 },
  { month: 'Dec', value: 92 },
]
