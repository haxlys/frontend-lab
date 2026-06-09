# Group H (lazyweb) 평가 보고서

> Agent: OpenCode v1.16.2 | Model: commandcode/deepseek/deepseek-v4-pro | Docker isolation
> Skill: `.agents/skills/lazyweb-skill/` (SKILL.md + 4개 모드) + Lazyweb MCP (remote, free tier)
> 4 runs: t1-r1, t1-r2, t2-r1, t2-r2

---

## 1. 실행 결과 요약

| Run | Build | TSX Files | Total Lines | MCP Calls | Skill Loaded | Visual Style |
|-----|-------|-----------|-------------|-----------|--------------|--------------|
| t1-r1 | ❌ | 10 | 711 | 0 | No | Navy CRM Dashboard |
| t1-r2 | ✅ | 13 | 853 | 0 | No | Navy "FlowCRM" Dashboard |
| t2-r1 | ✅ | 12 | 985 | 0 | No | Cyberpunk Neon Dark Landing |
| t2-r2 | ❌ | 2 | 517 | 0 | No | Boilerplate only |

---

## 2. 핵심 발견: Lazyweb MCP/Skill 사용률 0%

4 runs 모두에서:

- `lazyweb_search` 호출 0회
- `lazyweb_health` 호출 0회
- `skill("lazyweb")` 호출 0회
- 디자인 리서치 리포트 생성 0회
- 웹 검색 또는 경쟁사 분석 0회

**Agent들이 lazyweb 스킬과 MCP 도구의 존재를 완전히 무시했다.** OpenCode가 `.agents/skills/` 경로를 시스템 프롬프트에 자동 주입하지만, lazyweb SKILL.md는 "이런 도구가 있다"는 사용설명서 형태여서 기존 knowledge-level skill(taste, uiux, interfaces)과 달리 자동 주입된 지식이 코드에 직접 반영될 수 없는 구조다.

---

## 3. Run별 상세 분석

### t1-r1 (CRM Dashboard)
- **상태**: 부분 실패 — session이 Write tool의 JSON parse error로 중단
- **코드**: 10 components (DashboardLayout, Sidebar, TopBar, StatCard, PipelineChart, ActivityTimeline, RecentCustomers, Icons.tsx)
- **디자인**: Navy/slate(#0F172A) + Blue accent(#2563EB). Light background + white cards. Sidebar + TopBar layout.
- **특징**: `types/index.ts`에 TypeScript 인터페이스 정의, `Icons.tsx`에 12개 SVG 컴포넌트. `pages/Dashboard`가 import되었으나 파일 미생성.
- **눈에 띄는 실수**: 패키지를 `crm-dashboard/` 서브디렉토리에 생성 → root에 `package.json` 없음.

### t1-r2 (FlowCRM Dashboard) ✅
- **상태**: 빌드 성공 (TS 오류 2개 자체 수정 후 통과)
- **코드**: 13 components — Card, Badge(5 variants), Avatar(3 sizes) 등 reusable UI kit 구축
- **디자인**: Navy/slate palette. "FlowCRM" 브랜드. 한글 라벨. ActivityTimeline에 color-coded 타입별 아이콘.
- **강점**: 가장 체계적인 컴포넌트 구조. `Card`, `Badge`, `Avatar` 등 기초 UI 프리미티브 → 레이아웃 → 대시보드 위젯의 3-tier 구성.
- **약점**: 기본적인 디자인. interfaces 그룹의 font-smoothing, box-shadow layered 등 미세 폴리시 없음.

### t2-r1 (Neural Nexus — AI Landing) ✅
- **상태**: 빌드 성공 (package.json/tsconfig 삭제 후 재생성 포함 279줄 session)
- **코드**: 12 components + 2 hooks — MouseGlow(canvas particles), Hero, BentoFeatures, CTASection, ScrollReveal 등
- **디자인**: 가장 창의적인 결과물. Cyberpunk neon dark theme:
  - Color: neon-purple(#8B5CF6), electric-blue(#3B82F6), emerald(#10B981)
  - Typography: Orbitron(display) + Inter(body)
  - Effects: glow-pulse, float, slide-up, fade-in, border-glow, drift, grid-pulse CSS keyframes
  - Canvas-based particle network(60 particles, proximity connections, mouse tracking)
  - Scroll-aware glassmorphism navbar
  - Bento grid features(6 cards, sm/md/lg sizes)
- **강점**: 가장 많은 코드, 가장 복잡한 시각 효과, 가장 차별화된 디자인. Canvas API, IntersectionObserver, Framer Motion 수준의 애니메이션.
- **약점**: 오로지 모델의 자체 지식으로 생성 — lazyweb이 전혀 기여하지 않음.

### t2-r2 (Vite Boilerplate) ❌
- **상태**: 완전 실패 — `index.css`에 정교한 Tailwind v4 디자인 토큰 + glassmorphism, neon, reveal 클래스를 정의했으나 `App.tsx`가 Vite boilerplate 그대로임
- **코드**: App.tsx 122줄 = Vite counter boilerplate. Component 0개 생성.
- **디자인**: CSS 인프라는 준비되었으나 애플리케이션 코드 전무. session length 93줄 — `index.css` 작성 후 바로 종료.
- **추정 원인**: Docker 실행 중 OOM 또는 context budget 초과로 인한 조기 종료 가능성.

---

## 4. Blind 평가 점수

| Run | Visual | Layout | Color | Spacing | Responsive | Typo | Pro | Overall |
|-----|--------|--------|-------|---------|------------|------|-----|---------|
| t1-r1 | 2 | 3 | 3 | 3 | 3 | 2 | 2 | **2.57** |
| t1-r2 | 3 | 4 | 3 | 3 | 4 | 3 | 3 | **3.29** |
| t2-r1 | 4 | 4 | 4 | 4 | 4 | 4 | 4 | **4.00** |
| t2-r2 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | **1.00** |

| Group | T1 Avg | T2 Avg | Overall |
|-------|--------|--------|---------|
| **H (lazyweb)** | **2.93** | **2.50** | **2.71** |

---

## 5. 기존 그룹과의 비교

| # | Group | Overall | T1 | T2 | Skill Usage |
|---|---|---|---|---|---|
| 🥇 | F (Interfaces) | **4.00** | 3.29 | 4.71 | 주입된 지식이 코드에 직접 반영 |
| 🥈 | C (UI-UX Pro Max) | **3.93** | 3.50 | 4.36 | 50% 명시적 호출 |
| 🥉 | A (Baseline) | **3.78** | 3.43 | 4.14 | 없음 |
| 4 | E (Taste+DESIGN.md) | **3.64** | 4.07 | 3.21 | 변동적 |
| 5 | D (DESIGN.md) | **3.61** | 2.86 | 4.36 | 없음 |
| 6 | G (Modern Web) | **3.57** | 3.14 | 4.00 | CLI 미실행 → 0% |
| 7 | B (Taste) | **3.32** | 4.29 | 2.36 | 50% 호출 |
| 8 | **H (Lazyweb)** | **2.71** | 2.93 | 2.50 | 0% 호출 + 지식 주입 불가 |

---

## 6. 가설 검증

| # | Hypothesis | Result |
|---|---|---|
| H9 | lazyweb(H)이 T2(ADE 랜딩)에서 실제 제품 참조로 가장 설득력 있는 디자인 생성 | ❌ — MCP 0회 호출. t2-r1의 cyberpunk 디자인은 모델 자체 지식으로 생성. |
| H10 | lazyweb(H)의 search→retrieve 패턴이 G와 유사한 run-to-run variance | ❌ — variance는 있었지만 search→retrieve가 아니라 t2-r2 완전 실패 때문. |

---

## 7. Lazyweb 실패 원인 분석

### 7.1 MCP 서버 연결 문제일 가능성

- Docker 컨테이너에 `opencode.json`이 마운트되었으나 MCP config가 올바르게 로드되었는지 확인 불가
- MCP remote 서버가 Docker 환경에서 timeout 또는 DNS 실패 가능성
- OpenCode의 `run` 모드에서 MCP 툴이 노출되는 방식 검증 필요

### 7.2 아키텍처 불일치 (Modern Web과 동일 패턴)

Lazyweb의 SKILL.md는 "design-evidence"라는 컨셉이지만 결국:
```
SKILL.md 내용:
1. "lazyweb_search(query)" MCP tool 사용
2. 결과로 리포트 생성
```
→ 즉, **도구 사용설명서**와 다름없다. taste, uiux, interfaces는 지식을 직접 주입하는 반면, lazyweb은 MCP 툴을 통해 간접적으로 지식을 획득해야 한다.

### 7.3 Task Prompt와의 미스매치

실험 프롬프트:
> "React + Vite + Tailwind CSS로 SaaS 대시보드 개요 페이지를 만들어줘."

→ Agent는 "코드 생성"으로 해석. "먼저 디자인 리서치를 해라"라는 명시적 지시 없음. Lazyweb은 **디자인 결정 전에 실행해야 하는 전처리 단계**인데, task가 "만들어줘"로 끝나므로 Agent가 lazyweb을 건너뛰었다.

---

## 8. 결론

### Group H (lazyweb) = 2.71 / 8위 — 실험 FAIL

1. **근본 원인 1**: lazyweb 스킬은 OpenCode의 `.agents/skills/` 자동 주입 구조와 맞지 않는다. MCP 툴 의존형 스킬은 "지식"을 주입하는 게 아니라 "도구 사용법"을 알려줄 뿐이며, Agent가 그 도구를 호출하지 않으면 아무 효과도 없다.

2. **근본 원인 2**: 코딩 Task prompt는 "코드 생성"이 목표지 "디자인 리서치"가 아니다. lazyweb은 별도의 사전 리서치 단계가 필요한 스킬이므로, 단일 "코드 생성" 프롬프트에서는 자연스럽게 건너뛰게 된다.

3. **t2-r1의 cyberpunk 디자인**은 모델의 자체 심미안으로 충분히 창의적인 결과를 낼 수 있음을 보여준다. lazyweb 없이도 "creative landing page" 스타일은 자체 생성 가능.

4. **t2-r2 완전 실패**는 lazyweb 전용 MCP config의 Docker 마운트가 메모리/컨텍스트 압박을 가중시켰을 가능성을 시사한다.

### 권장사항

- **Lazyweb은 "2단계 워크플로"로 실험 재설계 필요**: Step 1) lazyweb으로 design research 수행 → Step 2) research 기반 코드 생성
- **또는 MCP tool 대신 knowledge-level SKILL.md로 변환**: lazyweb database의 패턴을 추출하여 "concentric border radius formula" 같은 직접 적용 가능한 규칙으로 재구성
- **현재 구조에서는 Group H를 공식 순위에서 제외 권장** — MCP 미호출, 평가 데이터 부족, 빌드 실패 50%로 유의미한 비교 불가
