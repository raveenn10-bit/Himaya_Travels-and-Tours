"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { activitiesData, ActivityItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface ActivitiesProps {
  onSelectActivity?: (activityTitle: string) => void;
}

export default function HorizontalActivities({ onSelectActivity }: ActivitiesProps) {
  const handleInquireActivity = (title: string) => {
    if (onSelectActivity) {
      onSelectActivity(title);
    } else {
      const el = document.querySelector("#booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const loopActivities = [...activitiesData, ...activitiesData];

  const renderActivityCard = (item: ActivityItem, index: number, isMobile = false) => (
    <div
      key={`${item.id}-${index}-${isMobile ? "mob" : "desk"}`}
      className={`rounded-3xl overflow-hidden bg-[#121614] border border-[#A7C4A0]/30 shadow-xl group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-[#A7C4A0] ${
        isMobile ? "w-[285px] shrink-0" : "w-full"
      }`}
    >
      <div>
        {/* Looping Video Container */}
        <div className="relative h-56 w-full overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster={item.imageFallback}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-[0.9] contrast-[1.05]"
          >
            <source src={item.videoSrc} type="video/mp4" />
          </video>

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-black/20 to-transparent pointer-events-none" />

          {/* Category & Duration Tag */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 font-sans">
            <span className="px-3 py-1 rounded-full bg-[#121614]/80 backdrop-blur-md border border-[#A7C4A0]/40 text-[#A7C4A0] text-[10px] font-semibold uppercase tracking-wider">
              {item.category}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#103322] text-[10px] font-bold flex items-center gap-1 shadow-sm">
              <Clock size={11} /> {item.duration}
            </span>
          </div>
        </div>

        {/* Text Information Body */}
        <div className="p-5 sm:p-6 space-y-3 font-sans">
          <div className="flex items-center gap-1.5 text-xs text-[#A7C4A0] font-semibold">
            <MapPin size={13} />
            <span>{item.location}</span>
          </div>
          <h3 className="font-serif text-xl font-bold text-white tracking-wide group-hover:text-[#A7C4A0] transition-colors leading-tight">
            {item.title}
          </h3>
          <p className="text-xs text-[#F4EFE6]/80 font-light leading-relaxed line-clamp-3">
            {item.description}
          </p>

          {/* Inclusions */}
          <div className="pt-1 flex flex-wrap gap-1.5">
            {item.inclusions.slice(0, 2).map((inc, i) => (
              <span
                key={i}
                className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-md"
              >
                {inc}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-5 sm:p-6 pt-0 font-sans">
        <button
          onClick={() => handleInquireActivity(item.title)}
          className="w-full py-3 rounded-2xl bg-[#103322] hover:bg-[#A7C4A0] hover:text-[#103322] text-[#F4EFE6] border border-[#A7C4A0]/30 font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
        >
          <span>Reserve Experience</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#A7C4A0]/25 overflow-hidden" id="activities-showcase">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Fade */}
        <ScrollFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-14 max-w-4xl">
          <div>
            <span className="section-kicker text-[#6C8A66] mb-4">
              Signature Encounters
            </span>
            <h2 className="type-cinematic text-[#103322]">
              Cinematic Ceylon Moments
            </h2>
            <p className="section-lede mt-5 text-[#4e6359]">
              Experience the untamed beauty of Sri Lanka through private video-guided passages led by your dedicated chauffeur-guide.
            </p>
          </div>
        </ScrollFade>

        {/* Desktop View: 4-Column Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {activitiesData.map((item, index) => renderActivityCard(item, index, false))}
        </div>
      </div>

      {/* Mobile View: Starts from 1st Card and auto-scrolls through to the last card, seamlessly looping */}
      <div className="block lg:hidden relative w-full overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 22,
            repeat: Infinity,
          }}
          className="flex gap-4 w-max px-4"
        >
          {loopActivities.map((item, index) => renderActivityCard(item, index, true))}
        </motion.div>
      </div>
    </section>
  );
}
