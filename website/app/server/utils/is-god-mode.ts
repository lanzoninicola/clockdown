/**
 * At the moment this is the only way to enable God Mode. This is a temporary solution until we have a proper UI for it.
 * @param request Request object from the request
 * @returns boolean true if God Mode is enabled, false otherwise
 *
 * tag zeus
 */
export default function isGodMode(request: Request): boolean {
  const searchParams = new URL(request.url).searchParams;

  return (
    searchParams.get("mode") ===
    "0629E67EAFB64482BBE3EDC0766FCDCAD761D7A2464385C5F3967C6B28D84AE9"
  );
}
