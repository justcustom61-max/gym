import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";
import { SITE, PLANS } from "@/lib/site";

export function InquiryForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    if (!name || !phone) {
      toast.error("Please add your name and phone.");
      return;
    }
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setDone(true);
    toast.success("Thanks — we'll call you back shortly.");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 hex-bg">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          eyebrow="Inquiry"
          title="Start Your Membership"
          subtitle="Drop your details — we'll get back within a few hours."
        />

        <form
          onSubmit={onSubmit}
          className="glass mt-12 grid gap-5 rounded-3xl p-6 sm:p-10 md:grid-cols-2"
        >
          <Field label="Full Name" name="name" placeholder="Your name" required />
          <Field
            label="Phone"
            name="phone"
            type="tel"
            placeholder="+91 ..."
            required
          />
          <Field label="Email" name="email" type="email" placeholder="you@email.com" className="md:col-span-2" />
          <div className="md:col-span-1">
            <Label>Plan Interested In</Label>
            <select
              name="plan"
              defaultValue="6m"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-primary"
            >
              {PLANS.map((p) => (
                <option key={p.id} value={p.id} className="bg-black">
                  {p.name} — ₹{p.price}
                </option>
              ))}
            </select>
          </div>
          <Field label="Goal" name="goal" placeholder="Weight loss, muscle, fitness..." />
          <div className="md:col-span-2">
            <Label>Message</Label>
            <textarea
              name="message"
              rows={4}
              placeholder="Any questions for us?"
              className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-primary"
            />
          </div>
          <div className="md:col-span-2 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
            <p className="text-xs text-white/50">
              By submitting, you agree to be contacted by 3D Fitness Club.
            </p>
            <button
              type="submit"
              disabled={submitting}
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-primary-foreground btn-glow transition hover:bg-primary-glow disabled:opacity-60"
            >
              {submitting ? "Sending..." : done ? "Sent — Send Another" : "Submit Inquiry"}
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/55">
          Prefer a call? Dial{" "}
          <a href={`tel:${SITE.phoneDigits}`} className="text-primary hover:underline">
            {SITE.phoneDisplay}
          </a>{" "}
          or message us on{" "}
          <a href={SITE.whatsapp} target="_blank" rel="noreferrer" className="text-primary hover:underline">
            WhatsApp
          </a>.
        </p>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-xs uppercase tracking-[0.3em] text-white/55">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label>{label}{required && <span className="text-primary"> *</span>}</Label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-primary"
      />
    </div>
  );
}
