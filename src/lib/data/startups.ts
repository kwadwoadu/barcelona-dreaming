// Barcelona startup ecosystem - VCs, coworking, and resources
// Source: Notion export - "Startup Ecosystem"

export interface StartupItem {
  name: string;
  description: string;
  types: string[];
  url: string;
}

export const startupItems: StartupItem[] = [
  // Coworking & Community
  {
    name: "Pier03",
    description: "Connected innovation in an iconic building. Community, startups, venture builders and more.",
    types: ["Co-working", "Community", "Events"],
    url: "https://techbarcelona.com/en/pier-03/",
  },
  {
    name: "Norrsken House Barcelona",
    description: "Impact-focused co-working space with community events, office space, and connections to VCs.",
    types: ["Co-working", "Community", "Events", "Office", "Startups", "Venture Capital"],
    url: "https://www.norrsken.org/barcelona",
  },
  {
    name: "Barcelona Activa",
    description: "Barcelona Activa helps you with everything related to starting and operating a business out of Barcelona. Public support for entrepreneurs.",
    types: ["Events", "Public", "Service"],
    url: "https://www.barcelonactiva.cat/en/home",
  },
  {
    name: "Instant Offices",
    description: "Search for a local office to rent in Barcelona.",
    types: ["Office"],
    url: "https://www.instantoffices.com/es/es",
  },

  // Venture Capital
  {
    name: "KFund",
    description: "Spanish VC firm investing in early-stage technology companies.",
    types: ["Venture Capital"],
    url: "https://www.kfund.vc/",
  },
  {
    name: "Encomenda Smart Capital",
    description: "Seed-stage micro venture capital firm. Geographies of interest include Spain.",
    types: ["Venture Capital"],
    url: "https://encomenda.com/",
  },
  {
    name: "4Founders Capital",
    description: "Venture capital firm investing in early-stage tech-focused companies.",
    types: ["Venture Capital"],
    url: "https://www.4founderscapital.com/",
  },
  {
    name: "Mundi Ventures",
    description: "Venture capital firm focused on B2B business models and insurtech sectors.",
    types: ["Venture Capital"],
    url: "https://www.mundiventures.com/",
  },

  // Venture Builders
  {
    name: "Antai Venture Builder",
    description: "The venture builder behind Wallapop, Glovo, and other successful Spanish startups.",
    types: ["VC", "Venture builder"],
    url: "https://www.antaivb.com/",
  },
];

// Notable Spanish Unicorns / Scale-ups (for reference)
export const spanishUnicorns = [
  { name: "TravelPerk", url: "https://travelperk.com/" },
  { name: "Paack", url: "https://paack.com/" },
  { name: "Wallapop", url: "https://wallapop.com/" },
  { name: "Typeform", url: "https://typeform.com/" },
  { name: "Factorial", url: "https://factorial.com/" },
  { name: "Glovo", url: "https://glovoapp.com/" },
  { name: "The Colvin Co", url: "https://thecolvinco.com/" },
  { name: "Red Points", url: "https://redpoints.com/" },
  { name: "Belvo", url: "https://belvo.com/" },
];

// Helper functions
export const getStartupsByType = (type: string) =>
  startupItems.filter(item => item.types.includes(type));

export const coworkingSpaces = getStartupsByType('Co-working');
export const ventureCapital = getStartupsByType('Venture Capital');
export const ventureBuilders = getStartupsByType('Venture builder');
export const officeSpaces = getStartupsByType('Office');
