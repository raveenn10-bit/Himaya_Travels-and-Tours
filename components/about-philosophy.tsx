"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Compass, HeartHandshake, Sparkles } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function AboutPhilosophy() {
  const stats = [
    { value: "500+", label: "Expeditions Curated", sub: "Across all 9 provinces" },
    { value: "99.8%", label: "5-Star Rating", sub: "Verified international guests" },
    { value: "100%", label: "Punctuality Guarantee", sub: "Airport meet & greet on time" },
    { value: "24/7", label: "Concierge Coordination", sub: "Continuous trip assistance" },
  ];

  const standards = [
    {
      icon: ShieldCheck,
      title: "Government Certified Chauffeur Guides",
      desc: "Every driver-guide holds official SLTDA accreditation, defensive mountain driving training, and fluent English & conversational German language skills.",
    },
    {
      icon: Award,
      title: "All-Inclusive Clear Pricing",
      desc: "Our daily chauffeur rates include high-grade fuel, express highway tolls, vehicle parking fees, and chauffeur meals/lodging without unexpected add-ons.",
    },
    {
      icon: Compass,
      title: "Bespoke Freedom & Flexibility",
      desc: "You control the pace. Stop at hidden roadside coconut groves, waterfall viewpoints, or spice estates whenever you desire.",
    },
    {
      icon: HeartHandshake,
      title: "Full Passenger Commercial Insurance",
      desc: "All vehicles carry comprehensive passenger travel and liability insurance, satellite tracking, and daily mechanical sanitation inspections.",
    },
  ];

  return (
    <section className="py-24 bg-[#103322] text-white relative overflow-hidden" id="about">
      {/* Ambient Eucalyptus Glow Orbs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-[#A7C4A0]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-[#F4EFE6]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#A7C4A0] block mb-3 font-sans">
            Our Heritage & Standards
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white">
            The Himaya Philosophy
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#F4EFE6]/90 leading-relaxed font-sans font-light">
            Rooted in Galle and operating island-wide, Himaya Tours & Travels blends ancient Ceylon hospitality with uncompromising modern luxury transit.
          </p>
        </ScrollFade>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((st, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 border border-[#A7C4A0]/20 rounded-3xl p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A7C4A0] hover:bg-white/10 shadow-lg"
            >
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#A7C4A0] block mb-2">
                {st.value}
              </span>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-sans mb-1">
                {st.label}
              </h4>
              <p className="text-xs text-gray-300 font-sans">{st.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Emblem & Ceylon Imagery with Scroll Fade */}
          <ScrollFade direction="right" className="lg:col-span-5 relative">
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-[#A7C4A0]/30 shadow-2xl">
              <Image
                src="/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg"
                alt="Sigiriya Ceylon Fortress"
                fill
                className="object-cover filter saturate-105 brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#103322] via-transparent to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-[#121614]/90 backdrop-blur-md border border-[#A7C4A0]/30 shadow-xl">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#A7C4A0]/40 bg-black/40">
                    <Image
                      src="/logo.PNG"
                      alt="Himaya Logo"
                      fill
                      className="object-contain p-0.5"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-base font-bold text-white">Himaya Tours & Travels</h4>
                    <span className="text-[10px] uppercase tracking-widest text-[#A7C4A0] font-sans font-semibold">Galle Headquarters</span>
                  </div>
                </div>
                <p className="text-xs text-[#F4EFE6]/80 font-sans italic">
                  &ldquo;Travel should be as restorative as the destination itself.&rdquo;
                </p>
              </div>
            </div>
          </ScrollFade>

          {/* Right Column: 4 Key Pillars with Scroll Fade */}
          <ScrollFade direction="left" className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-widest font-bold text-[#A7C4A0] block font-sans">
              Why Discerning Travelers Choose Us
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
              Safety, Sophistication, & Unmatched Local Insight
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 font-sans">
              {standards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#A7C4A0] hover:bg-white/10 transition-all duration-300 space-y-2.5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#A7C4A0]/20 text-[#A7C4A0] flex items-center justify-center">
                      <Icon size={20} />
                    </div>
                    <h4 className="text-sm font-bold text-white tracking-wide">
                      {std.title}
                    </h4>
                    <p className="text-xs text-[#F4EFE6]/80 leading-relaxed font-light">
                      {std.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}