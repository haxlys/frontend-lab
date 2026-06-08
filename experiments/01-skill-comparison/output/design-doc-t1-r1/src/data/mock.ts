import type { StatData, ActivityItem, ChartBar } from '../types'

export const stats: StatData[] = [
  {
    title: 'Revenue',
    value: '$48,295',
    change: '+12.5%',
    changeType: 'up',
    icon: 'revenue',
  },
  {
    title: 'Users',
    value: '2,847',
    change: '+8.2%',
    changeType: 'up',
    icon: 'users',
  },
  {
    title: 'Orders',
    value: '1,423',
    change: '-3.1%',
    changeType: 'down',
    icon: 'orders',
  },
  {
    title: 'Growth',
    value: '24.8%',
    change: '+4.3%',
    changeType: 'up',
    icon: 'growth',
  },
]

export const activities: ActivityItem[] = [
  { id: '1', time: '2 min ago', user: 'alice@acme.com', action: 'Upgraded to Pro plan', status: 'success' },
  { id: '2', time: '18 min ago', user: 'bob@startup.io', action: 'Cancelled subscription', status: 'warning' },
  { id: '3', time: '1 hour ago', user: 'carol@corp.co', action: 'Created new project', status: 'success' },
  { id: '4', time: '3 hours ago', user: 'dave@agency.com', action: 'Payment failed', status: 'error' },
  { id: '5', time: '5 hours ago', user: 'eve@studio.dev', action: 'Invited team member', status: 'pending' },
  { id: '6', time: '8 hours ago', user: 'frank@shop.com', action: 'Exported report', status: 'success' },
  { id: '7', time: '1 day ago', user: 'grace@saas.io', action: 'Changed billing cycle', status: 'success' },
]

export const chartData: ChartBar[] = [
  { label: 'Jan', value: 65 },
  { label: 'Feb', value: 48 },
  { label: 'Mar', value: 82 },
  { label: 'Apr', value: 55 },
  { label: 'May', value: 72 },
  { label: 'Jun', value: 90 },
  { label: 'Jul', value: 78 },
  { label: 'Aug', value: 85 },
  { label: 'Sep', value: 68 },
  { label: 'Oct', value: 94 },
  { label: 'Nov', value: 58 },
  { label: 'Dec', value: 100 },
]
