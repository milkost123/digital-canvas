import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/exploration_/3d")({
  head: () => ({
    meta: [
      { title: "Breathe Deeply — Milena Kostyukov" },
      { name: "description", content: "An immersive website pairing breathwork with animated natural environments." },
      { property: "og:title", content: "Breathe Deeply — Milena Kostyukov" },
    ],
  }),
  component: ThreeD,
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
  { label: "Tools", value: "Blender, Cinema 4D, Figma" },
  { label: "Timeline", value: "2022" },
];

function ThreeD() {
  return (
    <SiteLayout>
      <article className="px-3 pb-20 pt-6 sm:px-10 sm:pb-32 lg:px-14 lg:pt-10">
        <Link to="/exploration" data-cursor="hover" className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink">
          <ArrowLeft className="h-3.5 w-3.5" />
          Exploration
        </Link>

        {/* Title */}
        <FadeIn delay={0.05}>
          <header className="mt-8">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Breathe Deeply
            </h1>
<p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              An immersive website that pairs breathwork exercises with animated natural environments and soundscapes, designed as a capstone project to make breathwork more accessible and understandable for novice meditators.
            </p>
          </header>
        </FadeIn>

        {/* Hero */}
        <FadeIn delay={0.12}>
          <video src="https://res.cloudinary.com/dxi9ogwbq/video/upload/v1785127974/breathe-deeply-03_tdj9xv.mp4" className="mt-10 w-full h-auto rounded-[12px]" autoPlay muted loop playsInline />
        </FadeIn>

        {/* Meta */}
        <FadeIn delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8">
            {meta.map((m) => (
              <div key={m.label}>
                <div className="label-mono text-ink">{m.label}</div>
                <div className="mt-2 text-base leading-relaxed text-foreground/85">{m.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Sections */}
        <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-20">

          <FadeInSection>
            <h3 className="label-mono text-muted-foreground">Research</h3>
            <p className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">The wellness market is bursting with opportunity.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">My personal interest in breathwork therapy led me to a three-month research phase, reading medical papers, articles, and books on its origins, techniques, and effects. I also studied top competitors in the meditation and wellness space, testing their products and mapping out UX and visual design patterns to identify what a strong MVP could look like.</p>
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127973/breathe-deeply-02_sjjesk.jpg" alt="" className="mt-6 w-full h-auto rounded-[12px]" />
          </FadeInSection>

          <FadeInSection>
            <h3 className="label-mono text-muted-foreground">Challenges</h3>
            <p className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">Tackling a technology I had no experience with.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">Breathe Deeply was my first project incorporating 3D design. I taught myself how to model and animate each scene, including soft-body animation, which proved to be the most time-consuming and technically demanding part of the project. I built smaller practice scenes and worked through tutorials to build the skill before tackling the real thing, though the learning curve pushed my original timeline.</p>
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/breathe-deeply-03_u8abez.png" alt="" className="mt-6 w-full h-auto rounded-[12px]" />
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/breathe-deeply-04_nlhie1.png" alt="" className="mt-4 w-full h-auto rounded-[12px]" />
            <div className="mt-4 w-full aspect-video rounded-[12px] overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/te2suX2kGag?autoplay=1&mute=1&loop=1&playlist=te2suX2kGag&controls=1&rel=0&disablekb=1&modestbranding=1"
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </FadeInSection>


        </div>
      </article>
    </SiteLayout>
  );
}
