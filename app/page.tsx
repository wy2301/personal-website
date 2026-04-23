import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Personality from "./components/Personality";
import Contact from "./components/Contact";
import CustomCursor from "./components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Personality />
        <Contact />
      </main>
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-white/5">
        © {new Date().getFullYear()} Wanyu (Maggie) Yang · Built with Next.js &amp; Claude Code
      </footer>
    </>
  );
}
