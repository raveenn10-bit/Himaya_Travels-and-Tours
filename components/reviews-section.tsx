"use client";

import React, { useState, useEffect } from "react";
import ReviewsSlider from "./reviews-slider";
import AddReviewSection from "./add-review-form";
import { initialReviewsData, ReviewItem } from "@/lib/data";

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<ReviewItem[]>(initialReviewsData);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("himaya-travels-reviews") ||
                     localStorage.getItem("luxeceylon-premium-reviews");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const customMapped: ReviewItem[] = parsed.map((item: any, idx: number) => ({
            id: item.id || `custom-${idx}`,
            name: item.name || "Anonymous",
            affiliation: `${item.country || "Guest"} • Guest Review`,
            quote: item.message || item.text || "",
            imageSrc: "/logo.PNG",
            thumbnailSrc: "/logo.PNG",
            rating: Number(item.rating) || 5,
            isCustom: true,
          }));
          setReviews([...customMapped, ...initialReviewsData]);
        }
      }
    } catch (err) {
      console.error("Failed to load local reviews:", err);
    }
  }, []);

  const handleReviewAdded = (newReview: ReviewItem) => {
    setReviews((prev) => [newReview, ...prev]);
  };

  return (
    <section className="py-24 bg-white" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Guest Logs
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Verified Testimonials
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans">
            Discover authentic stories shared by couples, families, and businesses who explored with us.
          </p>
        </div>

        {/* Framer Motion Testimonial Slider */}
        <ReviewsSlider reviews={reviews} />

        {/* Add Review & Travel Policy Section */}
        <AddReviewSection onReviewAdded={handleReviewAdded} />
      </div>
    </section>
  );
}
