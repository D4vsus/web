import type { Link } from "../types";

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
          href="/cv-david-fernandez.pdf"
          download
          aria-label="Descargar CV"
          title="Descargar CV"
        >
          <img  className="icon-btn" src="/descarga-cv.svg" alt="Descargar curriculum vitae" width={44} height={44} />
        </a>
      </div>
    </section>
  );
}
