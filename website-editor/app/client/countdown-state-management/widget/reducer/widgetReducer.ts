import { TimerSettingsStateData } from "../../common/types/timer-settings";
import { TimerSettingsStateAction } from "../../editor/type/timer-settings-actions";

const widgetReducer = (
  state: TimerSettingsStateData,
  action: TimerSettingsStateAction
) => {
  switch (action.type) {
    case "TIMER_SETTINGS_ON_INIT":
      return {
        ...state,
        ...action.payload,
      };
    case "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG":
      return {
        ...state,
        isTimerExpired: true,
      };

    default:
      return state;
  }
};

export default widgetReducer;
