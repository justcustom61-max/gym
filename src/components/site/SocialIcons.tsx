import { Instagram, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SocialIcons({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={SITE.socials.instagram}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram"
        className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        <Instagram className="size-4" />
      </a>
      <a
        href={SITE.socials.youtube}
        target="_blank"
        rel="noreferrer"
        aria-label="YouTube"
        className="flex size-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-primary hover:bg-primary hover:text-primary-foreground"
      >
        <Youtube className="size-4" />
      </a>
    </div>
  );
}
