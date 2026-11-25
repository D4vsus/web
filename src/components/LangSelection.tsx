import { useTranslation } from "react-i18next";
import { LANG } from "../data/content";

export default function LanguageSelect() {
  const { t, i18n } = useTranslation();

  return (
    <select
      className="ghost lang-select"
      aria-label={t("header.language")}
      value={i18n.resolvedLanguage ?? "es"}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {LANG.map((l) => (
        <option key={l.code} value={l.code} lang={l.code} aria-label={l.label}>
          {l.label}
        </option>
      ))}
    </select>
  );
}