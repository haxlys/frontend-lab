# Evaluation Framework (공통)

> 모든 실험에서 동일한 종속 변수와 평가 방법을 사용한다.

---

## 1. 종속 변수 (Dependent Variables)

| 항목 | 측정 방식 | 비중 |
|---|---|---|
| 시각적 완성도 | 스크린샷 기반 1-5 점수 (레이아웃, 여백, 색상) | 30% |
| 반응형 | 모바일/태블릿/데스크톱 적응 여부 | 20% |
| 접근성 | 대비비, aria 속성, 키보드 내비게이션 | 15% |
| 코드 품질 | 컴포넌트 분리, DRY, 타입 안전성 | 15% |
| 디자인 일관성 | DESIGN.md 토큰 일치도 | 10% |
| 생성 시간 | 최초 결과물까지 소요 시간 | 10% |

## 2. 정성 평가 (Blind Test)

평가자는 그룹/실행번호를 모른 채 스크린샷만 보고 평가:

| 평가 항목 | 1~5 점수 |
|---|---|
| 전체적인 시각적 매력도 (visual_appeal) | |
| 레이아웃 구조의 명확성 (layout_clarity) | |
| 색상/대비 조화 (color_contrast) | |
| 여백과 계층 구조 (spacing_hierarchy) | |
| 반응형 적응 품질 (responsive_quality) | |
| 폰트/타이포그래피 (typography) | |
| 전반적 전문성 (overall_professionalism) | |

## 3. 정량 평가

- **Lighthouse** Performance / Accessibility / Best Practices 점수
- **react-doctor** (`npx react-doctor`) 진단 결과
- **생성 시간** (초)
- **파일/컴포넌트 개수**
- **코드 라인 수**
- **빌드 성공률**

## 4. 평가 산출물

```
evaluation/
├── blind_scores.csv       # 정성 평가 점수
├── metrics.csv            # 정량 지표
└── summary-report.md      # 종합 리포트
```
