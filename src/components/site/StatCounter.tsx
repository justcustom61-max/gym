import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = { value: number; suffix?: string; label: string };

const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Active Members" },
  { value: 50, suffix: "+", label: "Pieces of Equipment" },
  { value: 17, suffix: "h", label: "Open Daily" },
  { value: 6, suffix: "/wk", label: "Train Days" },
];

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, stat.value, { duration: 1.6, ease: "easeOut" });
    return controls.stop;
  }, [inView, mv, stat.value]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    return rounded.on("change", (v) => {
      el.textContent = v;
    });
  }, [rounded]);

  return (
    <div className="text-center">
      <div className="font-display text-5xl sm:text-6xl text-white text-glow">
        <span ref={ref}>0</span>
        <span className="text-primary">{stat.suffix}</span>
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.3em] text-white/55">
        {stat.label}
      </div>
    </div>
  );
}

export function StatCounter() {
  return (
    <section className="relative border-y border-white/10 bg-black/40 py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {STATS.map((s) => (
          <Counter key={s.label} stat={s} />
        ))}
      </div>
    </section>
  );
}
