import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import DialogWrapper from "../../../components/primitives/dialog-wrapper/dialog-wrapper";
import Label from "../../../components/primitives/label/label";
import LayoutPicker from "../../../components/primitives/layout-picker/layout-picker";

interface LayoutOrientationProps {
  orientationSelected: string;
}

export default function LayoutOrientation({
  orientationSelected,
}: LayoutOrientationProps) {
  const [showDialog, setShowDialog] = useState(false);
  const ref = useRef(null);
  const { t } = useTranslation();

  let orientationBtnLabel = t("editor.propertiesGroup.layout.auto.label");

  if (orientationSelected === "vertical") {
    orientationBtnLabel = t("editor.propertiesGroup.layout.vertical.label");
  }

  if (orientationSelected === "horizontal") {
    orientationBtnLabel = t("editor.propertiesGroup.layout.horizontal.label");
  }

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.layout.orientationLabelProp")}</Label>
      <Button
        ref={ref}
        gridColumn={"2 / -1"}
        size="xs"
        className="theme-font"
        onClick={() => setShowDialog(!showDialog)}
        lineHeight="1"
      >
        {orientationSelected ? orientationBtnLabel : "Select orientation"}
      </Button>
      {showDialog && (
        <DialogWrapper
          callerRef={ref}
          onCloseDialog={() => setShowDialog(!showDialog)}
          minW="500px"
        >
          <LayoutPicker />
        </DialogWrapper>
      )}
    </PropertyWrapper>
  );
}
