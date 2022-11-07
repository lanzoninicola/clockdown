import { FontSizeWithUnit } from "../types";

type Unit = "px" | "rem" | "em";

export default function withoutUnit(value: FontSizeWithUnit, unit: Unit) {
  return Number(value.replace(`${unit}`, ""));
}
