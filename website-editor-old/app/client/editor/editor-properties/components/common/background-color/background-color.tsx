import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import ColorPicker from "../../primitives/color-picker/color-picker";
import Label from "../../primitives/label/label";

interface BackgroundColorProps {
  label: string;
  colorSelected: string;
  onColorSelected: (colorSelected: string) => void;
}

export default function BackgroundColor({
  label,
  colorSelected,
  onColorSelected,
}: BackgroundColorProps) {
  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <ColorPicker
        colorSelected={colorSelected}
        onColorSelected={onColorSelected}
      />
    </PropertyWrapper>
  );
}
