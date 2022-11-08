import dayjs from "dayjs";

export const DEFAULT_REMAINING_TIME = {
  seconds: 0,
  minutes: 0,
  hours: 0,
  days: 0,
};

/**
 * @param target the target date/time in the desired timezone
 * @param now the current date/time in the user timezone
 */
export function diff(
  todayDateTimeLocalTime: dayjs.Dayjs,
  targetDateTimeLocalTime: dayjs.Dayjs
) {
  const now = todayDateTimeLocalTime;
  const target = targetDateTimeLocalTime;

  if (target.isBefore(todayDateTimeLocalTime)) {
    return DEFAULT_REMAINING_TIME;
  }

  return {
    seconds: diffSeconds(now, target),
    minutes: diffMinutes(now, target),
    hours: diffHours(now, target),
    days: diffDays(now, target),
  };
}

function diffSeconds(now: dayjs.Dayjs, target: dayjs.Dayjs): number {
  return target.diff(now, "seconds") % 60;
}

function diffMinutes(now: dayjs.Dayjs, target: dayjs.Dayjs): number {
  return target.diff(now, "minutes") % 60;
}

function diffHours(now: dayjs.Dayjs, target: dayjs.Dayjs): number {
  return target.diff(now, "hours") % 24;
}

function diffDays(now: dayjs.Dayjs, target: dayjs.Dayjs): number {
  return target.diff(now, "days");
}

export function diffInSeconds(now: dayjs.Dayjs, target: dayjs.Dayjs): number {
  return target.diff(now, "seconds");
}
