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
  unitNumberFontFamily: string;
  /** The font weight of the digit text */
  unitNumberFontWeight: string;
  /** The font size of the digit text */
  unitNumberFontSize: ResponsiveValue;
  /** The font color of the digit text */
  unitNumberFontColor: string;
  /** The color of the last unit of timer text */
  lastUnitColor: string;
  /** Add a zero when the number has one digit */
  padWithZero: boolean;
}

export interface ThemeUnitLabelStateData {
  /** The font family of the digit label */
  unitLabelFontFamily: string;
  /** The font weight of the digit label */
  unitLabelFontWeight: string;
  /** The font size of the digit label */
  unitLabelFontSize: ResponsiveValue;
  /** The font color of the digit label */
  unitLabelFontColor: string;
  /** The language of units labels */
  unitLabelLanguage: Language["locale"];
  /** The color of the last unit of timer text */
  lastUnitColor: string;
}

export interface ThemeUnitVisibilityContextData {
  hideDays: boolean;
  hideHours: boolean;
  hideSeconds: boolean;
}
