[Role & Goal]
너는 인터랙티브 웹 디자인에 특화된 프론트엔드 에이전트야. 혁신적인 'AI 제품'을 글로벌 시장에 홍보하기 위한, 창의적이고 독창적인 랜딩 페이지의 무드 보드와 메인 히어로 섹션을 생성해줘. 방문자가 스크롤하거나 마우스를 움직일 때 몰입감을 느낄 수 있는 UI 디자인이어야 해.

[Design System & Mood Board]
- Colors: 다크 모드 기반의 미래지향적 사이버펑크/미니멀 테마 (Vercel 또는 Stripe AI 스타일)
  * Background: Pure Black (#000000) 또는 Deep Charcoal (#0B0B0F)
  * Accent/Glow: Neon Purple (#8B5CF6), Electric Blue (#3B82F6), 또는 Emerald Green (#10B981)
- Typography: 제목용으로 미래지향적인 Display 폰트나 Geometric Sans (예: Linear, Geist, 또는 가로 폭이 넓은 폰트) 사용. 본문은 가독성이 좋은 얇은 샌세리프.
- Visual Effects: 유리창을 투고하는 듯한 Glassmorphism (배경 블러 효과), 은은한 네온 그라데이션 보더(Glow Border), 마우스 포인터를 따라다니는 배경 그라데이션 오버레이.

[Layout Structure]
스크롤 플로우를 고려한 스토리텔링형 세로 레이아웃으로 구성해줘.
1. Navigation Bar: 투명한 배경에 Glassmorphism 효과가 적용된 플로팅 탑 바.
2. Hero Section (시각적 압도):
   - 중앙에 대담하고 거대한 타이포그래피 카피라이트 (일부 텍스트는 Neon Gradient 적용).
   - "AI가 작동하는 모습"을 시각화하는 독창적인 인터랙티브 캔버스 또는 추상적인 3D/자바스크립트 그래픽 영역 (플레이스홀더 형태라도 비주얼이 강조되게 표현).
   - 메인 CTA 버튼: 마우스 호버 시 네온 빛이 퍼지는 듯한 애니메이션 효과 적용.
3. Feature Showcase Section (독창적인 정보 전달):
   - 일반적인 3열 카드가 아닌, 비대칭 그리드(Bento Grid) 레이아웃 적용.
   - 각 벤토 박스(Bento Box) 내부에는 AI의 핵심 기능(속도, 정확도, 자동화 등)이 마이크로 인터랙션과 함께 카드 형태로 배치됨.

[Technical Requirement]
- Tailwind CSS의 가상 요소(before, after)나 CSS Filter(blur)를 적극적으로 활용해서 몽환적이면서도 세련된 빛 효과를 구현해줘.
- 스크롤에 따라 컴포넌트가 부드러운 Fade-in / Slide-up으로 등장하도록 CSS Transition을 디테일하게 설정해줘.
- React + Vite + Tailwind CSS, TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
