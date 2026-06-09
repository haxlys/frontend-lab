# Frontend Lab

코딩 에이전트(Coding Agent)가 생성하는 프론트엔드 UI/UX 품질에 영향을 미치는 요인들을 실험하고 분석하는 연구 저장소입니다.

## 실험

### [Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향](docs/experiments/01-skill-comparison/plan.md)

7개 스킬 그룹 × 2개 태스크 × 2회 반복 = 28회 코드 생성 (3 rounds). Docker 격리 환경.

#### 최종 순위 (DeepSeek V4 Pro)

| # | Group | Skill | Overall | 핵심 발견 |
|---|---|---|---|---|
| 🥇 | **F (Interfaces)** | make-interfaces-feel-better (15KB) | **4.00** | 가장 작은 스킬이 가장 큰 효과 |
| 🥈 | C (UI-UX Pro Max) | ui-ux-pro-max (44KB) | 3.93 | 두 라운드 연속 1위 |
| 🥉 | A (Baseline) | 없음 | 3.78 | 프롬프트 디테일 > 단순 스킬 |
| 4 | E (Taste+DESIGN.md) | taste + DESIGN.md | 3.64 | 복잡한 프롬프트에서 시너지 |
| 5 | D (DESIGN.md) | 디자인 토큰 문서 | 3.61 | 랜딩페이지 특화 |
| 6 | G (Modern Web) | modern-web-guidance (1.2MB) | 3.57 | CLI 플러그인은 콘텐츠 스킬과 호환되지 않음 |
| 7 | B (Taste) | taste-skill (87KB) | 3.32 | Prescriptive prompt와 충돌 |

#### 발견: SKILL.md 프론트메터의 `description`이 결과를 결정한다

`skill()` 명시적 호출은 28 runs 중 단 2건뿐이었다. OpenCode는 시작 시 `.agents/skills/`의 모든 SKILL.md를 **시스템 프롬프트에 자동 주입**한다. 즉, 호출 여부보다 **주입된 내용이 "곧바로 적용 가능한 디자인 지식"인지 "CLI 도구 사용설명서"인지**가 결과를 가른다.

| 스킬 | 설명 패턴 | 결과 |
|---|---|---|
| interfaces: "tabular-nums 사용, shadows over borders..." | **디자인 규칙** (지식) | 1위 |
| modern-web: "`npx search` → `retrieve`" | **CLI 사용법** (설명서) | Baseline 수준 |

둘 다 `skill()` 호출 0회. 한쪽은 1위, 한쪽은 6위.

- [최종 통합 보고서](experiments/01-skill-comparison/evaluation/summary-report.md) — 7그룹, R1→R2→R3 비교, 가설 검증
- [스크린샷 비교](experiments/01-skill-comparison/evaluation/screenshots.md) — 84장 전체 side-by-side

### [Experiment 02: LLM 모델이 UI/UX 품질에 미치는 영향](docs/experiments/02-model-comparison/plan.md)

Exp 01과 동일 조건에서 모델만 MiniMax M3로 변경.

| Model | Overall | 실패율 | Avg Lines | 1위 |
|---|---|---|---|---|
| DeepSeek V4 Pro | 3.66 | 20% | 553 | UI-UX Pro Max |
| **MiniMax M3** | **4.11** | **0%** | **1,262** | UI-UX Pro Max |

- [Cross-Model 비교 보고서](experiments/02-model-comparison/evaluation/summary-report.md)

### [Experiment 03: Image Ideation](docs/experiments/03-image-ideation/plan.md)

이미지 기반 vs 텍스트 기반 vs Design Token 기반 지시 방식에 따른 UI/UX 코드 품질 차이 측정. (계획됨)

## 연구 문서

- [Coding Agent UI/UX Quality Impact Factor Analysis](docs/research/agent-ui-ux-factors.md)

## 구조

```
frontend-lab/
├── docs/              # 연구 문서
│   ├── research/      # 이론/배경 분석
│   └── experiments/   # 실험 계획 (01, 02, 03)
├── experiments/       # 실험 실행 결과물
│   ├── 01-skill-comparison/
│   │   ├── groups/    # 7개 스킬 그룹
│   │   ├── tasks/     # 2개 태스크
│   │   ├── evaluation/ # 평가 + 보고서 + 스크린샷 비교
│   │   ├── screenshots/ # 84장
│   │   ├── output/    # 생성된 코드
│   │   └── archive/   # R1 결과물
│   └── 02-model-comparison/
│       ├── groups/ tasks/ → symlink to 01
│       ├── evaluation/ # 비교 리포트
│       ├── screenshots/ # 60장
│       └── output/    # MiniMax M3 생성 코드
└── .commandcode/      # 에이전트 설정
```
