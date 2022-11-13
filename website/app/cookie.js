import { createCookie } from "@remix-run/node";

export let i18nCookie = createCookie("i18n", {
  sameSite: "lax",
  path: "/",
});

console.log(i18nCookie);
