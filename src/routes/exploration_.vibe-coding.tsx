import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/exploration_/vibe-coding")({
  head: () => ({
    meta: [
      { title: "3D Export Tool — Milena Kostyukov" },
      { name: "description", content: "A 3D object rendering export tool built with Claude Code for Okta's design team." },
      { property: "og:title", content: "3D Export Tool — Milena Kostyukov" },
    ],
  }),
  component: VibeCoding,
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

function VibeCoding() {
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
              3D Export Tool
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              Designed and built a 3D object rendering export tool using Claude Code to turn Okta&rsquo;s values icons into animated 3D renders for the Company page.
            </p>
          </header>
        </FadeIn>

        {/* Hero */}
        <FadeIn delay={0.12}>
          <video src="https://res.cloudinary.com/dxi9ogwbq/video/upload/v1785127972/3D-Icon-Cover_zpbuss.mp4" className="mt-10 w-full h-auto rounded-[12px]" autoPlay muted loop playsInline />
        </FadeIn>

        {/* Meta */}
        <FadeIn delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8">
            <div>
              <div className="label-mono text-ink">Tools</div>
              <div className="mt-2 text-base leading-relaxed text-foreground/85">Claude Code, React, Three.js</div>
            </div>
            <div>
              <div className="label-mono text-ink">Timeline</div>
              <div className="mt-2 text-base leading-relaxed text-foreground/85">2026</div>
            </div>
          </div>
        </FadeIn>

        {/* Sections */}
        <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-20">

          <FadeInSection>
            <h3 className="label-mono text-muted-foreground">Background</h3>
            <p className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">Adding depth to a lean digital team.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">Okta&rsquo;s digital design team is small and fast-moving. I was brought on to push the interactivity and motion on the web side, and one of the first things I saw was an opportunity to bring more 3D animation into our work without depending on external tools like Spline or handing things off to engineers.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">I wanted to build something our designers could actually use themselves: a self-contained tool that lives internally and puts 3D animation within reach without a steep technical learning curve.</p>
          </FadeInSection>

          <FadeInSection>
            <h3 className="label-mono text-muted-foreground">The Tool</h3>
            <p className="mt-4 font-display text-2xl tracking-tight sm:text-3xl">From icon to animated 3D render, in-browser.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">Built with Claude Code, the tool lets you set up a 3D scene from scratch: upload an OBJ file or a PNG to convert into a 3D object, adjust its texture and colours, and layer in a gradient ramp for more visual depth. From there, you configure the recording: set the export ratio, control playback speed, dial in animation behaviour like bounce, and choose your background. Export as a solid colour, custom image, or fully transparent video for flexible use across web.</p>
            <video src="https://res.cloudinary.com/dxi9ogwbq/video/upload/v1785127973/3D-Icon-Depth_h1zqpa.mp4" className="mt-6 w-full h-auto rounded-[12px]" autoPlay muted loop playsInline />
          </FadeInSection>

        </div>
      </article>
    </SiteLayout>
  );
}
