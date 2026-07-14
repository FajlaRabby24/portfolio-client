"use client";

import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="relative min-h-[calc(100vh-80px)] flex flex-col justify-between items-center bg-black text-white overflow-hidden py-10 px-6 md:px-12 lg:px-16 select-none">
      {/* Background radial glow */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.35, 0.45, 0.35],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[320px] md:w-[650px] lg:w-[800px] h-[320px] md:h-[650px] lg:h-[800px] rounded-full bg-[#A855F7]/30 blur-[80px] md:blur-[140px] lg:blur-[180px] pointer-events-none z-0"
      />

      {/* Main content wrapper */}
      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-between relative ">
        {/* Hero Title Section */}
        <div className="relative text-center flex flex-col items-center justify-center z-10">
          <h1 className="flex flex-col items-center tracking-tight text-white font-bold leading-none">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-5xl md:text-8xl lg:text-[7rem] xl:text-[8rem] uppercase"
            >
              Hi I'm Fajla
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl z-10 md:text-7xl lg:text-[6rem] xl:text-[7rem] font-serif italic text-[#A855F7] mt-1 md:mt-3 leading-tight tracking-wide"
            >
              Full Stack Developer
            </motion.span>
          </h1>
        </div>

        {/* Main Profile Image & Details layout */}
        <div className="relative w-full flex flex-col lg:flex-row items-center justify-between mt-4 md:mt-8 min-h-[350px] md:min-h-[480px]">
          {/* Left Pill - Opportunity Badge (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block absolute left-[2%] xl:left-[5%] top-[40%] -translate-y-1/2 z-30"
          >
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-md shadow-lg shadow-[#A855F7]/5 hover:border-[#A855F7]/30 transition-all duration-300"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs md:text-sm font-medium tracking-wide text-zinc-300">
                Available for now opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* Center Profile Image */}
          <div className="relative  w-full max-w-[320px] md:max-w-[520px] lg:max-w-[620px] xl:max-w-[700px] mx-auto z-20 flex justify-center -mt-16 md:-mt-36 lg:-mt-48 xl:-mt-56 select-none pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[680px] xl:h-[680px]"
            >
              <Image
                src="/profile.png"
                alt="Fajla Rabby"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain drop-shadow-[0_15px_40px_rgba(168,85,247,0.18)]"
              />
            </motion.div>
          </div>

          {/* Right Description & Button (Desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex flex-col items-end gap-6 text-right max-w-[320px] absolute right-[2%] xl:right-[5%] top-[40%] -translate-y-1/2 z-30"
          >
            <p className="text-zinc-400 text-sm xl:text-base leading-relaxed font-light">
              passionate about creating intuitive, high-performance, and secure
              digital experiences that connect users with value.
            </p>

            <Link
              href="#contact"
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 bg-zinc-950 border border-[#A855F7]/30 hover:border-[#A855F7] rounded-full text-sm font-semibold tracking-wide text-white transition-all duration-300 shadow-lg hover:shadow-[#A855F7]/15"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
            </Link>
          </motion.div>

          {/* Mobile Stacking for Pill, Description, and CTA */}
          <div className="flex flex-col lg:hidden items-center gap-6 text-center mt-6 w-full px-4 z-30">
            {/* Pill for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full border border-zinc-800 bg-zinc-950/80 backdrop-blur-sm"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium tracking-wide text-zinc-300">
                Available for now opportunities
              </span>
            </motion.div>

            {/* Description for Mobile */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-zinc-400 text-sm leading-relaxed max-w-[280px]"
            >
              passionate about creating intuitive, high-performance, and secure
              digital experiences that connect users with value.
            </motion.p>

            {/* Button for Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3 bg-zinc-950 border border-[#A855F7]/30 hover:border-[#A855F7] rounded-full text-xs font-semibold tracking-wide text-white transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#A855F7] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Trust Stats & Client Logos */}
        <div className="mt-8 md:mt-16 w-full flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-zinc-900/50">
          {/* Trust Stat (Bottom Left) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-3.5 self-start md:self-auto"
          >
            {/* Avatar group */}
            <div className="flex -space-x-3.5">
              <div className="w-9 h-9 rounded-full border border-zinc-900 overflow-hidden bg-zinc-800 flex items-center justify-center font-bold text-[10px] text-zinc-300 shadow-md">
                FR
              </div>
              <div className="w-9 h-9 rounded-full border border-zinc-900 overflow-hidden bg-zinc-700 flex items-center justify-center font-bold text-[10px] text-zinc-300 shadow-md">
                JD
              </div>
              <div className="w-9 h-9 rounded-full border border-zinc-900 overflow-hidden bg-purple-900 flex items-center justify-center font-bold text-[10px] text-purple-200 shadow-md">
                +100
              </div>
            </div>
            {/* Trust description */}
            <div className="text-left">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="text-[11px] md:text-xs text-zinc-400 leading-tight mt-0.5">
                Trusted by over{" "}
                <strong className="text-white font-medium">
                  100+ happy clients
                </strong>
                <br />
                across standard commercial projects.
              </p>
            </div>
          </motion.div>

          {/* Static Grayscale Client Brands (Bottom Right / Center) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full md:w-auto flex flex-wrap items-center justify-start md:justify-end gap-x-6 gap-y-3.5 opacity-45 hover:opacity-75 transition-opacity duration-300"
          >
            <span className="font-sans font-bold tracking-widest text-[10px] uppercase text-zinc-500">
              FocalPoint
            </span>
            <span className="font-serif italic tracking-wider text-[11px] font-bold text-zinc-500">
              Screentime
            </span>
            <span className="font-sans font-semibold tracking-tight text-[11px] text-zinc-500">
              ◆ Segment
            </span>
            <span className="font-sans font-medium tracking-normal text-[11px] text-zinc-500">
              Shutterframe
            </span>
            <span className="font-mono tracking-tighter text-[11px] text-zinc-500">
              LIGHTSPEED
            </span>
            <span className="font-serif tracking-widest text-[10px] font-bold text-zinc-500">
              MASTERMA
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
