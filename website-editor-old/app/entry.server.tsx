import { PassThrough } from "stream";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { RemixServer } from "@remix-run/react";
import type { EntryContext } from "@remix-run/node"; // Depends on the runtime you choose
import { createEmotionCache } from "./client/chackra-ui/createEmotionCache";
import { ServerStyleContext } from "./client/chackra-ui/context";

import { createInstance } from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import Backend from "i18next-fs-backend";
import { Response } from "@remix-run/node";
import isbot from "isbot";
import i18nextOptions from "./i18nextOptions";
import i18n from "./i18n.server";

const ABORT_DELAY = 5000;

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return isbot(request.headers.get("user-agent"))
    ? handleBotRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      )
    : await handleBrowserRequest(
        request,
        responseStatusCode,
        responseHeaders,
        remixContext
      );
}

function handleBotRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false;

    const { pipe, abort } = renderToPipeableStream(
      <RemixServer context={remixContext} url={request.url} />,
      {
        onAllReady() {
          const body = new PassThrough();

          responseHeaders.set("Content-Type", "text/html");

          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError(error: unknown) {
          reject(error);
        },
        onError(error: unknown) {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}

async function handleBrowserRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  /*** START I18N STUFF */

  // First, we create a new instance of i18next so every request will have a
  // completely unique instance and not share any state
  // const instance = createInstance();

  // Then we could detect locale from the request
  const lng = await i18n.getLocale(request);
  // And here we detect what namespaces the routes about to render want to use
  const ns = i18n.getRouteNamespaces(remixContext);

  // First, we create a new instance of i18next so every request will have a
  // completely unique instance and not share any state.
  // instance
  //   .use(initReactI18next) // Tell our instance to use react-i18next
  //   .use(Backend) // Setup our backend.init({
  //   .init({
  //     ...i18nextOptions, // use the same configuration as in your client side.
  //     lng, // The locale we detected above
  //     ns, // The namespaces the routes about to render want to use
  //     backend: {
  //       // original: loadPath: resolve("./public/locales/{{lng}}/{{ns}}.json"),
  //       loadPath: "./public/locales/{{lng}}/{{ns}}.json",
  //     },
  //   });

  /*** END I18N STUFF */

  /*** START CHAKRAUI STUFF */
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  const html = renderToString(
    // <I18nextProvider i18n={instance}>
    <ServerStyleContext.Provider value={null}>
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>
    // </I18nextProvider>
  );

  const chunks = extractCriticalToChunks(html);

  const markup = renderToString(
    // <I18nextProvider i18n={instance}>
    <ServerStyleContext.Provider value={chunks.styles}>
      <CacheProvider value={cache}>
        <RemixServer context={remixContext} url={request.url} />
      </CacheProvider>
    </ServerStyleContext.Provider>
    // </I18nextProvider>
  );
  /*** END CHAKRAUI STUFF */

  responseHeaders.set("Content-Type", "text/html");

  return new Response(`<!DOCTYPE html>${markup}`, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
