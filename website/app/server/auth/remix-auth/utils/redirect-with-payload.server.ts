import type { User } from "@prisma/client";
import { redirect } from "@remix-run/node";

import { authenticator } from "../config/auth.server";
import { commitSession, getSession } from "../config/session.server";

async function authRedirectWithPayload<T>(
  request: Request,
  url: string,
  payload: T,
  expiresIn: number = 60 * 60 * 24 * 30 // 30 days
) {
  let session = await getSession(request.headers.get("cookie"));

  session.set(authenticator.sessionKey, payload);

  return redirect(url, {
    headers: {
      "Set-Cookie": await commitSession(session, {
        maxAge: expiresIn, // 1 month
      }),
    },
  });
}

export default authRedirectWithPayload;
