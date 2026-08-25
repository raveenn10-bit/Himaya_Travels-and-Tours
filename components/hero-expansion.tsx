"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Shield, MapPin, Calendar, Send, Sparkles } from "lucide-react";

interface HeroExpansionProps {
  onPreFillInquiry?: (service: string, message: string) => void;
}

export default function HeroExpansion({ onPreFillInquiry }: HeroExpansionProps) {
  const [pickup, setPickup] = useState("Colombo BIA Airport (CMB)");
  const [vehicle, setVehicle] = useState("Prestige Luxury Sedan ($45/day)");
  const [duration, setDuration] = useState("5");
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45, 0.8], [1, 0.8, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  const handleQuickQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const prompt = `Hello Himaya Tours & Travels! I would like an instant quotation:\n\n• Pickup Location: ${pickup}\n• Vehicle Preference: ${vehicle}\n• Trip Duration: ${duration} Days\n• Please provide availability and chauffeur quote.`;
    const url = `https://wa.me/94767885107?text=${encodeURIComponent(prompt)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] lg:min-h-[110vh] flex flex-col justify-between items-center text-white overflow-hidden pt-28 pb-16 bg-[#121614]"
      id="hero-container"
    >
      {/* Background Video with Smooth Scroll-Linked Scale */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ scale: videoScale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.08] saturate-110"
        >
          <source src="/Assets/hero 2.mp4" type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        {/* Luxury Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(18,22,20,0.65)_100%)] pointer-events-none" />
      </motion.div>

      {/* Floating Animated Geometric Shimmers */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#c5a880]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.25, 0.1],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-[#103322]/40 blur-3xl"
        />
      </div>

      {/* Main Hero Header Content with Scroll Fade */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-6 sm:mt-12"
      >
        {/* Live Weather / Season Indicator Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-gray-200 mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-[#c5a880] tracking-wider uppercase text-[10px] font-bold font-sans">
            Verified Chauffeur Service
          </span>
          <span className="text-gray-400">•</span>
          <span className="text-gray-200">Galle • Colombo • Kandy</span>
        </motion.div>

        {/* Brand Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.08] mb-6 drop-shadow-2xl"
        >
          Breathe In <br />
          <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#e7d8c5] via-[#c5a880] to-[#dfc49e]">
            Ceylon
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-xl text-gray-200/90 font-light leading-relaxed mb-8 drop-shadow-md font-sans"
        >
          Curated private driver-guided journeys, pristine climate-controlled fleets, and tailored routes across the misty peaks and golden shores of Sri Lanka.
        </motion.p>

        {/* Dual Primary Call-to-Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12"
        >
          <a
            href="https://wa.me/94767885107"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#c5a880] hover:bg-white text-[#103322] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 group cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>WhatsApp Concierge</span>
            <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={() => {
              const el = document.querySelector("#tracks");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 backdrop-blur-md font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg cursor-pointer hover:scale-105 active:scale-95"
          >
            Explore Itineraries
          </button>
        </motion.div>
      </motion.div>

      {/* Floating VIP Quick Search / Quotation Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
        className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-4"
      >
        <form
          onSubmit={handleQuickQuote}
          className="bg-[#121614]/90 backdrop-blur-2xl border border-[#c5a880]/30 rounded-3xl p-4 sm:p-5 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center transition-all hover:border-[#c5a880]/60"
        >
          {/* Pickup */}
          <div className="flex flex-col text-left px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#c5a880] tracking-wider flex items-center gap-1">
              <MapPin size={11} /> Pickup Location
            </span>
            <select
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-transparent text-xs text-white font-medium focus:outline-none mt-1 cursor-pointer"
            >
              <option value="Colombo Airport (CMB)" className="bg-[#121614]">Colombo Airport (CMB)</option>
              <option value="Galle / Unawatuna / Mirissa" className="bg-[#121614]">Galle / Mirissa Coast</option>
              <option value="Kandy City" className="bg-[#121614]">Kandy City Centre</option>
              <option value="Nuwara Eliya / Ella" className="bg-[#121614]">Ella / Nuwara Eliya</option>
              <option value="Bentota / Ahungalla" className="bg-[#121614]">Bentota / West Coast</option>
            </select>
          </div>

          {/* Vehicle Class */}
          <div className="flex flex-col text-left px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#c5a880] tracking-wider flex items-center gap-1">
              <Shield size={11} /> Vehicle Class
            </span>
            <select
              value={vehicle}
              onChange={(e) => setVehicle(e.target.value)}
              className="bg-transparent text-xs text-white font-medium focus:outline-none mt-1 cursor-pointer"
            >
              <option value="Prestige Sedan ($45/day)" className="bg-[#121614]">Prestige Sedan (1-3 Pax)</option>
              <option value="Grand Cruiser Van ($65/day)" className="bg-[#121614]">Grand Cruiser Van (4-8 Pax)</option>
              <option value="Signature Event Coach" className="bg-[#121614]">VIP Coach (9-22 Pax)</option>
            </select>
          </div>

          {/* Duration */}
          <div className="flex flex-col text-left px-3 py-2 rounded-2xl bg-white/5 border border-white/10">
            <span className="text-[10px] uppercase font-bold text-[#c5a880] tracking-wider flex items-center gap-1">
              <Calendar size={11} /> Trip Duration
            </span>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="bg-transparent text-xs text-white font-medium focus:outline-none mt-1 cursor-pointer"
            >
              <option value="1" className="bg-[#121614]">1 Day (Day Trip / Transfer)</option>
              <option value="3" className="bg-[#121614]">3 Days (Express Escape)</option>
              <option value="5" className="bg-[#121614]">5 Days (Essential Ceylon)</option>
              <option value="7" className="bg-[#121614]">7 Days (Highlands & Safari)</option>
              <option value="10" className="bg-[#121614]">10+ Days (Complete Island Tour)</option>
            </select>
          </div>

          {/* Instant WhatsApp Quote Action */}
          <button
            type="submit"
            className="w-full h-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20bd5a] hover:to-[#17a850] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 hover:scale-[1.02] active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <span>Get Instant Quote</span>
            <Send size={13} />
          </button>
        </form>
      </motion.div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10 flex flex-col items-center opacity-70"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#c5a880] font-sans">
          Scroll To Discover
        </span>
        <ChevronDown size={14} className="text-[#c5a880] mt-0.5" />
      </motion.div>
    </section>
  );
}