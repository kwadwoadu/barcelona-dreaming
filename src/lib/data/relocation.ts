// Relocation services, lawyers, and agencies in Barcelona
// Source: Notion export - "Relocation"

export interface RelocationItem {
  name: string;
  description: string;
  types: string[];
  url: string;
  hasReferral: boolean;
  referralNote?: string;
}

export const relocationItems: RelocationItem[] = [
  {
    name: "Sandra Parada Duque - Tax Boutique",
    description: "Tax lawyer specializing in expat taxation, Beckham Law, and Spanish tax compliance.",
    types: ["Lawyer", "Tax"],
    url: "https://taxboutique.es",
    hasReferral: true,
    referralNote: "We can make an introduction - contact k@adu.dk",
  },
  {
    name: "GD Global Mobility",
    description: "Full-service relocation agency helping with visas, housing, and settling in.",
    types: ["Agency", "Relocation"],
    url: "https://gdglobalmobility.com",
    hasReferral: true,
    referralNote: "We can make an introduction - contact k@adu.dk",
  },
  {
    name: "BRS Relocation",
    description: "Comprehensive relocation support for families and professionals moving to Barcelona.",
    types: ["Agency", "Relocation"],
    url: "https://brs-relocation.com",
    hasReferral: true,
    referralNote: "We can make an introduction - contact k@adu.dk",
  },
  {
    name: "Idealista",
    description: "The largest property search platform in Spain. Find rentals and set alerts for homes in areas you want to live.",
    types: ["Website", "Housing"],
    url: "https://www.idealista.com/en/",
    hasReferral: false,
  },
  {
    name: "Barcelona Housing Facebook Group",
    description: "Facebook group for finding apartments and rooms in Barcelona. Very active community.",
    types: ["Facebook", "Group", "Housing"],
    url: "https://www.facebook.com/groups/284148645092758/",
    hasReferral: false,
  },
  {
    name: "Movistar",
    description: "Major Spanish telecom provider. We have a contact who might help setup a subscription before having a NIE. Also tip: If relocating from Denmark and want to keep your DK number, choose Telmore or Duka - they don't require visiting Denmark periodically.",
    types: ["Communication", "Phone"],
    url: "https://www.movistar.es",
    hasReferral: true,
    referralNote: "Contact us for a Movistar hookup before getting your NIE - k@adu.dk",
  },
  {
    name: "Gestoria Ruppmann",
    description: "Gestoria (administrative services) specializing in car imports and vehicle documentation.",
    types: ["Lawyer", "Car Import"],
    url: "",
    hasReferral: true,
    referralNote: "We can make an introduction. Phone: 938 36 34 10",
  },
  {
    name: "Ukio",
    description: "Temporary furnished homes for short to medium-term stays. Great for your first months while apartment hunting.",
    types: ["Housing", "Furnished", "Temporary"],
    url: "https://ukio.com/",
    hasReferral: false,
  },
];

// Helper functions
export const getRelocationByType = (type: string) =>
  relocationItems.filter(item => item.types.includes(type));

export const getVettedRelocation = () =>
  relocationItems.filter(item => item.hasReferral);

export const lawyers = getRelocationByType('Lawyer');
export const agencies = getRelocationByType('Agency');
export const housingPlatforms = getRelocationByType('Housing');
