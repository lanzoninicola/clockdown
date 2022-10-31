import { useLayoutEffect, useState } from "react";
import { WidgetContext } from "../../countdown-state-management";
import useThemeTimerUnitNumber from "../../countdown-state-management/common/hooks/theme/useThemeTimerUnitNumber";

import useTimerSettingsState from "../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsState";
import useCountdown from "../hooks/useCountdown";
import CountdownTitle from "./countdown-title/countdown-title";
import CountdownUnits from "./countdown-units/countdown-units";
import TimerSkeleton from "./timer-skeleton/timer-skeleton";

const Countdown = () => {
  const {
    targetDate: HTMLInputTargetDate,
    targetTimezone: HTMLInputTargetTimezone,
    isTimerExpired,
  } = useTimerSettingsState(WidgetContext);

  const [isLoading, setIsLoading] = useState(true);
  const { padWithZero } = useThemeTimerUnitNumber(WidgetContext);

  const { days, hours, minutes, seconds } = useCountdown({
    HTMLInputTargetDate,
    HTMLInputTargetTimezone,
    withZeros: padWithZero,
  });

  useLayoutEffect(() => {
    if (
      (isTimerExpired === false &&
        (days > 0 || hours > 0 || minutes > 0 || seconds > 0)) ||
      (isTimerExpired === true &&
        days === 0 &&
        hours === 0 &&
        minutes === 0 &&
        seconds === 0)
    ) {
      setIsLoading(false);
    }
  }, [isTimerExpired, days, hours, minutes, seconds]);

  if (isLoading) {
    return <TimerSkeleton />;
  }

  return (
    <div data-element="countdown-wrapper">
      <CountdownTitle />
      <CountdownUnits
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    </div>
  );
};

export default Countdown;
