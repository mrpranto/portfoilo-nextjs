"use client";

import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, MapPin } from "lucide-react";

const roles = [
  "Full Stack Engineer",
  "SaaS Architect",
  "Laravel Expert",
  "Next.js Developer",
  "API Designer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    if (!isDeleting && displayText.length < currentRole.length) {
      timeoutRef.current = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="orb-2 absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/5 to-purple-600/5 blur-[120px]" />
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-600 dark:text-cyan-400 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
          Available for Remote Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none mb-4 text-[var(--text-1)]">
          Mazedur Rahman
          <br />
          <span className="gradient-text">Pranto</span>
        </h1>

        {/* Typewriter */}
        <div className="h-12 flex items-center justify-center mb-6">
          <p className="text-xl sm:text-2xl font-semibold text-[var(--text-2)]">
            <span className="gradient-text-cyan">{displayText}</span>
            <span className="cursor-blink text-cyan-500 ml-0.5">|</span>
          </p>
        </div>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4 text-[var(--text-2)]">
          6+ years building scalable SaaS platforms, microservices architectures &amp; subscription
          billing systems. Specializing in{" "}
          <span className="text-cyan-600 dark:text-cyan-400 font-medium">Laravel</span>,{" "}
          <span className="text-purple-600 dark:text-purple-400 font-medium">Next.js</span> &amp;{" "}
          <span className="text-pink-600 dark:text-pink-400 font-medium">Node.js</span>.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-sm mb-10 text-[var(--text-3)]">
          <MapPin size={14} className="text-cyan-500" />
          <span>Dhaka, Bangladesh · Open to Remote</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-6 py-3 rounded-xl font-semibold border hover:border-cyan-500/40 hover:-translate-y-0.5 transition-all duration-300"
            style={{ borderColor: "var(--card-border)", background: "var(--card-bg)", color: "var(--text-1)" }}
          >
            Get In Touch
          </button>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          {[
            { icon: <Github size={20} />, href: "https://github.com/mrpranto", label: "GitHub" },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/mrpranto", label: "LinkedIn" },
            { icon: <Mail size={20} />, href: "mailto:prantoabir1@gmail.com", label: "Email" },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500/40 transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "var(--card-border)", background: "var(--card-bg)", color: "var(--text-2)" }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} style={{ color: "var(--text-3)" }} />
        </div>
      </div>
    </section>
  );
}
