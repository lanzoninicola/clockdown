/**
 *
 * Extracts all search params from the request and returns them as a URLSearchParams object
 *
 * @param request  Request  object from the request
 * @returns  URLSearchParams  object with all search params from the request
 *
 * @example
 * const searchParams = getAllSearchParams(request);
 * const param = searchParams.get('param');
 */
export default function getAllSearchParams(request: Request): URLSearchParams {
  return new URL(request.url).searchParams;
}
