import { createFileRoute, Link } from "@tanstack/react-router";
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
  { tag: "VIBE CODING", href: "/exploration/vibe-coding", video: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1785127975/3D-Icon-Preview_irtzxt.mp4" },
  { tag: "3D", href: "/exploration/3d", image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127975/breathe-deeply-preview_ozh0ky.jpg" },
  { tag: "MARKETING", href: "/exploration/marketing", image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/fod-cover-01_mh3ck5.jpg" },
];

function Exploration() {
  return (
    <SiteLayout>
      <div className="px-5 pb-32 pt-6 sm:px-10 lg:px-14 lg:pt-10">
        <header>
          <span className="label-mono text-muted-foreground">Side quests</span>
          <h1 className="mt-3 font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl">
            Exploration
          </h1>
          <p className="mt-5 text-lg text-foreground/75 sm:text-xl">
            A collection of past work, creative explorations, and vibe-coded prototypes I've put together
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {items.map((it, i) => {
            const card = (
              <div
                data-cursor="hover"
                className="relative overflow-hidden rounded-[12px] bg-placeholder h-64 transition-transform hover:scale-[1.01]"
              >
                {it.video
                  ? <video src={it.video} className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline />
                  : it.image
                    ? <img src={it.image} alt="" className="absolute inset-0 w-full h-full object-cover" />
                    : null}
                <span className="absolute bottom-3 left-3 rounded-full bg-background/85 px-2.5 py-1 label-mono backdrop-blur">
                  {it.tag}
                </span>
              </div>
            );
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                className=""
              >
                {it.href ? <Link to={it.href}>{card}</Link> : card}
              </motion.div>
            );
          })}
        </div>

      </div>
    </SiteLayout>
  );
}
