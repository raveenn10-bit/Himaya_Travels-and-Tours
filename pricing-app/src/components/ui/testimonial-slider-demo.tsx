import { useEffect, useState } from "react";
import { TestimonialSlider } from "./testimonial-slider-1";

// 1. Static reviews list with high-quality travel portrait assets
const staticReviews = [
  {
    id: "static-1",
    name: "Elena & Pierre",
    affiliation: "France • Premium Sedan",
    quote: "LuxeCeylon crafted an extraordinary honeymoon for us. The Mercedes sedan was spotless, and our chauffeur guide was highly knowledgeable and elegant.",
    imageSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-2",
    name: "Dr. Alister Vance",
    affiliation: "United Kingdom • Family Cruiser",
    quote: "Travelling with three kids is demanding, but the luxury van made our 12-day round tour flawless. Safe driving and flexible, stress-free scheduling.",
    imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-3",
    name: "Sophia Chen",
    affiliation: "Singapore • Airport Transfer",
    quote: "Concierge service was exceptionally professional. Prompt midnight pickup, beautiful corporate fleet, and smooth coordination.",
    imageSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=160&fit=crop&q=80",
    rating: 5,
  },
  {
    id: "static-4",
    name: "Marcus Cole",
    affiliation: "Australia • Multi-Day Expedition",
    quote: "A true time-saver. Highly recommend LuxeCeylon for anyone visiting Sri Lanka. Our guide was incredibly polite, spoke fluent English, and drove perfectly.",
    imageSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&h=800&fit=crop&q=80",
    thumbnailSrc: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&h=160&fit=crop&q=80",
    rating: 5,
  }
];

export default function TestimonialSliderDemo() {
  const [reviews, setReviews] = useState(staticReviews);

  useEffect(() => {
    // Set background of html and body to transparent on mount for testimonials mode
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    
    // Save original styles
    const originalHtmlBg = htmlEl.style.backgroundColor;
    const originalBodyBg = bodyEl.style.backgroundColor;
    
    htmlEl.style.backgroundColor = "transparent";
    bodyEl.style.backgroundColor = "transparent";
    
    const hadDarkClass = htmlEl.classList.contains("dark");
    if (hadDarkClass) {
      htmlEl.classList.remove("dark");
    }

    const loadCustomReviews = () => {
      try {
        const stored = localStorage.getItem("luxeceylon-premium-reviews");
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Map custom reviews to slider review format
            const customMapped = parsed.map((item: any, idx: number) => ({
              id: item.id || `custom-${idx}`,
              name: item.name || "Anonymous",
              affiliation: `${item.country || "Guest"} • Guest Review`,
              quote: item.message || item.text || "",
              imageSrc: "logo.PNG",
              thumbnailSrc: "logo.PNG",
              rating: Number(item.rating) || 5,
            }));
            // Show custom reviews first, then static ones
            setReviews([...customMapped, ...staticReviews]);
          } else {
            setReviews(staticReviews);
          }
        } else {
          setReviews(staticReviews);
        }
      } catch (e) {
        console.error("Error loading reviews from localStorage", e);
      }
    };

    loadCustomReviews();

    const sendHeight = () => {
      const height = document.documentElement.scrollHeight || document.body.scrollHeight;
      window.parent.postMessage({ type: 'resize-iframe', height, name: 'testimonials' }, '*');
    };

    sendHeight();
    window.addEventListener("resize", sendHeight);

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      observer = new ResizeObserver(() => {
        sendHeight();
      });
      observer.observe(document.body);
    }

    // Listen for storage changes from parent page submissions
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "luxeceylon-premium-reviews") {
        loadCustomReviews();
      }
    };
    window.addEventListener("storage", handleStorageChange);

    // Listen for postMessage from parent for instant refresh
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "refresh-reviews") {
        loadCustomReviews();
      }
    };
    window.addEventListener("message", handleMessage);

    return () => {
      // Restore original styles on unmount
      htmlEl.style.backgroundColor = originalHtmlBg;
      bodyEl.style.backgroundColor = originalBodyBg;
      if (hadDarkClass) {
        htmlEl.classList.add("dark");
      }
      window.removeEventListener("resize", sendHeight);
      if (observer) observer.disconnect();
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="w-full">
      <TestimonialSlider reviews={reviews} />
    </div>
  );
}
