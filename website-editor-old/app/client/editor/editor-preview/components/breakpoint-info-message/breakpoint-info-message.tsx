import { Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useEditorState from "../../../../countdown-state-management/common/hooks/editor/useEditorState";
import BoxRadiusLg from "../../../layout/box-radius-lg/box-radius-lg";

export default function BreakpointInfoMessage() {
  const { t } = useTranslation();
  const { currentToken } = useEditorState();

  const message = () => {
    switch (currentToken) {
      case "sm":
        return t("editor.breakpointInfoMessage.mobile");
      case "md":
        return t("editor.breakpointInfoMessage.tablet");
      case "lg":
        return t("editor.breakpointInfoMessage.desktop");
      default:
        return "";
    }
  };

  return (
    <>
      <BoxRadiusLg>
        <Text
          as="span"
          className="theme-font"
          fontSize={"small"}
          fontWeight={600}
        >
          {t("editor.breakpointInfoMessage.prefix")}
          <Text
            as="span"
            className="theme-font"
            fontSize={"small"}
            fontWeight={600}
            color="blue.500"
          >
            {message()}
          </Text>
        </Text>
      </BoxRadiusLg>
    </>
  );
}
