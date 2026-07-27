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
  overview?: string;
  endImage?: string;
  endImageCaption?: string;
  narrative: string;
  sections: { heading: string; body: string; link?: string; linkLabel?: string; link2?: string; linkLabel2?: string; image?: string; imageCaption?: string; video?: string; cardPreview?: boolean; flipCols?: boolean; breakImage?: string; breakImageCaption?: string; breakImage2?: string; breakVideo?: string; breakVideo2?: string; breakVideo3?: string; breakImage3?: string; breakImage4?: string; breakPlaceholders?: number; breakSplit?: boolean; breakSideBySide?: boolean; breakSideBySide2?: boolean; breakSideBySide2Caption?: string; breakGrid3?: boolean; breakTop?: boolean; breakSlides?: string[]; noCols?: boolean; tightTop?: boolean }[];
};

export const projects: Project[] = [
  {
    slug: "auth0-web-design",
    heroVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661708/portfolio/Auth0_Hero01.mp4",
    title: "Auth for every app",
    tagline: "Designing Auth0's web experience, from product pages to animated interactions",
    tags: ["Web & Interactive Design"],
    role: "Sr. Digital Designer",
    tools: "Figma, After Effects, Claude Code",
    team: "Creative Director, Copywriter, Product Marketing Managers, Project Manager, Front-End Engineer",
    timeline: "2025 — Present",
    brand: "Auth0",
    bg: "#0A0A14",
    cardBg: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661546/portfolio/Auth0_CardBackground.png",
    cardImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661558/portfolio/Auth0_CardImage.png",
    cardImageOffsetY: 40,
    narrative:
      "Designing Auth0's web experience, from product pages to animated interactions.",
    sections: [
      {
        heading: "Overview",
        body: "As the lead web designer at Auth0, I build and animate pages across the site, design layouts, add motion, and create interactive moments that make the product experience feel alive. I also contribute to Auth0's design system, helping shape components as the brand undergoes a visual refresh.",
        noCols: true,
        breakImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661554/portfolio/Auth0_Example01.png",
        breakVideo2: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661686/portfolio/Auth0_Retail_01.mp4",
        breakSplit: true,
        breakVideo3: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661673/portfolio/Auth0_Example03.mp4",
        breakImage4: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661559/portfolio/Auth0_Example04.png",
        breakPlaceholders: 2,
      },
      {
        heading: "Auth for AI Agents",
        body: "I designed Auth0's Auth for AI Agents page, the most strategically important page on the website right now. It's the primary touchpoint for one of Auth0's newest product lines and is actively referenced as a key selling point in conversations with customers and prospects.\n\nThe page needed to introduce a complex, emerging category (identity and access management for AI agents) in a way that felt clear and credible, brought to life through animation and interaction.",
        link: "https://auth0.com/ai",
        linkLabel: "Auth for AI Agents",
        cardPreview: true,
        breakSideBySide: true,
        breakImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661548/portfolio/A4AA_Example01.png",
        breakImage2: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661550/portfolio/A4AA_Example02.png",
      },
    ],
  },
  {
    slug: "okta-web-motion",
    heroVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661688/portfolio/Okta_Hero01.mp4",
    title: "Identity, secured",
    tagline: "Defining Okta's motion language across web, product graphics, and the Oktane conference site",
    tags: ["Web & Motion Design"],
    role: "Sr. Digital Designer",
    tools: "Figma, After Effects, Adobe Experience Manager, Claude Code, Lovable",
    team: "Creative Director, Copywriter, Product Marketing Managers, Project Manager, Front-End Engineer",
    timeline: "2025 — Present",
    brand: "Okta",
    bg: "#ECE8E4",
    cardImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661566/portfolio/Okta_CardImage.png",
    stats: [
      { value: "120+", label: "components animated" },
      { value: "40%", label: "perceived speed lift" },
      { value: "1", label: "unified motion language" },
    ],
    narrative:
      "Defining Okta's motion language across web, product graphics, and the Oktane conference site.",
    sections: [
      {
        heading: "Oktane 2026",
        body: "I led interaction design for Oktane 2026, using Claude Code to prototype and present two web layout directions to internal stakeholders. From there I developed a cohesive motion system for the new site, with interactions reused consistently across 6+ subpages.",
        link: "https://www.okta.com/oktane/",
        linkLabel: "Oktane website",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661568/portfolio/Oktane_Example01.png",
        breakVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661693/portfolio/Oktane_Example02.mp4",
      },
      {
        heading: "Animated product graphics",
        body: "At Okta, I lead the animation for product graphics that are used throughout our websites. This includes following our brand motion guidelines when setting up animated scenes and translating complex product concepts into clear, engaging visual moments for web, campaigns, and reports.",
        link: "https://www.okta.com/solutions/secure-ai/",
        linkLabel: "Okta Secures AI",
        link2: "https://www.okta.com/en-ca/reports/businesses-at-work/",
        linkLabel2: "Businesses at Work 2026",
        breakVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661670/portfolio/Okta_Example02.mp4",
        noCols: true,
      },
      {
        heading: "Icon animation",
        body: "Designed and built a 3D object rendering export tool using Claude Code to turn our values icons into animated 3D renders that were used in our new Company page.",
        link: "https://www.okta.com/company/",
        linkLabel: "Company page",
        link2: "/exploration/vibe-coding",
        linkLabel2: "Learn more about the tool",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661583/portfolio/Okta_Icons_02.png",
        flipCols: true,
        breakVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661674/portfolio/Okta_Example01.mp4",
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
    heroVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661711/portfolio/Studeo_MainWork_Intro.mp4",
    bg: "#ECE4FF",
    cardImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661583/portfolio/Studeo_CardImage.png",
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
        body: "Led creative direction for Studeo's paid campaigns targeting top-performing luxury real estate agents. I helped develop a full-funnel framework pairing strong hooks with early product visibility, which became a key driver of our best-performing month ever with over $500K in ad revenue.",
        link: "/work/studeo-paid-ads",
        linkLabel: "View full case study",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661585/portfolio/StudeoAds_1.png",
        breakImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661583/portfolio/StudeoAds_2.png",
        breakImageCaption: "Ad campaign for Studeo AI's voice agent integration",
      },
      {
        heading: "Product videos",
        video: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661703/portfolio/StudeoMotion_01.mp4",
        breakVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661720/portfolio/StudeoMotion_02.mp4",
        body: "Led the creation of 3+ explainer videos, including the flagship video that launched alongside Studeo's new website. That video became the most-clicked, most-interacted-with element on the site, engaging 34% of 22.4K visitors (~7,600 plays), and was later repurposed into short-form ad content to drive additional lead volume. It clarified Studeo's platform around three core customer pain points: winning listings, standing out, and selling faster.",
      },
      {
        heading: "Website Revamp",
        body: "I led the full visual and animated redesign of Studeo's website, rethinking both the design and the user journey from landing to demo booking. After launch, demo bookings increased by 50%, with 1 in 3 visitors booking directly from the site, with zero intervention from the sales team.",
        link: "https://studeo.ai/solutions/storybook",
        linkLabel: "What is a Storybook?",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661586/portfolio/StudeoWeb_1.png",
        breakVideo: "https://res.cloudinary.com/dxi9ogwbq/video/upload/v1783661720/portfolio/StudeoWeb_02.mp4",
      },
      {
        heading: "Brand refresh",
        body: "Led a full visual refresh of Studeo's brand as the company sharpened its focus on real estate, aiming to feel creative and AI-powered while staying grounded in trust.\n\n• Designed new textures, patterns, and gradients, testing circular, geometric, and organic forms to find the right tone\n\n• Landed on a warmer, more organic direction: soft circles, floral-inspired shapes, rounded home icons, and subtle sparkle details",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127977/Studeo-BrandRefresh-01_teti4f.png",
      },
      {
        heading: "Icon system",
        body: "• Replaced the brand's original icon set, which felt rigid, with a playful, expanded system covering real estate, marketing, and sales concepts\n\n• Designed the icons to double as background patterns, so the same visual language shows up across ads, social, blog, and print\n\nThe result: a more vibrant, cohesive brand system that scales faster, with templated social assets keeping things consistent",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127978/Studeo-BrandRefresh-04_oopljw.png",
        breakTop: true,
        breakSlides: ["https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127977/Studeo-BrandRefresh-02_t4tweo.png", "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127978/Studeo-BrandRefresh-03_pgxmf5.png"],
        tightTop: true,
      },
    ],
  },
  {
    slug: "malleable-founding",
    endImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127976/Malleable_ProductHunt_Banner_baaiao.png",
    endImageCaption: "Product Hunt promotional imagery",
    title: "Co-pilot for sales teams",
    tagline: "Built Malleable's entire design foundation in under a year: product, brand, and web from zero",
    tags: ["Founding Design"],
    role: "Founding Designer",
    tools: "Figma, Framer, After Effects",
    team: "CEO, Product Designer",
    timeline: "2024 — 2025",
    brand: "Malleable",
    heroImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661562/portfolio/Malleable_Hero_01.png",
    bg: "#C6D6FF",
    cardImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661558/portfolio/Malleable_CardImage.png",
    stats: [
      { value: "0→1", label: "product built" },
      { value: "3", label: "brand campaigns" },
      { value: "12", label: "enterprise pilots" },
    ],
    narrative:
      "As founding designer, I shaped Malleable's entire visual experience: product design, web presence, motion, and marketing, from the ground up as a bootstrapped SaaS startup.",
    overview: "RevOps and SalesOps leaders were drowning in siloed data, manual admin work, and prospecting tools that ate up more time than they saved. Malleable set out to fix that.",
    sections: [
      {
        heading: "Product design",
        body: "• Built wireframes through rapid design cycles, adapting as market demands shifted\n\n• Managed a product designer to keep UX/UI aligned with our vision\n\n• Ran beta testing with target users and worked directly with developers on technical feasibility\n\n• Created a scalable design system and prioritized key MVP features for testing with new users",
        image: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661564/portfolio/Malleable_Example02.png",
        breakSlides: ["https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127976/Malleable_UI_01_aqeeup.png", "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127977/Malleable_UXExample01_jcsj9q.png", "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127977/Malleable_UI_03_nkrgf1.png"],
      },
      {
        heading: "Website",
        body: "I designed a high-impact website to clearly communicate Malleable's value proposition. This meant testing multiple messaging strategies, tracking where visitors dropped off, and iterating fast. I built smooth micro-interactions and custom interactive components throughout, and produced a motion explainer video for the hero section to give visitors a quick, clear demo of the product.",
        noCols: true,
        breakImage: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661559/portfolio/Malleable_Example01.png",
        breakImage2: "https://res.cloudinary.com/dxi9ogwbq/image/upload/f_auto,q_auto/v1783661580/portfolio/Malleable_Example03.png",
      },
      {
        heading: "Marketing and growth",
        body: "Alongside our marketing agency, I helped run organic and paid campaigns, including a Product Hunt launch and LinkedIn ads to build early interest. I also tracked competitor ad activity to spot features and positioning that could shape our own roadmap. This became a real testing ground: lots of experimentation to see what actually worked.",
        noCols: true,
        breakSideBySide2: true,
        breakImage3: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127975/Malleable_AdExample01_hp18es.png",
        breakImage4: "https://res.cloudinary.com/dxi9ogwbq/image/upload/v1785127976/Malleable_AdExample02_d5lj2n.png",
        breakSideBySide2Caption: "Ad campaign promoting Malleable's core features: Connect, Enrich, and Scrape",
      },
      {
        heading: "Results",
        body: "Working on Malleable meant long nights and close collaboration, but it taught me real lessons in sales, marketing, and product strategy, and pushed me to think about how design actually supports business goals. The launch was a success: 150 waitlist signups in under two months, and 100 active users at launch.",
        noCols: true,
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getNextProject = (slug: string) => {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
};
