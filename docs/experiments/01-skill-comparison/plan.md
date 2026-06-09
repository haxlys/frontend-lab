# Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향

> 코딩 에이전트에 주입하는 스킬(Skill)이 프론트엔드 UI/UX 결과물에
> 얼마나 차이를 만드는지 측정한다.

---

## 1. 실험 설계 개요

### 상수 (Constants)

| 변수 | 값 |
|---|---|
| **Agent** | OpenCode |
| **Model** | `commandcode/deepseek/deepseek-v4-pro` |
| **Framework** | React + Vite + Tailwind CSS |
| **실행 환경** | Docker Container — A~F는 `opencode-experiment:latest` (node:22 + opencode + git), G는 `opencode-experiment-mwg` (node:22 + opencode + git + modern-web-guidance npm) — 호스트와 완전 격리 |
| **스킬 포맷** | `.agents/skills/<name>/SKILL.md` |
| **스킬 차단** | Docker isolation (호스트 전역 스킬 완전 차단) |
| **실행 모드** | Docker isolation + provider config 마운트 (모델은 CLI `-m` 플래그로 지정) |

### 독립 변수 (Independent Variable)

**Skill 종류** — 7개 그룹 (A~G)

### 종속 변수 (Dependent Variables)

| 항목 | 측정 방식 | 비중 |
|---|---|---|
| 시각적 완성도 | 스크린샷 기반 1-5 점수 (레이아웃, 여백, 색상) | 30% |
| 반응형 | 모바일/태블릿/데스크톱 적응 여부 | 20% |
| 접근성 | 대비비, aria 속성, 키보드 내비게이션 | 15% |
| 코드 품질 | 컴포넌트 분리, DRY, 타입 안전성 | 15% |
| 디자인 일관성 | DESIGN.md 토큰 일치도 | 10% |
| 생성 시간 | 최초 결과물까지 소요 시간 | 10% |

---

## 2. 전역 오염(Global Contamination) 위험 분석

OpenCode는 여러 경로의 스킬을 **발견(discover)** 하여 `<available_skills>` 목록에 노출한다.
이것이 실험에 미치는 영향을 반드시 통제해야 한다.

### 2.1 스킬 발견 위치 (OpenCode Docs 기준)

OpenCode는 다음 모든 경로에서 `skills/*/SKILL.md` 를 찾아 가용 스킬 목록에 추가한다:

| 우선순위 | 위치 | 예 |
|---|---|---|
| 1 (프로젝트) | `.opencode/skills/<name>/SKILL.md` | 실험군별 스킬 |
| 2 (프로젝트) | `.claude/skills/<name>/SKILL.md` | Claude 호환 |
| 3 (프로젝트) | `.agents/skills/<name>/SKILL.md` | **실험에서 사용** |
| 4 (글로벌) | `~/.config/opencode/skills/<name>/SKILL.md` | `react-doctor` |
| 5 (글로벌) | `~/.claude/skills/<name>/SKILL.md` | 다양 |
| 6 (글로벌) | `~/.agents/skills/<name>/SKILL.md` | **⚠️ 오염 가능** |

### 2.2 글로벌 스킬 현황

`~/.agents/skills/` 에 설치된 스킬:

| 스킬 | UI/UX 영향 | 위험 |
|---|---|---|
| `frontend-design` | ★★★★★ 디자인 철학, 토큰 생성 | **상** — UI 생성 시 자발적 로딩 가능 |
| `web-design-guidelines` | ★★★★☆ 웹 디자인 가이드라인 | **상** |
| `web-design-reviewer` | ★★★★☆ 디자인 리뷰 | **중** |
| `web-component-design` | ★★★☆☆ 컴포넌트 패턴 | **중** |
| `frontend-responsive-design-standards` | ★★★☆☆ 반응형 기준 | **중** |
| `tanstack-start-best-practices` | ★★☆☆☆ TanStack 가이드 | **하** |
| `react-doctor` | ★☆☆☆☆ 진단 도구 | **하** |
| `superpowers` | ★☆☆☆☆ 방법론 스킬팩 | **하** |
| `find-skills` | ★☆☆☆☆ 스킬 검색 | **하** |
| `understand-anything` | ☆☆☆☆☆ 코드 분석 | **없음** |

### 2.3 로딩 메커니즘 (중요)

OpenCode docs:

> **Discovery**: 모든 경로의 스킬을 발견하여 `<available_skills>` 목록에 노출
> **Loading**: Skills are loaded **on-demand** via `skill({ name: "..." })` tool
> **즉, 자동 주입되지 않고 에이전트가 직접 호출해야 로딩됨**

**문제**: 에이전트가 `<available_skills>` 목록을 보고 태스크에 적합하다고 판단하면
스스로 `skill({ name: "frontend-design" })` 을 호출할 수 있음.
이는 **모델의 재량**에 달려 있어 통제 불가능.

### 2.4 차단 대책: Skill Permission

OpenCode는 `opencode.json`에서 스킬 권한을 설정할 수 있다:

```json
{
  "permission": {
    "skill": {
      "*": "deny"
    }
  }
}
```

| 설정 | 효과 |
|---|---|
| `"*": "deny"` | 모든 전역 스킬 차단 — 목록에서 숨김, access 거부 |
| `"*": "allow"` | (기본값) 모든 스킬 허용 |
| `"frontend-design": "deny"` | 특정 스킬만 차단 |

### 2.5 --pure vs Skill Permission

| 방식 | 플러그인 차단 | 스킬 차단 | 적합 |
|---|---|---|---|
| `--pure` | ✅ 외부 플러그인 차단 | ❌ 스킬은 여전히 발견됨 | 불충분 |
| `permission.skill.* = "deny"` | ❌ | ✅ 모든 스킬 차단 | ✅ 필요 |
| 둘 다 적용 | ✅ | ✅ | **최선** |

### 2.6 Docker Isolation (Primary)

**Docker 컨테이너에서 실행하여 호스트의 모든 전역 스킬/플러그인/컨피그를 완전 차단한다.**

검증 결과 (`2026-06-08`):
- `ghcr.io/anomalyco/opencode:latest` 이미지에는 **어떤 스킬이나 컨피그도 내장되어 있지 않음**
- 호스트 `~/.agents/skills/` 의 10개 스킬이 컨테이너 내부로 **전혀 누출되지 않음**
- `service=skill count=1` (baseline, tool만 있음) / `service=skill count=2` (taste, tool + taste-skill)
- **0개 호스트 스킬 누출 확인**
- OpenCode v1.16.2 (로컬과 동일 버전)

```bash
docker run --rm \
  -v /path/to/group-dir:/project \
  -w /project \
  opencode-experiment:latest \
  run -m opencode/deepseek-v4-flash-free \
  "task prompt..."
```

### 2.7 차단 전략

Docker isolation이 유일한 차단 계층. `opencode.json` 제거됨 (불필요 — 모든 설정은 CLI `-m` 플래그로 전달, 권한 제어는 Docker 격리로 처리).

### 2.9 전역 플러그인 (참고)

| 플러그인 | 역할 | UI/UX 오염 |
|---|---|---|
| `opencode-antigravity-auth@latest` | Antigravity 인증 처리 | 없음 |
| `./plugins/cmux-session.js` | cmux 터미널 세션 복원 | 없음 |
| `./plugins/cmux-feed.js` | cmux 소켓 피드 브릿지 | 없음 |
| `@rehydra/opencode` | Rehydra PII 복호화 | 없음 |

> 플러그인은 인프라/인증/세션 관리용. UI 생성에 영향 없음.

---

## 3. 스킬 시스템 (OpenCode 방식)

### 3.0 스킬 구조 원칙 (CRITICAL)

> **모든 스킬은 원본 레포지토리의 디렉토리 구조와 파일 구성을 그대로 복제한다.**
>
> - 스킬 디렉토리명을 **절대 변경하지 않는다** (예: `ui-ux-pro-max-skill` → `ui-ux-pro-max`).
> - **단일 SKILL.md만 있는 스킬은 SKILL.md만 복사**한다.
> - **서브파일이 있는 스킬은 서브파일까지 모두 복사**한다 (`typography.md`, `surfaces.md`, `animations.md` 등).
> - `groups/<group>/.agents/skills/<repo-skill-name>/` 경로에 배치한다.
>
> **검증 방법**: `diff -r <repo-skill-path> <group-skill-path>` (README.md, .git 등 제외).

OpenCode는 `.agents/skills/<name>/SKILL.md` 구조로 스킬을 관리한다 (Claude Code의 `.claude/skills/` 대응).

```
groups/
├── taste/
│   └── .agents/skills/
│       └── taste-skill/SKILL.md              # 원본 레포: skills/taste-skill/SKILL.md (87KB)
├── uiux/
│   └── .agents/skills/
│       └── ui-ux-pro-max/SKILL.md            # 원본 레포: .claude/skills/ui-ux-pro-max/SKILL.md (44KB)
└── interfaces/
    └── .agents/skills/
        └── make-interfaces-feel-better/       # 원본 레포: skills/make-interfaces-feel-better/
            ├── SKILL.md                       # 메인 스킬
            ├── animations.md                  # 서브파일
            ├── performance.md                 # 서브파일
            ├── surfaces.md                    # 서브파일
            └── typography.md                  # 서브파일
```

**Claude Code → OpenCode 호환성:** 두 스킬 모두 원본 SKILL.md 파일을 그대로 사용한다.
OpenCode는 Claude Code와 동일한 `.agents/skills/<name>/SKILL.md` 포맷을 지원하므로 변환 불필요.

### taste-skill (Leonxlnx/taste-skill) — `design-taste-frontend`

- **원본:** [taste-skill](https://github.com/Leonxlnx/taste-skill) v2 (1,206줄, 87KB)
- **핵심:** Brief Inference → 3 Dials (DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY) → Design System Mapping → Bias Correction → AI Tells 금지 → Pre-Flight Check
- **적용:** 랜딩페이지, 포트폴리오, 리디자인 전용 (대시보드는 Out of Scope 명시)

### ui-ux-pro-max-skill (nextlevelbuilder/ui-ux-pro-max) — 스킬명 `ui-ux-pro-max`

- **원본:** [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (44KB, `.claude/skills/ui-ux-pro-max/SKILL.md`)
- **핵심:** 10개 우선순위 규칙 카테고리 (Accessibility CRITICAL → Charts LOW) + Pre-Delivery Checklist
- **적용:** 웹/모바일 전반 (랜딩페이지, 대시보드, 관리자 패널, SaaS 등)

### make-interfaces-feel-better (jakubkrehel/make-interfaces-feel-better)

- **원본:** [make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★, SKILL.md + 4개 서브파일)
- **핵심:** 16가지 마이크로 디테일 원칙 — Concentric border radius, optical alignment, shadows over borders, interruptible animations, split-and-stagger enter, subtle exit, contextual icon animations (opacity/scale/blur), font smoothing, tabular numbers, text-wrap balance/pretty, image outlines, scale(0.96) on press, minimum 40×40px hit area, `transition: all` 금지, `will-change` 제한적 사용, AnimatePresence `initial={false}`
- **적용:** 모든 UI 컴포넌트의 폴리시(polish) 및 마이크로 인터랙션 개선

---

## 4. 실험군 구성

```
Group A ── baseline ── 스킬 없음, AGENTS.md 없음
Group B ── taste ── .agents/skills/taste-skill/SKILL.md 적용
Group C ── uiux ── .agents/skills/ui-ux-pro-max/SKILL.md 적용
Group D ── DESIGN.md ── DESIGN.md만 제공 (스킬 SKILL.md 없음)
Group E ── taste + DESIGN.md ── taste 스킬 + DESIGN.md 동시 적용
Group F ── interfaces ── .agents/skills/make-interfaces-feel-better/ 적용 (SKILL.md + 서브파일 4개)
Group G ── modern-web ── .agents/skills/modern-web-guidance/ 적용 (SKILL.md + 137개 guides), MWG 전용 Docker 이미지 사용
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

**DESIGN.md**:
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

**적용**: `.agents/skills/make-interfaces-feel-better/` (SKILL.md + 4개 서브파일)
**원본**: [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★)
**핵심**: 16가지 디자인 엔지니어링 원칙 — Concentric border radius, optical alignment, shadows over borders, interruptible animations, split-and-stagger enter, subtle exit, contextual icon animations, font smoothing, tabular numbers, text wrapping, image outlines, scale on press, minimum hit area 등. 5개 파일 (SKILL.md + typography/surfaces/animations/performance.md).
**기대**: 마이크로 인터랙션 및 폴리시(polish) 측면에서 다른 그룹 대비 우수. tabular-nums, font-smoothing, concentric border-radius 등 세부 디테일 반영.

### Group G (modern-web)

**적용**: `.agents/skills/modern-web-guidance/` (SKILL.md + guides/ 137개 파일)
**원본**: [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) (1.3k★, `skills/modern-web-guidance/` 경로)
**핵심**: 137가지 Modern Web Platform 가이드 — CSS `@starting-style`, `transition-behavior: allow-discrete`, View Transitions, Container Queries, Popover API, `:user-valid`, Anchor Positioning, Scroll-driven Animations 등. SKILL.md는 `npx modern-web-guidance search/retrieve` CLI 사용을 지시.
**도커 이미지**: `opencode-experiment-mwg` (`Dockerfile.mwg` — npm 글로벌 `modern-web-guidance` 설치 포함)
**실행 스크립트**: `run_group_mwg.sh` (DOCKER_IMAGE="opencode-experiment-mwg")
**기대**: Modern Web API (dialog, popover, view-transition, anchor-positioning 등) 네이티브 활용. Fallback/accessibility guidance 반영. 단, search→retrieve 패턴으로 인해 적용되는 가이드가 run마다 달라질 수 있음 (비결정성).

---

## 5. Task (실험 태스크)

**2개 태스크 × 그룹당 2회** = 그룹당 4회 생성 (Group A~E: 태스크는 R2 CRM 대시보드 + AI 랜딩페이지 프롬프트 사용)

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

## 6. 실행 프로토콜 (Docker 기반)

### Step 0: 사전 준비

```bash
# 실험 디렉토리 구조 확인
ls experiments/01-skill-comparison/
# groups/{baseline,taste,uiux,design-doc,combined,interfaces,modern-web}
# tasks/{task1*,task2*}
# output/

# Docker 이미지 빌드
# Group A~F: 기존 이미지
docker build -t opencode-experiment:latest .
# Group G: MWG 전용 이미지 (modern-web-guidance npm 패키지 포함)
docker build -t opencode-experiment-mwg -f Dockerfile.mwg .
```

### Step 1: Docker 실행 (그룹별)

**각 그룹은 미리 준비된 디렉토리 구조 사용**
(Docker 볼륨 마운트만 하면 즉시 실행 가능)

```bash
# Group A~F: opencode-experiment:latest 이미지 사용
bash run_group.sh baseline
bash run_group.sh taste
bash run_group.sh uiux
bash run_group.sh design-doc
bash run_group.sh combined
bash run_group.sh interfaces

# Group G: opencode-experiment-mwg 이미지 사용 (modern-web-guidance npm 필요)
bash run_group_mwg.sh modern-web
```

### Step 2: 스킬 구조 (미리 배치됨)

```
groups/
├── baseline/         # 빈 디렉토리 (스킬 없음)
├── taste/            # .agents/skills/taste-skill/SKILL.md
├── uiux/             # .agents/skills/ui-ux-pro-max/SKILL.md
├── design-doc/       # DESIGN.md
├── combined/         # .agents/skills/taste-skill/SKILL.md + DESIGN.md
├── interfaces/       # .agents/skills/make-interfaces-feel-better/ (SKILL.md + 4개 서브파일)
└── modern-web/       # .agents/skills/modern-web-guidance/ (SKILL.md + 137개 guides)
```

### Step 3: 생성 실행 (run.sh)

```bash
# 전체 실험 자동 실행 (run.sh)
bash experiments/01-skill-comparison/run.sh

# 또는 개별 실행
bash experiments/01-skill-comparison/run.sh baseline task1
bash experiments/01-skill-comparison/run.sh taste task2
```

### Step 4: 결과 수집

```bash
# Docker 실행 결과는 output/<group>-t<task>-r<run>/ 에 저장됨
# run.sh가 그룹 템플릿을 복사 → Docker 마운트 → 에이전트가 파일 생성
ls output/
# baseline-t1-r1/  baseline-t1-r2/  baseline-t2-r1/  baseline-t2-r2/  ...
# taste-t1-r1/     taste-t1-r2/     ...
# 각 디렉토리: 생성된 index.html, main.tsx 등 + session.log
```

**실행 매트릭스** (동일):

| Group | Task 1 (run1) | Task 1 (run2) | Task 2 (run1) | Task 2 (run2) |
|-------|:---:|:---:|:---:|:---:|
| A (baseline) | ✅ | ✅ | ✅ | ✅ |
| B (taste) | ✅ | ✅ | ✅ | ✅ |
| C (uiux) | ✅ | ✅ | ✅ | ✅ |
| D (design-doc) | ✅ | ✅ | ✅ | ✅ |
| E (combined) | ✅ | ✅ | ✅ | ✅ |
| F (interfaces) | ✅ | ✅ | ✅ | ✅ |
| G (modern-web) | ✅ | ✅ | ✅ | ✅ |

총 **28회 생성** (A~E 20 + F 4 + G 4)

### Step 5: 스크린샷 캡처 (agent-browser 사용)

> **Apple Silicon (darwin-arm64)**: Headless Chrome이 `about:blank`에서 멈추는 버그가 있으므로 `--headed` 플래그 필수.
> 그 외 환경에서는 `--args "--no-sandbox"` 사용 가능.

```bash
# 1회 실행 (수동)
cd output/baseline-t1-r1
npx vite --port 5173 --host &
sleep 3

agent-browser open "http://127.0.0.1:5173" --headed
agent-browser set viewport 1440 900
agent-browser screenshot ../../screenshots/baseline-t1-r1-desktop.png
agent-browser set viewport 768 1024
agent-browser screenshot ../../screenshots/baseline-t1-r1-tablet.png
agent-browser set viewport 375 667
agent-browser screenshot ../../screenshots/baseline-t1-r1-mobile.png
agent-browser close --all
kill %1

# 전체 자동 캡처 (run.sh 사용)
bash run.sh --screenshots
```

**캡처 매트릭스**: 28회 생성 × 3 뷰포트 = **84장 스크린샷**, 모두 `screenshots/` 디렉토리에 저장.

---

## 7. 평가 프로세스

### 정성 평가 (스크린샷 blind test)

평가자는 그룹/실행번호를 모른 채 스크린샷만 보고 평가:

| 평가 항목 | 1~5 점수 |
|---|---|
| 전체적인 시각적 매력도 | |
| 레이아웃 구조의 명확성 | |
| 색상/대비 조화 | |
| 여백과 계층 구조 | |
| 반응형 적응 품질 | |
| 폰트/타이포그래피 | |
| 전반적 전문성 | |

### 정량 평가

- **Lighthouse** Performance / Accessibility / Best Practices 점수
- **react-doctor** (`npx react-doctor`) 진단 결과
- **생성 시간** (초)
- **파일/컴포넌트 개수**
- **코드 라인 수**

---

## 8. 예상 결과

| 그룹 | 시각적 완성도 | 코드 품질 | 반응형 | 접근성 |
|---|---|---|---|---|
| A (baseline) | ★★☆ | ★★★ | ★★☆ | ★★☆ |
| B (taste) | ★★★★ | ★★★ | ★★★ | ★★★ |
| C (ui-ux-pro-max) | ★★★★☆ | ★★★★ | ★★★★ | ★★★★ |
| D (DESIGN.md) | ★★★☆ | ★★★ | ★★★ | ★★★ |
| E (combined) | ★★★★★ | ★★★★ | ★★★★ | ★★★★ |
| F (interfaces) | ★★★★ | ★★★☆ | ★★★ | ★★★☆ |
| G (modern-web) | ★★★★☆ | ★★★★ | ★★★★ | ★★★★★ |

**가설 1**: baseline(A)이 가장 낮은 점수.
**가설 2**: combined(E)이 가장 높은 점수.
**가설 3**: DESIGN.md 단독(D)보다 taste(B)가 시각적으로 더 나은 결과.
**가설 4**: `commandcode/deepseek/deepseek-v4-pro`는 유료 모델로, 무료 모델(`opencode/deepseek-v4-flash-free`) 대비 스킬 효과가 더 두드러질 수 있음.
**가설 5**: interfaces(F)는 마이크로 인터랙션/폴리시 평가 차원에서 다른 그룹 대비 높은 점수. 그러나 전체적인 디자인 시스템 적용 측면에서는 uiux(C)와 combined(E)에 미치지 못할 것.
**가설 6**: interfaces(F)는 접근성 측면에서 hit area 40×40px, tabular-nums, font-smoothing 등 간접적 기여만 하므로 uiux(C)의 명시적 a11y 규칙보다 낮은 점수.
**가설 7 (NEW)**: modern-web(G)는 접근성 차원에서 가장 높은 점수 (accessible-error-announcement, prefers-reduced-motion, dialog/popover keyboard handling 등 기본 내장). 그러나 search→retrieve 패턴으로 인해 run-to-run variance가 다른 그룹보다 클 것.
**가설 8 (NEW)**: modern-web(G)의 Modern Web API 활용도 (dialog, popover, view-transition, @starting-style 등)는 다른 모든 그룹을 압도할 것.

---

## 9. 산출물 구조

```
experiments/01-skill-comparison/
├── plan.md                          # 실험 계획 문서
├── run.sh                           # Docker 실행 스크립트 (A~F)
├── run_group.sh                     # 그룹별 실행 스크립트 (A~F)
├── run_group_mwg.sh                 # MWG 전용 실행 스크립트 (G)
├── Dockerfile                       # 기본 이미지 (A~F)
├── Dockerfile.mwg                   # MWG 이미지 (G: modern-web-guidance npm 포함)
├── groups/
│   ├── baseline/                    # Group A (스킬 없음, 빈 디렉토리)
│   ├── taste/                       # Group B (taste 스킬)
│   │   └── .agents/skills/taste-skill/SKILL.md
│   ├── uiux/                        # Group C (ui-ux-pro-max 스킬)
│   │   └── .agents/skills/ui-ux-pro-max/SKILL.md
│   ├── design-doc/                  # Group D (DESIGN.md)
│   │   └── DESIGN.md
│   ├── combined/                    # Group E (taste + DESIGN.md)
│   │   ├── .agents/skills/taste-skill/SKILL.md
│   │   └── DESIGN.md
│   ├── interfaces/                  # Group F (make-interfaces-feel-better)
│   │   └── .agents/skills/make-interfaces-feel-better/
│   │       ├── SKILL.md
│   │       ├── animations.md
│   │       ├── performance.md
│   │       ├── surfaces.md
│   │       └── typography.md
│   └── modern-web/                  # Group G (modern-web-guidance)
│       └── .agents/skills/modern-web-guidance/
│           ├── SKILL.md
│           └── guides/ (137개 .md 파일)
├── tasks/
│   ├── task1.md
│   └── task2.md
├── screenshots/                     # 전체 스크린샷 (60장), run.sh --screenshots 로 생성
│   ├── baseline-t1-r1-desktop.png
│   ├── baseline-t1-r1-tablet.png
│   ├── baseline-t1-r1-mobile.png
│   └── ...
├── evaluation/
│   ├── scores.csv
│   └── summary-report.md
└── output/                          # 생성된 코드 결과물 (템플릿 복사본 + 생성 파일)
    ├── baseline-t1-r1/              # Group A, Task 1, Run 1
    │   ├── package.json, index.html, vite.config.ts, ...
    │   ├── src/App.tsx, src/main.tsx
    │   ├── src/components/
    │   └── session.log
    ├── baseline-t1-r2/
    ├── taste-t1-r1/
    └── ...
```

---

## 10. 추가 스킬 후보 분석

### 선정된 스킬 ①: `make-interfaces-feel-better` (jakubkrehel) → Group F

| 항목 | 분석 |
|---|---|
| 저장소 | [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) (956★) |
| 규모 | SKILL.md + 4개 서브파일 (typography/surfaces/animations/performance.md), 총 ~15KB |
| 접근 방식 | 순수 마크다운 설명 — `.agents/skills/` 구조에 그대로 배치 |
| 차별점 | 기존 스킬(taste, uiux)이 커버하지 않는 **마이크로 폴리시** 영역 |
| 적합성 | ✅ CLI 의존성 없음. ✅ 크기 적절. ✅ 기존 도커 이미지 변경 불필요. |

### 선정된 스킬 ②: `modern-web-guidance` (GoogleChrome) → Group G

| 항목 | 분석 |
|---|---|
| 저장소 | [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) (1.3k★) |
| 규모 | SKILL.md + 137개 가이드 파일 (guides/ 하위), 총 1.2MB |
| 접근 방식 | `npx modern-web-guidance search "query"` → `retrieve "<id>"` CLI 기반 |
| 도커 설정 | `Dockerfile.mwg` — `npm install -g modern-web-guidance@latest` 포함 |
| 실행 스크립트 | `run_group_mwg.sh` — `DOCKER_IMAGE="opencode-experiment-mwg"` |
| 주의사항 | search→retrieve 패턴으로 인해 **적용되는 가이드가 run마다 다를 수 있음** (비결정성). 전체 137개 가이드를 전부 컨텍스트에 주입하지 않고 에이전트가 선택적으로 retrieve. |

---

## 11. 사전 검증 (실험 전 확인)

- [x] `opencode/deepseek-v4-flash-free` 모델 정상 동작 확인
- [x] Docker isolation 검증 완료 (호스트 `~/.agents/skills/` 10개 스킬 완전 차단)
- [x] Docker 내 `opencode run` + 모델 호출 정상 동작 확인
- [x] taste-skill v2 분석 완료 — 원본 `skills/taste-skill/SKILL.md` (87KB) 그대로 사용
- [x] ui-ux-pro-max 분석 완료 — 원본 `.claude/skills/ui-ux-pro-max/SKILL.md` (44KB) 그대로 사용
- [x] make-interfaces-feel-better 분석 완료 — 원본 `skills/make-interfaces-feel-better/` (SKILL.md + 4개 서브파일) 그대로 사용
- [x] modern-web-guidance 분석 완료 — 원본 `skills/modern-web-guidance/` (SKILL.md + 137개 guides). Dockerfile.mwg + run_group_mwg.sh 생성 완료
- [x] 7개 그룹 디렉토리 구조 완료 (baseline, taste, uiux, design-doc, combined, interfaces, modern-web)
- [ ] `Dockerfile.mwg` 이미지 빌드 (`docker build -t opencode-experiment-mwg -f Dockerfile.mwg .`)
- [ ] `run.sh` — `groups` 리스트에 `interfaces` 및 `modern-web` 추가
- [ ] `run_group_mwg.sh` — modern-web 그룹 정상 작동 검증 (Docker 내 `npx modern-web-guidance search` 확인)
- [ ] baseline-t1-r1 실행 및 `npm install` 정상 동작 확인
- [ ] 28회 전체 실행 (약 4-5시간 소요 예상)
