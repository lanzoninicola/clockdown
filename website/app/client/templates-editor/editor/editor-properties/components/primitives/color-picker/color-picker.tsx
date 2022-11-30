import { Button } from "@chakra-ui/react";
import { Console } from "console";
import { useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import useThemeTitleWithDispatcher from "~/client/templates-editor/countdown-state-management/common/hooks/theme/useThemeTitleWithDispatcher";

import DialogWrapper from "../dialog-wrapper/dialog-wrapper";

interface ColorPickerProps {
  colorSelected: string;
  onColorSelected: (colorSelected: string) => void;
  action?: any;
}

export default function ColorPicker({
  colorSelected,
  onColorSelected,
  action,
}: ColorPickerProps) {
  const [showDialog, setShowDialog] = useState(false);
  const ref = useRef(null);

  const { themeDispatcher } = useThemeTitleWithDispatcher();

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
            color={colorSelected}
            onChange={(color) => {
              themeDispatcher({
                type: "THEME_TITLE_ON_CHANGE_FONT_COLOR",
                payload: color,
              });
            }}
          />
        </DialogWrapper>
      )}
    </>
  );
}
