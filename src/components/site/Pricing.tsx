import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { PLANS, inr } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { TiltCard } from "./TiltCard";
import { cn } from "@/lib/utils";

export function Pricing({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section id="membership" className="relative py-24 sm:py-32 hex-bg">
      <div className="mx-auto max-w-7xl px-6">
        {withHeading && (
          <SectionHeading
            eyebrow="Membership"
            title="Pick Your Commitment"
            subtitle="Simple pricing. No hidden fees. Cancel any plan, anytime."
          />
        )}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <TiltCard
                className={cn(
                  "relative h-full rounded-2xl p-7",
                  plan.featured ? "glass-red red-glow" : "glass",
                )}
              >
                {plan.badge && (
                  <span
                    className={cn(
                      "absolute -top-3 right-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest",
                      plan.featured
                        ? "bg-primary text-primary-foreground btn-glow"
                        : "bg-white/10 text-white/80 ring-1 ring-white/15",
                    )}
                  >
                    {plan.badge}
                  </span>
                )}

                <div className="text-xs uppercase tracking-[0.3em] text-white/55">
                  {plan.name}
                </div>
                <div className="mt-4 flex items-end gap-1">
                  <span className="font-display text-5xl text-white">
                    {inr(plan.price)}
                  </span>
                </div>
                <div className="mt-1 text-xs text-white/45">per {plan.period}</div>

                <ul className="mt-6 space-y-3">
                  {plan.perks.map((p) => (
                    <li
                      key={p}
                      className="flex items-start gap-2.5 text-sm text-white/75"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={cn(
                    "mt-8 block rounded-full px-5 py-3 text-center text-sm font-semibold uppercase tracking-wider transition",
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary-glow"
                      : "border border-white/20 text-white hover:border-primary hover:text-primary",
                  )}
                >
                  Get Started
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
