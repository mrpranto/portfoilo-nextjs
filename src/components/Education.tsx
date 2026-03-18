"use client";

import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Bangladesh University of Business and Technology",
    short: "BUBT",
    period: "2017 – 2021",
    color: "cyan",
    description:
      "Graduated with a focus on software engineering, data structures, algorithms, and database systems. Built foundational knowledge that directly underpins modern SaaS development practices.",
    highlights: ["Software Engineering", "Database Systems", "Algorithms & Data Structures", "Computer Networks"],
  },
  {
    degree: "Diploma in Computer Science & Engineering",
    institution: "Jhenaidah Polytechnic Institute",
    short: "JPI",
    period: "2013 – 2017",
    color: "purple",
    description:
      "Gained hands-on technical foundation in programming, hardware, and system design during a four-year polytechnic program — the launchpad for a career in full-stack engineering.",
    highlights: ["Programming Fundamentals", "System Design", "Computer Hardware", "Networking"],
  },
];

const colorConfig: Record<string, { badge: string; border: string; icon: string; tag: string }> = {
  cyan: {
    badge: "from-cyan-500 to-cyan-600",
    border: "border-l-cyan-500/50",
    icon: "text-cyan-400 bg-cyan-500/10",
    tag: "bg-cyan-500/8 text-cyan-300 border-cyan-500/20",
  },
  purple: {
    badge: "from-purple-500 to-purple-600",
    border: "border-l-purple-500/50",
    icon: "text-purple-400 bg-purple-500/10",
    tag: "bg-purple-500/8 text-purple-300 border-purple-500/20",
  },
};

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">{"// academic background"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">
            Education
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => {
            const cfg = colorConfig[edu.color];
            return (
              <div
                key={i}
                className={`glass-card glass-card-hover border-l-2 ${cfg.border} p-6`}
              >
                {/* Icon + degree */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${cfg.icon}`}
                  >
                    <GraduationCap size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-snug">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-400 text-sm mt-1">{edu.institution}</p>
                  </div>
                </div>

                {/* Period */}
                <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {edu.description}
                </p>

                {/* Subjects */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className={`text-xs font-medium px-2.5 py-1 rounded-full border ${cfg.tag}`}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional info */}
        <div className="mt-8 glass-card p-6 border border-white/[0.06]">
          <p className="text-slate-400 text-sm text-center">
            Continuous learner — staying current with emerging technologies through
            hands-on projects, open-source contributions, and production SaaS
            development.
          </p>
        </div>
      </div>
    </section>
  );
}
