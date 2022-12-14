import { useTranslation } from "react-i18next";

import useThemeTitleSelector from "../../../../countdown-state-management/common/hooks/theme/useThemeTitleWithDispatcher";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import FontColor from "../../components/common/font-color/font-color";
import FontFamily from "../../components/common/font-family/font-family";
import FontSize from "../../components/common/font-size/font-size";
import CountdownTitleText from "./countdown-title-text/countdown-title-text";

import { useState } from "react";
import CheckboxSingleOption from "../../components/primitives/checkbox-single-option/checkbox-single-option";

interface TitlePropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function TitlePropertiesGroup({
  showGroupTitle,
  ...props
}: TitlePropertiesGroupProps) {
  const { t } = useTranslation();
  const {
    fontColor,
    fontFamily,
    fontSize,
    fontWeight,
    titleTextTransform,
    themeDispatcher,
  } = useThemeTitleSelector();

  // this fix the issue with the color picker that fired an error when changing the color
  // DO NOT REMOVE WITHOUT TESTING
  const [color] = useState(fontColor);

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.title.groupTitle")}
      {...props}
    >
      <CountdownTitleText />
      <FontFamily
        label={t("editor.propertiesGroup.title.textFont")}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        onSelectFontFamily={(fontFamily) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY",
            payload: fontFamily,
          });
        }}
        onSelectFontWeight={(fontWeight) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_FONT_WEIGHT",
            payload: fontWeight,
          });
        }}
      />
      <FontSize
        label={t("editor.propertiesGroup.title.textSize")}
        fontSizeChanged={fontSize}
        onChangeFontSize={(token, fontSizeChanged) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_FONT_SIZE",
            payload: {
              token,
              size: fontSizeChanged,
            },
          });
        }}
      />
      <FontColor
        label={t("editor.propertiesGroup.title.textColor")}
        colorSelected={color}
        onColorSelected={(colorSelected) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_FONT_COLOR",
            payload: colorSelected,
          });
        }}
      />
      <CheckboxSingleOption
        id="title-text-transform-uppercase-checker"
        label={t(
          "editor.propertiesGroup.unitLabel.labelTextTransformUppercase"
        )}
        onChange={(checked) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_UPPERCASE_TEXT",
            payload: checked ? "uppercase" : "capitalize",
          });
        }}
        value={titleTextTransform === "uppercase"}
      />
      <CheckboxSingleOption
        id="title-text-transform-lowercase-checker"
        label={t(
          "editor.propertiesGroup.unitLabel.labelTextTransformLowercase"
        )}
        onChange={(checked) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_LOWERCASE_TEXT",
            payload: checked ? "lowercase" : "capitalize",
          });
        }}
        value={titleTextTransform === "lowercase"}
      />
    </PropertyGroupWrapper>
  );
}
