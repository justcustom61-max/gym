import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./SectionHeading";
import gymWeights from "@/assets/gym-weights.jpg";
import gymMirror from "@/assets/gym-mirror.jpg";
import gymFloor from "@/assets/gym-floor.jpg";
import storefront from "@/assets/storefront.jpg";

const SHOTS = [
  { src: gymWeights, label: "Iron Floor", depth: -60 },
  { src: gymMirror, label: "Free Weights", depth: 40 },
  { src: gymFloor, label: "Functional Zone", depth: -30 },
  { src: storefront, label: "Tohana Club", depth: 60 },
];

function Tile({ src, label, depth, i }: { src: string; label: string; depth: number; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [depth, -depth]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: i * 0.06 }}
      className="relative overflow-hidden rounded-2xl glass"
    >
      <motion.img
        src={src}
        alt={`3D Fitness Club — ${label}`}
        loading="lazy"
        style={{ y }}
        className="h-[26rem] w-full object-cover transition-transform duration-700 hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent p-5">
        <span className="text-xs uppercase tracking-[0.3em] text-primary">
          0{i + 1}
        </span>
        <div className="font-display text-2xl uppercase text-white">{label}</div>
      </div>
    </motion.div>
  );
}

export function ParallaxGallery({ withHeading = true }: { withHeading?: boolean }) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {withHeading && (
          <SectionHeading
            eyebrow="Inside The Club"
            title="Where The Work Happens"
            subtitle="A real look at our floor — equipment, space, and energy."
          />
        )}

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SHOTS.map((s, i) => (
            <Tile key={s.label} {...s} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
