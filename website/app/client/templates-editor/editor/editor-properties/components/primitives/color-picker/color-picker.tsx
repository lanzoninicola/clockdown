import { Button, Input } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import DialogWrapper from "../dialog-wrapper/dialog-wrapper";

interface ColorPickerProps {
  colorSelected: string | null;
  onColorSelected: (colorSelected: string) => void;
}

export default function ColorPicker({
  colorSelected,
  onColorSelected,
}: ColorPickerProps) {
  const [inputColor, inputSetColor] = useState(colorSelected ?? "#ffffff");
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
          <HexColorPicker
            color={inputColor ?? colorSelected}
            onChange={(colorPicked) => {
              inputSetColor(colorPicked);
              onColorSelected(colorPicked);
            }}
          />
          <Input
            type="text"
            value={inputColor ?? colorSelected}
            mt={4}
            textAlign="center"
            onChange={(e) => {
              inputSetColor(e.target.value);
              onColorSelected(e.target.value);
            }}
            maxLength={7}
          ></Input>
        </DialogWrapper>
      )}
    </>
  );
}
