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
      { property: "og:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/v1783382966/ShareCard_moshvp.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://res.cloudinary.com/n72bnmrl/image/upload/v1783382966/ShareCard_moshvp.png" },
    ],
  }),
  component: Resume,
});

function Row({ year, title, org, bullets }: { year: string; title: string; org: string; bullets?: string[] }) {
  return (
    <div className="grid gap-3 border-b border-border py-6 sm:grid-cols-[160px_1fr] sm:gap-8">
      <div className="label-mono text-muted-foreground">{year}</div>
      <div>
        <div className="font-display text-lg" style={{ letterSpacing: "0" }}>{title}</div>
        <div className="text-sm text-foreground/70">{org}</div>
        {bullets && (
          <ul className="mt-3 space-y-1.5 text-sm text-foreground/75">
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
            <p className="mt-3 text-foreground/70">Digital and Brand Designer</p>
          </div>
        </header>

        <section className="mt-14">
          <h2 className="label-mono text-accent">Experience</h2>
          <div className="mt-4">
            <Row
              year="Oct 2025 — Present"
              title="Sr. Designer, Digital"
              org="Okta"
              bullets={[
                "Leading animation and visual design across Okta.com and Auth0.com.",
              ]}
            />
            <Row
              year="Nov 2022 — Sep 2025"
              title="Sr. Marketing Designer"
              org="Studeo"
              bullets={[
                "Drove creative across marketing and product, creating animations, graphics, and visual design for web, social, email, and campaigns.",
              ]}
            />
            <Row
              year="Jun 2024 — May 2025"
              title="Founding Designer"
              org="Malleable"
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
              bullets={[
                "Conducted brand research, communication strategies, designing and executing Shopify e-commerce pages, email marketing, presentation design, and social media.",
              ]}
            />
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
