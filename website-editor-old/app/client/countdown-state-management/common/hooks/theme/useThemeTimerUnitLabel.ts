import { Context } from "use-context-selector";

import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeUnitLabelStateData } from "../../types/theme/timer";
import useThemeState from "./useThemeState";

export default function useThemeTimerUnitLabel<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeUnitLabelStateData {
  const theme = useThemeState(context);

  const { timer } = theme;

  const {
    unitLabelFontFamily,
    unitLabelFontWeight,
    unitLabelFontSize,
    unitLabelFontColor,
    unitLabelLanguage,
    lastUnitColor,
  } = timer;

  return {
    unitLabelFontFamily,
    unitLabelFontWeight,
    unitLabelFontSize,
    unitLabelFontColor,
    unitLabelLanguage,
    lastUnitColor,
  };
}
