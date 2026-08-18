"use client";

import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center items-center bg-background text-foreground overflow-hidden py-16 px-6 md:px-12 lg:px-16 select-none transition-colors duration-300"
    >
      {/* Background radial glow - Faint and purple to blend with the contact theme */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[20%] right-[30%] w-[320px] md:w-[650px] lg:w-[800px] h-[320px] md:h-[650px] lg:h-[800px] rounded-full bg-[#A855F7]/30 blur-[80px] md:blur-[140px] lg:blur-[180px] pointer-events-none z-0"
      />

      <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch w-full">
          {/* Part 1: Left Card - Get in Touch Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 relative rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:scale-[1.01] transition-all duration-500
              bg-gradient-to-br from-indigo-100/70 via-purple-50/50 to-pink-100/40 border border-purple-200/50 shadow-lg shadow-purple-900/5
              dark:bg-gradient-to-br dark:from-zinc-950/80 dark:via-purple-950/15 dark:to-zinc-900/60 dark:border-zinc-800/80 dark:shadow-2xl dark:shadow-purple-950/5"
          >
            {/* Header / Accent Badge */}
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#A855F7]"></span>
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-wider text-purple-800 dark:text-[#c084fc] uppercase font-sans">
                Let's Collaborate
              </span>
            </div>

            {/* Headline and Description */}
            <div className="my-auto py-8 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-none">
                Get in{" "}
                <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
                  Touch
                </span>
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                Have an exciting project in mind or want to discuss a new opportunity? Feel free to reach out. I'm always open to new ideas, creative collaborations, or just a friendly chat.
              </p>
            </div>

            {/* Contact Details List */}
            <div className="border-t border-zinc-200/60 dark:border-zinc-800/60 pt-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/40">
                  <Mail className="w-4 h-4 text-purple-600 dark:text-[#c084fc]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-light">Email me at</p>
                  <a
                    href="mailto:fajlarabby24@gmail.com"
                    className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-colors"
                  >
                    fajlarabby24@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/40">
                  <MapPin className="w-4 h-4 text-purple-600 dark:text-[#c084fc]" />
                </div>
                <div>
                  <p className="text-xs text-zinc-400 font-light">Located in</p>
                  <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Part 2: Right Card - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="lg:col-span-7 relative rounded-[2rem] p-8 md:p-12 flex flex-col justify-between overflow-hidden hover:scale-[1.01] transition-all duration-500
              bg-gradient-to-br from-indigo-100/70 via-purple-50/50 to-pink-100/40 border border-purple-200/50 shadow-lg shadow-purple-900/5
              dark:bg-gradient-to-br dark:from-zinc-950/80 dark:via-purple-950/15 dark:to-zinc-900/60 dark:border-zinc-800/80 dark:shadow-2xl dark:shadow-purple-950/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-zinc-800 dark:text-zinc-200">
                  <MessageSquare className="w-5 h-5 text-purple-600 dark:text-[#c084fc]" />
                  <h3 className="font-semibold tracking-wide">Send a Message</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 text-zinc-850 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
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
                      className="w-full px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 text-zinc-850 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-2 flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider"
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
                    className="w-full px-5 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 text-zinc-850 dark:text-zinc-100 placeholder-zinc-400 dark:placeholder-zinc-500 focus:outline-none focus:border-[#A855F7] focus:ring-2 focus:ring-[#A855F7]/20 transition-all duration-300 resize-none flex-1 min-h-[120px]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-[#A855F7] hover:bg-[#b066f8] text-white font-semibold rounded-full text-sm tracking-wide shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
