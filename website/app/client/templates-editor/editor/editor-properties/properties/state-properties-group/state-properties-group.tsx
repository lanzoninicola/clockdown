import Editor from "@monaco-editor/react";
import {
  EditorContext,
  useThemeState,
} from "~/client/templates-editor/countdown-state-management";
import type { EditorContextDataWithDispatch } from "~/client/templates-editor/countdown-state-management/common/types";

import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";

interface StatePropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function StatePropertiesGroup({
  showGroupTitle,
  ...props
}: StatePropertiesGroupProps) {
  const { layout, title, timer } =
    useThemeState<EditorContextDataWithDispatch>(EditorContext);

  const { orientation, gap, transparentBackground, backgroundColor, css } =
    layout;
  const { fontFamily, fontWeight, fontSize, fontColor } = title;

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={"Global state"}
      {...props}
    >
      <Editor
        height="280px"
        width={"100%"}
        defaultLanguage="json"
        options={{
          minimap: { enabled: false },
          lineNumbers: "off",
          fontSize: 12,
        }}
        value={JSON.stringify(
          {
            layout: {
              orientation,
              gap,
              transparentBackground,
              backgroundColor,
              css,
            },
            title: {
              fontFamily,
              fontWeight,
              fontSize,
              fontColor,
            },
            timer,
          },
          null,
          2
        )}
      />
    </PropertyGroupWrapper>
  );
}
