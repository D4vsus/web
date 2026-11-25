import { useState } from "react";
import type { Filter, Project } from "../types";
import i18n from "../utils/i18n";
import { useTranslation } from "react-i18next";

interface Props {
  projects: Project[];
  cats: Filter[];
}

export default function Projects({ projects, cats }: Props) {
  const [cat, setCat] = useState<Filter>("Todos");
  const shown = projects.filter((p) => cat === "Todos" || p.categories.includes(cat));
  const lang = i18n.resolvedLanguage ?? "es";

  const { t } = useTranslation('translation', { keyPrefix: 'project' });

  return (
    <section className="sec" id="proyectos">
      <h2 className="h2">{t('project')}</h2>
      <div className="filters" role="group" aria-label={t('filterGroup')}>
        {cats.map((c) => (
          <button className="ghost" type="button" key={c} aria-pressed={cat === c} onClick={() => setCat(c)}> 
            {c}
          </button>
        ))}
      </div>
      <ul className="rows">
        {shown.map((p) => (
          <li className="row" key={p.title}>
            <div>
              <a className="ptitle" href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
              <p className="pdesc">{p.description[lang]}</p>
            </div>
            <p className="pmeta">
              <strong>{p.stack}</strong>
              { Array.isArray(p.categories)? p.categories.join(", "):  p.categories }, { p.year }
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
