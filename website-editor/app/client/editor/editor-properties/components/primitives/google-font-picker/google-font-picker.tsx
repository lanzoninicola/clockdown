import { GOOGLE_FONTS_LIST } from "../../../constants/typography";
import GoogleFontsLinkTag from "../../../../../countdown-widget/components/google-fonts-link-tag/google-fonts-link-tag";
import FontList from "./font-list/font-list";

interface GoogleFontPicker {
  /** Derived state from the FontFamily component */
  fontFamily: string;
  /** Derived state from the FontFamily component */
  onSelectFontFamily: (fontFamily: string) => void;
}

export default function GoogleFontPicker({
  fontFamily,
  onSelectFontFamily,
}: GoogleFontPicker) {
  const googleFontFamilies = GOOGLE_FONTS_LIST.map((font) => font.fontFamily);

  return (
    <>
      <GoogleFontsLinkTag googleFonts={GOOGLE_FONTS_LIST} />
      <FontList
        fontFamilies={googleFontFamilies}
        fontFamilySelected={fontFamily}
        onSelectFontFamily={onSelectFontFamily}
      />
    </>
  );
}
