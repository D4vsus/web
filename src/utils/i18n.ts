import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import es from "../locale/es.json";
import en from "../locale/en.json";

i18n.on("languageChanged", (lng) => {
document.documentElement.lang = lng;
document.title = i18n.t("meta.title");
document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", i18n.t("meta.description"));
});

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: { es: { translation: es }, en: { translation: en } },
    fallbackLng: "es",
    supportedLngs: ["es", "en"],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    detection: { order: ["localStorage", "navigator"], caches: ["localStorage"] },
  });

export default i18n;