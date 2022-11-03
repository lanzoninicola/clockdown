import useGoogleFontsUtils from "../../hooks/useGoogleFontsUtils";
import { Typography } from "../../types";

/**
 * This renders the <link> tag for the Google Fonts API
 */
export default function GoogleFontsLinkTag({
  googleFonts,
}: {
  googleFonts: Typography[];
}) {
  const { getGoogleFontLinkTagHref } = useGoogleFontsUtils();

  return (
    <link rel="stylesheet" href={getGoogleFontLinkTagHref(googleFonts)}></link>
  );
}
