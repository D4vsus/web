import type { Link } from "../types";
import Icon from "../icons/DescargaCv"
import { useTranslation } from "react-i18next";

interface Props {
  email: string;
  links: Link[];
}

export default function Contact({ email, links }: Props) {
  const { t } = useTranslation('translation', { keyPrefix: 'contact' });

  return (
    <section className="sec" id="contacto">
      <h2 className="h2">{t('contact')}</h2>
      <a className="mail" href={"mailto:" + email}>{email}</a>
      
      <div className="social">
        {links.map((l) => {
            const icon = l.icon;
            const Icon = icon && typeof icon !== "string" ? icon : null;
            const text = typeof icon === "string" ? icon : l.label;
          return(
            <a className="icon-networks" href={ l.href } key={ l.label } target="_blank" rel="noopener noreferrer" aria-label={ l.label } >
              {Icon ? <Icon size={28} stroke={1.5} aria-hidden="true" /> : text}
            </a>
          )
          })
        }
        <a
          className="icon-btn"
          href={`${ import.meta.env.BASE_URL }cv-david-fernandez.pdf`}
          download
          aria-label={t('downloadCv')}
          title={t('downloadCv')}
        >
          <Icon size={33} className="icon" />
        </a>
      </div>
    </section>
  );
}
