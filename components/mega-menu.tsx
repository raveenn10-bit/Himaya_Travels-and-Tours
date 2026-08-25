"use client";

import React from "react";

export default function MegaMenu({ onClose }: { onClose?: () => void }) {
  const handleLinkClick = (href: string) => {
    if (onClose) onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] max-w-[95vw] bg-[#121614]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-300 pointer-events-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
        {/* Column 1 */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold block pb-1 border-b border-white/10 font-sans">
            Cultural Triangle
          </span>
          <ul className="space-y-2 text-sm text-gray-300 font-sans">
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Sigiriya Lion Rock
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Polonnaruwa ruins
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Dambulla Caves
              </button>
            </li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold block pb-1 border-b border-white/10 font-sans">
            Misty Highlands
          </span>
          <ul className="space-y-2 text-sm text-gray-300 font-sans">
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Ella Nine Arch Bridge
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Nuwara Eliya Tea Gardens
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Kandy Royal Temples
              </button>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold block pb-1 border-b border-white/10 font-sans">
            Golden Shores
          </span>
          <ul className="space-y-2 text-sm text-gray-300 font-sans">
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Galle Dutch Fort
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Mirissa Coastline
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLinkClick("#destinations")}
                className="hover:text-white hover:translate-x-1 transition-all text-left block w-full py-1 cursor-pointer"
              >
                Tangalle Retreats
              </button>
            </li>
          </ul>
        </div>

        {/* Column 4: Featured Journey */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#c5a880] font-bold block mb-2 font-sans">
              Featured Journey
            </span>
            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              Discover the raw wilderness and ancient heritage with our signature 12-day round expedition.
            </p>
          </div>
          <button
            onClick={() => handleLinkClick("#booking-section")}
            className="mt-4 inline-block text-center text-xs font-semibold uppercase tracking-wider py-2.5 px-4 rounded-full bg-[#c5a880] text-[#103322] hover:bg-white hover:text-black transition-all cursor-pointer"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </div>
  );
}
