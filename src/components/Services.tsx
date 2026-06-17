import { Layout, Code2, Target, Check } from "lucide-react";

const services = [
  {
    icon: Target,
    eyebrow: "01 — Convert",
    title: "High-Converting Landing Pages",
    focus: "For founders running paid traffic, launches, or campaigns.",
    description:
      "A single-purpose page engineered around one outcome: more qualified leads or signups. Positioning, copy direction, design, and build — done in a single sprint.",
    deliverables: [
      "Offer + messaging strategy",
      "Conversion-engineered page design",
      "Copy direction & section-by-section structure",
      "Fast, lightweight build with analytics + A/B-ready hooks",
    ],
    timeline: "1 – 2 weeks",
    idealFor: "Founders burning ad spend on a page that doesn&apos;t convert.",
  },
  {
    icon: Layout,
    eyebrow: "02 — Reposition",
    title: "Premium Website Redesign",
    focus: "For businesses that look smaller than they actually are.",
    description:
      "A full repositioning of your website — strategy, structure, messaging, and design — so it finally matches the calibre of business you&apos;re running and the clients you want to attract.",
    deliverables: [
      "Positioning & messaging audit",
      "Site architecture and user-flow design",
      "Brand-aligned visual system, every breakpoint",
      "Conversion-tuned hero, services, work, and contact flows",
    ],
    timeline: "3 – 5 weeks",
    idealFor: "Founders whose site no longer reflects what they sell or charge.",
  },
  {
    icon: Code2,
    eyebrow: "03 — Scale",
    title: "Custom Website Build",
    focus: "For teams replacing template stacks with something they own.",
    description:
      "A bespoke, production-grade website built on a modern stack — fast, accessible, SEO-ready, and structured so your team can grow it without rebuilding from scratch in 18 months.",
    deliverables: [
      "Custom React + Tailwind codebase",
      "Core Web Vitals tuning & technical SEO",
      "CMS or content structure your team can edit",
      "Documented handoff and 30 days post-launch support",
    ],
    timeline: "4 – 8 weeks",
    idealFor: "Teams scaling past Webflow/Squarespace and needing real engineering.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative">
      <div className="relative mx-auto max-w-7xl px-6 py-28 lg:py-40">
        <div className="max-w-xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Services
          </span>
          <h2 className="mt-4 text-[2.2rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-5xl">
            Three ways I help founders win online
          </h2>
          <p className="mt-5 text-base leading-[1.7] text-muted-foreground sm:text-lg">
            Each engagement is fixed scope, fixed price, and structured around a
            single business outcome — more inquiries, better positioning, or a
            stack you actually own.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative grid grid-cols-1 gap-8 overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-500 hover:border-foreground/20 hover:bg-card/80 hover:shadow-[0_0_0_1px_oklch(1_0_0_/_0.06),0_24px_60px_-24px_oklch(0_0_0_/_0.5)] sm:p-10 lg:grid-cols-[1.2fr_1fr]"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface/60 transition-all duration-300 group-hover:border-foreground/15 group-hover:bg-surface-elevated">
                    <service.icon className="h-4 w-4 text-muted-foreground transition-colors duration-300 group-hover:text-foreground" />
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                    {service.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm font-medium text-foreground/80">
                  {service.focus}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
                  {service.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Timeline
                    </p>
                    <p className="mt-2 text-sm text-foreground">{service.timeline}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      Best for
                    </p>
                    <p
                      className="mt-2 text-sm text-foreground/90"
                      dangerouslySetInnerHTML={{ __html: service.idealFor }}
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border/80 bg-surface/40 p-6 sm:p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  What&apos;s included
                </p>
                <ul className="mt-5 space-y-3.5 text-sm text-foreground/90">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      <span className="leading-relaxed">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-20 text-center text-sm leading-relaxed text-muted-foreground">
          Fixed scope. Fixed price. Launch on the date promised — or you don&apos;t
          pay the final invoice.
        </p>
      </div>
    </section>
  );
}
