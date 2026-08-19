"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const DownloadIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const Banner = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center overflow-hidden scroll-mt-20 px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 pb-34"
    >
      {/* Embedded style for infinite scrolling marquee */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
      `,
        }}
      />

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
      <div className="relative w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-3xl flex items-end justify-center z-10">
        {/* Center Grayscale Profile Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-80 h-80 sm:w-[28rem] sm:h-[28rem] md:w-[34rem] md:h-[34rem] lg:w-[40rem] lg:h-[40rem] select-none pointer-events-none z-10 transition-transform duration-500 [mask-image:linear-gradient(to_bottom,black_70%,transparent_98%)]"
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

      {/* Name, Social Icons & Dialog Pills Section */}
      <div className="relative z-20 text-center flex flex-col items-center mt-[-30px] sm:mt-[-50px] md:mt-[-70px] lg:mt-[-150px] w-full max-w-4xl px-4">
        {/* Social Icons Strip (Replaced Tech Stack) */}
        <div className="flex items-center justify-center gap-4 py-2 select-none z-30">
          <Link
            href="https://github.com/FajlaRabby24"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fajlarabby24"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://wa.me/01307495864"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl border border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center"
            aria-label="WhatsApp"
          >
            <WhatsappIcon className="w-5 h-5" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1sOzw7brSAQ8gWbYcTpiQ7w5W4hUyblMv/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-5 rounded-xl border border-zinc-200 bg-white/90 dark:border-zinc-800 dark:bg-zinc-900/90 text-xs font-semibold text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-sm hover:scale-105 flex items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Resume"
          >
            <span>Resume</span>
            <DownloadIcon className="w-3.5 h-3.5" />
          </Link>
        </div>

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

      {/* Infinite Scrolling Marquee */}
      <div className="absolute bottom-20 left-0 right-0 w-full overflow-hidden border-y border-zinc-200/50 dark:border-zinc-900/80 bg-zinc-100/30 dark:bg-zinc-950/20 py-4 select-none pointer-events-none z-10">
        <div className="flex w-[200%] animate-marquee">
          <div className="flex justify-around w-1/2 text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-400/80 dark:text-zinc-650/80 uppercase">
            <span>Full Stack Developer</span>
            <span>•</span>
            <span>Next.js & MERN Engineer</span>
            <span>•</span>
            <span>AI SaaS Builder</span>
            <span>•</span>
            <span>Backend Architect</span>
            <span>•</span>
            <span>Interactive UI Developer</span>
            <span>•</span>
          </div>
          <div className="flex justify-around w-1/2 text-xs md:text-sm font-semibold tracking-[0.2em] text-zinc-400/80 dark:text-zinc-650/80 uppercase">
            <span>Full Stack Developer</span>
            <span>•</span>
            <span>Next.js & MERN Engineer</span>
            <span>•</span>
            <span>AI SaaS Builder</span>
            <span>•</span>
            <span>Backend Architect</span>
            <span>•</span>
            <span>Interactive UI Developer</span>
            <span>•</span>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down mouse indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-zinc-300 dark:border-zinc-800 flex justify-center p-1.5 bg-white/40 dark:bg-zinc-950/20 backdrop-blur-xs">
          <motion.div
            animate={{
              y: [0, 12, 0],
              opacity: [1, 0.2, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-2 rounded-full bg-[#A855F7] dark:bg-[#c084fc]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
