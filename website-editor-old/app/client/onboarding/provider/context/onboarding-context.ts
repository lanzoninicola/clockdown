import { createContext } from "use-context-selector";
import { OnboardingContextData } from "../types";

export const OnboardingContext = createContext<OnboardingContextData>(
  {} as OnboardingContextData
);
