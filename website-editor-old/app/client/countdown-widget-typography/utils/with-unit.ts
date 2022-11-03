import { FontsizeUnit } from "../types";

/** Appends the unit to a unitless value. */
const withUnit = (unitlessValue: number, unit: FontsizeUnit) =>
  `${unitlessValue}${unit}`;

export default withUnit;
