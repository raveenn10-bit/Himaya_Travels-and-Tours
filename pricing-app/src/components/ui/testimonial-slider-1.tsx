"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "./button";

// Define the type for a single review
type Review = {
  id: string | number;
  name: string;
  affiliation: string;
  quote: string;
  imageSrc: string;
  thumbnailSrc: string;
  rating?: number;
};

// Define the props for the slider component
interface TestimonialSliderProps {
  reviews: Review[];
  /** Optional class name for the container */
  className?: string;
}

/**
 * A reusable, animated testimonial slider component.
 * Custom-styled to fit the LuxeCeylon premium brand.
 */
export const TestimonialSlider = ({
  reviews,
  className,
}: TestimonialSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  if (!reviews || reviews.length === 0) {
    return <div className="text-center p-8 text-gray-500">No testimonials available.</div>;
  }

  const activeReview = reviews[currentIndex];

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const handleThumbnailClick = (index: number) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  // Get the next 3 reviews for the thumbnails, excluding the current one
  // If reviews list is short, we filter out current index
  const thumbnailReviews = reviews
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  // Animation variants for the main image
  const imageVariants = {
    enter: (dir: "left" | "right") => ({
      y: dir === "right" ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { y: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      y: dir === "right" ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  // Animation variants for the text content
  const textVariants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 50 : -50,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -50 : 50,
      opacity: 0,
    }),
  };

  return (
    <div
      className={cn(
        "relative w-full min-h-[600px] md:min-h-[500px] overflow-hidden bg-gradient-to-b from-[#faf8f5] to-[#f3eee4] text-[#121614] p-8 md:p-12 rounded-3xl border border-[#c5a880]/15 shadow-sm",
        className
      )}
    >
      {/* Small accent line on top */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#103322] via-[#c5a880] to-[#0e3d5c]"></div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full items-stretch">
        {/* === Left Column: Meta and Thumbnails === */}
        <div className="md:col-span-3 flex flex-col justify-between order-2 md:order-1 mt-6 md:mt-0">
          <div className="flex flex-row md:flex-col justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-6">
            {/* Pagination */}
            <span className="text-sm font-bold tracking-widest text-[#c5a880] font-mono">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </span>
            {/* Vertical "Reviews" Text */}
            <h2 className="text-xs font-bold tracking-[0.25em] uppercase [writing-mode:vertical-rl] md:rotate-180 hidden md:block text-[#103322]/40 font-sans">
              Guest Feedback
            </h2>
          </div>

          {/* Thumbnail Navigation */}
          <div>
            <span className="text-[11px] uppercase tracking-wider text-gray-400 block mb-3 font-semibold font-sans">Other Stories</span>
            <div className="flex space-x-3">
              {thumbnailReviews.map((review) => {
                const originalIndex = reviews.findIndex((r) => r.id === review.id);
                return (
                  <button
                    key={review.id}
                    onClick={() => handleThumbnailClick(originalIndex)}
                    className="overflow-hidden rounded-2xl w-14 h-18 md:w-16 md:h-20 opacity-60 hover:opacity-100 hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#c5a880] focus:ring-offset-2 border border-gray-200"
                    aria-label={`View review from ${review.name}`}
                  >
                    <img
                      src={review.thumbnailSrc}
                      alt={review.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* === Center Column: Main Image === */}
        <div className="md:col-span-4 relative min-h-[350px] md:min-h-[400px] order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg border border-white/40">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={activeReview.imageSrc}
              alt={activeReview.name}
              custom={direction}
              variants={imageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-5 flex flex-col justify-between md:pl-8 order-3 md:order-3">
          {/* Text Content */}
          <div className="relative overflow-hidden pt-4 md:pt-12 min-h-[220px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center space-x-1 mb-3 text-amber-500 text-sm">
                  {"★".repeat(activeReview.rating || 5)}
                </div>
                
                <p className="text-xs font-bold tracking-wider uppercase text-[#c5a880] font-sans">
                  {activeReview.affiliation}
                </p>
                <h3 className="text-2xl font-bold mt-1 text-[#103322] font-serif">
                  {activeReview.name}
                </h3>
                <blockquote className="mt-4 text-xl md:text-2xl font-serif italic leading-relaxed text-[#2c3330]">
                  "{activeReview.quote}"
                </blockquote>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center space-x-3 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-11 h-11 border-[#c5a880]/30 text-[#103322] hover:bg-[#103322] hover:text-white hover:border-[#103322] transition-all duration-300"
              onClick={handlePrev}
              aria-label="Previous review"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="default"
              size="icon"
              className="rounded-full w-11 h-11 bg-[#103322] text-white hover:bg-[#c5a880] transition-all duration-300"
              onClick={handleNext}
              aria-label="Next review"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
