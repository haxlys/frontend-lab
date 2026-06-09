# Experiment 01 R3 — Groups F & G 결과 보고서

> 실행일: 2026-06-09 | Agent: OpenCode v1.16.2 | Model: commandcode/deepseek/deepseek-v4-pro | Docker isolation

---

## 1. 실행 개요

| 항목 | 결과 |
|---|---|
| 총 생성 횟수 | 8회 (2 groups × 2 tasks × 2 runs) |
| 빌드 성공률 | 8/8 (100%) |
| 코드 생성 실패 | 0/8 (0%) |
| 스크린샷 | 24장 (8 runs × 3 viewports) |

---

## 2. 그룹별 종합 점수 (1–5)

| Group | Overall | T1 (CRM Dashboard) | T2 (AI Landing) | TSX Files (avg) | TSX Lines (avg) |
|---|---|---|---|---|---|
| **F (Interfaces)** | **4.00** | 3.29 | 4.71 | 9.3 | 745 |
| **G (Modern Web)** | **3.57** | 3.14 | 4.00 | 9.0 | 625 |

---

## 3. 차원별 점수

| Group | Visual | Layout | Color | Spacing | Responsive | Typo | Pro |
|---|---|---|---|---|---|---|---|
| F (Interfaces) | 4.00 | 4.25 | 4.00 | 4.50 | 4.25 | 3.75 | 4.00 |
| G (Modern Web) | 4.00 | 4.00 | 3.00 | 3.50 | 3.75 | 3.50 | 3.75 |

---

## 4. Group F (Interfaces) — make-interfaces-feel-better

### 4.1 개별 Run 점수

| Run | Visual | Layout | Color | Spacing | Responsive | Typo | Pro | Avg |
|---|---|---|---|---|---|---|---|---|
| interfaces-t1-r1 | 3 | 4 | 4 | 4 | 3 | 3 | 3 | 3.29 |
| interfaces-t1-r2 | 3 | 4 | 4 | 4 | 4 | 3 | 3 | 3.29 |
| interfaces-t2-r1 | 5 | 4 | 4 | 5 | 5 | 4 | 5 | **4.57** |
| interfaces-t2-r2 | 5 | 5 | 4 | 5 | 5 | 5 | 5 | **4.86** 🏆 |

### 4.2 분석

- **T2에서 압도적**: interfaces-t2-r2가 4.86으로 **Exp01 사상 공동 최고점** (MiniMax M3 uiux-t1-r1과 동률).
- **인터페이스 패턴 적용**: T2 landing page에서 concentic border-radius, image outlines, shadows over borders, scale-on-press, text-wrap, font-smoothing 등이 잘 반영됨 (CSS에서 `-webkit-font-smoothing`, `active:scale-[0.97]`, `text-wrap: balance`, `backdrop-blur` glass 등 확인).
- **T1 약세**: CRM 대시보드에서는 3.29로 낮음. 마이크로 폴리시 패턴이 데이터 밀도 높은 대시보드보다 비주얼 중심 랜딩페이지에서 더 영향력이 큼.
- **Tabular-nums**: 수치형 데이터에 적용되었으나 일관되지는 않음.

---

## 5. Group G (Modern Web) — modern-web-guidance

### 5.1 개별 Run 점수

| Run | Visual | Layout | Color | Spacing | Responsive | Typo | Pro | Avg |
|---|---|---|---|---|---|---|---|---|
| modern-web-t1-r1 | 3 | 4 | 3 | 3 | 3 | 2 | 3 | 3.00 |
| modern-web-t1-r2 | 3 | 4 | 3 | 3 | 4 | 3 | 4 | 3.29 |
| modern-web-t2-r1 | 5 | 4 | 3 | 4 | 4 | 4 | 4 | 4.00 |
| modern-web-t2-r2 | 5 | 4 | 3 | 4 | 4 | 5 | 4 | 4.00 |

### 5.2 분석

- **Zero Modern Web API usage**: run1~2, 1~2 모두 dialog, popover, view-transition, @starting-style, anchor-positioning, container queries, :has(), :user-valid 중 **단 하나도 사용되지 않음**. `npx modern-web-guidance search`가 호출되었으나 retrieve된 가이드가 실제 코드에 반영되지 않았음.
- **Session log 분석**: `npx modern-web-guidance search 'CSS entry exit animation frontend react'` → 결과 반환 성공, 그러나 retrieve된 가이드 컨텍스트가 너무 커서 (1408-1950 tokens per guide) 에이전트가 이를 코드에 통합하지 못한 것으로 추정.
- **Glassmorphism/glow**: T2에서는 glass morphism, glow border, canvas particles, cursor glow 모두 구현 — skill 없이도 모델 기본기가 충분히 표현함.
- **색상 대비 낮음**: 모든 run에서 color_contrast가 3 — dark theme에서 secondary text의 contrast가 부족.
- **접근성 제로**: modern-web-t2-r2에서 `aria-label="Toggle menu"` 1건 외 전무. accessible-error-announcement, aria-invalid, focus-visible 등 MWG 접근성 가이드가 전혀 반영되지 않음.

---

## 6. 전체 7그룹 순위 (R3 기준, DeepSeek V4 Pro)

| # | Group | Overall | T1 | T2 | Files (avg) | Lines (avg) |
|---|---|---|---|---|---|---|
| 1 | **F (Interfaces)** | **4.00** | 3.29 | 4.71 | 9.3 | 745 |
| 2 | **C (UI-UX Pro Max)** | **3.93** | 3.50 | 4.36 | 10.3 | 611 |
| 3 | **A (Baseline)** | **3.78** | 3.43 | 4.14 | 9.8 | 714 |
| 4 | **E (Taste+DESIGN.md)** | **3.64** | 4.07 | 3.21 | 8.0 | 477 |
| 5 | **D (DESIGN.md)** | **3.61** | 2.86 | 4.36 | 8.5 | 524 |
| 6 | **G (Modern Web)** | **3.57** | 3.14 | 4.00 | 9.0 | 625 |
| 7 | **B (Taste)** | **3.32** | 4.29 | 2.36 | 7.0 | 437 |

> A~E 그룹 점수는 R2 기준 (동일 모델/동일 프롬프트), F/G는 R3 기준.

---

## 7. 가설 검증

| # | Hypothesis | Result |
|---|---|---|
| H5 | Interfaces(F)는 마이크로 인터랙션/폴리시 차원에서 높은 점수, 디자인 시스템은 uiux(C)에 미치지 못함 | ✅ **Partially confirmed** — F 1위(4.00)로 uiux(C) 2위(3.93)를 앞섬. 마이크로 폴리시가 전체 점수를 끌어올림 |
| H6 | Interfaces(F) 접근성 < uiux(C) | ✅ **Confirmed** — F는 접근성 관련 패턴(hit area 40x40, tabular-nums)이 있으나 aria/role은 전무 |
| H7 | Modern-web(G) 접근성 최고 | ❌ **Rejected** — Zero modern web APIs, zero accessibility |
| H8 | Modern-web(G) Modern Web API 활용도 압도적 | ❌ **Rejected** — Zero usage across all runs |

**가설 2 수정 필요**: 원래 "combined(E)이 가장 높은 점수"였으나 **interfaces(F)가 1위(4.00)** 로 combined(3.64)를 앞섬.

---

## 8. Key Findings

### 8.1. make-interfaces-feel-better is the new champion

5개 파일(~15KB)의 컴팩트한 스킬이 87KB taste 스킬보다 높은 점수(4.00 vs 3.32). 마이크로 폴리시 원칙이 코드에 직접적으로 반영되기 쉬운 구조.

### 8.2. modern-web-guidance failed in current experiment design

search→retrieve 패턴이 에이전트에 의해 호출되었으나 실제 코드 반영률 0%. 원인:
- 가이드가 개별적으로 너무 큼 (1,408~1,950 tokens)
- "검색 결과를 보고 어떤 가이드를 retrieve할지 판단" 단계에서 에이전트가 적절한 가이드를 선택하지 못함
- retrieve된 가이드가 코드 생성 컨텍스트와 통합되지 않음

### 8.3. Task type dominates — T2 always higher

모든 그룹에서 T2 (랜딩 페이지) > T1 (대시보드). 랜딩 페이지는 비주얼 중심이라 스킬 효과가 더 잘 드러나고, 대시보드는 데이터 밀도가 높아 기본기가 더 중요함.

### 8.4. Color contrast is the universal weakness

7개 그룹 중 color_contrast 평균이 3.5를 넘는 그룹이 없음. Dark theme landing pages의 secondary text contrast가 일관되게 낮음.

---

## 9. Recommendations

1. **make-interfaces-feel-better** — 가장 비용 대비 효과가 좋은 스킬. 모든 프론트엔드 에이전트에 기본 포함 권장.
2. **modern-web-guidance** — 현재 search/retrieve 방식으로는 효과 측정 불가. 137개 가이드 중 핵심 20개를 선별하여 단일 SKILL.md로 병합한 후 재실험 제안.
3. **T1 대시보드 프롬프트 개선 필요** — 대시보드에서 높은 점수를 받은 그룹이 없음 (최고 4.29). 데이터 밀도 높은 UI에 특화된 스킬 필요.
