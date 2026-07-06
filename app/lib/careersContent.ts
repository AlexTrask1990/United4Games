export type CareerListingStatus = "open" | "closed";

export interface CareerListingSection {
  title: string;
  items: string[];
}

export interface CareerListing {
  id: string;
  title: string;
  status: CareerListingStatus;
  summary?: string;
  about?: string;
  sections: CareerListingSection[];
}

export const careersIntro =
  "We're always excited to connect with talented professionals who are passionate about creating outstanding games. Even if there isn't an open position that matches your expertise today, we'd love to hear from you. Great teams are built through great people, and exceptional talent is always welcome. Stay connected with us for future opportunities.";

export const careerListings: CareerListing[] = [
  {
    id: "senior-unity-art-generalist",
    title: "Senior Unity Art Generalist (3D / UI / VFX)",
    status: "closed",
    summary:
      "We are a small, fast-moving mobile game team working on a live PvP F2P mobile game. We are currently rebuilding and scaling an early version of title and are looking for a Senior Art Generalist who can own visual production and Unity implementation end-to-end. This is a hands-on role — you will directly impact how the game looks, feels, and performs in production.",
    sections: [
      {
        title: "What you'll do",
        items: [
          "Create and polish 3D assets (characters, props, environments), texturing, basic rigging and skinning, mobile optimization",
          "Import and integrate assets into Unity, build and maintain prefabs, work with materials, shaders, and lighting",
          "Design and improve mobile UI screens: shop, post-battle screens, upgrade and progression screens, menus and overlays",
          "Create gameplay VFX (hits, impacts, rewards), UI animations, feedback effects, and improve overall PvP combat feel",
          "UI transitions, micro-animations, reward and progression presentation, visual polish across game flows",
          "Create visuals for events, seasons, battle pass updates; support rapid iteration based on product and UA feedback",
        ],
      },
      {
        title: "What we're looking for",
        items: [
          "Strong Unity production experience",
          "Ability to work across 3D, UI, and VFX",
          "Experience with mobile game production",
          "Ownership mindset — able to work independently",
          "Focus on player experience, clarity, and game feel (not just visuals)",
        ],
      },
      {
        title: "Bonus (big plus)",
        items: [
          "Experience with mobile PvP / F2P games",
          "Understanding of retention-driven UX design",
          "Ability to improve store visuals (icons / screenshots)",
          "Experience building reusable pipelines or tools",
        ],
      },
      {
        title: "Why this role matters",
        items: [
          "Player retention (game feel and clarity)",
          "Monetization (UI and shop design)",
          "UA performance (visual assets)",
          "Overall product quality perception",
        ],
      },
      {
        title: "How to apply",
        items: [
          "Portfolio (Unity work preferred)",
          "UI / mobile interface examples (if available)",
          "VFX / motion examples",
          "Shipped game experience",
        ],
      },
    ],
  },
  {
    id: "product-game-designer-f2p-pvp",
    title: "Product Game Designer (F2P PvP Mobile)",
    status: "closed",
    about:
      "At United4Digital, we're expanding into mobile games and looking for an experienced Product Game Designer to join a small, hands-on team. You'll work directly with the Product Owner and Developer, helping shape gameplay, progression, economy, monetization, and live content. This is a broad role with a high level of ownership and direct impact on product decisions. We're looking for someone who can independently design systems, balance economies, configure content in Unity, and help turn product ideas into playable experiences.",
    sections: [
      {
        title: "Responsibilities",
        items: [
          "Design and document gameplay systems, features, and game modes",
          "Design progression, retention, and engagement systems",
          "Create concepts for maps, heroes, abilities, events, and seasonal content",
          "Design, balance, and maintain the game's economy and monetization systems",
          "Configure rewards, currencies, progression loops, offers, and Battle Passes",
          "Analyze competitors, market trends, and successful PvP products",
          "Work with product metrics to identify opportunities and validate hypotheses",
          "Configure and maintain gameplay content directly in Unity using existing tools and systems",
          "Collaborate closely with developers while taking ownership of content implementation and balancing",
        ],
      },
      {
        title: "Requirements",
        items: [
          "3+ years of experience as a Game Designer on mobile games",
          "Experience working on free-to-play and live-service products",
          "Strong understanding of mobile PvP gameplay and player motivation",
          "Deep understanding of game economy and monetization systems",
          "Experience designing and balancing Battle Passes, in-game economies, reward systems, currency systems, offers, and monetization loops",
          "Experience working with retention, engagement, and monetization metrics",
          "Ability to make decisions based on player behavior, product data, and business goals",
          "Ability to document systems clearly for developers and stakeholders",
          "Experience working in Unity as a non-programming game designer, using existing tools to configure content, balance systems, and support live game operations",
          "Ability to work independently in a small team",
        ],
      },
      {
        title: "Nice to have",
        items: [
          "Experience with multiplayer PvP games",
          "Experience balancing competitive gameplay",
          "Experience with analytics tools and dashboards",
          "Experience designing live events and seasonal content",
          "Understanding of matchmaking systems and player progression systems",
          "Experience evaluating existing games, game audits, or due diligence",
          "Familiarity with AI-assisted content creation tools",
        ],
      },
      {
        title: "How we work",
        items: [
          "Small team. High ownership. Low bureaucracy.",
          "We value practical thinking, fast iteration, and people who can move ideas from concept to implementation without excessive process.",
          "If you enjoy working close to the product, making decisions that matter, and helping build a game business from the ground up, we'd love to talk.",
        ],
      },
    ],
  },
];
