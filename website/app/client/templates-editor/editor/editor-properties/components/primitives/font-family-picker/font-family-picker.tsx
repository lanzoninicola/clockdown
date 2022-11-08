import { HStack, VStack } from "@chakra-ui/react";

import GoogleFontPicker from "../google-font-picker/google-font-picker";
import TextPreview from "../google-font-picker/text-preview/text-preview";

interface FontFamilyPicker {
  /** Derived state from the FontFamily component */
  fontFamily: string;
  /** Derived state from the FontFamily component */
  fontWeight: string;
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
}: // onSelectFontWeight,
FontFamilyPicker) {
  return (
    <VStack gap="2">
      <HStack gap={1}>
        <GoogleFontPicker
          fontFamily={fontFamily}
          onSelectFontFamily={onSelectFontFamily}
        />
        <TextPreview fontSelected={{ fontFamily, fontWeight }} />
      </HStack>
      {/* TODO: here add the fontWeight picker. For google fonts the list of font weight depends on his families. */}
    </VStack>
  );
}
