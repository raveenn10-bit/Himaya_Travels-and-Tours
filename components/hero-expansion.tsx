"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroExpansionProps {
  onPreFillInquiry?: (service: string, message: string) => void;
}

export default function HeroExpansion({ onPreFillInquiry }: HeroExpansionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45, 0.8], [1, 0.8, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, -60]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.playbackRate = 1.5;
      video.play().catch(() => {});
    }
  }, []);

  const handleVideoLoaded = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.5;
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] lg:min-h-[95vh] flex flex-col justify-between items-center text-white overflow-hidden pt-32 pb-16 bg-[#121614]"
      id="hero-container"
    >
      {/* Single Background Video at 1.5x Speed in Seamless Loop */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        style={{ scale: videoScale }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/Assets/geo-sigiriya.jpg"
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleVideoLoaded}
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.75] contrast-[1.08] saturate-110"
        >
          <source src="/Assets/srilanka.mp4" type="video/mp4" />
        </video>

        {/* Luxury Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121614] via-black/40 to-black/60 pointer-events-none z-20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(18,22,20,0.65)_100%)] pointer-events-none z-20" />
      </motion.div>

      {/* Floating Animated Geometric Shimmers */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#A7C4A0]/20 blur-3xl"
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
        className="relative z-30 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center mt-6 sm:mt-16"
      >
        {/* Live Verified Chauffeur Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-gray-200 mb-6 shadow-lg"
        >
          <span className="w-2 h-2 rounded-full bg-[#A7C4A0] animate-pulse"></span>
          <span className="text-[#A7C4A0] tracking-wider uppercase text-[10px] font-bold font-sans">
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
          Welcome To <br />
          <span className="italic font-normal font-serif text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFE6] via-[#A7C4A0] to-[#6C8A66]">
            Ceylon
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="max-w-2xl text-base sm:text-xl text-gray-200/90 font-light leading-relaxed mb-6 drop-shadow-md font-sans"
        >
          Curated private driver-guided journeys, pristine climate-controlled fleets, and tailored routes across the misty peaks and golden shores of Sri Lanka.
        </motion.p>
      </motion.div>

      {/* Subtle Scroll Down Prompt */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-30 flex flex-col items-center opacity-70 mb-4"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-[#A7C4A0] font-sans">
          Scroll To Discover
        </span>
        <ChevronDown size={14} className="text-[#A7C4A0] mt-0.5" />
      </motion.div>
    </section>
  );
}