import { createFileRoute } from "@tanstack/react-router";
import { Pricing } from "@/components/site/Pricing";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "framer-motion";

const FAQS = [
  {
    q: "Are there any joining fees?",
    a: "No joining fee. The price you see is the price you pay — for the duration you pick.",
  },
  {
    q: "Can I freeze my membership?",
    a: "Yes — quarterly and yearly memberships can be paused for up to 15 days at a time. Just let us know in advance.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. PT packages are billed separately and can be added to any membership. 6-month and yearly members get one complimentary session.",
  },
  {
    q: "What are the open hours?",
    a: "Monday to Saturday, 5:00 AM to 10:00 PM. Closed Sundays.",
  },
  {
    q: "Is there a trial?",
    a: "Yes — your first walkthrough and assessment are on us. Drop by anytime during open hours.",
  },
];

export const Route = createFileRoute("/membership")({
  component: Membership,
});

function Membership() {
  return (
    <>
      <section className="relative py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Memberships
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-white text-balance">
            Pricing You Can <span className="text-primary text-glow">Commit To</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Pick the plan that fits — no hidden fees, no surprise renewals.
          </p>
        </div>
      </section>

      <Pricing withHeading={false} />

      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="FAQ" title="Common Questions" />
          <div className="mt-12 space-y-3">
            {FAQS.map((f, i) => (
              <motion.details
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group glass rounded-2xl p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-white">
                  {f.q}
                  <span className="text-primary transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{f.a}</p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />
    </>
  );
}
