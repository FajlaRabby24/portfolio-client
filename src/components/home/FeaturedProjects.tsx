"use client";

import { ExternalLink, Info, X } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
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
    id: 1,
    title: "AI Generate Studio",
    description:
      "A developer forum featuring AI answers, tagging search algorithms, and reputation systems.",
    features: [
      "Generates automated AI answers tailored to the code syntax in the question.",
      "Custom global search parsed via title, tags, description, and author.",
      "Robust gamified reputation metrics logic based on badge rewards.",
    ],
    liveUrl: "https://devflow.example.com",
    clientUrl: "https://github.com/FajlaRabby24/devflow-client",
    serverUrl: "https://github.com/FajlaRabby24/devflow-server",
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
        "DevFlow is designed to empower developer communities with AI-driven responses. It cuts down community response times by matching new questions against vector databases and feeding relevant snippets to generative LLM pipelines.",
      points: [
        "Vector-embedding search over historical questions.",
        "Interactive markdown editor for clean code block formatting.",
        "Strict secure JWT user authentication with rate-limiting.",
        "Real-time notifications powered by web sockets.",
      ],
      tech: [
        "Next.js",
        "Postgres",
        "Prisma",
        "Express",
        "Node.js",
        "Tailwind CSS",
        "OpenAI API",
        "Socket.io",
      ],
    },
  },
  {
    id: 3,
    title: "SaaSify - Subscriptions Portal",
    description:
      "A subscription gateway engine offering tenant workspace spaces, Stripe webhooks, and analytics.",
    features: [
      "Stripe payment checkout system and real-time webhook parsing.",
      "Multi-tenant seat invitations and workspace organization isolation.",
      "Interactive usage quota charts and analytics summaries.",
    ],
    liveUrl: "https://saasify.example.com",
    clientUrl: "https://github.com/FajlaRabby24/saasify-client",
    serverUrl: "https://github.com/FajlaRabby24/saasify-server",
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
        "SaaSify offers pre-built SaaS scaffolding boilerplate. It isolates workspaces safely at the DB level, manages stripe events instantly via custom queues, and renders real-time telemetry metrics using high-performance charts.",
      points: [
        "Workspace scopes security validation policies.",
        "Automatic Stripe invoice generation and coupon tracking.",
        "Advanced quota alerts and seat limits warning alerts.",
        "High-performance chart renderings using Recharts.",
      ],
      tech: [
        "React",
        "PostgreSQL",
        "Next.js",
        "Stripe API",
        "Prisma ORM",
        "Recharts",
        "Tailwind CSS",
      ],
    },
  },
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 relative">
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
        <div className="space-y-16">
          {mockProjects.map((project) => (
            <div
              key={project.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-[2rem] p-6 md:p-8 shadow-sm hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300"
            >
              {/* Left Column: Swiper Image Slider */}
              <div className="lg:col-span-6 relative w-full aspect-[16/10] bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl overflow-hidden group">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  pagination={{ clickable: true }}
                  className="w-full h-full"
                >
                  {project.images.map((img, i) => (
                    <SwiperSlide
                      key={i}
                      className="relative w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-900/40"
                    >
                      <img
                        src={img.url}
                        alt={`${project.title} screenshot ${i + 1}`}
                        className="object-cover w-full h-full select-none"
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
