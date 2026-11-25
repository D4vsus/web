import { useTranslation } from "react-i18next";
import type { Theme } from "../types";
import LanguageSelect from "./LangSelection";

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: Props) {
  const { t } = useTranslation('translation', { keyPrefix: 'header' });

  return (
    <header className="top">
      <nav className="nav" aria-label="Principal">
        <a href="#proyectos">{t('projects')}</a>
        <a href="#sobre-mi">{t('aboutMe')}</a>
        <a href="#contacto">{t('contact')}</a>
      </nav>
      <LanguageSelect />
      <button className="ghost" type="button" onClick={onToggleTheme}>
        {theme === "dark" ? "Tema claro" : "Tema oscuro"}
      </button>
    </header>
  );
}
