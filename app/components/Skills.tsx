const skillGroups = [
  {
    category: "AI Product Management",
    icon: "🧠",
    color: "sky",
    skills: ["Product Strategy & Roadmapping (0→1 and scale)", "AI / Search PM", "A/B Testing & Experimentation", "Feature Prioritization", "User Research", "Metrics & KPI Definition"],
  },
  {
    category: "Data & Finance",
    icon: "📈",
    color: "violet",
    skills: ["FP&A · Budgeting · Forecasting", "Power BI & Power Query", "Workday Adaptive Planning", "Tableau · PeopleSoft · Excel", "Business Case Development", "Variance Analysis"],
  },
  {
    category: "Leadership",
    icon: "🤝",
    color: "emerald",
    skills: ["Cross-functional Team Leadership", "Stakeholder Management (Exec level)", "RPA Requirements Definition", "Enterprise Analytics", "International teams (3 continents)", "Change Management"],
  },
];

const colorMap: Record<string, string> = {
  sky: "from-sky-500/10 to-transparent border-sky-500/20 hover:border-sky-500/40",
  violet: "from-violet-500/10 to-transparent border-violet-500/20 hover:border-violet-500/40",
  emerald: "from-emerald-500/10 to-transparent border-emerald-500/20 hover:border-emerald-500/40",
};

const dotColorMap: Record<string, string> = {
  sky: "bg-sky-400",
  violet: "bg-violet-400",
  emerald: "bg-emerald-400",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.04),transparent_70%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">Capabilities</span>
          <h2 className="text-4xl font-bold text-white mt-2">Skills</h2>
          <p className="text-slate-300 mt-2 max-w-lg text-base">
            The intersection of product thinking, data fluency, and business strategy.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className={`bg-gradient-to-br ${colorMap[group.color]} border rounded-2xl p-6 transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-white">{group.category}</h3>
              </div>
              <ul className="space-y-2.5">
                {group.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className={`w-1 h-1 rounded-full flex-shrink-0 ${dotColorMap[group.color]}`} />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
