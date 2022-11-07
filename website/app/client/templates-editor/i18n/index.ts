import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ptBR from "./locale/pt-br";
import enUS from "./locale/en-us";
import esEs from "./locale/es-es";
import itIT from "./locale/it-it";
import { getConfig } from "../config";

const env = process.env.NODE_ENV;
const isDev = env === "development";

// the default language from wordpress configuration
const { language: wordpressLocale } = getConfig();

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    lng: isDev ? "en" : wordpressLocale ? wordpressLocale : "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ...enUS,
      ...ptBR,
      ...esEs,
      ...itIT,
    },
  });

export default i18n;
