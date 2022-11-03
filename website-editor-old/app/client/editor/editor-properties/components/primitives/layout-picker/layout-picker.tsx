import { VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useThemeLayoutWithDispatcher from "../../../../../countdown-state-management/common/hooks/theme/useThemeLayoutWithDispatcher";
import Teext from "../../../../../global/common/layout/teext/teext";
import RingLight from "../../../../../global/common/ring-light/ring-light";
import horizontalLayout from "./assets/images/horizontal-layout.png";
import verticalLayout from "./assets/images/vertical-layout.png";
import Label from "../label/label";
import OptionContainer from "./option-container/option-container";
import { LayoutOrientation } from "../../../../../countdown-state-management/common/types/theme/layout";

export default function LayoutPicker() {
  const { t } = useTranslation();
  const { orientation, themeDispatcher } = useThemeLayoutWithDispatcher();

  return (
    <VStack alignItems={"flex-start"} gap={0}>
      <OptionContainer
        value="vertical"
        onClick={(optionValue) => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
            payload: optionValue as LayoutOrientation,
          });
        }}
      >
        <Label textTransform={"uppercase"} pl={0}>
          {t("editor.propertiesGroup.layout.vertical.title")}
        </Label>
        <Teext fontSize={"xs"}>
          {t("editor.propertiesGroup.layout.vertical.description")}
        </Teext>
        <RingLight isVisible={orientation === "vertical"}>
          <img src={verticalLayout} alt="vertical layout" />
        </RingLight>
      </OptionContainer>
      <OptionContainer
        value="horizontal"
        onClick={(optionValue) => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
            payload: optionValue as LayoutOrientation,
          });
        }}
      >
        <Label textTransform={"uppercase"} pl={0}>
          {t("editor.propertiesGroup.layout.horizontal.title")}
        </Label>
        <Teext fontSize={"xs"}>
          {t("editor.propertiesGroup.layout.horizontal.description")}
        </Teext>
        <RingLight isVisible={orientation === "horizontal"}>
          <img src={horizontalLayout} alt="horizontal layout" />
        </RingLight>
      </OptionContainer>
    </VStack>
  );
}
