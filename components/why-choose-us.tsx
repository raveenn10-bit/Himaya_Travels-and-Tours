"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Map, CalendarCheck, ThumbsUp, Sparkles, ArrowRight } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function WhyChooseUs() {
  const points = [
    {
      icon: Map,
      iconBg: "from-[#4A90E2] to-[#357ABD]",
      title: "Exquisite Destinations:",
      description:
        "Our carefully curated journeys span the most breathtaking corners of Sri Lanka—from ancient UNESCO rock fortresses in Sigiriya to mist-veiled highland tea valleys and serene southern beaches. We ensure you experience authentic Ceylon wonders far beyond the standard tourist trail.",
    },
    {
      icon: CalendarCheck,
      iconBg: "from-[#5B9DF8] to-[#3B82F6]",
      title: "Tailored Packages:",
      description:
        "Whether you're a solo adventurer, a couple seeking a romantic tropical escape, or a family yearning for seamless travel with children, our customizable packages cater to all your needs. Choose from our signature routes or let our concierge design an exclusive custom passage just for you.",
    },
    {
      icon: ThumbsUp,
      iconBg: "from-[#60A5FA] to-[#2563EB]",
      title: "Expert Guidance:",
      description:
        "Our team of SLTDA-certified chauffeur-guides and travel experts is dedicated to making every mile effortless. From VIP airport greetings and scenic rest-stop recommendations to finding the finest boutique stays, we're by your side 24/7.",
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
                Travel with Himaya for Your Sri Lankan Journey?
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

          {/* Right Column: 4-Photo Asymmetrical Collage Grid */}
          <ScrollFade direction="left" className="lg:col-span-6">
            <div className="grid grid-cols-12 gap-4">
              {/* Left Column of Collage (Photos 1 & 2) */}
              <div className="col-span-6 space-y-4">
                {/* 1. Cultural Temple Festival (Perahera / Temple of Tooth) */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1578632767115-351597cf2477?q=80&w=800&auto=format&fit=crop"
                    alt="Cultural Temple of the Tooth Festival at night"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Cultural Heritage
                  </span>
                </div>

                {/* 2. Traditional Sri Lankan Culinary Table (Hoppers & Curries) */}
                <div className="relative h-64 sm:h-76 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800&auto=format&fit=crop"
                    alt="Traditional Sri Lankan Culinary Dishes & Hoppers"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Authentic Flavors
                  </span>
                </div>
              </div>

              {/* Right Column of Collage (Photos 3 & 4) */}
              <div className="col-span-6 space-y-4">
                {/* 3. Mountain Viewpoint / Ella Rock High Cliff */}
                <div className="relative h-64 sm:h-76 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop"
                    alt="Panoramic Mountain Cliff Viewpoint in Ella Ceylon"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
                    Misty Highlands
                  </span>
                </div>

                {/* 4. Iconic Stilt Fishermen at Sunset */}
                <div className="relative h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg border border-[#A7C4A0]/40 group">
                  <Image
                    src="https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=800&auto=format&fit=crop"
                    alt="Sri Lankan Stilt Fishermen along the Southern Coast"
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <span className="absolute bottom-3 left-3 text-[11px] font-sans font-semibold text-white/95 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-md">
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