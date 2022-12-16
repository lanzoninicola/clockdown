import { Box } from "@chakra-ui/react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";
import SliderMarkTemplate from "../../primitives/slider-mark-template/slider-mark-template";

interface HeightSelectorProps {
  label: string;
  heightSelected: number;
  onHeightSelected: (heightSelected: number) => void;
}

export default function HeightSelector({
  label,
  heightSelected,
  onHeightSelected,
}: HeightSelectorProps) {
  return (
    <PropertyWrapper columns={4}>
      <Label>{label}</Label>
      <Box gridColumn={"2 / 5"}>
        <SliderMarkTemplate
          min={1}
          max={30}
          step={1}
          onChangeSlider={onHeightSelected}
          ariaLabel="Change font size"
          sliderValue={heightSelected}
        />
      </Box>
    </PropertyWrapper>
  );
}
