"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { envVars } from "@/config/env";
import emailjs from "@emailjs/browser";
import { ArrowUp, Mail, MapPin, Send } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./banner";

export default function Contact() {
  const form = useRef<HTMLFormElement | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const currentForm = form.current;
    if (!currentForm) return;

    if (!formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        envVars.EMAILJS_SERVICE_ID,
        envVars.EMAILJS_TEMPLATE_ID,
        currentForm,
        {
          publicKey: envVars.EAMILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Thanks for reaching out. I'll contact you soon!");
          currentForm.reset();
          setFormData({ email: "", message: "" });
        },
        (error) => {
          toast.error(`FAILED... ${error.text}`);
          setIsSubmitting(false);
        },
      );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-6 flex flex-col justify-center items-center bg-zinc-50 dark:bg-zinc-950 text-foreground overflow-hidden pt-20 px-6 md:px-12 transition-colors duration-300 border-t border-zinc-200/40 dark:border-zinc-900/60"
    >
      {/* Background glow behind card */}
      <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[320px] md:w-[650px] lg:w-[800px] h-[320px] md:h-[650px] lg:h-[800px] rounded-full bg-[#A855F7]/10 blur-[80px] md:blur-[140px] lg:blur-[180px] pointer-events-none z-0" />

      <div className="w-full max-w-7xl mx-auto flex flex-col items-center relative z-10 space-y-16">
        {/* Centralized Glassmorphic Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-4xl bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-4xl p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col items-center text-center space-y-8 hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300"
        >
          {/* Mini background grid pattern */}
          <InteractiveGridPattern
            className="absolute inset-0 w-full h-full stroke-zinc-200/40 dark:stroke-zinc-800/20 mask-[radial-gradient(200px_circle_at_center,white,transparent)] z-0 pointer-events-none"
            width={20}
            height={20}
            squares={[15, 15]}
          />

          <div className="relative z-10 w-full flex flex-col items-center space-y-6">
            {/* Header Badge */}
            <div className="flex items-center gap-3 bg-purple-500/5 dark:bg-purple-500/5 px-4 py-1.5 rounded-full border border-purple-200/50 dark:border-purple-950 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A855F7]"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-purple-800 dark:text-[#c084fc] uppercase">
                Contact
              </span>
            </div>

            {/* Title & Subtitle */}
            <div className="space-y-3">
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white max-w-lg leading-tight">
                Have a project in mind or looking for a developer?
              </h2>
            </div>

            {/* Direct Form */}
            <form
              ref={form}
              onSubmit={handleSubmit}
              className="w-full max-w-xl space-y-4 pt-4"
            >
              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="email"
                  className="text-xs font-semibold text-zinc-500 dark:text-zinc-455 uppercase tracking-wider pl-1 select-none"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white/90 dark:bg-zinc-950/40 text-zinc-850 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-300 shadow-xs text-sm"
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label
                  htmlFor="message"
                  className="text-xs font-semibold text-zinc-500 dark:text-zinc-455 uppercase tracking-wider pl-1 select-none"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your project or enquiry..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-850 bg-white/90 dark:bg-zinc-950/40 text-zinc-850 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/10 transition-all duration-300 resize-none min-h-[100px] shadow-xs text-sm"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 bg-[#A855F7] hover:bg-[#b066f8] text-white font-semibold rounded-full text-xs tracking-wider shadow-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full md:w-auto justify-center"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>

            {/* Direct Contact Footer inside Card */}
            <div className="w-full max-w-xl border-t border-zinc-100 dark:border-zinc-850 pt-6 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs md:text-sm text-zinc-500 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#A855F7] dark:text-[#c084fc]" />
                <span>
                  Direct:{" "}
                  <a
                    href="mailto:fajlarabby.dev@gmail.com"
                    className="hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-colors"
                  >
                    fajlaraby.dev@gmail.com
                  </a>
                </span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#A855F7] dark:text-[#c084fc]" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Area */}
        <div className="w-full flex flex-col items-center space-y-6 pt-8 border-t border-zinc-200/40 dark:border-zinc-900/60">
          {/* Social Icons Row */}
          <div className="flex items-center justify-center gap-4 select-none">
            <Link
              href="https://github.com/FajlaRabby24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/60 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-xs hover:scale-105 flex items-center justify-center"
              aria-label="GitHub"
            >
              <GithubIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/fajlarabby24"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/60 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-xs hover:scale-105 flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </Link>
            <Link
              href="https://wa.me/01307495864"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/60 p-2 text-zinc-500 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] transition-all duration-300 shadow-xs hover:scale-105 flex items-center justify-center"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5" />
            </Link>
          </div>

          {/* Back to Top Arrow Button */}
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/60 flex items-center justify-center text-zinc-550 dark:text-zinc-400 hover:text-[#A855F7] dark:hover:text-[#c084fc] hover:border-[#A855F7] dark:hover:border-[#c084fc] hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 shadow-xs hover:scale-105 cursor-pointer"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

          {/* Copyright Tag */}
          <p className="text-xs text-zinc-400 dark:text-zinc-600 select-none">
            © {new Date().getFullYear()} Fajla Rabby. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
