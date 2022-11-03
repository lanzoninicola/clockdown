import { TimerSettingsStateData } from "../../common/types/timer-settings";
import { TimerSettingsStateAction } from "../type/timer-settings-actions";

export default function timerSettingsReducer(
  state: TimerSettingsStateData,
  action: TimerSettingsStateAction
): TimerSettingsStateData {
  switch (action.type) {
    case "TIMER_SETTINGS_INIT_STATE":
      return {
        ...state,
        ...action.payload,
      };

    case "TIMER_SETTINGS_ON_CHANGE_TARGET_DATE":
      return {
        ...state,
        targetDate: action.payload,
        actionDispatched: action.type,
      };

    case "TIMER_SETTINGS_ON_CHANGE_TIMEZONE":
      return {
        ...state,
        targetTimezone: action.payload,
        actionDispatched: action.type,
      };

    case "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG":
      return {
        ...state,
        isTimerExpired: action.payload,
      };

    default:
      return state;
  }
}
