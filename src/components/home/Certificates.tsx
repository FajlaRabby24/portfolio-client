"use client";

import { Award, ExternalLink } from "lucide-react";
import Link from "next/link";

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  credentialUrl: string;
}

const mockCertificates: Certificate[] = [
  {
    id: 1,
    title: "Advanced Full‑Stack — Next.js, Prisma & PostgreSQL",
    issuer: "Programming Hero",
    credentialUrl:
      "https://drive.google.com/file/d/153kqmnxiN7RN3ycAAOKPxNKIQG5A0ROz/view?usp=drive_link",
  },
  {
    id: 2,
    title: "MERN Stack — Full‑Stack Web Development",
    issuer: "Programming Hero",
    credentialUrl:
      "https://drive.google.com/file/d/1Yvpg7n9UPJb2ZfyswcepRw4_n3g2824L/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Black Belt — Programming Hero Achievement",
    issuer: "Programming Hero",
    credentialUrl:
      "https://drive.google.com/file/d/1nRx5L4NSbyk7dxDLFXd4-RfSvxERE8u9/view?usp=drive_link",
  },
  {
    id: 4,
    title: " Hackathon Participant — Technovation'25",
    issuer: "Programming Hero",
    credentialUrl:
      "https://drive.google.com/file/d/1McbxraHH6EO3hHya7JbRbEbXgDjNb_ge/view?usp=drive_link",
  },
];

const Certificates = () => {
  return (
    <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 relative border-t border-zinc-200/40 dark:border-zinc-900/60">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Title */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Certificates &{" "}
            <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
              Achievements
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-xl text-sm md:text-base">
            Verified credentials and training programs validating my engineering
            knowledge and best practices.
          </p>
        </div>

        {/* Timeline List of Certificates */}
        <div className="space-y-4">
          {mockCertificates.map((cert) => (
            <div
              key={cert.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-2xl p-6 hover:border-zinc-350 dark:hover:border-zinc-800 transition-all duration-300 shadow-sm"
            >
              <div className="flex items-start gap-4">
                {/* Visual Icon Badge */}
                <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/65 dark:border-zinc-850 flex items-center justify-center text-[#A855F7] dark:text-[#c084fc] shrink-0">
                  <Award className="w-5 h-5" />
                </div>

                {/* Title & Issuer Info */}
                <div className="space-y-1 text-left">
                  <h3 className="font-bold text-base md:text-lg text-zinc-900 dark:text-zinc-50">
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    <span>{cert.issuer}</span>
                  </div>
                </div>
              </div>

              {/* View Action Link */}
              <Link
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 self-start sm:self-center px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300 hover:border-[#A855F7] dark:hover:border-[#c084fc] hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-all duration-300 shadow-xs shrink-0 cursor-pointer"
              >
                <span>View Credential</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
