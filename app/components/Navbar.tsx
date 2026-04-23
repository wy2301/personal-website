"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "About",      href: "#about",       id: "about" },
  { label: "Projects",   href: "#projects",    id: "projects" },
  { label: "Experience", href: "#experience",  id: "experience" },
  { label: "Skills",     href: "#skills",      id: "skills" },
  { label: "Life",       href: "#about-me",    id: "about-me" },
  { label: "Contact",    href: "#contact",     id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // IntersectionObserver — track which section is in view
  useEffect(() => {
    const sectionIds = links.map((l) => l.id);
    const observers: IntersectionObserver[] = [];

    const handleIntersect = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(id);
      });
    };

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(handleIntersect(id), {
        rootMargin: "-40% 0px -55% 0px", // fire when section crosses the middle band
        threshold: 0,
      });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#020817]/90 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#about" className="flex items-center gap-2 group">
          <span className="w-2 h-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)] group-hover:scale-125 transition-transform" />
          <span className="font-semibold text-white tracking-tight">Maggie Yang</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const isActive = activeId === l.id;
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium relative transition-colors duration-200 ${
                    isActive ? "text-sky-400" : "text-slate-300 hover:text-sky-400"
                  }`}
                >
                  {l.label}
                  {/* Underline indicator */}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-sky-400 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Maggie-Yang-Resume.pdf"
            download
            className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-slate-300 glass rounded-lg hover:text-white hover:bg-white/10 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-sky-300 border border-sky-400/30 rounded-lg hover:bg-sky-400/10 transition-all duration-200"
          >
            Open to work
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>
        </div>

        <button
          className="md:hidden p-2 text-slate-300"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-[#020817]/95 backdrop-blur-xl border-t border-white/5 px-6 py-6">
          <ul className="flex flex-col gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    activeId === l.id ? "text-sky-400" : "text-slate-200 hover:text-sky-400"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
