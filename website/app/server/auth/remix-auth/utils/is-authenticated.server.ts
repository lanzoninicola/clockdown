import { authenticator } from "~/server/auth/remix-auth/config/auth.server";

/**
 * Call this to check if the user is authenticated.
 * It will return a Promise with the user user related data
 * given after the signin/signup process or null,
 * you can use this to check if the user is logged-in or not
 * without triggering the whole authentication flow.
 *
 * @param request The request object
 * @returns
 */
const isAuthenticated = async (
  request: Request,
  options?: {
    successRedirect?: never;
    failureRedirect?: never;
  }
) => {
  return await authenticator.isAuthenticated(request, options);
};

export default isAuthenticated;
