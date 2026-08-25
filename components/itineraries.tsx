"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles, Check, ArrowRight } from "lucide-react";
import { itinerariesData, ItineraryItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface ItinerariesProps {
  onSelectTrack?: (trackTitle: string) => void;
}

export default function Itineraries({ onSelectTrack }: ItinerariesProps) {
  const handleSelectTrack = (track: ItineraryItem) => {
    if (onSelectTrack) {
      onSelectTrack(track.title);
    } else {
      const el = document.querySelector("#booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden" id="tracks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Suggested Expeditions
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Curated Sri Lanka Tracks
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans font-light">
            Flexible private driver journeys tailored to your rhythm. Customize stops, accommodations, and durations with our 24/7 concierge team.
          </p>
        </ScrollFade>

        {/* 3 Itinerary Cards Grid with Motion */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {itinerariesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-3xl bg-[#faf8f5] border border-[#c5a880]/20 p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Duration & Season Tag */}
                <div className="flex items-center justify-between font-sans">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#103322] text-[#c5a880] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
                    <Clock size={13} /> {item.days}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500">
                    {item.idealSeason}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#103322]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#c5a880] font-sans font-bold uppercase tracking-wider mt-1.5">
                    {item.tagline}
                  </p>
                </div>

                {/* Route String */}
                <div className="p-4 rounded-2xl bg-white border border-gray-200/70 font-sans text-xs text-gray-700 leading-relaxed">
                  <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">
                    Route Waypoints
                  </span>
                  <span className="font-medium text-[#103322]">{item.route}</span>
                </div>

                {/* Highlights List */}
                <div className="space-y-2 font-sans">
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                    Key Highlights
                  </span>
                  <ul className="space-y-2 text-xs text-gray-600">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Sparkles size={13} className="text-[#c5a880] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Inclusions */}
                <div className="space-y-2 font-sans pt-2 border-t border-gray-200/60">
                  <span className="text-xs font-bold text-gray-800 uppercase tracking-wider block">
                    Transit Inclusions
                  </span>
                  <ul className="space-y-1.5 text-xs text-gray-600">
                    {item.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={13} className="text-emerald-600 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 font-sans space-y-2">
                <button
                  onClick={() => handleSelectTrack(item)}
                  className="w-full py-3.5 rounded-full bg-[#103322] hover:bg-[#c5a880] hover:text-[#103322] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire This Track</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={`https://wa.me/94767885107?text=${encodeURIComponent(
                    `Hello Himaya Tours & Travels! I would like to book the "${item.title}" itinerary (${item.days}).`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-[#103322] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors border border-emerald-200"
                >
                  <span>Quick WhatsApp Booking</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}