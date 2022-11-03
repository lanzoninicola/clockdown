import { Context, useContextSelector } from "use-context-selector";

import { TimerSettingsStateAction } from "../../../editor/type/timer-settings-actions";
import {
  EditorContextDataWithDispatch,
  WidgetContextDataWithDispatch,
} from "../../types";
import { TimerSettingsStateData } from "../../types/timer-settings";

export type TimerSettingsStateDataWithDispatcher = TimerSettingsStateData & {
  timerSettingsDispatcher: React.Dispatch<TimerSettingsStateAction>;
};

export default function useTimerSettingsStateWithDispatcher<
  T extends EditorContextDataWithDispatch | WidgetContextDataWithDispatch
>(context: Context<T>): TimerSettingsStateDataWithDispatcher {
  const timerSettings = useContextSelector(
    context,
    (ctx) => ctx?.timerSettings
  );

  const timerSettingsDispatcher = useContextSelector(
    context,
    (ctx) => ctx?.timerSettingsDispatcher
  );

  return {
    ...timerSettings,
    timerSettingsDispatcher,
  };
}
