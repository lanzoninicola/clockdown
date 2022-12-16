import { Box } from "@chakra-ui/react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";

interface BorderWidthSelectorProps {
  label: string;
  borderWidthSelected: number;
  onBorderWidthSelected: (borderWidthSelected: number) => void;
}

export default function BorderWidthSelector({
  label,
  borderWidthSelected,
  onBorderWidthSelected,
}: BorderWidthSelectorProps) {
  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 5"}>
        <SliderMarkTemplate
          min={0}
          max={36}
          step={1}
          onChangeSlider={onBorderWidthSelected}
          ariaLabel="Change border width"
          sliderValue={borderWidthSelected}
        />
      </Box>
    </PropertyWrapper>
  );
}
