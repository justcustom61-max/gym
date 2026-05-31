import { createFileRoute, Link } from "@tanstack/react-router";
import { Dumbbell, Flame, Activity, Apple } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { TiltCard } from "@/components/site/TiltCard";

const PILLARS = [
  {
    icon: Dumbbell,
    title: "Strength",
    body: "Compound-first programming — squat, press, pull. Build a base that carries every other goal.",
  },
  {
    icon: Flame,
    title: "HIIT & Conditioning",
    body: "Heart-rate driven sessions that burn fat and build engine. Short, hard, and effective.",
  },
  {
    icon: Activity,
    title: "Functional",
    body: "Mobility, stability, and athletic patterns. Train your body to move better — not just lift heavier.",
  },
  {
    icon: Apple,
    title: "Nutrition",
    body: "Practical, sustainable guidance built around the food you actually eat. No fad protocols.",
  },
];

export const Route = createFileRoute("/trainers")({
  component: Trainers,
});

function Trainers() {
  return (
    <>
      <section className="relative py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Expert Coaching
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-white text-balance">
            Coaches Who <span className="text-primary text-glow">Actually Coach</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Every member gets attention. Programming, form, recovery — handled.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="Pillars" title="Four Disciplines · One Floor" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard className="glass h-full rounded-2xl p-8">
                  <div className="mb-5 inline-flex size-14 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                    <p.icon className="size-7" />
                  </div>
                  <h3 className="font-display text-3xl uppercase text-white">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-white/65 leading-relaxed">{p.body}</p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="glass-red red-glow mt-16 rounded-3xl p-10 text-center">
            <h2 className="font-display text-3xl sm:text-4xl uppercase text-white">
              Book a free trial session
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">
              Walk in for an assessment and one guided workout — on the house.
            </p>
            <Link
              to="/contact"
              className="mt-7 inline-block rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow"
            >
              Book Trial →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
