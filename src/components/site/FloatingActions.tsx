import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <a
        href={`tel:${SITE.phoneDigits}`}
        aria-label="Call 3D Fitness Club"
        className="group relative flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg btn-glow transition hover:scale-110"
      >
        <Phone className="size-6" />
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition group-hover:opacity-100 md:inline">
          Call Now
        </span>
      </a>

      <a
        href={SITE.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg transition hover:scale-110"
        style={{
          boxShadow:
            "0 0 0 1px rgba(37,211,102,0.4), 0 10px 30px -10px rgba(37,211,102,0.8)",
        }}
      >
        <svg viewBox="0 0 24 24" className="size-7 fill-current">
          <path d="M19.05 4.91A10 10 0 0 0 4.06 18.27L3 22l3.83-1A10 10 0 1 0 19.05 4.91Zm-7.05 15.27a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-2.27.6.61-2.21-.2-.32a8.28 8.28 0 1 1 6.37 3.26Zm4.54-6.2c-.25-.13-1.47-.72-1.7-.8s-.39-.13-.56.13-.65.8-.8.97-.29.19-.54.06a6.78 6.78 0 0 1-2-1.24 7.49 7.49 0 0 1-1.39-1.72c-.14-.25 0-.39.11-.51s.25-.29.37-.43a1.68 1.68 0 0 0 .25-.42.46.46 0 0 0 0-.43c-.06-.13-.56-1.35-.77-1.85s-.41-.42-.56-.43h-.48a.93.93 0 0 0-.67.31 2.83 2.83 0 0 0-.88 2.1 4.91 4.91 0 0 0 1 2.61 11.27 11.27 0 0 0 4.31 3.81c.6.26 1.07.41 1.44.53a3.46 3.46 0 0 0 1.59.1 2.6 2.6 0 0 0 1.7-1.2 2.11 2.11 0 0 0 .15-1.2c-.06-.11-.23-.18-.48-.31Z" />
        </svg>
        <span className="absolute right-16 hidden whitespace-nowrap rounded-full bg-black/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white opacity-0 transition group-hover:opacity-100 md:inline">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
