import type { User } from "@prisma/client";
import { redirect } from "@remix-run/node";
import { AuthorizationError } from "remix-auth";
import { json } from "@remix-run/node";
import tryCatch from "~/server/utils/try-catch.server";

import { authenticator } from "../config/form-strategy.server";
import { commitSession, getSession } from "../config/session-storage.server";

interface AuthenticateAndRedirectWithPayloadProps<T> {
  request: Request;
  successRedirectURL: string;
  failureRedirectURL?: string;
  sessionOptions?: {
    expiresIn: number;
    payload: T;
  };
}

/**
 * This function:
 * - use the strategy to authenticate the user
 * - store the user data in the sessione
 * - redirect to the url provided
 *
 * This function is used in the ACTION FUNCTION to authenticate the user
 *
 * @param request  the request object
 * @param successRedirectURL  the url to redirect to if the authentication is successful
 * @param failureRedirectURL  the url to redirect to if the authentication is not successful
 * @param sessionOptions  the options to use to store the session
 * @param sessionOptions.expiresIn  the number of seconds the session should last
 * @param sessionOptions.payload (optional)  additional data to add to the payload to store in the session
 *
 * @returns  A redirect response if the authentication is successful, then the browser will redirect to the destination page,
 * or if the authentication is not successful returns a response with status 401 and the error message in the body
 *
 */
async function authenticateAndRedirectWithPayload<T>({
  request,
  successRedirectURL,
  failureRedirectURL,
  sessionOptions = {
    expiresIn: 60 * 60 * 24 * 30, // 30 days
    payload: {} as T,
  },
}: AuthenticateAndRedirectWithPayloadProps<T>): Promise<Response> {
  try {
    const user = await authenticator.authenticate("email-pass", request, {
      throwOnError: true,
    });

    let sessionUser = {};

    if (user) {
      sessionUser = {
        fullname: user.fullname,
        email: user.email,
        paidClient: user.paidClient,
        lastPaymentAt: user?.lastPaymentAt?.toISOString(),
        subscriptionEnd: user?.subscriptionEnd?.toISOString(),
      };
    }

    // manually get the session
    let session = await getSession(request.headers.get("cookie"));

    // and store the user data and the payload in the session
    session.set(authenticator.sessionKey, {
      ...sessionUser,
      ...sessionOptions.payload,
    });

    return redirect(successRedirectURL, {
      headers: {
        "Set-Cookie": await commitSession(session, {
          maxAge: sessionOptions.expiresIn, // 1 month
        }),
      },
    });
  } catch (error) {
    if (failureRedirectURL) {
      return redirect(failureRedirectURL);
    }

    if (error instanceof AuthorizationError) {
      // here the error is related to the authentication process
      return json({ error: error.message }, { status: 401 });
    }

    // here the error is a generic error that another reason may throw
    return json({ error: "Generic error" }, { status: 500 });
  }
}

export default authenticateAndRedirectWithPayload;
