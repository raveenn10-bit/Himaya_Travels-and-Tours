"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { destinationsData, DestinationItem } from "@/lib/data";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface DestinationsProps {
  onSelectDestination?: (title: string) => void;
}

export default function Destinations({ onSelectDestination }: DestinationsProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { key: "all", label: "All Regions" },
    { key: "culture", label: "Cultural Triangle" },
    { key: "highlands", label: "Misty Highlands" },
    { key: "coast", label: "Southern Coast" },
    { key: "wildlife", label: "Wildlife Safaris" },
  ];

  const filteredDestinations =
    activeFilter === "all"
      ? destinationsData
      : destinationsData.filter((d) => d.category === activeFilter);

  const handleInquire = (title: string) => {
    if (onSelectDestination) {
      onSelectDestination(title);
    } else {
      const el = document.querySelector("#booking-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderCard = (dest: DestinationItem, idx: number, isMobile = false) => (
    <div
      key={`${dest.id}-${idx}-${isMobile ? "mob" : "desk"}`}
      className={`group relative rounded-3xl overflow-hidden shadow-xl border border-[#A7C4A0]/30 bg-[#121614] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl snap-center ${
        isMobile ? "w-[295px] h-[450px] shrink-0" : idx % 3 === 0 ? "min-h-[480px] md:col-span-2 lg:col-span-1" : "min-h-[440px]"
      }`}
    >
      {/* Background Image */}
      <Image
        src={dest.image}
        alt={dest.alt}
        fill
        loading="lazy"
        decoding="async"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.72] group-hover:brightness-[0.62]"
        sizes="(max-width: 768px) 295px, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Gradient Scrim */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

      {/* Floating Region & Pricing Tag */}
      <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full bg-[#121614]/85 backdrop-blur-md border border-[#A7C4A0]/50 text-[11px] font-semibold text-[#A7C4A0] uppercase tracking-wider font-sans">
          {dest.categoryLabel}
        </span>
        <span className="px-3 py-1 rounded-full bg-[#F4EFE6]/95 backdrop-blur-md text-[11px] font-bold text-[#103322] font-sans shadow-sm border border-[#A7C4A0]/30">
          {dest.pricing}
        </span>
      </div>

      {/* Card Bottom Content */}
      <div className="relative z-10 space-y-3">
        <span className="text-[11px] uppercase tracking-widest text-[#A7C4A0] font-sans font-bold block">
          {dest.tagline}
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
          {dest.title}
        </h3>
        <p className="text-xs text-[#F4EFE6]/90 font-light font-sans leading-relaxed line-clamp-3">
          {dest.description}
        </p>

        {/* Highlights Badges */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {dest.highlights.slice(0, 3).map((h, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-white/10 backdrop-blur-xs text-[10px] text-[#F4EFE6] border border-white/15 font-sans"
            >
              <Sparkles size={10} className="text-[#A7C4A0]" />
              {h}
            </span>
          ))}
        </div>

        {/* Action Trigger */}
        <div className="pt-3 flex items-center justify-between border-t border-white/15">
          <button
            onClick={() => handleInquire(dest.title)}
            className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-semibold text-white group-hover:text-[#A7C4A0] transition-colors cursor-pointer"
          >
            <span>Inquire Passage</span>
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`https://wa.me/94767885107?text=${encodeURIComponent(
              `Hello Himaya Tours & Travels! I am interested in exploring ${dest.title}. Please provide details.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#25D366] hover:bg-emerald-600 text-white transition-all shadow-md hover:scale-110"
            title="Direct WhatsApp"
            aria-label={`WhatsApp inquiry for ${dest.title}`}
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#F4EFE6] overflow-hidden" id="destinations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] block mb-3 font-sans">
              Curated Geography
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
              Regions & Sacred Landscapes
            </h2>
            <p className="mt-4 text-base text-[#4e6359] leading-relaxed font-sans font-light">
              From the colossal stone citadels of the dry zone to cloud-kissed tea estates and pristine southern coasts, explore Ceylon in private luxury.
            </p>
          </div>

          {/* Region Filter Buttons */}
          <div className="flex flex-wrap gap-2 mt-6 md:mt-0 font-sans">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveFilter(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeFilter === cat.key
                    ? "bg-[#103322] text-[#F4EFE6] shadow-md scale-105"
                    : "bg-white/80 border border-[#A7C4A0]/40 text-gray-800 hover:bg-[#A7C4A0] hover:text-[#103322]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollFade>

        {/* Desktop View: Grid */}
        <div className="hidden md:block">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredDestinations.map((dest, idx) => renderCard(dest, idx, false))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Mobile View: Horizontal Snap Scroll Left to Right (Single Non-Looping Sequence) */}
      <div className="block md:hidden relative w-full overflow-x-auto scroll-smooth snap-x snap-mandatory py-3 px-4 flex gap-4 scrollbar-none">
        {filteredDestinations.map((dest, idx) => renderCard(dest, idx, true))}
      </div>
    </section>
  );
}