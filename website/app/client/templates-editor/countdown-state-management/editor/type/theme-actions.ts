import type { ThemeStateData } from "../../common/types/theme";
import type { Language } from "../../../countdown-widget-i18n/types";
import type {
  LayoutOrientation,
  ElementSize,
} from "../../common/types/theme/layout";

export interface LoadingState<T> {
  type: "LOAD_INITIAL_STATE";
  payload: T;
}

/** START UNITS LABEL ACTIONS */
interface ThemeTimerOnChangeUnitLabelFontSizeAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTimerOnChangeUnitLabelFontFamilyAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_FAMILY";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelFontWeightAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_WEIGHT";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelFontColorAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_FONT_COLOR";
  payload: string;
}

interface ThemeTimerOnChangeUnitLabelLanguageAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_LANGUAGE";
  payload: Language["locale"];
}

/** END UNITS LABEL ACTIONS */

/** START UNITS NUMBER ACTIONS */

interface ThemeTimerOnChangeUnitNumberFontSizeAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTimerOnChangeUnitNumberFontFamilyAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_FAMILY";
  payload: string;
}

interface ThemeTimerOnChangeUnitNumberFontWeightAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_WEIGHT";
  payload: string;
}

interface ThemeTimerOnChangeUnitNumberFontColorAction {
  type: "THEME_TIMER_ON_CHANGE_UNIT_NUMBER_FONT_COLOR";
  payload: string;
}

interface ThemeTimerOnChangeVisibilityDaysAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_DAYS";
  payload: boolean;
}

interface ThemeTimerOnChangeVisibilityHoursAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_HOURS";
  payload: boolean;
}

interface ThemeTimerOnChangeVisibilitySecondsAction {
  type: "THEME_TIMER_ON_CHANGE_VISIBILITY_SECONDS";
  payload: boolean;
}

interface ThemeTimerOnChangePadWithZeroAction {
  type: "THEME_TIMER_ON_CHANGE_PAD_WITH_ZERO";
  payload: boolean;
}

interface ThemeTimerOnChangeLastUnitColorAction {
  type: "THEME_TIMER_ON_CHANGE_LAST_UNIT_COLOR";
  payload: string;
}

/** END UNITS NUMBER ACTIONS */

/** START SEPARATOR ACTIONS */

interface ThemeTimerOnChangeShowSeparatorAction {
  type: "THEME_TIMER_ON_CHANGE_SHOW_SEPARATOR";
  payload: boolean;
}

interface ThemeTimerOnChangeSeparatorCharAction {
  type: "THEME_TIMER_ON_CHANGE_SEPARATOR_CHAR";
  payload: string;
}

/** END SEPARATOR ACTIONS */

/** START LAYOUT ACTIONS */

interface ThemeLayoutOnChangeRemoveLinkAction {
  type: "THEME_LAYOUT_ON_CHANGE_REMOVE_LINK";
  payload: boolean;
}

interface ThemeLayoutOnChangeLinkTargetAction {
  type: "THEME_LAYOUT_ON_CHANGE_LINK_TARGET";
  payload: string;
}

interface ThemeLayoutOnChangeContainerSizeAction {
  type: "THEME_LAYOUT_ON_CHANGE_CONTAINER_SIZE";
  payload: ElementSize;
}

interface ThemeLayoutOnChangeContainerSizeAction {
  type: "THEME_LAYOUT_ON_CHANGE_CONTAINER_SIZE";
  payload: ElementSize;
}

interface ThemeLayoutOnChangeOrientationAction {
  type: "THEME_LAYOUT_ON_CHANGE_ORIENTATION";
  payload: LayoutOrientation;
}

interface ThemeLayoutOnChangeGapAction {
  type: "THEME_LAYOUT_ON_CHANGE_GAP";
  payload: number;
}

interface ThemeLayoutOnChangeBackgroundTransparentAction {
  type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_TRANSPARENT";
  payload: boolean;
}

interface ThemeLayoutOnChangeBackgroundColorAction {
  type: "THEME_LAYOUT_ON_CHANGE_BACKGROUND_COLOR";
  payload: string;
}

interface ThemeLayoutOnChangeCss {
  type: "THEME_LAYOUT_ON_CHANGE_CSS_STYLE";
  payload: string;
}

/** END LAYOUT ACTIONS */

/** START TEMPLATE ACTIONS */

interface ThemeTemplateOnChangeTemplateAction {
  type: "THEME_TEMPLATE_ON_CHANGE_TEMPLATE";
  payload: {
    id: string;
    name: string;
    style: string;
  };
}

/** END TEMPLATE ACTIONS */

/** START THEME TITLE ACTIONS */

interface ThemeTitleOnChangeTextAction {
  type: "THEME_TITLE_ON_CHANGE_TEXT";
  payload: string;
}

interface ThemeTitleOnChangeFontSizeAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_SIZE";
  payload: {
    token: string;
    size: number;
  };
}

interface ThemeTitleOnChangeFontFamilyAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_FAMILY";
  payload: string;
}

interface ThemeTitleOnChangeFontWeightAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_WEIGHT";
  payload: string;
}

interface ThemeTitleOnChangeFontColorAction {
  type: "THEME_TITLE_ON_CHANGE_FONT_COLOR";
  payload: string;
}

export type ThemeStateAction =
  | LoadingState<ThemeStateData>
  | ThemeTimerOnChangeUnitNumberFontSizeAction
  | ThemeTimerOnChangeUnitLabelFontSizeAction
  | ThemeTimerOnChangeUnitLabelFontFamilyAction
  | ThemeTimerOnChangeUnitLabelFontWeightAction
  | ThemeTimerOnChangeUnitLabelFontColorAction
  | ThemeTimerOnChangeUnitLabelLanguageAction
  | ThemeTimerOnChangeUnitNumberFontFamilyAction
  | ThemeTimerOnChangeUnitNumberFontWeightAction
  | ThemeTimerOnChangeUnitNumberFontColorAction
  | ThemeTimerOnChangeVisibilityDaysAction
  | ThemeTimerOnChangeVisibilityHoursAction
  | ThemeTimerOnChangeVisibilitySecondsAction
  | ThemeTimerOnChangePadWithZeroAction
  | ThemeTimerOnChangeShowSeparatorAction
  | ThemeTimerOnChangeSeparatorCharAction
  | ThemeLayoutOnChangeRemoveLinkAction
  | ThemeLayoutOnChangeLinkTargetAction
  | ThemeLayoutOnChangeContainerSizeAction
  | ThemeLayoutOnChangeOrientationAction
  | ThemeLayoutOnChangeGapAction
  | ThemeLayoutOnChangeBackgroundTransparentAction
  | ThemeLayoutOnChangeBackgroundColorAction
  | ThemeLayoutOnChangeCss
  | ThemeTemplateOnChangeTemplateAction
  | ThemeTitleOnChangeTextAction
  | ThemeTitleOnChangeFontSizeAction
  | ThemeTitleOnChangeFontFamilyAction
  | ThemeTitleOnChangeFontWeightAction
  | ThemeTitleOnChangeFontColorAction
  | ThemeTimerOnChangeLastUnitColorAction;
