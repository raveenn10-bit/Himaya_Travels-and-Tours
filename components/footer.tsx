"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#121614] text-white pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#c5a880]/40 bg-black/40">
                <Image
                  src="/logo.PNG"
                  alt="Himaya Tours & Travels Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-white tracking-wide">
                  Himaya
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#c5a880] font-sans -mt-1 font-semibold">
                  Tours & Travels
                </span>
              </div>
            </Link>
            <p className="text-xs uppercase tracking-widest text-[#c5a880] font-bold font-sans">
              Explore • Discover • Experience
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm font-sans">
              Bespoke private transport and curated historical tours mapping the rich, diverse beauty of Ceylon.
            </p>
            <p className="text-xs text-gray-400 font-sans">
              171. Udugama Road, Makuluwa, Galle, Sri Lanka
            </p>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8 font-sans">
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] mb-4">
                Expeditions
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a href="#destinations" className="hover:text-white transition-colors">
                    Themes
                  </a>
                </li>
                <li>
                  <a href="#tracks" className="hover:text-white transition-colors">
                    Suggested Tracks
                  </a>
                </li>
                <li>
                  <a href="#activities-showcase" className="hover:text-white transition-colors">
                    Immersive Activities
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880] mb-4">
                Operations
              </h4>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li>
                  <a href="#fleet" className="hover:text-white transition-colors">
                    Our Fleet
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Premium Services
                  </a>
                </li>
                <li>
                  <a href="#reviews" className="hover:text-white transition-colors">
                    Verified Reviews
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-4 space-y-4 font-sans">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#c5a880]">
              Newsletter
            </h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to receive seasonal itineraries and luxury transit updates.
            </p>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/5 border border-white/15 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
              />
              <button
                type="submit"
                className="p-3 rounded-full bg-[#c5a880] hover:bg-white text-[#103322] font-bold transition-all cursor-pointer"
                aria-label="Subscribe"
              >
                {subscribed ? <Check size={18} /> : <ArrowRight size={18} />}
              </button>
            </form>
            {subscribed && (
              <span className="text-xs text-emerald-400 block">
                Thank you for subscribing!
              </span>
            )}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <span>&copy; 2026 Himaya Tours & Travels. All rights reserved.</span>
          <div className="flex items-center space-x-6 text-gray-400">
            <a
              href="tel:+94771882633"
              className="hover:text-[#c5a880] transition-colors"
            >
              +94 77 188 2633
            </a>
            <a
              href="https://wa.me/94767885107"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#c5a880] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:dulankawya444@gmail.com"
              className="hover:text-[#c5a880] transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}