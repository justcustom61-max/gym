import { createFileRoute } from "@tanstack/react-router";
import { ParallaxGallery } from "@/components/site/ParallaxGallery";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

function Gallery() {
  return (
    <>
      <section className="relative py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Gallery
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-white text-balance">
            Inside The <span className="text-primary text-glow">Club</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Real shots from our floor — equipment, space, atmosphere.
          </p>
        </div>
      </section>
      <ParallaxGallery withHeading={false} />
    </>
  );
}
