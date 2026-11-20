import { useRef } from "react";
import { useInk } from "../hooks/useInk";

interface Props {
  lines: string[];
  role: string;
  email: string;
}

export default function Hero({ lines, role, email }: Props) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  useInk(nameRef);

  return (
    <section className="hero">
      <div className="profile">
        <div className="name">
          <h1 className="name" ref={nameRef} aria-label={lines.join(" ")}>
            {lines.map((line) => (
              <span className="line" aria-hidden="true" key={line}>
                {Array.from(line).map((c, i) => (
                  <span className="ch" key={i}>{c}</span>
                ))}
              </span>
            ))}
          </h1>
        </div>
        <img className="logo" alt="" src="/favicon.svg"></img>
      </div>
      <p className="role">{role}</p>
      <div className="actions">
        <a className="btn" href="#proyectos">Ver proyectos</a>
        <a href={"mailto:" + email}>Escríbeme</a>
      </div>
    </section>
  );
}
