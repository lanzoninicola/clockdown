import { createCookie, createCookieSessionStorage } from "@remix-run/node";

let i18nCookie = createCookie("i18next", {
  sameSite: "lax", // this helps with CSRF
  path: "/", // remember to add this so the cookie will work in all routes
  httpOnly: true, // for security reasons, make this cookie http only
  secrets: ["s3cr3t"], // replace this with an actual secret
  secure: process.env.NODE_ENV === "production", // enable this in prod only
});

// export the whole sessionStorage object
export let i18nSessionStorage = createCookieSessionStorage({
  cookie: i18nCookie,
});

// you can also export the methods individually for your own usage
let { getSession, commitSession, destroySession } = i18nSessionStorage;

export { getSession, commitSession, destroySession, i18nCookie };
