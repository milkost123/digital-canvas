import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { Linkedin } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Milena Kostyukov" },
      { name: "description", content: "Resume of Milena Kostyukov." },
      { property: "og:title", content: "Resume — Milena Kostyukov" },
      { property: "og:description", content: "Resume of Milena Kostyukov." },
      { property: "og:image", content: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661571/portfolio/ShareCard.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661571/portfolio/ShareCard.png" },
    ],
  }),
  component: Resume,
});

function Row({ year, title, org, tag, bullets }: { year: string; title: string; org: string; tag?: string; bullets?: string[] }) {
  return (
    <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div className="label-mono text-muted-foreground">{year}</div>
      <div>
        <div className="font-display text-lg" style={{ letterSpacing: "0" }}>{title}</div>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-sm text-foreground/70">{org}</span>
          {tag && <span className="label-mono text-[0.58rem] px-2 py-0.5 rounded-full border border-border text-muted-foreground/60">{tag}</span>}
        </div>
        {bullets && (
          <ul className="mt-3 space-y-1.5 text-lg text-foreground/75">
            {bullets.map((b) => <li key={b}>— {b}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

function Resume() {
  return (
    <SiteLayout>
      <motion.div
        className="mx-auto max-w-4xl px-5 pb-32 pt-6 sm:px-10 lg:px-14 lg:pt-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <header>
          <div>
            <span className="label-mono text-muted-foreground">Resume</span>
            <h1 className="mt-3 font-display text-5xl font-medium tracking-tight sm:text-6xl">Milena Kostyukov</h1>
            <p className="mt-1 label-mono text-foreground/70">Digital and Brand Designer</p>
          </div>
        </header>

        <section className="mt-14">
          <h2 className="label-mono text-ink">Experience</h2>
          <div className="mt-4">
            <Row
              year="Oct 2025 — Present"
              title="Sr. Designer, Digital"
              org="Okta"
              tag="Enterprise SaaS"
              bullets={[
                "Leading motion and interaction design across Okta and Auth0's web experiences, translating product UI into animated moments for brand, product, and campaign touchpoints.",
                "Built custom internal design tools with Claude Code and Lovable to speed up creative production, including a 3D animation tool that exports web-compatible motion graphics for brand icons and campaign visuals.",
              ]}
            />
            <Row
              year="Nov 2022 — Sep 2025"
              title="Sr. Marketing Designer"
              org="Studeo"
              tag="Startup SaaS"
              bullets={[
                "Responsible for the visual ideation and execution of dynamic performance ads, crafting storyboards and delivering high-quality animated creative for effective MQL generation.",
                "Directed and produced over 4 product reels, one of which became the site's most-clicked element, engaging 34% of 22.4K visitors and driving awareness and lead generation across web and paid channels.",
              ]}
            />
            <Row
              year="Jun 2024 — May 2025"
              title="Founding Designer"
              org="Malleable"
              tag="Startup SaaS"
              bullets={[
                "Built the visual foundation for an innovative sales technology platform.",
                "Directed design efforts, created user-friendly experiences in the app, and developed a consistent look across digital channels.",
                "Drove marketing campaigns, shaped brand identity, and communicated the product story through website design and advertising materials.",
              ]}
            />
            <Row
              year="May 2021 — Jun 2023"
              title="Lead Graphic Designer"
              org="Food Over Drugs"
              tag="E-commerce"
              bullets={[
                "Conducted brand research, communication strategies, designing and executing Shopify e-commerce pages, email marketing, presentation design, and social media.",
              ]}
            />
          </div>
        </section>

        <section className="mt-14">
          <h2 className="label-mono text-ink">Tools and Skills</h2>
          <div className="mt-4 grid grid-cols-3 gap-x-8 gap-y-2 text-lg text-foreground/85">
            {[
              "Adobe Creative Suite", "Ad Design", "Web Design",
              "Motion Design", "A/B Testing", "Animation",
              "Figma", "Claude Code / Lovable", "Copywriting",
              "Email Marketing", "Brand Identity", "Art Direction",
              "HTML/CSS", "Paid Social (Meta, LinkedIn)", "Design Systems",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <footer className="mt-16 flex flex-wrap items-center justify-between gap-3 label-mono text-muted-foreground">
          <span>designbymilena@gmail.com</span>
          <a
            href="https://www.linkedin.com/in/milenakostyukov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-ink transition-colors"
          >
            <Linkedin className="h-3.5 w-3.5" />
            milenakostyukov
          </a>
        </footer>
      </motion.div>
    </SiteLayout>
  );
}
