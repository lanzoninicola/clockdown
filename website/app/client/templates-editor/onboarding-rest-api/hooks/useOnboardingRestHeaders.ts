import { WP_REST_NONCE } from "../constants";

type RestApiHeaders = Record<string, string>;

export default function useOnboardingRestHeader(): RestApiHeaders {
  const disabledNonce = process.env.NODE_ENV === "development" && true;
  const headers = {
    "Content-Type": "application/json",
    "X-WP-Nonce": WP_REST_NONCE,
  };

  if (disabledNonce) {
    delete headers["X-WP-Nonce"];
  }

  return headers;
}
