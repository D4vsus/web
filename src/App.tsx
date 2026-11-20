import NetworkBackground from "./components/NetworkBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { PROFILE, CATS, PROJECTS } from "./data/content";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div>
      <NetworkBackground />
      <div className="wrap">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero lines={PROFILE.lines} role={PROFILE.role} email={PROFILE.email} />
          <Projects projects={PROJECTS} cats={CATS} />
          <About paragraphs={PROFILE.about} skills={PROFILE.skills} />
          <Contact email={PROFILE.email} links={PROFILE.links} />
        </main>
        <Footer name={PROFILE.lines.join(" ")} />
      </div>
    </div>
  );
}
