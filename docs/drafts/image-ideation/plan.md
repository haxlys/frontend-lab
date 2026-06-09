# Image Ideation — 이미지 참조가 UI/UX 코드 생성에 미치는 영향

> 코딩 에이전트에 레퍼런스 이미지를 첨부하고 "이 이미지의 느낌대로 구현해줘"라고 지시했을 때,
> 이미지의 시각적 특성이 생성된 웹디자인 코드에 어떻게 반영되는지 측정한다.

---

## 1. 실험 설계 개요

### 핵심 질문

이미지를 보고 "이 느낌으로 만들어줘"라고 할 때, 에이전트는 이미지의 어떤 요소를 인식/추출하여
코드로 변환하는가? 그리고 그 변환은 얼마나 충실한가?

### 상수 (Constants)

| 변수 | 값 |
|---|---|
| **Agent** | OpenCode |
| **Model** | `commandcode/deepseek/deepseek-v4-pro` |
| **Framework** | React + Vite + Tailwind CSS |
| **실행 환경** | Docker Container (`opencode-experiment:latest`) — 호스트와 완전 격리 |
| **스킬 포맷** | `.agents/skills/<name>/SKILL.md` |
| **Task** | 동일한 기능 요구사항 (동일한 컴포넌트 구성) — 이미지 유무만 다름 |

### 독립 변수 (Independent Variables)

1. **레퍼런스 이미지 유무 및 종류**
2. **스킬 조합** (baseline / taste / ui-ux-pro-max)

### 종속 변수 (Dependent Variables)

| 항목 | 측정 방식 | 비중 |
|---|---|---|
| Color Palette 충실도 | Source 이미지 팔레트 vs 생성물 팔레트 ΔE 거리 측정 | 20% |
| Layout 구조 유사도 | 이미지의 섹션 배치/비율과 생성물의 구조 비교 | 20% |
| Typography 근접도 | 폰트 패밀리, 굵기, 크기 계층 구조 매칭 | 15% |
| Visual Effect 전이도 | 그림자/블러/그라데이션/보더 등 효과의 반영률 | 15% |
| 전반적 "느낌" 유사도 | Blind 평가 (스크린샷 비교) | 20% |
| 코드 품질 | 컴포넌트 분리, DRY, 타입 안전성 | 10% |

### 이미지-코드 변환 분석 축 (정성 분석)

| 축 | 질문 | 측정 |
|---|---|---|
| **Color Extraction** | 이미지의 주요 색상을 정확히 추출하는가? | Tailwind config의 color token vs source palette ΔE |
| **Color Judgment** | 추출한 색상을 어떻게 배분하는가? (bg/surface/accent/text) | Semantic color role 정확도 |
| **Layout Recognition** | 이미지의 그리드/카드/정렬 구조를 인식하는가? | 섹션 수, 배치 방향, 비율 일치도 |
| **Typography Matching** | 폰트 계열/굵기/크기 위계를 매칭하는가? | font-family, font-size ramp 정확도 |
| **Effect Replication** | 그림자/블러/그라데이션/보더 등 시각효과를 구현하는가? | CSS effect coverage |
| **Semantic Interpretation** | 이미지의 "무드"를 언어적 설명 없이도 코드로 표현하는가? | Blind subjective score |
| **Over-translation** | 이미지에 없는 요소를 과도하게 추가하는가? | Hallucination rate |
| **Under-translation** | 이미지의 중요한 디테일을 놓치는가? | Omission rate |

---

## 2. 실험군 구성

```
Group A ── baseline-ctrl ── 이미지 없음, text-only prompt (control)
Group B ── image-only ── 이미지만 제공, 스킬 없음
Group C ── image+taste ── 이미지 + taste-skill
Group D ── image+uiux ── 이미지 + ui-ux-pro-max-skill
Group E ── image+taste+design ── 이미지 + taste-skill + DESIGN.md
```

### Group A (baseline-ctrl)
**적용**: 이미지 없음. 동일한 기능 명세를 text-only로 전달.
**목적**: 이미지가 없는 상태에서의 기본 생성 결과 측정. 이미지가 추가되었을 때의 "차이"를 측정하기 위한 통제군.
**기대**: 일반적인 Tailwind 기본 스타일. 색상/레이아웃/타이포가 모델의 기본 취향에 의존.

### Group B (image-only)
**적용**: 레퍼런스 이미지 첨부 + "이 이미지의 느낌대로 구현해줘" 프롬프트. 스킬 없음.
**기대**: 컬러 팔레트, 대략적인 레이아웃 구조가 이미지에서 추출되어 반영됨. 단, 디테일한 효과(그림자, 블러 등)는 누락될 가능성. 에이전트의 "raw image interpretation" 능력을 측정.

### Group C (image+taste)
**적용**: 이미지 + `.agents/skills/taste-skill/SKILL.md`
**기대**: taste-skill의 디자인 다이얼(DESIGN_VARIANCE 등)이 이미지 해석을 증폭/왜곡할 수 있음. 이미지의 "느낌"을 더 감각적으로 해석할 가능성. 단, 스킬의 bias가 이미지와 충돌할 위험.

### Group D (image+uiux)
**적용**: 이미지 + `.agents/skills/ui-ux-pro-max-skill/SKILL.md`
**기대**: ui-ux-pro-max의 구조화된 규칙(10 Priority Categories)이 이미지 해석에 체계를 더함. Accessibility 규칙이 우선 적용되면서 이미지 느낌이 일부 희생될 가능성.

### Group E (image+taste+design)
**적용**: 이미지 + taste-skill + 이미지에서 추출한 DESIGN.md
**기대**: 이미지 + 스킬 + 명시적 디자인 토큰의 3중 조합. DESIGN.md가 이미지의 모호한 부분을 구체화하여 가장 충실한 결과 예상.

---

## 3. 레퍼런스 이미지 선정

3종의 이미지를 선정하여 각기 다른 스타일의 "느낌"을 테스트한다.

### Image A: Modern SaaS Dashboard (밝은 테마)

- **소스**: Dribbble/Behance의 SaaS 대시보드 스크린샷
- **특징**: Light background, card-based layout, blue accent, subtle shadows, Inter/SF Pro typography, statistics + chart + table 구조
- **Task**: 대시보드 개요 페이지 (Exp 01 Task 1과 동일한 기능 요구사항)
- **매칭 Task**: 통계 카드 + 차트 + 테이블

### Image B: Dark Mode Cyberpunk Landing (다크 테마)

- **소스**: Dribbble/Behance의 다크모드 랜딩 페이지
- **특징**: Black background, neon gradients, glassmorphism, geometric fonts, glow effects, bento grid layout
- **Task**: AI 제품 소개 원페이지 (Exp 01 Task 2와 유사)
- **매칭 Task**: Hero + Features + CTA

### Image C: Minimalist Portfolio/Brand Page (뉴트럴 테마)

- **소스**: 미니멀 브랜드 페이지 / 포트폴리오
- **특징**: White/cream background, generous whitespace, serif + sans-serif pairing, organic shapes, subtle animations, editorial layout
- **Task**: 브랜드 소개 페이지
- **매칭 Task**: Hero + About + Work Showcase + Contact

---

## 4. Task (실험 태스크)

각 이미지 타입에 맞는 프롬프트. Group A(control)에는 이미지 없이 동일한 기능 명세만 전달.

### Task 1: SaaS 대시보드 (Image A 매칭)

```
React + Vite + Tailwind CSS로 SaaS 대시보드 개요 페이지를 만들어줘.

첨부된 레퍼런스 이미지의 디자인 느낌을 그대로 살려서 구현해줘.
색상, 여백, 카드 스타일, 타이포그래피, 전체적인 분위기를 이미지와
최대한 유사하게 맞춰줘.

필요한 섹션:
1. 상단 통계 카드 4개 (Revenue, Users, Orders, Growth)
2. 월별 차트 영역 (막대 그래프, CSS만으로 표현)
3. 최근 활동 목록 (시간, 사용자, 액션, 상태)

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
```

### Task 2: AI 제품 랜딩 페이지 (Image B 매칭)

```
React + Vite + Tailwind CSS로 AI 제품 소개 랜딩 페이지를 만들어줘.

첨부된 레퍼런스 이미지의 디자인 느낌을 그대로 살려서 구현해줘.
색상, 그라데이션, 글래스모피즘, 타이포그래피, 배경 효과 등
이미지의 시각적 특성을 최대한 코드로 재현해줘.

필요한 섹션:
1. Hero 섹션 (제품명, 태그라인, CTA 버튼)
2. 주요 기능 3가지 (카드 형태, 아이콘 + 설명)
3. 동작 방식 3단계 (Design → Build → Deploy)

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
```

### Task 3: 브랜드 소개 페이지 (Image C 매칭)

```
React + Vite + Tailwind CSS로 브랜드/스튜디오 소개 페이지를 만들어줘.

첨부된 레퍼런스 이미지의 미니멀한 디자인 느낌을 그대로 살려줘.
여백, 타이포그래피 조합, 레이아웃 리듬, 컬러 톤을 이미지와
최대한 유사하게 구현해줘.

필요한 섹션:
1. Hero 섹션 (브랜드명, 한 줄 소개, CTA)
2. About 섹션 (브랜드 철학/스토리)
3. Work/Project 쇼케이스 (3-4개 카드)
4. Contact 섹션 (이메일, 소셜 링크)

조건:
- TypeScript 사용
- 적절한 컴포넌트 분리
- 반응형 (모바일/태블릿/데스크톱)
- Tailwind CSS만 사용
```

### Group A 전용 (Text-only Control)

Group A에는 이미지 없이 동일한 기능 요구사항만 전달. Task 파일에서 "첨부된 레퍼런스 이미지의..." 문장을 제거하고 "깔끔하고 전문적인 디자인으로" 정도의 일반적인 지시만 남김.

---

## 5. 실행 매트릭스

| Group | Image A (Dash) | Image B (Landing) | Image C (Brand) |
|-------|:---:|:---:|:---:|
| A (baseline-ctrl) | ✅ × 2 | ✅ × 2 | ✅ × 2 |
| B (image-only) | ✅ × 2 | ✅ × 2 | ✅ × 2 |
| C (image+taste) | ✅ × 2 | ✅ × 2 | ✅ × 2 |
| D (image+uiux) | ✅ × 2 | ✅ × 2 | ✅ × 2 |
| E (image+taste+design) | ✅ × 2 | ✅ × 2 | ✅ × 2 |

총 **5그룹 × 3태스크 × 2회 = 30회 생성**

---

## 6. 실행 프로토콜

### Step 0: 사전 준비

```bash
# 실험 디렉토리 구조
experiments/image-ideation/
├── groups/
│   ├── baseline-ctrl/        # 빈 디렉토리
│   ├── image-only/           # 빈 디렉토리 (이미지만 첨부)
│   ├── image+taste/          # .agents/skills/taste-skill/SKILL.md
│   ├── image+uiux/           # .agents/skills/ui-ux-pro-max-skill/SKILL.md
│   └── image+taste+design/   # taste SKILL.md + DESIGN.md
├── images/
│   ├── image-a-dashboard.png
│   ├── image-b-landing.png
│   └── image-c-brand.png
├── tasks/
│   ├── task1-dashboard.md    # Image A 전용 (이미지 참조 포함)
│   ├── task1-ctrl.md         # Group A 전용 (text-only)
│   ├── task2-landing.md
│   ├── task2-ctrl.md
│   ├── task3-brand.md
│   └── task3-ctrl.md
└── output/
```

### Step 1: Task Prompt에 Image Embedding 방식

OpenCode는 이미지 첨부 시 Vision API를 통해 이미지를 읽을 수 있다.
Task prompt에서 이미지 파일 경로를 참조하거나, UI 상에서 이미지와 함께 프롬프트를 전송한다.

```bash
# Docker 실행 시 이미지 포함 방식
docker run --rm \
  -v "$run_dir:/project" \
  -v "$SCRIPT_DIR/images:/project/images:ro" \
  -v "$SCRIPT_DIR/opencode.json:/root/.config/opencode/opencode.json:ro" \
  -w /project \
  "$DOCKER_IMAGE" \
  run -m "$MODEL" \
  "$TASK_PROMPT  [image:/project/images/image-a-dashboard.png]"
```

> 실제 이미지 전달 방식은 OpenCode의 이미지 attachment 메커니즘에 따라 조정 필요.
> 대안: task prompt 내에 base64 data URL 포함.

### Step 2: Group A Control 처리

baseline-ctrl 그룹은 이미지 없이 text-only 프롬프트 사용. 동일한 기능 요구사항을 담은
별도의 `*-ctrl.md` 태스크 파일을 사용한다.

### Step 3: 스크린샷 캡처

30회 생성 × 3 viewports (desktop/tablet/mobile) = **90장 스크린샷**

---

## 7. 평가 프로세스

### 7.1 정량 평가: Color Palette 충실도

```
Source Image → Extract dominant 6-8 colors via color-thief
Generated Page → Screenshot → Extract dominant 6-8 colors
→ Pair colors by nearest ΔE match
→ Report mean ΔE, max ΔE, palette coverage %
```

| 메트릭 | 설명 |
|---|---|
| Mean ΔE | 소스-생성물 간 평균 색상 거리 (낮을수록 충실) |
| Palette Coverage | 소스 팔레트 중 생성물에 반영된 비율 |
| Accent Match | Accent color의 역할 일치 여부 (bg/surface/accent/text) |

### 7.2 정량 평가: Layout 구조 유사도

```
Source Image → Annotate section layout (grid type, column count, card/table/list)
Generated Screenshot → Annotate same dimensions
→ Compare structural similarity
```

| 메트릭 | 설명 |
|---|---|
| Section Count Match | 섹션 개수 일치 여부 |
| Grid Match | 그리드 구조 일치도 (2-col, 3-col, asymmetric 등) |
| Component Type Match | 카드/테이블/리스트 등 컴포넌트 타입 일치도 |

### 7.3 정성 평가: Blind Comparison

평가자는 원본 이미지 + 생성물 스크린샷을 나란히 보고 평가:

| 평가 항목 | 1~5 점수 |
|---|---|
| 전체적인 느낌 유사도 | |
| 색상 분위기 일치도 | |
| 레이아웃 구조 유사도 | |
| 타이포그래피 스타일 유사도 | |
| 디테일(그림자/보더/효과) 충실도 | |
| 전반적 완성도 | |

### 7.4 정성 평가: 이미지-코드 변환 분석

각 생성물에 대해 다음 항목을 이진/3점 척도로 평가:

| 분석 항목 | 척도 |
|---|---|
| Color palette explicitly declared in code? | Binary (tailwind.config / CSS vars) |
| Font family explicitly imported? | Binary (Google Fonts / @font-face) |
| Spacing tokens match image rhythm? | 3pt (No / Partial / Yes) |
| Shadow/glow effects implemented? | Binary |
| Border radius matches image? | 3pt (No / Partial / Yes) |
| Image layout elements hallucinated? | 3pt (None / Minor / Major) |
| Key image detail omitted? | 3pt (None / Minor / Major) |

---

## 8. 가설 (Hypotheses)

| # | 가설 | 검증 방법 |
|---|---|---|
| H1 | 이미지를 제공한 그룹(B~E)이 text-only control(A)보다 Color Palette 충실도가 높을 것이다 | Mean ΔE 비교 |
| H2 | image+uiux(D)가 image-only(B)보다 접근성/코드 품질이 높고 시각적 느낌은 일부 희생될 것이다 | UI-UX 규칙 적용률 vs 느낌 유사도 trade-off |
| H3 | image+taste(C)는 이미지의 "느낌"을 가장 감각적으로 재현하지만 color fidelity는 낮을 것이다 | Taste의 창의적 해석으로 인한 ΔE 증가 |
| H4 | image+taste+design(E)이 전반적 느낌 유사도에서 가장 높은 점수를 기록할 것이다 | Blind comparison score |
| H5 | 이미지 타입에 따라 전이율이 다를 것이다 (대시보드 > 랜딩 > 브랜드 순으로 전이율 하락) | Task별 fidelity 점수 비교 |
| H6 | 모든 그룹에서 이미지의 "미묘한 디테일" (미세한 여백, line-height, letter-spacing)은 누락될 것이다 | Detail accuracy sub-score |

---

## 9. 예상 결과

| Group | Color Fidelity | Layout Match | Feel Similarity | Code Quality |
|---|---|---|---|---|
| A (baseline-ctrl) | N/A (no reference) | ★★☆ | N/A | ★★★ |
| B (image-only) | ★★★★ | ★★★ | ★★★☆ | ★★★ |
| C (image+taste) | ★★★ | ★★★☆ | ★★★★ | ★★★ |
| D (image+uiux) | ★★★☆ | ★★★★ | ★★★☆ | ★★★★ |
| E (image+taste+design) | ★★★★★ | ★★★★ | ★★★★☆ | ★★★★ |

---

## 10. 비교 분석 계획

### 10.1 Image vs No-Image Delta

```
Δ = mean(image groups B~E) − Group A score
→ 이미지 첨부의 순수 효과 측정
```

### 10.2 Image Type Difficulty Ranking

```
Dashboard > Landing > Brand 순으로 이미지 변환 난이도가 높아질 것으로 예상
(대시보드는 구조가 명확하고, 랜딩은 효과 의존도가 높고, 브랜드는 주관적 요소가 많음)
```

### 10.3 Skill × Image Interaction

Exp 01의 결과와 교차 비교:
- Exp 01 (no image): UI-UX Pro Max가 가장 높은 점수
- Exp image-ideation (with image): 이미지가 추가되면 스킬 효과가 어떻게 달라지는가?

---

## 11. 산출물 구조

```
experiments/image-ideation/
├── plan.md                          # 이 문서
├── run.sh                           # Docker 실행 스크립트
├── opencode.json                    # Provider config
├── images/
│   ├── image-a-dashboard.png
│   ├── image-b-landing.png
│   └── image-c-brand.png
├── groups/
│   ├── baseline-ctrl/               # 빈 디렉토리
│   ├── image-only/                  # 빈 디렉토리
│   ├── image+taste/
│   │   └── .agents/skills/taste-skill/SKILL.md
│   ├── image+uiux/
│   │   └── .agents/skills/ui-ux-pro-max-skill/SKILL.md
│   └── image+taste+design/
│       ├── .agents/skills/taste-skill/SKILL.md
│       └── DESIGN.md
├── tasks/
│   ├── task1-dashboard.md
│   ├── task1-ctrl.md
│   ├── task2-landing.md
│   ├── task2-ctrl.md
│   ├── task3-brand.md
│   └── task3-ctrl.md
├── output/
│   ├── baseline-ctrl-t1-r1/
│   ├── image-only-t1-r1/
│   └── ...
├── screenshots/                     # 90장 (30 runs × 3 viewports)
└── evaluation/
    ├── color-palette-analysis.csv
    ├── blind_scores.csv
    ├── image-code-mapping.csv       # 변환 분석 축 평가 결과
    ├── metrics.csv
    └── summary-report.md
```

---

## 12. 사전 검증 체크리스트

- [ ] 실험 이미지 3종 선정 완료 (Dribbble/Behance에서 저작권 문제 없는 이미지)
- [ ] Image A (SaaS Dashboard) 선정 완료
- [ ] Image B (Dark Cyberpunk Landing) 선정 완료
- [ ] Image C (Minimalist Brand Page) 선정 완료
- [ ] OpenCode의 이미지 첨부/참조 메커니즘 검증 완료
- [ ] Docker 컨테이너에서 이미지 파일 마운트 및 Vision API 접근 확인
- [ ] color-thief 또는 유사 도구로 palette extraction 자동화 검증
- [ ] 5개 그룹 디렉토리 구조 완료
- [ ] task 프롬프트 (image + control) 6종 작성 완료
- [ ] run.sh 스크립트 작성 완료
- [ ] Docker 이미지 (`opencode-experiment:latest`) 정상 동작 확인
