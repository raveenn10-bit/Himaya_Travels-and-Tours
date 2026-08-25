"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, ChevronDown } from "lucide-react";
import MegaMenu from "./mega-menu";
import { useAmbientAudio } from "./audio-player";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const { isPlaying, toggleSound } = useAmbientAudio();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Destinations", href: "#destinations", hasMega: true },
    { label: "Fleet", href: "#fleet" },
    { label: "Services", href: "#services" },
    { label: "Itineraries", href: "#tracks" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#121614]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl text-white"
            : "bg-gradient-to-b from-black/70 via-black/30 to-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#c5a880]/40 shadow-md group-hover:border-[#c5a880] transition-colors bg-black/40">
              <Image
                src="/logo.PNG"
                alt="Himaya Tours & Travels Logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-white group-hover:text-[#c5a880] transition-colors">
                Himaya
              </span>
              <span className="text-[9px] uppercase tracking-[0.22em] text-[#c5a880] font-sans -mt-1 font-semibold">
                Tours & Travels
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasMega && setMegaMenuOpen(true)}
                onMouseLeave={() => link.hasMega && setMegaMenuOpen(false)}
              >
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="px-4 py-2 text-xs uppercase tracking-widest text-gray-200 hover:text-[#c5a880] font-medium transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown
                      size={12}
                      className={`transition-transform duration-300 ${
                        megaMenuOpen ? "rotate-180 text-[#c5a880]" : ""
                      }`}
                    />
                  )}
                </button>

                {link.hasMega && megaMenuOpen && (
                  <MegaMenu onClose={() => setMegaMenuOpen(false)} />
                )}
              </div>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3">
            {/* Ambient Sound Button */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#c5a880] hover:text-[#103322] text-white border border-white/15 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
              title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
            >
              {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
            </button>

            {/* Inquire CTA */}
            <button
              onClick={() => handleNavClick("#booking-section")}
              className="hidden sm:inline-flex px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#c5a880] hover:text-[#103322] text-white border border-white/20 transition-all duration-300 cursor-pointer"
            >
              Inquire
            </button>

            {/* WhatsApp 24/7 */}
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#c5a880] text-[#103322] hover:bg-white hover:text-[#103322] shadow-md transition-all duration-300"
            >
              Chat 24/7
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 text-white hover:text-[#c5a880] focus:outline-none cursor-pointer"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121614]/95 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-8 px-6 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left font-serif text-2xl text-gray-200 hover:text-[#c5a880] py-2 border-b border-white/5 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
            <button
              onClick={() => handleNavClick("#booking-section")}
              className="w-full py-3.5 rounded-full text-center text-sm font-semibold uppercase tracking-widest bg-white/10 text-white border border-white/20 hover:bg-[#c5a880] hover:text-[#103322] transition-colors cursor-pointer"
            >
              Inquire Booking
            </button>
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block py-3.5 rounded-full text-center text-sm font-semibold uppercase tracking-widest bg-[#c5a880] text-[#103322] hover:bg-white transition-colors"
            >
              WhatsApp Concierge
            </a>
          </div>
        </div>
      )}
    </>
  );
}