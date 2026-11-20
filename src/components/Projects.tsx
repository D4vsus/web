import { useState } from "react";
import type { Filter, Project } from "../types";

interface Props {
  projects: Project[];
  cats: Filter[];
}

export default function Projects({ projects, cats }: Props) {
  const [cat, setCat] = useState<Filter>("Todos");
  const shown = projects.filter((p) => cat === "Todos" || p.category.includes(cat));

  return (
    <section className="sec" id="proyectos">
      <h2 className="h2">Proyectos</h2>
      <div className="filters" role="group" aria-label="Filtrar proyectos">
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
              <p className="pdesc">{p.description}</p>
            </div>
            <p className="pmeta">
              <strong>{p.stack}</strong>
              { Array.isArray(p.category)? p.category.join(", "):  p.category }, { p.year }
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
