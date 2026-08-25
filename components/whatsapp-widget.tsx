"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, X, Send, ShieldCheck } from "lucide-react";

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasDismissedPill, setHasDismissedPill] = useState(false);

  const whatsappNumber = "94767885107";
  const defaultMessage = "Hello Himaya Tours & Travels! I would like to inquire about your private tour & chauffeur services.";

  const handleStartChat = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Expanded Luxury Concierge Card */}
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[360px] bg-[#121614]/95 backdrop-blur-2xl border border-[#c5a880]/30 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#103322] to-[#1c2e24] p-5 border-b border-[#c5a880]/20 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#c5a880]/40 bg-black/40 p-0.5">
                <Image
                  src="/logo.PNG"
                  alt="Himaya Concierge"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold tracking-wide flex items-center gap-1.5">
                  Himaya Concierge
                  <ShieldCheck size={14} className="text-[#c5a880]" />
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Fast Response</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close concierge card"
            >
              <X size={16} />
            </button>
          </div>

          {/* Card Body */}
          <div className="p-5 space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-gray-200 leading-relaxed">
              <p className="font-semibold text-white mb-1">
                Ayubowan! 🙏 Welcome to Himaya Tours & Travels.
              </p>
              <p className="text-gray-300">
                How can we assist your custom passage in Sri Lanka today? Reach our VIP travel team directly on WhatsApp for instantaneous assistance.
              </p>
            </div>

            <button
              onClick={handleStartChat}
              className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#1EBE5D] hover:from-[#20bd5a] hover:to-[#17a850] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/30 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              </svg>
              <span>Chat Directly with Guide</span>
              <Send size={13} />
            </button>
          </div>
        </div>
      )}

      {/* Main Trigger Dock */}
      <div className="flex items-center gap-3">
        {/* Subtle Luxury Tooltip Pill */}
        {!isOpen && !hasDismissedPill && (
          <div
            onClick={() => setIsOpen(true)}
            className="group cursor-pointer bg-[#121614]/90 hover:bg-[#121614] backdrop-blur-xl border border-[#c5a880]/30 text-white text-xs font-semibold py-2.5 px-4 rounded-full shadow-2xl flex items-center gap-3 transition-all duration-300 hover:border-[#c5a880]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <div className="flex flex-col text-left">
              <span className="text-[11px] font-bold text-white group-hover:text-[#c5a880] transition-colors leading-none">
                WhatsApp Concierge
              </span>
              <span className="text-[9px] text-[#c5a880] font-mono tracking-wider pt-0.5">
                Online 24/7
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setHasDismissedPill(true);
              }}
              className="text-gray-400 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors ml-1"
              aria-label="Dismiss"
            >
              <X size={12} />
            </button>
          </div>
        )}

        {/* Circular Floating WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#1ea850] via-[#25D366] to-[#4eed89] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] border-2 border-white/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center group cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/30"
          aria-label="Toggle WhatsApp Concierge Chat"
        >
          {isOpen ? (
            <X size={22} className="text-white transition-transform duration-300 rotate-90 group-hover:rotate-180" />
          ) : (
            <svg
              className="w-7 h-7 fill-current transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.019-5.116-2.879-6.98-1.858-1.858-4.332-2.888-6.974-2.89-5.441 0-9.867 4.426-9.871 9.87-.001 1.695.441 3.354 1.284 4.851L1.64 21.09l4.767-1.258zM17.43 14.54c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}