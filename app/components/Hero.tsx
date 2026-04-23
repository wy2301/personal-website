"use client";
import { useState, useEffect } from "react";
import { useMouseParallax } from "../hooks/useMouseParallax";

const CARD_PARALLAX = [
  { x: -28, y: -22 },
  { x:  24, y: -18 },
  { x: -20, y:  26 },
  { x:  26, y:  20 },
];

const ROLES = [
  "AI Product Manager",
  "Data-Driven Strategist",
  "0→1 Builder",
  "Cross-functional Leader",
];

const LOGOS = [
  { name: "Huawei",   abbr: "HW",  color: "text-red-400" },
  { name: "PHSA",     abbr: "PHSA",color: "text-emerald-400" },
  { name: "VCH",      abbr: "VCH", color: "text-blue-400" },
  { name: "UBC",      abbr: "UBC", color: "text-sky-400" },
  { name: "Columbia", abbr: "CU",  color: "text-violet-400" },
];

export default function Hero() {
  const mouse = useMouseParallax();
  const [statsHovered, setStatsHovered] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section id="about" className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg">
      {/* Parallax orbs */}
      <div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)", top: "10%", left: "-10%", transform: `translate(${mouse.x * -30}px, ${mouse.y * -20}px)`, filter: "blur(40px)" }} />
      <div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(129,140,248,0.14) 0%, transparent 70%)", bottom: "0%", right: "-15%", transform: `translate(${mouse.x * 40}px, ${mouse.y * 30}px)`, filter: "blur(60px)" }} />
      <div className="absolute w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(192,132,252,0.12) 0%, transparent 70%)", top: "40%", left: "40%", transform: `translate(${mouse.x * 20}px, ${mouse.y * 15}px)`, filter: "blur(50px)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020817_100%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-8 w-full">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-slate-200">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities · Vancouver &amp; Remote
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-none mb-5">
              Maggie<br />
              <span className="gradient-text">Yang</span>
            </h1>

            {/* Typewriter */}
            <div className="flex items-center gap-1 mb-8 h-8">
              <span className="text-xl text-sky-300 font-mono">{displayed}</span>
              <span className="text-sky-400 cursor-blink text-xl font-mono">|</span>
            </div>

            <p className="text-base text-slate-200 leading-relaxed max-w-xl mb-10">
              Former AI PM at <span className="text-white font-semibold">Huawei</span> — shipped search platforms to millions across 3 continents.
              MBA from <span className="text-white font-semibold">UBC Sauder</span>. Combining{" "}
              <span className="text-sky-300 font-medium">enterprise financial rigor</span> with{" "}
              <span className="text-violet-300 font-medium">product intuition</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#projects"
                className="group px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]">
                View my work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="/Maggie-Yang-Resume.pdf" download
                className="flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a href="#contact"
                className="px-6 py-3 glass rounded-lg font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200">
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: stat cards */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4"
            onMouseEnter={() => setStatsHovered(true)}
            onMouseLeave={() => setStatsHovered(false)}>
            {[
              { value: "107%", label: "CTR increase", sub: "via A/B testing",      color: "text-sky-300",     idx: 0 },
              { value: "47%",  label: "DAU growth",   sub: "AI search platform",   color: "text-violet-300",  idx: 1 },
              { value: "$88M+",label: "Budget managed",sub: "at PHSA",             color: "text-emerald-300", idx: 2 },
              { value: "3",    label: "Continents",   sub: "UAE · China · Canada", color: "text-amber-300",   idx: 3 },
            ].map((s) => (
              <div key={s.label} className="glass neon-border rounded-2xl p-5 text-center"
                style={statsHovered
                  ? { transform: `translate(${mouse.x * CARD_PARALLAX[s.idx].x}px, ${mouse.y * CARD_PARALLAX[s.idx].y}px) scale(1.06)`, transition: "transform 0.12s ease-out, box-shadow 0.2s ease", boxShadow: "0 0 30px rgba(56,189,248,0.18), 0 8px 32px rgba(0,0,0,0.4)" }
                  : { transform: "translate(0,0) scale(1)", transition: "transform 0.4s ease, box-shadow 0.3s ease" }}>
                <div className={`text-3xl font-bold mb-1 ${s.color}`}>{s.value}</div>
                <div className="text-sm text-white font-semibold mb-0.5">{s.label}</div>
                <div className="text-xs text-slate-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Currently section */}
        <div className="mt-14 grid sm:grid-cols-3 gap-4">
          {[
            { label: "Currently building", value: "AI-powered career tools & this site", icon: "⚡" },
            { label: "Currently reading",  value: "Continuous Discovery Habits — Teresa Torres", icon: "📖" },
            { label: "Currently targeting", value: "AI / Tech PM roles in Vancouver & remote", icon: "🎯" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-xl px-4 py-3 flex items-start gap-3">
              <span className="text-lg mt-0.5">{item.icon}</span>
              <div>
                <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{item.label}</div>
                <div className="text-sm text-slate-200 mt-0.5">{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Company logo strip */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <span className="text-xs text-slate-500 uppercase tracking-widest mr-2">Experience at</span>
          {LOGOS.map((l) => (
            <div key={l.name}
              className="glass rounded-lg px-4 py-2 flex items-center gap-2 border border-white/5 hover:border-white/15 transition-colors">
              <span className={`text-xs font-bold font-mono ${l.color}`}>{l.abbr}</span>
              <span className="text-xs text-slate-400">{l.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex flex-col items-center gap-2 text-slate-500 pb-8">
        <span className="text-xs tracking-widest uppercase">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-500 to-transparent" />
      </div>
    </section>
  );
}
