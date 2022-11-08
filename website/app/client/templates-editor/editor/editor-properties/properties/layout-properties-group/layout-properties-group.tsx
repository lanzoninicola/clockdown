import { Box } from "@chakra-ui/react";
import { link } from "fs";
import { useTranslation } from "react-i18next";
import { useEditorState } from "../../../../countdown-state-management";

import useThemeLayoutWithDispatcher from "../../../../countdown-state-management/common/hooks/theme/useThemeLayoutWithDispatcher";
import { PremiumFeatureGuard } from "../../../../premium-features";
import BackgroundColor from "../../components/common/background-color/background-color";
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
    orientation,
    fitOnScreen,
    transparentBackground,
    backgroundColor,
    removeLink,
    linkTarget,
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
      {orientation === "horizontal" && currentToken !== "sm" && (
        <CheckboxSingleOption
          id="fit-on-screen-checker"
          label={t("editor.propertiesGroup.layout.stretchProp")}
          onChange={(checked) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_FIT_ON_SCREEN",
              payload: checked,
            });
          }}
          value={fitOnScreen}
        />
      )}
      {fitOnScreen && currentToken !== "sm" && <GapSelector />}
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
