"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, ShieldCheck, Compass, CalendarCheck, ArrowUpRight } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function TravelGuarantees() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(1);

  const items = [
    {
      id: "destinations",
      icon: Mountain,
      title: "New Destinations",
      subtitle: "Uncharted Ceylon",
      description: "Explore newly curated, uncrowded tea estate trails, secluded southern beaches, and sacred citadels.",
      badge: "Curated Trails",
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Safe Adventure",
      subtitle: "SLTDA Certified",
      description: "100% insured commercial fleets, rigorous vehicle sanitization, and defensive mountain-certified chauffeurs.",
      badge: "Guaranteed Safety",
      featured: true,
    },
    {
      id: "guidance",
      icon: Compass,
      title: "24h Guidance",
      subtitle: "Continuous Concierge",
      description: "Dedicated 24/7 coordination team and multilingual guides ensuring seamless assistance across every mile.",
      badge: "Always Online",
    },
    {
      id: "flexibility",
      icon: CalendarCheck,
      title: "Flexible Dates",
      subtitle: "Tailored to You",
      description: "Adjust daily stop timings and tour dates with total freedom and zero unexpected penalty fees.",
      badge: "Zero Penalties",
    },
  ];

  const loopItems = [...items, ...items, ...items];

  const renderCard = (item: (typeof items)[0], index: number, isMobile = false) => {
    const Icon = item.icon;
    const isHovered = hoveredIdx === index;

    return (
      <div
        key={`${item.id}-${index}-${isMobile ? "mob" : "desk"}`}
        onMouseEnter={() => setHoveredIdx(index)}
        className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-md ${
          isMobile ? "w-[285px] shrink-0" : "w-full"
        } ${
          isHovered
            ? "bg-white border-2 border-[#103322] shadow-xl -translate-y-1"
            : "bg-white/90 border border-[#A7C4A0]/40 hover:bg-white"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div
              className={`w-13 h-13 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                isHovered
                  ? "bg-[#103322] text-[#A7C4A0] scale-105 shadow-md"
                  : "bg-[#F4EFE6] text-[#6C8A66] border border-[#A7C4A0]/40"
              }`}
            >
              <Icon size={24} strokeWidth={1.8} />
            </div>

            <span
              className={`text-[10px] uppercase font-bold font-sans tracking-wider px-2.5 py-1 rounded-full ${
                isHovered
                  ? "bg-[#A7C4A0]/30 text-[#103322]"
                  : "bg-[#F4EFE6] text-gray-500"
              }`}
            >
              {item.badge}
            </span>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C8A66] font-semibold block">
              {item.subtitle}
            </span>
            <h3 className="font-serif text-2xl font-bold text-[#103322] tracking-tight group-hover:text-[#6C8A66] transition-colors">
              {item.title}
            </h3>
            <p className="text-xs text-[#4e6359] leading-relaxed font-sans font-light">
              {item.description}
            </p>
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#103322]">
          <span className="text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-[#103322] transition-colors">
            Learn More
          </span>
          <ArrowUpRight
            size={14}
            className={`text-[#6C8A66] transition-transform duration-300 ${
              isHovered ? "translate-x-0.5 -translate-y-0.5 text-[#103322]" : ""
            }`}
          />
        </div>
      </div>
    );
  };

  return (
    <section className="py-14 bg-[#F4EFE6] border-b border-[#A7C4A0]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop View: Static 4-Column Grid */}
        <div className="hidden lg:block">
          <ScrollFade direction="up">
            <div className="grid grid-cols-4 gap-6">
              {items.map((item, index) => renderCard(item, index, false))}
            </div>
          </ScrollFade>
        </div>
      </div>

      {/* Mobile View: Smooth Horizontal Auto-scroll Left-to-Right */}
      <div className="block lg:hidden relative w-full overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          className="flex gap-4 w-max px-4"
        >
          {loopItems.map((item, index) => renderCard(item, index, true))}
        </motion.div>
      </div>
    </section>
  );
}