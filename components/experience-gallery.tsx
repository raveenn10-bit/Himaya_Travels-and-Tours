"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Camera, X, ArrowRight, Sparkles, MapPin } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

const GALLERY_IMAGES = [
  { id: 1, src: "/experience-gallery/experience-1.jpg", caption: "VIP Guest Arrival & Private Chauffeur Meet" },
  { id: 2, src: "/experience-gallery/experience-2.jpg", caption: "Family Expedition across Sri Lanka" },
  { id: 3, src: "/experience-gallery/experience-3.jpg", caption: "Scenic Rest Stop in Tea Country" },
  { id: 4, src: "/experience-gallery/experience-4.jpg", caption: "Heritage Temple Tour in Cultural Triangle" },
  { id: 5, src: "/experience-gallery/experience-5.jpg", caption: "Happy International Travelers on Tour" },
  { id: 6, src: "/experience-gallery/experience-6.jpg", caption: "Southern Coastline & Beachside Transit" },
  { id: 7, src: "/experience-gallery/experience-7.jpg", caption: "Sigiriya Citadel & Ancient Rock Fortress" },
  { id: 8, src: "/experience-gallery/experience-8.jpg", caption: "Wildlife 4x4 Safari Experience" },
  { id: 9, src: "/experience-gallery/experience-9.jpg", caption: "Misty Highlands & Waterfall Viewpoint" },
  { id: 10, src: "/experience-gallery/experience-10.jpg", caption: "Clean Maintained Fleet on the Road" },
  { id: 11, src: "/experience-gallery/experience-11.jpg", caption: "Galle Fort Sunset Coastal Walk" },
  { id: 12, src: "/experience-gallery/experience-12.jpg", caption: "Authentic Local Tea Estate Visit" },
  { id: 13, src: "/experience-gallery/experience-13.jpg", caption: "Memorable Island Milestone Journey" },
];

export default function ExperienceGallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; caption: string } | null>(null);

  // Duplicated arrays for continuous infinite smooth loop
  const loopRow1 = [...GALLERY_IMAGES, ...GALLERY_IMAGES];
  const loopRow2 = [...GALLERY_IMAGES.slice(6), ...GALLERY_IMAGES.slice(0, 6), ...GALLERY_IMAGES];

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#A7C4A0]/25 overflow-hidden" id="experience-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#103322]/10 border border-[#A7C4A0]/40 text-xs font-semibold text-[#103322] mb-3">
            <Camera size={14} className="text-[#6C8A66]" />
            <span className="uppercase tracking-widest text-[10px] font-sans font-bold">
              Real On-Road Travel Proof
            </span>
          </div>
          <h2 className="type-cinematic text-[#103322]">
            Moments from Our Private Expeditions
          </h2>
          <p className="section-lede mt-5 mx-auto text-[#4e6359]">
            Every journey with Himaya Tours & Travels is genuine. Explore real moments, smiling international guests, and unforgettable Sri Lankan landscapes safely guided by our team.
          </p>
        </ScrollFade>
      </div>

      {/* Row 1: Auto-scrolling Rail (Left to Right / Infinite Marquee) */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Side Gradient Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 38,
            repeat: Infinity,
          }}
          className="flex gap-4 sm:gap-6 w-max"
        >
          {loopRow1.map((item, idx) => (
            <div
              key={`row1-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="relative w-64 sm:w-80 h-48 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200 border border-[#A7C4A0]/40 shadow-md group cursor-pointer shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                sizes="(max-width: 768px) 260px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[11px] font-sans font-semibold text-white/95 truncate block drop-shadow-sm">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Auto-scrolling Rail (Right to Left / Infinite Marquee) */}
      <div className="relative w-full overflow-hidden py-3">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 42,
            repeat: Infinity,
          }}
          className="flex gap-4 sm:gap-6 w-max"
        >
          {loopRow2.map((item, idx) => (
            <div
              key={`row2-${idx}`}
              onClick={() => setSelectedImage(item)}
              className="relative w-64 sm:w-80 h-48 sm:h-56 rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-200 border border-[#A7C4A0]/40 shadow-md group cursor-pointer shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={item.src}
                alt={item.caption}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-100"
                sizes="(max-width: 768px) 260px, 320px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[11px] font-sans font-semibold text-white/95 truncate block drop-shadow-sm">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal on Image Click */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          >
            <div
              className="relative max-w-4xl w-full max-h-[85vh] rounded-3xl overflow-hidden bg-[#121614] border border-[#A7C4A0]/40 shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#A7C4A0] hover:text-[#103322] transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <div className="relative w-full h-[60vh] sm:h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-4 text-center">
                <p className="font-serif text-lg text-white">{selectedImage.caption}</p>
                <span className="text-xs text-[#A7C4A0] font-sans uppercase tracking-wider">
                  Himaya Tours & Travels • Verified Guest Moment
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
