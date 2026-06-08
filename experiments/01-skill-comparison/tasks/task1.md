[Role & Goal]
너는 프론트엔드 UI/UX 전문 에이전트야. B2B SaaS의 정석이라 할 수 있는 '실용적이고 심플한 CRM 시스템'의 무드 보드 및 대시보드 메인 레이아웃을 생성해줘. 정보 밀도가 높으면서도 시각적인 피로감이 없는 디자인이어야 해.

[Design System & Mood Board]
- Colors: Intercom이나 Linear 스타일의 차분하고 신뢰감을 주는 톤
  * Main: Deep Navy (#0F172A) 또는 Slate Gray (#1E293B)
  * Accent: Royal Blue (#2563EB) 또는 가독성 높은 Teal
  * Background: Slate 50 (#F8FAFC) 기반의 아주 밝은 그레이 또는 완전한 화이트
- Typography: Sans-serif 계열 (Inter, SF Pro) 중심. 굵기(Weight) 변화와 옅은 그레이 컬러를 조합하여 텍스트의 계층 구조(Hierarchy)를 명확하게 구분할 것.
- Corner Radius: 6px ~ 8px 사이의 좁은 라운딩을 사용하여 프로페셔널하고 단단한 느낌 유도.

[Layout Structure]
전체 화면을 채우는 고정형 레이아웃(Full-screen grid)으로 구성해줘.
1. Sidebar: 좌측 고정 내비게이션 (대시보드, 고객 관리, 파이프라인, 설정 등 아이콘+텍스트 조합)
2. Top Bar: 검색창, 알림 아이콘, 프로필 아바타를 포함한 깔끔한 상단 바
3. Main Content Grid (3-Column Layout):
   - Row 1: 주요 지표를 보여주는 4개의 미니 통계 카드 (예: 총 매출, 신규 리드, 전환율, 진행 중인 딜) -> 얇은 보더(#E2E8F0)와 은은한 그림자만 활용.
   - Row 2 (Left 2/3): '영업 파이프라인 진행 현황'을 보여주는 심플한 바 차트 또는 라인 차트 영역.
   - Row 2 (Right 1/3): '최근 액티비티 타임라인' 또는 '오늘의 할 일 토글 리스트'.
   - Row 3: '최근 업데이트된 고객 리스트' 테이블 (Hover 상태 시 부드러운 배경색 변화 적용).

[Technical Requirement]
- 불필요한 그라데이션이나 화려한 애니메이션은 배제하고, Border와 내부 여백(Padding)을 여유 있게 활용하여 여백의 미를 살려줘.
- 각 컴포넌트는 재사용 가능한 형태로 구조화하고, 모던하고 정갈한 UI 컴포넌트 라이브러리(예: Shadcn UI 스타일)의 느낌을 내줘.
- React + Vite + Tailwind CSS, TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
