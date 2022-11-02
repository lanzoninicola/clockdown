import { Input } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

interface SeparatorCharProps {
  showSeparator: boolean;
  separatorChar: string;
  onChangeSeparatorChar: (separatorChar: string) => void;
}

export default function SeparatorChar({
  showSeparator,
  separatorChar,
  onChangeSeparatorChar,
}: SeparatorCharProps) {
  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label htmlFor="separatorChar">
        {t("editor.propertiesGroup.separator.separatorCharLabel")}
      </Label>
      <Input
        id="separatorChar"
        name="separatorChar"
        size="sm"
        maxLength={1}
        onChange={(e) => {
          onChangeSeparatorChar(e.target.value);
        }}
        aria-label={t(
          "editor.propertiesGroup.separator.separatorCharAriaLabel"
        )}
        isDisabled={showSeparator === false}
        value={separatorChar}
        className="theme-font"
        w="2rem"
      />
    </PropertyWrapper>
  );
}
