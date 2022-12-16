import { WidgetContext } from "../../../countdown-state-management";
import useThemeLayout from "../../../countdown-state-management/common/hooks/theme/useThemeLayout";
import useThemeTimerSeparator from "../../../countdown-state-management/common/hooks/theme/useThemeTimerSeparator";
import useThemeTimerUnitLabel from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitLabel";
import useThemeTimerUnitNumber from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitNumber";
import useThemeTitle from "../../../countdown-state-management/common/hooks/theme/useThemeTitle";
import useChakraBreakpoint from "../../hooks/useChakraBreakpoint";

export default function CountdownWidgetStyleTag() {
  const globalTheme = useThemeLayout(WidgetContext);
  const titleTheme = useThemeTitle(WidgetContext);
  const viewportToken = useChakraBreakpoint();
  const unitNumberTheme = useThemeTimerUnitNumber(WidgetContext);
  const unitLabelTheme = useThemeTimerUnitLabel(WidgetContext);
  const separatorTheme = useThemeTimerSeparator(WidgetContext);

  /** ============================================ */

  let countdownWrapper = ``;

  countdownWrapper += `div[data-element="countdown-wrapper"] {`;

  if (globalTheme.transparentBackground) {
    countdownWrapper += `background: transparent;`;
  }
  if (globalTheme.backgroundColor !== null) {
    countdownWrapper += `background: ${globalTheme.backgroundColor};`;
  }

  if (globalTheme.height !== null && globalTheme.height > 0) {
    countdownWrapper += `padding-block: ${globalTheme.height}rem;`;
  }

  if (globalTheme.borderWidth !== null && globalTheme.borderWidth > 0) {
    countdownWrapper += `border: ${globalTheme.borderWidth}px solid;`;
  }

  if (globalTheme.borderColor !== null) {
    countdownWrapper += `border-color: ${globalTheme.borderColor};`;
  }

  if (globalTheme.borderRadius !== null && globalTheme.borderRadius > 0) {
    countdownWrapper += `border-radius: ${globalTheme.borderRadius}px;`;
  }

  if (globalTheme.gap !== null && globalTheme.gap > 0) {
    countdownWrapper += `gap: ${globalTheme.gap}rem;`;
  }

  countdownWrapper += `} `;

  if (globalTheme.orientation === "vertical") {
    countdownWrapper += `@media (min-width:769px){div[data-element="countdown-wrapper"]{`;
    countdownWrapper += `grid-template-columns: repeat(1,1fr);`;
    countdownWrapper += `}} `;
  }
  if (globalTheme.orientation === "auto") {
    countdownWrapper += `@media (min-width:769px){div[data-element="countdown-wrapper"]{`;
    countdownWrapper += `grid-template-columns: repeat(2,1fr);`;
    countdownWrapper += `}} `;
  }

  if (globalTheme.reverseOrderItems === true) {
    countdownWrapper += `@media (max-width:768px){div[data-element="countdown-wrapper"]{`;
    countdownWrapper += `display: flex;`;
    countdownWrapper += `flex-direction: column-reverse;`;
    countdownWrapper += `}} `;
  }

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

  let lastUnitNumber = ``;

  lastUnitNumber += `div[data-element="countdown-unit"]:last-child > span:first-child {`;

  if (unitNumberTheme.lastUnitColor) {
    lastUnitNumber += `color: ${unitNumberTheme.lastUnitColor};`;
  }

  lastUnitNumber += `}`;

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
  if (unitLabelTheme.unitLabelTextTransform === "uppercase") {
    unitLabel += `text-transform: uppercase;`;
  }
  if (unitLabelTheme.unitLabelTextTransform === "lowercase") {
    unitLabel += `text-transform: lowercase;`;
  }
  unitLabel += `}`;

  let lastUnitLabel = ``;

  lastUnitLabel += `div[data-element="countdown-unit"]:last-child > span:last-child {`;

  if (unitLabelTheme.lastUnitColor) {
    lastUnitLabel += `color: ${unitLabelTheme.lastUnitColor};`;
  }

  lastUnitLabel += `}`;

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

  if (separatorTheme.showSeparator === false) {
    unitSeparator += `div[data-element="countdown-unit"][data-unit-type="separator"] {`;
    unitSeparator += `display: none;`;
    unitSeparator += `}`;

    unitSeparator += `div[data-element="countdown-units"] {`;
    unitSeparator += `grid-template-columns: repeat(4, 1fr);`;
    unitSeparator += `}`;

    unitSeparator += `@media (max-width:420px){div[data-element="countdown-units"] {`;
    unitSeparator += `width: 100%;`;
    unitSeparator += `}}`;
  }

  /** ============================================ */

  const editorStyleTagContent = [
    countdownWrapper,
    title,
    unitNumber,
    lastUnitNumber,
    unitLabel,
    lastUnitLabel,
    unitSeparator,
    lastUnit,
  ].join(" ");

  const baseStyle = `h2[data-element=countdown-title],span[data-element=countdown-unit-label],span[data-element=countdown-unit-number]{font-size:100%;font-weight:inherit;font-family:Inter}a[data-element=countdown-link-wrapper]{color:inherit;-webkit-text-decoration:none;text-decoration:none}div[data-element=countdown-wrapper]{display:grid;justify-items:center;align-items:center;gap:.85rem;margin:auto;padding-block:.75rem}h2[data-element=countdown-title]{margin:0;line-height:1.3;text-align:center}div[data-element=countdown-units]{display:grid;grid-template-columns:repeat(7,1fr);column-gap:.5rem;width:min-content}div[data-element=countdown-unit]{display:grid;grid-template-areas:"number" "label";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;justify-items:center}div[data-element=countdown-unit]:not(div[data-element=countdown-unit][data-unit-type=separator]){min-width:70px}span[data-element=countdown-unit-number]{text-rendering:optimizeSpeed;grid-area:number}span[data-element=countdown-unit-label]{line-height:1.1;text-rendering:optimizeSpeed;grid-area:label}div[data-element=countdown-unit][data-unit-type=separator]{text-rendering:optimizeSpeed}@media (min-width:769px){div[data-element=countdown-wrapper]{grid-template-columns:repeat(2,1fr);padding-inline:2rem;}h2[data-element=countdown-title]{max-width:50ch;text-align:left}}`;

  return (
    <>
      <style
        data-element="countdown-widget-style-tag"
        data-context="base-style"
      >
        {baseStyle}
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
