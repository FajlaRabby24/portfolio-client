"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative flex flex-col justify-center items-center overflow-hidden  px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300">
      {/* Interactive Grid Pattern Background */}
      <InteractiveGridPattern
        className="absolute inset-0 w-full stroke-zinc-200/60 dark:stroke-zinc-800/40 [mask-image:radial-gradient(80%_80%_at_center,white,transparent)] z-0"
        squaresClassName="hover:fill-zinc-300/40 dark:hover:fill-zinc-800/40 transition-all duration-150"
        width={40}
        height={40}
        squares={[120, 80]}
      />

      {/* Giant Background Text: "DEVELOPER" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-zinc-200/50 dark:text-zinc-900/100 font-bold uppercase tracking-[0.12em] text-[13vw] leading-none">
          DEVELOPER
        </span>
      </div>

      {/* Main Avatar Area */}
        {/* Center Grayscale Profile Avatar */}
      <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-square flex items-end justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] lg:w-[40rem] lg:h-[40rem] select-none pointer-events-none z-50 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]"
        >
          <Image
            src="/profile.png"
            alt="Fajla Rabby"
            fill
            priority
            sizes="(max-width: 768px) 320px, (max-width: 1024px) 550px, 650px"
            className="object-contain"
          />
        </motion.div>
      </div>

      {/* Name & Dialog Pills Section */}
      <div className="relative z-20 text-center flex flex-col items-center mt-[-30px] sm:mt-[-50px] md:mt-[-70px] lg:mt-[-90px] w-full max-w-4xl px-4">
        {/* Speech Bubbles and Headline name container */}
        <div className="relative inline-flex items-center justify-center w-fit">
          {/* Speech bubble left */}
          <div className="absolute -top-10 left-0 md:left-[-160px] lg:left-[-200px] md:top-1/2 md:-translate-y-1/2 -rotate-6 z-30 whitespace-nowrap">
            <div className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white dark:border-zinc-850 dark:bg-zinc-900 text-[10px] md:text-xs font-semibold text-zinc-500 dark:text-zinc-400 shadow-sm">
              Hello, my name is
            </div>
          </div>

          {/* Speech bubble right */}
          <div className="absolute -top-10 right-0 md:right-[-160px] lg:right-[-200px] md:top-1/2 md:-translate-y-1/2 rotate-6 z-30 whitespace-nowrap">
            <Link
              href="#contact"
              className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white dark:border-zinc-850 dark:bg-zinc-900 text-[10px] md:text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] shadow-sm hover:scale-105 transition-transform duration-300 block"
            >
              Let's work together!
            </Link>
          </div>

          {/* Name Title */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tight text-zinc-900 dark:text-white leading-none mt-2 sm:mt-0 select-none">
            Fajla Rabby
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
