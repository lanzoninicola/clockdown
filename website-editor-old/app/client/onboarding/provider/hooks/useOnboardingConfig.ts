import { OnboardingModuleConfig } from "../types/context";
import useOnboardingContext from "./useOnboardingContext";

export default function useOnboardingConfig(): OnboardingModuleConfig {
  const { config } = useOnboardingContext();

  return config;
}
