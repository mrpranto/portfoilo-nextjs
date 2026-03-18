import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm">
              MR.<span className="gradient-text-cyan">Pranto</span>
            </span>
          </div>

          {/* Center */}
          <p className="text-slate-500 text-xs flex items-center gap-1.5">
            Built with <Heart size={11} className="text-pink-500 fill-pink-500" /> using
            Next.js &amp; Tailwind CSS · © {year}
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              { icon: <Github size={16} />, href: "https://github.com/mrpranto", label: "GitHub" },
              { icon: <Linkedin size={16} />, href: "https://linkedin.com/in/mrpranto", label: "LinkedIn" },
              { icon: <Mail size={16} />, href: "mailto:prantoabir1@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
