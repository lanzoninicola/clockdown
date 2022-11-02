import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useCallback, useEffect, useRef, useState } from "react";
import { WidgetContext } from "../../countdown-state-management";

import useTimerSettingsStateWithDispatcher from "../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsStateWithDispatcher";
import { RemainingTime } from "../types";
import padWithZeros from "../utils/padWithZeros";
import {
  DEFAULT_REMAINING_TIME,
  diff,
  diffInSeconds,
} from "../utils/time-calculation";

dayjs.extend(utc);
dayjs.extend(timezone);

// isExpired days + hours + minutes + seconds <= 0

interface UseCountdownProps {
  /** The target date from the (input type="datetime-local") editor*/
  HTMLInputTargetDate: string;
  /** the timezone of the target date */
  HTMLInputTargetTimezone: string;
  /** flag that indicates if need to add 0 to the unitNumber. It depends on the editor settings */
  withZeros?: boolean;
}

/**
 * @param {string} HTMLInputTargetDate the target date/time in the desired timezone
 * @param {string} HTMLInputTargetTimezone the desired timezone
 * @param {boolean} withZeros flag that indicates if need to add 0 to the unitNumber. It depends on the editor settings
 * @returns the difference between the target and the current date/time in time units (seconds, minutes, hours, days)
 */
export default function useCountdown({
  HTMLInputTargetDate,
  HTMLInputTargetTimezone,
  withZeros,
}: UseCountdownProps): RemainingTime {
  const intervalRef = useRef<number>();
  const { timerSettingsDispatcher } =
    useTimerSettingsStateWithDispatcher(WidgetContext);
  const [remainingTime, setRemainingTime] = useState(DEFAULT_REMAINING_TIME);

  /** convert the given target date/time (string format) from the given timezone to the final-user timezone **/
  const targetLocalTime = useCallback(() => {
    return dayjs.tz(HTMLInputTargetDate, HTMLInputTargetTimezone);
  }, [HTMLInputTargetDate, HTMLInputTargetTimezone]);

  /* get the current date/time in the user timezone */
  const todayLocalTime = useCallback(() => {
    return dayjs();
  }, []);

  const updateRemainingTime = useCallback(() => {
    setRemainingTime(diff(todayLocalTime(), targetLocalTime()));
  }, [todayLocalTime, targetLocalTime]);

  const shouldTimerExpired = useCallback(() => {
    const seconds = diffInSeconds(todayLocalTime(), targetLocalTime());
    if (seconds <= 0) {
      clearInterval(intervalRef.current);
      timerSettingsDispatcher({
        type: "TIMER_SETTINGS_ON_CHANGE_IS_TIMER_EXPIRED_FLAG",
        payload: true,
      });
    }
  }, [todayLocalTime, targetLocalTime, timerSettingsDispatcher]);

  function shouldPadWithZeros(number: number, unitNumber = 2) {
    return withZeros ? padWithZeros(number, unitNumber) : number;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime();
      shouldTimerExpired();
    }, 1000);

    intervalRef.current = Number(intervalId);

    return () => clearInterval(intervalId);
  }, [
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
    updateRemainingTime,
    shouldTimerExpired,
  ]);

  return {
    days: shouldPadWithZeros(remainingTime.days),
    hours: shouldPadWithZeros(remainingTime.hours),
    minutes: shouldPadWithZeros(remainingTime.minutes),
    seconds: shouldPadWithZeros(remainingTime.seconds),
  };
}
