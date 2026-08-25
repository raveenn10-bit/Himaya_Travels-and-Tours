"use client";

import React from "react";
import { destinationsData } from "@/lib/data";

export default function DestinationsShowcase() {
  return (
    <section className="py-24 bg-[#faf8f5]" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Visual Storytelling
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#103322] tracking-tight">
            Destination Themes
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans">
            Experience the multi-faceted island. From the ruins of ancient royal cities to high tea in mist-draped mountains, discover our curated destinations.
          </p>
        </div>

        {/* Asymmetrical Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          {/* Card 1: Large Featured (Sigiriya) */}
          <div className="md:col-span-8 relative min-h-[460px] md:min-h-[540px] rounded-3xl overflow-hidden group shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${destinationsData[0].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-12 text-white">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold mb-2">
                {destinationsData[0].category}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
                {destinationsData[0].title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
                {destinationsData[0].desc}
              </p>
            </div>
          </div>

          {/* Card 2: Vertical (Ella Tea Valleys) */}
          <div className="md:col-span-4 relative min-h-[460px] md:min-h-[540px] rounded-3xl overflow-hidden group shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${destinationsData[1].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold mb-2">
                {destinationsData[1].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                {destinationsData[1].title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {destinationsData[1].desc}
              </p>
            </div>
          </div>

          {/* Card 3: Standard (Golden Shores) */}
          <div className="md:col-span-5 relative min-h-[380px] md:min-h-[420px] rounded-3xl overflow-hidden group shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${destinationsData[2].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold mb-2">
                {destinationsData[2].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                {destinationsData[2].title}
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {destinationsData[2].desc}
              </p>
            </div>
          </div>

          {/* Card 4: Horizontal (Land of Lakes / Nature) */}
          <div className="md:col-span-7 relative min-h-[380px] md:min-h-[420px] rounded-3xl overflow-hidden group shadow-lg">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${destinationsData[3].image}')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10 text-white">
              <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold mb-2">
                {destinationsData[3].category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold mb-3">
                {destinationsData[3].title}
              </h3>
              <p className="text-sm text-gray-300 max-w-lg leading-relaxed">
                {destinationsData[3].desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
