import { GoogleFontsLinkTag } from "~/client/templates-editor/countdown-widget-typography/countdown-widget-typography";
import type { Typography } from "~/client/templates-editor/countdown-widget-typography/countdown-widget-typography";

import FontList from "./font-list/font-list";

interface GoogleFontPickerProps {
  /** The list of fonts to render */
  fonts: Typography[];
  /** Derived state from the FontFamily component */
  fontFamilySelected: Typography["fontFamily"];
  /** Derived state from the FontFamily component */
  onSelectFontFamily: (fontFamily: string) => void;
}

export default function GoogleFontPicker({
  fonts,
  fontFamilySelected,
  onSelectFontFamily,
}: GoogleFontPickerProps) {
  return (
    <>
      <GoogleFontsLinkTag googleFonts={fonts} />
      <FontList
        fonts={fonts}
        fontFamilySelected={fontFamilySelected}
        onSelectFontFamily={onSelectFontFamily}
      />
    </>
  );
}
