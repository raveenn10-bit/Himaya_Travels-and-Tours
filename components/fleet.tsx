"use client";

import React from "react";
import { fleetData } from "@/lib/data";
import { Users, Briefcase, Wind, ArrowRight } from "lucide-react";

export default function FleetSection({
  onSelectFleet,
}: {
  onSelectFleet?: (fleetName: string) => void;
}) {
  const handleSelect = (fleetName: string) => {
    if (onSelectFleet) onSelectFleet(fleetName);
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      bookingPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#faf8f5]" id="fleet">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Pristine Fleet Classes
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Select Your Vessel
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans">
            Immaculate sedans, cruiser vans, and event coaches detailed daily for supreme cabin comfort.
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleetData.map((vessel) => (
            <article
              key={vessel.id}
              className="bg-white rounded-3xl p-8 border border-[#c5a880]/20 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
                  <h3 className="font-serif text-2xl font-bold text-[#103322]">
                    {vessel.title}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#103322]/10 text-[#103322] font-sans">
                    <Users size={13} /> {vessel.pax}
                  </span>
                </div>

                <p className="text-sm text-[#4e6359] leading-relaxed mb-6 font-sans">
                  {vessel.desc}
                </p>

                {/* Specs */}
                <div className="space-y-3 py-4 border-t border-b border-gray-100 mb-6 text-sm font-sans">
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center gap-2">
                      <Briefcase size={14} className="text-[#c5a880]" /> Luggage Capacity
                    </span>
                    <strong className="text-[#103322]">{vessel.specs.luggage}</strong>
                  </div>
                  <div className="flex justify-between items-center text-gray-600">
                    <span className="flex items-center gap-2">
                      <Wind size={14} className="text-[#c5a880]" /> {vessel.specs.feature.label}
                    </span>
                    <strong className="text-[#103322]">{vessel.specs.feature.value}</strong>
                  </div>
                  <div className="flex justify-between items-center text-gray-600 pt-1">
                    <span>Daily Rate</span>
                    <span className="font-serif text-lg font-bold text-[#c5a880]">
                      {vessel.specs.price}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => handleSelect(vessel.title)}
                className="w-full py-3 px-6 rounded-full border border-[#103322] text-[#103322] hover:bg-[#103322] hover:text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                Inquire This Vessel <ArrowRight size={14} />
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
