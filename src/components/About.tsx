"use client";

import Image from "next/image";
import { Terminal, Zap, Users, Globe } from "lucide-react";

const stats = [
  { value: "6+", label: "Years of Experience", icon: <Terminal size={18} /> },
  { value: "15+", label: "SaaS Products Shipped", icon: <Zap size={18} /> },
  { value: "4", label: "Companies", icon: <Users size={18} /> },
  { value: "100+", label: "Locations Served", icon: <Globe size={18} /> },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">
            {"// get to know me"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile photo + decorative */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72">
              {/* Rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-purple-500/15 animate-[spin_15s_linear_infinite_reverse]" />

              {/* Gradient glow behind photo */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-md" />

              {/* Profile image */}
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/images/Mazedur_Rahman.jpg"
                  alt="Mazedur Rahman Pranto"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Floating tech badges */}
              <div className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg bg-[#0f1729] border border-cyan-500/30 text-cyan-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite] shadow-lg">
                Laravel
              </div>
              <div className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg bg-[#0f1729] border border-purple-500/30 text-purple-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite_1s] shadow-lg">
                Next.js
              </div>
              <div className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg bg-[#0f1729] border border-pink-500/30 text-pink-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite_2s] shadow-lg">
                Node.js
              </div>
            </div>
          </div>

          {/* Right: Bio text */}
          <div className="space-y-5">
            <p className="text-slate-300 text-base leading-relaxed">
              I&apos;m a{" "}
              <span className="text-white font-semibold">
                Product-Focused Full Stack Engineer
              </span>{" "}
              with over 6 years of experience delivering production-grade SaaS
              platforms and microservices across e-commerce, healthcare, and
              edtech verticals.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              My focus is on system design, performance optimization, and
              measurable business outcomes. I&apos;ve architected offline-first
              applications, engineered Stripe subscription billing systems, and
              led CI/CD pipeline initiatives that cut deployment errors by 60%.
            </p>
            <p className="text-slate-400 text-base leading-relaxed">
              I thrive in fast-paced environments where engineering decisions
              directly impact product growth — shipping features across 10+
              release cycles with zero missed deadlines.
            </p>

            {/* Key highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                "SaaS Architecture",
                "Microservices",
                "Event-Driven Systems",
                "API Design",
                "CI/CD",
                "Offline-First",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card glass-card-hover p-6 text-center group"
            >
              <div className="flex justify-center mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-slate-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
