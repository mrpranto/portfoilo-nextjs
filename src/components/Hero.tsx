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
      timeoutRef.current = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb-1 absolute top-[15%] left-[10%] w-96 h-96 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="orb-2 absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full bg-purple-600/10 blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/5 to-purple-600/5 blur-[120px]" />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(6,182,212,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6,182,212,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-sm font-medium mb-8 animate-[fadeIn_0.6s_ease-out]">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for Remote Opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-none animate-[slideUp_0.7s_ease-out]">
          Mazedur Rahman
          <br />
          <span className="gradient-text">Pranto</span>
        </h1>

        {/* Typewriter role */}
        <div className="h-12 flex items-center justify-center mb-6 animate-[fadeIn_0.8s_ease-out]">
          <p className="text-xl sm:text-2xl font-semibold text-slate-300">
            <span className="gradient-text-cyan">{displayText}</span>
            <span className="cursor-blink text-cyan-400 ml-0.5">|</span>
          </p>
        </div>

        {/* Summary */}
        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-4 animate-[slideUp_0.9s_ease-out]">
          6+ years building scalable SaaS platforms, microservices architectures
          &amp; subscription billing systems. Specializing in{" "}
          <span className="text-cyan-400 font-medium">Laravel</span>,{" "}
          <span className="text-purple-400 font-medium">Next.js</span> &amp;{" "}
          <span className="text-pink-400 font-medium">Node.js</span>.
        </p>

        {/* Location */}
        <div className="flex items-center justify-center gap-1.5 text-slate-500 text-sm mb-10 animate-[fadeIn_1s_ease-out]">
          <MapPin size={14} className="text-cyan-500" />
          <span>Dhaka, Bangladesh · Open to Remote</span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-[slideUp_1s_ease-out]">
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
          >
            View My Work
          </button>
          <button
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-6 py-3 rounded-xl font-semibold text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-5 animate-[fadeIn_1.1s_ease-out]">
          {[
            {
              icon: <Github size={20} />,
              href: "https://github.com/mrpranto",
              label: "GitHub",
            },
            {
              icon: <Linkedin size={20} />,
              href: "https://linkedin.com/in/mrpranto",
              label: "LinkedIn",
            },
            {
              icon: <Mail size={20} />,
              href: "mailto:prantoabir1@gmail.com",
              label: "Email",
            },
          ].map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={20} className="text-slate-600" />
        </div>
      </div>
    </section>
  );
}
