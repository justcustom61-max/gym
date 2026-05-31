import { lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { MagneticButton } from "./MagneticButton";
import gymWeights from "@/assets/gym-weights.jpg";

const Hero3D = lazy(() => import("./Hero3D"));

function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      canvas.getContext("webgl2") ??
      canvas.getContext("webgl") ??
      (canvas as HTMLCanvasElement).getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

export function HeroSection() {
  const webgl = hasWebGL();

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${gymWeights})` }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/60 via-black/40 to-background" />

      {webgl && (
        <div className="absolute inset-0 -z-0">
          <Suspense fallback={null}>
            <Hero3D />
          </Suspense>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,black_95%)]" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-red mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-white/90"
        >
          <span className="size-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--primary)]" />
          Tohana · Haryana
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-[clamp(3rem,11vw,9rem)] leading-[0.85] uppercase text-white text-balance"
        >
          Forge Your{" "}
          <span className="text-primary text-glow">Strongest</span>
          <br />
          Self
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-balance text-base sm:text-lg text-white/70"
        >
          Premium equipment. Certified coaching. A community built to push you
          past every plateau.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#membership"
            className="bg-primary text-primary-foreground btn-glow hover:bg-primary-glow"
          >
            Join Now →
          </MagneticButton>
          <Link
            to="/membership"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white/90 transition hover:border-primary hover:text-primary"
          >
            Explore Plans
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-white/40"
        >
          Scroll
        </motion.div>
      </div>
    </section>
  );
}
