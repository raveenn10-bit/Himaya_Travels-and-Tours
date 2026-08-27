"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import ComingSoon from "@/components/coming-soon";
import FullSite from "@/components/full-site";

function HomePageContent() {
  const searchParams = useSearchParams();
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if unlocked in localStorage or via searchParams (?preview=full or ?unlock=0770663154)
    const storedStatus = localStorage.getItem("himaya_site_unlocked");
    const previewParam = searchParams.get("preview");
    const unlockParam = searchParams.get("unlock");

    if (storedStatus === "true" || previewParam === "full" || unlockParam === "0770663154") {
      if (unlockParam === "0770663154") {
        localStorage.setItem("himaya_site_unlocked", "true");
      }
      setIsUnlocked(true);
    } else {
      setIsUnlocked(false);
    }
  }, [searchParams]);

  const handleLockSite = () => {
    localStorage.removeItem("himaya_site_unlocked");
    setIsUnlocked(false);
  };

  // Initial SSR / Hydration placeholder
  if (isUnlocked === null) {
    return <div className="min-h-screen bg-[#0a0d0c]" />;
  }

  if (isUnlocked) {
    return <FullSite onLockSite={handleLockSite} />;
  }

  return <ComingSoon onUnlockSuccess={() => setIsUnlocked(true)} />;
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0a0d0c]" />}>
      <HomePageContent />
    </Suspense>
  );
}