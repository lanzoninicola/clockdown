import { createContext } from "use-context-selector";
import { PremiumFeaturesContextData } from "../types/context";

export const PremiumFeaturesContext = createContext<PremiumFeaturesContextData>(
  {} as PremiumFeaturesContextData
);
