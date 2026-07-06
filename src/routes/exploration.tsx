import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/exploration")({
  head: () => ({
    meta: [
      { title: "Exploration — Milena Kostyukov" },
      { name: "description", content: "Motion studies, interaction experiments, and side quests." },
      { property: "og:title", content: "Exploration — Milena Kostyukov" },
      { property: "og:description", content: "Motion studies, interaction experiments, and side quests." },
    ],
  }),
  component: Exploration,
});

const items = [
  { tag: "Motion", h: "h-72" },
  { tag: "Interaction", h: "h-96" },
  { tag: "3D", h: "h-64" },
  { tag: "Prototype", h: "h-80" },
  { tag: "Motion", h: "h-96" },
  { tag: "Type", h: "h-64" },
  { tag: "Interaction", h: "h-72" },
  { tag: "3D", h: "h-80" },
];

function Exploration() {
  return (
    <SiteLayout>
      <div className="relative px-5 pb-32 pt-6 sm:px-10 lg:px-14 lg:pt-10">
        <header className="max-w-2xl">
          <span className="label-mono text-muted-foreground">Side quests</span>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl">
            Exploration.
          </h1>
          <p className="mt-5 text-lg text-foreground/75 sm:text-xl">
            Loose studies in motion, interaction, and form. The bench where the day-job ideas get sharpened.
          </p>
        </header>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
              className="mb-5 break-inside-avoid"
            >
              <div
                data-cursor="hover"
                className={`relative overflow-hidden rounded-2xl bg-placeholder ${it.h} transition-transform hover:scale-[1.01]`}
              >
                <span className="absolute bottom-3 left-3 rounded-full bg-background/85 px-2.5 py-1 label-mono backdrop-blur">
                  {it.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Coming soon overlay */}
        <div className="absolute inset-0 z-10 flex flex-col items-start justify-start bg-background px-5 pt-6 sm:px-10 lg:px-14 lg:pt-10">
          <h2 className="font-display text-5xl tracking-tight">Coming soon!</h2>
          <p className="mt-3 text-muted-foreground text-lg">We're still working on this page.</p>
        </div>
      </div>
    </SiteLayout>
  );
}
