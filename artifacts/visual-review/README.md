# 시각 개선 및 실측 — 2026-09-11

`index.html`의 기존 identity-scene, story-icon, 색상 변수에 맞춰 순수 SVG/CSS로 확장했다. 외부 이미지나 이미지 생성 리소스는 추가하지 않았다.

- 서버 1위 표식 + LP 게이지, 버전 기록 12개 도트, 세미나 18개 도트, 학업 두 단계와 휴학 표식.
- 카드마다 작은 별도 라인아트 장식. 기존 story-icon은 유지.
- 카드 제목 23px, outcome 16px로 위계 강화. 본문에는 세로선·20px 간격, 결과에는 진한 글자색 적용.
- 높이 850px 이하 데스크톱에는 소개·근거 영역의 여백을 줄이는 별도 CSS 적용.
- 작업 중 Claude의 동시 수정으로 5개 카드가 4개로 통합됐다. 통합 구조와 수정된 문구를 유지하고 시각화만 맞췄다. 이 작업에서 상황/행동/결과 문구를 작성하거나 수정하지 않았다.

## 측정 조건

Windows Headless Chrome, CSS viewport 1366×768 / 1920×1080, deviceScaleFactor 1, 로컬 HTTP, 스크롤 0. Google Fonts 로딩 및 기존 시작 다이얼로그·애니메이션 종료 후 `getBoundingClientRect()`로 측정했다. 기존 시작 다이얼로그가 잠시 화면을 가리는 동안의 결과는 아니다.

| 측정 항목 | 1366×768 | 1920×1080 |
|---|---:|---:|
| evidence top | 92.00px | 124.00px |
| evidence bottom | 480.16px | 615.30px |
| evidence 노출 | 100% | 100% |
| activity top | 500.16px | 651.30px |
| activity 첫 화면 노출 높이 | 267.84px | 428.70px |
| 첫 카드 제목 top–bottom | 609.34–670.22px | 821.48–888.17px |
| 첫 카드 SVG top–bottom | 713.81–767.81px | 939.77–993.77px |
| 가로 넘침 요소 | 0 | 0 |
| JavaScript 예외 | 0 | 0 |

두 기준 해상도에서 소개, 근거 카드 전체, 활동 제목 및 첫 카드 제목·수치·SVG가 첫 화면에 보인다. 모든 활동 카드 전체가 첫 화면에 들어간다는 의미는 아니다. 390×844에서도 가로 넘침 0건이며 전체 페이지 캡처에서 겹침 없이 단일 열로 표시됨을 확인했다.

실측 파일: [results.json](results.json). 첫 화면: [1366×768](1366x768.png), [1920×1080](1920x1080.png). 전체 페이지: [1366](1366-full.png), [1920](1920-full.png), [390](390-full.png).

재실행: 저장소 루트에서 `node visual-check.cjs` (Node 24, 설치된 Windows Chrome 사용). `.visual-check/`에 결과를 저장한다. GPU 하위 프로세스가 실행되지 않는 현재 환경에서는 로컬 페이지 검증용 브라우저를 in-process GPU / no-sandbox 옵션으로 실행한다.

측정한 index.html SHA-256: `33EBEE43C63E117DB6861416DFB1F9B2566DC7D617EF5A5EF5EEA676563A3A3F`.
