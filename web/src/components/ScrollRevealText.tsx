import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function AnimatedChar({
  ch,
  index,
  total,
  progress,
}: {
  ch: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const charProgress = index / total;
  const opacity = useTransform(progress, [charProgress - 0.1, charProgress + 0.05], [0.2, 1]);
  return (
    <motion.span style={{ opacity }} aria-hidden="true">
      {ch}
    </motion.span>
  );
}

export function ScrollRevealText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.2"] });
  const chars = Array.from(text);
  return (
    <p ref={ref} className={className}>
      <span className="sr-only">{text}</span>
      {chars.map((ch, i) => (
        <AnimatedChar key={i} ch={ch} index={i} total={chars.length} progress={scrollYProgress} />
      ))}
    </p>
  );
}
