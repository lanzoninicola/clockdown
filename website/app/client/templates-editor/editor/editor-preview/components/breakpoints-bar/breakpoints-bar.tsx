import { FaLaptop } from "@react-icons/all-files/fa/FaLaptop";
import { FaMobileAlt } from "@react-icons/all-files/fa/FaMobileAlt";
import { FaTabletAlt } from "@react-icons/all-files/fa/FaTabletAlt";
import { useTranslation } from "react-i18next";
import { useEditorStateWithDispatcher } from "~/client/templates-editor/countdown-state-management";

import TokenButton from "./components/token-button";

export default function BreakpointsBar() {
  const { t } = useTranslation();
  const { currentToken, editorDispatcher } = useEditorStateWithDispatcher();

  return (
    <div className="flex gap-4" data-element="breakpoints-bar">
      <TokenButton
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
      <TokenButton
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
      <TokenButton
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
    </div>
  );
}
