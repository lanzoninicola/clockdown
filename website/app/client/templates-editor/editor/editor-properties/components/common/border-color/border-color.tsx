import ColorPicker from "../../primitives/color-picker/color-picker";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface BorderColorProps {
  label: string;
  colorSelected: string | null;
  onColorSelected: (colorSelected: string) => void;
}

export default function BorderColor({
  label,
  colorSelected,
  onColorSelected,
}: BorderColorProps) {
  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <ColorPicker
        colorSelected={colorSelected || "#000000"}
        onColorSelected={onColorSelected}
      />
    </PropertyWrapper>
  );
}
