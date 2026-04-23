export default function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#020817_80%)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-sm font-medium text-slate-200">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Currently open to AI PM roles · Vancouver &amp; Remote (North America)
        </div>

        <h2 className="text-5xl font-bold text-white mb-4">
          Let&apos;s build<br />
          <span className="gradient-text">something great.</span>
        </h2>
        <p className="text-slate-200 max-w-lg mx-auto mb-12 leading-relaxed text-base">
          I&apos;m looking for product roles at the intersection of AI, data, and real user impact.
          If you&apos;re building something ambitious — I want to talk.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a
            href="mailto:maggie.yang0321@hotmail.com"
            className="group flex items-center justify-center gap-3 px-6 py-3.5 bg-sky-500 hover:bg-sky-400 text-white rounded-xl font-medium transition-all duration-200 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Send an email
          </a>
          <a
            href="https://www.linkedin.com/in/maggieyang"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 px-6 py-3.5 glass rounded-xl font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            Connect on LinkedIn
          </a>
          <a
            href="/Maggie-Yang-Resume.pdf"
            download
            className="flex items-center justify-center gap-3 px-6 py-3.5 glass rounded-xl font-medium text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <span>📍 Vancouver, BC, Canada</span>
          <span>📞 +1 (236) 989-3162</span>
          <span>🌐 Open to remote &amp; hybrid (North America)</span>
        </div>
      </div>
    </section>
  );
}
