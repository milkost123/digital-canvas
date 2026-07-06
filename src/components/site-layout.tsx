import { Link, useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { NowWidget } from "@/components/now-widget";
import { ScrambleText } from "@/components/scramble-text";

const NAV = [
  { to: "/", label: "Work", match: ["/", "/work"] },
  { to: "/about", label: "About", match: ["/about"] },
  { to: "/resume", label: "Resume", match: ["/resume"] },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground lg:flex">
      {/* Left rail */}
      <aside className="hidden w-80 shrink-0 border-r border-border lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-between p-10">
          <div className="space-y-12">
            <Link to="/" className="block space-y-1">
              <h1 className="font-display text-4xl leading-none tracking-tight">
                Milena Kostyukov
              </h1>
              <p className="label-mono text-muted-foreground/70">
                <ScrambleText text="digital + brand designer" />
              </p>
            </Link>

            <AnimatePresence>
              {pathname.startsWith("/about") && (
                <motion.div
                  key="now-widget"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NowWidget />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <nav className="flex flex-col gap-4">
            {NAV.map((item) => {
              const active = item.match.some((m) =>
                m === "/" ? pathname === "/" || pathname.startsWith("/work") : pathname.startsWith(m),
              );
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`font-display text-xl transition-transform duration-300 hover:translate-x-1 ${
                    active ? "text-ink" : "text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="font-display text-lg">Milena Kostyukov</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-foreground hover:text-ink"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-border bg-background px-5 py-6">
            <div className="flex flex-col gap-4">
              {NAV.map((item) => {
                const active = item.match.some((m) =>
                  m === "/" ? pathname === "/" || pathname.startsWith("/work") : pathname.startsWith(m),
                );
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-display text-xl transition-transform duration-300 hover:translate-x-1 ${
                      active ? "text-ink" : "text-foreground"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <div className="min-w-0 flex-1">
        <main>{children}</main>
      </div>
    </div>
  );
}
