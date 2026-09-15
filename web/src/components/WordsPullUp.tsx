import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function WordsPullUp({
  text,
  className = "",
  delayStart = 0,
  as: Tag = "span",
}: {
  text: string;
  className?: string;
  delayStart?: number;
  as?: "span" | "p" | "h1" | "h2";
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const words = text.split(" ");
  return (
    <Tag ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((w, i) => (
        <span key={i} className="mr-[0.28em] overflow-hidden last:mr-0">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", opacity: 0 }}
            animate={inView ? { y: "0%", opacity: 1 } : undefined}
            transition={{ duration: 0.6, delay: delayStart + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
