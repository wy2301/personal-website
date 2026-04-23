const interests = [
  {
    icon: "⚽",
    title: "Football & Sports Strategy",
    description:
      "Worked at Chinese Super League — football isn't just a sport to me, it's product strategy at scale. 80,000-person stadiums, global broadcast deals, fan engagement metrics. The parallels with tech PM work are endless.",
    tag: "Former CSL team",
  },
  {
    icon: "✈️",
    title: "Cross-cultural Explorer",
    description:
      "Lived and worked across China, UAE, Turkey, the US, and Canada. I don't just adapt to new cultures — I actively seek them. My best product instincts come from watching how different people solve the same problem differently.",
    tag: "4 countries lived in",
  },
  {
    icon: "🤖",
    title: "AI Tinkerer",
    description:
      "I build side projects with Claude Code, experiment with LLM APIs, and obsess over how AI changes the way products get built. This website was built with AI tools. I believe the best AI PMs actually use the technology.",
    tag: "Built this site with AI",
  },
  {
    icon: "📚",
    title: "Lifelong Learner",
    description:
      "MBA at 29. PMP while working full-time. ACCA while managing $88M budgets. I study not because I have to — but because I genuinely believe you can't be a great PM without constantly being a student of business, technology, and humans.",
    tag: "MBA · PMP · ACCA",
  },
  {
    icon: "🎯",
    title: "Data-Driven Decision Maker",
    description:
      "Whether it's A/B testing search features at Huawei or building variance analysis models in healthcare, I believe every opinion should have a number next to it. I'm not satisfied until I know *why* something is happening.",
    tag: "Analytics obsessed",
  },
  {
    icon: "🌱",
    title: "Community Builder",
    description:
      "PASS Leader and Teaching Assistant at UBC Sauder — I coached students through tough finance courses. I believe the best leaders teach. Helping others level up is one of the most fulfilling things I do.",
    tag: "UBC Sauder TA",
  },
];

export default function Personality() {
  return (
    <section id="about-me" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(192,132,252,0.06),transparent_60%)]" />

      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Section header */}
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-violet-400 uppercase">Human behind the resume</span>
          <h2 className="text-4xl font-bold text-white mt-2">Beyond the Job Title</h2>
          <p className="text-slate-300 mt-3 max-w-2xl text-base leading-relaxed">
            The best products come from people who are genuinely curious about the world.
            Here&apos;s who I am outside of work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {interests.map((item) => (
            <div
              key={item.title}
              className="glass neon-border rounded-2xl p-6 hover:bg-white/[0.06] transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs text-violet-300 bg-violet-400/10 border border-violet-400/20 px-2.5 py-1 rounded-full font-medium">
                  {item.tag}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-2 group-hover:text-violet-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-12 glass rounded-2xl p-8 text-center neon-border">
          <p className="text-lg text-slate-200 italic leading-relaxed max-w-2xl mx-auto">
            &ldquo;The best PM I know doesn&apos;t just ship features — she ships understanding.
            Understanding of users, numbers, and what actually matters to the business.&rdquo;
          </p>
          <p className="text-sm text-slate-500 mt-3">— What I aim to be, every day</p>
        </div>
      </div>
    </section>
  );
}
