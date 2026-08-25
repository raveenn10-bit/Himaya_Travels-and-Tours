"use client";

import React from "react";
import { motion } from "framer-motion";
import { Plane, Compass, MapPin, Briefcase, Heart, Luggage, ArrowRight, Check } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface ServiceFeature {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  rateHint: string;
}

const servicesData: ServiceFeature[] = [
  {
    title: "VIP Airport Transfers",
    subtitle: "Colombo (CMB) & Mattala (HRI)",
    description:
      "Flight-tracked meet & greet inside the arrival terminal. Dedicated private chauffeur with luggage assistance and direct express highway transit to your hotel or villa.",
    icon: <Plane className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["Live Flight Tracking", "Highway Tolls & Parking Included", "Chilled Bottled Water & Wi-Fi"],
    rateHint: "From $45 Flat",
  },
  {
    title: "Multi-Day Island Expeditions",
    subtitle: "Cultural Triangle, Highlands & Coast",
    description:
      "Bespoke continuous chauffeur service across all 9 provinces. Travel at your own rhythm with complete flexibility for unscheduled scenic stops and mountain viewpoints.",
    icon: <Compass className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["Unlimited Kilometers", "Driver Lodging & Meals Handled", "24/7 VIP Concierge Channel"],
    rateHint: "From $55 / Day",
  },
  {
    title: "Colonial & Heritage Day Trips",
    subtitle: "Galle Fort, Sigiriya Citadel & Kandy",
    description:
      "Immersive single-day guided excursions exploring UNESCO fortresses, ancient cave temples, highland tea factories, spice gardens, or river boat safaris.",
    icon: <MapPin className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["SLTDA Certified Guide", "Customized Route Pace", "Same-Day Round-Trip Return"],
    rateHint: "From $40 / Trip",
  },
  {
    title: "Executive & Diplomatic Chauffeur",
    subtitle: "Corporate, Business & VIP Missions",
    description:
      "Impeccable discreet transport for corporate leaders, foreign delegations, and film crews. Spotless prestige sedans with high-speed Wi-Fi and phone charging docks.",
    icon: <Briefcase className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["Onboard 4G Wi-Fi", "Discreet & Punctual Protocols", "Bilingual English/German Driver"],
    rateHint: "Executive Rates",
  },
  {
    title: "Bespoke Celebrations & Weddings",
    subtitle: "Weddings, Honeymoons & Anniversaries",
    description:
      "Elegantly presented luxury vehicles and coordinated guest fleet logistics for tropical destination weddings, romantic honeymoons, and milestone family celebrations.",
    icon: <Heart className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["Decorated Vehicle Options", "Multi-Vehicle Guest Fleet", "VIP Hospitality Protocol"],
    rateHint: "Bespoke Packages",
  },
  {
    title: "Surf & Concierge Gear Transit",
    subtitle: "Surfboards, Golf Bags & Heavy Cargo",
    description:
      "Specialized high-roof cruiser vans fitted with surfboard racks and expansive cargo compartments to transit your boards, photography gear, or golf bags safely.",
    icon: <Luggage className="w-6 h-6 text-[#A7C4A0]" />,
    tags: ["Surfboard Mounts Available", "Oversized Luggage Holds", "Scenic Coastal Passages"],
    rateHint: "From $65 / Day",
  },
];

export default function ServicesShaderCards({
  onSelectService,
}: {
  onSelectService?: (serviceName: string, desc: string) => void;
}) {
  const loopServices = [...servicesData, ...servicesData, ...servicesData];

  const handleCardClick = (title: string, description: string) => {
    if (onSelectService) {
      onSelectService(title, description);
    }
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      bookingPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderServiceCard = (service: ServiceFeature, index: number, isMobile = false) => (
    <div
      key={`${service.title}-${index}-${isMobile ? "mob" : "desk"}`}
      className={`group rounded-3xl bg-white border border-[#A7C4A0]/40 p-7 sm:p-8 shadow-md hover:shadow-2xl hover:border-[#103322] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
        isMobile ? "w-[300px] shrink-0" : "w-full"
      }`}
      onClick={() => handleCardClick(service.title, service.description)}
    >
      <div className="space-y-4">
        {/* Top Row: Icon Badge & Rate Badge */}
        <div className="flex items-center justify-between pb-1">
          <div className="w-13 h-13 rounded-2xl bg-[#103322] group-hover:bg-[#A7C4A0] transition-colors duration-300 flex items-center justify-center shadow-md">
            <div className="group-hover:text-[#103322] text-[#A7C4A0] transition-colors">
              {service.icon}
            </div>
          </div>

          <span className="px-3 py-1 rounded-full bg-[#F4EFE6] text-[#103322] text-[11px] font-bold font-sans border border-[#A7C4A0]/40 shadow-xs">
            {service.rateHint}
          </span>
        </div>

        {/* Header Information */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#6C8A66] font-semibold block">
            {service.subtitle}
          </span>
          <h3 className="font-serif text-2xl font-bold text-[#103322] group-hover:text-[#6C8A66] transition-colors leading-tight">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-xs text-[#4e6359] leading-relaxed font-sans font-light line-clamp-3">
          {service.description}
        </p>

        {/* Feature Tags List */}
        <div className="space-y-1.5 pt-2 border-t border-gray-100 font-sans">
          {service.tags.slice(0, 3).map((tag, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
              <Check size={13} className="text-[#6C8A66] shrink-0" />
              <span className="truncate">{tag}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Inquire Action Button */}
      <div className="pt-5 font-sans">
        <div className="w-full py-3 rounded-2xl bg-[#F4EFE6] group-hover:bg-[#103322] group-hover:text-[#F4EFE6] text-[#103322] font-semibold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 border border-[#A7C4A0]/30 shadow-xs">
          <span>Inquire Service</span>
          <ArrowRight size={13} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#A7C4A0]/30 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] block mb-3 font-sans">
              Bespoke Transit Capabilities
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
              Curated Chauffeur Offerings
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans font-light">
              Fully customizable private chauffeur services tailored to the highest standards of safety, comfort, and punctual luxury.
            </p>
          </div>

          <div className="mt-6 md:mt-0 font-sans">
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#103322] hover:bg-[#A7C4A0] hover:text-[#103322] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md hover:scale-105"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollFade>

        {/* Desktop View: 3-Column Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => renderServiceCard(service, index, false))}
        </div>
      </div>

      {/* Mobile View: Infinite Smooth Horizontal Auto-scroll from Left to Right */}
      <div className="block md:hidden relative w-full overflow-hidden py-2">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10" />

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          className="flex gap-4 w-max px-4"
        >
          {loopServices.map((service, index) => renderServiceCard(service, index, true))}
        </motion.div>
      </div>
    </section>
  );
}