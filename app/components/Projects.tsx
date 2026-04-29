// Sarah Chen's advice applied:
// - 2-3 projects max, go deep
// - Lead with tension, not happy path
// - Show YOUR specific calls, not generic "led teams"
// - Honest outcomes including what didn't work / what you'd do differently

const projects = [
  {
    title: "Rendezvous — AI Wedding Planning Platform",
    description:
      "The hardest part wasn't building the AI — it was deciding what NOT to build. We had a 48-hour Build-A-Thon and five features on the table. I killed three of them, including a vendor review system that the team loved but users hadn't asked for.",
    tags: ["AI Product", "OpenAI API", "Vercel", "UX Design"],
    status: "Live",
    statusColor: "text-sky-300 bg-sky-400/10 border-sky-400/20",
    icon: "💍",
    metrics: [
      { label: "Vancouver vendors", value: "38" },
      { label: "Build time", value: "48 hrs" },
    ],
    links: [
      { label: "GitHub", url: "https://github.com/KaiBizAnalytics/Rendezvous" },
      { label: "Live Demo", url: "https://rendezvous-ochre.vercel.app" },
      { label: "Full Case Study →", url: "/projects/rendezvous" },
    ],
    highlight: "PM Case Study",
    video: "https://www.youtube.com/embed/RDbmyql2ByA",
    caseStudy: [
      { label: "The tension", text: "Team wanted to build inspiration-first (pretty photos, then filter). I pushed for constraint-first (budget + date first, then show vendors). It felt less \"fun\" — that was the argument against it." },
      { label: "The call I made", text: "I pulled competitor data showing 88% of vendors hide pricing. Couples don't have an inspiration problem — they have a shortlist problem. Constraint-first was the only model that solved it." },
      { label: "What broke", text: "The AI vision board gen was unreliable mid-build — prompts returned inconsistent styles. I made the call to ship it as a \"beta\" feature rather than cut it, which I'm still unsure about." },
      { label: "What I'd do differently", text: "I'd validate the vendor data model earlier. We built 38 profiles before confirming the matching logic worked — we got lucky. Next time: 5 vendors, full flow, then scale." },
    ],
  },
  {
    title: "AI Search Platform – Huawei",
    description:
      "Nobody agreed on what was wrong. Engineering said it was a ranking model problem. Design said it was a UI problem. Leadership wanted to add more features. I thought all three were wrong — and I had to prove it.",
    tags: ["AI/ML", "A/B Testing", "Product Strategy", "Search"],
    status: "Scaled",
    statusColor: "text-violet-300 bg-violet-400/10 border-violet-400/20",
    icon: "🔍",
    metrics: [{ label: "CTR increase", value: "+107%" }, { label: "DAU growth", value: "+47%" }],
    links: [],
    highlight: "PM Case Study",
    caseStudy: [
      { label: "The tension", text: "NPS was 25.2 and dropping. Three teams had three different root cause theories. Leadership wanted a feature roadmap in 2 weeks. I said we needed diagnosis before roadmap — that wasn't popular." },
      { label: "The call I made", text: "Pushed for a 3-week data analysis sprint before any features. Analyzed query-click data across 5 markets. The real problem: users were abandoning after the 3rd result — not a ranking issue, a result diversity issue." },
      { label: "What broke", text: "First two A/B tests failed. The diversity fix improved results quality but hurt CTR short-term — users needed to re-learn the new pattern. I had to defend holding the rollout through a bad 30-day window." },
      { label: "Outcome + honest reflection", text: "107% CTR, 47% DAU, NPS to 32.7. But the 18-month timeline was longer than it should've been. Earlier cross-market testing would've caught the pattern difference between UAE and China much sooner." },
    ],
  },
  {
    title: "FP&A Automation — PHSA Cancer Programs",
    description:
      "The existing process wasn't just slow — it was producing wrong numbers that nobody caught until month-end. Finance teams were making decisions on stale data. I had to fix the process before I could fix the tool.",
    tags: ["Power BI", "Power Query", "FP&A", "Healthcare"],
    status: "Shipped",
    statusColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    icon: "📊",
    metrics: [{ label: "Budget managed", value: "$88M+" }, { label: "Cost centres", value: "30+" }],
    links: [],
    highlight: "Coming Soon",
    caseStudy: [
      { label: "The tension", text: "Month-end reporting took 3 days and the output was frequently questioned by program leads. The instinct was to build a better dashboard. The real problem was upstream: data was being manually adjusted in 12 different spreadsheets before it hit reporting." },
      { label: "The call I made", text: "Stopped the dashboard redesign mid-build. Mapped the full data lineage first — found 7 manual intervention points that introduced errors. Redesigned the Power Query pipeline to eliminate 5 of them before touching the front-end." },
      { label: "The hard part", text: "Convincing senior stakeholders to delay the dashboard launch by 6 weeks to fix 'invisible' problems they couldn't see. The business case was: better UI on wrong data is worse than no UI at all." },
      { label: "Full write-up", text: "Detailed case study in progress — covering the data architecture decisions, stakeholder navigation, and what I'd automate differently now that I understand the clinical funding logic better." },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(56,189,248,0.05),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">Work</span>
          <h2 className="text-4xl font-bold text-white mt-2">Projects</h2>
          <p className="text-slate-300 mt-2 max-w-lg text-base">
            The real versions — what broke, what I'd change, and why the hard calls mattered.
          </p>
        </div>

        <div className="space-y-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="glass neon-border rounded-2xl p-6 hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <span className="text-3xl">{p.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-white group-hover:text-sky-300 transition-colors">
                      {p.title}
                    </h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.statusColor}`}>
                      {p.status}
                    </span>
                    {p.highlight && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-300">
                        {p.highlight}
                      </span>
                    )}
                  </div>
                  {/* Lead with the tension — per Sarah's advice */}
                  <p className="text-sm text-slate-200 leading-relaxed italic border-l-2 border-sky-500/40 pl-3">
                    {p.description}
                  </p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex flex-wrap gap-6 mb-4 pl-12">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-base font-bold text-white">{m.value}</div>
                    <div className="text-xs text-slate-400">{m.label}</div>
                  </div>
                ))}
              </div>

              {/* Case study — tension / call / broke / reflection */}
              {p.caseStudy && (
                <div className="pl-12 mb-4 grid sm:grid-cols-2 gap-3">
                  {p.caseStudy.map((c) => (
                    <div key={c.label} className="bg-white/[0.03] rounded-xl p-3 border border-white/5">
                      <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">{c.label}</span>
                      <p className="text-xs text-slate-200 mt-1 leading-relaxed">{c.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Demo video */}
              {"video" in p && p.video && (
                <div className="pl-12 mb-4">
                  <iframe
                   width="100%"
                   src={p.video as string}
                    title="Project Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full max-w-2xl rounded-xl border border-white/10"
                   style={{ maxHeight: 340, aspectRatio: "16/9" }}
                 />
                </div>
                )}

              {/* Tags + links */}
              <div className="pl-12 flex flex-wrap items-center gap-3">
                {p.tags.map((t) => (
                  <span key={t} className="tag-chip text-xs px-2.5 py-1 rounded-full font-mono">{t}</span>
                ))}
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target={l.url.startsWith("/") ? "_self" : "_blank"}
                    rel={l.url.startsWith("/") ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 transition-colors font-medium"
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
