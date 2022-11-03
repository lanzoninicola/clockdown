import { Box, VStack } from "@chakra-ui/react";
import { FaLaptop } from "@react-icons/all-files/fa/FaLaptop";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaTabletAlt } from "@react-icons/all-files/fa/FaTabletAlt";
import { useTranslation } from "react-i18next";
import { useEditorStateWithDispatcher } from "../../../../countdown-state-management";

import PropertyButton from "../../../editor-properties/editor-properties-bar/components/property-button/property-button";

export default function BreakpointsBar() {
  const { t } = useTranslation();
  const { currentToken, editorDispatcher } = useEditorStateWithDispatcher();

  return (
    <VStack gap={2} data-element="breakpoints-bar">
      <PropertyButton
        label={t("global.desktop")}
        icon={<FaLaptop />}
        onClick={() => {
          editorDispatcher({
            type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
            payload: "lg",
          });
        }}
        isActive={currentToken === "lg"}
      />
      {/* <TokenButton
        label={t("global.desktop")}
        icon={<FaLaptop />}
        onClick={() => {
          editorDispatcher({
            type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
            payload: "lg",
          });
        }}
        isActive={currentToken === "lg"}
      /> */}
      <PropertyButton
        label={t("global.tablet")}
        icon={<FaTabletAlt />}
        onClick={() => {
          editorDispatcher({
            type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
            payload: "md",
          });
        }}
        isActive={currentToken === "md"}
      />
      <PropertyButton
        label={t("global.mobile")}
        icon={<FaMobileAlt />}
        onClick={() => {
          editorDispatcher({
            type: "EDITOR_ON_CHANGE_TOKEN_LAYOUT_RESPONSIVE",
            payload: "sm",
          });
        }}
        isActive={currentToken === "sm"}
      />
    </VStack>
  );
}
