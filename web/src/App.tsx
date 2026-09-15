import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check, ChevronRight, ArrowUpRight } from "lucide-react";
import { activities, facts, boundaries } from "./content";
import heroIllustration from "./hero_illustration.webp";

const NAME_LETTERS = "김재현".split("");
const NAV = [
  { label: "소개", href: "#intro" },
  { label: "근거", href: "#evidence" },
  { label: "활동", href: "#activity" },
  { label: "공개 범위", href: "#boundary" },
];

function KineticName() {
  const reduce = useReducedMotion();
  return (
    <motion.h1
      className="select-none font-serif italic text-[15vw] leading-[0.85] tracking-tight text-cream sm:text-[11vw] lg:text-[9rem]"
      initial={reduce ? false : { y: 32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {NAME_LETTERS.join("")}
      <span style={{ color: "var(--color-accent)" }}>.</span>
    </motion.h1>
  );
}

function ProofBadge({ type, label }: { type: "public" | "mixed" | "self"; label: string }) {
  const styles = {
    public: "border-accent/60 text-cream bg-accent/10",
    mixed: "border-amber-400/50 text-amber-200 bg-amber-400/10",
    self: "border-cream/30 text-cream/70 bg-cream/5",
  } as const;
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${styles[type]}`}>
      {label}
    </span>
  );
}

function ActivityCard({ item, index }: { item: (typeof activities)[number]; index: number }) {
  return (
    <motion.article
      id={`activity-${item.num}`}
      className="flex flex-col gap-4 rounded-2xl border border-cream/10 bg-panel p-6 sm:p-7"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.14em] text-cream/50">{item.eyebrow}</p>
          <h3 className="mt-1 font-serif text-xl leading-snug sm:text-2xl">{item.title}</h3>
        </div>
        <span className="font-serif text-3xl italic text-cream/30">{item.num}</span>
      </div>
      <p className="text-sm font-semibold text-accent" style={{ color: "var(--color-accent)" }}>
        {item.outcome}
      </p>
      <dl className="flex flex-col gap-3 text-sm text-cream/80">
        <div>
          <dt className="mb-1 text-[11px] font-bold tracking-wide text-cream/45">상황</dt>
          <dd>{item.situation}</dd>
        </div>
        <div>
          <dt className="mb-1 text-[11px] font-bold tracking-wide text-cream/45">행동</dt>
          <dd className="flex gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" style={{ color: "var(--color-accent)" }} />
            <span>{item.action}</span>
          </dd>
        </div>
        <div>
          <dt className="mb-1 text-[11px] font-bold tracking-wide text-cream/45">결과</dt>
          <dd className="flex gap-2">
            <Check size={16} className="mt-0.5 shrink-0 text-accent" style={{ color: "var(--color-accent)" }} />
            <span>{item.result}</span>
          </dd>
        </div>
      </dl>
      <div className="mt-2 border-t border-cream/10 pt-4">
        <ProofBadge type={item.proofType} label={item.proofLabel} />
        {item.links.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
            {item.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-cream underline decoration-cream/30 underline-offset-4 hover:decoration-cream"
              >
                {l.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        )}
        <p className="mt-3 text-xs leading-relaxed text-cream/45">{item.proofNote}</p>
      </div>
    </motion.article>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    document.title = "김재현 — 개발과 언어, 게임에 걸친 경험";
  }, []);

  return (
    <div className="min-h-screen bg-ink text-cream" style={{ background: "var(--color-ink)" }}>
      <a
        href="#content"
        className="sr-only fixed left-4 top-4 z-50 rounded bg-cream px-4 py-2 text-ink focus:not-sr-only"
      >
        본문으로 건너뛰기
      </a>

      {/* HERO */}
      <header className="relative overflow-hidden border-b border-cream/10">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] noise-overlay" aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 pt-6 sm:px-8">
          <a href="#intro" className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-full border border-cream/40 font-serif text-lg italic">
              j.
            </span>
            김재현
          </a>
          <nav aria-label="페이지 탐색" className="hidden gap-6 text-sm sm:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="opacity-80 transition-opacity hover:opacity-100">
                {n.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-4 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-cream/50">개발 · 언어 · 게임에 걸친 경험</p>
          <KineticName />
          <motion.p
            className="mt-3 max-w-xl text-sm text-cream/70 sm:text-base"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            서버를 직접 개발해 한국 모바일 마인크래프트 서버 1위 규모로 운영했고, 지금은 AI와 업무 자동화 시스템을
            만들고 있습니다. 이 페이지는 동료와 협업 상대에게 개발·언어·게임에 걸친 김재현의 경험을 소개합니다.
          </motion.p>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* INTRO + EVIDENCE — 첫 화면에 함께 보이도록 컴팩트하게 배치 */}
        <div className="grid gap-6 py-8 md:grid-cols-[1.1fr_1fr]">
          <section id="intro" aria-labelledby="intro-title" className="flex items-center gap-5">
            <img
              src={heroIllustration}
              alt="노트북 앞에서 작업하는 사람을 그린 손그림 일러스트"
              className="h-28 w-28 shrink-0 rounded-xl border border-cream/10 object-cover sm:h-32 sm:w-32"
            />
            <div>
              <h2 id="intro-title" className="font-serif text-lg italic text-cream/90">
                직접 만들고, 대조하고, 배웁니다.
              </h2>
              <p className="mt-1 text-xs text-cream/50">
                전역 후 매일 30분씩 1년 반 테니스 레슨을 받았고, 지금도 즐겨 칩니다.
              </p>
            </div>
          </section>

          <section
            id="evidence"
            aria-labelledby="evidence-title"
            className="rounded-2xl border border-cream/10 bg-panel p-5"
          >
            <p className="text-[11px] font-semibold tracking-[0.14em] text-cream/50">OPEN RECORD / 공개 근거</p>
            <h2 id="evidence-title" className="mt-1 font-serif text-base italic">
              직접 검증하며 쌓은 협업 기록입니다.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-cream/60">
              &ldquo;근거 카드 제목 일부가 첫 화면 하단에 걸치도록 조정했다&rdquo;고 썼는데{" "}
              <strong className="text-cream">사실이 아님</strong>. #evidence top: 1366×768 → 1009px(0% 노출),
              1920×1080 → 1055px. — Claude Code, Turn 9. 실측으로 Codex의 미검증 주장을 실측으로 반박한 기록.
            </p>
            <details ref={detailsRef} open={open} onToggle={(e) => setOpen((e.target as HTMLDetailsElement).open)}>
              <summary className="mt-3 cursor-pointer text-xs font-semibold text-accent" style={{ color: "var(--color-accent)" }}>
                전체 대화 기록 보기 <ChevronRight size={12} className="inline" />
              </summary>
              <a
                href="https://github.com/alska14/ai-pair-log/blob/main/CONVERSATION.md"
                className="mt-2 block text-xs underline decoration-cream/30 underline-offset-4"
              >
                github.com/alska14/ai-pair-log/CONVERSATION.md ↗
              </a>
            </details>
          </section>
        </div>

        {/* ACTIVITY */}
        <section id="activity" aria-labelledby="activity-title" className="py-10">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-2 border-t border-cream/10 pt-8">
            <h2 id="activity-title" className="font-serif text-3xl italic sm:text-4xl">
              네 가지 단면
            </h2>
            <p className="text-sm text-cream/50">몰입 · 개발 · 꾸준함 · 언어</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {activities.map((a, i) => (
              <ActivityCard key={a.num} item={a} index={i} />
            ))}
          </div>
        </section>

        {/* PROFILE */}
        <section aria-labelledby="profile-title" className="border-t border-cream/10 py-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-cream/50">02 / 공개 프로필</p>
          <h2 id="profile-title" className="mb-6 mt-1 font-serif text-2xl italic">
            현재의 작업과 관심
          </h2>
          <dl className="grid gap-4 sm:grid-cols-2">
            {facts.map((f) => (
              <div key={f.k} className="border-t border-cream/10 pt-3">
                <dt className="text-xs font-semibold text-cream/50">{f.k}</dt>
                <dd className="mt-1 text-sm text-cream/85">{f.v}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* BOUNDARY */}
        <section id="boundary" aria-labelledby="boundary-title" className="border-t border-cream/10 py-10">
          <p className="text-[11px] font-semibold tracking-[0.14em] text-cream/50">03 / 비공개 범위</p>
          <h2 id="boundary-title" className="mb-6 mt-1 font-serif text-2xl italic">
            경험은 공개하고, 기밀은 지킵니다.
          </h2>
          <dl className="grid gap-4 sm:grid-cols-3">
            {boundaries.map((b) => (
              <div key={b.k} className="border-t border-cream/10 pt-3">
                <dt className="text-xs font-semibold text-cream/50">{b.k}</dt>
                <dd className="mt-1 text-sm text-cream/85">{b.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-6 max-w-xl border-l-2 border-accent/60 pl-4 text-xs text-cream/50">
            이름은 실명을 사용합니다. 기술과 경험을 소개하되 고객사명과 내부 업무 프로세스는 공개하지 않습니다.
          </p>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-cream/10 py-8 text-xs text-cream/50">
          <p>© 2026 김재현 — 개발과 언어, 게임에 걸쳐 쌓아온 경험.</p>
          <a href="#intro" className="hover:text-cream">
            처음으로 ↑
          </a>
        </footer>
      </main>
    </div>
  );
}
