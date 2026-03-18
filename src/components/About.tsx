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
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-3">
            {"// get to know me"}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold section-title" style={{ color: "var(--text-1)" }}>
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Profile photo */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-72 h-72">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-3 rounded-full border border-purple-500/15 animate-[spin_15s_linear_infinite_reverse]" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-600/20 blur-md" />
              <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-cyan-500/10">
                <Image
                  src="/images/Mazedur_Rahman.jpg"
                  alt="Mazedur Rahman Pranto"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Floating badges */}
              <div
                className="absolute -top-2 -right-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite] shadow-lg"
                style={{ background: "var(--badge-bg)", boxShadow: "var(--badge-shadow)" }}
              >
                Laravel
              </div>
              <div
                className="absolute -bottom-2 -left-2 px-3 py-1.5 rounded-lg border border-purple-500/30 text-purple-600 dark:text-purple-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite_1s] shadow-lg"
                style={{ background: "var(--badge-bg)", boxShadow: "var(--badge-shadow)" }}
              >
                Next.js
              </div>
              <div
                className="absolute top-1/2 -right-8 px-3 py-1.5 rounded-lg border border-pink-500/30 text-pink-600 dark:text-pink-400 text-xs font-mono animate-[float_4s_ease-in-out_infinite_2s] shadow-lg"
                style={{ background: "var(--badge-bg)", boxShadow: "var(--badge-shadow)" }}
              >
                Node.js
              </div>
            </div>
          </div>

          {/* Right: Bio */}
          <div className="space-y-5">
            <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
              I&apos;m a{" "}
              <span className="font-semibold" style={{ color: "var(--text-1)" }}>
                Product-Focused Full Stack Engineer
              </span>{" "}
              with over 6 years of experience delivering production-grade SaaS platforms and
              microservices across e-commerce, healthcare, and edtech verticals.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
              My focus is on system design, performance optimization, and measurable business
              outcomes. I&apos;ve architected offline-first applications, engineered Stripe
              subscription billing systems, and led CI/CD pipeline initiatives that cut deployment
              errors by 60%.
            </p>
            <p className="text-base leading-relaxed" style={{ color: "var(--text-2)" }}>
              I thrive in fast-paced environments where engineering decisions directly impact product
              growth — shipping features across 10+ release cycles with zero missed deadlines.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {["SaaS Architecture", "Microservices", "Event-Driven Systems", "API Design", "CI/CD", "Offline-First"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium border"
                    style={{ background: "var(--card-bg)", borderColor: "var(--card-border)", color: "var(--text-2)" }}
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card glass-card-hover p-6 text-center group">
              <div className="flex justify-center mb-3 text-cyan-500 group-hover:text-cyan-400 transition-colors">
                {stat.icon}
              </div>
              <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
              <div className="text-xs font-medium" style={{ color: "var(--text-3)" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
