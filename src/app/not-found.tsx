"use client";

import { useEffect, useState } from "react";
import { Home, ArrowLeft, Code2 } from "lucide-react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4"
      style={{ background: "var(--page-bg)", color: "var(--text-1)" }}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute top-[10%] left-[15%] w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="orb-2 absolute bottom-[15%] right-[10%] w-72 h-72 rounded-full bg-purple-600/10 blur-[100px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 dark:opacity-[0.03] opacity-[0.05]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-lg">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-12">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-base tracking-wide" style={{ color: "var(--text-1)" }}>
            M.R.<span className="gradient-text-cyan">Pranto</span>
          </span>
        </div>

        {/* 404 glitch number */}
        <div className="relative mb-6 select-none">
          <div className="text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter gradient-text opacity-20">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[9rem] sm:text-[12rem] font-black leading-none tracking-tighter gradient-text">
              404
            </span>
          </div>
        </div>

        {/* Message */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-xs font-mono mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
          page_not_found
        </div>

        <h1 className="text-2xl sm:text-3xl font-bold mb-3" style={{ color: "var(--text-1)" }}>
          Oops! Page not found.
        </h1>
        <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-2)" }}>
          Looks like this route doesn&apos;t exist — it may have been moved,
          deleted, or never existed in the first place.
        </p>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/"
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            <Home size={16} />
            Back to Home
          </a>
          <button
            onClick={() => history.back()}
            className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border hover:-translate-y-0.5 transition-all duration-300"
            style={{
              borderColor: "var(--card-border)",
              background: "var(--card-bg)",
              color: "var(--text-1)",
            }}
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Decorative code snippet */}
        {mounted && (
          <div
            className="mt-14 glass-card p-5 text-left font-mono text-xs leading-relaxed"
            style={{ color: "var(--text-3)" }}
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full bg-red-400/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
              <div className="w-3 h-3 rounded-full bg-green-400/60" />
              <span className="ml-2 text-[10px]" style={{ color: "var(--text-3)" }}>terminal</span>
            </div>
            <p>
              <span className="text-cyan-600 dark:text-cyan-400">$</span>{" "}
              <span style={{ color: "var(--text-2)" }}>curl</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">https://mrpranto.dev</span>
              <span className="text-pink-600 dark:text-pink-400">/this-page</span>
            </p>
            <p className="mt-1">
              <span className="text-red-500">Error 404:</span>{" "}
              <span style={{ color: "var(--text-2)" }}>Resource not found</span>
            </p>
            <p className="mt-1">
              <span style={{ color: "var(--text-3)" }}># Try navigating to </span>
              <span className="text-green-600 dark:text-green-400">
                <a href="/" className="hover:underline">/</a>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
