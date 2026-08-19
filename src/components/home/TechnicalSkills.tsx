"use client";

import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { Cloud, Database, Layout, Server } from "lucide-react";

interface SkillCategory {
  id: number;
  name: string;
  icon: React.ComponentType<any>;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 1,
    name: "Frontend Development",
    icon: Layout,
    skills: [
      "Next.js",
      "React",
      "Redux",
      "Shadcn",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    icon: Server,
    skills: ["Golang (learning)", "Node.js", "Express", "RESTful APIs", "Better Auth", "Stripe"],
  },
  {
    id: 3,
    name: "Database",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Mongoose",
    ],
  },
  {
    id: 4,
    name: "Tools & Cloud",
    icon: Cloud,
    skills: [
      "Git & GitHub",
      "Vercel",
      "Postman",
    ],
  },
];

const TechnicalSkills = () => {
  return (
    <section
    id="skills"
    className="py-20 scroll-mt-6  px-6 bg-zinc-50 dark:bg-zinc-950 text-foreground transition-colors duration-300 relative border-t border-zinc-200/40 dark:border-zinc-900/60">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Title */}
        <div className="space-y-4 text-left">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Technical{" "}
            <span className="font-serif italic text-[#A855F7] dark:text-[#c084fc]">
              Skills
            </span>
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 font-light max-w-xl text-sm md:text-base">
            A comprehensive overview of the programming languages, frameworks,
            databases, and creative tools in my daily workflow.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="relative overflow-hidden bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-900/80 rounded-4xl p-6 shadow-sm min-h-[260px] flex flex-col justify-between group hover:border-zinc-350 dark:hover:border-zinc-800 transition-colors duration-300"
              >
                {/* Mini faded grid pattern inside the card background */}
                <InteractiveGridPattern
                  className="absolute inset-0 w-full h-full stroke-zinc-200/50 dark:stroke-zinc-800/20 [mask-image:radial-gradient(120px_circle_at_center,white,transparent)] z-0 pointer-events-none"
                  width={20}
                  height={20}
                  squares={[15, 15]}
                />

                <div className="relative z-10 space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/65 dark:border-zinc-850 flex items-center justify-center text-[#A855F7] dark:text-[#c084fc] group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-50">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Bullet List */}
                  <ul className="space-y-2.5 pt-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-2.5 text-zinc-650 dark:text-zinc-400 text-sm font-medium hover:text-[#A855F7] dark:hover:text-[#c084fc] transition-colors duration-300 select-none"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] dark:bg-[#c084fc] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
