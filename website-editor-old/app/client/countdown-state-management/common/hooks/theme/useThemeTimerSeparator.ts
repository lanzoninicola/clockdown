import { Context } from "use-context-selector";

import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { ThemeSeparatorStateData } from "../../types/theme/timer";
import useThemeState from "./useThemeState";

export default function useThemeTimerSeparator<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): ThemeSeparatorStateData {
  const theme = useThemeState(context);

  const { timer } = theme;

  const { showSeparator, separatorChar } = timer;

  return {
    showSeparator,
    separatorChar,
  };
}
