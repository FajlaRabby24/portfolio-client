"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  className?: string;
  logo?: {
    url: string;
    alt: string;
    title: string;
    className?: string;
  };
  menu?: MenuItem[];
}

const Navbar = ({
  logo = {
    url: "/",
    alt: "logo",
    title: "Fajla Rabby",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "About me",
      url: "#about",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ],
  className,
}: Navbar1Props) => {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header
      className={cn(
        "sticky top-0 z-100 w-full bg-black/60 backdrop-blur-md border-b border-zinc-900/80 transition-all duration-300",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Serif Italic style matching "Elian Ross" */}
        <Link
          href={logo.url}
          className="flex items-center gap-2 group relative z-50"
        >
          <span className="font-serif italic text-2xl font-bold tracking-wide text-white group-hover:text-[#A855F7] transition-colors duration-300">
            {logo.title}
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#A855F7] group-hover:w-full transition-all duration-300"></span>
        </Link>

        {/* Navigation Elements */}
        <div className="flex items-center gap-8">
          {/* Desktop Inline Menu Links */}
          <nav className="hidden md:flex items-center gap-8">
            {menu.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="relative text-sm text-zinc-400 hover:text-white transition-colors py-2 font-medium tracking-wide group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#A855F7] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Hamburger Menu Button - Styled circular outline matching the screenshot */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                className="w-12 h-12 rounded-full border border-zinc-800 hover:border-[#A855F7] bg-zinc-950/40 text-white flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A855F7]/40 cursor-pointer group md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="w-5 h-5 text-zinc-300 group-hover:text-[#A855F7] group-hover:scale-110 transition-all duration-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-black/95 border-l border-zinc-900 flex flex-col justify-between p-8 text-white w-full sm:max-w-md">
              <SheetHeader className="border-b border-zinc-900/60 pb-6">
                <SheetTitle className="text-left font-serif italic text-2xl font-bold text-white flex justify-between items-center">
                  <span>{logo.title}</span>
                </SheetTitle>
              </SheetHeader>

              {/* Stacked Menu Navigation inside Drawer */}
              <div className="flex flex-col gap-6 my-auto text-left">
                {menu.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.url}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-3xl font-light hover:text-[#A855F7] tracking-wide transition-colors duration-300 font-serif italic flex items-baseline group"
                    >
                      <span className="text-[#A855F7]/40 text-xs font-sans not-italic mr-4 group-hover:text-[#A855F7] transition-colors">
                        0{idx + 1}
                      </span>
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-zinc-900/60 pt-6 flex flex-col gap-2 text-zinc-500 text-xs font-light">
                <p>© 2026 {logo.title}. All rights reserved.</p>
                <p>Full Stack Developer Portfolio</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export { Navbar };
