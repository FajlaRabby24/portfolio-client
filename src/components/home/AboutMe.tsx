"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Terminal, Sparkles, Activity, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const AboutMe = () => {
  return (
    <section 
    id="about-me"
    className="py-20 scroll-mt-6 px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 relative border-t border-zinc-200/40 dark:border-zinc-900/60">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Title */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            About{" "}
            <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
              Me
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-xl text-sm md:text-base">
            A small window into who I am, how I build applications, and my current availability.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Box 1: The Journey (col-span-2) */}
          <div className="relative overflow-hidden bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-3xl p-8 shadow-sm md:col-span-2 min-h-[220px] flex flex-col justify-between group hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300">
            <InteractiveGridPattern
              className="absolute inset-0 w-full h-full stroke-zinc-200/40 dark:stroke-zinc-800/20 [mask-image:radial-gradient(150px_circle_at_center,white,transparent)] z-0 pointer-events-none"
              width={20}
              height={20}
              squares={[15, 15]}
            />
            <div className="relative z-10 space-y-4 text-left">
              <span className="text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] uppercase tracking-wider">
                My Story
              </span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                The Programming Journey
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed max-w-2xl">
                My journey began with a simple curiosity about how code editors displayed scripts in vibrant, different colors. Starting with YouTube HTML/CSS playlists, I got hooked on JavaScript, eventually graduating to simple full-stack MERN projects. Today, I specialize in building complete Next.js and Prisma SaaS architectures.
              </p>
            </div>
          </div>

          {/* Box 2: Status & Availability (col-span-1) */}
          <div className="relative overflow-hidden bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-3xl p-8 shadow-sm md:col-span-1 min-h-[220px] flex flex-col justify-between group hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300">
            <InteractiveGridPattern
              className="absolute inset-0 w-full h-full stroke-zinc-200/40 dark:stroke-zinc-800/20 [mask-image:radial-gradient(100px_circle_at_center,white,transparent)] z-0 pointer-events-none"
              width={20}
              height={20}
              squares={[15, 15]}
            />
            <div className="relative z-10 space-y-4 text-left flex flex-col justify-between h-full w-full">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] uppercase tracking-wider">
                  hiring status
                </span>
                
                {/* Available Status with blinking dot */}
                <div className="flex items-center gap-2.5 pt-2">
                  <span className="relative flex h-3 w-3 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="font-bold text-lg text-zinc-900 dark:text-zinc-50">
                    Available for Full-time Roles
                  </span>
                </div>
              </div>

              {/* Call to Action Button */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-[#A855F7] dark:hover:text-[#c084fc] hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-all duration-300 shadow-xs w-fit cursor-pointer mt-4"
              >
                <span>Let's get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Box 3: Core Values (col-span-3) */}
          <div className="relative overflow-hidden bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-3xl p-8 shadow-sm md:col-span-3 min-h-[240px] flex flex-col justify-between group hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300">
            <InteractiveGridPattern
              className="absolute inset-0 w-full h-full stroke-zinc-200/40 dark:stroke-zinc-800/20 [mask-image:radial-gradient(200px_circle_at_center,white,transparent)] z-0 pointer-events-none"
              width={20}
              height={20}
              squares={[15, 15]}
            />
            <div className="relative z-10 space-y-6 text-left w-full">
              <span className="text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] uppercase tracking-wider">
                My Philosophy
              </span>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                {/* Value 1 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
                    <Terminal className="w-4 h-4 text-[#A855F7] dark:text-[#c084fc]" />
                    <h4 className="font-bold text-sm md:text-base">Minimalist UI/UX</h4>
                  </div>
                  <p className="text-zinc-655 dark:text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    I love building projects where design is key. Creating highly responsive, minimalist interfaces with clean layouts is what drives my frontend development.
                  </p>
                </div>

                {/* Value 2 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
                    <Sparkles className="w-4 h-4 text-[#A855F7] dark:text-[#c084fc]" />
                    <h4 className="font-bold text-sm md:text-base">Methodical Problem Solving</h4>
                  </div>
                  <p className="text-zinc-655 dark:text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    When bugs arise, I dive deep to understand the root cause. I leverage documentation, communities, and AI utilities like ChatGPT to find optimized solutions.
                  </p>
                </div>

                {/* Value 3 */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 dark:text-white">
                    <Activity className="w-4 h-4 text-[#A855F7] dark:text-[#c084fc]" />
                    <h4 className="font-bold text-sm md:text-base">Beyond the Editor</h4>
                  </div>
                  <p className="text-zinc-655 dark:text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                    Outside of programming, I enjoy playing football. When I'm not on the field, you'll find me at my screen studying documentation to keep my skillset current.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
