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
| **실행 환경** | Docker Container (`opencode-experiment:latest` = node:22 + opencode + git + CommandCode provider config) — 호스트와 완전 격리 |
| **스킬 포맷** | `.agents/skills/<name>/SKILL.md` |
| **스킬 차단** | Docker isolation (호스트 전역 스킬 완전 차단) |
| **실행 모드** | Docker isolation + provider config 마운트 (모델은 CLI `-m` 플래그로 지정) |

### 독립 변수 (Independent Variable)

**Skill 종류** — 5개 그룹 (A~E)

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

OpenCode는 `.agents/skills/<name>/SKILD.md` 구조로 스킬을 관리한다.

```
groups/                           # opencode.json 없음 — Docker isolation + CLI -m으로 처리
├── taste/
│   └── .agents/skills/
│       └── taste-skill/SKILL.md     # 원본 taste-skill v2 (87KB)
└── uiux/
    └── .agents/skills/
        └── ui-ux-pro-max-skill/SKILL.md  # 원본 ui-ux-pro-max-skill (44KB)
```

**Claude Code → OpenCode 호환성:** 두 스킬 모두 원본 SKILL.md 파일을 그대로 사용한다.
OpenCode는 Claude Code와 동일한 `.agents/skills/<name>/SKILL.md` 포맷을 지원하므로 변환 불필요.

### taste-skill (Leonxlnx/taste-skill) — `design-taste-frontend`

- **원본:** [taste-skill](https://github.com/Leonxlnx/taste-skill) v2 (1,206줄, 87KB)
- **핵심:** Brief Inference → 3 Dials (DESIGN_VARIANCE / MOTION_INTENSITY / VISUAL_DENSITY) → Design System Mapping → Bias Correction → AI Tells 금지 → Pre-Flight Check
- **적용:** 랜딩페이지, 포트폴리오, 리디자인 전용 (대시보드는 Out of Scope 명시)

### ui-ux-pro-max-skill (nextlevelbuilder/ui-ux-pro-max-skill)

- **원본:** [ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) (44KB)
- **핵심:** 10개 우선순위 규칙 카테고리 (Accessibility CRITICAL → Charts LOW) + Pre-Delivery Checklist
- **적용:** 웹/모바일 전반 (랜딩페이지, 대시보드, 관리자 패널, SaaS 등)

---

## 4. 실험군 구성

```
Group A ── baseline ── 스킬 없음, AGENTS.md 없음
Group B ── taste ── .agents/skills/taste-skill/SKILL.md 적용
Group C ── uiux ── .agents/skills/ui-ux-pro-max-skill/SKILL.md 적용
Group D ── DESIGN.md ── DESIGN.md만 제공 (스킬 SKILL.md 없음)
Group E ── taste + DESIGN.md ── taste 스킬 + DESIGN.md 동시 적용
```

### Group A (baseline)

**적용**: 없음. AGENTS.md 없음. Docker isolation 단독.
**기대**: Tailwind 기본값 스타일링. 여백/색상이 기본값 수준. 구조만 있음.

### Group B (taste)

**적용**: `.agents/skills/taste-skill/SKILL.md`
**기대**: 모던한 UI 취향 반영. 그림자, border-radius, 계층 구조 개선. 감각적인 디자인.

### Group C (uiux)

**적용**: `.agents/skills/ui-ux-pro-max-skill/SKILL.md`
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

---

## 5. Task (실험 태스크)

**2개 태스크 × 그룹당 2회** = 그룹당 4회 생성

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
# groups/{baseline,taste,uiux,design-doc,combined}
# tasks/{task1*,task2*}
# output/

# Docker 이미지 빌드 (Dockerfile → opencode-experiment:latest)
docker build -t opencode-experiment:latest .
```

### Step 1: Docker 실행 (그룹별)

**각 그룹은 미리 준비된 디렉토리 구조 사용**
(Docker 볼륨 마운트만 하면 즉시 실행 가능)

```bash
# Group A: Baseline
# Docker 볼륨 마운트 + 실행
docker run --rm \
  -v "$(pwd)/groups/baseline:/project" \
  -w /project \
  opencode-experiment:latest \
  run -m opencode/deepseek-v4-flash-free \
  "task prompt..."
```

### Step 2: 스킬 구조 (미리 배치됨)

```
groups/
├── baseline/         # 빈 디렉토리 (스킬 없음)
├── taste/            # .agents/skills/taste-skill/SKILL.md
├── uiux/             # .agents/skills/ui-ux-pro-max-skill/SKILL.md
├── design-doc/       # DESIGN.md
└── combined/         # .agents/skills/taste-skill/SKILL.md + DESIGN.md
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

총 **20회 생성**

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

**캡처 매트릭스**: 20회 생성 × 3 뷰포트 = **60장 스크린샷**, 모두 `screenshots/` 디렉토리에 저장.

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

**가설 1**: baseline(A)이 가장 낮은 점수.
**가설 2**: combined(E)이 가장 높은 점수.
**가설 3**: DESIGN.md 단독(D)보다 taste(B)가 시각적으로 더 나은 결과.
**가설 4**: `commandcode/deepseek/deepseek-v4-pro`는 유료 모델로, 무료 모델(`opencode/deepseek-v4-flash-free`) 대비 스킬 효과가 더 두드러질 수 있음.

---

## 9. 산출물 구조

```
experiments/01-skill-comparison/
├── plan.md                          # 실험 계획 문서
├── run.sh                           # Docker 실행 스크립트
├── groups/
│   ├── baseline/                    # Group A (스킬 없음, 빈 디렉토리)
│   ├── taste/                       # Group B (taste 스킬)
│   │   └── .agents/skills/taste-skill/SKILL.md
│   ├── uiux/                        # Group C (ui-ux-pro-max 스킬)
│   │   └── .agents/skills/ui-ux-pro-max-skill/SKILL.md
│   ├── design-doc/                  # Group D (DESIGN.md)
│   │   └── DESIGN.md
│   └── combined/                    # Group E (taste + DESIGN.md)
│       ├── .agents/skills/taste-skill/SKILL.md
│       └── DESIGN.md
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

## 10. 사전 검증 (실험 전 확인)

- [x] `opencode/deepseek-v4-flash-free` 모델 정상 동작 확인
- [x] Docker isolation 검증 완료 (호스트 `~/.agents/skills/` 10개 스킬 완전 차단)
- [x] Docker 내 `opencode run` + 모델 호출 정상 동작 확인
- [x] taste-skill v2 분석 완료 — 원본 (87KB) 그대로 사용
- [x] ui-ux-pro-max-skill 분석 완료 — 원본 (44KB) 그대로 사용
- [x] 5개 그룹 디렉토리 구조 완료 (Docker isolation으로 opencode.json 불필요)
- [x] `run.sh` — baseline-t1-r1 실행 및 `npm install` 정상 동작 확인
- [x] 스크린샷 — agent-browser `--headed` 모드로 Apple Silicon headless Chrome 버그 해결
- [x] `run.sh --screenshots` — agent-browser로 모든 출력 디렉토리 스크린샷 자동 캡처 확인
- [ ] 20회 전체 실행 (약 2-3시간 소요 예상)
