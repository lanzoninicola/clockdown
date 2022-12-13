import { Box, Text, VStack } from "@chakra-ui/react";
import type { Typography } from "~/client/templates-editor/countdown-widget-typography/types";
import { PremiumFeatureGuard } from "~/client/templates-editor/premium-features";
import useCustomScrollbar from "../../../../../../hooks/useCustomScrollbar";

export interface FontListProps {
  /** List of the font families to render */
  fonts: Typography[];
  /** Selected font family used to highlight the related box */
  fontFamilySelected: string;
  /** Set the state of the Font Family component (no global) */
  onSelectFontFamily: (font: string) => void;
}

export default function FontList({
  fonts,
  fontFamilySelected,
  onSelectFontFamily,
}: FontListProps) {
  const customScrollbar = useCustomScrollbar();

  return (
    <>
      <VStack
        id="font-list"
        spacing={1}
        alignItems={"flex-start"}
        overflowY={"scroll"}
        maxH={"calc(300px - 2rem)"}
        w="150px"
        css={customScrollbar}
        p={1}
        marginInlineStart="0 !important"
      >
        {fonts.map((font, idx) => (
          <Box
            key={idx}
            borderRadius={"md"}
            onClick={() => onSelectFontFamily(font.fontFamily)}
            p={2}
            cursor={"pointer"}
            _hover={{
              background: "gray.100",
            }}
            bg={
              font.fontFamily === fontFamilySelected
                ? "gray.100"
                : "transparent"
            }
            width="100%"
          >
            {font.pro === true ? (
              <PremiumFeatureGuard
                key={idx}
                variant="modal"
                iconPosition="left"
              >
                <FontItem font={font} />
              </PremiumFeatureGuard>
            ) : (
              <FontItem font={font} />
            )}
          </Box>
        ))}
      </VStack>
    </>
  );
}

function FontItem({ font }: { font: Typography }) {
  return (
    <Text
      pl={1}
      fontSize={"xs"}
      style={{
        fontFamily: font.fontFamily,
      }}
    >
      {font.fontFamily}
    </Text>
  );
}
