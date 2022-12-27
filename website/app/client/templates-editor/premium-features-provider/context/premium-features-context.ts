import { createContext } from "use-context-selector";
import type { PremiumFeaturesContextData } from "../types/context";

export const PremiumFeaturesContext = createContext<PremiumFeaturesContextData>(
  {} as PremiumFeaturesContextData
);
