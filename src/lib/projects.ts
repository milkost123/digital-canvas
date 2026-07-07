export type Project = {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  role: string;
  tools?: string;
  team: string;
  timeline: string;
  brand: string;
  bg: string;
  heroImage?: string;
  heroVideo?: string;
  cardBg?: string;
  cardImage?: string;
  cardImageStacked?: string;
  cardImageOffsetY?: number;
  stats?: { value: string; label: string }[];
  statGroups?: { title: string; stats: { value: string; label: string }[] }[];
  hideStatGroups?: boolean;
  narrative: string;
  sections: { heading: string; body: string; link?: string; linkLabel?: string; image?: string; video?: string; cardPreview?: boolean; breakImage?: string; breakImage2?: string; breakVideo?: string; breakVideo2?: string; breakVideo3?: string; breakImage3?: string; breakImage4?: string; breakPlaceholders?: number; breakSplit?: boolean; breakGrid3?: boolean; breakTop?: boolean; noCols?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "auth0-web-design",
    heroVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383056/Auth0_Hero01_yruhev.mp4",
    title: "Auth for every app",
    tagline: "Designing Auth0's web experience, from product pages to animated interactions",
    tags: ["Web & Interactive Design"],
    role: "Sr. Digital Designer",
    tools: "Figma, After Effects, Claude Code",
    team: "Creative Director, Copywriter, Product Marketing Managers, Project Manager, Front-End Engineer",
    timeline: "2025 — Present",
    brand: "Auth0",
    bg: "#0A0A14",
    cardBg: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382942/Auth0_CardBackground_jmao8h.png",
    cardImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382949/Auth0_CardImage_egxmeh.png",
    cardImageOffsetY: 40,
    narrative:
      "Designing Auth0's web experience, from product pages to animated interactions.",
    sections: [
      {
        heading: "Overview",
        body: "As a web designer at Auth0, I build and animate pages across the site, design layouts, add motion, and create interactive moments that make the product experience feel alive. I also contribute to Auth0's design system, helping shape components as the brand moves in a more creative direction.",
        noCols: true,
        breakImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382946/Auth0_Example02_yttvuc.png",
        breakVideo2: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783382994/Auth0_Retail_01_qryozz.mp4",
        breakSplit: true,
        breakVideo3: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383002/Auth0_Example03_icvju0.mp4",
        breakImage4: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382947/Auth0_Example04_azltcc.png",
        breakPlaceholders: 2,
      },
      {
        heading: "Auth for AI Agents",
        body: "I designed Auth0's Auth for AI Agents page, the most strategically important page on the website right now. It's the primary touchpoint for one of Auth0's newest product lines and is actively referenced as a key selling point in conversations with customers and prospects.\n\nThe page needed to introduce a complex, emerging category (identity and access management for AI agents) in a way that felt clear and credible, brought to life through animation and interaction.",
        link: "https://auth0.com/ai",
        linkLabel: "Auth for AI Agents",
        cardPreview: true,
        breakImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382939/A4AA_Example01_bzyjtc.png",
      },
    ],
  },
  {
    slug: "okta-web-motion",
    heroVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383026/Okta_Hero01_qzfoqe.mp4",
    title: "Identity, secured",
    tagline: "Animating Okta's web experience, from icons to interactive product graphics",
    tags: ["Web & Motion Design"],
    role: "Sr. Digital Designer",
    tools: "Figma, After Effects, Adobe Experience Manager, Claude Code, Lovable",
    team: "Creative Director, Copywriter, Product Marketing Managers, Project Manager, Front-End Engineer",
    timeline: "2025 — Present",
    brand: "Okta",
    bg: "#ECE8E4",
    cardImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382965/Okta_CardImage_eynh6u.png",
    stats: [
      { value: "120+", label: "components animated" },
      { value: "40%", label: "perceived speed lift" },
      { value: "1", label: "unified motion language" },
    ],
    narrative:
      "Animating Okta's web experience, from icons to interactive product graphics.",
    sections: [
      {
        heading: "Oktane 2026",
        body: "I led interaction design for Oktane 2026, using Claude Code to prototype and present two web layout directions to internal stakeholders. From there I developed a cohesive motion system for the new site, with interactions reused consistently across 6+ subpages.",
        link: "https://www.okta.com/oktane/",
        linkLabel: "Oktane website",
        image: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382962/Oktane_Example01_px7z0y.png",
        breakVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383024/Oktane_Example02_ktnjwr.mp4",
      },
      {
        heading: "Animated product graphics",
        body: "Built animated product graphics that let users explore Okta's platform in a hands-on way.",
        breakVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383006/Okta_Example02_l5owd8.mp4",
        noCols: true,
      },
      {
        heading: "Icon animation",
        body: "Designed and built a 3D object rendering export tool using AI to turn our values icons into animated 3D renders that were used in our new Company page.",
        link: "https://www.okta.com/company/",
        linkLabel: "Company page",
        breakVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383008/Okta_Example01_ioikz1.mp4",
        noCols: true,
      },
    ],
  },
  {
    slug: "studeo-brand",
    title: "AI real estate storytelling",
    tagline: "Brought Studeo's brand to life through animated web design, ad creative, and product videos",
    tags: ["Brand and Demand Generation"],
    role: "Senior Marketing Designer",
    tools: "Figma, After Effects, Wordpress",
    team: "Creative Director, VP of Marketing",
    timeline: "2022 — 2025",
    hideStatGroups: true,
    brand: "Studeo",
    heroVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383044/Studeo_MainWork_Intro_rxnlxn.mp4",
    bg: "#ECE4FF",
    cardImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382982/Studeo_CardImage_gyw3sk.png",
    stats: [
      { value: "3x", label: "ad engagement" },
      { value: "60+", label: "creative assets" },
      { value: "2", label: "brand campaigns" },
    ],
    statGroups: [
      {
        title: "Scope",
        stats: [
          { value: "60+", label: "Ads designed & animated" },
          { value: "10+", label: "Landing pages designed" },
          { value: "1", label: "Full website revamp" },
        ],
      },
      {
        title: "Impact",
        stats: [
          { value: "34%", label: "Engagement on the homepage explainer video" },
          { value: "50%", label: "Increase in demo bookings after website revamp" },
          { value: "1 in 3", label: "Visitors who now book demos with zero sales intervention" },
        ],
      },
    ],
    narrative:
      "I was responsible for bringing Studeo's brand to life through animated web design, ad creative, and product videos.",
    sections: [
      {
        heading: "Ads",
        body: "I tested how quickly ads revealed the product mattered as much as how they looked. In Studeo's highest-performing month, 22% of ads showed the product within the first six seconds, compared to just 2% in lower-performing months. The best-performing creatives consistently balanced messaging across the funnel, which closely tracked with the number of deals closed each month.",
        image: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382987/StudeoAds_1_e36cc1.png",
        breakImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382977/StudeoAds_2_lfq6rg.png",
      },
      {
        heading: "Landing Pages & Explainer Video",
        video: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383031/StudeoMotion_01_o5qxp6.mp4",
        breakVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383064/StudeoMotion_02_t2lmyv.mp4",
        body: "I designed 10+ landing pages and led the creation of 3+ explainer videos, including the flagship video that launched alongside Studeo's new website. That video became the most-clicked, most-interacted-with element on the site — engaging 34% of 22.4K visitors (~7,600 plays) — and was later repurposed into short-form ad content to drive additional lead volume. It clarified Studeo's platform around three core customer pain points: winning listings, standing out, and selling faster.",
      },
      {
        heading: "Website Revamp",
        body: "I led the full visual and animated redesign of Studeo's website, rethinking both the design and the user journey from landing to demo booking. After launch, demo bookings increased by 50%, with 1 in 3 visitors booking directly from the site — with zero intervention from the sales team.",
        image: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382985/StudeoWeb_1_xhtznb.png",
        breakVideo: "https://res.cloudinary.com/n72bnmrl/video/upload/v1783383070/StudeoWeb_02_ad9bow.mp4",
      },
    ],
  },
  {
    slug: "malleable-founding",
    title: "Co-pilot for sales teams",
    tagline: "Founding designer shaping Malleable's product, web and brand from the ground up",
    tags: ["Founding Design"],
    role: "Founding Designer — product, web, brand",
    tools: "Figma, Framer, After Effects",
    team: "CEO, Product Designer",
    timeline: "2024 — 2025",
    brand: "Malleable",
    heroImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382955/Malleable_Hero_01_p7hilm.png",
    bg: "#C6D6FF",
    cardImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382947/Malleable_CardImage_qtqh4w.png",
    stats: [
      { value: "0→1", label: "product built" },
      { value: "3", label: "brand campaigns" },
      { value: "12", label: "enterprise pilots" },
    ],
    narrative:
      "Founding designer shaping Malleable's product, web and brand from the ground up.",
    sections: [
      {
        heading: "Product design",
        body: "Designed the core product experience for Malleable's AI co-pilot, from onboarding to daily workflows.",
        image: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382956/Malleable_Example02_goq51r.png",
      },
      {
        heading: "Brand & web",
        body: "Built the brand and web presence from scratch, establishing a visual language that resonated with enterprise sales teams.",
        noCols: true,
        breakImage: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382950/Malleable_Example01_eec9ns.png",
        breakImage2: "https://res.cloudinary.com/n72bnmrl/image/upload/f_auto,q_auto/v1783382987/Malleable_Example03_pvtrch.png",
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
