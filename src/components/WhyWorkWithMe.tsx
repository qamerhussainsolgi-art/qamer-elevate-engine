import { Sparkles, Layers, TrendingUp, Clock } from "lucide-react";
import { Link } from "@tanstack/react-router";

const reasons = [
  {
    icon: TrendingUp,
    title: "Positioned to convert",
    description:
      "Messaging, structure, and CTAs designed around how your buyer actually decides — so the right visitors take the next step.",
  },
  {
    icon: Sparkles,
    title: "Designed to earn trust",
    description:
      "Premium visual systems, considered typography, and zero template smell. Your site looks like the business you want to be perceived as.",
  },
  {
    icon: Layers,
    title: "Engineered to last",
    description:
      "Modern stack, clean code, and editable structures your team can extend for years — not throw away in 18 months.",
  },
  {
    icon: Clock,
    title: "Delivered on the date promised",
    description:
      "Fixed scope, fixed price, fixed launch date. Miss the date and you don&apos;t pay the final invoice.",
  },
];

export function WhyWorkWithMe() {
  return (
    <section id="why" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              What you actually get
            </span>
            <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
              A website that{" "}
              <span className="bg-gradient-to-r from-foreground via-accent to-accent bg-clip-text text-transparent">
                earns its keep
              </span>{" "}
              — not just one that looks good
            </h2>
            <p className="mt-5 max-w-md text-base leading-[1.7] text-muted-foreground sm:text-lg">
              You&apos;re not buying pages. You&apos;re buying a positioning
              shift, a conversion-tuned UX, and a senior partner who treats your
              numbers like his own.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="cta-glow inline-flex items-center justify-center rounded-full bg-gradient-to-r from-foreground to-foreground/90 px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 hover:cta-glow-hover"
              >
                Book a Free Strategy Call
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-6"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                  <reason.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>

                <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-foreground">
                  {reason.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: reason.description }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
