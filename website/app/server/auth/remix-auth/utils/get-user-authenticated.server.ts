import { authenticator } from "~/server/auth/remix-auth/config/form-strategy.server";

/**
 *
 * This function is used in the LOADER FUNCTION to check if the user is authenticated
 *
 * It will return a Promise with the user user related data
 * given after the signin/signup process or null.
 *
 * You can use this to check if the user is logged-in or not
 * without triggering the whole authentication flow.
 *
 * @param request The request object
 * @returns Promise<User | null> The user data or null
 */
const getUserAuthenticated = async (
  request: Request,
  options?: {
    successRedirect?: never;
    failureRedirect?: never;
  }
) => {
  return await authenticator.isAuthenticated(request, options);
};

export default getUserAuthenticated;
