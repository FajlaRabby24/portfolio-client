"use client";

import { Button } from "@/components/ui/button";
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
import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";

interface MenuItem {
  title: string;
  url: string;
}

interface Navbar1Props {
  logo?: {
    url: string;
    alt: string;
    title: string;
    src?: string;
    className?: string;
  };
  menu?: MenuItem[];
  className?: string;
}

const Navbar = ({
  logo = {
    url: "/",
    alt: "logo",
    title: "FR",
  },
  menu = [
    { title: "Home", url: "#home" },
    { title: "Projects", url: "#projects" },
    { title: "Skills", url: "#skills" },
    { title: "About me", url: "#about-me" },
    {
      title: "Contact",
      url: "#contact",
    },
  ],
  className,
}: Navbar1Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    url: string,
  ) => {
    if (url.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-100 w-full bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-900/80 transition-all duration-300",
        className,
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo - Modern Clean Icon and Title */}
        <Link
          href={logo.url}
          className="flex items-center  relative z-50"
        >
          <span className="font-bold text-4xl italic tracking-tight text-zinc-900 dark:text-white transition-colors duration-300">
            {logo.title}
          </span>
        </Link>

        {/* Desktop Centered Menu Links */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          {menu.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              onClick={(e) => handleScroll(e, item.url)}
              className="text-md font-semibold text-zinc-650 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors py-2"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Right Action Elements */}
        <div className="flex items-center gap-4 z-50">
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Contact Pill Button - Desktop */}
          <Link
            href="#contact"
            onClick={(e) => handleScroll(e, "#contact")}
            className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full text-sm font-semibold bg-zinc-950 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100 transition-colors shadow-sm"
          >
            Contact
          </Link>

          {/* Hamburger Menu Button - Mobile */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-800 dark:text-zinc-200 flex items-center justify-center transition-all duration-300 hover:border-[#A855F7] dark:hover:border-[#A855F7] hover:bg-transparent dark:hover:bg-transparent cursor-pointer group md:hidden"
                aria-label="Toggle Menu"
              >
                <Menu className="w-4 h-4 text-zinc-600 dark:text-zinc-300 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-900 flex flex-col justify-between p-8 text-zinc-900 dark:text-white w-full sm:max-w-md">
              <SheetHeader className="border-b border-zinc-200 dark:border-zinc-800 pb-6">
                <SheetTitle className="text-left font-bold text-xl text-zinc-900 dark:text-white flex justify-between items-center">
                  <span>{logo.title}</span>
                </SheetTitle>
              </SheetHeader>

              {/* Stacked Menu Navigation inside Drawer */}
              <div className="flex flex-col gap-4 my-auto text-left">
                {menu.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.url}
                      onClick={(e) => {
                        handleScroll(e, item.url);
                        setIsMobileMenuOpen(false);
                      }}
                      className="text-2xl font-bold hover:text-zinc-600 dark:hover:text-zinc-300 tracking-wide transition-colors duration-300 flex items-baseline group"
                    >
                      <span className="text-zinc-400 dark:text-zinc-600 text-xs font-sans not-italic mr-4">
                        0{idx + 1}
                      </span>
                      {item.title}
                    </Link>
                  </motion.div>
                ))}

                {/* Resume Action inside Mobile Drawer */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menu.length * 0.1, duration: 0.4 }}
                  className="pt-4"
                >
                  <Link
                    href="https://drive.google.com/file/d/15X_cacvEu1qVaECwB3qas7olr71i-jzW/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-flex w-full items-center justify-center px-6 py-3 rounded-full text-base font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 shadow-sm"
                  >
                    Resume
                  </Link>
                </motion.div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6 flex flex-col gap-2 text-zinc-400 dark:text-zinc-500 text-xs font-light">
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
