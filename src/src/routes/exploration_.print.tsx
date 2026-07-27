import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/exploration_/print")({
  head: () => ({
    meta: [
      { title: "Print — Milena Kostyukov" },
      { name: "description", content: "Print design explorations." },
      { property: "og:title", content: "Print — Milena Kostyukov" },
    ],
  }),
  component: Print,
});

function FadeIn({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FadeInSection({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const meta = [
  { label: "Tools", value: "Figma, Illustrator" },
  { label: "Timeline", value: "2022 — Present" },
];

const sections = [
  {
    heading: "Section heading",
    body: "Section body copy goes here.",
    noCols: true,
  },
];

function Print() {
  return (
    <SiteLayout>
      <article className="px-3 pb-20 pt-6 sm:px-10 sm:pb-32 lg:px-14 lg:pt-10">
        <Link to="/exploration" data-cursor="hover" className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" />
          Exploration
        </Link>

        <FadeIn delay={0.05}>
          <header className="mt-8">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Print
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              Layouts, typography, and design for physical formats.
            </p>
          </header>
        </FadeIn>

        <FadeIn delay={0.12}>
          <div className="mt-10 aspect-[16/8] w-full rounded-[12px] bg-placeholder" />
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-2">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="label-mono text-ink">{m.label}</div>
                <div className="mt-2 text-base leading-relaxed text-foreground/85">{m.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-20">
          {sections.map((s) => (
            <FadeInSection key={s.heading}>
              {s.noCols ? (
                <div>
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{s.heading}</h3>
                  <p className="mt-4 text-lg leading-relaxed text-foreground/80">{s.body}</p>
                </div>
              ) : (
                <div className="grid gap-6 lg:grid-cols-[1.7fr_1.7fr] lg:items-center lg:gap-16">
                  <div className="order-last">
                    <div className="aspect-[4/3] w-full rounded-[12px] bg-placeholder" />
                  </div>
                  <div className="order-first">
                    <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{s.heading}</h3>
                    <p className="mt-4 text-lg leading-relaxed text-foreground/80">{s.body}</p>
                  </div>
                </div>
              )}
            </FadeInSection>
          ))}
        </div>
      </article>
    </SiteLayout>
  );
}
