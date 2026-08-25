"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Volume2, VolumeX, Menu, X, ChevronDown, Mail } from "lucide-react";
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

          {/* Header Actions & Social Icons */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Social Channels (FB, WhatsApp, Gmail) */}
            <div className="flex items-center space-x-1.5 border-r border-white/15 pr-2.5 mr-0.5">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white hover:text-white border border-white/15 transition-all duration-300 flex items-center justify-center shadow-xs"
                title="Facebook Page"
                aria-label="Facebook Page"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/94767885107"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] text-white hover:text-white border border-white/15 transition-all duration-300 flex items-center justify-center shadow-xs"
                title="WhatsApp Concierge"
                aria-label="WhatsApp Concierge"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>

              {/* Gmail */}
              <a
                href="mailto:dulankawya444@gmail.com"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#EA4335] text-white hover:text-white border border-white/15 transition-all duration-300 flex items-center justify-center shadow-xs"
                title="Email: dulankawya444@gmail.com"
                aria-label="Send Email"
              >
                <Mail size={14} />
              </a>
            </div>

            {/* Ambient Sound Button */}
            <button
              onClick={toggleSound}
              type="button"
              className="p-2 rounded-full bg-white/10 hover:bg-[#c5a880] hover:text-[#103322] text-white border border-white/15 transition-all duration-300 cursor-pointer"
              aria-label={isPlaying ? "Mute ambient music" : "Play ambient music"}
              title={isPlaying ? "Mute ambient sound" : "Play ambient sound"}
            >
              {isPlaying ? <Volume2 size={15} /> : <VolumeX size={15} />}
            </button>

            {/* Inquire CTA */}
            <button
              onClick={() => handleNavClick("#booking-section")}
              className="hidden sm:inline-flex px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-[#c5a880] hover:text-[#103322] text-white border border-white/20 transition-all duration-300 cursor-pointer"
            >
              Inquire
            </button>

            {/* Professional WhatsApp 24/7 CTA */}
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-[#25D366] to-[#1EBE5D] text-white hover:shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:scale-105 active:scale-95 shadow-md transition-all duration-300"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>Chat 24/7</span>
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
            {/* Social Badges in Mobile Drawer */}
            <div className="flex items-center justify-center gap-4 py-2">
              <a
                href="https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://wa.me/94767885107"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                </svg>
              </a>

              <a
                href="mailto:dulankawya444@gmail.com"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#EA4335] text-white flex items-center justify-center border border-white/20 transition-colors"
                aria-label="Gmail"
              >
                <Mail size={16} />
              </a>
            </div>

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
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full text-center text-sm font-semibold uppercase tracking-widest bg-[#25D366] text-white shadow-lg shadow-emerald-900/40 hover:bg-emerald-600 transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}