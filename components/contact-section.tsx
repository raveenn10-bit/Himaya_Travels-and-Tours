"use client";

import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-24 bg-[#faf8f5]" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Contact details */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block font-sans">
              Headquarters & Concierge
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] leading-tight">
              Connect with Himaya Tours & Travels
            </h2>
            <p className="text-[#4e6359] text-base leading-relaxed font-sans">
              Reach our 24/7 coordination desk in Galle to finalize your custom travel parameters, luxury vehicle requirements, or airport chauffeur pickups.
            </p>

            <div className="space-y-4 pt-2 font-sans">
              {/* Phone */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#c5a880]/20 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#c5a880] flex items-center justify-center shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Direct Contact Number
                  </span>
                  <a
                    href="tel:+94771882633"
                    className="text-base font-bold text-[#103322] hover:text-[#c5a880] transition-colors"
                  >
                    +94 77 188 2633
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#c5a880]/20 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    WhatsApp Concierge (24/7)
                  </span>
                  <a
                    href="https://wa.me/94767885107"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#103322] hover:text-[#25D366] transition-colors"
                  >
                    +94 76 788 5107
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#c5a880]/20 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#c5a880] flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Concierge Email
                  </span>
                  <a
                    href="mailto:dulankawya444@gmail.com"
                    className="text-base font-bold text-[#103322] hover:text-[#c5a880] transition-colors"
                  >
                    dulankawya444@gmail.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#c5a880]/20 shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#c5a880] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                    Operational Address
                  </span>
                  <span className="text-sm font-bold text-[#103322]">
                    171. Udugama Road, Makuluwa, Galle, Sri Lanka, 80000
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/60 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <span className="block text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                    Operating Hours
                  </span>
                  <span className="text-xs font-bold text-emerald-950">
                    Always Open (24 Hours / 7 Days) • English, Sinhala & German
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-6 h-[460px] lg:h-[540px] rounded-3xl overflow-hidden border border-[#c5a880]/25 shadow-xl bg-gray-100">
            <iframe
              src="https://maps.google.com/maps?q=171+Udugama+Road+Makuluwa+Galle+Sri+Lanka&output=embed"
              title="Himaya Tours & Travels HQ Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 filter saturate-95 contrast-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}