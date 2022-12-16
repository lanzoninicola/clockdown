import { useTranslation } from "react-i18next";

import useThemeTimerWithDispatcher from "../../../../countdown-state-management/common/hooks/theme/useThemeTimerWithDispatcher";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../components/common/font-color/font-color";
import FontFamily from "../../components/common/font-family/font-family";
import FontSize from "../../components/common/font-size/font-size";
import UnitLabelLanguagesSelector from "./unit-label-languages-selector/unit-label-languages-selector";
import { useState } from "react";

interface UnitLabelPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function UnitLabelPropertiesGroup({
  showGroupTitle,
  ...props
}: UnitLabelPropertiesGroupProps) {
  const { t } = useTranslation();
  const {
    unitLabelFontFamily,
    unitLabelFontWeight,
    unitLabelFontSize,
    unitLabelFontColor,
    themeDispatcher,
  } = useThemeTimerWithDispatcher();

  // this fix the issue with the color picker that fired an error when changing the color
  // DO NOT REMOVE WITHOUT TESTING
  const [color] = useState(unitLabelFontColor);

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.unitLabel.groupTitle")}
      {...props}
    >
      <UnitLabelLanguagesSelector />
      <FontFamily
        label={t("editor.propertiesGroup.unitLabel.labelFont")}
        fontFamily={unitLabelFontFamily}
        fontWeight={unitLabelFontWeight}
        onSelectFontFamily={(fontFamily) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY",
            payload: fontFamily,
          });
        }}
        onSelectFontWeight={(fontWeight) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_WEIGHT",
            payload: fontWeight,
          });
        }}
      />
      <FontSize
        label={t("editor.propertiesGroup.unitLabel.labelSize")}
        fontSizeChanged={unitLabelFontSize}
        onChangeFontSize={(token, fontSizeChanged) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_SIZE",
            payload: {
              token,
              size: fontSizeChanged,
            },
          });
        }}
      />
      <FontColor
        label={t("editor.propertiesGroup.unitLabel.labelColor")}
        colorSelected={color}
        onColorSelected={(color) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_COLOR",
            payload: color,
          });
        }}
      />
    </PropertyGroupWrapper>
  );
}
