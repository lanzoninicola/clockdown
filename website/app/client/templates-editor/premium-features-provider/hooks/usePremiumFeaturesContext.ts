import { useContextSelector } from "use-context-selector";
import { PremiumFeaturesContext } from "../context/premium-features-context";
import type { PremiumFeaturesContextData } from "../types/context";

export default function usePremiumFeaturesContext(): PremiumFeaturesContextData {
  const context = useContextSelector(PremiumFeaturesContext, (state) => state);

  return {
    ...context,
  };
}
