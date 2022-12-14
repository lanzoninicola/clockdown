import { RemixI18Next } from "remix-i18next";
import Backend from "i18next-fs-backend";
import { resolve } from "node:path";
import i18nextOptions from "./i18nextOptions";
import { i18nCookie } from "./modules/remix-i18n/server/i18n-session.server";

export default new RemixI18Next({
  detection: {
    // persist language selection in cookie
    cookie: i18nCookie,
    // This is the list of languages your application supports
    supportedLanguages: i18nextOptions.supportedLngs,
    // This is the language you want to use in case the user language is not
    // listed above
    fallbackLanguage: i18nextOptions.fallbackLng,
  },
  // This is the configuration for i18next used when translating messages server
  // side only
  i18next: {
    backend: { loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json") },

    detection: {
      // persist language selection in cookie
      cookie: i18nCookie,
    },
  },
  // The backend you want to use to load the translations
  // Tip: You could pass `resources` to the `i18next` configuration and avoid
  // a backend here
  backend: Backend,
});
