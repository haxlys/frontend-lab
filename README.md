# Frontend Lab

코딩 에이전트(Coding Agent)가 생성하는 프론트엔드 UI/UX 품질에 영향을 미치는 요인들을 실험하고 분석하는 연구 저장소입니다.

## 실험

### [Experiment 01: Agent Skill이 UI/UX 품질에 미치는 영향](docs/experiments/01-skill-comparison/plan.md)

5개 스킬 그룹(Baseline, Taste, UI-UX Pro Max, DESIGN.md, Taste+DESIGN.md) × 2개 태스크 × 2회 반복 = 20회 코드 생성.

| Round | Model | 1위 | Overall | 실패율 |
|---|---|---|---|---|
| R1 (추상 프롬프트) | DeepSeek V4 Pro | UI-UX Pro Max | 3.61 | 0% |
| R2 (구체적 프롬프트) | DeepSeek V4 Pro | UI-UX Pro Max | 3.93 | 20% |

- [R1 결과 보고서](experiments/01-skill-comparison/archive/20260608_220708/evaluation/summary-report.md)
- [R2 결과 + R1 비교 보고서](experiments/01-skill-comparison/evaluation/summary-report.md)

### [Experiment 02: LLM 모델이 UI/UX 품질에 미치는 영향](docs/experiments/02-model-comparison/plan.md)

Exp 01과 동일 조건에서 모델만 MiniMax M3로 변경. DeepSeek V4 Pro vs MiniMax M3 비교.

| Model | Overall | 실패율 | Avg Lines | 1위 |
|---|---|---|---|---|
| DeepSeek V4 Pro | 3.66 | 20% | 553 | UI-UX Pro Max |
| **MiniMax M3** | **4.11** | **0%** | **1,262** | **UI-UX Pro Max** |

MiniMax M3가 모든 차원에서 DeepSeek를 상회(+12%). `uiux-t1-r1`이 4.86으로 실험 사상 최고 점수.

- [Cross-Model 비교 보고서](experiments/02-model-comparison/evaluation/summary-report.md)

### [Experiment 03: Image Ideation — 이미지 참조가 UI/UX 코드 생성에 미치는 영향](docs/experiments/03-image-ideation/plan.md)

이미지 기반 vs 텍스트 기반 vs Design Token 기반 지시 방식에 따른 UI/UX 코드 품질 차이 측정.

## 연구 문서

- [Coding Agent UI/UX Quality Impact Factor Analysis](docs/research/agent-ui-ux-factors.md) — 에이전트 프론트엔드 출력 품질에 영향을 미치는 요인 분석

## 구조

```
frontend-lab/
├── docs/              # 연구 문서
│   ├── research/      # 이론/배경 분석
│   └── experiments/   # 실험 계획 (01, 02, 03)
├── experiments/       # 실험 실행 결과물
│   ├── 01-skill-comparison/
│   │   ├── groups/    # 5개 스킬 그룹 설정
│   │   ├── tasks/     # 2개 태스크 정의
│   │   ├── evaluation/ # 평가 데이터 & 점수
│   │   ├── screenshots/ # 120장 (2 rounds × 60)
│   │   ├── output/    # 생성된 코드
│   │   └── archive/   # R1 결과물 아카이브
│   └── 02-model-comparison/
│       ├── groups/ → ../../01-skill-comparison/groups  (symlink)
│       ├── tasks/  → ../../01-skill-comparison/tasks   (symlink)
│       ├── evaluation/ # 평가 데이터 & 비교 리포트
│       ├── screenshots/ # 60장
│       └── output/    # MiniMax M3 생성 코드
└── .commandcode/      # 에이전트 설정
```
