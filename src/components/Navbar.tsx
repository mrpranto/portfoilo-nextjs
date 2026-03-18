"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Menu, X, Code2,
  User, Wrench, Briefcase, FolderGit2, GraduationCap, Mail,
  Sun, Moon, FileText,
} from "lucide-react";

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
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
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
    const el = document.getElementById(href.replace("#", ""));
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-xl shadow-lg shadow-black/10 border-b"
          : "bg-transparent"
      }`}
      style={isScrolled ? { background: "var(--nav-bg)", borderColor: "var(--nav-border)" } : {}}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-sm tracking-wide" style={{ color: "var(--text-1)" }}>
            M.R.<span className="gradient-text-cyan">Pranto</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className={`nav-link flex items-center gap-1.5 text-sm font-medium transition-colors ${
                activeSection === link.href.replace("#", "")
                  ? "text-cyan-500"
                  : "hover:text-cyan-500"
              }`}
              style={{
                color: activeSection === link.href.replace("#", "") ? undefined : "var(--text-2)",
              }}
            >
              {link.icon}
              {link.label}
            </button>
          ))}

          <a
            href="https://mrpranto.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 hover:-translate-y-0.5"
          >
            <FileText size={14} />
            Resume
          </a>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="w-9 h-9 rounded-xl border flex items-center justify-center transition-all duration-200 hover:border-cyan-500/50 hover:text-cyan-500"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
                color: "var(--text-2)",
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
        </div>

        {/* Mobile right: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-lg border transition-all hover:border-cyan-500/50 hover:text-cyan-500"
              style={{
                borderColor: "var(--card-border)",
                background: "var(--card-bg)",
                color: "var(--text-2)",
              }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
          )}
          <button
            className="p-2 transition-colors hover:text-cyan-500"
            style={{ color: "var(--text-2)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="backdrop-blur-xl border-b px-4 py-4 flex flex-col gap-1"
          style={{
            background: "var(--nav-bg)",
            borderColor: "var(--nav-border)",
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="flex items-center gap-2.5 py-2.5 text-sm font-medium transition-colors border-b hover:text-cyan-500"
              style={{
                borderColor: "var(--divider)",
                color: activeSection === link.href.replace("#", "") ? "#06b6d4" : "var(--text-2)",
              }}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
          <a
            href="https://mrpranto.github.io/cv/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 shadow-md shadow-cyan-500/20 transition-all duration-200"
          >
            <FileText size={14} />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
