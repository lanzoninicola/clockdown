import { useTranslation } from "react-i18next";
import PropertyGroupWrapper from "../../components/layout/property-group-wrapper/property-group-wrapper";
import TargetDate from "./target-date/target-date";
import TimezonePicker from "./timezone/timezone-picker";

interface SettingsPropertiesGroupProps {
  showGroupTitle?: boolean;
  [key: string]: any;
}

export default function SettingsPropertiesGroup({
  showGroupTitle,
  ...props
}: SettingsPropertiesGroupProps) {
  const { t } = useTranslation();

  return (
    <PropertyGroupWrapper
      showGroupTitle={showGroupTitle}
      title={t("editor.propertiesGroup.layout.groupTitle")}
      {...props}
    >
      <TargetDate size={"sm"} />
      <TimezonePicker size={"sm"} />
    </PropertyGroupWrapper>
  );
}
