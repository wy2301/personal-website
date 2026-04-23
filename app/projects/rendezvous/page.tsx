import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rendezvous — PM Case Study | Maggie Yang",
  description: "The real story: what I cut, what broke, and what I'd do differently building an AI wedding planning platform in 48 hours.",
};

export default function RendezvousPage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-200">
      {/* Sticky header */}
      <div className="border-b border-white/5 sticky top-0 bg-[#020817]/90 backdrop-blur-xl z-40">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to portfolio
          </Link>
          <div className="flex items-center gap-3">
            <a href="https://github.com/KaiBizAnalytics/Rendezvous" target="_blank" rel="noopener noreferrer"
              className="text-xs text-slate-400 hover:text-sky-400 transition-colors">GitHub</a>
            <a href="https://rendezvous-ochre.vercel.app" target="_blank" rel="noopener noreferrer"
              className="text-xs px-3 py-1.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-colors">
              Live Demo →
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

        {/* Title */}
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300">PM Case Study</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-300">Build-A-Thon · 48 hrs</span>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300">Live on Vercel</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">💍 Rendezvous</h1>
          {/* Lead with the "so what" — per Sarah Chen */}
          <p className="text-lg text-slate-200 leading-relaxed border-l-2 border-sky-500/50 pl-4">
            The most important product decision I made on this project was to kill three features
            the team wanted to build. This is the story of that call — and why I&apos;m still not
            sure I got the vision board feature right.
          </p>
        </div>

        {/* Demo video */}
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-sky-400 uppercase mb-3">Demo</h2>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <video src="/rendezvous-demo.mp4" controls muted playsInline className="w-full" />
          </div>
        </div>

        {/* The situation — not "problem statement", real tension */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-sky-400 rounded" />
            What we were actually arguing about
          </h2>
          <p className="text-slate-200 leading-relaxed mb-4">
            We had 48 hours and a list of five features. The team was aligned on building
            inspiration-first — show beautiful photos, let couples explore, then help them find
            vendors. It felt right. It looked good in the mockups.
          </p>
          <p className="text-slate-200 leading-relaxed mb-4">
            I pushed back. My argument: couples don&apos;t have an inspiration problem. Pinterest
            exists. Instagram exists. What they can&apos;t do is find vendors who are actually
            available, within budget, and willing to show their prices. We had 48 hours — we
            couldn&apos;t solve both problems.
          </p>
          <p className="text-slate-200 leading-relaxed">
            The data point that ended the debate:{" "}
            <span className="text-sky-300 font-medium">88% of vendors on major platforms hide pricing.</span>{" "}
            That&apos;s not a content problem, it&apos;s a structural conflict of interest — the platforms
            are vendor-funded, so they have no incentive to force transparency. We could solve
            the transparency problem if we built constraint-first. We couldn&apos;t if we didn&apos;t.
          </p>
        </div>

        {/* The calls I made — specific, personal */}
        <div>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-1 h-5 bg-violet-400 rounded" />
            The specific calls I made
          </h2>
          <div className="space-y-5">
            {[
              {
                decision: "Cut the vendor review system",
                context: "The team loved it. It was the most requested feature in our quick user interviews. I still cut it.",
                reasoning: "Reviews require trust infrastructure — moderation, verification, response handling. In 48 hours, we'd build a fake version that looked real. That's worse than nothing. I argued we were better off doing fewer things that actually worked.",
              },
              {
                decision: "Cut social sharing and mood boards",
                context: "Two features that looked great in demos and would've made the build feel more polished.",
                reasoning: "They were outputs of inspiration-first thinking. Once we committed to constraint-first, they didn't fit the user journey. Cutting them also freed up the dev time we needed to build the AI vision board properly.",
              },
              {
                decision: "Shipped the vision board as a beta feature",
                context: "The AI image generation (OpenAI gpt-image-1) was producing inconsistent results with our prompts. Quality varied a lot depending on how couples described their aesthetic.",
                reasoning: "I made the call to label it 'beta' and ship it anyway, rather than cut it or delay. My reasoning: it was delightful when it worked, and users understood 'beta' as expectation-setting. I'm still not sure this was right — it introduced noise into what was otherwise a tight, functional product.",
              },
              {
                decision: "Built the vendor data model before the matching logic",
                context: "We had 38 Vancouver vendors to model with 12 attributes each — a full day of work before writing a line of matching logic.",
                reasoning: "In hindsight, this was a risk I got lucky on. I should have validated the matching logic with 5 vendors first, confirmed it worked end-to-end, then scaled to 38. We did it in the wrong order and it almost cost us the demo.",
              },
            ].map((item) => (
              <div key={item.decision} className="bg-white/[0.03] rounded-2xl p-5 border border-white/5">
                <h3 className="text-sm font-semibold text-white mb-1">📌 {item.decision}</h3>
                <p className="text-xs text-slate-400 mb-2 italic">{item.context}</p>
                <p className="text-sm text-slate-200 leading-relaxed">{item.reasoning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What I specifically built */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-emerald-400 rounded" />
            What I specifically built
          </h2>
          <p className="text-slate-300 text-sm mb-4">Not &quot;led the product&quot; — here&apos;s what I actually did:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { area: "Full PRD", detail: "User stories, acceptance criteria, edge cases, scope decisions — written before a line of code. This is the document I used to kill features with." },
              { area: "Vendor data model", detail: "Designed the 12-attribute schema: price range, capacity, setting type, style tags, cultural capability flags, LGBTQ+ affirmation, Google ratings, catering type." },
              { area: "Constraint-first intake flow", detail: "Designed the 4-step, 17-field wizard. Every field had a purpose; anything I couldn't tie to matching logic got cut from the form." },
              { area: "AI prompt engineering", detail: "Wrote and iterated the prompts for OpenAI gpt-image-1. The hardest part was getting consistent style output from free-text aesthetic descriptions." },
              { area: "Competitive positioning", detail: "Mapped WeddingWire, Zola, The Knot, and local alternatives. The structural conflict-of-interest argument came from this analysis." },
              { area: "Scope decisions", detail: "The three feature cuts above. This is the work that doesn't show up in GitHub but determined what the product was." },
            ].map((r) => (
              <div key={r.area} className="bg-white/[0.03] border border-white/5 rounded-xl p-4">
                <div className="text-sm font-semibold text-sky-300 mb-1">{r.area}</div>
                <div className="text-xs text-slate-200 leading-relaxed">{r.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Honest outcomes */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-amber-400 rounded" />
            What actually happened
          </h2>
          <div className="space-y-4">
            <div className="bg-emerald-400/5 border border-emerald-400/15 rounded-xl p-4">
              <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">What worked</div>
              <p className="text-sm text-slate-200 leading-relaxed">
                The constraint-first intake with transparent vendor matching worked exactly as intended.
                Every vendor in the shortlist was within budget and available. Reviewers called out
                the clarity of the matching logic as the product&apos;s strongest element.
                The budget planner with category sliders was the most-used feature in demos.
              </p>
            </div>
            <div className="bg-amber-400/5 border border-amber-400/15 rounded-xl p-4">
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">What was messier than expected</div>
              <p className="text-sm text-slate-200 leading-relaxed">
                The vision board quality was inconsistent. Some outputs were genuinely beautiful;
                others were generic. Labeling it &apos;beta&apos; bought goodwill but didn&apos;t fix the
                underlying prompt reliability issue. The vendor data architecture decision
                (all 38 before testing) introduced late-stage risk we got lucky to avoid.
              </p>
            </div>
            <div className="bg-sky-400/5 border border-sky-400/15 rounded-xl p-4">
              <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-2">What I&apos;d do differently</div>
              <p className="text-sm text-slate-200 leading-relaxed">
                Validate the full matching pipeline with 5 vendors before building out to 38.
                Invest more time on prompt reliability — the vision board is the most memorable
                part of the demo and it deserved better. And I&apos;d write the competitive analysis
                on day one, not day two — the constraint-first pivot would have happened faster.
              </p>
            </div>
          </div>
        </div>

        {/* Competitive table */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-rose-400 rounded" />
            Why the market framing mattered
          </h2>
          <p className="text-slate-300 text-sm mb-4">
            This isn&apos;t just positioning — the business model difference is why the product works differently.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-2 pr-6 text-slate-400 font-medium">Dimension</th>
                  <th className="text-center py-2 px-4 text-slate-400 font-medium">WeddingWire / Zola</th>
                  <th className="text-center py-2 px-4 text-sky-400 font-medium">Rendezvous</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  ["Revenue model", "Vendor subscription", "Couple-first (no vendor payments)"],
                  ["Price transparency", "Optional — vendors choose", "Required for inclusion"],
                  ["Planning entry point", "Inspiration (photos, aesthetics)", "Constraints (budget, date, capacity)"],
                  ["Cultural support", "Minimal or none", "Tagged vendor capabilities"],
                  ["Vision board", "Curated stock photography", "AI-generated from couple's description"],
                ].map(([dim, comp, ours]) => (
                  <tr key={dim}>
                    <td className="py-3 pr-6 text-slate-300">{dim}</td>
                    <td className="py-3 px-4 text-center text-slate-400 text-xs">{comp}</td>
                    <td className="py-3 px-4 text-center text-sky-300 font-medium text-xs">{ours}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-4 pt-2 border-t border-white/5">
          <a href="https://rendezvous-ochre.vercel.app" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium text-sm transition-colors">
            View Live Demo →
          </a>
          <a href="https://github.com/KaiBizAnalytics/Rendezvous" target="_blank" rel="noopener noreferrer"
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 rounded-lg font-medium text-sm transition-colors border border-white/10">
            GitHub Repo
          </a>
          <a href="/rendezvous-pitch-deck.pdf" target="_blank"
            className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 rounded-lg font-medium text-sm transition-colors border border-white/10">
            Pitch Deck (PDF)
          </a>
          <Link href="/" className="px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-200 rounded-lg font-medium text-sm transition-colors border border-white/10">
            ← Back to portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}
