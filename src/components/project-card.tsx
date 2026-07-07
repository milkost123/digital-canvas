import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");
  const category = project.tags[0] ?? "Project";
  const isDark = project.bg === "#0A0A14";
  const textColor = isDark ? "text-white" : "text-black";
  const mutedColor = isDark ? "text-white" : "text-black";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.2, 0.8, 0.2, 1] }}
    >
      <Link to="/work/$slug" params={{ slug: project.slug }} className="group block">
        <div
          className="relative overflow-hidden rounded-3xl border border-border xl:min-h-[456px]"
          style={{
            backgroundColor: project.bg,
            backgroundImage: project.cardBg ? `url(${project.cardBg})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* ── Mobile layout: flex column ── */}
          <div className="flex flex-col xl:hidden">
            {(project.cardImageStacked ?? project.cardImage) && (
              <div className="w-full overflow-hidden pt-6 px-6">
                <img
                  src={project.cardImageStacked ?? project.cardImage}
                  alt={project.title}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            )}
            <div className="flex flex-col gap-2 p-8 pt-10">
              <span className={`label-mono text-[0.62rem] ${mutedColor}`}>{num} — {category}</span>
              <h2 className={`font-display text-3xl leading-[0.99] ${textColor}`}>{project.title}</h2>
              <p className={`text-base leading-[1.46] mt-1 ${mutedColor}`}>{project.tagline}</p>
            </div>
          </div>

          {/* ── Desktop layout: absolute positioned ── */}
          <motion.div className="hidden xl:block" whileHover="hover">
            {/* Top label row */}
            <div className="absolute top-0 left-0 right-0 flex items-center p-10 z-10">
              <div className="relative overflow-hidden h-[0.8rem]">
                <motion.span
                  className={`label-mono text-[0.62rem] leading-none ${mutedColor} block`}
                  variants={{ hover: { y: "-110%" } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {num} — {category}
                </motion.span>
                <motion.span
                  className={`label-mono text-[0.62rem] leading-none ${mutedColor} absolute inset-0 block`}
                  initial={{ y: "110%" }}
                  variants={{ hover: { y: "0%" } }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  View ↗
                </motion.span>
              </div>
            </div>

            {/* Bottom-left text */}
            <div className="absolute bottom-0 left-0 p-10 z-10 flex flex-col gap-3" style={{ maxWidth: "440px" }}>
              <h2 className={`font-display text-5xl leading-[0.99] ${textColor}`} style={{ textWrap: "balance" }}>{project.title}</h2>
              <p className={`text-lg leading-[1.46] mt-1 ${mutedColor}`}>{project.tagline}</p>
            </div>

            {/* Bottom-right image */}
            {project.cardImage && (
              <div className="absolute bottom-0 right-0 w-[58%] translate-x-[12%]">
                <motion.img
                  src={project.cardImage}
                  alt={project.title}
                  className="w-full h-auto block"
                  style={{ translateY: `calc(10% + ${project.cardImageOffsetY ?? 0}px)`, transformOrigin: "bottom center" }}
                  variants={{ hover: { rotate: 5 } }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            )}
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}
