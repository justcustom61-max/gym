import { createFileRoute } from "@tanstack/react-router";
import { LocationMap } from "@/components/site/LocationMap";
import { InquiryForm } from "@/components/site/InquiryForm";
import { SocialIcons } from "@/components/site/SocialIcons";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="relative py-16 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-primary">
            Get In Touch
          </span>
          <h1 className="mt-5 font-display text-5xl sm:text-7xl uppercase leading-[0.9] text-white text-balance">
            Let's <span className="text-primary text-glow">Talk</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/65">
            Drop your details, give us a call, or visit the club.
          </p>
          <div className="mt-6 flex justify-center">
            <SocialIcons />
          </div>
        </div>
      </section>

      <LocationMap />
      <InquiryForm />
    </>
  );
}
