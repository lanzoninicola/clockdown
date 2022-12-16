import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

import PropertyWrapper from "../../layout/property-wrapper/property-wrapper";
import DialogWrapper from "../../primitives/dialog-wrapper/dialog-wrapper";
import FontFamilyPicker from "../../primitives/font-family-picker/font-family-picker";
import Label from "../../primitives/label/label";

interface FontFamilyProps {
  label: string;
  fontFamily: string | null;
  fontWeight: string | null;
  onSelectFontFamily: (fontFamily: string) => void;
  onSelectFontWeight: (fontWeight: string) => void;
}

export default function FontFamily({
  label,
  fontFamily,
  fontWeight,
  onSelectFontFamily,
  onSelectFontWeight,
}: FontFamilyProps) {
  const [pickerFontFamily, setPickerFontFamily] = useState<string>(
    fontFamily || "Inter"
  );
  const [pickerFontWeight, setPickerFontWeight] = useState<string>(
    fontWeight || "400"
  );
  const [showDialog, setShowDialog] = useState(false);
  const ref = useRef(null);

  const onCloseDialog = () => {
    // Update the global state
    onSelectFontFamily(pickerFontFamily);

    // if enable this the font family above will not update. Need to figure out why
    onSelectFontWeight(pickerFontWeight);

    setShowDialog(!showDialog);
  };

  return (
    <PropertyWrapper>
      <Label>{label}</Label>
      <Button
        ref={ref}
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowDialog(!showDialog)}
        lineHeight="1"
      >
        {pickerFontFamily ? `${pickerFontFamily}` : "Select font"}
      </Button>
      {showDialog && (
        <DialogWrapper callerRef={ref} onCloseDialog={onCloseDialog}>
          <FontFamilyPicker
            fontFamily={pickerFontFamily}
            fontWeight={pickerFontWeight}
            onSelectFontFamily={setPickerFontFamily}
            onSelectFontWeight={setPickerFontWeight}
          />
        </DialogWrapper>
      )}
    </PropertyWrapper>
  );
}
