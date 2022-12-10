import React from "react";

import { WidgetContext } from "../../../countdown-state-management";
import useThemeLayout from "../../../countdown-state-management/common/hooks/theme/useThemeLayout";
import useThemeTemplate from "../../../countdown-state-management/common/hooks/theme/useThemeTemplate";
import useThemeTimerSeparator from "../../../countdown-state-management/common/hooks/theme/useThemeTimerSeparator";
import useThemeTimerUnitLabel from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitLabel";
import useThemeTimerUnitNumber from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitNumber";
import useThemeTitle from "../../../countdown-state-management/common/hooks/theme/useThemeTitle";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";
import { cssFlexColumn, cssFlexRow } from "../../utils/css-style-text";

export default function CountdownWidgetStyleTag() {
  const globalTheme = useThemeLayout(WidgetContext);
  const titleTheme = useThemeTitle(WidgetContext);
  const viewportToken = useChakraBreakpoint();
  const unitNumberTheme = useThemeTimerUnitNumber(WidgetContext);
  const unitLabelTheme = useThemeTimerUnitLabel(WidgetContext);
  const separatorTheme = useThemeTimerSeparator(WidgetContext);

  const { style: templateStyle, id: templateId } =
    useThemeTemplate(WidgetContext);

  let countdownWrapper = `
  div[data-element="countdown-wrapper"] {
      ${React.useMemo(
        () =>
          globalTheme.orientation === "vertical"
            ? cssFlexColumn()
            : cssFlexRow(),
        [globalTheme.orientation]
      )}
      -webkit-justify-content: ${
        globalTheme.gap === 1
          ? "space-evenly"
          : globalTheme.gap === 2
          ? "space-around"
          : "space-between"
      };
      justify-content: ${
        globalTheme.gap === 1
          ? "space-evenly"
          : globalTheme.gap === 2
          ? "space-around"
          : "space-between"
      };
      width: ${globalTheme.fitOnScreen ? "100%" : "max-content"};
   
  `;

  if (globalTheme.transparentBackground) {
    countdownWrapper += `
      background: transparent;
    `;
  }

  if (globalTheme.backgroundColor !== "") {
    countdownWrapper += `
        background: ${globalTheme.backgroundColor};
    `;
  }

  countdownWrapper += `}`;

  const title = `
  h2[data-element="countdown-title"] {
    font-family: ${titleTheme.fontFamily};
    font-size: ${titleTheme.fontSize[viewportToken]}px;	
    color: ${titleTheme.fontColor};
    font-weight: ${titleTheme.fontWeight};
  }`;

  const unitNumber = `
  span[data-element="countdown-unit-number"] {
    font-size: ${unitNumberTheme.unitNumberFontSize[viewportToken]}px;
    font-weight: ${unitNumberTheme.unitNumberFontWeight};
    font-family: ${unitNumberTheme.unitNumberFontFamily};
    color: ${unitNumberTheme.unitNumberFontColor};
  }`;

  const unitLabel = `
  span[data-element="countdown-unit-label"] {
     font-size: ${unitLabelTheme.unitLabelFontSize[viewportToken]}px;
    font-weight: ${unitLabelTheme.unitLabelFontWeight};
    font-family: ${unitLabelTheme.unitLabelFontFamily};
    color: ${unitLabelTheme.unitLabelFontColor};
  }`;

  const lastUnit = `
  span[data-element="countdown-units"]:last-child {
    color: ${unitNumberTheme.lastUnitColor};
  }`;

  const unitSeparator = `
  div[data-element="countdown-unit"][data-unit-type="separator"] {
    display: ${
      separatorTheme.showSeparator === false ? "none" : "inline-block"
    };
  }`;

  const editorStyleTagContent = [
    countdownWrapper,
    title,
    unitNumber,
    unitLabel,
    unitSeparator,
    lastUnit,
  ].join(" ");

  return (
    <>
      <style
        data-element="countdown-widget-style-tag"
        data-context="template-style"
      >
        {templateId !== "default" && templateId !== undefined && templateStyle}
      </style>
      <style
        data-element="countdown-widget-style-tag"
        data-context="editor-style"
      >
        {editorStyleTagContent}
      </style>
    </>
  );
}
