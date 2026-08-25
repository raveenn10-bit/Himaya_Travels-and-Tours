"use client";

import React, { useState } from "react";
import { ReviewItem } from "@/lib/data";
import { Info, CheckCircle2 } from "lucide-react";

interface AddReviewProps {
  onReviewAdded: (review: ReviewItem) => void;
}

export default function AddReviewSection({ onReviewAdded }: AddReviewProps) {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [rating, setRating] = useState("5");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newRev: ReviewItem = {
      id: `custom-${Date.now()}`,
      name: name.trim(),
      affiliation: `${country.trim()} • Guest Review`,
      quote: message.trim(),
      imageSrc: "/logo.PNG",
      thumbnailSrc: "/logo.PNG",
      rating: Number(rating) || 5,
      isCustom: true,
    };

    try {
      const stored = JSON.parse(
        localStorage.getItem("himaya-travels-reviews") ||
        localStorage.getItem("luxeceylon-premium-reviews") || "[]"
      );
      stored.unshift({
        id: newRev.id,
        name: newRev.name,
        country: country.trim(),
        rating: newRev.rating,
        message: newRev.quote,
      });
      localStorage.setItem("himaya-travels-reviews", JSON.stringify(stored));
    } catch (err) {
      console.error("LocalStorage error:", err);
    }

    onReviewAdded(newRev);

    setName("");
    setCountry("");
    setMessage("");
    setRating("5");
    setStatus("Thank you! Your guest log was successfully published.");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Card */}
      <article className="bg-[#faf8f5] rounded-3xl p-8 md:p-10 border border-[#c5a880]/20 shadow-sm" id="write-review">
        <span className="text-xs uppercase tracking-widest font-mono text-[#c5a880] font-bold block mb-2">
          Guest Portal
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#103322] mb-2">
          Publish Your Experience
        </h3>
        <p className="text-sm text-[#4e6359] leading-relaxed mb-6 font-sans">
          Traveled with Himaya Tours & Travels recently? Publish your honest experience so others can choose our prestigious chauffeur services.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 font-sans text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Liam Fletcher"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
                Origin Country
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Australia"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
              Rating
            </label>
            <select
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm"
            >
              <option value="5">5 Stars (Excellent)</option>
              <option value="4">4 Stars (Good)</option>
              <option value="3">3 Stars (Average)</option>
              <option value="2">2 Stars (Poor)</option>
              <option value="1">1 Star (Terrible)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-gray-600 mb-1.5">
              Travelogue Details
            </label>
            <textarea
              required
              rows={3}
              placeholder="Comment on driver helpfulness, vehicle cleanliness, and overall satisfaction..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#c5a880] text-sm resize-y"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-full bg-[#103322] hover:bg-[#c5a880] hover:text-[#103322] text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow cursor-pointer"
          >
            Submit Guest Log
          </button>

          {status && (
            <p className="text-xs text-[#103322] font-semibold flex items-center gap-1.5 pt-1">
              <CheckCircle2 size={14} className="text-emerald-600" /> {status}
            </p>
          )}
        </form>
      </article>

      {/* Travel Notice Promo Card */}
      <article className="bg-[#faf8f5] rounded-3xl p-8 md:p-10 border border-[#c5a880]/20 shadow-sm flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase tracking-widest font-mono text-[#c5a880] font-bold block mb-2">
            Travel Notice
          </span>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#103322] mb-3">
            Expressway & Transit Policies
          </h3>
          <p className="text-sm text-[#4e6359] leading-relaxed mb-6 font-sans">
            All multi-day bookings include direct fuel allocations, regional toll tariffs, driver meals, and overnight driver lodging. There are zero hidden fees.
          </p>

          <div className="bg-white rounded-2xl p-5 border border-amber-200/60 shadow-xs flex items-start gap-4 mb-6">
            <div className="p-2 rounded-xl bg-amber-50 text-amber-700">
              <Info size={20} />
            </div>
            <div className="text-xs text-[#4e6359] leading-relaxed font-sans">
              <strong className="block text-[#103322] text-sm mb-1">Standard Mileage Allowances</strong>
              Standard packages cover up to 100km per day. Excess mileage is calculated at transparent rates depending on fleet class ($0.30 - $0.45 per km).
            </div>
          </div>
        </div>

        <a
          href="#booking-section"
          className="w-full py-3.5 rounded-full border border-[#103322] text-[#103322] hover:bg-[#103322] hover:text-white text-center font-semibold text-xs uppercase tracking-wider block transition-all"
        >
          Check Booking Console
        </a>
      </article>
    </div>
  );
}
