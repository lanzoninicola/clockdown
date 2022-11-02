export default {
  debug: process.env.NODE_ENV !== "production",
  fallbackLng: "en",
  supportedLngs: ["en", "es", "it", "pt"],
  defaultNS: "index",
  react: { useSuspense: false },
};
