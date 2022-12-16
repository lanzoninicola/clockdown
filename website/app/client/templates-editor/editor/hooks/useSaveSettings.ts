import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import useEditorState from "../../countdown-state-management/common/hooks/editor/useEditorState";

import useTimerSettingsState from "../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsState";
import useThemeState from "../../countdown-state-management/common/hooks/theme/useThemeState";
import { CountdownSettingsAndTheme } from "../../countdown-state-management/common/types";
import { create as createCountdown } from "../../countdown-rest-api/services/countdowns";
import {
  create as createCountdownSettings,
  update,
} from "../../countdown-rest-api/services/editor";
import useNotifications from "../../notifications/hooks/useNotifications";
import { EditorContext } from "../../countdown-state-management";

interface UseSaveSettingsProps {
  showNotification?: boolean;
}

// TODO: (reducers) need to be refactored

export default function useSaveSettings({
  showNotification = true,
}: UseSaveSettingsProps = {}) {
  const { currentCountdown } = useEditorState();
  const { success: successnotification, error: errorNotification } =
    useNotifications();

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<string>("");
  const [isCompleted, setIsCompleted] = useState(false);

  const { t } = useTranslation();

  const settings = useTimerSettingsState(EditorContext);
  const theme = useThemeState(EditorContext);
  const savePayload: CountdownSettingsAndTheme = {
    ...settings,
    ...theme,
  };

  useEffect(() => {
    if (!showNotification) return;

    if (isError) {
      errorNotification(`${t("global.error")} - ${error}`, {
        title: t("global.errorTitle"),
      });
    }

    if (isCompleted) {
      successnotification(t("global.success"), {
        title: t("global.successTitle"),
      });
    }
  }, [isError, isCompleted]);

  function onUpdate() {
    setIsLoading(true);

    update(currentCountdown!, savePayload)
      .then((res) => {
        if (!res || !res.data) {
          setIsError(true);
          setError("Generic error");
        } else if (res.data.status >= 400) {
          setIsError(true);
          setError(res.message);
        } else {
          setIsCompleted(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function onCreate(inputName?: string, inputDescription?: string) {
    setIsLoading(true);
    const newName = inputName || "New Countdown";
    const newDescription =
      inputDescription || "Countdown created by the editor";

    createCountdown({ name: newName, description: newDescription })
      .then((res) => {
        if (!res || !res.data) {
          setIsError(true);
          setError("Error creating countdown");
        }
        if (res.data.status >= 400) {
          setIsError(true);
          setError(res.message);
        }

        if (res.data.status === 200) {
          return res.data.payload;
        }
      })
      .then((id) => {
        if (!id) {
          setIsError(true);
          setError("Generic error");
        } else {
          // TODO: set the new countdown as the current one
          // setCurrentCountdown(id);

          return createCountdownSettings(id, savePayload);
        }
      })
      .then((res) => {
        if (!res || !res.data) {
          setIsError(true);
          setError("Generic error");
        } else if (res.data.status >= 400) {
          setIsError(true);
          setError(res.message);
        } else {
          setIsCompleted(true);
        }
      })
      .catch((e) => {
        setIsError(true);
        setError(e.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return { currentCountdown, onCreate, onUpdate, isLoading, isError, error };
}
