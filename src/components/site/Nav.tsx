import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/membership", label: "Membership" },
  { to: "/trainers", label: "Coaching" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={cn(
            "flex items-center justify-between gap-6 rounded-full border border-white/10 px-4 py-2 transition-all",
            scrolled
              ? "glass shadow-lg"
              : "bg-black/30 backdrop-blur-md",
          )}
        >
          <Logo />
          <nav className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:text-white"
                activeProps={{ className: "text-white bg-white/10" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground btn-glow transition hover:bg-primary-glow sm:inline-block"
          >
            Join Now
          </Link>
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-white/15 p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 lg:hidden">
          <div className="flex h-16 items-center justify-between px-6">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="rounded-full border border-white/15 p-2 text-white"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 pt-8">
            {LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-2xl border border-white/10 px-5 py-4 font-display text-2xl uppercase text-white transition hover:border-primary hover:text-primary"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-primary px-6 py-4 text-center font-bold uppercase tracking-wider text-primary-foreground btn-glow"
            >
              Join Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
