import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import useEditorState from "../../../../../countdown-state-management/common/hooks/editor/useEditorState";
import {
  ChakraToken,
  ResponsiveValue,
} from "../../../../../countdown-state-management/common/types/theme/responsive";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";
import FontSizePreview from "./font-size-preview/font-size-preview";

interface FontSizeProps {
  label: string;
  fontSizeChanged: ResponsiveValue | null;
  onChangeFontSize: (token: ChakraToken, fontSizeChanged: number) => void;
}

export default function FontSize({
  label,
  fontSizeChanged,
  onChangeFontSize,
}: FontSizeProps) {
  const defaultFontSize = {
    sm: 16,
    md: 16,
    lg: 16,
  };

  const { currentToken } = useEditorState();
  const [fontSize, setFontSize] = useState<number>(
    defaultFontSize[currentToken]
  );

  console.log({
    fontSize,
    currentToken,
    fontSizeChanged,
  });

  function onChangeSize(size: number) {
    onChangeFontSize(currentToken, size);
    setFontSize(size);
  }

  useEffect(() => {
    if (
      fontSizeChanged === null ||
      fontSizeChanged[currentToken] === undefined ||
      !fontSizeChanged
    ) {
      setFontSize(defaultFontSize[currentToken]);
      return;
    }

    setFontSize(fontSizeChanged[currentToken]);
  }, [currentToken, fontSizeChanged]);

  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 4"}>
        <SliderMarkTemplate
          min={12}
          max={72}
          step={1}
          onChangeSlider={onChangeSize}
          ariaLabel="Change font size"
          sliderValue={fontSize}
        />
      </Box>
      <FontSizePreview size={fontSize} />
    </PropertyWrapper>
  );
}
