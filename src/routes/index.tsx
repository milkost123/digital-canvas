import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";
import { useState } from "react";
import { motion } from "motion/react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Milena Kostyukov — Digital Designer" },
      { name: "description", content: "A digital designer with a knack for motion and interaction. Currently at Okta." },
      { property: "og:title", content: "Milena Kostyukov — Digital Designer" },
      { property: "og:description", content: "A digital designer with a knack for motion and interaction." },
      { property: "og:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382966/ShareCard_moshvp.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382966/ShareCard_moshvp.png" },
    ],
  }),
  component: Index,
});

function AboutPreview() {
  const [isHovered, setIsHovered] = useState(false);
  const [flippedImage, setFlippedImage] = useState<number | null>(null);
  const [cursor, setCursor] = useState<{ x: number; y: number; card: number | null }>({ x: 0, y: 0, card: null });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>, card: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top, card });
  };
  const onMouseLeave = () => setCursor(c => ({ ...c, card: null }));

  return (
    <Link
      to="/about"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block border-t border-border pt-16"
    >
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
        <div>
          <div className="mb-4 overflow-hidden h-6">
            <motion.div
              animate={{ y: isHovered ? -24 : 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="h-6 flex items-center label-mono text-muted-foreground">
                About
              </div>
              <div className="h-6 flex items-center label-mono text-ink">
                Learn more →
              </div>
            </motion.div>
          </div>
          <p className="text-lg leading-relaxed text-foreground/85 sm:text-xl max-w-2xl">
            I'm Milena — a designer based in Toronto. I work with tech brands across marketing: ads, websites, product videos, you name it. I'm drawn to the space between strategy and craft. The details that add delight and elegance, making a brand feel more expressive and memorable to the people experiencing it. <br /><br />When I'm not designing, you can find me planning my next hike, or buying the 50th cat toy for my cat{" "}
            <span className="relative inline-block group/merlin">
              <strong className="font-semibold">Merlin</strong>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-20 pointer-events-none opacity-0 scale-90 transition-all duration-200 ease-out group-hover/merlin:opacity-100 group-hover/merlin:scale-100 rotate-[5deg]">
                <div className="w-28 h-28 rounded-xl overflow-hidden shadow-lg">
                  <img src="https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382955/merlin_hover_inrjoz.png" alt="Merlin" className="w-full h-full object-cover" />
                </div>
              </div>
            </span>
            , who probably won't play with it anyway.
          </p>
        </div>

        <div className="relative h-[400px] lg:h-[420px]">
          {/* Card 1 */}
          <div
            className="absolute left-0 top-8 w-2/3 aspect-[3/4] cursor-pointer"
            style={{ perspective: "1200px", transform: "rotate(-6deg)", transformOrigin: "bottom left" }}
            onClick={(e) => { e.preventDefault(); setFlippedImage(flippedImage === 0 ? null : 0); }}
            onMouseMove={(e) => onMouseMove(e, 0)}
            onMouseLeave={onMouseLeave}
          >
            <motion.div
              className="relative w-full h-full rounded-2xl border border-border"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flippedImage === 0 ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <img src="https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382963/About02_Static_nqtf9b.png" alt="About" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <img src="https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382956/About02_Hover_ubz2gq.png" alt="About" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            {cursor.card === 0 && (
              <motion.div
                className="absolute z-20 label-mono text-[0.65rem] bg-ink text-background px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ left: cursor.x + 14, top: cursor.y + 14 }}
              >
                Click me!
              </motion.div>
            )}
          </div>

          {/* Card 2 */}
          <div
            className="absolute right-0 top-0 w-2/3 h-64 cursor-pointer"
            style={{ perspective: "1200px", transform: "rotate(6deg)", transformOrigin: "bottom right" }}
            onClick={(e) => { e.preventDefault(); setFlippedImage(flippedImage === 1 ? null : 1); }}
            onMouseMove={(e) => onMouseMove(e, 1)}
            onMouseLeave={onMouseLeave}
          >
            <motion.div
              className="relative w-full h-full rounded-2xl border border-border"
              style={{ transformStyle: "preserve-3d" }}
              animate={{ rotateY: flippedImage === 1 ? 180 : 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}>
                <img src="https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382943/About01_Static_klt8zn.png" alt="About" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden" style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
                <img src="https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382944/About01_Hover_u22inb.png" alt="About" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            {cursor.card === 1 && (
              <motion.div
                className="absolute z-20 label-mono text-[0.65rem] bg-ink text-background px-3 py-1.5 rounded-full pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                style={{ left: cursor.x + 14, top: cursor.y + 14 }}
              >
                Click me!
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

function Index() {
  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 pb-24 pt-12 lg:px-6 lg:pt-20 lg:pb-8">
        {/* Intro */}
        <section className="mb-14 animate-rise">
          <div className="mb-6 flex items-center gap-2 label-mono text-muted-foreground/70">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-black"></span>
            </span>
            <span>Currently at <a href="https://www.okta.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-70 transition-opacity">Okta</a></span>
          </div>
          <motion.h2
            className="font-display text-[2.7rem] leading-[1.05] tracking-tight sm:text-[3.4rem] lg:text-[4rem]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            Digital designer, animator, and builder of interactive things — shaping products from startup to enterprise
          </motion.h2>
        </section>

        {/* Work section */}
        <section className="mb-16 animate-rise">
<div className="space-y-4">
            {projects.map((p, i) => (
              <div key={p.slug} className="sticky" style={{ top: `${80 + i * 20}px` }}>
                <ProjectCard project={p} index={i} />
              </div>
            ))}
          </div>
        </section>

        {/* About Preview */}
        <div className="mt-32">
          <AboutPreview />
        </div>

        {/* Footer */}
        <footer className="mt-24 pb-6 lg:pb-0">
          <div className="space-y-3">
            <div className="label-mono text-muted-foreground/60">Get in touch</div>
            <a
              href="mailto:designbymilena@gmail.com"
              className="block font-display text-2xl underline decoration-border underline-offset-8 transition-all hover:decoration-ink"
            >
              designbymilena@gmail.com
            </a>
            <div className="label-mono text-muted-foreground/50">© 2026 Milena Kostyukov | Vibe coded with love ♡</div>
          </div>
        </footer>
      </div>
    </SiteLayout>
  );
}
