"use client";

import { useState, useEffect } from "react";
import { Menu, X, Code2, User, Wrench, Briefcase, FolderGit2, GraduationCap, Mail } from "lucide-react";

const navLinks = [
  { label: "About",      href: "#about",      icon: <User size={14} /> },
  { label: "Skills",     href: "#skills",     icon: <Wrench size={14} /> },
  { label: "Experience", href: "#experience", icon: <Briefcase size={14} /> },
  { label: "Projects",   href: "#projects",   icon: <FolderGit2 size={14} /> },
  { label: "Education",  href: "#education",  icon: <GraduationCap size={14} /> },
  { label: "Contact",    href: "#contact",    icon: <Mail size={14} /> },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-white text-sm tracking-wide">
            M.R.<span className="gradient-text-cyan">Pranto</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link flex items-center gap-1.5 text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-cyan-400"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
          <a
            href="https://mrpranto.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-500/70 transition-all duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d0d18]/95 backdrop-blur-xl border-b border-white/[0.06] px-4 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-2 text-left text-slate-300 hover:text-cyan-400 py-2 text-sm font-medium transition-colors border-b border-white/[0.05] last:border-none"
            >
              {link.icon}
              {link.label}
            </button>
          ))}
          <a
            href="https://mrpranto.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 rounded-lg text-sm font-semibold text-white text-center border border-cyan-500/40 bg-cyan-500/10"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
