"use client";

import React, { Suspense } from "react";
import FullSite from "@/components/full-site";

export default function PreviewPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#F4EFE6]" />}>
      <FullSite />
    </Suspense>
  );
}
