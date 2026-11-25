import { useRef } from "react";
import { useInk } from "../hooks/useInk";
import { useTranslation } from "react-i18next";

interface Props {
  lines: string[];
  role: string;
  email: string;
}

export default function Hero({ lines, role, email }: Props) {
  const nameRef = useRef<HTMLHeadingElement>(null);
  useInk(nameRef);

  const { t } = useTranslation('translation', { keyPrefix: 'hero' });

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
        <img className="logo" alt="D4" aria-label="D4 logo" src={`${import.meta.env.BASE_URL}favicon.svg`}></img>
      </div>
      <p className="role">{role}</p>
      <div className="actions">
        <a className="btn" href="#proyectos">{t('viewProjects')}</a>
        <a href={"mailto:" + email}>{t('writeMe')}</a>
      </div>
    </section>
  );
}
