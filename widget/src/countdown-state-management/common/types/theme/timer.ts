import { Language } from "../../../../countdown-widget-i18n/types";
import { ResponsiveValue } from "./responsive";

export type ThemeTimerStateData = ThemeUnitVisibilityContextData &
  ThemeSeparatorStateData &
  ThemeUnitNumberStateData &
  ThemeUnitLabelStateData;

export interface ThemeSeparatorStateData {
  /** Show the separator */
  showSeparator: boolean;
  /** The separator character */
  separatorChar: string;
}

export interface ThemeUnitNumberStateData {
  /** The font family of the digit text */
  unitNumberFontFamily: string | null;
  /** The font weight of the digit text */
  unitNumberFontWeight: string | null;
  /** The font size of the digit text */
  unitNumberFontSize: ResponsiveValue | null;
  /** The font color of the digit text */
  unitNumberFontColor: string | null;
  /** The color of the last unit of timer text */
  lastUnitColor: string | null;
  /** Add a zero when the number has one digit */
  padWithZero: boolean;
}

export interface ThemeUnitLabelStateData {
  /** The font family of the digit label */
  unitLabelFontFamily: string | null;
  /** The font weight of the digit label */
  unitLabelFontWeight: string | null;
  /** The font size of the digit label */
  unitLabelFontSize: ResponsiveValue | null;
  /** The font color of the digit label */
  unitLabelFontColor: string | null;
  /** The language of units labels */
  unitLabelLanguage: Language["locale"];
  /** The text-transform of units labels */
  unitLabelTextTransform: "uppercase" | "lowercase" | "capitalize" | null;
  /** The color of the last unit of timer text */
  lastUnitColor: string | null;
}

export interface ThemeUnitVisibilityContextData {
  hideDays: boolean;
  hideHours: boolean;
  hideSeconds: boolean;
}
