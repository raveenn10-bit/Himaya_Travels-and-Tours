"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, Lock } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#F4EFE6] text-[#121614] pt-20 pb-12 border-t border-[#A7C4A0]/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex flex-col items-center group mb-6 focus:outline-none"
        >
          <div className="relative w-16 h-16 rounded-full overflow-hidden border border-[#A7C4A0]/60 shadow-sm mb-3 bg-white p-1">
            <Image
              src="/logo.PNG"
              alt="Himaya Tours & Travels Logo"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-serif text-3xl font-bold tracking-[0.25em] text-[#103322] uppercase group-hover:text-[#6C8A66] transition-colors">
            Himaya
          </h3>
          <span className="text-xs uppercase tracking-[0.35em] text-[#6C8A66] font-sans font-bold -mt-0.5">
            Tours & Travels
          </span>
        </Link>

        {/* Social Icons (Circles) */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1JefL6vGhr/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#A7C4A0]/40 bg-white hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] text-gray-700 flex items-center justify-center transition-all duration-300 shadow-xs"
            aria-label="Facebook Page"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* YouTube / Video Channel */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#A7C4A0]/40 bg-white hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] text-gray-700 flex items-center justify-center transition-all duration-300 shadow-xs"
            aria-label="YouTube Channel"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/94767885107"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-[#A7C4A0]/40 bg-white hover:bg-[#25D366] hover:text-white hover:border-[#25D366] text-gray-700 flex items-center justify-center transition-all duration-300 shadow-xs"
            aria-label="WhatsApp Concierge"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          </a>
        </div>

        {/* Horizontal Navigation Menu */}
        <nav className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-xs uppercase tracking-widest font-semibold text-gray-700 mb-6 font-sans">
          <button
            onClick={() => handleNavClick("#hero-container")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick("#destinations")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Destinations
          </button>
          <button
            onClick={() => handleNavClick("#about")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => handleNavClick("#fleet")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Fleet
          </button>
          <button
            onClick={() => handleNavClick("#services")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("#tracks")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Itineraries
          </button>
          <button
            onClick={() => handleNavClick("#reviews")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick("#contact")}
            className="hover:text-[#6C8A66] transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Sub-Services Tags */}
        <div className="text-xs text-gray-600 font-sans leading-relaxed max-w-4xl mb-10">
          <span>VIP Airport Transfers</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Custom Multi-Day Expeditions</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Sigiriya & Heritage Day Trips</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Highland Tea Cupping & Railway</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Wild Elephant Safaris</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Galle Fort Coastal Passages</span>
          <span className="mx-2 text-[#6C8A66]">·</span>
          <span>Executive Corporate Chauffeur</span>
        </div>

        {/* GET IN TOUCH Highlight */}
        <div className="space-y-2 mb-12">
          <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#6C8A66] block font-sans">
            Get In Touch!
          </span>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:+94771882633"
              className="text-xl md:text-2xl font-serif font-bold text-[#103322] hover:text-[#6C8A66] transition-colors"
            >
              +94 77 188 2633
            </a>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl font-serif font-bold text-[#25D366] hover:text-[#103322] transition-colors"
            >
              +94 76 788 5107
            </a>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-[#4e6359] font-sans pt-1">
            <p className="flex items-center gap-1.5">
              <MapPin size={14} className="text-[#6C8A66]" />
              <span>Address: 171. Udugama Road, Makuluwa, Galle, Sri Lanka, 80000</span>
            </p>
            <span className="text-gray-300 hidden sm:inline">·</span>
            <a
              href="mailto:dulankawya444@gmail.com"
              className="flex items-center gap-1.5 hover:text-[#6C8A66] transition-colors"
            >
              <Mail size={14} className="text-[#6C8A66]" />
              <span>dulankawya444@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full max-w-4xl h-px bg-[#A7C4A0]/40 mb-8" />

        {/* Copyright */}
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 font-sans">
          <span>Copyright &copy; 2026 Himaya Tours & Travels. All Rights Reserved.</span>
          <Lock size={12} className="text-gray-400" />
        </div>
      </div>
    </footer>
  );
}