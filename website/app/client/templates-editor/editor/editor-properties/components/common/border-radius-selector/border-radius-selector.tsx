import { Box } from "@chakra-ui/react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";

interface BorderRadiusSelectorProps {
  label: string;
  borderRadiusSelected: number;
  onBorderRadiusSelected: (borderRadiusSelected: number) => void;
}

export default function BorderRadiusSelector({
  label,
  borderRadiusSelected,
  onBorderRadiusSelected,
}: BorderRadiusSelectorProps) {
  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 5"}>
        <SliderMarkTemplate
          min={0}
          max={36}
          step={1}
          onChangeSlider={onBorderRadiusSelected}
          ariaLabel="Change border radius"
          sliderValue={borderRadiusSelected}
        />
      </Box>
    </PropertyWrapper>
  );
}
