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

  console.log(titleTheme.fontFamily, titleTheme.fontSize, titleTheme.fontColor);

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
      width: 100%;
  `;

  if (globalTheme.transparentBackground) {
    countdownWrapper += `
      background: transparent;
    `;
  }
  if (globalTheme.backgroundColor !== null) {
    countdownWrapper += `
        background: ${globalTheme.backgroundColor};
    `;
  }
  countdownWrapper += `}`;

  /** ============================================ */

  let title = ``;
  title += `h2[data-element="countdown-title"] {`;
  if (titleTheme.fontFamily) {
    title += `font-family: ${titleTheme.fontFamily};`;
  }
  if (titleTheme.fontSize) {
    title += `font-size: ${titleTheme.fontSize[viewportToken]}px;`;
  }
  if (titleTheme.fontColor) {
    title += `color: ${titleTheme.fontColor};`;
  }
  if (titleTheme.fontWeight) {
    title += `font-weight: ${titleTheme.fontWeight};`;
  }
  title += `}`;

  /** ============================================ */

  /** ============================================ */

  let unitNumber = ``;
  unitNumber += `span[data-element="countdown-unit-number"] {`;
  if (unitNumberTheme.unitNumberFontSize) {
    unitNumber += `font-size: ${unitNumberTheme.unitNumberFontSize[viewportToken]}px;`;
  }
  if (unitNumberTheme.unitNumberFontWeight) {
    unitNumber += `font-weight: ${unitNumberTheme.unitNumberFontWeight};`;
  }
  if (unitNumberTheme.unitNumberFontFamily) {
    unitNumber += `font-family: ${unitNumberTheme.unitNumberFontFamily};`;
  }
  if (unitNumberTheme.unitNumberFontColor) {
    unitNumber += `color: ${unitNumberTheme.unitNumberFontColor};`;
  }
  unitNumber += `}`;

  /** ============================================ */

  /** ============================================ */

  let unitLabel = ``;
  unitLabel += `span[data-element="countdown-unit-label"] {`;
  if (unitLabelTheme.unitLabelFontSize) {
    unitLabel += `font-size: ${unitLabelTheme.unitLabelFontSize[viewportToken]}px;`;
  }
  if (unitLabelTheme.unitLabelFontWeight) {
    unitLabel += `font-weight: ${unitLabelTheme.unitLabelFontWeight};`;
  }
  if (unitLabelTheme.unitLabelFontFamily) {
    unitLabel += `font-family: ${unitLabelTheme.unitLabelFontFamily};`;
  }
  if (unitLabelTheme.unitLabelFontColor) {
    unitLabel += `color: ${unitLabelTheme.unitLabelFontColor};`;
  }
  unitLabel += `}`;

  /** ============================================ */

  /** ============================================ */

  let lastUnit = ``;
  lastUnit += `span[data-element="countdown-units"]:last-child {`;
  if (unitNumberTheme.lastUnitColor) {
    lastUnit += `color: ${unitNumberTheme.lastUnitColor};`;
  }
  lastUnit += `}`;

  /** ============================================ */

  /** ============================================ */

  let unitSeparator = ``;
  unitSeparator += `div[data-element="countdown-unit"][data-unit-type="separator"] {`;
  if (separatorTheme.showSeparator === false) {
    unitSeparator += `display: none;`;
  }
  unitSeparator += `}`;

  /** ============================================ */

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
      <style data-element="countdown-widget-style-tag" data-context="base">
        {`div[data-element=countdown-units],div[data-element=countdown-widget],div[data-element=countdown-wrapper]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox}h2[data-element=countdown-title],span[data-element=countdown-unit-label],span[data-element=countdown-unit-number]{font-size:16px;font-weight:400;font-family:Inter}a[data-element=countdown-link-wrapper]{color:inherit;-webkit-text-decoration:none;text-decoration:none}div[data-element=countdown-widget]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:center;justify-content:center;width:100%}div[data-element=countdown-container]{width:100%}div[data-element=countdown-wrapper]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-evenly;justify-content:space-evenly;gap:1.5rem;padding:1rem .5rem;background:#fff}h2[data-element=countdown-title]{margin:0;line-height:1.3;text-align:center}div[data-element=countdown-units]{display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}div[data-element=countdown-unit]{display:grid;grid-template-areas:"number separator" "label empty";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center}span[data-element=countdown-unit-number]{text-rendering:optimizeSpeed;grid-area:number}span[data-element=countdown-unit-label]{line-height:1.1;text-rendering:optimizeSpeed;grid-area:label}div[data-element=countdown-unit][data-unit-type=separator]{text-rendering:optimizeSpeed}@media (min-width:768px){div[data-element=countdown-container]{display:flex;justify-content:center}div[data-element=countdown-wrapper]{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 0;width:100%;max-width:978px}h2[data-element=countdown-title]{max-width:370px;text-align:center}}`}
      </style>
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
