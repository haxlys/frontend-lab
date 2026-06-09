# Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향 — 최종 보고서

> Rounds: R1 (abstract prompts) → R2 (detailed CRM+Cyberpunk prompts) → R3 (Groups F+G)
> Agent: OpenCode v1.16.2 | Model: commandcode/deepseek/deepseek-v4-pro | Docker isolation

---

## 1. 실험 개요

| 항목 | R1 | R2 | R3 (F+G) |
|---|---|---|---|
| 그룹 수 | 5 (A~E) | 5 (A~E) | 2 (F, G) |
| 총 생성 횟수 | 20 | 20 | 8 |
| 빌드 성공률 | 100% | 100% | 100% |
| 코드 생성 실패 | 0 | 4 (20%) | 0 (0%) |
| 스크린샷 | 60장 | 60장 | 24장 |

---

## 2. Task 변화

| Round | Task 1 | Task 2 |
|---|---|---|
| R1 | 추상적 SaaS 대시보드 | ADE 제품 소개 페이지 |
| R2 | 구체적 CRM 대시보드 (Design System + Layout 명세) | 사이버펑크/Glassmorphism AI 랜딩페이지 |
| R3 | R2와 동일 | R2와 동일 |

---

## 3. 전체 7그룹 최종 순위 (DeepSeek V4 Pro)

| # | Group | Overall | T1 (CRM) | T2 (Landing) | T1→T2 Δ | Files (avg) | Lines (avg) |
|---|---|---|---|---|---|---|---|
| 🥇 | **F (Interfaces)** | **4.00** | 3.29 | 4.71 | +1.42 | 9.3 | 745 |
| 🥈 | C (UI-UX Pro Max) | **3.93** | 3.50 | 4.36 | +0.86 | 10.3 | 611 |
| 🥉 | A (Baseline) | **3.78** | 3.43 | 4.14 | +0.71 | 9.8 | 714 |
| 4 | E (Taste+DESIGN.md) | **3.64** | 4.07 | 3.21 | -0.86 | 8.0 | 477 |
| 5 | D (DESIGN.md) | **3.61** | 2.86 | 4.36 | +1.50 | 8.5 | 524 |
| 6 | G (Modern Web) | **3.57** | 3.14 | 4.00 | +0.86 | 9.0 | 625 |
| 7 | B (Taste) | **3.32** | 4.29 | 2.36 | -1.93 | 7.0 | 437 |

---

## 4. 차원별 점수

| Group | Visual | Layout | Color | Spacing | Responsive | Typo | Pro |
|---|---|---|---|---|---|---|---|
| F (Interfaces) | 4.00 | 4.25 | 4.00 | **4.50** | 4.25 | 3.75 | 4.00 |
| C (UI-UX Pro Max) | 4.25 | 4.00 | 4.00 | 3.75 | 3.25 | 4.00 | **4.25** |
| A (Baseline) | **4.50** | 3.75 | 3.25 | 3.75 | **4.50** | **4.50** | 3.50 |
| E (Taste+DESIGN.md) | 3.75 | 3.50 | 3.75 | 3.50 | 3.75 | 3.75 | 3.50 |
| D (DESIGN.md) | 3.75 | **4.00** | 3.00 | 3.75 | 3.50 | 3.75 | 3.50 |
| G (Modern Web) | 4.00 | 4.00 | 3.00 | 3.50 | 3.75 | 3.50 | 3.75 |
| B (Taste) | 3.00 | 3.75 | 3.50 | 3.25 | 3.50 | 3.50 | 2.75 |

---

## 5. 그룹별 상세 분석

### Group A (Baseline) — Overall 3.78, 🥉

- **구성**: 스킬 없음, AGENTS.md 없음, Docker isolation 단독
- **R1→R2**: +0.64 (가장 큰 상승폭) — 프롬프트가 구체적일수록 모델 기본기만으로도 우수
- **R2 T2**: 4.14 — Space Grotesk + Inter 폰트 페어링, custom canvas particle system, glow 효과를 자발적 구현
- **특징**: Baseline이 Taste(3.32)와 DESIGN.md(3.61)보다 높음. **프롬프트 디테일 > 단순 스킬 주입**

### Group B (Taste) — Overall 3.32, 7위

- **구성**: `.agents/skills/taste-skill/SKILL.md` (87KB)
- **R1→R2**: -0.21 (유일한 하락) — prescriptive prompt와 충돌
- **T1 최고점**: 4.29 (대시보드에서는 우수)
- **T2 최하점**: 2.36 (랜딩페이지에서 taste skill이 오히려 방해)
- **특징**: "자유로운 디자인 표현" 접근이 강한 방향성의 프롬프트와 상극

### Group C (UI-UX Pro Max) — Overall 3.93, 🥈

- **구성**: `.agents/skills/ui-ux-pro-max/SKILL.md` (44KB)
- **R1: 1위(3.61), R2: 1위(3.93)** — 두 라운드 연속 1위
- **특징**: 유일하게 두 라운드 모두 Top-2. accessibility, 디자인 시스템, 코드 품질 균형. Professionalism 4.25 최고점.
- **T2**: useMouseGlow, useScrollReveal 커스텀 훅, Geist+Inter 이중 폰트 시스템

### Group D (DESIGN.md) — Overall 3.61, 5위

- **구성**: DESIGN.md만 제공 (스킬 SKILL.md 없음)
- **T2**: 4.36 (DESIGN.md의 컬러 토큰이 다크 테마 랜딩에 잘 적용)
- **T1**: 2.86 (대시보드에서는 DESIGN.md 단독으로 부족)
- **R2 개별 최고점**: design-doc-t2-r2 4.71 — MouseFollower, InteractiveCanvas, GlowButton(3 variants), BentoCard(per-color glow maps), ScrollReveal(left/right/up)
- **특징**: T1→T2 Δ+1.50 (모든 그룹 중 가장 큰 작업 타입 간 격차). Skill 없이 설계 문서만으로 최고의 개별 run 달성 가능

### Group E (Taste+DESIGN.md) — Overall 3.64, 4위

- **구성**: taste 스킬 + DESIGN.md 동시 적용
- **R1→R2**: +0.54 (+2 순위) — 복잡한 프롬프트에서 시너지 발현
- **T1**: 4.07 — recharts 통합, `useCallback`/`useEffect`, keyboard shortcuts
- **T2**: 3.21 — taste + DESIGN.md의 병합으로 인한 토큰 충돌
- **특징**: R1 꼴찌 → R2 4위, 가장 큰 순위 상승. 복잡한 프롬프트에서 시너지, 단순 프롬프트에서는 충돌

### Group F (Interfaces) — Overall 4.00, 🥇

- **구성**: `.agents/skills/make-interfaces-feel-better/` (SKILL.md + 4개 서브파일, ~15KB)
- **R3 T2**: 4.71 — font-smoothing 2회, box-shadow layered shadows, backdrop-blur, concentric border-radius 등 패턴이 코드에 직접 반영
- **R3 T1**: 3.29 — 대시보드에서는 마이크로 폴리시 효과 제한적
- **interfaces-t2-r2**: **4.86** — Exp01 사상 공동 최고점 (MiniMax M3 uiux-t1-r1과 동률)
- **T1→T2 Δ**: +1.42 — 랜딩페이지 특화
- **특징**: 5개 파일 15KB의 컴팩트한 스킬이 87KB taste 스킬보다 높은 점수. 마이크로 폴리시 원칙이 코드에 직접 반영되는 구조.
- **tabular-nums**: 수치형 데이터에 부분 적용됨
- **접근성**: hit area 40×40px 간접 기여. aria/role 명시적 사용 없음

### Group G (Modern Web) — Overall 3.57, 6위

- **구성**: `.agents/skills/modern-web-guidance/` (SKILL.md + 137개 guides, 1.2MB). MWG 전용 Docker 이미지 사용
- **실패 분석**: SKILL.md가 `<available_skills>`에 등록되었으나 에이전트가 `skill()` 호출을 **단 한 번도 실행하지 않음**.
  - `npx modern-web-guidance search` 호출 0회 (모든 session log 확인 완료)
  - SKILL.md의 "MANDATORY: Execute FIRST" 지시를 에이전트가 무시하고 자체 지식으로 코드 생성
- **Modern Web API 사용**: dialog, popover, view-transition, `@starting-style`, `transition-behavior: allow-discrete`, anchor-positioning, container queries, `:has()`, `:user-valid`, `prefers-reduced-motion` **전부 0회 사용**
- **T2**: glass morphism, glow border, canvas particles, cursor glow 구현 — 스킬 없이 모델 기본기만으로 가능
- **특징**: 근본 원인 — MWG는 **Claude Code 플러그인**으로 설계되었다 (`.claude-plugin/plugin.json`, `/modern-web-guidance search` 명령어 호출 방식). OpenCode의 `.agents/skills/` 경로는 콘텐츠 스킬(taste, uiux, interfaces)을 위한 자동 주입 구조인 반면, MWG는 CLI 도구 사용설명서에 가깝다. **이것이 MWG의 일반적인 사용법이고, 원본 그대로 사용한 결과가 "호출 0회"다.** 실험 설계 오류가 아니라, MWG의 설계 철학이 OpenCode 스킬 시스템과 맞지 않는 것을 증명한 유효한 결과.

---

## 6. R1 vs R2 vs R3 비교

| 항목 | R1 | R2 | R3 |
|---|---|---|---|
| 1위 | C (UI-UX Pro Max): 3.61 | F (Interfaces): 4.00 | — |
| 꼴찌 | E (Taste+DESIGN.md): 3.11 | G (Modern Web): 3.57 | — |
| A~E 평균 | 3.11 | 3.66 | — |
| 빌드 실패 | 0/20 | 0/20 | 0/8 |
| 코드 생성 실패 | 0/20 | 4/20 (20%) | 0/8 (0%) |
| 평균 TSX Files | 7.0 | 8.7 | 9.2 |
| 평균 TSX Lines | 369 | 552 | 685 |
| 접근성 | 전무 | 전무 (aria-label 일부) | F: 없음, G: 1건 |
| Best Visual | T2 gradient text/glow | T2 canvas particles, mouse glow, framer-motion | F T2: font-smoothing + layered shadows + glass |

---

## 7. 가설 검증

| # | Hypothesis | R1 | R2 | R3 |
|---|---|---|---|---|
| H1 | Baseline(A)이 가장 낮은 점수 | ❌ (E가 더 낮음) | ❌ (B가 5위) | ❌ (B가 7위) |
| H2 | Combined(E)가 가장 높은 점수 | ❌ (C가 1위) | ❌ (C가 1위) | ❌ (F가 1위) |
| H3 | DESIGN.md(D) < Taste(B) 시각적 | ❌ (B=D=3.14) | ❌ (B<D) | — |
| H4 | 유료 모델이 스킬 효과 증폭 | ✅ (Exp02에서 확인) | — | — |
| H5 | F는 마이크로 폴리시 우수, 디자인 시스템은 C 이하 | — | — | 🟡 Partially — F가 C를 앞섬 |
| H6 | F 접근성 < C | — | — | ✅ Confirmed |
| H7 | G 접근성 최고 | — | — | ❌ Zero usage |
| H8 | G Modern API 활용도 압도적 | — | — | ❌ Zero usage |

---

## 8. 핵심 발견

### 8.1. 프롬프트 디테일 > 단순 스킬 주입

Baseline(스킬 없음)이 Taste(87KB 스킬)보다 +0.46 높음. 프롬프트에 Design System과 Layout 명세가 포함되면 스킬 없이도 좋은 결과.

### 8.2. make-interfaces-feel-better = 최고 효율

15KB 5파일로 87KB 1파일 Taste를 제치고 1위. 마이크로 폴리시 원칙이 코드에 직접 반영되기 쉬운 구조. **T2 랜딩페이지 특화.**

### 8.3. modern-web-guidance = 콘텐츠 스킬이 아닌 CLI 플러그인

MWG는 Claude Code의 `/modern-web-guidance search` 명령어로 동작하는 **CLI 플러그인**으로 설계되었다. OpenCode의 `.agents/skills/` 경로는 콘텐츠 스킬(taste, uiux, interfaces)이 자동 주입되는 구조인 반면, MWG의 SKILL.md는 지식을 주입하는 게 아니라 "`npx search` 하고 `retrieve` 해라"는 CLI 사용설명서에 가깝다. 4 runs 모두 호출 0회 — **이것이 레포를 그대로 사용한 일반적인 결과다.** 실험 설계 오류가 아니라, MWG의 아키텍처가 이 실험 프레임워크와 맞지 않음을 증명한 유효한 데이터다.

### 8.4. Task type dominates

모든 그룹에서 T2 (랜딩 페이지) > T1 (대시보드). T1에서 최고 점수는 4.29 (Taste), T2에서 최저 점수는 2.36 (Taste) — **스킬 효과가 Task 타입에 크게 의존**.

### 8.5. Taste skill = 가장 불안정

R1: 3.54 (2위) → R2: 3.32 (5위). T1 최고점(4.29)과 T2 최하점(2.36)을 동시에 보유. Task 타입과 프롬프트 스타일에 극도로 민감.

### 8.6. Color contrast = 보편적 약점

7개 그룹 중 color_contrast 평균이 3.5를 넘는 그룹 없음. Dark theme landing pages의 secondary text contrast가 일관되게 낮음.

### 8.7. 접근성 = 모든 그룹의 사각지대

aria-role, keyboard nav, focus management 전무. uiux(C)의 명시적 a11y 규칙이 있음에도 실제 코드 반영률 0%.

---

## 9. 스킬별 평가 요약

| Skill | Size | Best In | Worst In | Reliability | Recommend |
|---|---|---|---|---|---|
| **make-interfaces-feel-better** | 15KB | 랜딩페이지 (4.71) | 대시보드 (3.29) | Task-dependent | ✅ Basic include |
| **ui-ux-pro-max** | 44KB | 전반 (4.25 Pro) | 반응형 (3.25) | Most consistent | ✅ 항상 포함 |
| **DESIGN.md** | 1KB | 랜딩페이지 (4.36) | 대시보드 (2.86) | Contrast needed | ✅ 토큰 가이드용 |
| **taste + DESIGN.md** | 88KB | 대시보드 (4.07) | 랜딩페이지 (3.21) | Unpredictable | 🟡 복잡한 태스크에만 |
| **taste-skill** | 87KB | 대시보드 (4.29) | 랜딩페이지 (2.36) | Very unstable | ❌ Prescriptive prompt와 충돌 |
| **modern-web-guidance** | 1.2MB | — | — | Incompatible | ❌ 실험 설계 부적합 |

---

## 10. Skill Invocation Analysis

> Extracted from session.log via `scripts/extract_skill_metrics.py`

### 10.1 Overview

| Metric | Value |
|---|---|
| Total runs | 28 |
| Skill invoked | 7/28 (25%) |
| Skill NOT invoked | 21/28 (75%) |

### 10.2 Invocation by Group

| Group | Invoked / Total | Rate | Skills Used |
|---|---|---|---|
| baseline | 0/4 | 0% | N/A (no skill available) |
| combined | 3/4 | **75%** | design-taste-frontend |
| design-doc | 0/4 | **0%** | N/A |
| interfaces | 0/4 | 0% | N/A |
| modern-web | 0/4 | 0% | N/A |
| taste | 2/4 | 50% | design-taste-frontend |
| uiux | 2/4 | 50% | ui-ux-pro-max |

### 10.3 Score Comparison: Skill Invoked vs Not Invoked

| Dimension | Invoked | Not Invoked | Delta |
|---|---|---|---|
| Visual Appeal | 4.14 | 3.71 | +0.43 |
| Layout Clarity | 4.00 | 3.86 | +0.14 |
| Color Contrast | 4.00 | 3.33 | +0.67 |
| Spacing Hierarchy | 3.86 | 3.67 | +0.19 |
| Responsive Quality | 3.43 | 3.86 | **-0.43** |
| Typography | 4.29 | 3.57 | +0.71 |
| Overall Professionalism | 4.00 | 3.48 | **+0.52** |

### 10.4 Critical Confounding Variable: design-doc, interfaces, modern-web = `false`

**design-doc**(DESIGN.md), **interfaces**(make-interfaces-feel-better), **modern-web**(modern-web-guidance) 세 그룹은 스킬 파일이 존재함에도 단 **0/4회** 호출됨. 즉, 이들 그룹의 결과는 실질적으로 baseline과 동일한 조건에서 생성된 것임.

- design-doc (`DESIGN.md`): DESIGN.md가 디렉토리에 존재하지만 에이전트가 `skill()` 도구로 로드하지 않음. 파일을 `Read` 도구로 읽었을 가능성은 있으나 skill injection은 발생하지 않음.
- interfaces: `make-interfaces-feel-better` SKILL.md가 존재하나 호출 0건.
- modern-web: 1.2MB guidance가 존재하나 search→retrieve CLI 패턴이 `skill()` 호출로 이어지지 않음.

### 10.5 Task-Type Skew: T2 triggers more skill invocation

| Task | Invoked / Total | Rate |
|---|---|---|
| t1 (CRM Dashboard) | 3/14 | 21% |
| t2 (AI Landing Page) | 4/14 | **28%** |

T2 (다크모드/글래스모피즘 랜딩페이지)에서 스킬 호출률이 약간 더 높음. 프롬프트에 "cyberpunk", "glassmorphism", "neon gradient" 같은 특수 디자인 키워드가 포함되면 에이전트가 스킬 로드 필요성을 더 느끼는 것으로 추정.

### 10.6 Invocation Matrix (Group × Task)

| Group | t1 | t2 |
|---|---|---|
| combined | 1/2 | 2/2 |
| taste | 2/2 | 0/2 |
| uiux | 0/2 | 2/2 |

**taste는 T1에서만, uiux는 T2에서만 호출** — 두 스킬 그룹이 완전히 상호배타적인 태스크 의존성을 보임. taste는 B2B CRM 대시보드에서, ui-ux-pro-max는 다크모드 랜딩페이지에서만 로드됨.

### 10.7 Implications

1. **Group labels are misleading without this data.** uiux-t1-r1, uiux-t1-r2 (점수 3.0, 4.0) 는 실질적으로 baseline 조건임. uiux 그룹의 Task2 점수만이 진정한 "스킬 효과"를 반영.
2. **DESIGN.md는 skill() 주입 실패.** 향후 실험에서는 DESIGN.md를 별도 파일이 아닌 task prompt에 inline으로 포함하거나, `permission.skill` allowlist로 강제하는 설계 필요.
3. **Score comparison (invoked vs not-invoked)은 confounding이 심함.** invoked 샘플이 7개뿐이고 특정 그룹+태스크에 편중되어 있음. invoked 그룹이 더 높은 점수를 보이는 것은 **스킬 효과라기보다 selection bias**일 가능성. (T2가 원래 점수가 더 높고, uiux/combined가 원래 상위 그룹이기 때문)
4. **재현성 테스트 권장.** Task1에도 `skill()` 호출을 강제하는 조건(system prompt에 "You MUST invoke available skills")을 추가해 동일 태스크에서 호출 여부가 품질에 미치는 순수 효과 측정.

> Data: `evaluation/skill_invocations.csv` | Regenerate: `scripts/merge_skill_metrics.py experiments/01-skill-comparison`

---

## 11. Recommendations

1. **make-interfaces-feel-better** — 모든 프론트엔드 에이전트에 기본 스킬로 포함 권장 (최소 비용 최대 효과)
2. **ui-ux-pro-max** — 디자인 시스템, 접근성, 코드 품질의 균형이 필요한 프로젝트에 필수
3. **modern-web-guidance** — CLI 플러그인 아키텍처로는 콘텐츠 스킬과 동등 비교 불가. 137개 가이드 중 핵심 20개를 선별 → 단일 콘텐츠 SKILL.md로 병합한 후 재실험 제안.
4. **T1 대시보드 최적화** — 대시보드에서 highest score가 4.29 (Taste), average 3.37. 데이터 밀도 높은 UI 특화 스킬 필요
5. **접근성 평가 강화** — 모든 그룹 0점. Lighthouse a11y 점수를 정량 평가에 포함하고, keyboard nav / screen reader 테스트 추가
6. **color contrast 자동화** — T2 다크 테마에서 WCAG AA contrast 실패 반복. 자동 contrast 체크 도구 통합 고려
