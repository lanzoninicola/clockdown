import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

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

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Clockdown",
  viewport: "width=device-width,initial-scale=1",
  description: "O contador regressivo para a tua loja online",
});

export default function App() {
  return (
    <html lang="en">
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
