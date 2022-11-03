import { Config } from "../types";

/**
 * This returns the data passed from the server via script tag
 */
export default function getConfig(): Config {
  const env = process.env.NODE_ENV;

  if (env === "development" || env === "test") {
    return {
      api_url: "http://localhost/bb-melhor-envio/wp-json/clockdown/v1",
      language: "en",
      product_id: "1",
      commerce_api_url: "http://localhost/bb-melhor-envio/wp-json/commerce/v1",
      nonce: "8c768e9eba",
      wp_rest_nonce: "c586eb8fa5",
    };
  }

  // @ts-ignore
  return clockdownLocalized;
}
