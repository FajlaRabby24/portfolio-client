"use client";

import { ExternalLink, Info, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { GithubIcon } from "./banner";

interface Project {
  id: number;
  title: string;
  description: string;
  features: string[];
  liveUrl: string;
  clientUrl: string;
  serverUrl: string;
  images: {
    url: string;
  }[];
  details: {
    overview: string;
    points: string[];
    tech: string[];
  };
}

const mockProjects: Project[] = [
  {
    id: 1, // Assign appropriate ID for your portfolio list
    title: "AI Generate Studio",
    description:
      "A premium full-stack AI SaaS platform enabling users to interact with multiple cutting-edge AI generation tools (Image, Video, Speech, Chatbot, Resume Analyzer) under a credits-based freemium model with Stripe payment system.",
    features: [
      "Comprehensive AI Suite: Text-to-Image, Text/Image-to-Video, Resume Analyzer, Text-to-Speech, Background Remover & Chatbot.",
      "Real-time credit tracking and daily limit management (3 daily generations for free user).",
      "Webhook for Image/Video generation and stripe payment updates.",
      "Full history tracking and generation management of all outputs (Images, Videos, Audios) with download and delete capabilities.",
    ],
    liveUrl: "https://ai-generate-studio24.vercel.app",
    clientUrl: "https://github.com/FajlaRabby24/ai-generate-studio-client",
    serverUrl: "https://github.com/FajlaRabby24/ai-generate-studio-backend",
    images: [
      {
        url: "/ai-generate-studio.png",
      },
      {
        url: "/ai-generate-studio2.png",
      },
      {
        url: "/ai-generate-studio3.png",
      },
      {
        url: "/ai-generate-studio4.png",
      },
    ],
    details: {
      overview:
        "AI Generate Studio is a full-stack Software-as-a-Service (SaaS) platform designed to put state-of-the-art AI creation tools directly in the hands of users. Built with a high-end Glassmorphic UI/UX using Next.js 16 and Tailwind CSS v4, the client dashboard interacts with a fast, TypeScript-based Express.js server. The platform integrates third-party AI APIs like Pixazo, Gemini etc and payment gateways (Stripe) to offer seamless subscription upgrades, all powered by a robust PostgreSQL database with Prisma ORM.",
      points: [
        "Built with high-fidelity performance using React 19, Next.js 16 App Router, and the Bun runtime for rapid compilation and running speed.",
        "Optimized query caching and server-state synchronization with TanStack React Query v5 to deliver a zero-latency feel on user dashboard controls.",
        "Secured session authentication and OAuth endpoints handled via better-auth integrations, matching industry safety standards.",
        "Strict prompt validation using Zod and React Hook Form on the frontend before dispatching API requests to reduce server overhead.",
        "Server-side daily rate-limiting check verifying database user generation limits before interacting with paid ModelsLab API endpoints.",
      ],
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Express.js",
        "Bun",
        "PostgreSQL",
        "Prisma ORM",
        "Tailwind CSS v4",
        "shadcn/ui",
        "Framer Motion",
        "TanStack React Query v5",
        "Stripe",
        "Third-Party AI APIs",
        "Better-Auth",
      ],
    },
  },
  {
    id: 2,
    title: "CineTube",
    description:
      "A state-of-the-art cinematic movie streaming and review application designed to deliver a high-end visual experience. Users can explore films, write ratings/reviews, curate personal watchlists, and subscribe to premium plans via Stripe.",
    features: [
      "Comprehensive movie search engine with pagination, sorting, and filters (genre, tags, Free vs. Premium).",
      "Interactive rating and user review system.",
      "Secure Stripe checkout and payment integrations with automated recurring billing webhooks.",
      "Role-based dashboards (Admin & User) to manage content indexing, user access, billing statuses, and inbox feedback.",
    ],
    liveUrl: "https://cinetube-client-24.vercel.app",
    clientUrl: "https://github.com/FajlaRabby24/CineTube-client",
    serverUrl: "https://github.com/FajlaRabby24/CineTube-server",
    images: [
      {
        url: "/cunetube.png",
      },
      {
        url: "/cunetube2.png",
      },
      {
        url: "/cunetube3.png",
      },
      {
        url: "/cunetube4.png",
      },
    ],
    details: {
      overview:
        "CineTube is a cinematic web app designed to showcase high-performance React design patterns and robust Express.js API development. The platform features strict request-response validations, modern relational database architectures, and secure payment processing hooks to enable subscription-based premium access.",
      points: [
        "Designed a highly scalable backend structure using Express 5, Prisma modular schema models, and a Neon serverless PostgreSQL database.",
        "Developed a custom client-to-server QueryBuilder on the backend supporting sorting, text search, pagination, and multi-tag genre relations.",
        "Built the frontend client using Next.js 16 (App Router), TanStack Query for server state caching, and TanStack Form for client-side forms control.",
        "Integrated Better Auth for secure user sessions alongside customized Express verification middleware.",
        "Implemented a secure Stripe webhook endpoint on the server to dynamically handle subscription events (successful checkout, cancellations, renewals).",
        "Integrated Nodemailer (SMTP configuration) to support system emails and user verification flows.",
      ],
      tech: [
        "Next.js 16",
        "React 19",
        "Express.js 5",
        "Prisma ORM",
        "Better Auth",
        "Stripe API",
        "PostgreSQL (Neon)",
        "Tailwind CSS v4",
        "TanStack Query",
        "TanStack Form",
        "Framer Motion",
        "Zod",
        "Nodemailer",
        "Cloudinary",
      ],
    },
  },
  {
    id: 3,
    title: "Medi Store",
    description:
      "A multi-vendor online pharmacy platform offering dynamic shopping experiences, custom seller dashboards, and global administrative controls.",
    features: [
      "Multi-Vendor Support with isolated data management for individual sellers",
      "Seller Dashboard for inventory management, order tracking, and sales analytics",
      "Admin Dashboard for user management (active/deactivated), dynamic categories, and global statistics",
      "Dynamic Shop with filtering, search, and category-based navigation",
    ],
    liveUrl: "https://medistore-client-omega.vercel.app",
    clientUrl: "https://github.com/FajlaRabby24/MediStore-client",
    serverUrl: "https://github.com/FajlaRabby24/medistore-server",
    images: [
      {
        url: "/medistore.png",
      },
      {
        url: "/medistore.png",
      },
      {
        url: "/medistore.png",
      },
      {
        url: "/medistore.png",
      },
    ],
    details: {
      overview:
        "Medi Store is a healthcare-focused e-commerce application designed to bridge the gap between customers, sellers, and administrators. The frontend is built on Next.js 15 (App Router) with custom skeleton loaders and Framer Motion animations to deliver a native-app-like experience. The backend API is powered by Express.js and PostgreSQL (via Prisma ORM), utilizing Better Auth for secure user flows, Cloudinary for direct image handling, and Nodemailer with EJS templates for automated OTP emails.",
      points: [
        "Multi-vendor separation ensuring that sellers can only manage their own medicines, inventories, and incoming orders.",
        "Smart state management syncing guest checkout actions and shopping cart status directly to user profiles upon login.",
        "Robust security implementation including tiered rate limiting (auth/mutations), compiled TS outputs, and production-aware secure cookies.",
        "Pixel-matched skeleton loaders, error boundaries, and dynamic automated sitemaps for optimal SEO and resilient UX.",
      ],
      tech: [
        "Next.js 15 (App Router)",
        "Express.js",
        "PostgreSQL",
        "Prisma ORM",
        "Better Auth",
        "Zustand",
        "TanStack Query",
        "Tailwind CSS & Shadcn UI",
        "Zod & React Hook Form",
        "Framer Motion",
        "Cloudinary",
        "Nodemailer (EJS)",
      ],
    },
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section
    id="projects"
    className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 relative">
      {/* Embedded Swiper Styles to match colors */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-pagination-bullet-active {
          background: #A855F7 !important;
        }
        .dark .swiper-pagination-bullet-active {
          background: #c084fc !important;
        }
      `,
        }}
      />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Featured{" "}
            <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
              Projects
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-xl text-sm md:text-base">
            A curated selection of applications showcasing full-stack
            capabilities, performance optimization, and clean UI design.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-[2rem] p-4 sm:p-6 shadow-sm hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300"
            >
              {/* Left Column: Swiper Image Slider */}
              <div className="lg:col-span-6 relative w-full aspect-16/10 bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl overflow-hidden group">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide
                      key={i}
                      className="relative w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900/40"
                    >
                      <Image
                        src={img.url}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="object-fill w-full h-full select-none"
                        width={500}
                        height={500}
                        loading="lazy"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Right Column: Details & Actions */}
              <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6 text-left">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2.5 pt-2">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400 text-sm font-light"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] dark:bg-[#c084fc] mt-2 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-100 dark:border-zinc-900/60">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-[#A855F7] hover:bg-[#b066f8] text-white transition-all shadow-sm cursor-pointer"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.clientUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-[#A855F7] dark:hover:border-[#c084fc] hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-all shadow-sm cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Client Repo</span>
                  </a>

                  <a
                    href={project.serverUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-[#A855F7] dark:hover:border-[#c084fc] hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-all shadow-sm cursor-pointer"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Server Repo</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:opacity-90 transition-all cursor-pointer shadow-sm border border-zinc-950 dark:border-white"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Details Dialog Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 bg-black/65 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedProject(null)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative w-full max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-3xl p-6 md:p-8 shadow-2xl z-10 max-h-[80vh] overflow-y-auto"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-zinc-200 dark:border-zinc-850 flex items-center justify-center text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-6 text-left">
              <div>
                <span className="text-xs font-semibold text-[#A855F7] dark:text-[#c084fc] uppercase tracking-wider">
                  Project Details
                </span>
                <h4 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-1">
                  {selectedProject.title}
                </h4>
              </div>

              <div className="space-y-4 text-sm md:text-base font-light text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>{selectedProject.details.overview}</p>

                <div className="space-y-2 pt-2">
                  <h5 className="font-semibold text-zinc-900 dark:text-white">
                    Core Architectural Focus:
                  </h5>
                  <ul className="list-disc pl-5 space-y-1">
                    {selectedProject.details.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-2">
                  <h5 className="font-semibold text-zinc-900 dark:text-white">
                    Technologies:
                  </h5>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProject.details.tech.map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-xs border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-450 font-semibold"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default FeaturedProjects;
