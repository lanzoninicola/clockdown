import { Box } from "@chakra-ui/react";
import { link } from "fs";
import { useTranslation } from "react-i18next";
import { useEditorState } from "../../../../countdown-state-management";

import useThemeLayoutWithDispatcher from "../../../../countdown-state-management/common/hooks/theme/useThemeLayoutWithDispatcher";
import { PremiumFeatureGuard } from "../../../../premium-features";
import BackgroundColor from "../../components/common/background-color/background-color";
import BorderColor from "../../components/common/border-color/border-color";
import BorderRadiusSelector from "../../components/common/border-radius-selector/border-radius-selector";
import BorderWidthSelector from "../../components/common/border-width-selector/border-width-selector";
import HeightSelector from "../../components/common/height-selector/height-selector";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import CheckboxSingleOption from "../../components/primitives/checkbox-single-option/checkbox-single-option";
import InputSingleOption from "../../components/primitives/input-single-option/input-single-option";
import GapSelector from "./gap-selector/gap-selector";
import LayoutOrientation from "./layout-orientation/layout-orientation";

interface LayoutPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function LayoutPropertiesGroup({
  showGroupTitle,
  ...props
}: LayoutPropertiesGroupProps) {
  const {
    height,
    orientation,
    transparentBackground,
    backgroundColor,
    borderWidth,
    borderColor,
    borderRadius,
    removeLink,
    linkTarget,
    reverseOrderItems,
    themeDispatcher,
  } = useThemeLayoutWithDispatcher();
  const { currentToken } = useEditorState();
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.layout.groupTitle")}
      {...props}
    >
      {currentToken !== "sm" && (
        <LayoutOrientation orientationSelected={orientation} />
      )}

      <PremiumFeatureGuard variant="modal">
        <HeightSelector
          label={t("editor.propertiesGroup.layout.heightProp")}
          heightSelected={height}
          onHeightSelected={(height) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_HEIGHT",
              payload: height,
            });
          }}
        />
      </PremiumFeatureGuard>

      {/* {currentToken !== "sm" && } */}
      <GapSelector />
      <CheckboxSingleOption
        id="transparent-background-checker"
        label={t("editor.propertiesGroup.layout.transparentProp")}
        onChange={(checked) => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT",
            payload: checked,
          });
        }}
        value={transparentBackground}
      />
      <BackgroundColor
        colorSelected={backgroundColor}
        onColorSelected={(color) => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR",
            payload: color,
          });
        }}
        label={t("editor.propertiesGroup.layout.backgroundColorProp")}
      />

      <PremiumFeatureGuard variant="modal">
        <BorderWidthSelector
          label={t("editor.propertiesGroup.layout.borderWidthProp")}
          borderWidthSelected={borderWidth}
          onBorderWidthSelected={(borderWidth) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_BORDER_WIDTH",
              payload: borderWidth,
            });
          }}
        />
      </PremiumFeatureGuard>

      <PremiumFeatureGuard variant="modal">
        <BorderColor
          label={t("editor.propertiesGroup.layout.borderColorProp")}
          colorSelected={borderColor}
          onColorSelected={(color) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_BORDER_COLOR",
              payload: color,
            });
          }}
        />
      </PremiumFeatureGuard>

      <PremiumFeatureGuard variant="modal">
        <BorderRadiusSelector
          label={t("editor.propertiesGroup.layout.borderRadiusProp")}
          borderRadiusSelected={borderRadius}
          onBorderRadiusSelected={(borderRadius) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_BORDER_RADIUS",
              payload: borderRadius,
            });
          }}
        />
      </PremiumFeatureGuard>

      {currentToken === "sm" && (
        <PremiumFeatureGuard variant="modal">
          <CheckboxSingleOption
            id="order-item-reverse"
            label={t("editor.propertiesGroup.layout.reverseOrder")}
            onChange={(checked) => {
              themeDispatcher({
                type: "THEME_LAYOUT_ON_CHANGE_ORDER_ITEM_REVERSE",
                payload: checked,
              });
            }}
            value={reverseOrderItems}
          />
        </PremiumFeatureGuard>
      )}
      <PremiumFeatureGuard variant="modal">
        <CheckboxSingleOption
          id="remove-link"
          label={t("editor.propertiesGroup.layout.removeLink")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_REMOVE_LINK",
              payload: checked,
            });
          }}
          value={removeLink}
        />
      </PremiumFeatureGuard>
      <PremiumFeatureGuard variant="modal">
        <InputSingleOption
          id="link-target"
          label={t("editor.propertiesGroup.layout.linkTarget")}
          onChange={(e) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_LINK_TARGET",
              payload: e.target.value,
            });
          }}
          value={linkTarget}
          placeholder={"http://yourawesomelandingpage.com"}
          inputName={"linkTarget"}
        />
      </PremiumFeatureGuard>
    </PropertyGroupWrapper>
  );
}
