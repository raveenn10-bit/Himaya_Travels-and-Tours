import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F4EFE6] flex flex-col items-center justify-center text-center px-4 font-sans text-[#121614]">
      <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#6C8A66] mb-3">
        404 • Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#103322] mb-4">
        Destination Uncharted
      </h1>
      <p className="text-sm sm:text-base text-[#4e6359] max-w-md mb-8 font-light">
        The voyage path you are seeking does not exist or has been relocated. Return to explore our curated expeditions across Sri Lanka.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#103322] text-[#F4EFE6] hover:bg-[#A7C4A0] hover:text-[#103322] font-semibold text-xs uppercase tracking-widest transition-all duration-300 shadow-md"
      >
        <ArrowLeft size={14} />
        <span>Return to Home</span>
      </Link>
    </div>
  );
}