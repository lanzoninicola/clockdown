import { WidgetContext } from "../../../countdown-state-management";
import useThemeTimerUnitLabel from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitLabel";
import useThemeTimerUnitNumber from "../../../countdown-state-management/common/hooks/theme/useThemeTimerUnitNumber";
import useThemeTitle from "../../../countdown-state-management/common/hooks/theme/useThemeTitle";
import GoogleFontsLinkTag from "../google-fonts-link-tag/google-fonts-link-tag";

export default function CountdownWidgetGoogleFontTag() {
  const { unitLabelFontFamily, unitLabelFontWeight } =
    useThemeTimerUnitLabel(WidgetContext);

  const { unitNumberFontFamily, unitNumberFontWeight } =
    useThemeTimerUnitNumber(WidgetContext);

  const { fontFamily: titleFontFamily, fontWeight: titleFontWeight } =
    useThemeTitle(WidgetContext);

  return (
    <GoogleFontsLinkTag
      googleFonts={[
        {
          fontFamily: unitNumberFontFamily || "Inter",
          fontWeight: unitNumberFontWeight || "400",
        },
        {
          fontFamily: unitLabelFontFamily || "Inter",
          fontWeight: unitLabelFontWeight || "400",
        },
        {
          fontFamily: titleFontFamily || "Inter",
          fontWeight: titleFontWeight || "400",
        },
      ]}
    />
  );
}
