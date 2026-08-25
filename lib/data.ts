export interface DestinationItem {
  id: string;
  category: string;
  title: string;
  desc: string;
  image: string;
  layout: "large" | "vertical" | "standard" | "horizontal";
  speed: number;
}

export interface ActivityItem {
  number: string;
  title: string;
  desc: string;
  video: string;
}

export interface FleetItem {
  id: string;
  title: string;
  pax: string;
  desc: string;
  specs: {
    luggage: string;
    feature: { label: string; value: string };
    price: string;
  };
}

export interface ItineraryItem {
  id: string;
  badge: string;
  title: string;
  image: string;
  features: string[];
  trackParam: string;
}

export interface ReviewItem {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
  rating?: number;
  isCustom?: boolean;
}

export const destinationsData: DestinationItem[] = [
  {
    id: "sigiriya",
    category: "Historical Sites",
    title: "Ancient Fortresses",
    desc: "Ascend the monumental Lion Rock of Sigiriya, an ancient palace suspended between earth and sky.",
    image: "/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg",
    layout: "large",
    speed: 0.08,
  },
  {
    id: "ella",
    category: "Misty Highlands",
    title: "Nine Arch Valleys",
    desc: "Traverse cloud-swept valleys of Ceylon tea plantations and colonial train arcs.",
    image: "https://i.pinimg.com/736x/34/3d/ef/343def361e12fa29bac7f137c7ac5251.jpg",
    layout: "vertical",
    speed: 0.12,
  },
  {
    id: "galle",
    category: "Golden Shores",
    title: "Galle Fort & Beaches",
    desc: "Stroll 17th-century ramparts and relax under swaying palms on pristine sands.",
    image: "https://i.pinimg.com/736x/e5/14/dd/e514dde6240d308294c8b62d48d25934.jpg",
    layout: "standard",
    speed: 0.06,
  },
  {
    id: "safari",
    category: "Land of Lakes & Wildlife",
    title: "Bespoke Eco-Safaris",
    desc: "Venture into national sanctuaries bordering water reserves to spot leopards and wild elephants.",
    image: "https://i.pinimg.com/736x/20/ef/18/20ef18c140b7f3d55e68f1c1641fa112.jpg",
    layout: "horizontal",
    speed: 0.1,
  },
];

export const activitiesData: ActivityItem[] = [
  {
    number: "01",
    title: "The Highland Railway",
    desc: "A slow-travel railway journey through waterfalls, tea hills, and pine forests.",
    video: "/Assets/The Highland Railway.mp4",
  },
  {
    number: "02",
    title: "Galle Fort Walk",
    desc: "Walk colonial ramparts with a local storyteller, uncovering secrets of spice trade days.",
    video: "/Assets/Galle Fort Walk.mp4",
  },
  {
    number: "03",
    title: "Wild Elephant Safaris",
    desc: "Witness magnificent elephant herds in their native habitat at Minneriya or Yala national reserves.",
    video: "/Assets/Wild Elephant Safaris.mp4",
  },
  {
    number: "04",
    title: "Highland Tea Cupping",
    desc: "Learn the fine art of tea plucking and taste single-origin Ceylon leaves inside an active factory.",
    video: "/Assets/Highland Tea Cupping.mp4",
  },
];

export const fleetData: FleetItem[] = [
  {
    id: "sedan",
    title: "Prestige Sedan",
    pax: "3 Passengers",
    desc: "Luxury sedans, ideal for couples, business executives, and premium airport transitions.",
    specs: {
      luggage: "2 Large Bags",
      feature: { label: "Climate control", value: "Dual A/C Zone" },
      price: "$45 / Day",
    },
  },
  {
    id: "cruiser",
    title: "Grand Cruiser Van",
    pax: "7 Passengers",
    desc: "Spacious high-roof cruiser vans, designed for families, active gear, and multi-day tours.",
    specs: {
      luggage: "6 Large Bags",
      feature: { label: "Add-on comfort", value: "Captain Recliners" },
      price: "$65 / Day",
    },
  },
  {
    id: "coach",
    title: "Signature Event Coach",
    pax: "15+ Passengers",
    desc: "VIP coaches optimized for large family delegations, weddings, and group travels.",
    specs: {
      luggage: "Underdeck Bay",
      feature: { label: "Audio setup", value: "Premium PA System" },
      price: "Bespoke Quote",
    },
  },
];

export const itinerariesData: ItineraryItem[] = [
  {
    id: "sigiriya-heritage",
    badge: "1-Day Heritage",
    title: "Sigiriya Heritage Escape",
    image: "/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg",
    features: [
      "Guided Sigiriya Lion Rock Fortress climb",
      "Dambulla ancient cave murals",
      "Village lunch & pottery demonstration",
    ],
    trackParam: "Sigiriya Heritage Escape (1-Day Tour)",
  },
  {
    id: "galle-coastal",
    badge: "1-Day Maritime",
    title: "Galle Coastal Passage",
    image: "https://i.pinimg.com/736x/c9/2e/d2/c92ed290590ecd9916aca816a8f3ce7a.jpg",
    features: [
      "Walk 17th-century UNESCO Galle Dutch Fort",
      "Observe traditional stilt fishermen",
      "Visit sea turtle conservation hatcheries",
    ],
    trackParam: "Galle Coastal Journey (1-Day Tour)",
  },
  {
    id: "highland-sanctuary",
    badge: "3 Days / 2 Nights",
    title: "Highland Sanctuary",
    image: "https://i.pinimg.com/736x/ca/66/7f/ca667f397295af5a4202003e4d99c321.jpg",
    features: [
      "Ella Nine Arch colonial bridge hike",
      "Nuwara Eliya panoramic tea garden walk",
      "Scenic train crossing high mountain passes",
    ],
    trackParam: "Highland Sanctuary (3 Days / 2 Nights)",
  },
];

export const initialReviewsData: ReviewItem[] = [
  {
    id: "static-1",
    name: "Elena & Pierre",
    affiliation: "France • Premium Sedan",
    quote:
      "LuxeCeylon crafted an extraordinary honeymoon for us. The Mercedes sedan was spotless, and our chauffeur guide was highly knowledgeable and elegant.",
    imageSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-2",
    name: "Dr. Alister Vance",
    affiliation: "United Kingdom • Family Cruiser",
    quote:
      "Travelling with three kids is demanding, but the luxury van made our 12-day round tour flawless. Safe driving and flexible, stress-free scheduling.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-3",
    name: "Sophia Chen",
    affiliation: "Singapore • Airport Transfer",
    quote:
      "Concierge service was exceptionally professional. Prompt midnight pickup, beautiful corporate fleet, and smooth coordination.",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-4",
    name: "Marcus Cole",
    affiliation: "Australia • Multi-Day Expedition",
    quote:
      "A true time-saver. Highly recommend LuxeCeylon for anyone visiting Sri Lanka. Our guide was incredibly polite, spoke fluent English, and drove perfectly.",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
];
