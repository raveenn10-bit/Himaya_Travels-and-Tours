"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Plane, Compass, MapPin, Briefcase, Heart, Luggage, ArrowRight, Sparkles, Check } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface ServiceFeature {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tags: string[];
  rateHint: string;
}

const servicesData: ServiceFeature[] = [
  {
    title: "VIP Airport Transfers",
    subtitle: "Colombo (CMB) & Mattala (HRI)",
    description: "Flight-tracked meet & greet inside the arrival terminal. Dedicated private chauffeur with luggage assistance and direct express highway transit to your resort.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop",
    icon: <Plane className="w-5 h-5 text-[#103322]" />,
    tags: ["Flight Tracking", "Highway Tolls Included", "Chilled Bottled Water"],
    rateHint: "From $45 Flat",
  },
  {
    title: "Multi-Day Island Expeditions",
    subtitle: "Cultural Triangle, Highlands & Coast",
    description: "Bespoke continuous chauffeur service across all 9 provinces. Travel at your rhythm with complete flexibility for unscheduled scenic detours.",
    image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=800&auto=format&fit=crop",
    icon: <Compass className="w-5 h-5 text-[#103322]" />,
    tags: ["Unlimited Kilometers", "Driver Lodging Handled", "24/7 Concierge"],
    rateHint: "From $55 / Day",
  },
  {
    title: "Colonial & Heritage Day Trips",
    subtitle: "Galle Fort, Sigiriya Citadel & Kandy",
    description: "Immersive single-day guided excursions exploring UNESCO fortresses, ancient cave temples, highland tea factories, or river boat safaris.",
    image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=800&auto=format&fit=crop",
    icon: <MapPin className="w-5 h-5 text-[#103322]" />,
    tags: ["Certified Guide", "Custom Pace", "Round-Trip Return"],
    rateHint: "From $40 / Trip",
  },
  {
    title: "Executive & Diplomatic Chauffeur",
    subtitle: "Corporate, Business & VIP Missions",
    description: "Impeccable discreet transport for business leaders, foreign delegations, and film crews. Spotless prestige vehicles with Wi-Fi and mobile charging hubs.",
    image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=800&auto=format&fit=crop",
    icon: <Briefcase className="w-5 h-5 text-[#103322]" />,
    tags: ["4G Wi-Fi Onboard", "Discreet & Punctual", "Bilingual Chauffeur"],
    rateHint: "Executive Rates",
  },
  {
    title: "Bespoke Celebrations & Weddings",
    subtitle: "Weddings, Honeymoons & Anniversaries",
    description: "Elegantly presented luxury vehicles and coordinated guest fleet logistics for tropical destination weddings and milestone celebrations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
    icon: <Heart className="w-5 h-5 text-[#103322]" />,
    tags: ["Decorated Vehicles", "Group Fleet Coordination", "VIP Hospitality"],
    rateHint: "Bespoke Packages",
  },
  {
    title: "Surf & Concierge Gear Transit",
    subtitle: "Surfboards, Golf Bags & Heavy Cargo",
    description: "Specialized high-roof cruiser vans fitted with surfboard mounts and expansive cargo space to transit your boards, photography gear, or golf clubs safely.",
    image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=800&auto=format&fit=crop",
    icon: <Luggage className="w-5 h-5 text-[#103322]" />,
    tags: ["Surfboard Mounts", "Oversized Luggage", "Coastal Passages"],
    rateHint: "From $65 / Day",
  },
];

export default function ServicesShaderCards({
  onSelectService,
}: {
  onSelectService?: (serviceName: string, desc: string) => void;
}) {
  const handleCardClick = (title: string, description: string) => {
    if (onSelectService) {
      onSelectService(title, description);
    }
    const bookingPanel = document.getElementById("booking-section");
    if (bookingPanel) {
      bookingPanel.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-[#F4EFE6] border-b border-[#A7C4A0]/30 relative overflow-hidden" id="services">
      {/* Background Subtle Eucalyptus Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#A7C4A0]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#103322]/5 blur-3xl pointer-events-none" />

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
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#103322] hover:bg-[#A7C4A0] hover:text-[#103322] text-[#F4EFE6] text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-md"
            >
              <span>Custom Service Inquiry</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </ScrollFade>

        {/* 6 Elegant Luxury Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="group rounded-3xl overflow-hidden bg-white border border-[#A7C4A0]/30 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between cursor-pointer"
              onClick={() => handleCardClick(service.title, service.description)}
            >
              <div>
                {/* Visual Header with Image & Overlay */}
                <div className="relative h-48 w-full overflow-hidden bg-[#121614]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 filter brightness-[0.75]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Icon & Rate Tag */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="w-10 h-10 rounded-2xl bg-[#F4EFE6] shadow-md flex items-center justify-center border border-[#A7C4A0]/50 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#103322]/90 backdrop-blur-md text-[#A7C4A0] text-xs font-bold font-sans border border-[#A7C4A0]/30 shadow-sm">
                      {service.rateHint}
                    </span>
                  </div>

                  {/* Bottom Image Subtitle */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <span className="text-[11px] font-sans font-semibold text-[#A7C4A0] uppercase tracking-wider block">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-7 space-y-4 font-sans">
                  <h3 className="font-serif text-2xl font-bold text-[#103322] group-hover:text-[#6C8A66] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#4e6359] leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Feature Tags */}
                  <div className="space-y-1.5 pt-2 border-t border-gray-100">
                    {service.tags.map((tag, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                        <Check size={13} className="text-[#6C8A66] shrink-0" />
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Action Link */}
              <div className="p-6 sm:p-7 pt-0 font-sans">
                <div className="w-full py-3 rounded-2xl bg-[#F4EFE6] group-hover:bg-[#103322] group-hover:text-[#F4EFE6] text-[#103322] font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border border-[#A7C4A0]/30 shadow-xs">
                  <span>Inquire Service</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}