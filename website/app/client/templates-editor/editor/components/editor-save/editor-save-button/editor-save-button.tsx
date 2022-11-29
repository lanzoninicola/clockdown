import { useTranslation } from "react-i18next";
import capitalize from "~/client/common/utils/capitalize";
import useSaveSettings from "../../../hooks/useSaveSettings";

import ButtonSave from "../../../layout/button-save/button-save";

export default function EditorSaveButton() {
  const { currentCountdown, onCreate, onUpdate, isLoading } = useSaveSettings();
  const { t } = useTranslation();

  return (
    <ButtonSave
      label={capitalize(t("editor.saveSettings"))}
      colorScheme={"green"}
      onClick={currentCountdown ? onUpdate : () => onCreate()}
      isLoading={isLoading}
      loadingText={capitalize(t("global.saving"))}
    />
  );
}
