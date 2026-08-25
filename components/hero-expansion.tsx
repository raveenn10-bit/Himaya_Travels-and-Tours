"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function HeroExpansion({
  onExpandedChange,
}: {
  onExpandedChange?: (expanded: boolean) => void;
}) {
  const [progress, setProgress] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const lastTouchY = useRef(0);
  const lastTouchTime = useRef(0);
  const velocity = useRef(0);
  const touchLocked = useRef(false);
  const snapAnimRef = useRef<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const snapTo = (target: number) => {
    if (snapAnimRef.current) cancelAnimationFrame(snapAnimRef.current);
    const tick = () => {
      setProgress((prev) => {
        const diff = target - prev;
        if (Math.abs(diff) < 0.005) {
          const finalVal = target;
          setIsExpanded(finalVal >= 1);
          if (onExpandedChange) onExpandedChange(finalVal >= 1);
          snapAnimRef.current = null;
          return finalVal;
        }
        const next = prev + diff * 0.18;
        setIsExpanded(next >= 0.99);
        if (onExpandedChange) onExpandedChange(next >= 0.99);
        snapAnimRef.current = requestAnimationFrame(tick);
        return next;
      });
    };
    snapAnimRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (snapAnimRef.current) {
        cancelAnimationFrame(snapAnimRef.current);
        snapAnimRef.current = null;
      }

      if (isExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        e.preventDefault();
        setIsExpanded(false);
        if (onExpandedChange) onExpandedChange(false);
        setProgress(0.99);
      } else if (!isExpanded) {
        e.preventDefault();
        setProgress((prev) => {
          const next = Math.min(1, Math.max(0, prev + e.deltaY * 0.001));
          if (next >= 1) {
            setIsExpanded(true);
            if (onExpandedChange) onExpandedChange(true);
          }
          return next;
        });
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (snapAnimRef.current) {
        cancelAnimationFrame(snapAnimRef.current);
        snapAnimRef.current = null;
      }
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
      lastTouchY.current = touchStartY.current;
      lastTouchTime.current = performance.now();
      velocity.current = 0;
      touchLocked.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return;
      const cy = e.touches[0].clientY;
      const cx = e.touches[0].clientX;
      const totalDX = Math.abs(cx - touchStartX.current);
      const totalDY = Math.abs(cy - touchStartY.current);

      if (totalDX > totalDY && totalDX > 8) return;

      if (!touchLocked.current) {
        if (totalDY >= 8) touchLocked.current = true;
        else return;
      }

      const now = performance.now();
      const dt = Math.max(now - lastTouchTime.current, 1);
      velocity.current = (lastTouchY.current - cy) / dt;
      lastTouchY.current = cy;
      lastTouchTime.current = now;

      if (isExpanded && cy - touchStartY.current > 30 && window.scrollY <= 5) {
        e.preventDefault();
        setIsExpanded(false);
        if (onExpandedChange) onExpandedChange(false);
        setProgress(0.99);
        return;
      }

      if (!isExpanded) {
        e.preventDefault();
        const totalSwipeUp = touchStartY.current - cy;
        setProgress((prev) => {
          const next = Math.min(1, Math.max(0, prev + totalSwipeUp * 0.009));
          return next;
        });
        touchStartY.current = cy;
      }
    };

    const handleTouchEnd = () => {
      touchStartY.current = 0;
      if (!touchLocked.current) return;
      touchLocked.current = false;

      if (progress >= 1 || progress <= 0) return;

      const FLICK_UP = 0.05;
      const FLICK_DOWN = 0.25;
      let target = 0;
      if (velocity.current > FLICK_UP) target = 1;
      else if (velocity.current < -FLICK_DOWN) target = 0;
      else target = progress >= 0.1 ? 1 : 0;

      snapTo(target);
    };

    const handleScrollLock = () => {
      if (!isExpanded && window.scrollY > 0) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", handleScrollLock);
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScrollLock);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      if (snapAnimRef.current) cancelAnimationFrame(snapAnimRef.current);
    };
  }, [isExpanded, progress, onExpandedChange]);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const baseW = isMobile ? 220 : 320;
  const baseH = isMobile ? 320 : 420;
  const currentRad = (isMobile ? 24 : 20) * (1 - progress);
  const textTranslateX = progress * (isMobile ? 180 : 150);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center select-none"
      id="hero-container"
    >
      {/* Background ambient video (fades out as user expands) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-300"
        style={{ opacity: 1 - progress }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg"
          className="w-full h-full object-cover filter brightness-75"
        >
          <source src="/Assets/hero 2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Expanding Media Box */}
      <div
        ref={wrapperRef}
        className="relative z-20 flex items-center justify-center overflow-hidden shadow-2xl transition-all duration-75"
        style={{
          width: `calc(${baseW}px + (100vw - ${baseW}px) * ${progress})`,
          height: `calc(${baseH}px + (100vh - ${baseH}px) * ${progress})`,
          borderRadius: `${currentRad}px`,
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden"
          style={{ borderRadius: `${currentRad}px` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/Assets/Sigiriya rock fortress Lion Rock Ceylon.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/Assets/srilanka.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/25" />

          {/* Meta overlay inside frame */}
          <div
            className="absolute bottom-6 inset-x-6 flex justify-between items-center text-xs uppercase tracking-widest text-white/90 font-mono pointer-events-none"
            style={{ opacity: 1 - progress }}
          >
            <span
              style={{
                transform: `translate3d(-${textTranslateX}vw, 0, 0)`,
                transition: "transform 0.1s linear",
              }}
            >
              Himaya Ceylon
            </span>
            <span
              className="flex items-center gap-1"
              style={{
                transform: `translate3d(${textTranslateX}vw, 0, 0)`,
                transition: "transform 0.1s linear",
              }}
            >
              Scroll to Expand <ChevronDown size={14} className="animate-bounce" />
            </span>
          </div>
        </div>
      </div>

      {/* Splitting Large Titles */}
      <div className="absolute inset-0 flex items-center justify-between px-6 md:px-24 pointer-events-none z-30 mix-blend-difference text-white">
        <h2
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight"
          style={{
            transform: `translate3d(-${textTranslateX}vw, 0, 0)`,
            transition: "transform 0.05s linear",
          }}
        >
          Breathe
        </h2>
        <h2
          className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-right"
          style={{
            transform: `translate3d(${textTranslateX}vw, 0, 0)`,
            transition: "transform 0.05s linear",
          }}
        >
          In Ceylon
        </h2>
      </div>

      {/* Manual Click Trigger to Skip/Expand */}
      {progress < 0.95 && (
        <button
          onClick={() => snapTo(1)}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-widest transition-all cursor-pointer"
        >
          Explore Island
        </button>
      )}
    </section>
  );
}
