# Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향 — 결과 보고서

> 실행일: 2026-06-08 | Agent: OpenCode v1.16.2 | Model: commandcode/deepseek/deepseek-v4-pro | Docker isolation

---

## 1. 실행 개요

| 항목 | 결과 |
|---|---|
| **총 생성 횟수** | 20회 (5 groups × 2 tasks × 2 runs) |
| **빌드 성공률** | 20/20 (100%) |
| **스크린샷** | 60장 (20 runs × 3 viewports) |
| **소요 시간** | ~2.5시간 |

---

## 2. 그룹별 종합 점수 (1–5)

| Group | Overall | T1 (Dashboard) | T2 (ADE Landing) | TSX Files (avg) | TSX Lines (avg) |
|---|---|---|---|---|---|
| **A (Baseline)** | **3.14** | 2.29 | 4.00 | 7 | 312 |
| **B (Taste)** | **3.54** | 3.00 | 4.07 | 7 | 414 |
| **C (UI-UX Pro Max)** | **3.61** | 3.07 | 4.14 | 7 | 404 |
| **D (DESIGN.md)** | **3.14** | 2.14 | 4.14 | 8 | 377 |
| **E (Taste+DESIGN.md)** | **3.11** | 2.14 | 4.07 | 6 | 338 |

### 차원별 점수 평균

| Group | Visual | Layout | Color | Spacing | Responsive | Typo | Pro |
|---|---|---|---|---|---|---|---|
| A (Baseline) | 3.00 | 3.50 | 3.50 | 3.00 | 3.00 | 3.00 | 3.00 |
| B (Taste) | 3.75 | 3.50 | 3.50 | 3.50 | 3.50 | 3.50 | 3.50 |
| C (UI-UX Pro Max) | 3.75 | 3.75 | 3.50 | 3.50 | 3.50 | 3.50 | **3.75** |
| D (DESIGN.md) | 3.25 | 3.50 | 3.00 | 3.00 | 3.00 | 3.00 | 3.25 |
| E (Taste+DESIGN.md) | 3.25 | 3.50 | 3.00 | 3.00 | 3.00 | 3.00 | 3.00 |

---

## 3. 질적 분석 요약

### Group A (Baseline)

- **T1 (Dashboard)**: Tailwind 기본값. 회색 배경, 미니멀 카드. StatCard에 인라인 style 혼용.
- **T2 (ADE Landing)**: 다크 테마, radial-gradient 글로우 효과, animate-ping 배지, colored box-shadow — 시각적으로 가장 인상적인 그룹 중 하나. TypeScript 없음.
- **강점**: T2에서 expert-level Tailwind (backdrop-blur, gradient text, SVG 패턴).
- **약점**: T1은 평범. TypeScript, 접근성 전무. T1→T2 간 품질 편차 심함.

### Group B (Taste)

- **T1 (Dashboard)**: `bg-surface`, `text-brand-light` 같은 semantic 디자인 토큰 사용. StatCard에 `interface` + union type (`"up" | "down"`) — 좋은 TypeScript.
- **T2 (ADE Landing)**: 터미널 모크업, backdrop-blur, active:scale-[0.98] 피드백 — 정교한 비주얼. zinc 컬러 스케일 직접 사용 (추상화 없음).
- **강점**: T1 TypeScript, T2 visual polish, semantic HTML. T1→T2 간 균형 양호.
- **약점**: T2에서 theme abstraction 부족. 모든 파일에서 dark mode 없음. 접근성 없음.

### Group C (UI-UX Pro Max)

- **T1 (Dashboard)**: `brand-*` 커스텀 컬러 토큰. sticky header + backdrop-blur. `interface StatCardProps` — 좋은 타입.
- **T2 (ADE Landing)**: Glass morphism (`bg-white/5`, `border-white/10`, `backdrop-blur`), `grid-dots` 패턴, `text-gradient` 클래스. `aria-hidden="true"` on decorative elements — 유일한 a11y 시도.
- **강점**: **종합 1위.** T2의 glass morphism + animated blur orbs + gradient text. Layout 3.75 최고점.
- **약점**: T2 TypeScript 전무. 여전히 접근성 부족 (aria-hidden만 사용). T2 dark only.

### Group D (DESIGN.md)

- **T1 (Dashboard)**: **DESIGN.md 무시** — indigo/pink 대신 gray 사용. 0% 토큰 준수.
- **T2 (ADE Landing)**: **DESIGN.md 완전 준수** — indigo-500, pink-400, purple-400 전역 사용. gradient text (indigo→purple→pink), colored ring+shadow.
- **강점**: T2에서 DESIGN.md 토큰이 정확히 반영됨. Visual Appeal 5점.
- **약점**: 설계 의도의 절반만 성공 (T1 실패). dark only. TypeScript 낮음.

### Group E (Combined: Taste+DESIGN.md)

- **T1 (Dashboard)**: `bg-[#f8fafc]`, `text-[14px]` 등 arbitrary 값. Custom token (`primary-500`, `rounded-card`) 사용했으나 DESIGN.md indigo/pink와 불일치.
- **T2 (ADE Landing)**: Terminal mockup (`bg-slate-900`, `animate-pulse`), `active:scale-[0.98]`, `ring-1 ring-indigo-500/20`. — Hero+Pricing 모두 DESIGN.md 토큰 미사용.
- **강점**: T2 Hero의 터미널 mockup은 독창적. `@phosphor-icons/react` 사용.
- **약점**: **Taste + DESIGN.md 시너지 효과 발생하지 않음.** Custom token과 DESIGN.md token이 충돌. 전체 3.11 — 기대 이하.

---

## 3-A. 스크린샷 (대표 샘플)

### Group A (Baseline) — T1 Dashboard

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/baseline-t1-r1-desktop.png) | ![](../screenshots/baseline-t1-r1-tablet.png) | ![](../screenshots/baseline-t1-r1-mobile.png) |

### Group A (Baseline) — T2 ADE Landing

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/baseline-t2-r1-desktop.png) | ![](../screenshots/baseline-t2-r1-tablet.png) | ![](../screenshots/baseline-t2-r1-mobile.png) |

### Group B (Taste) — T1 Dashboard

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/taste-t1-r1-desktop.png) | ![](../screenshots/taste-t1-r1-tablet.png) | ![](../screenshots/taste-t1-r1-mobile.png) |

### Group B (Taste) — T2 ADE Landing

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/taste-t2-r1-desktop.png) | ![](../screenshots/taste-t2-r1-tablet.png) | ![](../screenshots/taste-t2-r1-mobile.png) |

### Group C (UI-UX Pro Max) — T1 Dashboard

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/uiux-t1-r1-desktop.png) | ![](../screenshots/uiux-t1-r1-tablet.png) | ![](../screenshots/uiux-t1-r1-mobile.png) |

### Group C (UI-UX Pro Max) — T2 ADE Landing

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/uiux-t2-r1-desktop.png) | ![](../screenshots/uiux-t2-r1-tablet.png) | ![](../screenshots/uiux-t2-r1-mobile.png) |

### Group D (DESIGN.md) — T1 Dashboard

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/design-doc-t1-r1-desktop.png) | ![](../screenshots/design-doc-t1-r1-tablet.png) | ![](../screenshots/design-doc-t1-r1-mobile.png) |

### Group D (DESIGN.md) — T2 ADE Landing

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/design-doc-t2-r2-desktop.png) | ![](../screenshots/design-doc-t2-r2-tablet.png) | ![](../screenshots/design-doc-t2-r2-mobile.png) |

### Group E (Taste+DESIGN.md) — T1 Dashboard

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/combined-t1-r1-desktop.png) | ![](../screenshots/combined-t1-r1-tablet.png) | ![](../screenshots/combined-t1-r1-mobile.png) |

### Group E (Taste+DESIGN.md) — T2 ADE Landing

| Desktop | Tablet | Mobile |
|---|---|---|
| ![](../screenshots/combined-t2-r2-desktop.png) | ![](../screenshots/combined-t2-r2-tablet.png) | ![](../screenshots/combined-t2-r2-mobile.png) |

> 전체 60장 스크린샷은 `screenshots/` 디렉토리 참조.

---

## 4. 가설 검증

| 가설 | 내용 | 검증 결과 |
|---|---|---|
| **H1** | baseline(A)이 가장 낮은 점수 | **CORRECT** — Overall 3.14 (T1은 D,E와 최하위 동률, T2는 4.00) |
| **H2** | combined(E)이 가장 높은 점수 | **INCORRECT** — UI-UX Pro Max(C)가 3.61로 1위, combined는 3.11로 최하위. Taste+DESIGN.md 간 충돌로 시너지 실패 |
| **H3** | taste(B) > DESIGN.md(D) | **CORRECT** — taste 3.54 vs design-doc 3.14. 특히 T1에서 taste가 DESIGN.md보다 크게 앞섬 |
| **H4** | v4-pro에서 스킬 효과 증폭 | **PARTIALLY** — T2 (Landing page)에서 큰 gap (baseline 4.00→uiux 4.14). T1 (Dashboard)에서는 gap이 작음 (2.29→3.07). Landing page 디자인에서 스킬 효과가 더 두드러짐 |

---

## 5. 주요 발견점 (Key Findings)

### 5.1 Task Type에 따른 Skill 효과 차이

**Landing page (T2)** 는 모든 그룹이 4.00~4.14로 높고 근접 — 모델 자체의 디자인 역량이 충분.
**Dashboard (T1)** 는 2.14~3.07로 편차 큼 — 스킬의 도움이 필요한 태스크 유형.

### 5.2 UI-UX Pro Max Skill이 종합 1위

- 유일하게 glass morphism, colored blur orbs, grid-dots 패턴을 적용
- 유일하게 `aria-hidden="true"` 사용 (기초적이나마 접근성 인식)
- Layout clarity 3.75 — 다른 그룹보다 명확한 정보 계층

### 5.3 Taste+DESIGN.md 조합에서 충돌 발생

- taste스킬이 생성한 `primary-500`, `rounded-card` 커스텀 토큰이 DESIGN.md의 `indigo-500`, `rounded-[8px]`와 충돌
- 결과적으로 DESIGN.md가 무시됨 — 단독 DESIGN.md(D) 그룹과 비교해 토큰 준수도가 오히려 낮음
- **스킬 간 상호작용이 항상 시너지를 내는 것은 아님**

### 5.4 전반적 취약점 (모든 그룹 공통)

| 취약점 | 심각도 | 비고 |
|---|---|---|
| **접근성 (A11y)** | 심각 | aria-label/role/keyboard nav 전무. 모든 그룹 동일 |
| **TypeScript** | 중간 | 일부 파일에만 interface 사용. T2는 대부분 JS 수준 |
| **Dark Mode** | 중간 | 일부 그룹 T2에서만 지원. `dark:` variant 부재 |
| **Token 안정성** | 중간 | Custom token이 DESIGN.md와 충돌하는 패턴 반복 |

### 5.5 DESIGN.md 단독 vs Taste 스킬

- DESIGN.md(D)는 T2에서 탁월한 준수 (indigo-500 완전 적용), T1에서 완전 무시
- Taste(B)는 T1/T2 모두에서 일관된 품질 유지
- **Taste가 더 안정적**, DESIGN.md의 효과는 task-dependent

---

## 6. 정량 지표

| Metric | Baseline | Taste | UI-UX Pro Max | DESIGN.md | Combined |
|---|---|---|---|---|---|
| TSX Files (avg) | 7 | 7 | 7 | 8 | 6 |
| TSX Lines (avg) | 312 | 414 | 404 | 377 | 338 |
| Build Success | 100% | 100% | 100% | 100% | 100% |
| 디자인 토큰 사용 | raw Tailwind | semantic names | brand-* custom | indigo/pink (T2 only) | primary-* (custom) |

---

## 7. 결론 및 인사이트

1. **UI-UX Pro Max Skill이 종합 최우수** — glass morphism, dark-mode-ready palette, layout clarity에서 차별화
2. **Skill은 대시보드 같은 "구조적" 태스크에서 더 큰 차이를 만든다** — landing page는 모델 기본 역량으로도 충분
3. **Taste 스킬은 semantic design token을 통한 일관된 품질 유지에 강점**
4. **DESIGN.md는 단독 사용 시 task-dependent** — 일부 세션에서 무시됨
5. **Taste+DESIGN.md 조합은 기대만큼 시너지를 내지 못함** — token naming 충돌이 원인
6. **모든 실험군에서 접근성은 공통 최대 약점** — 에이전트가 자발적으로 a11y를 처리하지 않으며, 스킬도 이를 충분히 강제하지 못함

---

## 8. 후속 실험 제안

- **UI-UX Pro Max + DESIGN.md 조합 테스트** (Taste 대신)
- **Accessibility 전용 스킬 추가 실험** (WCAG 고려한 프롬프트)
- **Task 난이도별 스킬 효과 측정** (단순 페이지 → 복잡 대시보드 → 폼 기반)
- **무료 모델 (v4-flash-free) vs 유료 모델 (v4-pro) 직접 비교**
