"use client";

import { useState } from "react";
import { Building2, Calendar, ChevronDown, ChevronUp } from "lucide-react";

const experiences = [
  {
    role: "Senior Full Stack Software Engineer",
    company: "Reformed Tech",
    location: "Dhaka, Bangladesh",
    period: "Mar 2023 – Present",
    current: true,
    color: "cyan",
    highlights: [
      "Architected Dokane, a multi-module SaaS platform (POS, B2B, POD, Offline POS) with an offline-first sync engine using CouchDB + IndexedDB, enabling uninterrupted retail operations across 100+ locations during zero-connectivity scenarios.",
      "Engineered a Stripe subscription billing system with webhook-driven lifecycle management — automated dunning, plan upgrades, and proration — reducing failed payment recovery time by ~40% across multi-tier SaaS products.",
      "Decomposed a monolithic e-commerce application into Docker-based microservices (Laravel + Redis + Horizon), increasing deployment frequency from bi-weekly to on-demand and reducing inter-service coupling.",
      "Built a production AI chatbot system using text embeddings and a vector database for semantic product search, reducing average customer support query resolution time by ~35%.",
      "Delivered a Quran Academy LMS with live Zoom API integration, scaling to 500+ concurrent users without performance degradation.",
      "Implemented GitHub Actions CI/CD pipelines across 6+ active projects, cutting deployment errors by 60% and eliminating manual release overhead.",
    ],
    stack: ["Laravel", "Vue.js", "CouchDB", "Docker", "Stripe", "Redis", "Next.js", "AI/Embeddings"],
  },
  {
    role: "Laravel Web Applications Developer",
    company: "IT Clan BD",
    location: "Dhaka, Bangladesh",
    period: "Sep 2021 – Feb 2023",
    current: false,
    color: "purple",
    highlights: [
      "Shipped 3 production B2B SaaS platforms — Inventory, Telemedicine API, and Fulfillment — serving logistics and healthcare clients across multiple regions.",
      "Designed an offline-first Inventory SaaS using Dexie.js + CouchDB bidirectional sync, achieving 100% feature availability with zero server dependency for field teams.",
      "Designed a Telemedicine REST API consumed by mobile clients, enabling remote patient consultations and reducing scheduling friction for 50+ medical providers.",
      "Integrated AWS Cognito for multi-tenant authentication, supporting 1,000+ active sessions with secure, scalable role-based access control.",
      "Containerized environments with Docker, reducing environment-related bugs by ~70% and cutting new-developer onboarding time in half.",
    ],
    stack: ["Laravel", "CouchDB", "Dexie.js", "AWS Cognito", "Docker", "PostgreSQL"],
  },
  {
    role: "Full Stack Developer",
    company: "Gain Solution",
    location: "Dhaka, Bangladesh",
    period: "Mar 2020 – Aug 2021",
    current: false,
    color: "pink",
    highlights: [
      "Scaled and maintained 3 commercial SaaS products (POS, Booking System, HR Management) distributed on CodeCanyon, supporting 200+ independent businesses.",
      "Integrated Stripe and PayPal payment flows into POS and booking platforms, enabling recurring billing and reducing checkout drop-off.",
      "Refactored Vue.js frontend architecture with code splitting and lazy loading, improving average page load performance by ~35%.",
      "Collaborated with international clients to translate business requirements into technical specifications, shipping features across 10+ release cycles with zero missed deadlines.",
    ],
    stack: ["Laravel", "Vue.js", "Stripe", "PayPal", "MySQL", "Redis"],
  },
  {
    role: "Software Developer",
    company: "Smart Software",
    location: "Dhaka, Bangladesh",
    period: "Jul 2018 – Feb 2020",
    current: false,
    color: "orange",
    highlights: [
      "Built HRM, Merchandising, and Commercial Management systems from scratch using Laravel + jQuery, supporting 500+ employees across client organisations.",
      "Integrated Google Drive API for automated document workflows, eliminating ~30% of manual data entry for operations teams.",
    ],
    stack: ["Laravel", "jQuery", "MySQL", "Google Drive API"],
  },
];

const colorConfig: Record<string, { dot: string; badge: string; border: string }> = {
  cyan: {
    dot: "bg-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)]",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/25",
    border: "border-l-cyan-500/50",
  },
  purple: {
    dot: "bg-purple-400 shadow-[0_0_12px_rgba(139,92,246,0.8)]",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/25",
    border: "border-l-purple-500/50",
  },
  pink: {
    dot: "bg-pink-400 shadow-[0_0_12px_rgba(236,72,153,0.8)]",
    badge: "bg-pink-500/10 text-pink-300 border-pink-500/25",
    border: "border-l-pink-500/50",
  },
  orange: {
    dot: "bg-orange-400 shadow-[0_0_12px_rgba(251,146,60,0.8)]",
    badge: "bg-orange-500/10 text-orange-300 border-orange-500/25",
    border: "border-l-orange-500/50",
  },
};

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">{"// where I've worked"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">
            Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[22px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500/50 via-purple-500/30 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => {
              const cfg = colorConfig[exp.color];
              const isOpen = expanded === i;

              return (
                <div key={i} className="relative md:pl-14">
                  {/* Timeline dot */}
                  <div
                    className={`hidden md:flex absolute left-0 top-5 w-[46px] h-[46px] rounded-full border border-white/10 bg-[#0d0d18] items-center justify-center z-10`}
                  >
                    <div className={`w-3 h-3 rounded-full ${cfg.dot}`} />
                  </div>

                  {/* Card */}
                  <div className={`glass-card overflow-hidden border-l-2 ${cfg.border}`}>
                    {/* Header row */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : i)}
                      className="w-full text-left p-6 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <h3 className="text-white font-bold text-base sm:text-lg">
                            {exp.role}
                          </h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 uppercase tracking-wider">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-400">
                          <span className="flex items-center gap-1.5">
                            <Building2 size={14} className="text-slate-500" />
                            {exp.company} · {exp.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-slate-500" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className="text-slate-500 mt-1 shrink-0">
                        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                      </div>
                    </button>

                    {/* Expandable content */}
                    <div
                      className={`transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="border-t border-white/[0.06] pt-5">
                          <ul className="space-y-3 mb-5">
                            {exp.highlights.map((h, j) => (
                              <li key={j} className="flex gap-3 text-slate-400 text-sm leading-relaxed">
                                <span className="text-cyan-500 mt-1 shrink-0">▹</span>
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2">
                            {exp.stack.map((tech) => (
                              <span
                                key={tech}
                                className={`skill-pill text-[11px] border ${cfg.badge}`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
