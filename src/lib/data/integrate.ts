// Apps, services, and tools to integrate like a native in Barcelona
// Source: Notion export - "Integrate like a native"

export interface IntegrateItem {
  name: string;
  description: string;
  tags: string[];
  url: string;
  category: 'transportation' | 'food-delivery' | 'health' | 'spanish-learning' | 'community' | 'shopping' | 'public-services';
}

export const integrateItems: IntegrateItem[] = [
  // Transportation
  {
    name: "Smou",
    description: "Rent public bikes, both normal and electric. The app can do much more including pay for car parking.",
    tags: ["E-mobility", "Public", "Transportation"],
    url: "https://www.smou.cat/en/home",
    category: "transportation",
  },
  {
    name: "Uber",
    description: "Taxi and ride-hailing service.",
    tags: ["Transportation"],
    url: "https://uber.com",
    category: "transportation",
  },
  {
    name: "Cabify",
    description: "Taxi and ride-hailing app, popular in Spain.",
    tags: ["App", "E-mobility", "Transportation"],
    url: "https://cabify.com/en",
    category: "transportation",
  },
  {
    name: "Freenow",
    description: "Taxi and ride-hailing app with multiple transportation options.",
    tags: ["App", "E-mobility", "Transportation"],
    url: "https://www.free-now.com/es/",
    category: "transportation",
  },
  {
    name: "Citymapper",
    description: "Great for planning and using public transportation around the city.",
    tags: ["App", "Transportation"],
    url: "https://citymapper.com/?lang=en",
    category: "transportation",
  },
  {
    name: "AMB Mobilitat",
    description: "Public transportation app - you can buy a monthly subscription for bus, train, tram, and metro.",
    tags: ["App", "Public", "Transportation"],
    url: "https://www.amb.cat/s/web/mobilitat/mobilitat.html",
    category: "transportation",
  },
  {
    name: "Cooltra",
    description: "Rent scooters and motorbikes by the minute or hour.",
    tags: ["App", "E-mobility", "Rental"],
    url: "https://www.cooltra.com/en/",
    category: "transportation",
  },
  {
    name: "Seat Moto",
    description: "Rent by the minute, electric fast scooters.",
    tags: ["E-mobility", "Transportation"],
    url: "https://www.seatmo.com/motosharing",
    category: "transportation",
  },

  // Food Delivery
  {
    name: "Uber Eats",
    description: "Order food from restaurants and have it delivered to your door.",
    tags: ["App", "Food delivery"],
    url: "https://apps.apple.com/us/app/uber-eats-food-delivery/id1058959277",
    category: "food-delivery",
  },
  {
    name: "Glovo",
    description: "Order food, groceries, and more. Very popular in Barcelona.",
    tags: ["App", "Food delivery"],
    url: "https://glovoapp.com/",
    category: "food-delivery",
  },

  // Shopping
  {
    name: "Mercadona",
    description: "Discount supermarket that also delivers groceries door-to-door.",
    tags: ["Discount supermarket", "Food delivery"],
    url: "https://www.mercadona.es/",
    category: "shopping",
  },
  {
    name: "Wallapop",
    description: "Second hand marketplace. Similar to Facebook Marketplace or Craigslist.",
    tags: ["Second hand"],
    url: "https://wallapop.com",
    category: "shopping",
  },

  // Spanish Learning
  {
    name: "Expanish",
    description: "Spanish school with multiple locations in the city. Great evening class options.",
    tags: ["School", "Spanish"],
    url: "https://expanish.com/",
    category: "spanish-learning",
  },
  {
    name: "Preply",
    description: "Choose and pick a Spanish tutor for online 1-1 classes.",
    tags: ["Spanish", "Website"],
    url: "https://preply.com",
    category: "spanish-learning",
  },
  {
    name: "Spanish with Paul",
    description: "Pre-recorded Spanish video lessons for self-paced learning.",
    tags: ["Spanish", "Website"],
    url: "https://spanishwithpaul.com",
    category: "spanish-learning",
  },

  // Health
  {
    name: "Dr. Faust Institute",
    description: "Great German children's doctor. English speaking.",
    tags: ["Health"],
    url: "https://drfaustinstitute.com/",
    category: "health",
  },
  {
    name: "Doctoralia",
    description: "Find doctors who speak English in Barcelona.",
    tags: ["Health"],
    url: "https://www.doctoralia.es/barcelona",
    category: "health",
  },

  // Public Services
  {
    name: "Welcome Desk Barcelona",
    description: "Get settled with the help of the local government services. Free support for newcomers.",
    tags: ["Public", "Service"],
    url: "https://www.barcelona.cat/internationalwelcome/en/welcome-desk",
    category: "public-services",
  },

  // Community & Sports
  {
    name: "Celebreak",
    description: "Find people to play football with. Great for meeting people and staying active.",
    tags: ["App", "Sports"],
    url: "https://celebreak.com/",
    category: "community",
  },
  {
    name: "Barcelona x Danes (Expats)",
    description: "Facebook group for Danes in Barcelona. Great for connecting with fellow expats.",
    tags: ["Facebook", "Group"],
    url: "https://www.facebook.com/groups/372841229455743/",
    category: "community",
  },
  {
    name: "Barcelona x Danes (BCN Danskere)",
    description: "Another Facebook group for Danes in Barcelona.",
    tags: ["Facebook", "Group"],
    url: "https://www.facebook.com/groups/1962428114004838/",
    category: "community",
  },
];

// Helper functions
export const getIntegrateByCategory = (category: IntegrateItem['category']) =>
  integrateItems.filter(item => item.category === category);

export const transportationApps = getIntegrateByCategory('transportation');
export const foodDeliveryApps = getIntegrateByCategory('food-delivery');
export const healthServices = getIntegrateByCategory('health');
export const spanishLearning = getIntegrateByCategory('spanish-learning');
export const communityGroups = getIntegrateByCategory('community');
export const shoppingApps = getIntegrateByCategory('shopping');
export const publicServices = getIntegrateByCategory('public-services');
