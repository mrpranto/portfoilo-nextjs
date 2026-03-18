import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative py-10" style={{ borderTop: "1px solid var(--divider)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
              <Code2 size={14} className="text-white" />
            </div>
            <span className="font-bold text-sm" style={{ color: "var(--text-1)" }}>
              M.R.<span className="gradient-text-cyan">Pranto</span>
            </span>
          </div>

          <p className="text-xs flex items-center gap-1.5" style={{ color: "var(--text-3)" }}>
            Built with <Heart size={11} className="text-pink-500 fill-pink-500" /> using Next.js &amp; Tailwind CSS · © {year}
          </p>

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
                className="w-8 h-8 rounded-lg border flex items-center justify-center hover:text-cyan-500 hover:border-cyan-500/30 transition-all duration-200"
                style={{ borderColor: "var(--card-border)", background: "var(--card-bg)", color: "var(--text-3)" }}
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
