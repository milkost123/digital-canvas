import { t as SiteLayout } from "./site-layout-BHWM2CC0.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
var experience = [
	{
		year: "2024 —",
		role: "Senior Product Designer",
		org: "Okta"
	},
	{
		year: "2021 — 2024",
		role: "Product Designer",
		org: "Independent / Studio work"
	},
	{
		year: "2019 — 2021",
		role: "Interaction Designer",
		org: "Boutique design studio"
	}
];
var skills = [
	"Motion design",
	"Interaction design",
	"Prototyping",
	"Design systems",
	"Figma",
	"Rive",
	"After Effects",
	"Framer",
	"React",
	"Motion / GSAP"
];
var now = [
	"Building a motion system at Okta",
	"Writing about restraint in interface motion",
	"Reading: Form & Code, John Maeda",
	"Listening to: long ambient mixes while prototyping"
];
function About() {
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "px-5 pb-32 pt-6 sm:px-10 lg:px-14 lg:pt-10",
		children: [
			/* @__PURE__ */ jsxs("header", {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ jsx("span", {
					className: "label-mono text-muted-foreground",
					children: "About"
				}), /* @__PURE__ */ jsx("h1", {
					className: "mt-3 font-display text-5xl font-medium leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl",
					children: "A designer working at the seam of motion, interaction, and craft."
				})]
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-20",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "space-y-6 text-lg leading-relaxed text-foreground/85",
					children: [
						/* @__PURE__ */ jsx("p", { children: "I'm Milena — a digital designer based on the internet. I care about interfaces that feel composed: predictable when they need to be, expressive when there's room for it, and quiet everywhere in between." }),
						/* @__PURE__ */ jsx("p", { children: "Most of my work lives in the gap between static design and engineering. I prototype heavily, animate intentionally, and try to leave every product I touch a little easier to use than I found it." }),
						/* @__PURE__ */ jsxs("p", { children: [
							"Currently designing at ",
							/* @__PURE__ */ jsx("span", {
								className: "text-accent",
								children: "Okta"
							}),
							", with side projects in editorial motion, spatial UI, and tooling for designers."
						] })
					]
				}), /* @__PURE__ */ jsxs("aside", {
					className: "space-y-12",
					children: [/* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "label-mono text-accent",
						children: "Experience"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-5",
						children: experience.map((e) => /* @__PURE__ */ jsxs("li", {
							className: "border-b border-border pb-4",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "label-mono text-muted-foreground",
									children: e.year
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-1 font-display text-lg",
									children: e.role
								}),
								/* @__PURE__ */ jsx("div", {
									className: "text-sm text-foreground/70",
									children: e.org
								})
							]
						}, e.role))
					})] }), /* @__PURE__ */ jsxs("section", { children: [/* @__PURE__ */ jsx("h2", {
						className: "label-mono text-accent",
						children: "Currently"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-2 text-sm text-foreground/80",
						children: now.map((n) => /* @__PURE__ */ jsxs("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "text-muted-foreground",
								children: "·"
							}), n]
						}, n))
					})] })]
				})]
			}),
			/* @__PURE__ */ jsxs("section", {
				className: "mt-20",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "label-mono text-accent",
					children: "Skills"
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-5 flex flex-wrap gap-2",
					children: skills.map((s) => /* @__PURE__ */ jsx("span", {
						className: "rounded-full border border-border px-3.5 py-1.5 font-mono text-xs",
						children: s
					}, s))
				})]
			})
		]
	}) });
}
//#endregion
export { About as component };
