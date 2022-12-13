import { Select, ThemingProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import capitalize from "~/client/common/utils/capitalize";
import { EditorContext } from "../../../../../countdown-state-management";
import useTimerSettingsStateWithDispatcher from "../../../../../countdown-state-management/common/hooks/timer-settings/useTimerSettingsStateWithDispatcher";

import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";
import TIMEZONES_LIST from "../../../constants/timezones";

interface TargetTimezoneProps {
  size: ThemingProps<"FormLabel">["size"] | ThemingProps<"Input">["size"];
}

export default function TimezonePicker({ size }: TargetTimezoneProps) {
  const { t } = useTranslation();
  const { targetTimezone, timerSettingsDispatcher } =
    useTimerSettingsStateWithDispatcher(EditorContext);

  return (
    <PropertyWrapper>
      <Label size={size} htmlFor="timezone">
        {capitalize(t("editor.timezone"))}
      </Label>
      <Select
        id="timezone-picker"
        size={size}
        placeholder="Select option"
        gridColumn={"2 / 5"}
        value={targetTimezone}
        onChange={(e) => {
          timerSettingsDispatcher({
            type: "TIMER_SETTINGS_ON_CHANGE_TIMEZONE",
            payload: e.target.value,
          });
        }}
        className="theme-font"
        fontSize={"sm !important"}
        borderRadius={"md !important"}
        bg={"white !important"}
      >
        {TIMEZONES_LIST.map((tz, idx) => {
          return (
            <option key={idx} value={tz}>
              {tz}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
