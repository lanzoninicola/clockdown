import {
  Typography,
  useGoogleFontsUtils,
} from "../../../countdown-widget-typography/countdown-widget-typography";

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
