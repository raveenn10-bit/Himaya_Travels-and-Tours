"use client";

import React from "react";
import { ShieldCheck, Clock, Award } from "lucide-react";

export default function AboutPhilosophy() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Premium Protected Travel",
      desc: "Pruned luxury fleets fully backed by multi-million rupee comprehensive passenger insurance.",
    },
    {
      icon: Clock,
      title: "Bespoke Concierge Dispatch",
      desc: "Real-time scheduling adjustments based on flight arrivals, traffic, and expressway blockages.",
    },
    {
      icon: Award,
      title: "Certified Chauffeur Hosts",
      desc: "Ambassadors certified by national tourism boards, doubling as passionate cultural guides.",
    },
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block font-sans">
              Luxury Standards
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] leading-tight">
              Bespoke Safety & Concierge Hosts
            </h2>
            <p className="text-[#4e6359] text-base leading-relaxed font-sans">
              Himaya Tours & Travels operates at the apex of travel comfort. Our certified driver-guides are English-fluent hosts, cultural ambassadors, and defensive drivers.
            </p>
            <p className="text-[#4e6359] text-base leading-relaxed font-sans">
              Every passage includes modern, air-conditioned vehicles, full passenger insurance safeguards, and real-time flight tracking adjustments.
            </p>
          </div>

          {/* Right Column: 3 Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-[#faf8f5] border border-[#c5a880]/20 hover:border-[#c5a880] hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#103322] text-[#c5a880] flex items-center justify-center mb-6 shadow-sm">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#103322] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4e6359] leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
