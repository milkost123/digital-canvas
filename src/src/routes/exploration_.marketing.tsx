import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/exploration_/marketing")({
  head: () => ({
    meta: [
      { title: "Food Over Drugs — Milena Kostyukov" },
      { name: "description", content: "Brand identity and marketing design for Food Over Drugs." },
      { property: "og:title", content: "Food Over Drugs — Milena Kostyukov" },
    ],
  }),
  component: Marketing,
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
  { label: "Tools", value: "Figma, Adobe Illustrator, Adobe InDesign, Adobe Photoshop, Klaviyo, Shopify" },
  { label: "Timeline", value: "2021 — 2023" },
];

function Marketing() {
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
              Food Over Drugs
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              Collaborated with the founder of Food Over Drugs to build out her brand&rsquo;s visual identity and market her herbal products across a range of digital and print touchpoints.
            </p>
            <a href="https://www.foodoverdrugs.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">
              foodoverdrugs.com <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </header>
        </FadeIn>

        <FadeIn delay={0.12}>
          <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/fod-cover-01_mh3ck5.jpg" alt="" className="mt-10 w-full h-auto rounded-[12px]" />
        </FadeIn>

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

        <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-20">

          <FadeInSection>
            <p className="font-display text-2xl tracking-tight sm:text-3xl">Consistent branding was key: the kind that builds recognition, earns customer loyalty, and drives sales over time.</p>
            <p className="mt-4 text-lg leading-relaxed text-foreground/80">Over my time working with Food Over Drugs, I designed 10+ email templates, Shopify product pages, a printed card deck now sold in 50+ stores across North America, social media content, product labels, packaging inserts, post-purchase customer cards, and recipe e-booklets.</p>
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/fod-image-01_nopufz.jpg" alt="" className="mt-6 w-full h-auto rounded-[12px]" />
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127974/fod-image-02_pnalgc.jpg" alt="" className="mt-4 w-full h-auto rounded-[12px]" />
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127975/fod-image-03_w2c2hd.jpg" alt="" className="mt-4 w-full h-auto rounded-[12px]" />
            <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127975/fod-image-04_s96s8b.jpg" alt="" className="mt-4 w-full h-auto rounded-[12px]" />
          </FadeInSection>

        </div>
      </article>
    </SiteLayout>
  );
}
