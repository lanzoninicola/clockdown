import { TimerSettingsStateData } from "../../common/types/timer-settings";

interface TimerSettingsInitStateAction {
  type: "TIMER_SETTINGS_ON_INIT";
  payload: TimerSettingsStateData;
}

interface TimerSettingsOnChangeTargetDateAction {
  type: "TIMER_SETTINGS_ON_CHANGE_TARGET_DATE";
  payload: string;
}

interface TimerSettingsOnChangeTimezoneAction {
  type: "TIMER_SETTINGS_ON_CHANGE_TIMEZONE";
  payload: string;
}

interface TimerSettingsOnChangeIsTimerExpiredFlagAction {
  type: "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG";
  payload: boolean;
}

export type TimerSettingsStateAction =
  | TimerSettingsInitStateAction
  | TimerSettingsOnChangeTargetDateAction
  | TimerSettingsOnChangeIsTimerExpiredFlagAction
  | TimerSettingsOnChangeTimezoneAction;
