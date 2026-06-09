import type { StatItem, PipelineStage, ActivityItem, TodoItem, Customer } from '../types'

export const stats: StatItem[] = [
  { label: '총 매출', value: '₩847.2M', change: 12.5, changeLabel: '전월 대비' },
  { label: '신규 리드', value: '2,847', change: 8.2, changeLabel: '전월 대비' },
  { label: '전환율', value: '24.3%', change: -2.4, changeLabel: '전월 대비' },
  { label: '진행 중인 딜', value: '142', change: 18.7, changeLabel: '전월 대비' },
]

export const pipelineStages: PipelineStage[] = [
  { stage: '리드 발굴', value: 85, color: '#94A3B8' },
  { stage: '미팅 예약', value: 64, color: '#64748B' },
  { stage: '제안 발송', value: 42, color: '#334155' },
  { stage: '협상 중', value: 28, color: '#2563EB' },
  { stage: '계약 완료', value: 19, color: '#14B8A6' },
]

export const recentActivities: ActivityItem[] = [
  { id: 1, type: 'deal', title: '딜 클로즈', description: '스타트업A와 ₩120M 계약 체결 완료', time: '10분 전' },
  { id: 2, type: 'meeting', title: '미팅 완료', description: '엔터프라이즈B 2차 미팅 진행', time: '1시간 전' },
  { id: 3, type: 'lead', title: '신규 리드', description: '테크컴퍼니C에서 데모 요청', time: '2시간 전' },
  { id: 4, type: 'note', title: '메모 추가', description: '고객사D 지원 문의 내역 업데이트', time: '4시간 전' },
  { id: 5, type: 'meeting', title: '미팅 예정', description: '플랫폼E와 오후 3시 제안 발표', time: '5시간 전' },
]

export const todayTodos: TodoItem[] = [
  { id: 1, text: '리드 23건 후속 연락 진행', done: false },
  { id: 2, text: '주간 영업 실적 보고서 작성', done: false },
  { id: 3, text: '파트너사 계약서 초안 검토', done: true },
  { id: 4, text: '신규 영업 자료 템플릿 업데이트', done: false },
]

export const customers: Customer[] = [
  { id: 1, name: '김민수', company: '스타트업A', email: 'minsoo@startupa.com', stage: '계약 완료', value: 120000000, lastActivity: '2026-06-09', avatar: 'KM' },
  { id: 2, name: '이지은', company: '엔터프라이즈B', email: 'jieun@enterpriseb.com', stage: '협상 중', value: 85000000, lastActivity: '2026-06-08', avatar: 'LJ' },
  { id: 3, name: '박준호', company: '테크컴퍼니C', email: 'junho@techc.io', stage: '미팅 예약', value: 45000000, lastActivity: '2026-06-07', avatar: 'PJ' },
  { id: 4, name: '최서연', company: '플랫폼E', email: 'seoyeon@platforme.com', stage: '제안 발송', value: 67000000, lastActivity: '2026-06-06', avatar: 'CS' },
  { id: 5, name: '정도현', company: '서비스F', email: 'dohyun@servicef.com', stage: '리드 발굴', value: 23000000, lastActivity: '2026-06-06', avatar: 'JD' },
  { id: 6, name: '한소희', company: '리테일G', email: 'sohee@retailg.com', stage: '미팅 예약', value: 34000000, lastActivity: '2026-06-05', avatar: 'HS' },
]
