import { Input, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { EditorContext } from "../../../../../countdown-state-management";
import useTimerSettingsStateWithDispatcher from "../../../../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsStateWithDispatcher";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

interface TargetDateProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TargetDate({ size }: TargetDateProps) {
  const { t } = useTranslation();
  const { targetDate, timerSettingsDispatcher } =
    useTimerSettingsStateWithDispatcher(EditorContext);

  return (
    <PropertyWrapper>
      <Label size={size}>{t("editor.targetDate").capitalize()}</Label>
      <Input
        size={size as ThemingProps<"Input">["size"]}
        type="datetime-local"
        id="target-date"
        name="target-date"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          timerSettingsDispatcher({
            type: "TIMER_SETTINGS_ON_CHANGE_TARGET_DATE",
            payload: e.target.value,
          });
        }}
        gridColumn={"2 / 5"}
        className="theme-font"
        fontSize={"sm"}
        value={targetDate}
        bg={"white"}
        borderRadius={"md"}
      />
    </PropertyWrapper>
  );
}
