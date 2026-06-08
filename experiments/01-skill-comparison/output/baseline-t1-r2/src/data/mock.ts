export interface StatCardData {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down';
  period: string;
}

export const statCards: StatCardData[] = [
  {
    title: '총 매출',
    value: '₩873.4M',
    change: '+12.5%',
    changeType: 'up',
    period: '전월 대비',
  },
  {
    title: '신규 리드',
    value: '1,284',
    change: '+8.2%',
    changeType: 'up',
    period: '전월 대비',
  },
  {
    title: '전환율',
    value: '24.6%',
    change: '-2.1%',
    changeType: 'down',
    period: '전월 대비',
  },
  {
    title: '진행 중인 딜',
    value: '47',
    change: '+5.3%',
    changeType: 'up',
    period: '전월 대비',
  },
];

export interface PipelineStage {
  stage: string;
  count: number;
  value: number;
}

export const pipelineData: PipelineStage[] = [
  { stage: '리드 발굴', count: 42, value: 215 },
  { stage: '미팅 예약', count: 28, value: 168 },
  { stage: '제안 발송', count: 19, value: 142 },
  { stage: '협상', count: 12, value: 98 },
  { stage: '계약', count: 7, value: 64 },
];

export interface Activity {
  id: string;
  type: 'call' | 'email' | 'meeting' | 'note';
  title: string;
  description: string;
  time: string;
  date: string;
}

export const recentActivities: Activity[] = [
  {
    id: '1',
    type: 'meeting',
    title: '제품 데모',
    description: '스타트업A와 제품 데모 미팅 완료',
    time: '오후 2:30',
    date: '2026-06-08',
  },
  {
    id: '2',
    type: 'email',
    title: '제안서 발송',
    description: '기업B에 최종 제안서 발송',
    time: '오전 11:15',
    date: '2026-06-08',
  },
  {
    id: '3',
    type: 'call',
    title: '팔로업 콜',
    description: '리드 김민수님과 통화',
    time: '오전 9:45',
    date: '2026-06-08',
  },
  {
    id: '4',
    type: 'note',
    title: '계약 특이사항',
    description: '기업C 계약 조건 메모 업데이트',
    time: '오후 5:20',
    date: '2026-06-07',
  },
  {
    id: '5',
    type: 'email',
    title: '온보딩 안내',
    description: '신규 고객사 대상 온보딩 메일 발송',
    time: '오후 3:00',
    date: '2026-06-07',
  },
];

export interface Todo {
  id: string;
  text: string;
  done: boolean;
  priority: 'high' | 'medium' | 'low';
}

export const todos: Todo[] = [
  { id: '1', text: '기업D 담당자에게 후속 메일 발송', done: false, priority: 'high' },
  { id: '2', text: '이번 주 파이프라인 리포트 작성', done: false, priority: 'high' },
  { id: '3', text: '신규 리드 15건 CRM 등록', done: true, priority: 'medium' },
  { id: '4', text: '계약서 검토 요청 (법무팀)', done: false, priority: 'medium' },
  { id: '5', text: '월간 성과 보고서 초안 검토', done: false, priority: 'low' },
];

export interface Customer {
  id: string;
  name: string;
  company: string;
  stage: string;
  value: string;
  lastContact: string;
  owner: string;
}

export const customers: Customer[] = [
  {
    id: '1',
    name: '이정민',
    company: '테크스타트A',
    stage: '협상',
    value: '₩52M',
    lastContact: '2026-06-08',
    owner: '김수현',
  },
  {
    id: '2',
    name: '박서준',
    company: '엔터프라이즈B',
    stage: '제안 발송',
    value: '₩180M',
    lastContact: '2026-06-07',
    owner: '김수현',
  },
  {
    id: '3',
    name: '최유진',
    company: '핀테크C',
    stage: '계약',
    value: '₩340M',
    lastContact: '2026-06-06',
    owner: '박민지',
  },
  {
    id: '4',
    name: '강도윤',
    company: '이커머스D',
    stage: '미팅 예약',
    value: '₩28M',
    lastContact: '2026-06-05',
    owner: '박민지',
  },
  {
    id: '5',
    name: '윤지우',
    company: '헬스케어E',
    stage: '리드 발굴',
    value: '₩15M',
    lastContact: '2026-06-04',
    owner: '정재원',
  },
  {
    id: '6',
    name: '송하은',
    company: '로지스틱스F',
    stage: '제안 발송',
    value: '₩96M',
    lastContact: '2026-06-03',
    owner: '정재원',
  },
];

export const sidebarNav = [
  { icon: 'grid', label: '대시보드', active: true },
  { icon: 'users', label: '고객 관리', active: false },
  { icon: 'trending-up', label: '파이프라인', active: false },
  { icon: 'calendar', label: '일정', active: false },
  { icon: 'mail', label: '메시지', active: false },
  { icon: 'bar-chart-2', label: '리포트', active: false },
  { icon: 'settings', label: '설정', active: false },
];
