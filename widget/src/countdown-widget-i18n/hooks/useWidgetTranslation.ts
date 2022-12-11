import { WidgetContext } from "../../countdown-state-management";
import useThemeTimerUnitLabel from "../../countdown-state-management/common/hooks/theme/useThemeTimerUnitLabel";
import TRANSLATIONS from "../translations/translations";
import type { WidgetTranslation } from "../types";

interface UseWidgetTranslation {
  /** function that let you translate the label of countdown unit */
  tw: (slice: keyof WidgetTranslation) => string;
}

function capitalize(value: string): string {
  return Object.values(String(value))
    .map((char, i) => (i === 0 ? char.toUpperCase() : char))
    .join("");
}

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

    return capitalize(translation[slice]) || "";
  }

  return { tw };
}
