import { Dumbbell, Users, Clock, Trophy } from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";

const ITEMS = [
  {
    icon: Dumbbell,
    title: "Modern Equipment",
    body: "Hex-lit training floor with premium plates, racks, and machines built for serious lifters.",
  },
  {
    icon: Users,
    title: "Certified Coaching",
    body: "Trainers who actually train — strength, HIIT, and functional programming dialled in.",
  },
  {
    icon: Clock,
    title: "Flexible Hours",
    body: "Open 5 AM to 10 PM, Monday to Saturday. Train when it works for you.",
  },
  {
    icon: Trophy,
    title: "Real Results",
    body: "Members who stay get stronger. Programs tuned to your body, not a template.",
  },
];

export function WhyUs() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why 3D Fitness"
          title="Built For People Who Show Up"
          subtitle="Everything you need to train hard — nothing you don't."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard className="glass h-full rounded-2xl p-7">
                <div className="mb-5 inline-flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                  <it.icon className="size-6" />
                </div>
                <h3 className="font-display text-2xl uppercase text-white">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-white/65 leading-relaxed">
                  {it.body}
                </p>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
