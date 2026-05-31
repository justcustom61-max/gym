import { MapPin, Phone, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";

export function LocationMap() {
  return (
    <section id="location" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Visit Us"
          title="Find The Club"
          subtitle="Drop by anytime during open hours — first walkthrough is on us."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <div className="glass relative overflow-hidden rounded-2xl lg:col-span-3">
            <iframe
              title="3D Fitness Club location map"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[26rem] w-full border-0 grayscale contrast-110"
            />
          </div>

          <div className="space-y-4 lg:col-span-2">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-3 text-primary ring-1 ring-primary/30">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Address
                  </div>
                  <div className="mt-1 text-white">{SITE.address.line1}</div>
                  <div className="text-white/70">{SITE.address.line2}</div>
                  <a
                    href={SITE.mapsLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-sm font-semibold text-primary hover:underline"
                  >
                    Get Directions →
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-primary/15 p-3 text-primary ring-1 ring-primary/30">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Hours
                  </div>
                  {SITE.hours.map((h) => (
                    <div key={h.day} className="mt-1 flex justify-between gap-6 text-sm">
                      <span className="text-white">{h.day}</span>
                      <span className="text-white/70">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`tel:${SITE.phoneDigits}`}
              className="glass-red red-glow flex items-center justify-between rounded-2xl p-6 transition hover:brightness-110"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-primary p-3 text-primary-foreground">
                  <Phone className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Call Now
                  </div>
                  <div className="font-display text-2xl text-white">
                    {SITE.phoneDisplay}
                  </div>
                </div>
              </div>
              <span className="text-primary">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
