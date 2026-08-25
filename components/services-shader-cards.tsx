"use client";

import React from "react";
import { Warp } from "@paper-design/shaders-react";
import { Plane, Compass, MapPin, Briefcase, Heart, Luggage, ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "VIP Airport Transfers",
    description: "Prompt airport meet-and-greet concierge services at BIA Colombo and Mattala airport.",
    icon: <Plane className="w-6 h-6 text-white" />,
  },
  {
    title: "Multi-Day Expeditions",
    description: "Tailor-made itineraries mapping the wild parks, tea trails, and surfing coasts.",
    icon: <Compass className="w-6 h-6 text-white" />,
  },
  {
    title: "Regional Day Trips",
    description: "Curated full-day passages exploring colonial Fort Galle, Kandy temples, or tea mills.",
    icon: <MapPin className="w-6 h-6 text-white" />,
  },
  {
    title: "Executive Chauffeur",
    description: "Punctual transport solutions for diplomats, corporate visitors, and event organizers.",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    title: "Bespoke Celebrations",
    description: "Immaculately presented vehicles and customized hosts for luxury weddings and events.",
    icon: <Heart className="w-6 h-6 text-white" />,
  },
  {
    title: "Concierge Luggage Transit",
    description: "Secure vehicles dedicated to oversized boards, golf kits, and production cameras.",
    icon: <Luggage className="w-6 h-6 text-white" />,
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

  const getShaderConfig = (index: number) => {
    const configs = [
      {
        proportion: 0.3,
        softness: 0.8,
        distortion: 0.15,
        swirl: 0.6,
        swirlIterations: 8,
        shape: "checks" as const,
        shapeScale: 0.08,
        colors: ["hsl(280, 100%, 30%)", "hsl(320, 100%, 60%)", "hsl(340, 90%, 40%)", "hsl(300, 100%, 70%)"],
      },
      {
        proportion: 0.4,
        softness: 1.2,
        distortion: 0.2,
        swirl: 0.9,
        swirlIterations: 12,
        shape: "stripes" as const,
        shapeScale: 0.12,
        colors: ["hsl(200, 100%, 25%)", "hsl(180, 100%, 65%)", "hsl(160, 90%, 35%)", "hsl(190, 100%, 75%)"],
      },
      {
        proportion: 0.35,
        softness: 0.9,
        distortion: 0.18,
        swirl: 0.7,
        swirlIterations: 10,
        shape: "checks" as const,
        shapeScale: 0.1,
        colors: ["hsl(120, 100%, 25%)", "hsl(140, 100%, 60%)", "hsl(100, 90%, 30%)", "hsl(130, 100%, 70%)"],
      },
      {
        proportion: 0.45,
        softness: 1.1,
        distortion: 0.22,
        swirl: 0.8,
        swirlIterations: 15,
        shape: "edge" as const,
        shapeScale: 0.09,
        colors: ["hsl(30, 100%, 35%)", "hsl(50, 100%, 65%)", "hsl(40, 90%, 40%)", "hsl(45, 100%, 75%)"],
      },
      {
        proportion: 0.38,
        softness: 0.95,
        distortion: 0.16,
        swirl: 0.85,
        swirlIterations: 11,
        shape: "checks" as const,
        shapeScale: 0.11,
        colors: ["hsl(250, 100%, 30%)", "hsl(270, 100%, 65%)", "hsl(260, 90%, 35%)", "hsl(265, 100%, 70%)"],
      },
      {
        proportion: 0.42,
        softness: 1.0,
        distortion: 0.19,
        swirl: 0.75,
        swirlIterations: 9,
        shape: "stripes" as const,
        shapeScale: 0.13,
        colors: ["hsl(330, 100%, 30%)", "hsl(350, 100%, 60%)", "hsl(340, 90%, 35%)", "hsl(345, 100%, 75%)"],
      },
    ];
    return configs[index % configs.length];
  };

  return (
    <section className="py-24 bg-[#121614] border-b border-white/5 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block mb-3 font-sans">
            Premium Modules
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Bespoke Service Offerings
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed font-sans">
            Fully customizable private transits designed to meet the highest expectations of luxury and timing.
          </p>
        </div>

        {/* Shader Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const shaderConfig = getShaderConfig(index);
            return (
              <div
                key={index}
                className="relative h-80 rounded-3xl overflow-hidden cursor-pointer group shadow-xl transition-all duration-300 hover:-translate-y-1.5"
                onClick={() => handleCardClick(feature.title, feature.description)}
              >
                {/* Background Warp Shader */}
                <div className="absolute inset-0">
                  <Warp
                    style={{ height: "100%", width: "100%" }}
                    proportion={shaderConfig.proportion}
                    softness={shaderConfig.softness}
                    distortion={shaderConfig.distortion}
                    swirl={shaderConfig.swirl}
                    swirlIterations={shaderConfig.swirlIterations}
                    shape={shaderConfig.shape}
                    shapeScale={shaderConfig.shapeScale}
                    scale={1}
                    rotation={0}
                    speed={0.8}
                    colors={shaderConfig.colors}
                  />
                </div>

                {/* Dark Overlay with content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between bg-black/75 border border-white/10 group-hover:bg-black/60 group-hover:border-white/25 transition-all duration-300">
                  <div>
                    <div className="mb-5 inline-block p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300 shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="text-2xl font-serif font-semibold mb-2.5 text-white tracking-wide">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-300 group-hover:text-white transition-colors duration-300 font-sans text-xs sm:text-sm">
                      {feature.description}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center text-xs font-semibold uppercase tracking-wider text-[#c5a880] group-hover:text-[#e2a829] transition-colors duration-300">
                    <span className="mr-2">Inquire Now</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
