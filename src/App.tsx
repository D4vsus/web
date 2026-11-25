import NetworkBackground from "./components/NetworkBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useTheme } from "./hooks/useTheme";
import { CATS, getProfile } from "./data/content";
import { Project, Skill } from "./types";
import PROJECTS from "./data/projects.json";
import SKILLS from "./data/skills.json";
import { useTranslation } from "react-i18next";

export default function App() {
  const [theme, toggleTheme] = useTheme();

  const { t } = useTranslation();
  const PROFILE = getProfile(t);

  return (
    <div>
      <NetworkBackground />
      <div className="wrap">
        <Header theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero lines={PROFILE.lines} role={PROFILE.role} email={PROFILE.email} />
          <Projects projects={PROJECTS as Project[]} cats={CATS} />
          <About paragraphs={PROFILE.about} skills={SKILLS as Skill[]} />
          <Contact email={PROFILE.email} links={PROFILE.links} />
        </main>
        <Footer name={PROFILE.lines.join(" ")} />
      </div>
    </div>
  );
}
