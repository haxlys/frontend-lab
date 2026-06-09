export interface StatData {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
}

export interface PipelineStage {
  name: string;
  value: number;
  color: string;
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  target: string;
  time: string;
  avatar: string;
}

export interface TodoItem {
  id: number;
  text: string;
  done: boolean;
  priority: 'high' | 'medium' | 'low';
}

export interface Customer {
  id: number;
  name: string;
  company: string;
  email: string;
  stage: string;
  value: string;
  updated: string;
  status: 'active' | 'inactive' | 'lead';
}

export const stats: StatData[] = [
  { label: '총 매출', value: '₩847.2M', change: '+12.5%', trend: 'up' },
  { label: '신규 리드', value: '164', change: '+8.2%', trend: 'up' },
  { label: '전환율', value: '23.8%', change: '-2.1%', trend: 'down' },
  { label: '진행 중인 딜', value: '38', change: '+4', trend: 'up' },
];

export const pipelineData: PipelineStage[] = [
  { name: '리드 발굴', value: 64, color: '#CBD5E1' },
  { name: '미팅 예약', value: 48, color: '#94A3B8' },
  { name: '제안서 발송', value: 32, color: '#64748B' },
  { name: '협상', value: 18, color: '#3B82F6' },
  { name: '계약', value: 10, color: '#2563EB' },
];

export const activities: Activity[] = [
  { id: 1, user: '김민준', action: '신규 리드를 추가했습니다', target: '스타트업A', time: '5분 전', avatar: 'KM' },
  { id: 2, user: '이서연', action: '계약을 성사시켰습니다', target: '엔터프라이즈B', time: '27분 전', avatar: 'LS' },
  { id: 3, user: '박지훈', action: '미팅을 예약했습니다', target: '커머스C', time: '1시간 전', avatar: 'PJ' },
  { id: 4, user: '최유진', action: '제안서를 발송했습니다', target: '핀테크D', time: '2시간 전', avatar: 'CY' },
  { id: 5, user: '정도윤', action: '후속 미팅을 완료했습니다', target: '로지스틱E', time: '3시간 전', avatar: 'JD' },
  { id: 6, user: '한소희', action: '계약서 초안을 작성했습니다', target: '헬스케어F', time: '4시간 전', avatar: 'HS' },
];

export const todos: TodoItem[] = [
  { id: 1, text: '스타트업A 제안서 검토', done: false, priority: 'high' },
  { id: 2, text: '분기 실적 보고서 제출', done: false, priority: 'high' },
  { id: 3, text: '신규 영업 자료 리뷰', done: false, priority: 'medium' },
  { id: 4, text: '팀 주간 회의 준비', done: true, priority: 'low' },
  { id: 5, text: '리드 목록 정리', done: true, priority: 'low' },
  { id: 6, text: '파이프라인 현황 업데이트', done: true, priority: 'medium' },
  { id: 7, text: '거래처 감사 이메일 발송', done: false, priority: 'low' },
];

export const customers: Customer[] = [
  { id: 1, name: '김민준', company: '스타트업A', email: 'mj.kim@startupa.com', stage: '협상', value: '₩120M', updated: '2025-06-09', status: 'active' },
  { id: 2, name: '이서연', company: '엔터프라이즈B', email: 'sy.lee@entb.com', stage: '계약', value: '₩450M', updated: '2025-06-09', status: 'active' },
  { id: 3, name: '박지훈', company: '커머스C', email: 'jh.park@commercec.com', stage: '제안서 발송', value: '₩85M', updated: '2025-06-08', status: 'lead' },
  { id: 4, name: '최유진', company: '핀테크D', email: 'yj.choi@fintechd.com', stage: '미팅 예약', value: '₩210M', updated: '2025-06-08', status: 'active' },
  { id: 5, name: '정도윤', company: '로지스틱E', email: 'dy.jung@logistice.com', stage: '리드 발굴', value: '₩35M', updated: '2025-06-07', status: 'lead' },
  { id: 6, name: '한소희', company: '헬스케어F', email: 'sh.han@healthcaref.com', stage: '계약', value: '₩180M', updated: '2025-06-07', status: 'active' },
  { id: 7, name: '송민기', company: '에듀테크G', email: 'mk.song@edutechg.com', stage: '협상', value: '₩95M', updated: '2025-06-06', status: 'active' },
  { id: 8, name: '강다은', company: '리테일H', email: 'de.kang@retailh.com', stage: '리드 발굴', value: '₩50M', updated: '2025-06-06', status: 'inactive' },
];
