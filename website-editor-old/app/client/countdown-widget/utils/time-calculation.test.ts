import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import { diff } from "./time-calculation";

dayjs.extend(utc);
dayjs.extend(timezone);

describe("Testing the diff time function in the same timezone", () => {
  const targetDateTime = dayjs.tz("2022-07-03T23:00", "Europe/Berlin");

  it("should return 1 day, 0 hours, 0 minutes, 0 seconds", () => {
    const userTime = dayjs.tz("2022-07-02T23:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(1);
    expect(hours).toEqual(0);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });

  it("should return 31 days, 0 hours, 0 minutes, 0 seconds", () => {
    const userTime = dayjs.tz("2022-06-02T23:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(31);
    expect(hours).toEqual(0);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });

  it("should return 0 days, 20 hours, 0 minutes, 0 seconds", () => {
    const userTime = dayjs.tz("2022-07-03T03:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(0);
    expect(hours).toEqual(20);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });
});

describe("Testing the diff time function in other timezones", () => {
  const targetDateTime = dayjs.tz("2022-07-03T23:00", "America/Sao_Paulo");

  it("should return 1 day, 5 hours, 0 minutes, 0 seconds", () => {
    const userTime = dayjs.tz("2022-07-02T23:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(1);
    expect(hours).toEqual(5);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });

  it("should return 31 days, 5 hours, 0 minutes, 0 seconds", () => {
    const userTime = dayjs.tz("2022-06-02T23:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(31);
    expect(hours).toEqual(5);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });

  it("should return 0 days, 1 hours, 0 minutes, 0 seconds", () => {
    // https://www.zeitverschiebung.net/en/difference/city/3448439/city/2950159
    const userTime = dayjs.tz("2022-07-03T03:00", "Europe/Berlin");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(0);
    expect(hours).toEqual(1);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });

  it("should return 0 days, 1 hours, 0 minutes, 0 seconds", () => {
    // https://www.zeitverschiebung.net/en/difference/city/3448439/city/5128581
    const userTime = dayjs.tz("2022-07-03T03:00", "America/New_York");
    const { seconds, minutes, hours, days } = diff(userTime, targetDateTime);

    expect(days).toEqual(0);
    expect(hours).toEqual(19);
    expect(minutes).toEqual(0);
    expect(seconds).toEqual(0);
  });
});

export {};
