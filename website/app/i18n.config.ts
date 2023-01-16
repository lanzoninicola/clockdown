/**
 * i18next configuration
 * @see https://www.i18next.com/overview/configuration-options
 * @see https://github.com/sergiodxa/remix-i18next
 */
export default {
  debug: false,
  lng: "pt", // the language to use
  fallbackLng: "pt",
  supportedLngs: ["pt", "en", "es", "it"],
  defaultNS: "index",
  react: { useSuspense: false },
};
