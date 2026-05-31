import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";
import { SocialIcons } from "./SocialIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm text-white/60">
            {SITE.description}
          </p>
          <SocialIcons className="mt-6" />
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Explore
          </div>
          <ul className="space-y-2 text-sm text-white/70">
            {[
              ["/", "Home"],
              ["/about", "About"],
              ["/membership", "Membership"],
              ["/trainers", "Coaching"],
              ["/gallery", "Gallery"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to as string} className="hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Visit
          </div>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{SITE.address.line1}, {SITE.address.line2}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`tel:${SITE.phoneDigits}`} className="hover:text-primary">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/45 sm:flex-row">
          <span>© {new Date().getFullYear()} 3D Fitness Club. All rights reserved.</span>
          <span>Built for lifters in Tohana.</span>
        </div>
      </div>
    </footer>
  );
}
