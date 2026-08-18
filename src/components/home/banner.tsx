"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative  flex flex-col justify-center items-center overflow-hidden px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300">
      {/* Giant Background Text: "DEVELOPER" */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
        <span className="text-zinc-200/50 dark:text-zinc-900/15 font-bold uppercase tracking-[0.12em] text-[13vw] leading-none">
          DEVELOPER
        </span>
      </div>

      {/* Main Avatar Area */}
      <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl aspect-square flex items-center justify-center z-10">
        {/* Center Grayscale Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] lg:w-[40rem] lg:h-[40rem] select-none pointer-events-none z-10 filter grayscale contrast-[105%] hover:scale-[1.01] transition-transform duration-500"
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
      <div className="relative z-20 text-center flex flex-col items-center mt-[-30px] sm:mt-[-50px] md:mt-[-70px] lg:mt-[-90px] w-full max-w-2xl px-4">
        {/* Speech Bubbles and Headline name container */}
        <div className="relative flex flex-col items-center justify-center w-full">
          {/* Speech bubble left */}
          <div className="absolute -top-12 left-2 sm:-top-6 sm:left-[-110px] md:left-[-160px] lg:left-[-200px] -rotate-6 z-30">
            <div className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white dark:border-zinc-850 dark:bg-zinc-900 text-[10px] md:text-xs font-semibold text-zinc-500 dark:text-zinc-400 shadow-sm whitespace-nowrap">
              Hello, my name is
            </div>
          </div>

          {/* Speech bubble right */}
          <div className="absolute -top-12 right-2 sm:-top-6 sm:right-[-110px] md:right-[-160px] lg:right-[-200px] rotate-6 z-30">
            <Link
              href="#contact"
              className="px-4 py-1.5 rounded-full border border-zinc-200 bg-white dark:border-zinc-850 dark:bg-zinc-900 text-[10px] md:text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] shadow-sm hover:scale-105 transition-transform duration-300 whitespace-nowrap block"
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
