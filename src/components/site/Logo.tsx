import { Link } from "@tanstack/react-router";

export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="3D Fitness Club home">
      <span className="relative grid size-10 place-items-center rounded-lg bg-primary text-primary-foreground btn-glow transition group-hover:scale-105">
        <span className="font-display text-lg leading-none">3D</span>
      </span>
      <span className="hidden flex-col leading-none sm:flex">
        <span className="font-display text-lg uppercase tracking-wider text-white">
          3D Fitness
        </span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
          Club · Tohana
        </span>
      </span>
    </Link>
  );
}
