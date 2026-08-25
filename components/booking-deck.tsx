"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2, Calculator, ShieldCheck, MessageSquare } from "lucide-react";
import { ScrollFade } from "@/components/ui/motion-wrapper";

interface BookingDeckProps {
  prefilledService?: string;
  prefilledMessage?: string;
}

export default function BookingDeck({
  prefilledService = "",
  prefilledMessage = "",
}: BookingDeckProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState(prefilledService || "Custom Multi-Day Expedition");
  const [days, setDays] = useState("5");
  const [passengers, setPassengers] = useState("2");
  const [message, setMessage] = useState(prefilledMessage);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (prefilledService) setServiceType(prefilledService);
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledMessage) setMessage(prefilledMessage);
  }, [prefilledMessage]);

  const calculateEstimate = () => {
    const numDays = Math.max(Number(days) || 1, 1);
    let dailyRate = 50;
    if (serviceType.includes("VIP Airport Transfer")) {
      return { total: 45, text: "$45 Fixed Flat Rate (One-Way Airport Transfer)" };
    }
    if (serviceType.includes("Van") || serviceType.includes("Cruiser")) {
      dailyRate = 70;
    } else if (serviceType.includes("Coach")) {
      dailyRate = 140;
    } else if (serviceType.includes("Sedan")) {
      dailyRate = 50;
    }
    const est = numDays * dailyRate;
    return { total: est, text: `~$${est} USD (${numDays} Days @ ~$${dailyRate}/Day)` };
  };

  const estimate = calculateEstimate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Compiling request parameters and opening secure WhatsApp...");

    const compiledMessage = `*Himaya Tours & Travels - Booking Inquiry*\n\n• *Guest Name:* ${name}\n• *Email:* ${email}\n• *Service Class:* ${serviceType}\n• *Passengers:* ${passengers}\n• *Trip Duration:* ${days} Days\n• *Estimated Budget:* ${estimate.text}\n\n*Itinerary / Custom Notes:*\n${message || "No specific itinerary provided yet. Please suggest route."}`;

    setTimeout(() => {
      const whatsappUrl = `https://wa.me/94767885107?text=${encodeURIComponent(compiledMessage)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus("Inquiry dispatched! Opening WhatsApp channel...");
    }, 500);
  };

  return (
    <section className="py-24 bg-[#F4EFE6] overflow-hidden" id="booking-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Interactive Concierge & Live Estimator with Scroll Fade */}
          <ScrollFade direction="right" className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] block font-sans">
              Bespoke Coordination
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] leading-tight">
              Design Your Private Expedition
            </h2>
            <p className="text-[#4e6359] text-base leading-relaxed font-sans font-light">
              Submit your preferred travel dates and party size. Our Galle coordination desk provides a transparent, fixed quote with all expressway tolls, fuel, and chauffeur services included.
            </p>

            {/* Live Estimation Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#A7C4A0]/40 shadow-md space-y-4 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <span className="text-xs uppercase font-bold text-[#6C8A66] tracking-wider flex items-center gap-1.5">
                  <Calculator size={14} /> Live Estimate Calculator
                </span>
                <span className="text-[11px] font-semibold text-[#103322] bg-[#A7C4A0]/30 px-2.5 py-1 rounded-full">
                  Zero Hidden Fees
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs text-gray-500 block">Estimated Chauffeur Package:</span>
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#103322]">
                  {estimate.text}
                </div>
                <p className="text-[11px] text-gray-500 leading-normal">
                  Includes: Private vehicle, SLTDA certified driver-guide, fuel, highway tolls, vehicle parking fees, chauffeur lodging & complimentary bottled water.
                </p>
              </div>

              <div className="pt-2 border-t border-gray-100 flex items-center gap-3 text-xs text-gray-600">
                <ShieldCheck size={16} className="text-[#6C8A66] shrink-0" />
                <span>100% Guaranteed Punctuality & Flexible Free Date Adjustments</span>
              </div>
            </div>
          </ScrollFade>

          {/* Right Column: Booking Form with Scroll Fade */}
          <ScrollFade direction="left" className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#A7C4A0]/30 shadow-xl">
              <div className="mb-6 pb-4 border-b border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest font-mono text-[#6C8A66] font-bold">
                    Concierge Inquiry
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#103322]">
                    Secure Travel Request
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#A7C4A0]/20 text-[#103322] flex items-center justify-center">
                  <MessageSquare size={18} />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@luxurytravel.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Vehicle Class
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm cursor-pointer"
                    >
                      <option value="Prestige Luxury Sedan ($45-$55/day)">Prestige Sedan (1-3 Pax)</option>
                      <option value="Grand Cruiser VIP Van ($65-$80/day)">Grand Cruiser Van (4-8 Pax)</option>
                      <option value="Signature Event Mini Coach">Event Mini Coach (9-22 Pax)</option>
                      <option value="VIP Airport Transfer Only ($45 Flat)">VIP Airport Transfer Only</option>
                      <option value="Custom Multi-Day Expedition">Custom Multi-Day Journey</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                      Passengers
                    </label>
                    <select
                      value={passengers}
                      onChange={(e) => setPassengers(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm cursor-pointer"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People (Couple)</option>
                      <option value="3-4">3 - 4 People</option>
                      <option value="5-8">5 - 8 People (Family)</option>
                      <option value="9+">9+ Group / Delegation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-700 mb-2">
                    Trip Notes, Flight No., or Route Preferences
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Specify flight landing time, hotel drop locations, preferred attractions..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#F4EFE6]/60 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#A7C4A0] text-sm resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#103322] to-[#1d4531] hover:from-[#A7C4A0] hover:to-[#7D9D75] hover:text-[#103322] text-[#F4EFE6] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-xl flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01] active:scale-95"
                >
                  <Send size={15} /> Submit & Open Direct WhatsApp Channel
                </button>

                {status && (
                  <p className="text-xs text-center text-[#103322] font-semibold flex items-center justify-center gap-1.5 pt-2">
                    <CheckCircle2 size={14} className="text-emerald-600" /> {status}
                  </p>
                )}
              </form>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  );
}