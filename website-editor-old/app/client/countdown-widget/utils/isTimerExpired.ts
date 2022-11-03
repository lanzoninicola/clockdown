export default function isTimerExpired(
  days: number,
  hours: number,
  minutes: number,
  seconds: number
) {
  return days + hours + minutes + seconds <= 0;
}
