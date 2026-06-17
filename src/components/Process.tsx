const steps = [
  {
    n: "01",
    title: "Strategy Call",
    desc: "We pressure-test the business goal, the audience, and what the site actually needs to do — before a single pixel moves.",
  },
  {
    n: "02",
    title: "Positioning & Structure",
    desc: "Messaging hierarchy, sitemap, and section-by-section blueprint. You approve the plan before design starts.",
  },
  {
    n: "03",
    title: "Design",
    desc: "A premium visual system built around your brand and conversion goals. Two structured review rounds, no surprises.",
  },
  {
    n: "04",
    title: "Build",
    desc: "Production-grade React + Tailwind code, Core Web Vitals tuned, SEO-ready, fully responsive. You see progress weekly.",
  },
  {
    n: "05",
    title: "Launch & Handoff",
    desc: "QA, analytics, deployment, and a documented handoff. 30 days of post-launch support included on every full build.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Process
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            A clear path from underperforming to undeniable
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            No vague timelines, no scope creep, no agency theatre. Five
            structured steps with a written deliverable at every stage.
          </p>
        </div>

        {/* Desktop */}
        <ol className="relative mt-20 hidden lg:block">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[18px] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
          <div className="grid grid-cols-5 gap-6">
            {steps.map((s) => (
              <li key={s.n} className="relative">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold tracking-wide text-foreground">
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-6 text-base font-semibold tracking-[-0.01em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </div>
        </ol>

        {/* Mobile */}
        <ol className="relative mt-16 lg:hidden">
          <div
            aria-hidden
            className="absolute left-[17px] top-2 bottom-2 w-px bg-gradient-to-b from-border via-border to-transparent"
          />
          <div className="space-y-10">
            {steps.map((s) => (
              <li key={s.n} className="relative pl-14">
                <span className="absolute left-0 top-0 grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-[11px] font-semibold tracking-wide text-foreground">
                  {s.n}
                </span>
                <h3 className="text-base font-semibold tracking-[-0.01em] text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>
              </li>
            ))}
          </div>
        </ol>
      </div>
    </section>
  );
}
