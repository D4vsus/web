import type { Theme } from "../types";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: Props) {
  return (
    <header className="top">
      <nav className="nav" aria-label="Principal">
        <a href="#proyectos">Proyectos</a>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <button className="ghost" type="button" onClick={onToggleTheme}>
        {theme === "dark" ? "Tema claro" : "Tema oscuro"}
      </button>
    </header>
  );
}
