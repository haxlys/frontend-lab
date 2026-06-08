export interface StatData {
  title: string
  value: string
  change: number
  color: 'indigo' | 'pink' | 'emerald' | 'amber'
}

export interface Activity {
  id: number
  user: string
  action: string
  time: string
  status: 'completed' | 'pending' | 'failed' | 'in_progress'
}

export interface BarData {
  month: string
  value: number
}
