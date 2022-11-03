import dayjs from "dayjs";

export function now(): dayjs.Dayjs {
  return dayjs();
}

export function nowMs(): number {
  return now().valueOf();
}

export function toMs(date: dayjs.Dayjs): number {
  return date.valueOf();
}
