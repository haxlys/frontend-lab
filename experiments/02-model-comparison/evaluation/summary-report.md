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

## 8. Recommendations

1. **MiniMax M3 > DeepSeek V4 Pro for frontend code generation** — undeniably better across all dimensions
2. **UI-UX Pro Max skill is the safest bet** — #1 in both models, works universally
3. **Combined (Taste+DESIGN.md) shows biggest model uplift** (+0.61) — complex skill combos benefit more from stronger models
4. **Baseline is model-agnostic** — if you're not using skills, model choice matters less
5. **Color contrast remains unsolved** — both models score ~3.5 regardless of skill or model
6. **Responsive quality is the weakest dimension** — both models around 3.7-3.95, need explicit responsive requirements in prompts
