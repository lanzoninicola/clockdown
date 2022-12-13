import { Button } from "@chakra-ui/react";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import capitalize from "~/client/common/utils/capitalize";
import { useThemeLayoutWithDispatcher } from "~/client/templates-editor/countdown-state-management";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import SaveButton from "./save-button/save-button";

interface CssStylePropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function CssStylePropertiesGroup({
  showGroupTitle,
  ...props
}: CssStylePropertiesGroupProps) {
  const { t } = useTranslation();
  const { css, themeDispatcher } = useThemeLayoutWithDispatcher();
  const [style, setStyle] = useState<string>(css || "");

  function handleEditorChange(value: string | undefined, ev: any) {
    setStyle(value || "");
  }

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.css.groupTitle")}
      {...props}
    >
      <Editor
        height="280px"
        width={"100%"}
        defaultLanguage="css"
        options={{
          minimap: { enabled: false },
          lineNumbers: "off",
          fontSize: 12,
        }}
        value={style}
        onChange={handleEditorChange}
      />
      <SaveButton
        onClick={() => {
          themeDispatcher({
            type: "THEME_LAYOUT_ON_CHANGE_CSS_STYLE",
            payload: style,
          });
        }}
        delay={500}
      />
    </PropertyGroupWrapper>
  );
}
