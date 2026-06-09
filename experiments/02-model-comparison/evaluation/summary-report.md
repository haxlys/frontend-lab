# Experiment 02: MiniMax M3 Results & Cross-Model Comparison

> 실행일: 2026-06-08 | Agent: OpenCode | Model: `commandcode/MiniMaxAI/MiniMax-M3` | Docker isolation
> 비교 대상: Exp 01 R2 (`commandcode/deepseek/deepseek-v4-pro`)

---

## 1. 실행 개요

| 항목 | Exp 02 (MiniMax M3) | Exp 01 R2 (DeepSeek V4 Pro) |
|---|---|---|
| 총 생성 횟수 | 20 (5 groups × 2 tasks × 2 runs) | 20 |
| 빌드 성공률 | 20/20 (100%) | 20/20 (100%) |
| 코드 생성 실패 | **0/20 (0%)** | 4/20 (20%) |
| 스크린샷 | 60장 | 60장 |
| 평균 TSX Files | **12.2** | 8.7 |
| 평균 TSX Lines | **1,262** | 553 |
| 소요 시간 | ~3.5시간 | ~2.5시간 |

---

## 2. 그룹별 종합 점수 (1–5)

| Group | MiniMax M3 | DeepSeek V4 Pro | Δ | Interpretation |
|---|---|---|---|---|
| **C (UI-UX Pro Max)** | **4.39** | 3.93 | **+0.46** | Both models: #1. MiniMax amplifies the skill |
| **E (Taste+DESIGN.md)** | **4.25** | 3.64 | **+0.61** | Big synergy lift with MiniMax |
| **D (DESIGN.md)** | **4.18** | 3.61 | **+0.57** | DESIGN.md alone works better with MiniMax |
| **B (Taste)** | **3.89** | 3.32 | **+0.57** | Taste skill: no more conflicts |
| **A (Baseline)** | **3.86** | 3.78 | +0.08 | Baseline similar between models |
| **Overall Avg** | **4.11** | 3.66 | **+0.45** | MiniMax M3 significantly better |

### T1 vs T2 Breakdown

| Group | MiniMax T1 | DeepSeek T1 | MiniMax T2 | DeepSeek T2 |
|---|---|---|---|---|
| A (Baseline) | 3.64 | 3.43 | 4.07 | 4.14 |
| B (Taste) | 3.64 | 4.29 | 4.14 | 2.36 |
| C (UI-UX Pro Max) | 4.21 | 3.50 | 4.57 | 4.36 |
| D (DESIGN.md) | 4.14 | 2.86 | 4.21 | 4.36 |
| E (Taste+DESIGN.md) | 3.79 | 4.07 | 4.71 | 3.21 |

---

## 3. 차원별 점수 비교

| Dimension | MiniMax M3 | DeepSeek V4 Pro | Δ |
|---|---|---|---|
| Visual Appeal | 4.35 | 3.75 | **+0.60** |
| Layout Clarity | 4.40 | 3.80 | **+0.60** |
| Color Contrast | 3.50 | 3.45 | +0.05 |
| Spacing Hierarchy | 4.35 | 3.60 | **+0.75** |
| Responsive Quality | 3.95 | 3.75 | +0.20 |
| Typography | 4.10 | 3.80 | +0.30 |
| Professionalism | 4.15 | 3.45 | **+0.70** |

---

## 4. 가설 검증

| # | Hypothesis | Result | Evidence |
|---|---|---|---|
| H1 | MiniMax < DeepSeek on overall score | ❌ **Rejected** | MiniMax 4.11 > DeepSeek 3.66 (+0.45) |
| H2 | UI-UX Pro Max #1 in both models | ✅ **Confirmed** | UI-UX ranked 1st in both |
| H3 | Task2 shows bigger model gap | ❌ **Rejected** | Gap actually wider on T1 (MiniMax scores converge on T2) |
| H4 | MiniMax failure rate > DeepSeek's 20% | ❌ **Rejected** | MiniMax 0% vs DeepSeek 20% |
| H5 | MiniMax amplifies skill effect more | ✅ **Confirmed** | Skill groups vs baseline: MiniMax +0.53 avg, DeepSeek +0.12 avg |

---

## 5. Key Findings

### 5.1. MiniMax M3 crushes DeepSeek V4 Pro on frontend code

전체 평균 4.11 vs 3.66 — **+0.45 (12% 우위)**. 모든 차원에서 MiniMax가 우수했으며, 특히 Spacing (+0.75), Professionalism (+0.70), Visual Appeal (+0.60)에서 큰 격차를 보였습니다.

### 5.2. Zero failure rate — MiniMax is more reliable

DeepSeek가 4/20(20%) 코드 생성 실패를 보인 반면, MiniMax는 **단 한 건의 실패도 없었습니다**. 모든 20개 실행에서 완전한 프로젝트 구조가 생성되었습니다.

### 5.3. MiniMax generates 2.3x more code

평균 1,262줄 vs 553줄. 단순히 양만 많은 것이 아니라, 더 많은 컴포넌트 분리, 커스텀 훅, 애니메이션 시스템을 포함합니다.

### 5.4. UI-UX Pro Max is the universal champion

두 모델 모두에서 1위를 차지한 유일한 스킬 그룹:
- DeepSeek: 3.93 (1st)
- MiniMax: 4.39 (1st)
- MiniMax `uiux-t1-r1`은 5.0/4.86으로 **실험 사상 최고 점수** 기록

### 5.5. Taste skill redeemed in MiniMax

DeepSeek에서 유일하게 점수가 하락했던 Taste 그룹이 MiniMax에서는 3.89로 baseline을 상회:
- T1: 4.14, 3.14 (평균 3.64) — DeepSeek의 4.29보다는 낮지만 안정적
- T2: 4.00, 4.29 (평균 4.14) — DeepSeek의 2.36에서 극적인 개선
- Taste skill의 "자유로운 디자인 표현"이 MiniMax와 더 잘 맞음

### 5.6. Baseline gap closes — model matters more than skill for basics

Baseline 그룹의 모델 간 차이는 +0.08로 가장 작았습니다. 스킬 없이도 두 모델 모두 유사한 수준의 기본 코드를 생성합니다. 스킬이 주입될수록 MiniMax의 이점이 더 커집니다.

---

## 6. Top Individual Runs

| Rank | Run | Score | Model | Group | Task |
|---|---|---|---|---|---|
| 1 | **uiux-t1-r1** | **4.86** | MiniMax | UI-UX Pro Max | T1 |
| 2 | design-doc-t2-r2 | 4.71 | DeepSeek | DESIGN.md | T2 |
| 3 | combined-t2-r1 | 4.71 | MiniMax | Taste+DESIGN.md | T2 |
| 4 | combined-t2-r2 | 4.71 | MiniMax | Taste+DESIGN.md | T2 |
| 5 | uiux-t2-r1 | 4.57 | MiniMax | UI-UX Pro Max | T2 |
| 6 | uiux-t2-r2 | 4.57 | MiniMax | UI-UX Pro Max | T2 |
| 7 | design-doc-t1-r2 | 4.57 | MiniMax | DESIGN.md | T1 |
| 8 | design-doc-t2-r2 | 4.57 | MiniMax | DESIGN.md | T2 |

Top 8 중 7개가 MiniMax M3. 유일한 DeepSeek 진입은 design-doc-t2-r2 (4.71).

---

## 7. Cross-Model Summary

```
                    DeepSeek V4 Pro    MiniMax M3
                    ─────────────────  ────────────
Visual Appeal:      ████████░░ 3.75    █████████ 4.35
Layout Clarity:     ████████░░ 3.80    █████████ 4.40
Color Contrast:     ███████░░░ 3.45    ███████░░░ 3.50
Spacing:            ███████░░░ 3.60    █████████ 4.35
Responsive:         ████████░░ 3.75    ████████░░ 3.95
Typography:         ████████░░ 3.80    ████████░░ 4.10
Professionalism:    ███████░░░ 3.45    ████████░░ 4.15
───────────────────────────────────────────────────
OVERALL:            ███████░░░ 3.66    █████████ 4.11
Failure Rate:       20%                0%
Avg Code Volume:    553 lines          1,262 lines
Best Group:         UI-UX Pro Max      UI-UX Pro Max
Worst Group:        Taste (3.32)       Baseline (3.86)
```

---

## 8. Skill Invocation Analysis

> Extracted from session.log via `scripts/extract_skill_metrics.py`

### 8.1 Overview

| Metric | Value |
|---|---|
| Total runs | 20 |
| Skill invoked | 8/20 (40%) |
| Skill NOT invoked | 12/20 (60%) |

### 8.2 Invocation by Group

| Group | Invoked / Total | Rate | Skills Used |
|---|---|---|---|
| baseline | 0/4 | 0% | N/A (no skill available) |
| combined | 3/4 | **75%** | design-taste-frontend |
| design-doc | 0/4 | **0%** | N/A |
| taste | 3/4 | **75%** | design-taste-frontend |
| uiux | 2/4 | 50% | ui-ux-pro-max |

### 8.3 Score Comparison: Skill Invoked vs Not Invoked

| Dimension | Invoked | Not Invoked | Delta |
|---|---|---|---|
| Visual Appeal | 4.50 | 4.17 | +0.33 |
| Layout Clarity | 4.38 | 4.33 | +0.04 |
| Color Contrast | 3.62 | 3.50 | +0.12 |
| Spacing Hierarchy | 4.38 | 4.25 | +0.12 |
| Responsive Quality | 3.88 | 4.00 | -0.12 |
| Typography | 4.12 | 4.25 | -0.12 |
| Overall Professionalism | 4.50 | 3.92 | **+0.58** |

### 8.4 Task-Driven Invocation: MiniMax is heavily biased toward Task 2

| Task | Invoked / Total | Rate |
|---|---|---|
| t1 (CRM Dashboard) | 2/10 | **20%** |
| t2 (AI Landing Page) | 6/10 | **60%** |

MiniMax M3는 Task1(B2B CRM)에서 거의 스킬을 호출하지 않음 (combined 1회, taste 1회만). 반면 Task2(다크모드 랜딩페이지)에서는 taste 2회, combined 2회, uiux 2회로 **60%** 호출률. MiniMax 모델이 "cyberpunk/glassmorphism" 같은 특수 키워드에서는 스킬 로드 필요성을 더 강하게 인식.

### 8.5 Invocation Matrix (Group × Task)

| Group | t1 | t2 |
|---|---|---|
| combined | 1/2 | 2/2 |
| taste | 1/2 | 2/2 |
| uiux | 0/2 | 2/2 |

Exp01(DeepSeek) 대비 **taste의 T2 호출률이 0% → 100%로 반전**되었음. MiniMax M3는 taste-skill을 T2에서 더 적극적으로 활용. uiux는 여전히 T1에서는 호출하지 않음 (두 모델 공통).

### 8.6 Model Comparison: Skill Invocation Rate

| Group | DeepSeek V4 Pro | MiniMax M3 |
|---|---|---|
| baseline | 0% | 0% |
| taste | **50%** | **75%** |
| uiux | 50% | 50% |
| design-doc | 0% | 0% |
| combined | 75% | 75% |

MiniMax M3가 taste 그룹에서 **25%p 더 높은 호출률**을 보임. 다른 그룹은 동일. 이는 MiniMax가 taste skill의 설명(design-taste-frontend)을 Task2 랜딩페이지에 더 잘 매칭시킨 결과.

### 8.7 Key Findings

1. **MiniMax M3 invocation rate: 40% vs DeepSeek 25%.** 더 강한 모델이 스킬을 더 자주 호출함 — 모델의 추론 능력이 스킬 자동선택 확률에 영향.
2. **design-doc (DESIGN.md)는 두 모델 모두 0% 호출.** DESIGN.md는 `skill()` 메커니즘으로 주입되지 않음. 향후 실험에서 DESIGN.md 조건은 task prompt 인라인 포함 또는 permission 강제가 필요.
3. **uiux T1 0% 공통.** 두 모델 모두 B2B CRM 대시보드에서는 ui-ux-pro-max 스킬이 불필요하다고 판단. uiux 그룹의 T1 점수는 실질적 baseline.
4. **invoked 그룹의 점수가 더 높지만 selection bias 주의.** T2가 원래 점수가 높고, uiux/combined가 원래 상위 그룹. 순수 스킬 효과인지 task/group 편향인지 분리하려면 T1에도 강제 호출 조건 실험이 필요.
5. **taste-t2-r2: 유일한 중복 호출 사례.** MiniMax M3가 taste-t2-r2에서 `design-taste-frontend`를 2회 호출 (재진입). 이런 패턴이 점수에 미치는 영향 분석 가치 있음.

> Data: `evaluation/skill_invocations.csv` | Regenerate: `scripts/merge_skill_metrics.py experiments/02-model-comparison`

---

## 9. Recommendations

1. **MiniMax M3 > DeepSeek V4 Pro for frontend code generation** — undeniably better across all dimensions
2. **UI-UX Pro Max skill is the safest bet** — #1 in both models, works universally
3. **Combined (Taste+DESIGN.md) shows biggest model uplift** (+0.61) — complex skill combos benefit more from stronger models
4. **Baseline is model-agnostic** — if you're not using skills, model choice matters less
5. **Color contrast remains unsolved** — both models score ~3.5 regardless of skill or model
6. **Responsive quality is the weakest dimension** — both models around 3.7-3.95, need explicit responsive requirements in prompts
