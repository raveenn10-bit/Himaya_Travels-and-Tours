"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Volume2,
  VolumeX,
  X,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Tv,
  ExternalLink,
  Lock,
  KeyRound,
} from "lucide-react";
import { useAmbientAudio } from "./audio-player";

// Playlist of available hero videos in public/Assets
const HERO_VIDEOS = [
  {
    title: "Scenic Ceylon & Highlands",
    src: "/Assets/srilanka.mp4",
    poster: "/Assets/geo-sigiriya.jpg",
  },
  {
    title: "Misty Mountain Vista",
    src: "/Assets/hero 2.mp4",
    poster: "/Assets/geo-ella.jpg",
  },
  {
    title: "Highland Railway Expedition",
    src: "/Assets/The Highland Railway.mp4",
    poster: "/Assets/misty-highlands-cliff.jpg",
  },
  {
    title: "Historic Galle Fort Walk",
    src: "/Assets/Galle Fort Walk.mp4",
    poster: "/Assets/geo-galle-fort.jpg",
  },
  {
    title: "Wild Elephant Safaris",
    src: "/Assets/Wild Elephant Safaris.mp4",
    poster: "/Assets/geo-yala-safari.jpg",
  },
];

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

interface ComingSoonProps {
  onUnlockSuccess?: () => void;
}

export default function ComingSoon({ onUnlockSuccess }: ComingSoonProps) {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [, setIsVideoLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Modals state
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  // Hidden Developer Password Modal State
  const [devModalOpen, setDevModalOpen] = useState(false);
  const [devPassword, setDevPassword] = useState("");
  const [devPasswordError, setDevPasswordError] = useState(false);
  const [devClickCount, setDevClickCount] = useState(0);

  // Form states
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [contactName, setContactName] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactPhone, setContactPhone] = useState("");

  // Audio hook
  const { isPlaying, toggleSound } = useAmbientAudio();

  // 48-Hour Countdown Timer Logic
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    hours: 47,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const STORAGE_KEY = "himaya_launch_target_timestamp_v1";
    let targetTime: number;

    const savedTarget = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
    if (savedTarget) {
      targetTime = parseInt(savedTarget, 10);
      if (isNaN(targetTime) || targetTime <= Date.now()) {
        targetTime = Date.now() + 48 * 60 * 60 * 1000;
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    } else {
      targetTime = Date.now() + 48 * 60 * 60 * 1000;
      if (typeof window !== "undefined") {
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    }

    const calculateTimeRemaining = () => {
      const difference = targetTime - Date.now();
      if (difference <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      const totalHours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours: totalHours, minutes, seconds };
    };

    setTimeLeft(calculateTimeRemaining());

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Keyboard shortcut listener to open hidden developer password modal (Ctrl+Shift+D or Alt+D)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "d") || (e.altKey && e.key.toLowerCase() === "d")) {
        e.preventDefault();
        setDevModalOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Secret Click Trigger (Clicking logo or copyright 3+ times triggers modal)
  const handleSecretTriggerClick = () => {
    const newCount = devClickCount + 1;
    setDevClickCount(newCount);
    if (newCount >= 3) {
      setDevModalOpen(true);
      setDevClickCount(0);
    }
  };

  // Verify Developer Password
  const handleDevUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPassword = devPassword.trim();
    if (cleanPassword === "0770663154") {
      setDevPasswordError(false);
      localStorage.setItem("himaya_site_unlocked", "true");
      setDevModalOpen(false);
      if (onUnlockSuccess) {
        onUnlockSuccess();
      } else {
        window.location.reload();
      }
    } else {
      setDevPasswordError(true);
      setTimeout(() => setDevPasswordError(false), 2500);
    }
  };

  const handleNextVideo = () => {
    setActiveVideoIndex((prev) => (prev + 1) % HERO_VIDEOS.length);
  };

  const handleVideoEnded = () => {
    handleNextVideo();
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setNotifyModalOpen(false);
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const handleSendContact = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Himaya Tours & Travels,\n\nName: ${contactName || "Guest"}\nPhone: ${
        contactPhone || "Not provided"
      }\nMessage: ${contactMessage || "I would like to inquire about Sri Lanka tours and bookings."}`
    );
    window.open(`https://wa.me/94767885107?text=${text}`, "_blank");
    setContactModalOpen(false);
  };

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <div className="relative min-h-screen w-full bg-[#0a0d0c] text-white flex flex-col justify-between overflow-hidden font-sans select-none">
      {/* Background Hero Video with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full"
          >
            <video
              ref={videoRef}
              key={HERO_VIDEOS[activeVideoIndex].src}
              src={HERO_VIDEOS[activeVideoIndex].src}
              poster={HERO_VIDEOS[activeVideoIndex].poster}
              autoPlay
              muted
              loop={false}
              playsInline
              onEnded={handleVideoEnded}
              onLoadedData={() => setIsVideoLoading(false)}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105 filter brightness-[0.7] contrast-[1.15] saturate-[0.85]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Misty Dark Mountain Overlay Layers matching reference */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080b0a] via-black/55 to-black/75 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,51,34,0.18)_0%,rgba(0,0,0,0.85)_100%)] z-10" />
        <div className="absolute inset-0 backdrop-blur-[0.5px] z-10" />
      </div>

      {/* 1. Header Navigation Bar */}
      <header className="relative z-20 w-full px-6 sm:px-12 py-6 sm:py-8 flex items-center justify-between">
        {/* Brand Logo & Name (Left) — Click 3 times triggers hidden developer login */}
        <div
          onClick={handleSecretTriggerClick}
          className="flex items-center gap-3 group cursor-pointer transition-transform active:scale-95"
          title=""
        >
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-white/20 shadow-lg bg-black/40 backdrop-blur-md flex items-center justify-center p-1">
            <Image
              src="/logo.PNG"
              alt="Himaya Tours & Travels"
              width={48}
              height={48}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-sm sm:text-base text-white/95 font-semibold uppercase">
              Himaya
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-white/60 uppercase font-light">
              Tours & Travels
            </span>
          </div>
        </div>

        {/* Header Actions (Right: Video Switcher, Audio Toggle, ABOUT, CONTACT) */}
        <div className="flex items-center gap-4 sm:gap-7">
          {/* Ambient Sound Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle Ambient Audio"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-light tracking-wider bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-all backdrop-blur-md"
            title={isPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
          >
            {isPlaying ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#A7C4A0] animate-pulse" />
                <span className="hidden md:inline text-[11px]">Sound On</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-white/60" />
                <span className="hidden md:inline text-[11px]">Sound Off</span>
              </>
            )}
          </button>

          {/* Switch Background Video Button */}
          <button
            onClick={handleNextVideo}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-light tracking-wider bg-white/5 hover:bg-white/15 border border-white/10 text-white/80 transition-all backdrop-blur-md"
            title="Change Video Scene"
          >
            <Tv className="w-3.5 h-3.5 text-white/70" />
            <span className="text-[11px]">Scene {activeVideoIndex + 1}/{HERO_VIDEOS.length}</span>
          </button>

          {/* About Link */}
          <button
            onClick={() => setAboutModalOpen(true)}
            className="text-xs sm:text-sm font-medium tracking-[0.25em] text-white/80 hover:text-white uppercase transition-colors"
          >
            About
          </button>

          {/* Contact Link */}
          <button
            onClick={() => setContactModalOpen(true)}
            className="text-xs sm:text-sm font-medium tracking-[0.25em] text-white/80 hover:text-white uppercase transition-colors"
          >
            Contact
          </button>
        </div>
      </header>

      {/* 2. Main Central Hero Section (Exact Reference Layout) */}
      <main className="relative z-20 flex-1 flex flex-col items-center justify-center px-6 sm:px-12 py-10 max-w-4xl mx-auto text-center">
        {/* Subtle Live Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6 sm:mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#A7C4A0] animate-ping" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-white/90">
            Grand Launch in 48 Hours
          </span>
        </motion.div>

        {/* Main "COMING SOON" Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.25em] sm:tracking-[0.32em] text-white uppercase drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)] font-sans"
        >
          Coming Soon
        </motion.h1>

        {/* Subtitle / Description text matching reference layout */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
          className="mt-6 sm:mt-8 space-y-1.5 max-w-2xl text-white/85 text-xs sm:text-sm md:text-base font-light tracking-wider leading-relaxed"
        >
          <p>We are currently crafting our new luxury travel experience.</p>
          <p className="text-white/70">
            We will be live in 48 hours. Click on{" "}
            <span className="text-white font-normal underline decoration-white/30 underline-offset-4">
              &quot;Notify Me!&quot;
            </span>{" "}
            to be ready for the Grand Day!
          </p>
        </motion.div>

        {/* 48-Hour Live Countdown Timer Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="my-8 sm:my-10 flex items-center justify-center gap-3 sm:gap-6"
        >
          {/* Hours */}
          <div className="flex flex-col items-center justify-center w-20 sm:w-24 py-2.5 sm:py-3.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-wider">
              {formatNumber(timeLeft.hours)}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/50 uppercase mt-0.5">
              Hours
            </span>
          </div>

          <span className="font-mono text-xl sm:text-2xl font-light text-white/40 mb-3">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-center justify-center w-20 sm:w-24 py-2.5 sm:py-3.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-white tracking-wider">
              {formatNumber(timeLeft.minutes)}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/50 uppercase mt-0.5">
              Minutes
            </span>
          </div>

          <span className="font-mono text-xl sm:text-2xl font-light text-white/40 mb-3">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-center justify-center w-20 sm:w-24 py-2.5 sm:py-3.5 rounded-xl bg-black/40 border border-white/10 backdrop-blur-md shadow-2xl">
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#A7C4A0] tracking-wider">
              {formatNumber(timeLeft.seconds)}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-white/50 uppercase mt-0.5">
              Seconds
            </span>
          </div>
        </motion.div>

        {/* Minimalist Outlined "NOTIFY ME" Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        >
          <button
            onClick={() => setNotifyModalOpen(true)}
            className="group relative px-8 sm:px-12 py-3 sm:py-3.5 border border-white/70 hover:border-white text-white hover:text-black hover:bg-white text-xs sm:text-sm font-medium tracking-[0.3em] uppercase transition-all duration-300 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.08)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Notify Me
              <ArrowRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </main>

      {/* 3. Footer (Copyright + Social Icons + Hidden Dev Click Trigger) */}
      <footer className="relative z-20 w-full px-6 sm:px-12 py-6 sm:py-8 flex flex-col items-center justify-center text-center gap-3">
        {/* Hidden Trigger: Clicking copyright text 3 times opens password dialog */}
        <p
          onClick={handleSecretTriggerClick}
          className="text-[10px] sm:text-xs tracking-[0.25em] text-white/55 uppercase font-light cursor-pointer hover:text-white/70 transition-colors"
        >
          Website by Himaya Tours & Travels. All Rights Reserved.
        </p>

        {/* Circular Social Icons */}
        <div className="flex items-center gap-3 pt-1">
          {/* WhatsApp */}
          <a
            href="https://wa.me/94767885107?text=Hi%20Himaya%20Tours%20Sri%20Lanka,%20I%20would%20like%20to%20inquire%20about%20a%20private%20driver%20and%20tour."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all text-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z" />
            </svg>
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Page"
            className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all text-xs"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.582 9 4.615V8z" />
            </svg>
          </a>

          {/* Direct Phone */}
          <a
            href="tel:+94767885107"
            aria-label="Call Himaya Tours"
            className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all text-xs"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Direct Email */}
          <a
            href="mailto:dulankawya444@gmail.com"
            aria-label="Email Himaya Tours"
            className="w-8 h-8 rounded-full border border-white/30 hover:border-white hover:bg-white/20 text-white/80 hover:text-white flex items-center justify-center transition-all text-xs"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Hidden developer secret hot-spot (invisible button in bottom corner) */}
        <button
          onClick={() => setDevModalOpen(true)}
          aria-hidden="true"
          tabIndex={-1}
          className="opacity-0 w-4 h-4 absolute bottom-1 right-1 cursor-default pointer-events-auto"
        />
      </footer>

      {/* ========================================================================= */}
      {/* 4. MODALS (DEV UNLOCK / NOTIFY ME / ABOUT / CONTACT) */}
      {/* ========================================================================= */}

      {/* SECRET DEVELOPER UNLOCK MODAL */}
      <AnimatePresence>
        {devModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDevModalOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative z-10 w-full max-w-sm bg-[#121614] border border-[#A7C4A0]/40 rounded-2xl p-6 shadow-2xl text-left"
            >
              <button
                onClick={() => setDevModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2.5 text-[#A7C4A0] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                <Lock className="w-4 h-4" />
                <span>Developer Access</span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-wide">
                Unlock Full Website
              </h3>
              <p className="text-white/60 text-xs mt-1">
                Enter developer password to disable the Coming Soon page and view the full live website.
              </p>

              <form onSubmit={handleDevUnlock} className="mt-5 space-y-3">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-white/60 mb-1">
                    Passcode / Developer Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      autoFocus
                      required
                      placeholder="Enter password..."
                      value={devPassword}
                      onChange={(e) => setDevPassword(e.target.value)}
                      className={`w-full pl-9 pr-4 py-2.5 rounded-lg bg-black/60 border ${
                        devPasswordError ? "border-red-500 text-red-300" : "border-white/20 text-white"
                      } placeholder-white/30 focus:outline-none focus:border-[#A7C4A0] text-sm`}
                    />
                    <KeyRound className="w-4 h-4 text-white/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  </div>
                  {devPasswordError && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-400 mt-1.5 font-medium"
                    >
                      Invalid passcode. Please try again.
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-lg bg-[#103322] border border-[#A7C4A0]/60 text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#16442e] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Unlock & View Website</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#A7C4A0]" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* A. NOTIFY ME MODAL */}
      <AnimatePresence>
        {notifyModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setNotifyModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-md bg-[#121614]/95 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setNotifyModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 text-[#A7C4A0] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Early Access & VIP Perks</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-wide">
                Be the First to Know
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-2 leading-relaxed">
                Join our VIP launch list. We will send you an exclusive{" "}
                <strong className="text-white">10% Early Bird Voucher</strong> for your first private
                chauffeur tour across Sri Lanka.
              </p>

              {isSubscribed ? (
                <div className="mt-6 p-4 rounded-xl bg-[#103322] border border-[#A7C4A0]/40 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-[#A7C4A0] flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold">You are on the VIP List!</p>
                    <p className="text-xs text-white/75">
                      We will notify you immediately when the website goes live.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-6 space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-white/70 mb-1">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#A7C4A0] text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-white text-black font-semibold text-xs tracking-[0.2em] uppercase hover:bg-white/90 transition-all flex items-center justify-center gap-2"
                  >
                    <span>Notify Me at Launch</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>

                  <div className="pt-2 text-center">
                    <span className="text-[11px] text-white/50">or instant contact via WhatsApp:</span>
                    <a
                      href="https://wa.me/94767885107?text=Hi%20Himaya%20Tours,%20please%20notify%20me%20when%20the%20new%20website%20launches!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1.5 inline-flex items-center justify-center gap-2 text-xs text-[#A7C4A0] hover:text-white font-medium transition-colors"
                    >
                      <span>Direct WhatsApp Alert (+94 76 788 5107)</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* B. ABOUT MODAL */}
      <AnimatePresence>
        {aboutModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAboutModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-lg bg-[#121614]/95 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[85vh] overflow-y-auto"
            >
              <button
                onClick={() => setAboutModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logo.PNG"
                  alt="Himaya Tours"
                  width={44}
                  height={44}
                  className="rounded-full bg-black/40 border border-white/20 p-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    Himaya Tours & Travels
                  </h3>
                  <p className="text-xs text-[#A7C4A0] tracking-wider uppercase">
                    Official Sri Lanka Luxury Chauffeur & Tour Service
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-white/80 leading-relaxed">
                <p>
                  Based in historic <strong>Galle, Sri Lanka</strong>, Himaya Tours & Travels delivers
                  unmatched private chauffeur tours, flight-tracked airport transfers, and bespoke multi-day
                  island expeditions.
                </p>
                <p>
                  Led by experienced chauffeur-guide <strong>Harsha</strong>, our fleet features pristine
                  Toyota Prius luxury sedans, VIP Toyota KDH vans, and high-capacity tourist coaches.
                </p>
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 mt-4">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
                    Our Core Guarantees:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 text-xs text-white/70">
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A7C4A0]" />
                      <span>Certified Driver-Guides</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A7C4A0]" />
                      <span>Zero Hidden Tolls/Fuel</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A7C4A0]" />
                      <span>24/7 Airport Meet & Greet</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#A7C4A0]" />
                      <span>Custom Flexible Stops</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/94767885107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-lg bg-[#103322] border border-[#A7C4A0]/60 text-white font-medium text-xs tracking-wider uppercase hover:bg-[#16442e] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#A7C4A0]" />
                </a>
                <button
                  onClick={() => {
                    setAboutModalOpen(false);
                    setContactModalOpen(true);
                  }}
                  className="px-5 py-3 rounded-lg bg-white/10 text-white hover:bg-white/20 text-xs tracking-wider uppercase transition-colors"
                >
                  Contact Desk
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* C. CONTACT MODAL */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setContactModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-lg bg-[#121614]/95 border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setContactModalOpen(false)}
                className="absolute top-4 right-4 p-2 text-white/60 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5 text-[#A7C4A0] text-xs font-semibold uppercase tracking-[0.2em] mb-2">
                <Phone className="w-4 h-4" />
                <span>24/7 Travel Concierge</span>
              </div>

              <h3 className="text-2xl font-bold text-white tracking-wide">
                Get in Touch with Harsha
              </h3>
              <p className="text-white/70 text-xs sm:text-sm mt-1">
                Have an upcoming trip to Sri Lanka? We are ready to assist you right now.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
                <a
                  href="https://wa.me/94767885107"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#A7C4A0]/60 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#103322] flex items-center justify-center text-[#A7C4A0]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                      WhatsApp 24/7
                    </span>
                    <span className="text-xs font-semibold text-white">+94 76 788 5107</span>
                  </div>
                </a>

                <a
                  href="tel:+94771882633"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#A7C4A0]/60 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                      Direct Hotline
                    </span>
                    <span className="text-xs font-semibold text-white">+94 77 188 2633</span>
                  </div>
                </a>

                <a
                  href="mailto:dulankawya444@gmail.com"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#A7C4A0]/60 transition-colors flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                      Email Inquiries
                    </span>
                    <span className="text-xs font-semibold text-white truncate block">
                      dulankawya444@gmail.com
                    </span>
                  </div>
                </a>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-white/50 uppercase tracking-wider block">
                      Headquarters
                    </span>
                    <span className="text-xs font-semibold text-white">Galle, Sri Lanka</span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSendContact} className="mt-5 space-y-2.5">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#A7C4A0] text-xs"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="WhatsApp Number / Country Code"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#A7C4A0] text-xs"
                  />
                </div>
                <div>
                  <textarea
                    rows={2}
                    placeholder="Tell us about your Sri Lanka tour dates / destinations..."
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#A7C4A0] text-xs resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-[#103322] border border-[#A7C4A0]/60 text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#16442e] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Send via WhatsApp</span>
                  <Send className="w-3.5 h-3.5 text-[#A7C4A0]" />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
