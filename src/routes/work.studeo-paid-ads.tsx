import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/work/studeo-paid-ads")({
  head: () => ({
    meta: [
      { title: "Selling luxury at scale — Milena Kostyukov" },
      { name: "description", content: "How a full-funnel creative framework drove Studeo's best-performing ad month ever with over $500K in revenue." },
      { property: "og:title", content: "Studeo Paid Ads — Milena Kostyukov" },
      { property: "og:description", content: "How a full-funnel creative framework drove Studeo's best-performing ad month ever with over $500K in revenue." },
    ],
  }),
  component: StudioPaidAds,
});

function FadeIn({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function FadeInSection({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

const scrollStages = [
  {
    key: "intro",
    label: null,
    heading: "Strategic Approach",
    body: "We built a full-funnel creative framework to guide messaging and visuals across the customer journey, and found ads performed best when they opened with a strong pain point and showed the product within the first six seconds.",
    formats: null,
    video: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783920440/portfolio/StrategicApproach_zudxmg.mp4",
  },
  {
    key: "tofu",
    label: "TOFU",
    heading: "Top of Funnel",
    body: "Elegant, high-end product introductions for luxury agents.",
    formats: "Winning formats: short looping videos, still images.",
    video: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783920437/portfolio/TOFU_Ads_tkz3iu.mp4",
  },
  {
    key: "mofu",
    label: "MOFU",
    heading: "Middle of Funnel",
    body: "Deeper feature dives paired with messaging around selling faster and standing out.",
    formats: "Winning formats: carousels, 10–30s video.",
    video: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783920439/portfolio/MOFU_Ads_kfsdyj.mp4",
  },
  {
    key: "bofu",
    label: "BOFU",
    heading: "Bottom of Funnel",
    body: "Customer testimonials and success stories creating social proof and exclusivity.",
    formats: "Winning formats: carousels, 10–30s video.",
    image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920280/portfolio/BOFU_Ads.png",
  },
];

function StrategicSection() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      const scrollable = container.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      const stage = Math.min(
        Math.floor(progress * scrollStages.length),
        scrollStages.length - 1
      );
      setActive(stage);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Tall container — creates scroll space for all 4 stages
    <div ref={containerRef} className="relative" style={{ height: `${scrollStages.length * 80}vh` }}>

      {/* Sticky panel — both columns lock to viewport while container scrolls */}
      <div className="sticky top-24 grid gap-8 lg:gap-16 lg:grid-cols-[35fr_65fr] lg:items-center">

        {/* Left: only active stage, crossfades on change */}
        <div className="relative min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              className="absolute inset-x-0 top-0"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.20 } }}
            >
              {scrollStages[active].label && (
                <span className="label-mono text-ink">{scrollStages[active].label}</span>
              )}
              <h3 className={`font-display text-2xl tracking-tight sm:text-3xl ${scrollStages[active].label ? "mt-2" : ""}`}>
                {scrollStages[active].heading}
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-foreground/80">
                {scrollStages[active].body}
              </p>
              {scrollStages[active].formats && (
                <p className="mt-2 label-mono text-muted-foreground">{scrollStages[active].formats}</p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: single image container, crossfades between stages */}
        <div className="relative aspect-[5/4] overflow-hidden rounded-[12px]" style={{ transform: "translateZ(0)" }}>
          <AnimatePresence mode="sync">
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.04, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.97, filter: "blur(4px)" }}
              transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            >
              {scrollStages[active].video
                ? <video src={scrollStages[active].video} className="w-full h-full object-contain block" autoPlay muted loop playsInline />
                : scrollStages[active].image
                  ? <img src={scrollStages[active].image} alt="" className="w-full h-full object-contain block" />
                  : <div className="w-full h-full bg-placeholder" />}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

function StudioPaidAds() {
  return (
    <SiteLayout>
      <article className="px-3 pb-20 pt-6 sm:px-10 sm:pb-32 lg:px-14 lg:pt-10">

        {/* Top nav */}
        <div className="flex items-center justify-between">
          <Link to="/work/$slug" params={{ slug: "studeo-brand" }} className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" />
            Studeo
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink">
            Home
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Title */}
        <FadeIn delay={0.05}>
          <header className="mt-8">
            <span className="label-mono text-muted-foreground">Studeo: Paid Ad Campaign Case Study</span>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Selling luxury at scale
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              I led creative strategy for paid ad campaigns targeting top-performing real estate agents, particularly in the luxury space, where branding and marketing investment is high.
            </p>
          </header>
        </FadeIn>

        {/* Hero image */}
        <FadeIn delay={0.12}>
          <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920277/portfolio/PaidAds_Hero_01.png" alt="" className="mt-10 w-full h-auto block rounded-[12px]" />
        </FadeIn>

        {/* Content sections */}
        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-16">

          {/* The Challenge + Creative Process — 2 col */}
          <FadeInSection>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">The Challenge</h3>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                  Our early ads struggled with unclear messaging that didn't resonate with the audience, visuals that felt off-brand or overly abstract, and a failure to establish product relevance early enough to hold attention.
                </p>
              </div>
              <div>
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Creative Process</h3>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                  Marketing provided briefs and base copy for each campaign; from there, the creative team developed all visual assets. I continually refined copy and visual direction (UI, color palette, stock imagery) to better align with audience insight and campaign concept, and optimized every ad for platform-specific formats across Meta and YouTube.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Strategic Approach — sticky scroll */}
          <FadeInSection>
            <StrategicSection />
          </FadeInSection>

          {/* Results — copy only */}
          <FadeInSection>
            <div>
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Results</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                In January 2025, 22% of our ads showed the product within the first six seconds, versus just 2% in lower-performing months, and that month became the highest-performing in company history, generating $500K in paid ad revenue.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                Our strongest creatives consistently balanced messaging across the full funnel, and that balance correlated directly with monthly deal volume. The shift to a full-funnel strategy led to a marked increase in both lead quality and lead volume.
              </p>
            </div>
          </FadeInSection>

          {/* Systems Design */}
          <FadeInSection>
            <div>
              <h3 className="font-display text-2xl tracking-tight sm:text-3xl">Systems Design</h3>
              <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                We were testing a lot of new visual approaches, but the team didn't want to stray from our brand voice, especially having just gone through a rebrand, where staying recognizable across social channels mattered.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-[80fr_20fr] sm:items-stretch">
              <div className="overflow-hidden rounded-[12px]">
                <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920277/portfolio/PaidAds_Systems_02.png" alt="" className="w-full h-full object-cover block" />
              </div>
              <div className="hidden sm:block overflow-hidden rounded-[12px]">
                <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920274/portfolio/PaidAds_Systems_03.png" alt="" className="w-full h-full object-cover block" />
              </div>
            </div>
            <p className="mt-2 label-mono text-foreground/50">Example of ad campaigns exploring different visual approaches and applying our secondary / tertiary brand colours</p>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div className="overflow-hidden rounded-[12px]">
                <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920509/portfolio/Studeo_PaidAds_Systems01_wasisv.png" alt="Systems Design" className="w-full h-auto block" />
              </div>
              <div>
                <p className="text-lg leading-relaxed text-foreground/80">
                  I built out a templated system for our paid ads and social posts across Figma and Canva: a range of formats (square, vertical, horizontal), each with multiple layout options and text placeholders that stayed true to the rest of our work.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-foreground/80">
                  Designers could mix and match from a defined color library; we'd already mapped out which color pairings performed strongest in paid placements versus which didn't, so the team could move quickly and test freely without ever drifting off-brand. I also organized each ad grouping by its hook and positioning so that it was easy for our marketing team to organize and set up campaigns once visual assets were handed off.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Results image */}
          <FadeInSection>
            <div className="overflow-hidden rounded-[12px]">
              <img src="https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783920277/portfolio/Studeo_PaidAds_Systems03.png" alt="" className="w-full h-auto block" />
            </div>
          </FadeInSection>

        </div>

        {/* Back to portfolio */}
        <FadeIn>
          <div className="mt-28 border-t border-border pt-10">
            <span className="label-mono text-muted-foreground">Back to work</span>
            <Link to="/" className="group mt-3 flex items-end justify-between gap-6">
              <span className="font-display text-3xl font-medium tracking-tight sm:text-5xl">All projects</span>
              <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

      </article>
    </SiteLayout>
  );
}
