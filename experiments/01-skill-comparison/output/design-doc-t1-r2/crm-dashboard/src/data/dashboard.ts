export const stats = [
  {
    label: '총 매출',
    value: '₩847.6M',
    change: '+12.5%',
    trend: 'up' as const,
    description: '전월 대비',
  },
  {
    label: '신규 리드',
    value: '1,247',
    change: '+8.2%',
    trend: 'up' as const,
    description: '이번 주',
  },
  {
    label: '전환율',
    value: '24.8%',
    change: '+2.1%',
    trend: 'up' as const,
    description: '목표 22%',
  },
  {
    label: '진행 중인 딜',
    value: '64',
    change: '-3.1%',
    trend: 'down' as const,
    description: '₩2.1B 파이프',
  },
];

export const pipelineData = [
  { stage: '리드 발굴', count: 142, value: 380 },
  { stage: '미팅 예약', count: 86, value: 620 },
  { stage: '제안 발송', count: 48, value: 480 },
  { stage: '협상 중', count: 23, value: 720 },
  { stage: '계약 완료', count: 15, value: 510 },
];

export const activities = [
  {
    id: 1,
    user: '김지훈',
    action: '딜 단계 변경',
    target: '스튜디오블랙',
    detail: '제안 발송 → 협상 중',
    time: '방금 전',
    avatar: 'KJ',
  },
  {
    id: 2,
    user: '박수진',
    action: '신규 리드 등록',
    target: '테크프론트',
    detail: 'Inbound — 웨비나',
    time: '32분 전',
    avatar: 'PS',
  },
  {
    id: 3,
    user: '이동현',
    action: '계약 체결',
    target: '네오랩스',
    detail: '₩120M / 연간',
    time: '1시간 전',
    avatar: 'LD',
  },
  {
    id: 4,
    user: '최유나',
    action: '미팅 일정 확정',
    target: '데이터브릭스',
    detail: '내일 오후 2시',
    time: '2시간 전',
    avatar: 'CY',
  },
  {
    id: 5,
    user: '정민우',
    action: '메모 추가',
    target: '핀테크솔루션',
    detail: '예산 확정, 6월 중 논의 재개',
    time: '3시간 전',
    avatar: 'JM',
  },
];

export const customers = [
  {
    id: 1,
    name: '스튜디오블랙',
    contact: '김태호',
    email: 'taeho@studioblack.kr',
    stage: '협상 중',
    value: '₩240M',
    updated: '1시간 전',
  },
  {
    id: 2,
    name: '테크프론트',
    contact: '윤서연',
    email: 'seoyeon@techfront.io',
    stage: '미팅 예약',
    value: '₩80M',
    updated: '32분 전',
  },
  {
    id: 3,
    name: '네오랩스',
    contact: '송민기',
    email: 'mk@neolabs.co.kr',
    stage: '계약 완료',
    value: '₩120M',
    updated: '1시간 전',
  },
  {
    id: 4,
    name: '데이터브릭스',
    contact: '한지원',
    email: 'jiwon@databricks.io',
    stage: '제안 발송',
    value: '₩350M',
    updated: '2시간 전',
  },
  {
    id: 5,
    name: '핀테크솔루션',
    contact: '배준영',
    email: 'jy@fintechsol.com',
    stage: '리드 발굴',
    value: '₩60M',
    updated: '3시간 전',
  },
  {
    id: 6,
    name: '메타크래프트',
    contact: '임수아',
    email: 'sua@metacraft.dev',
    stage: '협상 중',
    value: '₩180M',
    updated: '5시간 전',
  },
];

export const todos = [
  { id: 1, text: '스튜디오블랙 계약서 검토', done: false },
  { id: 2, text: '주간 영업 보고서 제출', done: true },
  { id: 3, text: '테크프론트 미팅 준비', done: false },
  { id: 4, text: '신규 템플릿 검수', done: false },
  { id: 5, text: '분기 목표 리뷰 미팅', done: false },
];

export const navItems = [
  { label: '대시보드', icon: 'Grid' as const, active: true },
  { label: '고객 관리', icon: 'Users' as const, active: false },
  { label: '파이프라인', icon: 'Layers' as const, active: false },
  { label: '영업 활동', icon: 'Calendar' as const, active: false },
  { label: '리포트', icon: 'Chart' as const, active: false },
  { label: '설정', icon: 'Settings' as const, active: false },
];
