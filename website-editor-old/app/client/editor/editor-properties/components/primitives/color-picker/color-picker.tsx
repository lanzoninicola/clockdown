import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import DialogWrapper from "../dialog-wrapper/dialog-wrapper";

interface ColorPickerProps {
  colorSelected: string;
  onColorSelected: (colorSelected: string) => void;
}

export default function ColorPicker({
  colorSelected,
  onColorSelected,
}: ColorPickerProps) {
  const [showDialog, setShowDialog] = useState(false);
  const ref = useRef(null);

  return (
    <>
      <Button
        ref={ref}
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowDialog(!showDialog)}
        lineHeight="1"
      >
        {colorSelected ? colorSelected : "Select color"}
      </Button>
      {showDialog && (
        <DialogWrapper
          callerRef={ref}
          onCloseDialog={() => setShowDialog(!showDialog)}
        >
          <HexColorPicker color={colorSelected} onChange={onColorSelected} />
        </DialogWrapper>
      )}
    </>
  );
}
