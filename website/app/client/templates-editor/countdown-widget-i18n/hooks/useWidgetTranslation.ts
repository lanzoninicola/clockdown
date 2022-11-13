import { WidgetContext } from "../../countdown-state-management";
import useThemeTimerUnitLabel from "../../countdown-state-management/common/hooks/theme/useThemeTimerUnitLabel";
import TRANSLATIONS from "../../../../common/i18n/translations/translations";
import { WidgetTranslation } from "../types";

interface UseWidgetTranslation {
  /** function that let you translate the label of countdown unit */
  tw: (slice: keyof WidgetTranslation) => string;
}

declare global {
  interface String {
    capitalize(): string;
  }
}

String.prototype.capitalize = function (): string {
  return Object.values(this)
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("");
};

/**
 *
 * @returns A function that let you translate the label of countdown unit
 * @example
 *
 * const {tw} = useWidgetTranslation();
 *
 * tw("month"); // "Month"
 */
export default function useWidgetTranslation(): UseWidgetTranslation {
  const { unitLabelLanguage } = useThemeTimerUnitLabel(WidgetContext);

  function tw(slice: keyof WidgetTranslation): string {
    const translation = TRANSLATIONS[unitLabelLanguage];

    if (!translation) {
      throw new Error(`No translation found for locale ${unitLabelLanguage}`);
    }

    return translation[slice].capitalize() || "";
  }

  return { tw };
}
