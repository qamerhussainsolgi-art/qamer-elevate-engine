import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

const promises = [
  "A live walkthrough of where your site is losing trust and inquiries",
  "3 specific, prioritised changes you can apply this week",
  "An honest answer on whether we&apos;re a fit — zero pitch pressure",
];

export function FinalCTA() {
  return (
    <section id="cta" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card/60 px-8 py-20 backdrop-blur-sm sm:px-16 sm:py-28">
          <div className="pointer-events-none absolute -top-32 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          <div className="relative mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Free Website Strategy Call
            </span>
            <h2 className="mt-5 text-balance text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.035em] text-foreground sm:text-6xl">
              Your website, reviewed{" "}
              <span className="font-display italic font-normal tracking-[-0.02em] bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
                live.
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.7] text-muted-foreground sm:text-lg">
              Book a free 20-minute strategy call. I&apos;ll open your site, walk
              through what&apos;s costing you inquiries, and hand you a short
              action plan you can use with me or without me.
            </p>

            <ul className="mx-auto mt-10 grid max-w-xl gap-3 text-left">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-border bg-surface/40 px-4 py-3 text-sm text-foreground/90"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                  <span dangerouslySetInnerHTML={{ __html: p }} />
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all duration-300 cta-glow hover:cta-glow-hover"
              >
                Claim Your Free Strategy Call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>

            <p className="mt-6 text-xs text-muted-foreground">
              Limited to 4 calls per week · Response within 24 hours · No
              commitment, no pitch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
