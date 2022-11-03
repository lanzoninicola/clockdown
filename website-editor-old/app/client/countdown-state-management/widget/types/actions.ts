import { TimerSettingsStateData } from "../../common/types/timer-settings";

interface TimerSettingsStateOnInitAction {
  type: "TIMER_SETTINGS_ON_INIT";
  payload: TimerSettingsStateData;
}

interface TimerSettingsStateOnChangeIsTimerExpiredFlagAction {
  type: "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG";
  payload: boolean;
}

export type ConfigStateAction =
  | TimerSettingsStateOnInitAction
  | TimerSettingsStateOnChangeIsTimerExpiredFlagAction;
