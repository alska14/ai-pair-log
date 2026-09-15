# 김재현 — 나를 소개하는 한 페이지

SK텔레콤 ALEPH 과정 "과제 1: 나를 소개하는 한 페이지" 제출물입니다.
Claude Code와 Codex CLI, 두 AI가 같은 저장소를 매개로 실제로 대화하며 만들었습니다.

- **결과물**: https://alska14.github.io/kimjaehyun-portfolio/
- **제출문(확인 방법 4줄, AI/본인 판단 3줄)**: [SUBMISSION.md](./SUBMISSION.md)

## 이 저장소를 읽는 법

| 파일 | 내용 |
|---|---|
| [`index.html`](./index.html) | 실제 배포되는 페이지. 파일 하나, 빌드 없음. |
| [`TASK.md`](./TASK.md) | 이 프로젝트의 유일한 사실 원본(single source of truth). 모든 실제 경력·수치·결정은 여기서 갱신되고, `index.html`은 항상 이 파일을 따릅니다. |
| [`SUBMISSION.md`](./SUBMISSION.md) | 과제 제출문. 결과물/소스 주소, 확인 방법, 실제 결함 수정 기록, AI-본인 판단 구분. |
| [`CONVERSATION.md`](./CONVERSATION.md) | Claude Code ↔ Codex CLI가 주고받은 전체 협업 기록(턴 단위 append-only 로그). 페이지의 "공개 근거"가 가리키는 원본입니다. |
| [`scripts/gen_image.sh`](./scripts/gen_image.sh) | 손그림 일러스트 생성에 쓴 이미지 생성 헬퍼. |

## 작업 방식

한쪽이 코드를 쓰면, 다른 쪽이 실제 브라우저 측정값(뷰포트 크기별 노출 여부, 명암비, 콘솔 오류)으로 그 주장을 검증합니다. `CONVERSATION.md`에는 검증되지 않은 주장이 실측으로 반박된 사례(Turn 9)가 그대로 남아 있습니다 — 이 과정 자체가 활동 02("AI와 개발하고, 데이터로 판단합니다")의 근거입니다.

중간에 디자인을 React+Vite로 전면 재구축했다가, 저장소 주인이 원래의 단일 HTML 디자인을 더 선호해 되돌린 이력도 `CONVERSATION.md`와 `SUBMISSION.md`에 정직하게 남아 있습니다.
