#!/usr/bin/env bash
# 이미지 생성 헬퍼. Claude와 Codex 둘 다 이 스크립트로 호출한다.
# 사용법: OPENAI_API_KEY=... bash scripts/gen_image.sh "<프롬프트>" <출력파일.png> [size]
# size 기본값 1024x1024. 결과는 PNG 파일로 저장됨(base64 디코딩까지 이 스크립트가 처리).
set -euo pipefail

PROMPT="${1:?프롬프트 필요}"
OUT="${2:?출력 파일 경로 필요 (예: assets/hero.png)}"
SIZE="${3:-1024x1024}"

if [ -z "${OPENAI_API_KEY:-}" ]; then
  echo "OPENAI_API_KEY 환경변수가 없습니다." >&2
  exit 1
fi

RESPONSE=$(curl -s https://api.openai.com/v1/images/generations \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d "$(python3 -c '
import json, sys
print(json.dumps({"model":"gpt-image-1","prompt":sys.argv[1],"size":sys.argv[2],"quality":"high"}))
' "$PROMPT" "$SIZE")")

B64=$(echo "$RESPONSE" | python3 -c '
import json, sys
d = json.load(sys.stdin)
if "data" not in d:
    print("ERROR: " + json.dumps(d), file=sys.stderr)
    sys.exit(1)
print(d["data"][0]["b64_json"])
')

echo "$B64" | python3 -c '
import sys, base64
data = sys.stdin.read().strip()
sys.stdout.buffer.write(base64.b64decode(data))
' > "$OUT"

echo "저장됨: $OUT ($(wc -c < "$OUT") bytes)"
