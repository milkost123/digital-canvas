import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { motion } from "motion/react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Milena Kostyukov" },
      { name: "description", content: "About Milena Kostyukov — digital designer working in motion and interaction." },
      { property: "og:title", content: "About — Milena Kostyukov" },
      { property: "og:description", content: "About Milena Kostyukov — digital designer working in motion and interaction." },
      { property: "og:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382966/ShareCard_moshvp.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382966/ShareCard_moshvp.png" },
    ],
  }),
  component: About,
});

const experience = [
  { year: "Oct 2025 —", role: "Sr. Designer, Digital", org: "Okta", tag: "Enterprise SaaS" },
  { year: "Nov 2022 — Sep 2025", role: "Sr. Marketing Designer", org: "Studeo", tag: "Startup SaaS" },
  { year: "Jun 2024 — May 2025", role: "Founding Designer", org: "Malleable", tag: "Startup SaaS" },
  { year: "May 2021 — Jun 2023", role: "Lead Graphic Designer", org: "Food Over Drugs", tag: "E-commerce" },
];

const skills = [
  "Motion design", "Interaction design", "Brand design", "Design engineering",
  "Growth design", "Prototyping", "Design systems",
  "Figma", "After Effects", "Framer", "HTML/CSS", "Claude Code",
];


function About() {
  return (
    <SiteLayout>
      <motion.div
        className="px-5 pb-32 pt-6 sm:px-10 lg:px-14 lg:pt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <header>
          <span className="label-mono text-muted-foreground">About</span>
          <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A designer working at the seam of motion, interaction, and craft.
          </h1>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
            <p>
              I'm Milena — a designer based in Toronto. I work with tech brands across marketing: ads,
              websites, product videos, you name it. I'm drawn to the space between strategy and craft.
            </p>
            <p>
              Most of my work lives in the gap between static design and engineering. I prototype heavily,
              animate intentionally, and try to leave every product I touch a little easier to use than I
              found it.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className="rounded-full border border-border px-3.5 py-1.5 font-mono text-base transition-opacity duration-200 hover:opacity-80" style={{ letterSpacing: 0 }}>{s}</span>
              ))}
            </div>
          </div>

          <aside className="space-y-12">
            <section>
              <h2 className="label-mono text-ink">Experience</h2>
              <ul className="mt-4 space-y-5">
                {experience.map((e) => (
                  <li key={e.role} className="border-b border-border pb-4">
                    <div className="label-mono text-muted-foreground">{e.year}</div>
                    <div className="mt-1 font-display text-lg" style={{ letterSpacing: 0 }}>{e.role}</div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-sm text-foreground/70">{e.org}</span>
                      <span className="label-mono text-[0.58rem] px-2 py-0.5 rounded-full border border-border text-muted-foreground/60">{e.tag}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

          </aside>
        </div>

      </motion.div>
    </SiteLayout>
  );
}
