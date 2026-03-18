"use client";

const skillGroups = [
  {
    category: "Languages",
    color: "cyan",
    skills: [
      { name: "PHP", years: "6 yrs" },
      { name: "JavaScript", years: "5 yrs" },
      { name: "TypeScript", years: "5 yrs" },
      { name: "Node.js", years: "4 yrs" },
    ],
  },
  {
    category: "Frontend",
    color: "purple",
    skills: [
      { name: "React.js" }, { name: "Next.js" }, { name: "Vue.js" },
      { name: "Nuxt.js" }, { name: "Alpine.js" }, { name: "Tailwind CSS" },
    ],
  },
  {
    category: "Backend",
    color: "pink",
    skills: [
      { name: "Laravel" }, { name: "Express.js" }, { name: "REST APIs" },
      { name: "Microservices" }, { name: "Event-Driven Architecture" },
    ],
  },
  {
    category: "Databases",
    color: "green",
    skills: [
      { name: "MySQL" }, { name: "PostgreSQL" }, { name: "MongoDB" },
      { name: "CouchDB" }, { name: "Redis" }, { name: "IndexedDB" },
      { name: "Neon DB" }, { name: "Prisma ORM" }, { name: "Drizzle ORM" },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "orange",
    skills: [
      { name: "AWS EC2" }, { name: "AWS SES" }, { name: "AWS Cognito" },
      { name: "Docker" }, { name: "GitHub Actions" }, { name: "CI/CD" },
      { name: "Vercel" }, { name: "VPS" },
    ],
  },
  {
    category: "Payments & AI",
    color: "blue",
    skills: [
      { name: "Stripe" }, { name: "PayPal" }, { name: "bKash" },
      { name: "SSLCommerz" }, { name: "Vector Databases" },
      { name: "Embeddings" }, { name: "AI Chatbot Systems" },
    ],
  },
  {
    category: "Tools",
    color: "cyan",
    skills: [
      { name: "Jira" }, { name: "Supervisor" }, { name: "Horizon" },
      { name: "Twilio" }, { name: "GitHub" }, { name: "GitLab" }, { name: "Bitbucket" },
    ],
  },
];

const pillClass: Record<string, string> = {
  cyan: "skill-pill-cyan",
  purple: "skill-pill-purple",
  pink: "skill-pill-pink",
  green: "skill-pill-green",
  orange: "skill-pill-orange",
  blue: "skill-pill-blue",
};

const headerClass: Record<string, string> = {
  cyan:   "text-cyan-600   dark:text-cyan-400   border-cyan-500/30   bg-cyan-500/10",
  purple: "text-purple-600 dark:text-purple-400 border-purple-500/30 bg-purple-500/10",
  pink:   "text-pink-600   dark:text-pink-400   border-pink-500/30   bg-pink-500/10",
  green:  "text-green-700  dark:text-green-400  border-green-500/30  bg-green-500/10",
  orange: "text-orange-700 dark:text-orange-400 border-orange-500/30 bg-orange-500/10",
  blue:   "text-blue-700   dark:text-blue-400   border-blue-500/30   bg-blue-500/10",
};

const barColors: Record<string, string> = {
  "PHP / Laravel":             "from-cyan-500 to-cyan-400",
  "JavaScript / TypeScript":   "from-purple-500 to-purple-400",
  "Vue.js / Nuxt.js":          "from-green-500 to-green-400",
  "Next.js / React.js":        "from-pink-500 to-pink-400",
  "Node.js / Express":         "from-orange-500 to-orange-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "var(--section-line)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "var(--section-line)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-cyan-600 dark:text-cyan-400 font-mono text-sm mb-3">{"// what I work with"}</p>
          <h2 className="text-3xl sm:text-4xl font-bold section-title" style={{ color: "var(--text-1)" }}>
            Technical Skills
          </h2>
          <p className="mt-6 max-w-xl text-base" style={{ color: "var(--text-2)" }}>
            A deep, production-tested stack built across 6+ years of shipping real-world SaaS products.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div key={group.category} className="glass-card glass-card-hover p-6 group">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider mb-5 ${headerClass[group.color]}`}>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill.name} className={`skill-pill ${pillClass[group.color]}`}>
                    {skill.name}
                    {"years" in skill && skill.years && (
                      <span className="ml-1.5 opacity-60 text-[10px]">{skill.years}</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-12 glass-card p-8">
          <h3 className="font-semibold mb-6 text-sm uppercase tracking-wider" style={{ color: "var(--text-3)" }}>
            Core Proficiencies
          </h3>
          <div className="space-y-4">
            {[
              { name: "PHP / Laravel", pct: 95 },
              { name: "JavaScript / TypeScript", pct: 90 },
              { name: "Vue.js / Nuxt.js", pct: 88 },
              { name: "Next.js / React.js", pct: 85 },
              { name: "Node.js / Express", pct: 82 },
            ].map((item) => (
              <div key={item.name}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium" style={{ color: "var(--text-2)" }}>{item.name}</span>
                  <span className="font-mono text-xs" style={{ color: "var(--text-3)" }}>{item.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--card-border)" }}>
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${barColors[item.name]}`}
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
