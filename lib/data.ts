export interface DestinationItem {
  id: string;
  title: string;
  tagline: string;
  category: "culture" | "highlands" | "coast" | "wildlife";
  categoryLabel: string;
  image: string;
  alt: string;
  aspect: string;
  description: string;
  pricing: string;
  highlights: string[];
}

export interface ActivityItem {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  videoSrc: string;
  imageFallback: string;
  description: string;
  inclusions: string[];
}

export interface FleetItem {
  id: string;
  name: string;
  subtitle: string;
  category: string;
  capacity: string;
  luggage: string;
  image: string;
  ratePerDay: string;
  idealFor: string;
  features: string[];
}

export interface ItineraryItem {
  id: string;
  days: string;
  title: string;
  tagline: string;
  route: string;
  idealSeason: string;
  highlights: string[];
  inclusions: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  country?: string;
  flag?: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
  rating: number;
  date?: string;
  tourTaken?: string;
  isCustom?: boolean;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "sigiriya-dambulla",
    title: "Sigiriya & Royal Dambulla",
    tagline: "The Lion Rock Citadel & Cave Temples",
    category: "culture",
    categoryLabel: "Cultural Triangle",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
    alt: "Sigiriya rock fortress Lion Rock Ceylon",
    aspect: "h-[450px] lg:h-[500px]",
    description: "Ascend the 5th-century palace in the sky and marvel at ancient fresco galleries, water gardens, and gilded cave sanctuaries.",
    pricing: "From $55 / Day Chauffeur",
    highlights: ["Lion Rock Summit", "Dambulla Golden Cave", "Minneriya Safari Link", "Village Cooking Class"],
  },
  {
    id: "ella-nuwaraeliya",
    title: "Ella & Nuwara Eliya",
    tagline: "Misty Tea Valleys & Nine Arch Bridge",
    category: "highlands",
    categoryLabel: "Misty Highlands",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
    alt: "Misty highlands and tea plantations of Ceylon",
    aspect: "h-[360px]",
    description: "Wind through rolling emerald hills, colonial tea estates, roaring waterfalls, and the world-renowned panoramic highland train.",
    pricing: "From $60 / Day Chauffeur",
    highlights: ["Nine Arch Viaduct", "Artisan Tea Factory", "Little Adam's Peak", "Ramboda Falls"],
  },
  {
    id: "galle-mirissa",
    title: "Galle Fort & Golden South Coast",
    tagline: "17th-Century Dutch Ramparts & Ocean Sunsets",
    category: "coast",
    categoryLabel: "Southern Coast",
    image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    alt: "Galle Fort ramparts and tropical coastline",
    aspect: "h-[360px]",
    description: "Walk cobblestone streets lined with artisan boutiques and Dutch colonial architecture before relaxing on palm-fringed golden beaches.",
    pricing: "From $45 / Day Chauffeur",
    highlights: ["Dutch Fort Walking Tour", "Mirissa Whale Watching", "Stilt Fishermen Passages", "Turtle Conservation"],
  },
  {
    id: "yala-udawalawe",
    title: "Yala & Udawalawe Wildlife",
    tagline: "Leopard Dens & Elephant Herds in the Wild",
    category: "wildlife",
    categoryLabel: "Wildlife Sanctuary",
    image: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop",
    alt: "Wild leopards and elephants in Sri Lankan nature reserves",
    aspect: "h-[450px] lg:h-[500px]",
    description: "Track the elusive Ceylon leopard in Yala and witness majestic elephant gatherings along Udawalawe's scenic reservoir shores.",
    pricing: "From $65 / Day Chauffeur",
    highlights: ["4x4 Leopard Safari", "Udawalawe Elephant Orphanage", "Bundala Bird Haven", "Bush Camping Option"],
  },
];

export const activitiesData: ActivityItem[] = [
  {
    id: "galle-walk",
    title: "Galle Fort Sunset Walk",
    category: "Heritage & Architecture",
    location: "Galle, Southern Province",
    duration: "3 - 4 Hours",
    videoSrc: "/Assets/Galle Fort Walk.mp4",
    imageFallback: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop",
    description: "Stroll along historic 17th-century coral ramparts as the Indian Ocean sun paints the sky in shades of amber and gold.",
    inclusions: ["Private Certified Guide", "Artisan Gelato Stop", "Lighthouse & Ramparts Pass"],
  },
  {
    id: "highland-railway",
    title: "The Highland Scenic Train",
    category: "Panoramic Transit",
    location: "Kandy to Ella Highland Line",
    duration: "Full Day / 6 Hours",
    videoSrc: "/Assets/The Highland Railway.mp4",
    imageFallback: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
    description: "One of the world's most breathtaking railway journeys, weaving through cloud forests, deep gorges, and cascading tea estates.",
    inclusions: ["First Class Observation Tickets", "Luggage Chauffeur Transfer", "Nine Arch Viewpoint"],
  },
  {
    id: "elephant-safari",
    title: "Wild Elephant & Leopard Safaris",
    category: "Eco-Wildlife",
    location: "Yala & Minneriya National Parks",
    duration: "Half Day (Morning or Sunset)",
    videoSrc: "/Assets/Wild Elephant Safaris.mp4",
    imageFallback: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=800&auto=format&fit=crop",
    description: "Custom modified 4x4 open-top luxury jeeps tracking magnificent wild herds, sloth bears, and leopards in their untouched habitats.",
    inclusions: ["Private Custom 4x4 Jeep", "Expert Tracker & Chauffeur", "National Park Permits & Refreshments"],
  },
  {
    id: "tea-cupping",
    title: "Highland Single-Estate Tea Cupping",
    category: "Culinary & Agriculture",
    location: "Nuwara Eliya & Dimbula",
    duration: "2 - 3 Hours",
    videoSrc: "/Assets/Highland Tea Cupping.mp4",
    imageFallback: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
    description: "Discover the nuanced orthodox artisanal manufacturing of Ceylon tea with estate sommeliers followed by high tea overlooking tea valleys.",
    inclusions: ["Master Cupping Session", "Estate Factory Access", "Private High Tea Terrace"],
  },
];

export const fleetData: FleetItem[] = [
  {
    id: "prestige-sedan",
    name: "Prestige Luxury Sedan",
    subtitle: "Toyota Prius / Allion / Premio / Axio Hybrid",
    category: "Couples & Solo Explorers",
    capacity: "1 - 3 Passengers",
    luggage: "2 Large + 2 Cabin Bags",
    ratePerDay: "$45 - $55 / Day",
    idealFor: "Airport Pickups, Romantic Getaways & Business Travel",
    image: "/Assets/fleet-prius-sedan.png",
    features: [
      "Dual Climate Control AC",
      "Plush Leather Reclining Seats",
      "Complimentary High-Speed Wi-Fi",
      "Chilled Mineral Water & Wet Tissues",
      "Phone Fast-Charging Ports",
      "English & Sinhala Speaking Chauffeur",
      "Highway Tolls & Fuel Included",
    ],
  },
  {
    id: "grand-cruiser",
    name: "Grand Cruiser VIP Van",
    subtitle: "Toyota KDH High-Roof / Super GL Luxury Cabin",
    category: "Families & Small Groups",
    capacity: "4 - 8 Passengers",
    luggage: "6 Large + 5 Cabin Bags",
    ratePerDay: "$65 - $80 / Day",
    idealFor: "Family Round Tours, Island Expeditions & Surf Trips",
    image: "/Assets/fleet-kdh-van.png",
    features: [
      "Individual High-Back Velvet/Leather Recliners",
      "Overhead Dual AC Vents per Row",
      "Tinted UV-Protection Privacy Windows",
      "Large Panoramic Sightseeing Windows",
      "Roof Rack / Surfboard Mount on Request",
      "Chilled Ice-Box for Beverages",
      "Experienced Mountain Route Chauffeur",
    ],
  },
  {
    id: "signature-coach",
    name: "Signature Event Mini Coach",
    subtitle: "Toyota Coaster VIP Luxury Coach",
    category: "Corporate & Event Groups",
    capacity: "9 - 22 Passengers",
    luggage: "20+ Large Luggage",
    ratePerDay: "Custom Bespoke Quote",
    idealFor: "Destination Weddings, Corporate Retreats & Large Delegations",
    image: "/Assets/fleet-coaster-coach.png",
    features: [
      "Ergonomic VIP Air-Suspension Seats",
      "PA System & Onboard Entertainment",
      "Spacious Under-Floor Luggage Holds",
      "Dedicated Chauffeur & Logistics Assistant",
      "Multi-Zone High-Capacity Climate Control",
      "Full Commercial Travel Insurance Coverage",
    ],
  },
];

export const itinerariesData: ItineraryItem[] = [
  {
    id: "heritage-wonders",
    days: "4 Days / 3 Nights",
    title: "Kingdoms & Rock Citadels",
    tagline: "Colombo • Sigiriya • Dambulla • Kandy",
    route: "Airport ➔ Sigiriya Rock ➔ Golden Dambulla Caves ➔ Sacred Temple of the Tooth ➔ Kandy",
    idealSeason: "Year-Round",
    highlights: ["Sigiriya 5th-Century Sky Fortress", "Dambulla Frescoes", "Cultural Dance Gala", "Spice Gardens"],
    inclusions: ["Dedicated Chauffeur & Sedan", "Unlimited Kilometers", "All Fuel & Tolls", "Airport Meet & Greet"],
  },
  {
    id: "ceylon-highlands-wild",
    days: "7 Days / 6 Nights",
    title: "Highland Mist & Wildlife Safari",
    tagline: "Kandy • Nuwara Eliya • Ella • Yala Safari • Galle",
    route: "Kandy ➔ Tea Estates ➔ Highland Scenic Railway ➔ Nine Arch Bridge ➔ Yala Leopard Safari ➔ Galle Fort",
    idealSeason: "October to April (South/West) & May to Sept (East)",
    highlights: ["Panoramic Scenic Train Journey", "Highland Tea Cupping", "Yala 4x4 Leopard Safari", "Galle Rampart Sunset"],
    inclusions: ["VIP Grand Cruiser Van", "Chauffeur Lodging Included", "24/7 Concierge Support", "Airport Transfers"],
  },
  {
    id: "grand-island-odyssey",
    days: "10 Days / 9 Nights",
    title: "The Ultimate Ceylon Odyssey",
    tagline: "Full Island Exploration (Cultural Triangle + Highlands + Coast)",
    route: "Negombo ➔ Sigiriya ➔ Polonnaruwa ➔ Kandy ➔ Nuwara Eliya ➔ Ella ➔ Yala ➔ Mirissa ➔ Galle ➔ Airport",
    idealSeason: "Year-Round Custom Route",
    highlights: ["Ancient Ruins & Citadels", "Scenic Highland Rail", "Whale Watching at Mirissa", "Colonial Galle Heritage"],
    inclusions: ["Private Luxury Chauffeur & Vehicle", "Full Fuel & Express Highway Tolls", "Complimentary 4G Wi-Fi", "Daily Chilled Waters"],
  },
];

export const initialReviewsData: ReviewItem[] = [
  {
    id: "1",
    name: "Oliver & Sophie Montgomery",
    country: "United Kingdom",
    flag: "🇬🇧",
    affiliation: "London, UK • 7-Day Highland & Safari Expedition",
    quote: "Himaya Tours & Travels provided the absolute highlight of our honeymoon. Our private chauffeur, was deeply knowledgeable, polite, and navigated the mountain passes with utmost grace. The high-roof van was spotless with iced bottled water provided daily.",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    date: "February 2026",
    tourTaken: "7-Day Highland & Safari Track",
  },
  {
    id: "2",
    name: "Dr. Markus & Helga Weber",
    country: "Germany",
    flag: "🇩🇪",
    affiliation: "Munich, Germany • 10-Day Island Odyssey",
    quote: "Exceptional punctuality, flawless English and German communication, and an impeccably maintained luxury sedan. We always felt safe and completely relaxed throughout our trip from Sigiriya down to Galle Fort. Highest recommendation.",
    imageSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    date: "January 2026",
    tourTaken: "10-Day Ultimate Ceylon Odyssey",
  },
  {
    id: "3",
    name: "Aiden & Claire Richardson",
    country: "Australia",
    flag: "🇦🇺",
    affiliation: "Melbourne, Australia • Family Wildlife Journey",
    quote: "Traveling with two young kids can be demanding, but Himaya Travels made everything seamless. The vehicle had supreme AC, great Wi-Fi, and our driver knew the best quiet rest stops and wild elephant viewpoints. Superb service!",
    imageSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    thumbnailSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
    rating: 5,
    date: "December 2025",
    tourTaken: "Custom 5-Day Wildlife & Coast",
  },
];