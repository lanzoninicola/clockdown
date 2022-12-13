import { Button } from "@chakra-ui/react";
import { t } from "i18next";
import { useEffect, useState } from "react";
import capitalize from "~/client/common/utils/capitalize";

interface SaveButtonProps {
  onClick: () => void;
  delay?: number;
}

export default function SaveButton({
  onClick,
  delay = 1_000,
}: SaveButtonProps) {
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    if (isSaving) {
      const timeout = setTimeout(() => {
        setIsSaving(false);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [isSaving, delay]);

  return (
    <Button
      size="xs"
      className="theme-font"
      onClick={() => {
        setIsSaving(true);
        onClick();
      }}
      mt={4}
      w="100%"
    >
      {isSaving ? capitalize(t("global.saving")) : capitalize(t("global.save"))}
    </Button>
  );
}
