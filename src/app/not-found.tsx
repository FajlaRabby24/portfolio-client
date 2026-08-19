"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-hidden px-6 transition-colors duration-300">
      
      {/* Background Interactive Grid */}
      <InteractiveGridPattern
        className="absolute inset-0 w-full h-full stroke-zinc-200/60 dark:stroke-zinc-800/40 [mask-image:radial-gradient(50%_50%_at_center,white,transparent)] z-0"
        width={40}
        height={40}
      />

      <div className="relative z-10 text-center space-y-8 max-w-md">
        
        {/* Large 404 Brand Number */}
        <div className="space-y-2">
          <h1 className="text-8xl md:text-9xl font-extrabold tracking-tighter text-[#A855F7] dark:text-[#c084fc] font-serif italic drop-shadow-sm select-none">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Lost in Space
          </h2>
        </div>

        {/* Supporting message */}
        <p className="text-zinc-500 dark:text-zinc-400 font-light text-sm md:text-base leading-relaxed">
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* CTA Button */}
        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#A855F7] hover:bg-[#b066f8] text-white font-semibold rounded-full text-xs tracking-wider shadow-sm transition-all duration-300 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return Home</span>
          </Link>
        </div>

      </div>

    </div>
  );
}
