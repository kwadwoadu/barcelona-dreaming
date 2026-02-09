// Restaurants, cafes, hotels, and places to visit in Barcelona
// Source: Notion export - "Visiting Barcelona"

export interface PlaceItem {
  name: string;
  description: string;
  types: string[];
  location?: string;
  googleMapsUrl?: string;
}

export const places: PlaceItem[] = [
  // Sightseeing
  {
    name: "FC Barcelona Stadium",
    description: "Fan shop, museum and fan area. A must-visit for football fans.",
    types: ["Sightseeing"],
  },
  {
    name: "La Sagrada Familia",
    description: "Gaudi's iconic unfinished basilica. Book tickets well in advance.",
    types: ["Sightseeing"],
  },
  {
    name: "Tibidabo",
    description: "A nice way to look at Barcelona, on top of a mountain with a quite big theme park, restaurants and a church.",
    types: ["Dinner", "Lunch", "Playgrounds", "Sightseeing"],
  },
  {
    name: "Gaudi House Museum",
    description: "Museum dedicated to Antoni Gaudi's life and work.",
    types: ["Museum"],
  },
  {
    name: "Moco Museum",
    description: "Contemporary art museum with rotating exhibitions.",
    types: ["Museum"],
  },
  {
    name: "City Sailing",
    description: "See Barcelona from the ocean. A unique perspective of the city.",
    types: ["Sightseeing"],
    googleMapsUrl: "https://maps.app.goo.gl/soL92xPJ3qgCxXVy5",
  },
  {
    name: "Sailing & Sightseeing Bus Combo",
    description: "Barcelona from ocean + bus tour combo.",
    types: ["Sightseeing"],
    location: "https://www.citysailing.es/en/combo-citytour-catamaran",
  },

  // Fine Dining
  {
    name: "Boraz",
    description: "Fine dining experience.",
    types: ["Dinner"],
  },
  {
    name: "Bar Omar",
    description: "Fantastic tapas in a modern way. Book table in advance. Not super kids friendly.",
    types: ["Dinner", "Lunch"],
  },
  {
    name: "Cerveseria Catalana",
    description: "Great tapas, kids friendly. Same owner as La Flauta with almost the same menu.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://www.google.com/maps/place/Cerveseria+Catalana/@41.3923291,2.1582766,17z",
  },
  {
    name: "La Flauta",
    description: "Great tapas, kids friendly. Same owner as Cerveseria Catalana.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/govMpqgFJKp2HAAv7",
  },
  {
    name: "Casa Lolea",
    description: "Great sangria and food. Book table in advance.",
    types: ["Dinner", "Lunch"],
  },
  {
    name: "El Nacional Barcelona",
    description: "Great place to eat, kids friendly. Beautiful interior.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/gP8B3f9BdPLFFdG68",
  },
  {
    name: "FiskeBar",
    description: "Inspired by Fiskebaren in Copenhagen. Seafood focused.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/QHx9E8stdh7deRWX7",
  },
  {
    name: "Colmado Wilmot",
    description: "Catalan food tapas style.",
    types: ["Lunch", "Snacks", "Tapas"],
    googleMapsUrl: "https://www.google.com/maps?q=Colmado+Wilmot",
  },
  {
    name: "Aspic",
    description: "Great tapas restaurant.",
    types: ["Tapas"],
    googleMapsUrl: "https://www.google.com/maps?q=Aspic,+Av.+de+Pau+Casals",
  },
  {
    name: "Fan Dim Sum",
    description: "Great Asian food.",
    types: ["Dinner"],
    googleMapsUrl: "https://maps.app.goo.gl/K1bxq1norSiBrs6BA",
  },
  {
    name: "Restaurant Lombo",
    description: "Great Italian food.",
    types: ["Dinner"],
    googleMapsUrl: "https://www.google.com/maps/place/Restaurant+Lombo",
  },
  {
    name: "Parking Pizza",
    description: "Great pizzas.",
    types: ["Pizza"],
    googleMapsUrl: "https://maps.app.goo.gl/ciis4Q22Gvx8T57W8",
  },
  {
    name: "Coya",
    description: "Food and party. Great for a night out.",
    types: ["Dinner", "Nightclub"],
    googleMapsUrl: "https://maps.app.goo.gl/ropy8mg7bSqYYmat7",
  },

  // Casual & Family Friendly
  {
    name: "Honest Greens",
    description: "Super nice healthy and fresh restaurant chain. Nothing wild, just good 'honest' food.",
    types: ["Breakfast/Brunch", "Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/sg4GcEBD1RCqsp3UA",
  },
  {
    name: "Gallito",
    description: "Nice restaurant on the beach, kids friendly.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/KyRiKzubKDzCeGYc6",
  },
  {
    name: "Restaurant Gala",
    description: "Nice restaurant with a garden. Kids friendly.",
    types: ["Dinner"],
    googleMapsUrl: "https://maps.app.goo.gl/35cipVn1abx39eEC6",
  },
  {
    name: "Cafe Paris",
    description: "Classic Barcelona cafe.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/ELxf8jzBcKHqzTs46",
  },
  {
    name: "Apluma",
    description: "Great chicken (homemade style) for delivery or takeaway. Try their pineapple dessert!",
    types: ["Dinner"],
    googleMapsUrl: "https://www.google.com/maps?q=Apluma+l+Restaurante",
  },

  // Coffee & Brunch
  {
    name: "Oma Coffee",
    description: "Best coffee in town.",
    types: ["Breakfast/Brunch", "Coffee", "Lunch"],
  },
  {
    name: "Oma Bistro",
    description: "Best coffee in town plus brunch options.",
    types: ["Breakfast/Brunch", "Coffee", "Lunch"],
  },
  {
    name: "Raw Studio",
    description: "A LatAm owned, Scandi inspired coffee spot.",
    types: ["Breakfast/Brunch", "Coffee", "Lunch"],
  },
  {
    name: "REX Cafe",
    description: "Great cafe for coffee and light meals.",
    types: ["Breakfast/Brunch", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/rrbQeGq1DSSta6Tt8",
  },
  {
    name: "Les Filles Cafe",
    description: "Nice cafe in the city.",
    types: ["Lunch"],
    googleMapsUrl: "https://www.google.com/maps/place/Les+Filles+Caf%C3%A8",
  },
  {
    name: "News & Coffee",
    description: "Great coffee takeaway spot.",
    types: ["Coffee"],
    googleMapsUrl: "https://maps.app.goo.gl/Xfgy5fQvQ4PujNgM6",
  },
  {
    name: "Billy Brunch & Garden",
    description: "Scandinavian style brunch place.",
    types: ["Breakfast/Brunch"],
    googleMapsUrl: "https://maps.app.goo.gl/3d9za8rJHghLp19H6",
  },
  {
    name: "Petitbo",
    description: "Recommended brunch spot on Passeig Sant Joan.",
    types: ["Breakfast/Brunch", "Lunch"],
    location: "Passeig Sant Joan 82",
  },
  {
    name: "Little Fern",
    description: "Laid-back brunch joint located in Poblenou.",
    types: ["Breakfast/Brunch", "Lunch"],
  },
  {
    name: "Faire Brunch & Drinks",
    description: "Nice place for a good tasting brunch. Vegan and vegetarian options.",
    types: ["Breakfast/Brunch"],
    location: "fairebrunch.com",
  },

  // Bakeries
  {
    name: "Origo",
    description: "One of the best bakeries in town. They even sell rugbrod (Danish rye bread)!",
    types: ["Bakery"],
  },
  {
    name: "Funky Bakers",
    description: "Nice chain of bakeries across Barcelona.",
    types: ["Bakery"],
  },
  {
    name: "Flying Monkey",
    description: "Hip cafe with food all day, wine, and a bakery with great bread.",
    types: ["Bakery", "Breakfast/Brunch", "Dinner", "Lunch"],
  },
  {
    name: "Lady Babka",
    description: "Great bakery with lunch options.",
    types: ["Bakery", "Lunch"],
    googleMapsUrl: "https://goo.gl/maps/W5R9rLBFyurfXVBQ6",
  },
  {
    name: "Brotzeit",
    description: "German-style bakery.",
    types: ["Bakery", "Snacks"],
    googleMapsUrl: "https://maps.app.goo.gl/4QgcsN1JrYbaaMXy7",
  },
  {
    name: "Oz Bakery",
    description: "Great bakery with option to eat some warm lunch as well.",
    types: ["Bakery"],
    googleMapsUrl: "https://maps.app.goo.gl/tHhFD7bqM7X2GVEv6",
  },

  // Bars & Nightlife
  {
    name: "Feroz",
    description: "Food is OK. Great interior and it turns into a bar/club during the night.",
    types: ["Bar", "Dinner"],
  },
  {
    name: "Gatsby",
    description: "Turns into a bar/club during the night. Great atmosphere.",
    types: ["Bar", "Dinner"],
  },
  {
    name: "Rooftop at Hotel Vincci Mae",
    description: "Rooftop bar for coffee or drinks with views.",
    types: ["Coffee", "Lunch"],
    googleMapsUrl: "https://www.google.com/maps?q=Hotel+Vincci+Mae",
  },

  // Parks & Family Areas
  {
    name: "Turo Park",
    description: "A nice park with a playground and a small cafe. Great for families.",
    types: ["Lunch", "Parks", "Playgrounds", "Snacks"],
    googleMapsUrl: "https://maps.app.goo.gl/zx85W9SvJChaMcN78",
  },
  {
    name: "Pinhan at Turo Park",
    description: "A nice spot to get something to drink and snacks while the kids play in Turo Park.",
    types: ["Breakfast/Brunch", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/ndqeuaXpiVuUzQuq9",
  },
  {
    name: "Placa de la Vila de Gracia",
    description: "A great area to let the kids play in the 'Plaza' and get something to eat/drink.",
    types: ["Dinner", "Lunch", "Playgrounds"],
    googleMapsUrl: "https://maps.app.goo.gl/FEH3TySue7EXwyaS7",
  },
  {
    name: "Placa del Sol",
    description: "Popular square in Gracia neighborhood.",
    types: ["Breakfast/Brunch", "Dinner", "Local Spots", "Lunch", "Playgrounds"],
    googleMapsUrl: "https://maps.app.goo.gl/A7auhVb8624Yhu4R8",
  },
  {
    name: "Placa Diamant Gracia",
    description: "Another lovely square in Gracia.",
    types: ["Breakfast/Brunch", "Coffee", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/DxgYEEN69trVcNRM7",
  },
  {
    name: "Square of the Revolution",
    description: "Local hangout spot in Gracia.",
    types: ["Dinner", "Local Spots", "Lunch", "Playgrounds"],
    googleMapsUrl: "https://maps.app.goo.gl/9aq7oZMZhTbuxHSh7",
  },
  {
    name: "Virreina Square",
    description: "Charming square in Gracia neighborhood.",
    types: ["Dinner", "Local Spots", "Lunch", "Playgrounds"],
    googleMapsUrl: "https://maps.app.goo.gl/P8b1WLN7RdzwUWYS8",
  },
  {
    name: "Quick Greek Gracia",
    description: "Greek takeaway food near playgrounds.",
    types: ["Dinner", "Local Spots", "Lunch", "Playgrounds"],
    googleMapsUrl: "https://maps.app.goo.gl/JMY4enTB1GckJSq89",
  },

  // Ice Cream & Snacks
  {
    name: "AMMA Gelato",
    description: "Great gelato shop.",
    types: ["Snacks"],
    googleMapsUrl: "https://maps.app.goo.gl/wJfFiEBW3f7Usfxm8",
  },

  // Hotels
  {
    name: "Casa Bonay",
    description: "Hip vibe hotel with DJ events. Recommended for a stylish stay.",
    types: ["Hotel"],
  },
  {
    name: "Yurban",
    description: "Recommended hotel option.",
    types: ["Hotel"],
  },
  {
    name: "Vincci Hotels",
    description: "Great hotel chain with multiple locations in town. Would recommend checking out the one on Diagonal.",
    types: ["Hotel"],
  },
  {
    name: "Wilson Boutique Hotel",
    description: "Boutique hotel option.",
    types: ["Hotel"],
    googleMapsUrl: "https://goo.gl/maps/7Jgr5ub2Y3n4cQYW7",
  },

  // Short-term & Co-living
  {
    name: "Enjoy Apartments",
    description: "Alternative to Airbnb for short-term stays.",
    types: ["Short-term rentals"],
    location: "https://enjoyapartments.com/",
  },
  {
    name: "By Months",
    description: "Furnished rentals for medium-term stays.",
    types: ["Long-term rental", "Short-term rentals"],
    location: "https://bymonths.com/",
  },
  {
    name: "Enter Coliving",
    description: "Furnished co-living spaces for digital nomads and remote workers.",
    types: ["Co-living"],
    location: "https://entercoliving.com/",
  },
  {
    name: "Ukio",
    description: "Furnished rentals for flexible stays.",
    types: ["Long-term rental", "Short-term rentals"],
    location: "https://ukio.com/",
  },

  // Recommended (Not Yet Visited)
  {
    name: "Bosco",
    description: "Recommended, haven't tried yet.",
    types: ["Dinner", "Lunch"],
  },
  {
    name: "Arenal",
    description: "Recommended, haven't tried yet. Kids friendly.",
    types: ["Dinner", "Lunch"],
  },
  {
    name: "Bar del Convent",
    description: "Recommended, haven't been yet.",
    types: ["Dinner", "Lunch"],
    googleMapsUrl: "https://maps.app.goo.gl/Xns4V55JvHkyRtZK9",
  },
];

// Helper functions
export const getPlacesByType = (type: string) =>
  places.filter(place => place.types.includes(type));

export const restaurants = getPlacesByType('Dinner').concat(getPlacesByType('Lunch'));
export const cafes = getPlacesByType('Coffee').concat(getPlacesByType('Breakfast/Brunch'));
export const hotels = getPlacesByType('Hotel');
export const sightseeing = getPlacesByType('Sightseeing');
export const familyFriendly = getPlacesByType('Playgrounds');
export const bakeries = getPlacesByType('Bakery');
export const bars = getPlacesByType('Bar');
export const accommodations = [...getPlacesByType('Hotel'), ...getPlacesByType('Short-term rentals'), ...getPlacesByType('Co-living')];
