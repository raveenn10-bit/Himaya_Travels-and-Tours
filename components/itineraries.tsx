"use client";

import React from "react";
import { itinerariesData } from "@/lib/data";
import { Check, ArrowRight } from "lucide-react";

export default function ItinerariesSection({
  onSelectTrack,
}: {
  onSelectTrack?: (trackName: string) => void;
}) {
  const handleSelect = (trackName: string) => {
    if (onSelectTrack) onSelectTrack(trackName);
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      bookingPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-white" id="tracks">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Suggested Paths
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Pre-Designed Journeys
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans">
            Select a popular passage outline to pre-fill your luxury booking inquiry details.
          </p>
        </div>

        {/* Itineraries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {itinerariesData.map((item) => (
            <article
              key={item.id}
              className="bg-[#faf8f5] rounded-3xl overflow-hidden border border-[#c5a880]/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Box */}
                <div className="relative h-60 w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#103322] font-sans shadow">
                    {item.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-serif text-2xl font-bold text-[#103322] mb-4">
                    {item.title}
                  </h3>

                  <ul className="space-y-2.5 mb-6 text-sm text-[#4e6359] font-sans">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#103322]/10 text-[#103322] flex items-center justify-center">
                          <Check size={11} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-8 pt-0">
                <button
                  onClick={() => handleSelect(item.trackParam)}
                  className="w-full py-3 px-6 rounded-full border border-[#103322] text-[#103322] hover:bg-[#103322] hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  Prefill Concierge Form <ArrowRight size={14} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
