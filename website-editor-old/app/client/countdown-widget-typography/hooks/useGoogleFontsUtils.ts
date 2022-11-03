import { GOOGLE_FONTS_BASE_URL } from "../constants/endpoints";
import { Typography } from "../types";

export default function useGoogleFontsUtils() {
  /**
   * @returns Given the font config object, returns the properly formatted href
   * that can be used to link to that font's @font-face CSS on Google's servers.
   *
   * @see https://developers.google.com/fonts/docs/css2
   */
  function getGoogleFontLinkTagHref(fonts: Typography[]): string {
    let url = `${GOOGLE_FONTS_BASE_URL}?`;
    fonts.forEach((font, idx = 0) => {
      idx++ > 0 && (url += `&`);
      url += appendParams(font);
    });
    url += `&display=swap`;

    return url;
  }

  function appendParams(font: Typography) {
    const { fontFamily, fontWeight } = font;
    return `family=${fontFamily}:wght@${fontWeight}`;
  }

  return {
    getGoogleFontLinkTagHref,
  };
}
