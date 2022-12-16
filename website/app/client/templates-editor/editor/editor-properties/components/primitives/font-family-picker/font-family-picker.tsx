import { HStack, VStack } from "@chakra-ui/react";
import type { Typography } from "~/client/templates-editor/countdown-widget-typography/types";
import FontWeightSelector from "../font-weight-selector/font-weight-selector";

import GoogleFontPicker from "../google-font-picker/google-font-picker";
import TextPreview from "../google-font-picker/text-preview/text-preview";

import googleWebFonts from "../../../constants/google-web-fonts";

interface FontFamilyPickerProps {
  /** Derived state from the FontFamily component */
  fontFamily: Typography["fontFamily"];
  /** Derived state from the FontFamily component */
  fontWeight: Typography["fontWeight"];
  /** Derived state from the FontFamily component */
  onSelectFontFamily: (fontFamily: string) => void;
  /** Derived state from the FontFamily component */
  onSelectFontWeight: (fontWeight: string) => void;
}

/** This is an abstraction for the font family picker.
 * Now I'm using the Google Fonts as source but in the future I can use another source
 */
export default function FontFamilyPicker({
  fontFamily,
  fontWeight,
  onSelectFontFamily,
  onSelectFontWeight,
}: FontFamilyPickerProps) {
  const fontVarians = googleWebFonts.find(
    (font) => font.fontFamily === fontFamily
  )?.variants;

  return (
    <VStack gap="2">
      <HStack gap={1}>
        <GoogleFontPicker
          fonts={googleWebFonts}
          fontFamilySelected={fontFamily}
          onSelectFontFamily={onSelectFontFamily}
        />
        <TextPreview fontSelected={{ fontFamily, fontWeight }} />
      </HStack>
      {/* TODO: here add the fontWeight picker. For google fonts the list of font weight depends on his families. */}
      <FontWeightSelector
        variants={fontVarians}
        onSelectFontWeight={onSelectFontWeight}
      />
    </VStack>
  );
}
