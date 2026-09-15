export const activities = [
  {
    num: "01",
    eyebrow: "FOCUS & DRIVE",
    title: "몰입하면 끝까지 팝니다",
    outcome: "서버 1위 규모 · 그랜드마스터 591 LP · 상위 0.55%",
    situation:
      "모바일 마인크래프트 서버 운영과 리그 오브 레전드 솔로랭크, 서로 다른 두 영역에서 같은 성향이 드러났습니다.",
    action:
      "서버는 PocketMine-MP 기반 플러그인을 직접 개발하며 운영했고, 게임은 시즌13 솔로랭크에서 그랜드마스터 I(591 LP)까지 밀어붙였습니다.",
    result:
      "서버는 한국 모바일 마인크래프트 서버 중 1위 규모를, 게임은 솔로랭크 래더 상위 0.55% 기록을 남겼습니다.",
    proofType: "public" as const,
    proofLabel: "공개 코드·기록",
    proofNote:
      "네이버에 \"밀비서버\"로 검색하면 2017~2018년 제3자 블로그 홍보 글을 다수 확인할 수 있습니다. 각 링크는 개별 성과를 독립적으로 입증하는 자료는 아닙니다.",
    links: [
      { label: "PocketMine-MP", href: "https://github.com/alska14/PocketMine-MP" },
      { label: "EventOnline", href: "https://github.com/alska14/EventOnline" },
      {
        label: "OP.GG 전적",
        href: "https://op.gg/summoners/kr/%EC%9D%B4%20%EB%A7%90%EC%B0%A8%EA%B0%80%20%EC%8B%9D%EA%B8%B0%EC%A0%84%EC%97%90-MACHA",
      },
      {
        label: "FOW.LOL 전적",
        href: "https://www.fow.lol/find/kr/%EC%9D%B4%20%EB%A7%90%EC%B0%A8%EA%B0%80%20%EC%8B%9D%EA%B8%B0%EC%A0%84%EC%97%90-macha",
      },
    ],
  },
  {
    num: "02",
    eyebrow: "AI-ASSISTED DEVELOPMENT",
    title: "AI와 개발하고, 데이터로 판단합니다",
    outcome: "버전 문서 12개 · v0.1–v0.12",
    situation:
      "PPWR(EU 포장재규제) 대응 브랜드사 제출 서류가 실제로 다 모였는지 자동 판정하는 엔진을 만들며, 서로 다른 작업 세션에서 개발한 두 로직의 판정 차이를 확인했습니다.",
    action:
      "표준 라이브러리만으로 파일 재귀 해제·인코딩 복구·분류 로직을 구현·검증한 뒤, 며칠 후 추가한 SKU 식별자 매칭 결과와 실제 제출자료로 대조해 통합했습니다. 이후 사람이 확정한 정정만 규칙으로 재사용하는 피드백 루프도 얹었습니다.",
    result:
      "통합 과정은 git 커밋 이력에 남겼습니다. 완료(서류 유무 판단)·미완료(서류 내용 대조) 범위를 v0.1~v0.12 문서로 구분하며 개발하고 있고, 실데이터 검증 중 발견한 버그 여러 건도 함께 고쳤습니다.",
    proofType: "public" as const,
    proofLabel: "공개 기록",
    proofNote: "이 페이지의 제작·검증 과정을 확인할 수 있습니다. 업무 판정 로직과 버전 문서 원문은 비공개입니다.",
    links: [
      {
        label: "AI 협업·수정 기록",
        href: "https://github.com/alska14/ai-pair-log/blob/main/CONVERSATION.md",
      },
    ],
  },
  {
    num: "03",
    eyebrow: "REGULATORY CONSULTING",
    title: "꾸준함은 제 방식입니다",
    outcome: "세미나 18회 이상 개근 · 1.5년",
    situation:
      "부산외국어고등학교, 숭실대학교를 거쳐 화장품 인허가(RA) 회사에 입사했고, 캐나다 인증·유럽 규제 변화가 한 곳에 정리돼 있지 않다는 문제를 발견했습니다.",
    action:
      "화장품협회 등을 직접 찾아다니며 배우고, 약 1년 반 동안 한 달도 거르지 않고 자료를 직접 준비해 세미나를 발표했습니다. 이후 유럽 규제 원문 사이트를 직접 분석해 규제 컨설팅 서비스를 설계했습니다.",
    result:
      "이 경험이 지금의 규제 대응 자동화 개발(활동 02)로 이어졌고, 실제로 CPNP/SCPN/MOCRA/PPWR 가견적 자동발행 프로그램, PPWR BOM 매핑 AI 엔진, 화장품 성분 필터링, 브랜드사 제출 포털, 서류취합 자동화 엔진까지 이어지는 도구 생태계를 설계해 운영하고 있습니다. 사이버보안과 바이브 코딩에 관심이 생겨 SK텔레콤 ALEPH 교육과정을 꾸준히 수강 중입니다(이 페이지도 그 과제물입니다).",
    proofType: "mixed" as const,
    proofLabel: "일부 공개 · 일부 비공개",
    proofNote: "회사명·고객사명·내부 자료는 비공개입니다. 공개 가능한 도구 하나만 링크로 남깁니다.",
    links: [{ label: "CPSR 라벨 생성 도구", href: "https://github.com/alska14/cpnplabel" }],
  },
  {
    num: "04",
    eyebrow: "LANGUAGE & LITERATURE",
    title: "언어에 대한 관심은 마인크래프트에서 시작됐습니다",
    outcome: "숭실대 독어독문학과 2학년 수료 · 휴학 중",
    situation:
      "부산외국어고등학교를 졸업하고 숭실대학교 독어독문학과에 진학했습니다. 마인크래프트 서버(활동 01)를 운영하며 생긴 언어에 대한 관심이 대학에서도 이어졌습니다.",
    action: "독어독문학과에서 2학년까지 이수하며 재학 중 종로의 어학원에서 관련 수업도 별도로 수강했습니다.",
    result: "현재는 휴학 중이며(졸업 아님), 독일어를 포함한 언어적 배경을 갖추게 됐습니다.",
    proofType: "self" as const,
    proofLabel: "본인 제공 정보",
    proofNote: "학력·전공·재학 상태는 본인이 제공한 정보입니다. 공개 증빙 자료는 없습니다.",
    links: [],
  },
];

export const facts = [
  { k: "관심사", v: "반복적인 서류·견적 처리의 자동화" },
  { k: "개발 방식", v: "AI를 활용하고 실제 데이터로 결과를 대조 검증" },
  { k: "기술의 방향", v: "Node.js·Python 기반 백엔드와 클라우드 운영" },
  { k: "지금 배우는 것", v: "사이버보안 · 바이브 코딩 — SK텔레콤 ALEPH 교육과정 수강 중" },
];

export const boundaries = [
  { k: "개인정보", v: "개인 연락처와 상세 위치 등 사적인 식별 정보" },
  { k: "업무 기밀", v: "고객사명과 내부 업무 프로세스" },
  { k: "접근·자료", v: "비밀번호, API 키, 비공개 코드와 원문 문서" },
];
