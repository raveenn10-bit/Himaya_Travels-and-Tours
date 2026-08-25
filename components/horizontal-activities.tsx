"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, MapPin, Sparkles, ArrowRight } from "lucide-react";
import { activitiesData, ActivityItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface ActivitiesProps {
  onSelectActivity?: (activityTitle: string) => void;
}

export default function HorizontalActivities({ onSelectActivity }: ActivitiesProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === "left" ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleInquireActivity = (title: string) => {
    if (onSelectActivity) {
      onSelectActivity(title);
    } else {
      const el = document.querySelector("#booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="activities-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Navigation Controls and Scroll Fade */}
        <ScrollFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
              Signature Encounters
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
              Cinematic Ceylon Moments
            </h2>
            <p className="mt-4 text-base text-[#4e6359] leading-relaxed font-sans font-light">
              Experience the untamed beauty of Sri Lanka through private video-guided passages led by your dedicated chauffeur-guide.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-3 mt-6 md:mt-0">
            <button
              onClick={() => handleScroll("left")}
              className="p-3.5 rounded-full border border-gray-200 hover:border-[#103322] hover:bg-[#103322] hover:text-white transition-all text-gray-700 shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="p-3.5 rounded-full border border-gray-200 hover:border-[#103322] hover:bg-[#103322] hover:text-white transition-all text-gray-700 shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </ScrollFade>

        {/* Horizontal Scrolling Video Cards Track */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-8 pt-2 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {activitiesData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
              className="min-w-[300px] sm:min-w-[380px] lg:min-w-[420px] snap-center rounded-3xl overflow-hidden bg-[#121614] border border-[#c5a880]/20 shadow-xl group flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Looping Video Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.85] contrast-[1.05]"
                >
                  <source src={item.videoSrc} type="video/mp4" />
                </video>

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-black/20 to-transparent pointer-events-none" />

                {/* Category & Duration Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 font-sans">
                  <span className="px-3 py-1 rounded-full bg-[#121614]/80 backdrop-blur-md border border-[#c5a880]/40 text-white text-[11px] font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#103322] text-[11px] font-bold flex items-center gap-1 shadow-sm">
                    <Clock size={12} /> {item.duration}
                  </span>
                </div>
              </div>

              {/* Text Information Body */}
              <div className="p-6 sm:p-7 space-y-4 font-sans flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-[#c5a880] font-semibold">
                    <MapPin size={13} />
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Inclusions & Action Button */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {item.inclusions.map((inc, i) => (
                      <span
                        key={i}
                        className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
                      >
                        {inc}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleInquireActivity(item.title)}
                    className="w-full py-3 rounded-2xl bg-[#103322] hover:bg-[#c5a880] hover:text-[#103322] text-white border border-[#c5a880]/30 font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Reserve Experience</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}