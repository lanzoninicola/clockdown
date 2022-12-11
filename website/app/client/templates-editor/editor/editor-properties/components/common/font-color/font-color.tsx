import ColorPicker from "../../primitives/color-picker/color-picker";
import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import Label from "../../primitives/label/label";

interface FontColorProps {
  label: string;
  colorSelected: string | null;
  onColorSelected: (colorSelected: string) => void;
}

export default function FontColor({
  label,
  colorSelected,
  onColorSelected,
}: FontColorProps) {
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
