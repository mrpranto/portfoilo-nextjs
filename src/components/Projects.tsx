"use client";

import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Dokane",
    subtitle: "Offline-First Retail SaaS",
    description:
      "Multi-module POS, B2B, and POD SaaS platform with real-time cross-location sync and offline-first architecture for uninterrupted retail operations in low-connectivity environments. Powers 100+ retail locations.",
    stack: ["Laravel", "Vue.js", "CouchDB", "IndexedDB", "Docker", "Stripe"],
    color: "cyan",
    featured: true,
    metrics: ["100+ locations", "Zero-connectivity ops", "Multi-module platform"],
  },
  {
    title: "AI Chatbot Builder",
    subtitle: "Semantic Search Engine",
    description:
      "Semantic search chatbot trained on custom product and knowledge data. Embedding pipeline indexes content; vector similarity enables context-aware responses, substantially cutting support load by ~35%.",
    stack: ["Node.js", "Vector Database", "Embeddings", "Claude API", "OpenAI API"],
    color: "purple",
    featured: true,
    metrics: ["~35% support reduction", "Custom embeddings", "Context-aware AI"],
  },
  {
    title: "Stripe Subscription Engine",
    subtitle: "Automated Billing Lifecycle",
    description:
      "Automated subscription lifecycle management — trials, upgrades, downgrades, dunning, and invoicing — integrated into three separate SaaS products with webhook-driven event handling.",
    stack: ["Laravel", "Stripe Webhooks", "Redis", "Horizon"],
    color: "green",
    featured: false,
    metrics: ["~40% faster recovery", "3 SaaS products", "Webhook automation"],
  },
  {
    title: "Telemedicine REST API",
    subtitle: "Healthcare Platform",
    description:
      "Fully stateless, token-authenticated API serving mobile health apps. Designed for horizontal scalability with multi-tenant data isolation, serving 50+ medical providers.",
    stack: ["Laravel", "AWS Cognito", "Docker", "PostgreSQL"],
    color: "pink",
    featured: false,
    metrics: ["50+ providers", "Multi-tenant", "1,000+ sessions"],
  },
  {
    title: "Inventory SaaS",
    subtitle: "Offline-First B2B Platform",
    description:
      "Offline-first Inventory SaaS using Dexie.js + CouchDB bidirectional sync achieving 100% feature availability with zero server dependency for field teams across logistics operations.",
    stack: ["Laravel", "Dexie.js", "CouchDB", "Vue.js"],
    color: "orange",
    featured: false,
    metrics: ["100% availability", "Zero server dependency", "Bidirectional sync"],
  },
  {
    title: "Quran Academy LMS",
    subtitle: "Live Learning Platform",
    description:
      "Learning Management System with live Zoom API integration for interactive Quran classes. Engineered to handle 500+ concurrent users without degradation using queue-based architecture.",
    stack: ["Laravel", "Vue.js", "Zoom API", "Redis", "Supervisor"],
    color: "blue",
    featured: false,
    metrics: ["500+ concurrent users", "Live classes", "Queue-based scaling"],
  },
];

const colorConfig: Record<string, { tag: string; metric: string; glow: string; dot: string }> = {
  cyan: {
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    metric: "text-cyan-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(6,182,212,0.12)]",
    dot: "bg-cyan-400",
  },
  purple: {
    tag: "bg-purple-500/10 text-purple-300 border-purple-500/20",
    metric: "text-purple-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(139,92,246,0.12)]",
    dot: "bg-purple-400",
  },
  green: {
    tag: "bg-green-500/10 text-green-300 border-green-500/20",
    metric: "text-green-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(34,197,94,0.12)]",
    dot: "bg-green-400",
  },
  pink: {
    tag: "bg-pink-500/10 text-pink-300 border-pink-500/20",
    metric: "text-pink-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(236,72,153,0.12)]",
    dot: "bg-pink-400",
  },
  orange: {
    tag: "bg-orange-500/10 text-orange-300 border-orange-500/20",
    metric: "text-orange-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(251,146,60,0.12)]",
    dot: "bg-orange-400",
  },
  blue: {
    tag: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    metric: "text-blue-400",
    glow: "group-hover:shadow-[0_25px_60px_rgba(59,130,246,0.12)]",
    dot: "bg-blue-400",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-cyan-400 font-mono text-sm mb-3">{"// things I've built"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white section-title">
            Featured Projects
          </h2>
          <p className="mt-6 text-slate-400 max-w-xl">
            Production systems and SaaS products built with a focus on
            reliability, scalability, and measurable impact.
          </p>
        </div>

        {/* Featured projects (first 2) - larger */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {projects.filter((p) => p.featured).map((project) => {
            const cfg = colorConfig[project.color];
            return (
              <div
                key={project.title}
                className={`glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:border-white/15 ${cfg.glow} p-6`}
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className={`w-2 h-2 rounded-full ${cfg.dot} mb-3`} />
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                    <p className={`text-sm font-medium ${cfg.metric} mt-0.5`}>
                      {project.subtitle}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={15} />
                    </button>
                    <button
                      className="w-8 h-8 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                      aria-label="Live"
                    >
                      <ExternalLink size={15} />
                    </button>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <span key={m} className={`text-xs font-medium ${cfg.metric}`}>
                      ✦ {m}
                    </span>
                  ))}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.05]">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${cfg.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Other projects - smaller grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.filter((p) => !p.featured).map((project) => {
            const cfg = colorConfig[project.color];
            return (
              <div
                key={project.title}
                className={`glass-card group cursor-default transition-all duration-300 hover:-translate-y-2 hover:border-white/15 ${cfg.glow} p-5`}
              >
                <div className={`w-2 h-2 rounded-full ${cfg.dot} mb-3`} />
                <h3 className="text-white font-semibold text-base mb-1">
                  {project.title}
                </h3>
                <p className={`text-xs font-medium ${cfg.metric} mb-3`}>
                  {project.subtitle}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.05]">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className={`text-[10px] font-medium px-2 py-0.5 rounded-full border ${cfg.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
