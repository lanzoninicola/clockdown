import { useEffect, useRef } from "react";
import { useOnboardingRestApi } from "../../onboarding-rest-api";
import useOnboardingContext from "../provider/hooks/useOnboardingContext";

/**
 * Make call to external API to check if user is onboarded or not.
 *
 * @param installation_id The installation id of the product
 * @returns {string} status of the onboarding
 *
 * @dependencies useOnboardingRestApi() hook
 */
export default function useOnboardingCheckStatus(email: string) {
  const isOnboardingRequiredRef = useRef<boolean | null>(null);
  const { dispatch, status } = useOnboardingContext();
  const { shouldOnboardingRequired } = useOnboardingRestApi();

  useEffect(() => {
    if (isOnboardingRequiredRef.current !== null) {
      return;
    }

    async function shouldRequired() {
      const res = await shouldOnboardingRequired(email);

      if (res.data.status > 400) {
        dispatch({ type: "ONBOARDING_CHECK_STATUS_RESPONSE_IS_REQUIRED" });
        isOnboardingRequiredRef.current = true;
        return;
      }

      if (res.data.status === 200) {
        if (res.data.payload === true) {
          dispatch({
            type: "ONBOARDING_CHECK_STATUS_RESPONSE_IS_REQUIRED",
          });
          isOnboardingRequiredRef.current = true;
          return;
        }

        dispatch({ type: "ONBOARDING_CHECK_STATUS_RESPONSE_IS_NOT_REQUIRED" });
        isOnboardingRequiredRef.current = false;
      }
    }

    shouldRequired();
  }, [email]);

  return status;
}
