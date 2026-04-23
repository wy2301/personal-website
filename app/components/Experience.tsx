const jobs = [
  {
    title: "Senior Financial Analyst – FP&A",
    company: "Provincial Health Services Authority",
    location: "Vancouver, BC",
    period: "Nov 2024 – Present",
    tag: "Current",
    tagColor: "bg-emerald-500/10 text-emerald-300 border-emerald-500/30",
    highlights: ["$88M+ budget", "Power BI automation", "Cancer programs"],
    bullets: [
      "Designed and automated FP&A reporting workflows using Power BI and Power Query, reducing manual consolidation time significantly.",
      "Finance lead for provincial cancer programs with $88M+ budgets, ensuring funding logic aligns with Ministry requirements.",
      "Develop scenario analyses and cost projections supporting business cases and long-term planning with executive leadership.",
    ],
  },
  {
    title: "Financial Analyst – FP&A",
    company: "Vancouver Coastal Health",
    location: "Vancouver, BC",
    period: "May 2023 – Oct 2024",
    tag: "FP&A",
    tagColor: "bg-sky-500/10 text-sky-300 border-sky-500/30",
    highlights: ["$50M+ programs", "Workday Adaptive rollout", "RPA requirements"],
    bullets: [
      "Led adoption of Workday Adaptive Planning across 30+ cost centres, standardizing templates and improving forecast accuracy.",
      "Led end-to-end requirements definition for an RPA initiative, translating clinical workflow needs into system requirements.",
      "Conducted business case analyses using Tableau, Access, and PeopleSoft to support capacity and funding decisions.",
    ],
  },
  {
    title: "AI Product Manager – Search & Platform",
    company: "Huawei Technologies Co., Ltd.",
    location: "UAE / Turkey / China",
    period: "Jun 2020 – Aug 2022",
    tag: "AI PM",
    tagColor: "bg-violet-500/10 text-violet-300 border-violet-500/30",
    highlights: ["+107% CTR", "+47% DAU", "NPS 25→32", "5-person team"],
    bullets: [
      "Owned AI search and intervention platforms supporting global consumer products — full roadmap, A/B testing, and business impact accountability.",
      "Increased CTR by 107% by identifying user pain points through data analysis and validating improvements through experimentation.",
      "Drove 47% DAU increase and improved NPS from 25.2 to 32.7 partnering with engineering, data science, and design.",
    ],
  },
  {
    title: "Product Management Specialist",
    company: "Chinese Football Association Super League",
    location: "Beijing, China",
    period: "May 2019 – May 2020",
    tag: "PM",
    tagColor: "bg-amber-500/10 text-amber-300 border-amber-500/30",
    highlights: ["+30% interaction", "Mobile app", "Global strategy"],
    bullets: [
      "Oversaw the CSL mobile app, conducting user research to inform feature improvements and drive engagement.",
      "Spearheaded data-driven marketing strategies leading to 30% increase in pre-game interaction visibility.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(129,140,248,0.05),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">Career</span>
          <h2 className="text-4xl font-bold text-white mt-2">Experience</h2>
          <p className="text-slate-300 mt-2 max-w-lg text-base">
            From AI product platforms at global scale to enterprise analytics in healthcare.
          </p>
        </div>

        <div className="relative pl-8">
          <div className="absolute left-0 top-0 bottom-0 w-px timeline-line" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div key={i} className="relative group">
                <div className="absolute -left-[33px] top-5 w-3 h-3 rounded-full bg-sky-400 border-2 border-[#020817] shadow-[0_0_10px_rgba(56,189,248,0.6)]" />

                <div className="glass neon-border rounded-2xl p-6 hover:bg-white/[0.05] transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white leading-tight">{job.title}</h3>
                      <p className="text-sky-300 font-medium text-sm mt-0.5">{job.company}</p>
                      <p className="text-slate-400 text-xs mt-0.5">{job.location} · {job.period}</p>
                    </div>
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${job.tagColor}`}>
                      {job.tag}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.highlights.map((h) => (
                      <span key={h} className="tag-chip text-xs px-2.5 py-1 rounded-full font-mono">
                        {h}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-200 leading-relaxed">
                        <span className="mt-2 w-1 h-1 rounded-full bg-sky-400/80 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
