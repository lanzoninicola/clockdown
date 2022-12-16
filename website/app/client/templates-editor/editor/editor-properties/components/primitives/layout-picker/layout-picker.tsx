import { VStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useThemeLayoutWithDispatcher } from "~/client/templates-editor/countdown-state-management";
import type { LayoutOrientation } from "~/client/templates-editor/countdown-state-management/common/types/theme/layout";
import Teext from "~/client/templates-editor/global/common/layout/teext/teext";
import RingLight from "~/client/templates-editor/global/common/ring-light/ring-light";
import Label from "../label/label";
import OptionContainer from "./option-container/option-container";

import horizontalLayout from "./assets/images/horizontal-layout.png";
import verticalLayout from "./assets/images/vertical-layout.png";

export default function LayoutPicker() {
  const { t } = useTranslation();
  const { orientation, themeDispatcher } = useThemeLayoutWithDispatcher();

  return (
    <VStack alignItems={"flex-start"} gap={0}>
      <RingLight isVisible={orientation === "auto"}>
        <OptionContainer
          value="auto"
          onClick={(optionValue) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
              payload: optionValue as LayoutOrientation,
            });
          }}
        >
          <Label textTransform={"uppercase"} pl={0} fontWeight={700}>
            {t("editor.propertiesGroup.layout.auto.title")}
          </Label>
          <Teext fontSize={"xs"}>
            {t("editor.propertiesGroup.layout.auto.description")}
          </Teext>
          {/* <RingLight isVisible={orientation === "auto"}>
          <img src={verticalLayout} alt="auto layout" />
        </RingLight> */}
        </OptionContainer>
      </RingLight>
      <RingLight isVisible={orientation === "vertical"}>
        <OptionContainer
          value="vertical"
          onClick={(optionValue) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
              payload: optionValue as LayoutOrientation,
            });
          }}
        >
          <Label textTransform={"uppercase"} pl={0} fontWeight={700}>
            {t("editor.propertiesGroup.layout.vertical.title")}
          </Label>
          <Teext fontSize={"xs"}>
            {t("editor.propertiesGroup.layout.vertical.description")}
          </Teext>
          <img src={verticalLayout} alt="vertical layout" />
        </OptionContainer>
      </RingLight>
      {/**
      <RingLight isVisible={orientation === "horizontal"}>
        <OptionContainer
          value="horizontal"
          onClick={(optionValue) => {
            themeDispatcher({
              type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION",
              payload: optionValue as LayoutOrientation,
            });
          }}
        >
          <Label textTransform={"uppercase"} pl={0} fontWeight={700}>
            {t("editor.propertiesGroup.layout.horizontal.title")}
          </Label>
          <Teext fontSize={"xs"}>
            {t("editor.propertiesGroup.layout.horizontal.description")}
          </Teext>

          <img src={horizontalLayout} alt="horizontal layout" />
        </OptionContainer>
      </RingLight>
       */}
    </VStack>
  );
}
