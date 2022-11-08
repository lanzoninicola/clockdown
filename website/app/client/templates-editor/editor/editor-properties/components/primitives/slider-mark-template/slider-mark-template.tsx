import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";

interface SliderMarkTemplateProps {
  min: number;
  max: number;
  step?: number;
  sliderValue?: number;
  onChangeSlider: (value: number) => void;
  /** Shor or not the Slider Mark */
  showMark?: boolean;
  /** Value printed on the Slider Mark */
  sliderMarkValue?: number | undefined;
  ariaLabel?: string;
}

export default function SliderMarkTemplate({
  min,
  max,
  step = 1,
  sliderValue,
  onChangeSlider,
  showMark = false,
  sliderMarkValue,
}: SliderMarkTemplateProps) {
  return (
    <Slider
      aria-label="slider-ex-6"
      onChange={(value: number) => onChangeSlider(value)}
      min={min}
      max={max}
      step={step}
      value={sliderValue}
    >
      {showMark && (
        <SliderMark
          className="theme-font"
          value={sliderMarkValue || 0}
          fontSize="xs"
          textAlign="center"
          bg="blue.500"
          color="white"
          borderRadius={"lg"}
          mt="-10"
          ml="-5"
          w="12"
          top="100%"
        >
          {sliderMarkValue}
        </SliderMark>
      )}
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb boxSize={6}>
        <Box color="blue.500">
          <Text
            as="span"
            fontSize=".65rem"
            className="theme-font"
            fontWeight={600}
          >
            {sliderMarkValue}
          </Text>
        </Box>
      </SliderThumb>
    </Slider>
  );
}
