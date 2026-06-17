import { Target, Gauge, MessageSquare, ShieldCheck } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Built for inquiries, not awards",
    description:
      "Every layout, headline, and CTA is engineered around one outcome: more qualified leads landing in your inbox.",
  },
  {
    icon: Gauge,
    title: "Performance you can sell on",
    description:
      "Sub-2s load times, 90+ Core Web Vitals, and SEO foundations that hold up under scrutiny from buyers and search engines.",
  },
  {
    icon: MessageSquare,
    title: "Direct, founder-to-founder",
    description:
      "You work with me — not an account manager. Decisions move in hours, not weeks.",
  },
  {
    icon: ShieldCheck,
    title: "Fixed scope. Fixed price. No surprises.",
    description:
      "You get a written scope, a fixed quote, and a guarantee: if I miss the agreed launch date, you don&apos;t pay the final invoice.",
  },
];

const trustBarItems = [
  "Strategy first",
  "Senior-level build",
  "Conversion-engineered",
  "Owned by you",
  "Built to scale",
];

export function Trust() {
  return (
    <section id="trust" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Why founders trust the work
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            A senior partner — at a fraction of the agency cost
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Most agencies sell process. Most freelancers sell hours. I sell
            outcomes — and back them with fixed pricing, a fixed timeline, and
            a launch guarantee.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-center">
            <blockquote className="text-xl font-medium leading-[1.5] tracking-[-0.01em] text-foreground sm:text-[1.35rem] lg:text-[1.5rem]">
              A website isn&apos;t a deliverable. It&apos;s the asset that decides
              whether the next visitor becomes a client — or quietly closes the
              tab.
            </blockquote>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-6"
              >
                <div className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                  <card.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                </div>

                <h3 className="mt-4 text-sm font-semibold tracking-[-0.01em] text-foreground">
                  {card.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="flex flex-wrap items-center justify-center gap-y-3">
            {trustBarItems.map((item, index) => (
              <div key={item} className="flex items-center">
                <span className="px-4 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground sm:px-6">
                  {item}
                </span>
                {index < trustBarItems.length - 1 && (
                  <span className="hidden h-3 w-px bg-border sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
