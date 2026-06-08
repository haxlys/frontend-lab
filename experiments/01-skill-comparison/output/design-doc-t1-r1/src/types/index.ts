export interface StatData {
  title: string
  value: string
  change: string
  changeType: 'up' | 'down'
  icon: 'revenue' | 'users' | 'orders' | 'growth'
}

export interface ActivityItem {
  id: string
  time: string
  user: string
  action: string
  status: 'success' | 'warning' | 'pending' | 'error'
}

export interface ChartBar {
  label: string
  value: number
}
