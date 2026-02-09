// Barcelona Dreaming Data Index
// All data exported from Notion database (December 2025)

// Integrate like a native - Apps, services, transportation
export {
  integrateItems,
  getIntegrateByCategory,
  transportationApps,
  foodDeliveryApps,
  healthServices,
  spanishLearning,
  communityGroups,
  shoppingApps,
  publicServices,
  type IntegrateItem,
} from './integrate';

// Relocation - Lawyers, agencies, housing
export {
  relocationItems,
  getRelocationByType,
  getVettedRelocation,
  lawyers,
  agencies,
  housingPlatforms,
  type RelocationItem,
} from './relocation';

// Restaurants & Places - Food, hotels, sightseeing
export {
  places,
  getPlacesByType,
  restaurants,
  cafes,
  hotels,
  sightseeing,
  familyFriendly,
  bakeries,
  bars,
  accommodations,
  type PlaceItem,
} from './restaurants';

// Startup Ecosystem - VCs, coworking, offices
export {
  startupItems,
  spanishUnicorns,
  getStartupsByType,
  coworkingSpaces,
  ventureCapital,
  ventureBuilders,
  officeSpaces,
  type StartupItem,
} from './startups';

// Summary stats
export const dataStats = {
  integrateCount: 21,
  relocationCount: 8,
  placesCount: 68,
  startupCount: 9,
  total: 106,
  lastUpdated: '2025-12-08',
};
