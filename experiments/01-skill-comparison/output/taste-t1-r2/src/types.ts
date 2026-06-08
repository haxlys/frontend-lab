export interface StatData {
  label: string
  value: string
  change: string
  positive: boolean
  icon: React.ReactNode
}

export interface ActivityItem {
  time: string
  user: string
  action: string
  status: 'completed' | 'pending' | 'failed'
}

export interface ChartData {
  month: string
  value: number
}
