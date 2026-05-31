import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

function categoryOf(bmi: number) {
  if (bmi < 18.5) return { label: "Underweight", color: "#60a5fa" };
  if (bmi < 25) return { label: "Healthy", color: "#22c55e" };
  if (bmi < 30) return { label: "Overweight", color: "#f59e0b" };
  return { label: "Obese", color: "#e10600" };
}

export function BMIGauge() {
  const [h, setH] = useState(170);
  const [w, setW] = useState(70);

  const bmi = useMemo(() => {
    const m = h / 100;
    if (!m) return 0;
    return +(w / (m * m)).toFixed(1);
  }, [h, w]);

  const cat = categoryOf(bmi);
  const clamped = Math.min(40, Math.max(12, bmi));
  const angle = ((clamped - 12) / (40 - 12)) * 180 - 90;

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Know Your Baseline"
          title="3D BMI Calculator"
          subtitle="Quick check on where you stand — then come train."
        />

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:items-center">
          <div className="glass relative mx-auto aspect-[2/1.2] w-full max-w-md rounded-3xl p-8">
            <svg viewBox="0 0 200 120" className="w-full">
              <defs>
                <linearGradient id="bmiArc" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="33%" stopColor="#22c55e" />
                  <stop offset="66%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#e10600" />
                </linearGradient>
              </defs>
              <path
                d="M20 110 A80 80 0 0 1 180 110"
                fill="none"
                stroke="url(#bmiArc)"
                strokeWidth="14"
                strokeLinecap="round"
                opacity="0.85"
              />
              <motion.line
                x1="100"
                y1="110"
                x2="100"
                y2="35"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                style={{ originX: "100px", originY: "110px" }}
                animate={{ rotate: angle }}
                transition={{ type: "spring", stiffness: 120, damping: 14 }}
              />
              <circle cx="100" cy="110" r="6" fill={cat.color} />
            </svg>
            <div className="mt-2 text-center">
              <div className="font-display text-6xl text-white">
                {bmi || "—"}
              </div>
              <div
                className="mt-1 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: cat.color }}
              >
                {bmi ? cat.label : "Enter your details"}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <label className="text-xs uppercase tracking-[0.3em] text-white/55">
                  Height
                </label>
                <span className="font-display text-2xl text-white">{h} cm</span>
              </div>
              <input
                type="range"
                min={120}
                max={220}
                value={h}
                onChange={(e) => setH(+e.target.value)}
                className="w-full accent-primary"
              />
            </div>
            <div>
              <div className="mb-2 flex items-baseline justify-between">
                <label className="text-xs uppercase tracking-[0.3em] text-white/55">
                  Weight
                </label>
                <span className="font-display text-2xl text-white">{w} kg</span>
              </div>
              <input
                type="range"
                min={30}
                max={180}
                value={w}
                onChange={(e) => setW(+e.target.value)}
                className="w-full accent-primary"
              />
            </div>
            <div className="glass rounded-xl p-5 text-sm text-white/70">
              BMI is a rough indicator — not a verdict. Want a personalized
              assessment? Visit us in Tohana and we'll run a full body
              composition check on day one.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
