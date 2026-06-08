# Experiment 01 Round 2 — Prompt Upgrades & Cross-Round Comparison

> 실행일: 2026-06-08 | Agent: OpenCode v1.16.2 | Model: commandcode/deepseek/deepseek-v4-pro | Docker isolation

---

## 1. What Changed (R1 → R2)

### Task1: Generic Dashboard → CRM Dashboard
기존 추상적인 "SaaS 대시보드" 프롬프트에서 **B2B SaaS CRM 대시보드**로 구체화. Design System(Deep Navy/Slate Gray + Royal Blue/Teal), Layout Structure(Sidebar + TopBar + 3-Column Grid), Corner Radius(6-8px) 등 디테일한 명세 추가.

### Task2: ADE Product Page → AI Product Landing (Dark/Cyberpunk)
다크 모드 기반 Cyberpunk/Glassmorphism 테마, Neon Gradient 타이포그래피, Interactive Canvas, Bento Grid, Scroll Reveal, Blur/Glow 효과 등 고난도 비주얼 요구사항 추가.

---

## 2. Round 2 Results

### 실행 개요

| 항목 | R1 | R2 |
|---|---|---|
| 총 생성 횟수 | 20 (5 groups × 2 tasks × 2 runs) | 20 |
| 빌드 성공률 | 20/20 (100%) | 20/20 (100%) |
| 스크린샷 | 60장 | 60장 |
| 코드 생성 실패* | 0 | 4 (20%) |

\* *코드 생성 실패 = 2개 TSX 파일, ~132줄의 Vite 보일러플레이트만 생성된 경우*

### 그룹별 종합 점수 (1–5)

| Group | R2 Overall | R1 Overall | Δ | T1 (CRM) | T2 (Landing) | TSX Files (avg) | TSX Lines (avg) |
|---|---|---|---|---|---|---|---|
| **C (UI-UX Pro Max)** | **3.93** | 3.61 | +0.32 | 3.50 | 4.36 | 10.3 | 611 |
| **A (Baseline)** | **3.78** | 3.14 | +0.64 | 3.43 | 4.14 | 9.8 | 714 |
| **E (Taste+DESIGN.md)** | **3.64** | 3.11 | +0.54 | 4.07 | 3.21 | 8.0 | 477 |
| **D (DESIGN.md)** | **3.61** | 3.14 | +0.47 | 2.86 | 4.36 | 8.5 | 524 |
| **B (Taste)** | **3.32** | 3.54 | -0.21 | 4.29 | 2.36 | 7.0 | 437 |

### R2 차원별 점수 평균

| Group | Visual | Layout | Color | Spacing | Responsive | Typo | Pro |
|---|---|---|---|---|---|---|---|
| A (Baseline) | 4.00 | 3.75 | 3.25 | 3.75 | 4.25 | 4.00 | 3.50 |
| B (Taste) | 3.00 | 3.75 | 3.50 | 3.25 | 3.50 | 3.50 | 2.75 |
| C (UI-UX Pro Max) | 4.25 | 4.00 | 4.00 | 3.75 | 3.25 | 4.00 | 4.25 |
| D (DESIGN.md) | 3.75 | 4.00 | 3.00 | 3.75 | 3.50 | 3.75 | 3.50 |
| E (Taste+DESIGN.md) | 3.75 | 3.50 | 3.75 | 3.50 | 3.75 | 3.75 | 3.50 |

---

## 3. Key Findings

### 3.1. Prompt complexity created a generation-gap

새 프롬프트의 복잡도 상승으로 인해 20개 중 4개(20%)에서 사실상 코드 생성이 실패했습니다:
- `design-doc-t1-r2`: Vite boilerplate only (score 1.57)
- `taste-t2-r1`: 유틸리티는 생성했지만 App.tsx가 boilerplate (score 2.43)
- `taste-t2-r2`: 바닐라 CSS 2개 파일만 (score 2.29)
- `combined-t2-r2`: Vite boilerplate only (score 2.00)

**R1에서는 이런 현상이 0건**이었습니다. 프롬프트가 복잡해질수록 에이전트의 실패율이 증가합니다.

### 3.2. UI-UX Pro Max maintains 1st place

두 라운드 모두 UI-UX Pro Max가 1위:
- R1: 3.61 (1st)
- R2: 3.93 (1st)
- 유일하게 두 라운드 모두 Top-2를 유지한 그룹
- T2에서 특히 강세 (R2: 4.36, R1: 4.14)
- `useMouseGlow`, `useScrollReveal` 커스텀 훅 패턴, Geist+Inter 이중 폰트 시스템 등 아키텍처 품질 우수

### 3.3. Baseline surges in R2 — model raw capability stronger with detailed prompts

R1에서 1st였던 Baseline이 R2에서 2위로 상승 (+0.64, 가장 큰 상승폭):
- T2 점수: 4.14 (R1: 4.00) — 단순한 랜딩페이지보다 복잡한 다크모드/글래스모피즘 랜딩 페이지에서 더 나은 결과
- Space Grotesk + Inter 폰트 페어링, custom canvas particle system, 다양한 glow 효과를 자발적으로 구현
- **프롬프트에 디테일이 많을수록 스킬 없이도 좋은 결과**가 나온다는 증거

### 3.4. Taste drops to last — style sensibility skill hurts with highly prescriptive prompts

R1 2위(3.54) → R2 5위(3.32), 유일하게 점수가 하락:
- T1은 여전히 우수(4.29), 하지만 T2에서 2.36으로 폭락
- Taste skill의 "자유로운 디자인 표현" 접근이 프롬프트의 강한 prescriptive direction과 충돌
- Taste-t2-r1은 우수한 유틸리티(glassmorphism, glow, particle canvas)를 생성했지만 App.tsx에 적용하지 못함
- **디자인 취향 스킬은 자유도가 낮은 프롬프트에서 오히려 방해**

### 3.5. Combined group dramatically improves — skill synergy works with complex prompts

R1 꼴찌(3.11) → R2 3위(3.64), 가장 큰 순위 상승(+2):
- T1에서 R2 최고점(4.07): recharts 통합, `useCallback`/`useEffect` side effects, keyboard shortcuts
- `combined-t2-r1`은 framer-motion, `clamp()` fluid typography, `useScroll`/`useMotionValueEvent`, `prefers-reduced-motion`, ParticleCanvas 등 **가장 정교한 개별 프로젝트** 중 하나(4.43)
- DESIGN.md + Taste의 시너지가 복잡한 프롬프트에서 발현됨

### 3.6. DESIGN.md enables the best single run

`design-doc-t2-r2`가 **R2 개별 최고점 4.71** 달성:
- MouseFollower radial gradient tracking, InteractiveCanvas (particle + concentric rings + orbiting nodes + diamond shape)
- GlowButton (3 variants + before/after pseudo-elements), BentoCard (per-color glow maps)
- ScrollReveal (left/right/up variants)
- **Skill 없이도 설계 문서만으로 탁월한 결과 가능**

---

## 4. Cross-Round Comparison Table

| 항목 | R1 | R2 | 해석 |
|---|---|---|---|
| 1위 그룹 | C (UI-UX Pro Max): 3.61 | C (UI-UX Pro Max): 3.93 | UI-UX skill consistently best |
| 꼴찌 그룹 | E (Taste+DESIGN.md): 3.11 | B (Taste): 3.32 | Taste skill struggles with prescriptive prompts |
| 최고 T1 점수 | C: 3.07 | B (Taste): 4.29 | Taste excels at dashboard when prompt is detailed |
| 최고 T2 점수 | D (DESIGN.md): 4.14 | D: 4.36, C: 4.36 | DESIGN.md consistency in landing pages |
| 빌드 실패 | 0/20 | 0/20 | Both rounds 100% build success |
| 코드 생성 실패 | 0/20 | 4/20 | Complex prompts increase generation failure risk |
| 평균 TSX Files | 7.0 | 8.7 | More complex code generated in R2 |
| 평균 TSX Lines | 369 | 552 | 50% more code volume in R2 |
| 접근성 | 전무 | 전무 (일부 aria-label/aria-hidden) | Both rounds: no accessibility |
| Best Visual Effects | T2 gradient text/glow | T2 canvas particles, mouse glow, framer-motion | R2 visual quality significantly higher |

---

## 5. Recommendations

1. **복잡한 프롬프트에는 UI-UX Pro Max skill이 가장 안정적** — 두 라운드 모두 1위
2. **Taste skill은 자유도가 높은 태스크에만 사용** — prescriptive prompt와 충돌
3. **DESIGN.md + Taste 조합은 복잡한 프로젝트에서 시너지 발현** — R1 꼴찌→R2 3위
4. **Detailed prompt + no skill도 강력** — Baseline이 R2에서 2위 (모델 기본기)
5. **20% failure rate는 새 프롬프트의 length/complexity 이슈** — retry 로직 강화 또는 프롬프트 최적화 필요
6. **모든 그룹 접근성 0점** — aria-role, keyboard nav, focus management를 평가 기준에 추가하는 것을 고려
