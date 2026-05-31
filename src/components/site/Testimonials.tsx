import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const REVIEWS = [
  {
    name: "Rohit S.",
    role: "Member · 2 yrs",
    body: "Best gym in Tohana — equipment is top-tier and the energy on the floor is unmatched. Lost 14 kg and built real strength here.",
  },
  {
    name: "Priya K.",
    role: "Member · 1 yr",
    body: "The coaches actually pay attention. My form, my plan, my pace — it all changed. Genuinely look forward to every session.",
  },
  {
    name: "Aman G.",
    role: "Member · 3 yrs",
    body: "Spacious, clean, and well-lit. I've trained in cities — 3D Fitness is right up there. Worth every rupee.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Members Talk"
          title="Strong Words From Strong People"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass relative rounded-2xl p-7"
            >
              <Quote className="absolute right-5 top-5 size-8 text-primary/30" />
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="size-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-sm text-white/80 leading-relaxed">
                "{r.body}"
              </p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{r.name}</div>
                <div className="text-xs uppercase tracking-widest text-white/50">
                  {r.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
