# Experiment 02: LLM 모델이 UI/UX 품질에 미치는 영향

> Exp 01과 동일한 조건에서 **LLM 모델만** `commandcode/MiniMaxAI/MiniMax-M3`로 변경하여
> 모델 간 UI/UX 품질 차이를 측정한다.

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
| [Exp 01 plan.md](../01-skill-comparison/plan.md) | 실험군 구성, 스킬 상세, 그룹 설명 |

---

## 1. 실험 설계

### Exp 01 vs Exp 02 차이점

| 변수 | Exp 01 | Exp 02 |
|---|---|---|
| **Model** | `commandcode/deepseek/deepseek-v4-pro` | `commandcode/MiniMaxAI/MiniMax-M3` |
| Agent | OpenCode | OpenCode |
| Framework | React + Vite + Tailwind CSS | React + Vite + Tailwind CSS |
| 실행 환경 | Docker isolation | Docker isolation |
| Skill 5개 그룹 | 동일 | 동일 |
| Task 2종 | 동일 (R2 프롬프트) | 동일 |
| 평가 기준 | 동일 | 동일 |

**Exp 02의 유일한 독립 변수는 LLM 모델이다.**

### 상수

→ [experiment-conventions.md](../_common/experiment-conventions.md) 공통 상수 + 실험 특정:

| 변수 | 값 |
|---|---|
| **Model** | `commandcode/MiniMaxAI/MiniMax-M3` |

### 종속 변수

→ [evaluation-framework.md](../_common/evaluation-framework.md) 참조.

---

## 2. 모델 설정

### opencode.json

```json
{
  "provider": {
    "commandcode": {
      "models": {
        "MiniMaxAI/MiniMax-M3": {
          "id": "MiniMaxAI/MiniMax-M3",
          "name": "MiniMax M3",
          "limit": {
            "context": 128000,
            "output": 8192
          },
          "modalities": {
            "input": ["text"],
            "output": ["text"]
          }
        }
      }
    }
  }
}
```

### Model Flag

`opencode.json`을 Docker에 마운트하여 사용:

```bash
docker run --rm \
  -v "$run_dir:/project" \
  -v "$SCRIPT_DIR/opencode.json:/root/.config/opencode/opencode.json:ro" \
  -w /project \
  opencode-experiment:latest \
  run -m "commandcode/MiniMaxAI/MiniMax-M3" \
  "$TASK_PROMPT"
```

---

## 3. 실험군

Exp 01과 동일한 5개 그룹 (Exp 01의 Group F는 제외):

```
Group A ── baseline ── 스킬 없음, AGENTS.md 없음
Group B ── taste ── .agents/skills/taste-skill/SKILL.md 적용
Group C ── uiux ── .agents/skills/ui-ux-pro-max/SKILL.md 적용
Group D ── DESIGN.md ── DESIGN.md만 제공
Group E ── taste + DESIGN.md ── taste 스킬 + DESIGN.md 동시 적용
```

> 그룹 구성 및 스킬 상세는 [Exp 01 plan.md](../01-skill-comparison/plan.md) 참조.
> `groups/` 와 `tasks/` 는 Exp 01과 완전히 동일하므로 심볼릭 링크로 참조한다.

### 심볼릭 링크 구조

```
experiments/02-model-comparison/
├── groups/
│   ├── baseline -> ../../01-skill-comparison/groups/baseline
│   ├── taste -> ../../01-skill-comparison/groups/taste
│   ├── uiux -> ../../01-skill-comparison/groups/uiux
│   ├── design-doc -> ../../01-skill-comparison/groups/design-doc
│   └── combined -> ../../01-skill-comparison/groups/combined
└── tasks/
    ├── task1.md -> ../../01-skill-comparison/tasks/task1.md
    └── task2.md -> ../../01-skill-comparison/tasks/task2.md
```

---

## 4. Tasks (R2 프롬프트)

### Task 1: CRM 대시보드

```
[Role & Goal]
너는 프론트엔드 UI/UX 전문 에이전트야. B2B SaaS의 정석이라 할 수 있는 '실용적이고 심플한 CRM 시스템'의 무드 보드 및 대시보드 메인 레이아웃을 생성해줘. 정보 밀도가 높으면서도 시각적인 피로감이 없는 디자인이어야 해.

[Design System & Mood Board]
- Colors: Intercom이나 Linear 스타일의 차분하고 신뢰감을 주는 톤
  * Main: Deep Navy (#0F172A) 또는 Slate Gray (#1E293B)
  * Accent: Royal Blue (#2563EB) 또는 가독성 높은 Teal
  * Background: Slate 50 (#F8FAFC) 기반의 아주 밝은 그레이 또는 완전한 화이트
- Typography: Sans-serif 계열 (Inter, SF Pro) 중심.
- Corner Radius: 6px ~ 8px 사이의 좁은 라운딩.

[Layout Structure]
1. Sidebar: 좌측 고정 내비게이션
2. Top Bar: 검색창, 알림 아이콘, 프로필 아바타
3. Main Content Grid:
   - Row 1: 주요 지표 4개 미니 통계 카드
   - Row 2 (Left 2/3): 영업 파이프라인 진행 현황 차트
   - Row 2 (Right 1/3): 최근 액티비티 타임라인 / 오늘의 할 일
   - Row 3: 최근 업데이트된 고객 리스트 테이블

[Technical Requirement]
- React + Vite + Tailwind CSS, TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
```

### Task 2: AI 제품 랜딩 페이지 (Dark/Cyberpunk)

```
[Role & Goal]
너는 인터랙티브 웹 디자인에 특화된 프론트엔드 에이전트야. 혁신적인 'AI 제품'을 글로벌 시장에 홍보하기 위한, 창의적이고 독창적인 랜딩 페이지를 생성해줘.

[Design System & Mood Board]
- Colors: 다크 모드 기반의 미래지향적 사이버펑크/미니멀 테마
  * Background: Pure Black (#000000) 또는 Deep Charcoal (#0B0B0F)
  * Accent/Glow: Neon Purple (#8B5CF6), Electric Blue (#3B82F6), Emerald Green (#10B981)
- Typography: 제목용 Display 폰트, 본문은 가독성 좋은 얇은 샌세리프
- Visual Effects: Glassmorphism, 네온 그라데이션 보더, 마우스 포인터 트래킹 배경 그라데이션

[Layout Structure]
1. Navigation Bar: Glassmorphism 플로팅 탑 바
2. Hero Section: Neon Gradient 타이포그래피 + 인터랙티브 캔버스 + CTA
3. Feature Showcase: Bento Grid 레이아웃

[Technical Requirement]
- Tailwind CSS 가상 요소(before, after) 및 CSS Filter(blur) 적극 활용
- Scroll Reveal 애니메이션 (Fade-in / Slide-up)
- React + Vite + Tailwind CSS, TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
```

---

## 5. 실행

→ 실행 환경: [_common/execution-environment.md](../_common/execution-environment.md)
→ 스크린샷: [_common/screenshot-protocol.md](../_common/screenshot-protocol.md)

### 실행 매트릭스

| Group | Task 1 (run1) | Task 1 (run2) | Task 2 (run1) | Task 2 (run2) |
|-------|:---:|:---:|:---:|:---:|
| A (baseline) | ✅ | ✅ | ✅ | ✅ |
| B (taste) | ✅ | ✅ | ✅ | ✅ |
| C (uiux) | ✅ | ✅ | ✅ | ✅ |
| D (design-doc) | ✅ | ✅ | ✅ | ✅ |
| E (combined) | ✅ | ✅ | ✅ | ✅ |

총 **20회 생성**

### run.sh

Exp 01과 동일한 `run.sh`에서 `MODEL` 변수만 변경:

```bash
# Exp 01
MODEL="commandcode/deepseek/deepseek-v4-pro"

# Exp 02
MODEL="commandcode/MiniMaxAI/MiniMax-M3"
```

---

## 6. 가설 (Hypotheses)

| # | 가설 | 검증 방법 |
|---|---|---|
| H1 | Minimax M3의 전반적 UI/UX 점수는 DeepSeek V4 Pro보다 낮을 것이다 | 두 모델의 Overall 점수 평균 비교 |
| H2 | 스킬 효과의 방향성은 모델과 무관하게 일관될 것이다 (UI-UX Pro Max가 두 모델 모두에서 1위) | 각 모델 내 그룹 순위 비교 |
| H3 | 복잡한 Task(T2)에서 모델 간 격차가 더 크게 벌어질 것이다 | T1 vs T2 점수 차이 비교 |
| H4 | 코드 생성 실패율이 DeepSeek 대비 높을 것이다 (20% 이상) | 실패율 비교 |
| H5 | MiniMax M3는 스킬이 주입된 그룹에서 상대적 이득이 더 클 것이다 (baseline 대비 향상폭) | 각 모델의 (스킬 그룹 - baseline) 차이 비교 |

---

## 7. 평가

→ [evaluation-framework.md](../_common/evaluation-framework.md) 참조.

---

## 8. 비교 분석 계획

Exp 02 완료 후 수행할 비교 분석:

### 8.1 Cross-Model Comparison

| 분석 항목 | 데이터 소스 |
|---|---|
| 전체 점수 분포 | 두 실험의 `blind_scores.csv` |
| 그룹별 순위 비교 | Overall 평균 |
| Task별 모델 격차 | T1/T2 분리 분석 |
| 코드 양 비교 | TSX Files / Lines 평균 |
| 실패율 비교 | 빌드 실패 + 코드 생성 실패 |
| 접근성 점수 | 두 모델 모두 0에 가까울 것으로 예상 |

### 8.2 Skill-Model Interaction 분석

| 분석 | 설명 |
|---|---|
| Skill amplification | 모델별로 특정 스킬이 얼마나 점수를 올리는가 (스킬그룹 - baseline) |
| Skill ceiling | 모델별 최고 달성 가능 점수 (가장 높은 그룹) |
| Skill floor | 모델별 최저 점수 (baseline) |

---

## 9. 사전 검증 (실험 전 확인)

- [x] `opencode.json`에 `MiniMaxAI/MiniMax-M3` 모델 추가
- [x] `commandcode/MiniMaxAI/MiniMax-M3` 모델 정상 동작 확인 (Docker 내 `opencode run -m` 테스트)
- [ ] `run.sh` MODEL 변수 변경 확인
- [ ] `groups/`, `tasks/` 심볼릭 링크 정상 확인
- [ ] Docker 이미지 (`opencode-experiment:latest`) 정상 동작 확인
