import { RemixBrowser } from "@remix-run/react";
import { StrictMode, useState } from "react";
import { hydrate } from "react-dom";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { getInitialNamespaces } from "remix-i18next";
import i18nextOptions from "./i18nextOptions";
import { createEmotionCache } from "./client/templates-editor/chackra-ui/createEmotionCache";
import { ClientStyleContext } from "./client/templates-editor/chackra-ui/context";
import { CacheProvider } from "@emotion/react";

interface ClientCacheProviderProps {
  children: React.ReactNode;
}

function ClientCacheProvider({ children }: ClientCacheProviderProps) {
  const [cache, setCache] = useState(createEmotionCache());

  function reset() {
    setCache(createEmotionCache());
  }

  return (
    <ClientStyleContext.Provider value={{ reset }}>
      <CacheProvider value={cache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
}

function hydrateDOM() {
  // initialize i18next using initReactI18next and configuring it
  if (!i18next.isInitialized)
    // prevent i18next to be initialized multiple times
    i18next
      .use(initReactI18next) // Tell i18next to use the react-i18next plugin
      .use(LanguageDetector) // Setup a client-side language detector
      .use(Backend) // Setup your backend
      .init({
        ...i18nextOptions,
        backend: { loadPath: "/locales/{{lng}}/{{ns}}.json" },
        // This function detects the namespaces your routes rendered while SSR use
        // and pass them here to load the translations
        ns: getInitialNamespaces(),
        detection: {
          // Here only enable htmlTag detection, we'll detect the language only
          // server-side with remix-i18next, by using the `<html lang>` attribute
          // we can communicate to the client the language detected server-side
          order: ["htmlTag"],
          // Because we only use htmlTag, there's no reason to cache the language
          // on the browser, so we disable it
          caches: [],
        },
      })
      .then(() => {
        // then hydrate your app wrapped in the I18nextProvider
        return hydrate(
          <I18nextProvider i18n={i18next}>
            <StrictMode>
              <ClientCacheProvider>
                <RemixBrowser />
              </ClientCacheProvider>
            </StrictMode>
          </I18nextProvider>,
          document
        );
      });
}
hydrateDOM();
