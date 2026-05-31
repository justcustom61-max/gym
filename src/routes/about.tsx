import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/site/SectionHeading";
import { StatCounter } from "@/components/site/StatCounter";
import { ParallaxGallery } from "@/components/site/ParallaxGallery";
import storefront from "@/assets/storefront.jpg";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <section className="relative isolate overflow-hidden py-20 sm:py-28">
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${storefront})` }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-background" />

        <div className="mx-auto max-w-5xl px-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-primary"
          >
            About 3D Fitness Club
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-white text-balance"
          >
            More Than A Gym.
            <br />
            <span className="text-primary text-glow">A Standard.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/70 text-balance"
          >
            We built 3D Fitness Club in Tohana for people who take training
            seriously. Premium kit, real coaching, and an atmosphere that pulls
            the work out of you.
          </motion.p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div className="glass relative overflow-hidden rounded-3xl">
            <img
              src={storefront}
              alt="3D Fitness Club storefront in Tohana"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Built By Lifters, For Lifters"
              align="left"
            />
            <div className="mt-6 space-y-4 text-white/70">
              <p>
                3D Fitness Club opened with one belief — that small-town
                training shouldn't mean small-town facilities. We invested in
                the equipment, the lighting, the flooring, and the people, and
                built a space we'd want to train in every day.
              </p>
              <p>
                Today, hundreds of members from Tohana and surrounding areas
                train with us. From first-timers to competitive lifters, the
                programming meets you where you are and gets you stronger from
                there.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatCounter />
      <ParallaxGallery />
    </>
  );
}
