import { Fragment } from "react";
import type { Skill } from "../types";
import { useTranslation } from 'react-i18next';

interface Props {
  paragraphs: string[];
  skills: Skill[];
}

export default function About({ paragraphs, skills }: Props) {
  const { t } = useTranslation('translation', { keyPrefix: 'about' });

  return (
    <section className="sec" id="sobre-mi">
      <h2 className="h2">{t('aboutMe')}</h2>
      <div className="about">
        <div>
          {paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
        </div>
        <dl className="skills">
          {skills.map((s) => (
            <Fragment key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
