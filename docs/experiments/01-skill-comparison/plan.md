# Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향

> 코딩 에이전트에 주입하는 스킬(Skill)이 프론트엔드 UI/UX 결과물에
> 얼마나 차이를 만드는지 측정한다.

---

## 참조 문서

> 공통 실행 환경, 평가 프레임워크, 스크린샷 프로토콜, 스킬 시스템, 실험 컨벤션은 다음 문서에 정의되어 있다.

| 문서 | 내용 |
|---|---|
| [_common/execution-environment.md](../_common/execution-environment.md) | Docker 격리, opencode.json, 글로벌 오염 차단, Apple Silicon 이슈 |
| [_common/evaluation-framework.md](../_common/evaluation-framework.md) | 종속 변수, 정성/정량 평가표, 평가 산출물 |
| [_common/screenshot-protocol.md](../_common/screenshot-protocol.md) | agent-browser 캡처, 뷰포트 정의, 자동화 |
| [_common/skill-system.md](../_common/skill-system.md) | `.agents/skills/` 포맷, 스킬 복제 원칙, Claude Code 호환성 |
| [_common/experiment-conventions.md](../_common/experiment-conventions.md) | 디렉토리 구조, 명명 규칙, run.sh 인터페이스, 태스크 포맷 |

---

## 1. 실험 설계

### 상수 (Constants)

[experiment-conventions.md](../_common/experiment-conventions.md)의 공통 상수 + 실험 특정 값:

| 변수 | 값 |
|---|---|
| **Model** | `commandcode/deepseek/deepseek-v4-pro` |

### 독립 변수 (Independent Variable)

**Skill 종류** — 6개 그룹 (A~F)

### 종속 변수 (Dependent Variables)

→ [evaluation-framework.md](../_common/evaluation-framework.md) 참조.

---

## 2. 실험군 구성

```
Group A ── baseline ── 스킬 없음, AGENTS.md 없음
Group B ── taste ── .agents/skills/taste-skill/SKILL.md 적용
Group C ── uiux ── .agents/skills/ui-ux-pro-max/SKILL.md 적용
Group D ── DESIGN.md ── DESIGN.md만 제공 (스킬 SKILL.md 없음)
Group E ── taste + DESIGN.md ── taste 스킬 + DESIGN.md 동시 적용
Group F ── interfaces ── .agents/skills/make-interfaces-feel-better/SKILL.md 적용
```

### Group A (baseline)

**적용**: 없음. AGENTS.md 없음. Docker isolation 단독.
**기대**: Tailwind 기본값 스타일링. 여백/색상이 기본값 수준. 구조만 있음.

### Group B (taste)

**적용**: `.agents/skills/taste-skill/SKILL.md`
**기대**: 모던한 UI 취향 반영. 그림자, border-radius, 계층 구조 개선. 감각적인 디자인.

### Group C (uiux)

**적용**: `.agents/skills/ui-ux-pro-max/SKILL.md`
**기대**: 디자인 시스템 수준의 정교한 결과물. 모든 컴포넌트에 일관된 디자인 토큰 적용.

### Group D (DESIGN.md)

**적용**: 프로젝트 루트에 `DESIGN.md` 배치 (SKILL.md 없음)

```md
# Design System
- Primary: #6366f1 (indigo-500)
- Secondary: #ec4899 (pink-500)
- Background: #f8fafc (slate-50)
- Surface: #ffffff
- Text Primary: #1e293b (slate-800)
- Text Secondary: #64748b (slate-500)
- Font: Inter, system-ui
- Base Size: 16px
- Scale: 14/16/20/24/32/48
- Border Radius: 8px (default), 16px (cards), 9999px (pills)
- Shadow: sm: 0 1px 2px, md: 0 4px 6px -1px, lg: 0 10px 15px -3px
- Transition: all 200ms ease
```

### Group E (combined)

**적용**: `.agents/skills/taste-skill/SKILL.md` + `DESIGN.md` 동시 적용
**기대**: 가장 좋은 결과물. 취향과 구체적인 디자인 토큰이 결합된 시너지.

### Group F (interfaces)

**적용**: `.agents/skills/make-interfaces-feel-better/SKILL.md`
**원본**: [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★)
**핵심**: 16가지 디자인 엔지니어링 원칙 — Concentric border radius, optical alignment, shadows over borders, interruptible animations, split-and-stagger enter, subtle exit, contextual icon animations, font smoothing, tabular numbers, text wrapping, image outlines, scale on press, minimum hit area 등. 5개 파일 (SKILL.md + typography/surfaces/animations/performance.md).
**기대**: 마이크로 인터랙션 및 폴리시(polish) 측면에서 다른 그룹 대비 우수.

---

## 3. 스킬 상세

### taste-skill (Leonxlnx/taste-skill) — `design-taste-frontend`

- **원본:** [taste-skill](https://github.com/Leonxlnx/taste-skill) v2 (1,206줄, 87KB)
- **핵심:** Brief Inference → 3 Dials (DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY) → Design System Mapping → Bias Correction → AI Tells 금지 → Pre-Flight Check
- **적용:** 랜딩페이지, 포트폴리오, 리디자인 전용 (대시보드는 Out of Scope 명시)

### ui-ux-pro-max-skill (nextlevelbuilder/ui-ux-pro-max) — `ui-ux-pro-max`

- **원본:** [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (44KB, `.claude/skills/ui-ux-pro-max/SKILL.md`)
- **핵심:** 10개 우선순위 규칙 카테고리 (Accessibility CRITICAL → Charts LOW) + Pre-Delivery Checklist
- **적용:** 웹/모바일 전반 (랜딩페이지, 대시보드, 관리자 패널, SaaS 등)

### make-interfaces-feel-better (jakubkrehel)

- **원본:** [make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★, SKILL.md + 4개 서브파일)
- **핵심:** 16가지 마이크로 디테일 원칙 — Concentric border radius, optical alignment, shadows over borders, interruptible animations, split-and-stagger enter, subtle exit, contextual icon animations (opacity/scale/blur), font smoothing, tabular numbers, text-wrap balance/pretty, image outlines, scale(0.96) on press, minimum 40×40px hit area, `transition: all` 금지, `will-change` 제한적 사용, AnimatePresence `initial={false}`
- **적용:** 모든 UI 컴포넌트의 폴리시(polish) 및 마이크로 인터랙션 개선

---

## 4. Tasks (실험 태스크)

### Task 1: SaaS 대시보드 개요 페이지

```
React + Vite + Tailwind CSS로 SaaS 대시보드 개요 페이지를 만들어줘.

필요한 섹션:
1. 상단 통계 카드 4개 (Revenue, Users, Orders, Growth)
2. 최근 활동 목록 (시간, 사용자, 액션, 상태)
3. 월별 차트 영역 (막대 그래프 영역, 실제 차트 라이브러리 없이 CSS로만 표현)

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
- 하나의 index.html + main.tsx에서 동작하는 구조
```

### Task 2: ADE 제품 소개 원페이지

> ADE = Agent Development Editor — AI 기반 에이전트 개발 에디터 (가상 제품)

```
React + Vite + Tailwind CSS로 AI 에이전트 개발 에디터(ADE) 제품
소개 원페이지를 만들어줘.

ADE는 "AI 기반 Agent Development Editor"로, 개발자가 자연어로
에이전트를 설계하고 테스트할 수 있는 도구야.

필요한 섹션:
1. Hero 섹션 (제품명, 태그라인, CTA 버튼)
2. 주요 기능 3가지 (카드 형태, 각각 아이콘 + 설명)
3. 동작 방식 (3단계: Design → Build → Deploy)
4. 가격 카드 3단계 (Free / Pro / Enterprise)

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
- 하나의 index.html + main.tsx에서 동작하는 구조
- 실제 제품처럼 설득력 있게 디자인
```

---

## 5. 실행 (Docker 기반)

→ 실행 환경: [_common/execution-environment.md](../_common/execution-environment.md)
→ 스크린샷: [_common/screenshot-protocol.md](../_common/screenshot-protocol.md)
→ run.sh 인터페이스: [_common/experiment-conventions.md](../_common/experiment-conventions.md)

### 실행 매트릭스

| Group | Task 1 (run1) | Task 1 (run2) | Task 2 (run1) | Task 2 (run2) |
|-------|:---:|:---:|:---:|:---:|
| A (baseline) | ✅ | ✅ | ✅ | ✅ |
| B (taste) | ✅ | ✅ | ✅ | ✅ |
| C (uiux) | ✅ | ✅ | ✅ | ✅ |
| D (design-doc) | ✅ | ✅ | ✅ | ✅ |
| E (combined) | ✅ | ✅ | ✅ | ✅ |
| F (interfaces) | ✅ | ✅ | ✅ | ✅ |

총 **24회 생성**

---

## 6. 가설 (Hypotheses)

| # | 가설 |
|---|---|
| H1 | baseline(A)이 가장 낮은 점수 |
| H2 | combined(E)이 가장 높은 점수 |
| H3 | DESIGN.md 단독(D)보다 taste(B)가 시각적으로 더 나은 결과 |
| H4 | DeepSeek V4 Pro는 유료 모델로, 무료 모델 대비 스킬 효과가 더 두드러짐 |
| H5 | interfaces(F)는 마이크로 인터랙션/폴리시 평가 차원에서 다른 그룹 대비 높은 점수. 그러나 전체적인 디자인 시스템 적용 측면에서는 uiux(C)와 combined(E)에 미치지 못함 |
| H6 | interfaces(F)는 접근성 측면에서 hit area 40×40px, tabular-nums, font-smoothing 등 간접적 기여만 하므로 uiux(C)의 명시적 a11y 규칙보다 낮은 점수 |

### 예상 점수

| 그룹 | 시각적 완성도 | 코드 품질 | 반응형 | 접근성 |
|---|---|---|---|---|
| A (baseline) | ★★☆ | ★★★ | ★★☆ | ★★☆ |
| B (taste) | ★★★★ | ★★★ | ★★★ | ★★★ |
| C (ui-ux-pro-max) | ★★★★☆ | ★★★★ | ★★★★ | ★★★★ |
| D (DESIGN.md) | ★★★☆ | ★★★ | ★★★ | ★★★ |
| E (combined) | ★★★★★ | ★★★★ | ★★★★ | ★★★★ |
| F (interfaces) | ★★★★ | ★★★☆ | ★★★ | ★★★☆ |
| H (lazyweb) | ★★★★☆ | ★★★★ | ★★★★ | ★★★★ |

---

## 7. 평가

→ [evaluation-framework.md](../_common/evaluation-framework.md) 참조.

---

## 8. 추가 스킬 후보 분석

### 고려되었으나 제외된 스킬: `modern-web-guidance` (GoogleChrome)

| 항목 | 분석 |
|---|---|
| 저장소 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) (1.3k★) |
| 규모 | SKILL.md + 128+ 가이드 파일 (guides/ 하위), 총 500KB+ |
| 접근 방식 | `npx modern-web-guidance search "query"` CLI 기반 검색 |
| 제외 사유 | 1) **CLI 의존성**: Docker 컨테이너에 npm 패키지 pre-install 필요. 2) **컨텍스트 폭발**: 128+ 가이드가 `<available_skills>`로 노출 시 컨텍스트 초과 위험. 3) **통제 불가**: "에이전트가 필요할 때 검색" 패턴으로 skill injection의 인과관계 측정 불가. 4) **실험 설계 위반**: CLI 검색은 프롬프트에 skill이 주입되는 구조가 아님. 5) **중복 영역**: `ui-ux-pro-max`가 accessibility, performance, forms 등 커버 |

### 선정된 스킬: `make-interfaces-feel-better` (jakubkrehel)

| 항목 | 분석 |
|---|---|
| 저장소 | [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★) |
| 규모 | SKILL.md + 4개 서브파일 (typography/surfaces/animations/performance.md), 총 ~15KB |
| 접근 방식 | 순수 마크다운 — `.agents/skills/` 구조에 그대로 배치 가능 |
| 차별점 | 기존 스킬(taste, uiux)이 커버하지 않는 **마이크로 폴리시** 영역 |
| 적합성 | ✅ CLI 의존성 없음. ✅ 크기 적절. ✅ 기존 도커 이미지 변경 불필요. ✅ 독립적인 실험 변수로 기능 |

---

## 9. 사전 검증

- [x] `opencode/deepseek-v4-flash-free` 모델 정상 동작 확인
- [x] Docker isolation 검증 완료 (호스트 `~/.agents/skills/` 10개 스킬 완전 차단)
- [x] Docker 내 `opencode run` + 모델 호출 정상 동작 확인
- [x] taste-skill v2 분석 완료 — 원본 (87KB) 그대로 사용
- [x] ui-ux-pro-max 분석 완료 — 원본 `.claude/skills/ui-ux-pro-max/SKILL.md` (44KB) 그대로 사용
- [x] make-interfaces-feel-better 분석 완료 — 원본 (SKILL.md + 4개 서브파일) 그대로 사용
- [x] `modern-web-guidance` 분석 완료 — 제외 결정
- [x] 5개 기존 그룹 디렉토리 구조 완료
- [ ] Group F (`interfaces/`) 그룹 디렉토리 생성 및 스킬 배치
- [ ] `run.sh` — `groups` 리스트에 `interfaces` 추가
- [ ] `run.sh` — baseline-t1-r1 실행 및 `npm install` 정상 동작 확인
- [ ] 스크린샷 — agent-browser `--headed` 모드로 Apple Silicon headless Chrome 버그 해결
- [ ] 24회 전체 실행 (약 3-4시간 소요 예상)
