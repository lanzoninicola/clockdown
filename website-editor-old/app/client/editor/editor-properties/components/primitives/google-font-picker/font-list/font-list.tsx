import { Box, Text, VStack } from "@chakra-ui/react";
import useCustomScrollbar from "../../../../../../hooks/useCustomScrollbar";

export interface FontListProps {
  /** List of the font families to render */
  fontFamilies: string[];
  /** Selected font family used to highlight the related box */
  fontFamilySelected: string;
  /** Set the state of the Font Family component (no global) */
  onSelectFontFamily: (font: string) => void;
}

export default function FontList({
  fontFamilies,
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
        w="120px"
        css={customScrollbar}
        p={1}
        marginInlineStart="0 !important"
      >
        {fontFamilies.map((family, idx) => (
          <Box
            key={idx}
            borderRadius={"md"}
            onClick={() => onSelectFontFamily(family)}
            p={2}
            cursor={"pointer"}
            _hover={{
              background: "gray.100",
            }}
            bg={family === fontFamilySelected ? "gray.100" : "transparent"}
            width="100%"
          >
            <Text
              pl={1}
              fontSize={"xs"}
              style={{
                fontFamily: family,
              }}
            >
              {family}
            </Text>
          </Box>
        ))}
      </VStack>
    </>
  );
}
