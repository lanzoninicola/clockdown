import { Input, Textarea } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useThemeTitleSelector from "../../../../../countdown-state-management/common/hooks/theme/useThemeTitleWithDispatcher";
import PropertyWrapper from "../../../components/layout/property-wrapper/property-wrapper";
import Label from "../../../components/primitives/label/label";

export default function CountdownTitleText() {
  const { t } = useTranslation();
  const { text, themeDispatcher } = useThemeTitleSelector();

  return (
    <PropertyWrapper>
      <Label>{t("editor.propertiesGroup.title.text")}</Label>
      <Textarea
        size={"sm"}
        title="countdownName"
        name="countdownName"
        placeholder={t("editor.propertiesGroup.title.titlePlaceholder")}
        gridColumn={"2 / -1"}
        value={text}
        onChange={(e) => {
          themeDispatcher({
            type: "THEME_TITLE_ON_CHANGE_TEXT",
            payload: e.target.value,
          });
        }}
        className="theme-font"
        h={"120px"}
        maxH={"200px"}
      />
    </PropertyWrapper>
  );
}
