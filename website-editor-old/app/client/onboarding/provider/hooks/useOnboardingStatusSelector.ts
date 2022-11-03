import { useEffect } from "react";
import { useContextSelector } from "use-context-selector";
import { OnboardingContext } from "../context/onboarding-context";

export default function useOnboardingStatusSelector() {
  const status = useContextSelector(OnboardingContext, (ctx) => ctx.status);

  useEffect(() => {
    status === undefined &&
      console.error(
        "useOnboardingStatusSelector hook must be used within a OnboardingProvider"
      );
  }, [status]);

  return {
    status,
  };
}
