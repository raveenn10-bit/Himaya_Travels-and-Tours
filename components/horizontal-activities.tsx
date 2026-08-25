"use client";

import React, { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { activitiesData } from "@/lib/data";

export default function HorizontalActivities() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#121614] text-white overflow-hidden" id="activities-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Island Activities
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            Immersive Experiences
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl font-sans text-sm sm:text-base">
            Scroll to view rare moments curated by our concierge hosts.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollLeft}
            className="p-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-[#c5a880] hover:text-[#103322] hover:border-[#c5a880] transition-all cursor-pointer"
            aria-label="Previous slide"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={scrollRight}
            className="p-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-[#c5a880] hover:text-[#103322] hover:border-[#c5a880] transition-all cursor-pointer"
            aria-label="Next slide"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Horizontal Video Slider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {activitiesData.map((activity) => (
            <article
              key={activity.number}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] bg-[#1c221e] border border-white/10 rounded-3xl overflow-hidden shadow-xl snap-start group"
            >
              {/* Video Box */}
              <div className="relative h-[260px] sm:h-[300px] w-full overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                >
                  <source src={activity.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c221e] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 text-xs font-mono font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#c5a880]">
                  {activity.number}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-[#c5a880] transition-colors">
                  {activity.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans">
                  {activity.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
