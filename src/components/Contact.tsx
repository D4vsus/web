import type { Link } from "../types";
import Icon from "../icons/DescargaCv"

interface Props {
  email: string;
  links: Link[];
}

export default function Contact({ email, links }: Props) {
  return (
    <section className="sec" id="contacto">
      <h2 className="h2">Contacto</h2>
      <a className="mail" href={"mailto:" + email}>{email}</a>
      
      <div className="social">
        {links.map((l) => (
          <a href={l.href} key={l.label} target="_blank" rel="noopener noreferrer">{l.label}</a>
        ))}
        <a
          className="icon-btn"
          href={`${import.meta.env.BASE_URL}cv-david-fernandez.pdf`}
          download
          aria-label="Descargar CV"
          title="Descargar CV"
        >
          <Icon size={33} className="icon" />
        </a>
      </div>
    </section>
  );
}
