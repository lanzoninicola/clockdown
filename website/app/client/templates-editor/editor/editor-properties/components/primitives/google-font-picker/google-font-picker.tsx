import { GoogleFontsLinkTag } from "~/client/templates-editor/countdown-widget-typography/countdown-widget-typography";
import googleWebFonts from "../../../constants/google-web-fonts";

import FontList from "./font-list/font-list";

interface GoogleFontPickerProps {
  /** Derived state from the FontFamily component */
  fontFamily: string;
  /** Derived state from the FontFamily component */
  onSelectFontFamily: (fontFamily: string) => void;
}

export default function GoogleFontPicker({
  fontFamily,
  onSelectFontFamily,
}: GoogleFontPickerProps) {
  return (
    <>
      <GoogleFontsLinkTag googleFonts={googleWebFonts} />
      <FontList
        fonts={googleWebFonts}
        fontFamilySelected={fontFamily}
        onSelectFontFamily={onSelectFontFamily}
      />
    </>
  );
}
