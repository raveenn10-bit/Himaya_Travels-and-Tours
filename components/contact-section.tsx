"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "Are fuel, express highway tolls, and parking fees included in the daily rate?",
      a: "Yes, absolutely. All quoted daily rates for our private chauffeurs include premium fuel, all Southern/Central Expressway toll tariffs, parking fees, and vehicle maintenance. There are zero hidden transit charges.",
    },
    {
      q: "How does driver accommodation work for multi-day island tours?",
      a: "Most 3-star, 4-star, and luxury resorts in Sri Lanka provide complimentary driver quarters. If you stay at an Airbnb or boutique villa without driver quarters, a nominal flat lodging allowance of ~$10/night covers your chauffeur's stay.",
    },
    {
      q: "Can we modify our stops, timings, and route along the way?",
      a: "Yes! Our service is 100% private and bespoke. You set the pace. If you want to stop for roadside king coconuts, photography viewpoints, or spend extra time at a temple, your chauffeur will gladly accommodate.",
    },
    {
      q: "What languages do the private drivers speak?",
      a: "All our private chauffeurs are fluent in English and Sinhala, with select drivers trained in German. They are government-certified by the Sri Lanka Tourism Development Authority (SLTDA).",
    },
  ];

  return (
    <section className="py-24 bg-[#F4EFE6] overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Scroll Fade */}
        <ScrollFade direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] block mb-3 font-sans">
            Direct Concierge Desk
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] tracking-tight">
            Connect & Plan Your Voyage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4e6359] leading-relaxed font-sans font-light">
            Headquartered on Udugama Road in Galle and operating seamlessly across the island. Reach us 24/7 for immediate itinerary planning and instant chauffeur bookings.
          </p>
        </ScrollFade>

        {/* 2-Column Contact Info & Map Grid with Scroll Fade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Contact Cards */}
          <ScrollFade direction="right" className="lg:col-span-6 space-y-4 font-sans">
            {/* Live Operational Status */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#103322] text-[#F4EFE6] border border-[#A7C4A0]/30 shadow-md">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A7C4A0] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#A7C4A0]"></span>
                </span>
                <div>
                  <span className="text-xs font-bold text-white block">
                    Galle Chauffeur Desk Live
                  </span>
                  <span className="text-[11px] text-[#A7C4A0]">
                    Average WhatsApp Response: &lt; 3 Minutes
                  </span>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2.5 py-1 rounded-full uppercase tracking-wider text-[#A7C4A0]">
                24/7 Available
              </span>
            </div>

            {/* Direct Phone */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#A7C4A0]/30 shadow-xs hover:border-[#A7C4A0] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#A7C4A0] flex items-center justify-center shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Direct Phone Contact
                </span>
                <a
                  href="tel:+94771882633"
                  className="text-lg md:text-xl font-sans font-black tracking-wider text-[#103322] hover:text-[#6C8A66] transition-colors tabular-nums"
                >
                  +94 77 188 2633
                </a>
              </div>
            </div>

            {/* Direct WhatsApp */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#A7C4A0]/30 shadow-xs hover:border-[#25D366] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm">
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
                  className="text-lg md:text-xl font-sans font-black tracking-wider text-[#25D366] hover:text-[#103322] transition-colors tabular-nums"
                >
                  +94 76 788 5107
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#A7C4A0]/30 shadow-xs hover:border-[#A7C4A0] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#A7C4A0] flex items-center justify-center shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Official Inquiries Email
                </span>
                <a
                  href="mailto:dulankawya444@gmail.com"
                  className="text-base font-bold text-[#103322] hover:text-[#6C8A66] transition-colors"
                >
                  dulankawya444@gmail.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-white border border-[#A7C4A0]/30 shadow-xs">
              <div className="w-12 h-12 rounded-xl bg-[#103322] text-[#A7C4A0] flex items-center justify-center shrink-0">
                <MapPin size={20} />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gray-500 font-semibold">
                  Physical Headquarters
                </span>
                <span className="text-sm font-bold text-[#103322]">
                  171. Udugama Road, Makuluwa, Galle, Sri Lanka, 80000
                </span>
              </div>
            </div>
          </ScrollFade>

          {/* Right Column: Google Maps Embed */}
          <ScrollFade direction="left" className="lg:col-span-6 h-[460px] lg:h-[500px] rounded-3xl overflow-hidden border border-[#A7C4A0]/40 shadow-xl bg-gray-100 relative">
            <iframe
              src="https://maps.google.com/maps?q=171+Udugama+Road+Makuluwa+Galle+Sri+Lanka&output=embed"
              title="Himaya Tours & Travels Headquarters Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full border-0 filter saturate-95 contrast-105"
            />
          </ScrollFade>
        </div>

        {/* Travel FAQ Accordion with Scroll Fade */}
        <ScrollFade direction="up" className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#A7C4A0]/30 shadow-lg font-sans">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100">
            <div className="w-10 h-10 rounded-xl bg-[#103322] text-[#A7C4A0] flex items-center justify-center">
              <HelpCircle size={20} />
            </div>
            <div>
              <span className="text-xs uppercase font-bold text-[#6C8A66] tracking-wider">
                Frequently Asked Questions
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#103322]">
                Everything You Need to Know
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200/80 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left font-semibold text-sm text-[#103322] flex items-center justify-between gap-4 hover:bg-[#F4EFE6]/50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-[#6C8A66] transition-transform duration-300 shrink-0 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 pt-1 text-xs text-[#4e6359] leading-relaxed border-t border-gray-100 bg-[#F4EFE6]/40 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollFade>
      </div>
    </section>
  );
}