const ITEMS = [
  "Train Hard",
  "Live Strong",
  "3D Fitness Club",
  "Tohana",
  "No Excuses",
  "Iron Therapy",
  "Push Limits",
];

export function MarqueeStrip() {
  const row = [...ITEMS, ...ITEMS, ...ITEMS];
  return (
    <div
      aria-hidden
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-primary/20 via-black to-primary/20 py-5"
    >
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {row.concat(row).map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-display text-3xl uppercase tracking-wider text-white/80"
          >
            {item}
            <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
