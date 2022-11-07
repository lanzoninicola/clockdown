import { Context } from "use-context-selector";

import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeUnitNumberStateData } from "../../types/theme/timer";
import useThemeState from "./useThemeState";

export default function useThemeTimerUnitNumber<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeUnitNumberStateData {
  const theme = useThemeState(context);

  const { timer } = theme;

  const {
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitNumberFontSize,
    unitNumberFontColor,
    lastUnitColor,
    padWithZero,
  } = timer;

  return {
    unitNumberFontFamily,
    unitNumberFontWeight,
    unitNumberFontSize,
    unitNumberFontColor,
    lastUnitColor,
    padWithZero,
  };
}
