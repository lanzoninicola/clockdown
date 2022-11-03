import { Context, useContextSelector } from "use-context-selector";

import { EditorContextDataWithDispatch, WidgetContextData } from "../../types";
import { TimerSettingsStateData } from "../../types/timer-settings";

export default function useTimerSettingsState<
  T extends EditorContextDataWithDispatch | WidgetContextData
>(context: Context<T>): TimerSettingsStateData {
  const timerSettingsState = useContextSelector(
    context,
    (ctx) => ctx.timerSettings
  );

  return {
    ...timerSettingsState,
  };
}
