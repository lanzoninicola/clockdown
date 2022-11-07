import { APIResponse } from "../types";

export interface RestClientOptions {
  method: string;
  headers: Record<string, string>;
  data?: any;
}

/**
 * The "T" is the type of response payload (data required to get the work done).
 * It may be different depending on the type of request.
 */
async function client<T>(
  endpoint: string,
  { method, headers, data }: RestClientOptions
): Promise<APIResponse<T>> {
  return await (
    await fetch(endpoint, {
      method: method,
      body: JSON.stringify(data),
      headers: headers,
    })
  ).json();
}

export { client };
