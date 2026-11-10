"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/navbar";
import HeroExpansion from "@/components/hero-expansion";
import TravelGuarantees from "@/components/travel-guarantees";
import DestinationsShowcase from "@/components/destinations";
import WhyChooseUs from "@/components/why-choose-us";
import HorizontalActivities from "@/components/horizontal-activities";
import AboutPhilosophy from "@/components/about-philosophy";
import FleetSection from "@/components/fleet";
import Footer from "@/components/footer";
import WhatsAppWidget from "@/components/whatsapp-widget";

// Dynamic imports for heavy below-the-fold modules to maximize initial load speed
const ServicesShaderCards = dynamic(() => import("@/components/services-shader-cards"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Bespoke Services...</div>,
});

const ItinerariesSection = dynamic(() => import("@/components/itineraries"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Itineraries...</div>,
});

const BookingDeck = dynamic(() => import("@/components/booking-deck"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Booking Deck...</div>,
});

const ReviewsSection = dynamic(() => import("@/components/reviews-section"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Guest Logs...</div>,
});

const ContactSection = dynamic(() => import("@/components/contact-section"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Contact Desk...</div>,
});

const ExperienceGallery = dynamic(() => import("@/components/experience-gallery"), {
  ssr: true,
  loading: () => <div className="py-20 text-center text-xs text-gray-400 font-sans">Loading Gallery...</div>,
});

export default function Home() {
  const [prefilledService, setPrefilledService] = useState("");
  const [prefilledMessage, setPrefilledMessage] = useState("");

  const handleSelectFleet = (fleetTitle: string) => {
    setPrefilledService("Custom Multi-Day Expedition");
    setPrefilledMessage(
      `I am interested in inquiring about the "${fleetTitle}" class for our private travel in Sri Lanka. Please provide availability and customized pricing.`
    );
  };

  const handleSelectService = (serviceTitle: string, serviceDesc: string) => {
    if (serviceTitle === "VIP Airport Transfers") {
      setPrefilledService("VIP Airport Transfer");
    } else if (serviceTitle === "Multi-Day Expeditions") {
      setPrefilledService("Custom Multi-Day Expedition");
    } else if (serviceTitle === "Colonial & Heritage Day Trips") {
      setPrefilledService("Colonial City & Day Trip");
    } else if (serviceTitle === "Bespoke Celebrations & Weddings") {
      setPrefilledService("Bespoke Celebration Chauffeur");
    } else if (serviceTitle === "Executive & Diplomatic Chauffeur") {
      setPrefilledService("Executive Corporate Chauffeur");
    } else {
      setPrefilledService("Custom Multi-Day Expedition");
    }

    setPrefilledMessage(
      `I am interested in inquiring about "${serviceTitle}":\n"${serviceDesc}"\n\nPlease compile rates and custom vehicle configurations for this service.`
    );
  };

  const handleSelectTrack = (trackName: string) => {
    setPrefilledService("Custom Multi-Day Expedition");
    setPrefilledMessage(
      `I'm interested in booking the suggested itinerary path: "${trackName}". Please compile rates and vehicle options for us.`
    );
  };

  return (
    <div className="relative min-h-screen bg-[#F4EFE6] selection:bg-[#A7C4A0] selection:text-[#103322]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Container */}
      <main id="main-content">
        {/* Scroll Expanding Dual-Video Hero */}
        <HeroExpansion />

        {/* 4 Pillars Travel Guarantees Strip */}
        <TravelGuarantees />

        {/* Destination Themes Showcase */}
        <DestinationsShowcase />

        {/* Why Choose Harsha & Himaya Tours & Travels Showcase */}
        <WhyChooseUs />

        {/* Island Activities Horizontal Video Gallery */}
        <HorizontalActivities />

        {/* Safety & Philosophy */}
        <AboutPhilosophy />

        {/* Fleet Selection */}
        <FleetSection onSelectFleet={handleSelectFleet} />

        {/* Bespoke Chauffeur Service Modules */}
        <ServicesShaderCards onSelectService={handleSelectService} />

        {/* Pre-Designed Itinerary Paths */}
        <ItinerariesSection onSelectTrack={handleSelectTrack} />

        {/* Interactive Booking Deck */}
        <BookingDeck
          prefilledService={prefilledService}
          prefilledMessage={prefilledMessage}
        />

        {/* Guest Logs & Testimonials Infinite Moving Cards */}
        <ReviewsSection />

        {/* HQ Contact & Map */}
        <ContactSection />

        {/* Real Customer Experience Gallery with Auto-Scrolling Rails */}
        <ExperienceGallery />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action */}
      <WhatsAppWidget />
    </div>
  );
}

