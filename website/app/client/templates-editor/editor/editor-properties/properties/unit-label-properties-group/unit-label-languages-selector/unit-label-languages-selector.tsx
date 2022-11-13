import { Select } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

import useThemeTimerWithDispatcher from "../../../../../countdown-state-management/common/hooks/theme/useThemeTimerWithDispatcher";
import LANGUAGES from "../../../../../../../common/i18n/languages/languages";
import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function UnitLabelLanguagesSelector() {
  const { unitLabelLanguage, themeDispatcher } = useThemeTimerWithDispatcher();

  const { t } = useTranslation();

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.unitLabel.unitLabelLanguage")}</Label>
      <Select
        variant="outline"
        size={"xs"}
        gridColumn={"2 / -1"}
        className="theme-font"
        value={unitLabelLanguage}
        onChange={(e) =>
          themeDispatcher({
            type: "THEME_TIMER_ON_CHANGE_UNIT_LABEL_LANGUAGE",
            payload: e.target.value,
          })
        }
        bg={"white"}
      >
        {LANGUAGES.map((language, idx) => {
          return (
            <option key={idx} value={language.locale}>
              {language.name}
            </option>
          );
        })}
      </Select>
    </PropertyWrapper>
  );
}
