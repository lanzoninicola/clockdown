import type { LinksFunction, MetaFunction } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useChangeLanguage } from "remix-i18next";
import i18next from "./i18n.server";
import { ErrorPage } from "./modules/remix-error";

import styles from "./styles/app.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  {
    rel: "preconnect",
    href: "https://fonts.googleapis.com",
  },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Michroma&display=swap",
  },
];

export let loader = async ({ request }: LoaderArgs) => {
  let locale = await i18next.getLocale(request);

  const t = await i18next.getFixedT(request);
  const title = t("seo.website.title");
  const description = t("seo.website.description");
  const keywords = t("seo.website.keywords");

  return json({ locale, seo: { title, description, keywords } });
};

export const meta: MetaFunction = ({ data }) => {
  const { title, description, keywords } = data.seo;

  return {
    charset: "utf-8",
    title: title,
    viewport: "width=device-width,initial-scale=1",
    description: description,
    keywords: keywords,
  };
};

// export let handle = {
//   // In the handle export, we can add a i18n key with namespaces our route
//   // will need to load. This key can be a single string or an array of strings.
//   // TIP: In most cases, you should set this to your defaultNS from your i18n config
//   // or if you did not set one, set it to the i18next default namespace "translation"
//   i18n: "index",
// };

export default function App() {
  // Get the locale from the loader
  let { locale } = useLoaderData<typeof loader>();

  let { i18n } = useTranslation();

  // This hook will change the i18n instance language to the current locale
  // detected by the loader, this way, when we do something to change the
  // language, this locale will change and i18next will load the correct
  // translation files
  useChangeLanguage(locale);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oh no!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <ErrorPage />
        <Scripts />
      </body>
    </html>
  );
}
