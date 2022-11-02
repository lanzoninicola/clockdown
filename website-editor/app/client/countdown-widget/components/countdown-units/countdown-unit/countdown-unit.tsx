import React from "react";

import { StringOrNumber } from "../../../types";

interface CountdownUnitProps {
  label?: string;
  value: StringOrNumber;
  isDanger?: boolean;
  /** aria-label attribute for the number of timer unit */
  ariaLabelUnitNumber: string;
  /** aria-label attribute for the label of timer unit */
  ariaLabelUnitLabel: string;
}

function CountdownUnit({
  label,
  value,
  isDanger,
  ariaLabelUnitNumber,
  ariaLabelUnitLabel,
}: CountdownUnitProps) {
  return (
    <div
      data-element="countdown-unit"
      data-unit-type={ariaLabelUnitLabel.toLowerCase()}
    >
      <span
        data-element="countdown-unit-number"
        aria-label={ariaLabelUnitNumber}
      >
        {value}
      </span>
      <span data-element="countdown-unit-label" aria-label={ariaLabelUnitLabel}>
        {label ?? ""}&nbsp;
      </span>
    </div>
  );
}

const areEqual = (
  prevProps: CountdownUnitProps,
  nextProps: CountdownUnitProps
) => {
  return (
    prevProps.label === nextProps.label && prevProps.value === nextProps.value
  );
};

const MemoizedCountdownUnit = React.memo(CountdownUnit, areEqual);

export default MemoizedCountdownUnit;
