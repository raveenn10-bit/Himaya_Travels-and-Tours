"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";

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
  const [serviceType, setServiceType] = useState(prefilledService);
  const [days, setDays] = useState("");
  const [message, setMessage] = useState(prefilledMessage);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (prefilledService) setServiceType(prefilledService);
  }, [prefilledService]);

  useEffect(() => {
    if (prefilledMessage) setMessage(prefilledMessage);
  }, [prefilledMessage]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Compiling request parameters and opening secure WhatsApp...");

    const compiledMessage = `Himaya Tours & Travels - Booking Request\n\nGuest Name: ${name}\nEmail Address: ${email}\nTransit Service Class: ${serviceType || "Custom Expedition"}\nExpedition Duration: ${days} Days\n\nItinerary/Details:\n${message}`;

    setTimeout(() => {
      const whatsappUrl = `https://wa.me/94767885107?text=${encodeURIComponent(compiledMessage)}`;
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      setStatus("Dispatched. Please check your open WhatsApp tab.");
    }, 600);
  };

  return (
    <section className="py-24 bg-[#faf8f5]" id="booking-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Intro & Pricing guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#c5a880] block font-sans">
              Interactive Concierge
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#103322] leading-tight">
              Design Your Custom Expedition
            </h2>
            <p className="text-[#4e6359] text-base leading-relaxed font-sans">
              Submit your dates, cabin size, and route preferences. Our 24/7 VIP travel team compiles a refined quote and opens a secure WhatsApp coordination channel immediately.
            </p>

            {/* Pricing Guidelines Box */}
            <div className="bg-white rounded-3xl p-8 border border-[#c5a880]/20 shadow-sm space-y-4">
              <span className="text-xs uppercase tracking-widest font-bold text-[#c5a880] block font-sans">
                Pricing Guidelines
              </span>
              <ul className="space-y-3 text-sm text-[#4e6359] font-sans">
                <li className="flex items-start gap-2">
                  <strong className="text-[#103322] min-w-[120px]">Sedan Transit:</strong>
                  <span>From $45/Day (includes chauffeur, tolls & fuel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#103322] min-w-[120px]">Cruiser Van:</strong>
                  <span>From $65/Day (includes chauffeur, tolls & fuel)</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-[#103322] min-w-[120px]">Group Coach:</strong>
                  <span>Bespoke quotes for customized itineraries</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Booking Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-[#c5a880]/25 shadow-xl">
              <div className="mb-6 pb-4 border-b border-gray-100">
                <span className="text-xs uppercase tracking-widest font-mono text-[#c5a880] font-bold">
                  Booking Deck
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#103322]">
                  Secure Travel Request
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#faf8f5] border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@luxurytravel.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#faf8f5] border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Service Class
                    </label>
                    <select
                      required
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#faf8f5] border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
                    >
                      <option value="" disabled>Select transport package</option>
                      <option value="VIP Airport Transfer">VIP Airport Transfer Only</option>
                      <option value="Custom Multi-Day Expedition">Custom Expedition (Multi-day)</option>
                      <option value="Colonial City & Day Trip">Colonial City / Day Trip</option>
                      <option value="Bespoke Celebration Chauffeur">Bespoke Celebration Transport</option>
                      <option value="Executive Corporate Chauffeur">Executive Corporate Fleet</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                      Duration (Days)
                    </label>
                    <input
                      type="number"
                      min="1"
                      required
                      placeholder="Number of days"
                      value={days}
                      onChange={(e) => setDays(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-2xl bg-[#faf8f5] border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-2">
                    Itinerary & Fleet Details
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Specify airport flight numbers, hotel drop locations, and vehicle class..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#faf8f5] border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#103322] hover:bg-[#c5a880] hover:text-[#103322] text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send size={16} /> Compile & Dispatch Request
                </button>

                {status && (
                  <p className="text-xs text-center text-[#103322] font-semibold flex items-center justify-center gap-1.5 pt-2">
                    <CheckCircle2 size={14} className="text-emerald-600" /> {status}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}