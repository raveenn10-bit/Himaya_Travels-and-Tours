"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Map, CalendarCheck, ThumbsUp, ArrowRight } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Map,
      title: "Exquisite Destinations:",
      description:
        "Our carefully curated journeys span the jewel of the Indian Ocean, ensuring you have access to breathtaking peaks, ancient rock kingdoms in Sigiriya, misty tea hills in Ella, and serene golden coastlines in Galle.",
    },
    {
      icon: CalendarCheck,
      title: "Tailored Packages:",
      description:
        "Whether you're a solo adventurer, a couple seeking a romantic tropical escape, or a family yearning for seamless travel with children, our customizable packages cater to all your needs. Choose from our pre-designed itineraries or let us tailor one specifically for you.",
    },
    {
      icon: ThumbsUp,
      title: "Expert Guidance:",
      description:
        "Our team of SLTDA-certified chauffeur-guides and travel experts is dedicated to making every mile effortless. From VIP airport greetings to finding hidden waterfalls and authentic local cuisine, we're with you every step of the way.",
    },
  ];

  return (
    <section className="py-24 bg-[#F4EFE6] relative overflow-hidden" id="why-choose">
      {/* Topographic Contour Lines Background Overlay */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#103322_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Content & 3 Feature Points */}
          <ScrollFade direction="right" className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-[0.25em] text-[#6C8A66] block mb-2 font-sans">
                Why Choose
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#103322] leading-tight">
                Travel with Harsha for Your Sri Lankan Journey?
              </h2>
            </div>

            <div className="space-y-7 font-sans">
              {points.map((pt, index) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-start gap-4 sm:gap-5 group"
                  >
                    {/* Icon Circle */}
                    <div className="w-12 h-12 rounded-full bg-[#103322] text-[#A7C4A0] flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 group-hover:bg-[#A7C4A0] group-hover:text-[#103322] transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    {/* Text */}
                    <div className="space-y-1">
                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#103322] tracking-tight">
                        {pt.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4e6359] leading-relaxed font-light">
                        {pt.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/94767885107"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#103322] hover:bg-[#A7C4A0] hover:text-[#103322] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
              >
                <span>Plan Your Journey with Harsha & Himaya</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </ScrollFade>

          {/* Right Column: 4-Photo Asymmetrical Collage Grid with Genuine Sri Lanka Photos */}
          <ScrollFade direction="left" className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Left Column of Collage (Photos 1 & 2) */}
              <div className="col-span-6 space-y-4">
                {/* 1. Cultural Heritage: Sigiriya Lion Rock Fortress */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg"
                    alt="Sigiriya Rock Fortress UNESCO Citadel Sri Lanka"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Cultural Heritage
                  </span>
                </div>

                {/* 2. Authentic Flavors: Traditional Ceylon Hopper & Curry Feast */}
                <div className="relative h-64 sm:h-76 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop"
                    alt="Traditional Sri Lankan Culinary Curry & Clay Pot Feast"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Authentic Flavors
                  </span>
                </div>
              </div>

              {/* Right Column of Collage (Photos 3 & 4) */}
              <div className="col-span-6 space-y-4">
                {/* 3. Misty Highlands: Ella Nine Arch Bridge & Tea Hills */}
                <div className="relative h-64 sm:h-76 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop"
                    alt="Ella Nine Arch Bridge & Misty Tea Plantations Sri Lanka"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Misty Highlands
                  </span>
                </div>

                {/* 4. Golden Coastline: Mirissa Coconut Tree Hill & Galle Shore */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop"
                    alt="Mirissa Palm Coastline and Galle Fort Sri Lanka"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Golden Coastline
                  </span>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}