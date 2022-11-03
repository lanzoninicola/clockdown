import { Checkbox, Switch } from "@chakra-ui/react";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../label/label";

interface CheckboxSingleOptionProps {
  /** The html id for the element required for the label tag*/
  id: string;
  /** The text of HTML label tag and aria-label value */
  label: string;
  /** This determine if the checkbox is checked or not */
  value: boolean;
  /** This function is called when the checkbox is checked or unchecked */
  onChange: (checked: boolean) => void;
}

export default function CheckboxSingleOption({
  id,
  label,
  value,
  onChange,
}: CheckboxSingleOptionProps) {
  return (
    <PropertyWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Switch
        id={id}
        name={id}
        size="lg"
        isChecked={value}
        onChange={(e) => onChange(e.target.checked)}
        aria-label={label}
        className="theme-font"
      />
    </PropertyWrapper>
  );
}
