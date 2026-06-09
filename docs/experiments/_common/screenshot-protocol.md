# Screenshot Protocol (공통)

> agent-browser를 사용해 생성된 결과물의 스크린샷을 캡처한다.
> Apple Silicon (darwin-arm64)에서는 `--headed` 플래그 필수.

---

## 1. 단일 실행 스크린샷 캡처

```bash
cd output/<group>-t<task>-r<run>
npx vite --port 5173 --host &
sleep 3

agent-browser open "http://127.0.0.1:5173" --headed
agent-browser set viewport 1440 900
agent-browser screenshot ../../screenshots/<group>-t<task>-r<run>-desktop.png
agent-browser set viewport 768 1024
agent-browser screenshot ../../screenshots/<group>-t<task>-r<run>-tablet.png
agent-browser set viewport 375 667
agent-browser screenshot ../../screenshots/<group>-t<task>-r<run>-mobile.png
agent-browser close --all
kill %1
```

## 2. 뷰포트 정의

| 뷰포트 | 해상도 | 디바이스 |
|---|---|---|
| Desktop | 1440 × 900 | 표준 데스크톱 |
| Tablet | 768 × 1024 | iPad |
| Mobile | 375 × 667 | iPhone SE |

## 3. 자동 캡처

```bash
bash run.sh --screenshots
```

`run.sh` 스크립트가 모든 output 디렉토리를 순회하며 자동으로 스크린샷을 캡처한다.

## 4. 스크린샷 매트릭스

- N runs × 3 viewports = 3N장
- `screenshots/` 디렉토리에 `<group>-t<task>-r<run>-{desktop,tablet,mobile}.png` 형식으로 저장

## 5. 환경별 주의사항

| 환경 | 플래그 | 비고 |
|---|---|---|
| Apple Silicon (darwin-arm64) | `--headed` | Headless Chrome `about:blank` 멈춤 버그 |
| Linux (amd64) | `--args "--no-sandbox"` | Docker 내 실행 시 필요 |
