"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Briefcase, Check, ArrowRight } from "lucide-react";
import { fleetData, FleetItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export interface FleetProps {
  onSelectFleet?: (vehicleName: string) => void;
  onSelectVehicle?: (vehicleName: string) => void;
}

export default function Fleet({ onSelectFleet, onSelectVehicle }: FleetProps) {
  const [selectedId, setSelectedId] = useState<string>(fleetData[0].id);

  const loopFleet = [...fleetData, ...fleetData];

  const handleBookFleet = (item: FleetItem) => {
    if (onSelectFleet) {
      onSelectFleet(item.name);
    } else if (onSelectVehicle) {
      onSelectVehicle(item.name);
    } else {
      const el = document.querySelector("#booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderFleetCard = (item: FleetItem, idx: number, isMobile = false) => (
    <div
      key={`${item.id}-${idx}-${isMobile ? "mob" : "desk"}`}
      className={`rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer ${
        isMobile ? "w-[295px] shrink-0" : "w-full"
      } ${
        selectedId === item.id ? "border-[#103322] ring-2 ring-[#A7C4A0]/40 shadow-xl" : "border-[#A7C4A0]/30"
      }`}
      onClick={() => setSelectedId(item.id)}
    >
      <div>
        {/* Vehicle Showcase Box with Studio Lighting Effect & Clear Badges */}
        <div className="relative h-60 sm:h-72 w-full bg-gradient-to-b from-[#F9F7F2] via-white to-gray-50/80 p-4 pt-14 flex items-center justify-center border-b border-gray-100 overflow-hidden group">
          {/* Top Non-overlapping Badge Row */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20 font-sans">
            <span className="px-3 py-1 rounded-full bg-[#103322]/90 backdrop-blur-md text-[#F4EFE6] text-[10px] font-semibold uppercase tracking-wider shadow-sm truncate max-w-[55%]">
              {item.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#A7C4A0] text-[#103322] text-[11px] font-bold shadow-sm border border-white/60 shrink-0">
              {item.ratePerDay}
            </span>
          </div>

          {/* Prominently Fitted Vehicle Image */}
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.name}
              fill
              loading="lazy"
              decoding="async"
              className="object-contain scale-110 sm:scale-120 group-hover:scale-125 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>

          {/* Ground Shadow Floor Indicator */}
          <div className="absolute bottom-3 w-3/4 h-3 bg-black/10 rounded-full blur-md pointer-events-none" />
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4 font-sans">
          <div>
            <h3 className="font-serif text-2xl font-bold text-[#103322]">
              {item.name}
            </h3>
            <p className="text-xs text-[#6C8A66] font-mono font-medium pt-0.5">
              {item.subtitle}
            </p>
          </div>

          {/* Capacity & Luggage Badges */}
          <div className="grid grid-cols-2 gap-3 py-2.5 border-y border-gray-100 text-xs text-gray-700">
            <div className="flex items-center gap-2">
              <Users size={15} className="text-[#6C8A66]" />
              <span>{item.capacity}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={15} className="text-[#6C8A66]" />
              <span>{item.luggage}</span>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-2">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold block">
              Included Amenities
            </span>
            <ul className="space-y-1.5 text-xs text-gray-600">
              {item.features.slice(0, 4).map((feat, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check size={13} className="text-[#6C8A66] shrink-0" />
                  <span className="truncate">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="p-6 pt-0 font-sans">
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleBookFleet(item);
          }}
          className="w-full py-3.5 rounded-full bg-[#103322] hover:bg-[#A7C4A0] hover:text-[#103322] text-[#F4EFE6] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
        >
          <span>Select {item.name}</span>
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#F4EFE6] overflow-hidden" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] block mb-3 font-sans">
            Private Luxury Transport
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Our Maintained Fleet
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans font-light">
            Every vehicle in the Himaya fleet is pristine, climate-controlled, equipped with onboard Wi-Fi, and piloted by a certified English-speaking private driver.
          </p>
        </ScrollFade>

        {/* Desktop View: 3 Fleet Cards Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {fleetData.map((item, idx) => renderFleetCard(item, idx, false))}
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
            duration: 20,
            repeat: Infinity,
          }}
          className="flex gap-4 w-max px-4"
        >
          {loopFleet.map((item, idx) => renderFleetCard(item, idx, true))}
        </motion.div>
      </div>
    </section>
  );
}