"use client";

import React, { useState, useEffect } from "react";
import { InfiniteMovingCards, InfiniteMovingCardItem } from "@/components/ui/infinite-moving-cards";
import AddReviewSection from "./add-review-form";
import { initialReviewsData, ReviewItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";
import { Star, ShieldCheck, MessageSquare } from "lucide-react";

export default function ReviewsSection() {
  const [localCustomReviews, setLocalCustomReviews] = useState<ReviewItem[]>([]);

  const defaultItems: InfiniteMovingCardItem[] = [
    {
      id: 1,
      title: "Unforgettable Ceylon Honeymoon",
      description:
        "Himaya Tours & Travels provided the absolute highlight of our honeymoon. Our private driver-guide was deeply knowledgeable, polite, and navigated the mountain passes with utmost grace. The high-roof van was spotless with iced bottled water provided daily.",
      rating: 5,
      tags: ["Highland & Safari", "Verified Guest"],
      name: "Oliver & Sophie Montgomery",
      role: "🇬🇧 London, UK • 7-Day Expedition",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Flawless Punctuality & Communication",
      description:
        "Exceptional punctuality, flawless English communication, and an impeccably maintained luxury sedan. We always felt safe and completely relaxed throughout our trip from Sigiriya down to Galle Fort. Highest recommendation for anyone traveling to Sri Lanka.",
      rating: 5,
      tags: ["Island Odyssey", "VIP Chauffeur"],
      name: "Dr. Markus & Helga Weber",
      role: "🇩🇪 Munich, Germany • 10-Day Island Tour",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Seamless Journey with Young Children",
      description:
        "Traveling with two young kids can be demanding, but Himaya Travels made everything effortless. The vehicle had great AC, fast Wi-Fi, and our driver knew the best quiet rest stops, scenic waterfalls, and wild elephant viewpoints. Superb service!",
      rating: 5,
      tags: ["Family Journey", "KDH VIP Van"],
      name: "Aiden & Claire Richardson",
      role: "🇦🇺 Melbourne, Australia • Family Coast & Wild",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 4,
      title: "Pristine Luxury & Royal Hospitality",
      description:
        "From the prompt meet-and-greet at Colombo Airport with chilled towels to our final sunset at Galle Fort, everything was executed with precision. Harsha and the team truly care about guest comfort and authentic Ceylon cultural immersion.",
      rating: 5,
      tags: ["Airport Meet & Greet", "Cultural Tour"],
      name: "Elena Rostova & Jean-Paul",
      role: "🇫🇷 Paris, France • 5-Day Heritage Route",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "The Ultimate Scenic Mountain Passage",
      description:
        "We booked the Kandy to Ella tea country transfer and safari link. The chauffeur handled luggage seamlessly while we boarded the observation train and was waiting with a smile at Ella station. 10/10 experience!",
      rating: 5,
      tags: ["Ella Scenic Rail", "Tea Country"],
      name: "Liam & Jessica van Dijk",
      role: "🇳🇱 Amsterdam, Netherlands • Scenic Highlands",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    },
  ];

  useEffect(() => {
    try {
      const stored =
        localStorage.getItem("himaya-travels-reviews") ||
        localStorage.getItem("luxeceylon-premium-reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLocalCustomReviews(parsed);
        }
      }
    } catch (err) {
      console.error("Failed to load local reviews:", err);
    }
  }, []);

  const handleReviewAdded = (newReview: ReviewItem) => {
    setLocalCustomReviews((prev) => [newReview, ...prev]);
  };

  // Convert custom reviews to InfiniteMovingCardItem format
  const customItems: InfiniteMovingCardItem[] = localCustomReviews.map((r, idx) => ({
    id: `custom-${idx}`,
    title: "Verified Guest Experience",
    description: r.quote,
    rating: r.rating || 5,
    tags: ["Guest Review", "Verified Guest"],
    name: r.name,
    role: r.affiliation || "International Traveler",
    avatar: "/logo.PNG",
  }));

  const allItems = [...customItems, ...defaultItems];

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#A7C4A0]/25 overflow-hidden" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#103322]/10 border border-[#A7C4A0]/40 text-xs font-semibold text-[#103322] mb-3">
            <ShieldCheck size={14} className="text-[#6C8A66]" />
            <span className="uppercase tracking-widest text-[10px] font-sans font-bold">100% Verified Guest Logs</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Loved by Travelers Worldwide
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans font-light">
            Discover unfiltered impressions from international couples, families, and solo explorers who journeyed across Sri Lanka with Himaya Tours & Travels.
          </p>
        </ScrollFade>
      </div>

      {/* Infinite Moving Cards Row 1 (Moving Left) */}
      <div className="w-full pb-4">
        <InfiniteMovingCards
          items={allItems}
          speed="normal"
          direction="left"
          pauseOnHover={true}
          className="py-2"
        />
      </div>

      {/* Infinite Moving Cards Row 2 (Moving Right, Slightly Slower for layered depth) */}
      <div className="w-full pt-2 pb-12">
        <InfiniteMovingCards
          items={[...allItems].reverse()}
          speed="slow"
          direction="right"
          pauseOnHover={true}
          className="py-2"
        />
      </div>

      {/* Add Review & Travel Policy Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <AddReviewSection onReviewAdded={handleReviewAdded} />
      </div>
    </section>
  );
}