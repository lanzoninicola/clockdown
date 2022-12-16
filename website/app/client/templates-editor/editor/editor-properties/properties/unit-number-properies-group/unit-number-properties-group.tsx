import { useState } from "react";
import { useTranslation } from "react-i18next";

import useThemeTimerWithDispatcher from "../../../../countdown-state-management/common/hooks/theme/useThemeTimerWithDispatcher";
import { PremiumFeatureGuard } from "../../../../premium-features";
import FontColor from "../../components/common/font-color/font-color";
import FontFamily from "../../components/common/font-family/font-family";
import FontSize from "../../components/common/font-size/font-size";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import CheckboxSingleOption from "../../components/primitives/checkbox-single-option/checkbox-single-option";

interface UnitNumberPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function UnitNumberPropertiesGroup({
  showGroupTitle,
  ...props
}: UnitNumberPropertiesGroupProps) {
  const { t } = useTranslation();
  const {
    unitNumberFontColor,
    unitNumberFontFamily,
    unitNumberFontSize,
    unitNumberFontWeight,
    hideDays,
    hideHours,
    hideSeconds,
    padWithZero,
    themeDispatcher,
  } = useThemeTimerWithDispatcher();

  // this fix the issue with the color picker that fired an error when changing the color
  // DO NOT REMOVE WITHOUT TESTING
  const [color] = useState(unitNumberFontColor);

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.unitNumber.groupTitle")}
      {...props}
    >
      <FontFamily
        label={t("editor.propertiesGroup.unitNumber.digitsFont")}
        fontFamily={unitNumberFontFamily}
        fontWeight={unitNumberFontWeight}
        onSelectFontFamily={(fontFamily) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY",
            payload: fontFamily,
          });
        }}
        onSelectFontWeight={(fontWeight) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_WEIGHT",
            payload: fontWeight,
          });
        }}
      />
      <FontSize
        label={t("editor.propertiesGroup.unitNumber.digitsSize")}
        fontSizeChanged={unitNumberFontSize}
        onChangeFontSize={(token, fontSizeChanged) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_SIZE",
            payload: {
              token,
              size: fontSizeChanged,
            },
          });
        }}
      />
      <FontColor
        label={t("editor.propertiesGroup.unitNumber.digitsColor")}
        colorSelected={color}
        onColorSelected={(color) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_COLOR",
            payload: color,
          });
        }}
      />
      {/*       
      <PremiumFeatureGuard variant="modal">
        <CheckboxSingleOption
          id="hide-days"
          label={t("editor.propertiesGroup.unitNumber.visibility.hideDays")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_VISIBILITY_DAYS",
              payload: checked,
            });
          }}
          value={hideDays}
        />
      </PremiumFeatureGuard>
      <PremiumFeatureGuard variant="modal">
        <CheckboxSingleOption
          id="hide-hours"
          label={t("editor.propertiesGroup.unitNumber.visibility.hideHours")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_VISIBILITY_HOURS",
              payload: checked,
            });
          }}
          value={hideHours}
        />
      </PremiumFeatureGuard> */}
      {/* <PremiumFeatureGuard variant="modal"> 
      <CheckboxSingleOption
        id="hide-seconds"
        label={t("editor.propertiesGroup.unitNumber.visibility.hideSeconds")}
        onChange={(checked) => {
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_VISIBILITY_SECONDS",
            payload: checked,
          });
        }}
        value={hideSeconds}
      />
       </PremiumFeatureGuard> */}
      <PremiumFeatureGuard variant="modal">
        <CheckboxSingleOption
          id="pad-with-zero"
          label={t("editor.propertiesGroup.unitNumber.padWithZero")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_PAD_WITH_ZERO",
              payload: checked,
            });
          }}
          value={padWithZero}
        />
      </PremiumFeatureGuard>
      <PremiumFeatureGuard variant="modal">
        <FontColor
          label={t("editor.propertiesGroup.unitNumber.lastUnitColor")}
          colorSelected={unitNumberFontColor}
          onColorSelected={(color) => {
            themeDispatcher({
              type: "THEME_TIMER_ON_CHANGE_LAST_UNIT_COLOR",
              payload: color,
            });
          }}
        />
      </PremiumFeatureGuard>
    </PropertyGroupWrapper>
  );
}
