const education = [
  {
    degree: "Master of Business Administration",
    school: "UBC Sauder School of Business",
    location: "University of British Columbia, Vancouver, BC",
    year: "Dec 2023",
    note: "PASS Leader & Teaching Assistant · Start-up Consulting",
    icon: "🎓",
  },
  {
    degree: "Project Management Professional (PMP)",
    school: "PMI Certification",
    location: "",
    year: "Dec 2023",
    note: "",
    icon: "📋",
  },
  {
    degree: "ACCA – Chartered Certified Accountants",
    school: "Student Member",
    location: "",
    year: "Ongoing",
    note: "",
    icon: "📊",
  },
  {
    degree: "M.S. in Sports Management",
    school: "School of Professional Studies",
    location: "Columbia University, New York, NY",
    year: "Dec 2018",
    note: "",
    icon: "🏆",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(56,189,248,0.04),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="mb-16">
          <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase">Background</span>
          <h2 className="text-4xl font-bold text-white mt-2">Education</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {education.map((e) => (
            <div
              key={e.degree}
              className="glass neon-border rounded-2xl p-5 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="flex gap-4">
                <span className="text-2xl mt-0.5">{e.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-semibold text-white text-sm leading-snug">{e.degree}</h3>
                    <span className="text-xs text-sky-300 font-medium whitespace-nowrap">{e.year}</span>
                  </div>
                  <p className="text-sky-300 font-medium text-xs mt-1">{e.school}</p>
                  {e.location && <p className="text-slate-400 text-xs mt-0.5">{e.location}</p>}
                  {e.note && (
                    <p className="mt-2 text-xs text-slate-300 bg-white/5 rounded-lg px-2.5 py-1.5">
                      {e.note}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
