"use client";

import { Box, Layout, Terminal } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between items-center bg-background text-foreground overflow-hidden py-16 px-6 md:px-12 lg:px-16 select-none transition-colors duration-300">
      {/* Background grid overlay - Adapts to light/dark themes */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0" />

      {/* Background radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[30%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[320px] md:w-[650px] lg:w-[800px] h-[320px] md:h-[650px] lg:h-[800px] rounded-full bg-[#D4F15D]/10 dark:bg-[#D4F15D]/5 blur-[80px] md:blur-[140px] lg:blur-[180px] pointer-events-none z-0"
      />

      <div className="w-full max-w-5xl mx-auto flex-1 flex flex-col justify-center relative z-10 space-y-12">
        
        {/* Top Section: Split Grid (Left Image, Right Content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* Left Column: Arch Frame Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="relative w-44 h-56 md:w-52 md:h-64 rounded-t-full border-2 border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/60 dark:bg-zinc-900/30 overflow-hidden flex items-end justify-center shadow-lg hover:scale-[1.02] transition-transform duration-300">
              <div className="relative w-[90%] h-[90%] select-none pointer-events-none">
                <Image
                  src="/profile.png"
                  alt="Fajla Rabby"
                  fill
                  priority
                  sizes="(max-width: 768px) 180px, 220px"
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero copy and action */}
          <div className="lg:col-span-7 space-y-6 text-left flex flex-col items-start">
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-none"
              >
                Hey, It's{" "}
                <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
                  Fajla Rabby.
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold tracking-wide text-zinc-800 dark:text-zinc-200"
              >
                Full stack Developer
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light max-w-xl"
              >
                I've been working as a full stack web developer building high-performance, secure, and modern web applications. I am based in Bangladesh.
              </motion.p>
            </div>

            {/* Solid Lime Green Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="#contact"
                className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#D4F15D] hover:bg-[#c2e247] text-black font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-[#D4F15D]/20 cursor-pointer"
              >
                <span>Hire me</span>
              </Link>
            </motion.div>
          </div>

        </div>

        {/* SVG Neon-Lime Wave Curve Overlay - Behind the Cards */}
        <div className="absolute -bottom-10 left-0 right-0 w-full h-[250px] pointer-events-none z-0 hidden md:block">
          <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full opacity-60">
            <path
              d="M-100 100 C 200 250, 400 -50, 720 100 C 1040 250, 1200 -50, 1600 100"
              stroke="#D4F15D"
              strokeWidth="4"
              className="drop-shadow-[0_0_8px_rgba(212,241,93,0.5)]"
            />
          </svg>
        </div>

        {/* Three Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl mx-auto mt-8 px-4 z-10 relative">
          
          {/* Card 1: Product Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-white/40 border border-zinc-200 backdrop-blur-md dark:bg-zinc-950/40 dark:border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between text-left hover:border-[#D4F15D]/80 dark:hover:border-[#D4F15D]/60 hover:shadow-[0_0_30px_rgba(212,241,93,0.08)] hover:scale-[1.02] transition-all duration-500 group relative"
          >
            <div className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 group-hover:text-[#D4F15D] group-hover:border-[#D4F15D]/40 transition-colors mb-6">
              <Box className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Product Design
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">
                56 Projects
              </p>
            </div>
          </motion.div>

          {/* Card 2: Front-End Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/40 border border-zinc-200 backdrop-blur-md dark:bg-zinc-950/40 dark:border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between text-left hover:border-[#D4F15D]/80 dark:hover:border-[#D4F15D]/60 hover:shadow-[0_0_30px_rgba(212,241,93,0.08)] hover:scale-[1.02] transition-all duration-500 group relative"
          >
            <div className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 group-hover:text-[#D4F15D] group-hover:border-[#D4F15D]/40 transition-colors mb-6">
              <Layout className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Front-End Development
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">
                145 Projects
              </p>
            </div>
          </motion.div>

          {/* Card 3: Back-End Development */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-white/40 border border-zinc-200 backdrop-blur-md dark:bg-zinc-950/40 dark:border-zinc-800/80 p-8 rounded-2xl flex flex-col justify-between text-left hover:border-[#D4F15D]/80 dark:hover:border-[#D4F15D]/60 hover:shadow-[0_0_30px_rgba(212,241,93,0.08)] hover:scale-[1.02] transition-all duration-500 group relative"
          >
            <div className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center bg-zinc-50 dark:bg-zinc-900/40 text-zinc-500 dark:text-zinc-400 group-hover:text-[#D4F15D] group-hover:border-[#D4F15D]/40 transition-colors mb-6">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                Back-End Development
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light">
                78 Projects
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Banner;
