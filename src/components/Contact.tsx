"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "prantoabir1@gmail.com",
    href: "mailto:prantoabir1@gmail.com",
    color: "cyan",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+880 171 070 665",
    href: "tel:+880171070665",
    color: "purple",
  },
  {
    icon: <MapPin size={18} />,
    label: "Location",
    value: "Dhaka, Bangladesh · Open to Remote",
    href: null,
    color: "pink",
  },
  {
    icon: <Github size={18} />,
    label: "GitHub",
    value: "github.com/mrpranto",
    href: "https://github.com/mrpranto",
    color: "green",
  },
  {
    icon: <Linkedin size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/mrpranto",
    href: "https://linkedin.com/in/mrpranto",
    color: "blue",
  },
];

const colorConfig: Record<string, string> = {
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  purple: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  pink: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  green: "text-green-400 bg-green-500/10 border-green-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((res) => setTimeout(res, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-cyan-400 font-mono text-sm mb-3">{"// let's work together"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            I&apos;m currently open to new opportunities — whether it&apos;s a
            full-time role, freelance project, or technical consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider text-slate-400">
              Contact Details
            </h3>
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                    colorConfig[item.color]
                  }`}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-300 text-sm hover:text-cyan-400 transition-colors truncate block"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-300 text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability badge */}
            <div className="mt-6 p-4 rounded-xl border border-green-500/20 bg-green-500/5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400 text-sm font-semibold">Available Now</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Open to senior full-stack roles, SaaS consulting, and remote
                contract work.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. I&apos;ll get back to you within 24
                    hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-6 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="contact-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="contact-input"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-400 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="contact-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
