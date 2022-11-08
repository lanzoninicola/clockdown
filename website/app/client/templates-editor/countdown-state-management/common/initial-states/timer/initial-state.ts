import { TimerSettingsStateData } from "../../types/timer-settings";

const TIMER_INITIAL_STATE: TimerSettingsStateData = {
  targetDate: "2022-12-31T23:00",
  targetTimezone: "Europe/Berlin", // "America/Sao_Paulo" "Europe/Berlin", // America/Los_Angeles
  isTimerExpired: false,
  actionDispatched: "",
};

export default TIMER_INITIAL_STATE;
