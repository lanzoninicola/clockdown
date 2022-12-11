import { useState } from "react";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import ColorPicker from "../../primitives/color-picker/color-picker";
import Label from "../../primitives/label/label";

interface BackgroundColorProps {
  label: string;
  colorSelected: string | null;
  onColorSelected: (colorSelected: string) => void;
}

export default function BackgroundColor({
  label,
  colorSelected,
  onColorSelected,
}: BackgroundColorProps) {
  const [color, _] = useState(colorSelected ?? "#ffffff");

  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <ColorPicker colorSelected={color} onColorSelected={onColorSelected} />
    </PropertyWrapper>
  );
}
