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
    id: "game-ui-ux-motion-designer-unity",
    title: "Game UI/UX & Motion Designer (Unity)",
    status: "open",
    summary:
      "We are looking for a Game UI/UX & Motion Designer to take end-to-end ownership of the UI for our Unity-based mobile F2P game.",
    about:
      "This role combines UI/UX design, visual design, motion, effects, and hands-on implementation in Unity. You will design new interfaces, improve the existing UI, rework the in-game HUD, and create polished, responsive interactions that make every action feel clear and satisfying. A major part of the role is creating strong UI game feel and high-impact moments around purchases, rewards, upgrades, progression, hero unlocks, and other important player interactions.",
    sections: [
      {
        title: "What you'll do",
        items: [
          "Own the complete UI production process - from UX flows, wireframes, and visual concepts to final implementation and polish in Unity",
          "Design and improve menus, pop-ups, HUD elements, navigation, buttons, store screens, progression systems, reward screens, and other in-game interfaces",
          "Rework and improve the existing UI and in-game HUD",
          "Create clear and intuitive user flows based on game design and product requirements",
          "Create UI animations, transitions, microinteractions, effects, and responsive visual feedback",
          "Build high-impact, satisfying presentation sequences for purchases, rewards, upgrades, hero unlocks, progression milestones, and similar events",
          "Use motion, timing, anticipation, impact, highlights, particles, and other visual techniques to create a strong UI wow-feel",
          "Prepare polished, production-ready UI assets, including icons, badges, buttons, illustrations, and supporting visual elements",
          "Assemble and implement UI directly in Unity using Canvas, prefabs, anchors, layouts, sprites, masks, materials, and TextMeshPro",
          "Adapt interfaces to different mobile screen sizes, resolutions, aspect ratios, and safe areas",
          "Create reusable UI components and maintain visual and functional consistency across the game",
          "Optimize UI assets, animations, and effects for mobile performance",
          "Collaborate closely with the Product Owner, Game Designer, and Unity developers",
          "Iterate on UI based on gameplay needs, usability feedback, and product priorities",
        ],
      },
      {
        title: "What we're looking for",
        items: [
          "Professional experience designing UI/UX for mobile games",
          "Practical experience working with mobile F2P games and understanding their key systems, including stores, offers, currencies, progression, quests, Battle Passes, rewards, and monetization flows",
          "Strong understanding of game UI/UX, player flows, information hierarchy, interaction states, and mobile usability patterns",
          "Strong visual design skills, including composition, typography, color, hierarchy, readability, and consistency",
          "Experience working directly in Unity - not only preparing layouts in Figma",
          "Confident knowledge of Unity UI, prefabs, Canvas, anchors, layouts, sprites, masks, materials, and TextMeshPro",
          "Strong experience creating and implementing UI animations, transitions, microinteractions, and visual feedback in Unity",
          "Understanding of motion principles such as timing, easing, anticipation, impact, and response",
          "Ability to create polished, satisfying UI interactions rather than only static layouts",
          "Experience designing reward, progression, store, purchase, and unlock experiences for mobile F2P games",
          "Understanding of responsive UI and adaptation for different mobile devices",
          "Ability to work within an existing visual style and develop it further",
          "Ability to prepare clean, organized, and production-ready assets",
          "Understanding of mobile performance limitations and UI optimization",
          "Confident skills in Figma and Adobe Photoshop or similar tools",
          "A portfolio or showreel demonstrating game UI, UX flows, motion, transitions, effects, HUDs, and interactive feedback",
          "Please include examples of UI implemented in-engine. A portfolio consisting only of static layouts will not be sufficient for this role.",
          "Practical experience using AI tools as part of a visual production pipeline is highly desirable. This may include concept exploration, rapid iteration, visual variations, asset production, polishing, or other ways of improving production speed while maintaining a consistent art style and high quality.",
        ],
      },
      {
        title: "UI Technical Art",
        items: [
          "Experience creating UI shaders, materials, masks, particles, and procedural visual effects",
          "Understanding of Unity UI rendering, sorting, batching, and optimization",
          "Ability to solve technical UI issues and create reusable technical solutions for artists and designers",
          "Experience optimizing UI animation and effects for mobile devices",
        ],
      },
      {
        title: "UI sound and haptics",
        items: [
          "Understanding of how sound and haptic feedback support UI responsiveness and game feel",
          "Experience selecting, preparing, or implementing UI sound effects",
          "Ability to synchronize sounds, haptics, animations, and visual effects",
          "Experience creating satisfying feedback for clicks, purchases, rewards, upgrades, unlocks, and progression milestones",
        ],
      },
      {
        title: "Gameplay VFX and impact",
        items: [
          "Experience creating gameplay VFX, particles, shaders, hit feedback, and other combat effects",
          "Understanding of gameplay impact, responsiveness, readability, and game feel",
          "Ability to improve the perceived weight and satisfaction of gameplay actions",
        ],
      },
      {
        title: "3D support",
        items: [
          "Basic knowledge of Blender or another 3D tool",
          "Ability to modify, prepare, or integrate simple 3D assets",
          "Basic experience working with materials, textures, lighting, and Unity scene assets",
        ],
      },
      {
        title: "User Acquisition and promotional content",
        items: [
          "Experience launching or supporting User Acquisition campaigns",
          "Understanding of mobile game advertising formats and performance creatives",
          "Ability to create promotional graphics, videos, store assets, or ad creatives",
          "Experience producing and iterating on promotional materials using AI tools",
        ],
      },
      {
        title: "Role focus",
        items: [
          "These competencies are not core requirements. The primary responsibility of the role remains designing, animating, polishing, and implementing the game UI in Unity.",
        ],
      },
    ],
  },
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
