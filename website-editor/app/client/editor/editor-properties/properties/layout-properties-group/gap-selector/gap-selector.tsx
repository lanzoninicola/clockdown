import { Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeLayoutWithDispatcher from "../../../../../countdown-state-management/common/hooks/theme/useThemeLayoutWithDispatcher";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";
import SliderMarkTemplate from "../../../components/primitives/slider-mark-template/slider-mark-template";

export default function GapSelector() {
  const { gap, themeDispatcher } = useThemeLayoutWithDispatcher();
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.layout.gapLabelProp")}</Label>
      <Box gridColumn={"2 / 4"}>
        <SliderMarkTemplate
          min={1}
          max={3}
          step={1}
          onChangeSlider={(value) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_GAP",
              payload: value,
            });
          }}
          ariaLabel="Change the gap between the title and timer"
          sliderValue={gap}
        />
      </Box>
    </PropertyWrapper>
  );
}
