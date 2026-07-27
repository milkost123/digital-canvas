import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { SiteLayout } from "@/components/site-layout";
import { getNextProject, getProject, projects } from "@/lib/projects";

export const Route = createFileRoute("/work/$slug")({
  head: ({ params }) => {
    const p = getProject(params.slug);
    const title = p ? `${p.title} — Milena Kostyukov` : "Project — Milena Kostyukov";
    const desc = p?.tagline ?? "Case study.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661571/portfolio/ShareCard.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661571/portfolio/ShareCard.png" },
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: WorkDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="px-10 py-20">
        <p className="label-mono text-muted-foreground">Project not found</p>
        <Link to="/" className="mt-4 inline-block font-display text-3xl">← Back to work</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ error }) => (
    <SiteLayout>
      <div className="px-10 py-20 font-mono text-sm">{error.message}</div>
    </SiteLayout>
  ),
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

function Slideshow({ slides }: { slides: string[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIndex(i => (i + 1) % slides.length);
  return (
    <div className="relative w-full overflow-hidden rounded-[12px] group">
      <img src={slides[index]} alt="" className="w-full h-auto block" />
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60">
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/60">
        <ArrowRight className="h-4 w-4" />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-4 bg-white" : "w-1.5 bg-white/50"}`}
          />
        ))}
      </div>
    </div>
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

function AnimatedStat({ value, index }: { value: string; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        className="font-display text-4xl font-medium tracking-tight sm:text-5xl"
        initial={{ y: "110%" }}
        animate={isInView ? { y: "0%" } : { y: "110%" }}
        transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      >
        {value}
      </motion.div>
    </div>
  );
}

function CardPreview({ project }: { project: import("@/lib/projects").Project }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-[12px] aspect-[4/3] cursor-pointer"
      style={{
        backgroundColor: project.bg,
        backgroundImage: project.cardBg ? `url(${project.cardBg})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      whileHover="hover"
    >
      {project.cardImage && (
        <div className="absolute bottom-0 right-0 w-full translate-x-[12%]">
          <motion.img
            src={project.cardImage}
            alt={project.title}
            className="w-full h-auto block"
            style={{
              translateY: `calc(10% + ${project.cardImageOffsetY ?? 0}px)`,
              transformOrigin: "bottom center",
            }}
            variants={{ hover: { rotate: 5 } }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      )}
    </motion.div>
  );
}

function WorkDetail() {
  const { project } = Route.useLoaderData() as { project: import("@/lib/projects").Project };
  const next = getNextProject(project.slug);

  return (
    <SiteLayout>
      <article className="px-3 pb-20 pt-6 sm:px-10 sm:pb-32 lg:px-14 lg:pt-10">
        {/* Top nav: Home / Next project */}
        <div className="flex items-center justify-between">
          <Link to="/" data-cursor="hover" className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink">
            <ArrowLeft className="h-3.5 w-3.5" />
            Home
          </Link>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            data-cursor="hover"
            className="inline-flex items-center gap-2 label-mono text-muted-foreground hover:text-ink"
          >
            Next project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Title + subhead */}
        <FadeIn delay={0.05}>
          <header className="mt-8">
            <h1 className="max-w-3xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60 sm:text-xl">
              {project.narrative}
            </p>
          </header>
        </FadeIn>

        {/* Hero */}
        <FadeIn delay={0.12}>
          {project.heroVideo ? (
            <video src={project.heroVideo} className="mt-10 w-full h-auto rounded-[12px]" autoPlay muted loop playsInline preload="auto" />
          ) : project.heroImage ? (
            <img src={project.heroImage} alt={project.title} className="mt-10 w-full h-auto rounded-[12px]" />
          ) : (
            <div className="mt-10 aspect-[16/8] w-full rounded-[12px] bg-placeholder" />
          )}
        </FadeIn>

        {/* Meta columns */}
        <FadeIn delay={0.08}>
          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4">
            {[
              { label: "Role", value: project.role },
              { label: "Team", value: project.team },
              { label: "Timeline", value: project.timeline },
              ...(project.tools ? [{ label: "Tools", value: project.tools }] : []),
            ].map((m) => (
              <div key={m.label}>
                <div className="label-mono text-ink">{m.label}</div>
                <div className="mt-2 text-base leading-relaxed text-foreground/85">{m.value}</div>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Stat groups */}
        {project.statGroups && !project.hideStatGroups && (
          <div className="mt-14 space-y-12">
            {project.statGroups.map((group) => (
              <div key={group.title}>
                <h3 className="label-mono text-muted-foreground mb-6">{group.title}</h3>
                <div className="border-t border-border">
                  <div className="grid pt-5" style={{ gridTemplateColumns: `repeat(${group.stats.length}, 1fr)` }}>
                    {group.stats.map((s, i) => (
                      <AnimatedStat key={s.value} value={s.value} index={i} />
                    ))}
                  </div>
                  <div className="grid pt-[15px] pb-5" style={{ gridTemplateColumns: `repeat(${group.stats.length}, 1fr)` }}>
                    {group.stats.map((s) => (
                      <div key={s.label} className="text-base text-foreground/75 pr-6">{s.label}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Overview statement */}
        {project.overview && (
          <FadeIn>
            <p className="mt-12 font-display text-[40px] leading-snug tracking-tight lg:mt-16">{project.overview}</p>
          </FadeIn>
        )}

        {/* Content sections */}
        <div className="mt-12 space-y-12 lg:mt-20 lg:space-y-20">
          {project.sections.map((s, i) => (
            <FadeInSection key={s.heading} className={s.tightTop ? "-mt-8 lg:-mt-12" : undefined}>
              {/* Full-width copy (no col grid) */}
              {s.noCols ? (
                <div className="mb-6">
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{s.heading}</h3>
                  {s.body.split("\n\n").map((para, pi) =>
                    para.startsWith("• ")
                      ? <p key={pi} className="mt-2 flex gap-2 text-lg leading-relaxed text-foreground/80"><span aria-hidden>•</span><span>{para.slice(2)}</span></p>
                      : <p key={pi} className="mt-4 text-lg leading-relaxed text-foreground/80">{para}</p>
                  )}
                  {(s.link || s.link2) && (
                    <div className="mt-4 flex flex-row gap-2">
                      {s.link && (
                        s.link.startsWith("/")
                          ? <Link to={s.link} className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">{s.linkLabel ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" /></Link>
                          : <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">{s.linkLabel ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" /></a>
                      )}
                      {s.link2 && (
                        <a href={s.link2} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">
                          {s.linkLabel2 ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : null}
              {/* Break media above col layout when breakTop is set */}
              {s.breakTop && (
                <div className="mb-6">
                  {s.breakSlides
                    ? <Slideshow slides={s.breakSlides} />
                    : <div className="overflow-hidden rounded-[12px]">
                        {s.breakVideo
                          ? <video src={s.breakVideo} className="w-full h-auto block" autoPlay muted loop playsInline preload="metadata" />
                          : s.breakImage
                            ? <img src={s.breakImage} alt="" className="w-full h-auto block" />
                            : <div className="aspect-[16/8] w-full bg-placeholder" />}
                      </div>}
                </div>
              )}
              {/* Copy + section image: side-by-side on desktop, copy→image on mobile */}
              {!s.noCols && <div className="grid gap-6 lg:grid-cols-[1.7fr_1.7fr] lg:items-center lg:gap-16">
                <div className={`order-last ${(s.flipCols ? i % 2 === 0 : i % 2 === 1) ? "lg:order-2" : "lg:order-none"}`}>
                  {s.cardPreview ? (
                    <CardPreview project={project} />
                  ) : (
                    <div className="overflow-hidden rounded-[12px]">
                      {s.video ? (
                        <video src={s.video} className="w-full h-auto block" autoPlay muted loop playsInline preload="metadata" />
                      ) : s.image ? (
                        <img src={s.image} alt={s.heading} className="w-full h-auto block" />
                      ) : (
                        <div className="aspect-[4/3] w-full bg-placeholder" aria-label="Image placeholder" />
                      )}
                    </div>
                  )}
                </div>
                <div className={`order-first ${(s.flipCols ? i % 2 === 0 : i % 2 === 1) ? "lg:order-1" : "lg:order-none"}`}>
                  <h3 className="font-display text-2xl tracking-tight sm:text-3xl">{s.heading}</h3>
                  {s.body.split("\n\n").map((para, pi) =>
                    para.startsWith("• ")
                      ? <p key={pi} className="mt-2 flex gap-2 text-lg leading-relaxed text-foreground/80"><span aria-hidden>•</span><span>{para.slice(2)}</span></p>
                      : <p key={pi} className="mt-4 text-lg leading-relaxed text-foreground/80">{para}</p>
                  )}
                  {(s.link || s.link2) && (
                    <div className="mt-4 flex flex-row gap-2">
                      {s.link && (
                        s.link.startsWith("/")
                          ? <Link to={s.link} className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">{s.linkLabel ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" /></Link>
                          : <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">{s.linkLabel ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" /></a>
                      )}
                      {s.link2 && (
                        <a href={s.link2} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 label-mono text-ink hover:opacity-70 transition-opacity">
                          {s.linkLabel2 ?? "View"} <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>}
              {/* 3-image grid: 2 stacked left, 1 tall right */}
              {s.breakGrid3 && (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch">
                  <div className="flex flex-col gap-4">
                    {s.breakImage && <div className="overflow-hidden rounded-[12px]"><img src={s.breakImage} alt="" className="w-full h-auto block" /></div>}
                    {s.breakImage2 && <div className="overflow-hidden rounded-[12px]"><img src={s.breakImage2} alt="" className="w-full h-auto block" /></div>}
                  </div>
                  {s.breakImage3 && (
                    <div className="overflow-hidden rounded-[12px]">
                      <img src={s.breakImage3} alt="" className="w-full h-full object-cover block" />
                    </div>
                  )}
                </div>
              )}
              {/* Break media */}
              {!s.breakGrid3 && s.breakSplit ? (
                <div className="mt-4 space-y-4">
                  {/* Row 1: stacks on mobile, 30/70 split on desktop */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-[30fr_70fr] sm:items-stretch">
                    <div className="aspect-video overflow-hidden rounded-[12px] sm:aspect-auto">
                      {s.breakVideo
                        ? <video src={s.breakVideo} className="w-full h-full object-cover block" autoPlay muted loop playsInline preload="metadata" />
                        : s.breakImage
                          ? <img src={s.breakImage} alt="" className="w-full h-full object-cover block" />
                          : <div className="w-full h-full bg-placeholder" />}
                    </div>
                    <div className="aspect-video overflow-hidden rounded-[12px]">
                      {s.breakVideo2
                        ? <video src={s.breakVideo2} className="w-full h-full aspect-video object-cover block" autoPlay muted loop playsInline preload="metadata" />
                        : <div className="w-full h-full bg-placeholder" />}
                    </div>
                  </div>
                  {/* Row 2: stacks on mobile, 70/30 split on desktop */}
                  {(s.breakVideo3 || s.breakImage3 || s.breakImage4 || (s.breakPlaceholders && s.breakPlaceholders >= 2)) && (
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-[70fr_30fr] sm:items-stretch">
                      <div className="aspect-video overflow-hidden rounded-[12px]">
                        {s.breakVideo3
                          ? <video src={s.breakVideo3} className="w-full h-full aspect-video object-cover block" autoPlay muted loop playsInline preload="metadata" />
                          : s.breakImage3
                            ? <img src={s.breakImage3} alt="" className="w-full h-full object-cover block" />
                            : <div className="w-full h-full bg-placeholder" />}
                      </div>
                      <div className="aspect-video overflow-hidden rounded-[12px] sm:aspect-auto">
                        {s.breakImage4
                          ? <img src={s.breakImage4} alt="" className="w-full h-full object-cover block" />
                          : <div className="w-full h-full bg-placeholder" />}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  {s.breakSideBySide && (
                    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-[65fr_35fr] sm:items-stretch">
                      <div className="overflow-hidden rounded-[12px]">
                        {s.breakImage
                          ? <img src={s.breakImage} alt="" className="w-full h-auto block" />
                          : <div className="aspect-[4/3] w-full bg-placeholder" />}
                      </div>
                      <div className="overflow-hidden rounded-[12px] sm:self-stretch">
                        {s.breakImage2
                          ? <img src={s.breakImage2} alt="" className="w-full h-full object-cover block" />
                          : <div className="w-full h-full bg-placeholder" />}
                      </div>
                    </div>
                  )}
                  {!s.breakTop && s.breakSlides && (
                    <div className="mt-4">
                      <Slideshow slides={s.breakSlides} />
                    </div>
                  )}
                  {!s.breakSideBySide && !s.breakTop && (s.breakImage || s.breakVideo) && (
                    <div className="mt-4">
                      <div className="overflow-hidden rounded-[12px]">
                        {s.breakVideo
                          ? <video src={s.breakVideo} className="w-full h-auto block" autoPlay muted loop playsInline preload="metadata" />
                          : <img src={s.breakImage} alt="" className="w-full h-auto block" />}
                      </div>
                      {s.breakImageCaption && (
                        <p className="mt-2 label-mono text-foreground/50">{s.breakImageCaption}</p>
                      )}
                    </div>
                  )}
                  {s.breakVideo2 && (
                    <div className="mt-4 overflow-hidden rounded-[12px]">
                      <video src={s.breakVideo2} className="w-full h-auto block" autoPlay muted loop playsInline preload="metadata" />
                    </div>
                  )}
                  {!s.breakSideBySide && s.breakImage2 && (
                    <div className="mt-4 overflow-hidden rounded-[12px]">
                      <img src={s.breakImage2} alt="" className="w-full h-auto block" />
                    </div>
                  )}
                  {s.breakPlaceholders && Array.from({ length: s.breakPlaceholders }).map((_, pi) => (
                    <div key={pi} className="mt-4 aspect-[16/8] w-full rounded-[12px] bg-placeholder" />
                  ))}
                  {s.breakSideBySide2 && (
                    <div className="mt-4">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[65fr_35fr] sm:items-stretch">
                        <div className="overflow-hidden rounded-[12px]">
                          {s.breakImage3
                            ? <img src={s.breakImage3} alt="" className="w-full h-auto block" />
                            : <div className="aspect-[4/3] w-full bg-placeholder" />}
                        </div>
                        <div className="overflow-hidden rounded-[12px] sm:self-stretch">
                          {s.breakImage4
                            ? <img src={s.breakImage4} alt="" className="w-full h-full object-cover block" />
                            : <div className="w-full h-full bg-placeholder" />}
                        </div>
                      </div>
                      {s.breakSideBySide2Caption && (
                        <p className="mt-2 label-mono text-foreground/50">{s.breakSideBySide2Caption}</p>
                      )}
                    </div>
                  )}
                </>
              )}
            </FadeInSection>
          ))}
        </div>

        {/* End image */}
        {project.endImage && (
          <div className="mt-6">
            <div className="overflow-hidden rounded-[12px]">
              <img src={project.endImage} alt="" className="w-full h-auto block" />
            </div>
            {project.endImageCaption && (
              <p className="mt-2 label-mono text-foreground/50">{project.endImageCaption}</p>
            )}
          </div>
        )}

        {/* Next */}
        <FadeIn>
        <div className="mt-28 border-t border-border pt-10">
          <span className="label-mono text-muted-foreground">Next project</span>
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            data-cursor="hover"
            className="group mt-3 flex items-end justify-between gap-6"
          >
            <span className="font-display text-3xl font-medium tracking-tight sm:text-5xl">{next.title}</span>
            <ArrowUpRight className="h-8 w-8 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>

          <div className="mt-10 flex gap-2 label-mono text-muted-foreground">
            {projects.map((p) => (
              <span key={p.slug} className={p.slug === project.slug ? "text-ink" : ""}>
                {String(projects.indexOf(p) + 1).padStart(2, "0")}
              </span>
            ))}
          </div>
        </div>
        </FadeIn>
      </article>
    </SiteLayout>
  );
}
