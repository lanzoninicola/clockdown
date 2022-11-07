import { useTranslation } from "react-i18next";
import useSaveSettings from "../../../hooks/useSaveSettings";

import ButtonSave from "../../../layout/button-save/button-save";

export default function EditorSaveButton() {
  const { currentCountdown, onCreate, onUpdate, isLoading } = useSaveSettings();
  const { t } = useTranslation();

  return (
    <ButtonSave
      label={t("editor.saveSettings").capitalize()}
      colorScheme={"green"}
      onClick={currentCountdown ? onUpdate : () => onCreate()}
      isLoading={isLoading}
      loadingText={t("global.saving").capitalize()}
    />
  );
}
