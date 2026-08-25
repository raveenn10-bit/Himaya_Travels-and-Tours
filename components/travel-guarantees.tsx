"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mountain, ShieldCheck, Compass, CalendarCheck, Sparkles, ArrowUpRight } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function TravelGuarantees() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(1); // Default highlight index 1 (Safe Adventure)

  const items = [
    {
      id: "destinations",
      icon: Mountain,
      title: "New Destinations",
      subtitle: "Uncharted Ceylon",
      description: "Explore newly curated, uncrowded tea estate trails, secluded southern beaches, and sacred citadels.",
      badge: "Curated Trails",
    },
    {
      id: "safety",
      icon: ShieldCheck,
      title: "Safe Adventure",
      subtitle: "SLTDA Certified",
      description: "100% insured commercial fleets, rigorous vehicle sanitization, and defensive mountain-certified chauffeurs.",
      badge: "Guaranteed Safety",
      featured: true,
    },
    {
      id: "guidance",
      icon: Compass,
      title: "24h Guidance",
      subtitle: "Continuous Concierge",
      description: "Dedicated 24/7 coordination team and multilingual guides ensuring seamless assistance across every mile.",
      badge: "Always Online",
    },
    {
      id: "flexibility",
      icon: CalendarCheck,
      title: "Flexible Dates",
      subtitle: "Tailored to You",
      description: "Adjust daily stop timings and tour dates with total freedom and zero unexpected penalty fees.",
      badge: "Zero Penalties",
    },
  ];

  return (
    <section className="py-14 bg-[#F4EFE6] border-b border-[#A7C4A0]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollFade direction="up">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredIdx === index;

              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setHoveredIdx(index)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className={`relative rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group cursor-pointer shadow-md ${
                    isHovered
                      ? "bg-white border-2 border-[#103322] shadow-xl -translate-y-1.5"
                      : "bg-white/80 border border-[#A7C4A0]/40 hover:bg-white"
                  }`}
                >
                  {/* Card Content */}
                  <div className="space-y-5">
                    {/* Icon Container */}
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                          isHovered
                            ? "bg-[#103322] text-[#A7C4A0] scale-110 shadow-md"
                            : "bg-[#F4EFE6] text-[#6C8A66] border border-[#A7C4A0]/40"
                        }`}
                      >
                        <Icon size={26} strokeWidth={1.8} />
                      </div>

                      <span
                        className={`text-[10px] uppercase font-bold font-sans tracking-wider px-2.5 py-1 rounded-full ${
                          isHovered
                            ? "bg-[#A7C4A0]/30 text-[#103322]"
                            : "bg-[#F4EFE6] text-gray-500"
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    {/* Typography */}
                    <div className="space-y-2">
                      <span className="text-[11px] font-mono uppercase tracking-widest text-[#6C8A66] font-semibold block">
                        {item.subtitle}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-[#103322] tracking-tight group-hover:text-[#6C8A66] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#4e6359] leading-relaxed font-sans font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Accent Indicator */}
                  <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-[#103322]">
                    <span className="text-[11px] uppercase tracking-wider text-gray-500 group-hover:text-[#103322] transition-colors">
                      Learn More
                    </span>
                    <ArrowUpRight
                      size={14}
                      className={`text-[#6C8A66] transition-transform duration-300 ${
                        isHovered ? "translate-x-0.5 -translate-y-0.5 text-[#103322]" : ""
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}