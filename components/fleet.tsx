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

        {/* 3 Fleet Cards Grid with Studio Cutout Vehicles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {fleetData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className={`rounded-3xl overflow-hidden bg-white border transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                selectedId === item.id ? "border-[#103322] ring-2 ring-[#A7C4A0]/40 shadow-xl" : "border-[#A7C4A0]/30"
              }`}
              onClick={() => setSelectedId(item.id)}
            >
              <div>
                {/* Vehicle Showcase Box with Studio Lighting Effect */}
                <div className="relative h-64 w-full bg-gradient-to-b from-[#F9F7F2] to-white p-6 flex items-center justify-center border-b border-gray-100 overflow-hidden group">
                  <div className="relative w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-[#103322]/90 backdrop-blur-md text-[#F4EFE6] text-[11px] font-semibold uppercase tracking-wider font-sans">
                      {item.category}
                    </span>
                  </div>

                  {/* Daily Rate Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#A7C4A0] text-[#103322] text-xs font-bold font-sans shadow-md border border-white/40">
                      {item.ratePerDay}
                    </span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-5 font-sans">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#103322]">
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#6C8A66] font-mono font-medium pt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Capacity & Luggage Badges */}
                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-gray-100 text-xs text-gray-700">
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-[#6C8A66]" />
                      <span>{item.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={16} className="text-[#6C8A66]" />
                      <span>{item.luggage}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5">
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold block">
                      Included Amenities
                    </span>
                    <ul className="space-y-2 text-xs text-gray-600">
                      {item.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Check size={14} className="text-[#6C8A66] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 sm:p-8 pt-0 font-sans">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}