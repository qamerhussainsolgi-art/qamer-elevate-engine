import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { Trust } from "@/components/Trust";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";
import { Process } from "@/components/Process";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";

const homeFaqs = [
  {
    q: "What does this actually cost?",
    a: "Landing pages start at a fixed fee in the low four figures. Full redesigns and custom builds are quoted as fixed-scope engagements — typically mid to high four figures depending on scope. You get a written quote before anything starts, and the price doesn't move.",
  },
  {
    q: "How long does a typical project take?",
    a: "Landing pages: 1–2 weeks. Full redesigns: 3–5 weeks. Custom builds: 4–8 weeks. Every project ships with a fixed launch date — if I miss it, you don't pay the final invoice.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "Two structured review rounds are built into every engagement, and we align on direction in writing before a pixel is built. If we're genuinely not aligned after round one, you walk away and only pay for the strategy work delivered.",
  },
  {
    q: "Do I own the website and the code?",
    a: "Completely. You own the code, the design files, the domain, and the hosting account. Nothing locks you into me — including me.",
  },
  {
    q: "How do we communicate during the project?",
    a: "You work with me directly — not an account manager. Weekly written updates, a shared project doc, and async messages answered within 24 hours on workdays.",
  },
  {
    q: "Who do you work with?",
    a: "Founders, marketing leads, and small in-house teams at startups, SaaS companies, agencies, and ambitious independent brands — typically businesses that are quietly outgrowing the website they have.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Qamer Hussain — Conversion-Focused Websites for Founders" },
      {
        name: "description",
        content:
          "I turn underperforming websites into clear, credible, conversion-ready assets that bring in qualified inquiries. Fixed scope, fixed price, launch guarantee.",
      },
      { property: "og:title", content: "Qamer Hussain — Websites Built to Win Clients" },
      {
        property: "og:description",
        content:
          "Strategy-led web design and development for founders who want their website to start earning its keep.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Trust />
        <WhyWorkWithMe />
        <Process />
        <FAQ
          eyebrow="FAQ"
          title="Questions, answered."
          intro="A few of the questions I hear most often. If yours isn't here, the contact form is the fastest way to ask."
          items={homeFaqs}
        />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
