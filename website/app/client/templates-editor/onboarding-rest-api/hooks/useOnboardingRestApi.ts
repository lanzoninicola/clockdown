import { client } from "../client/client";
import { APIResponse, OnboardingRequestPayload } from "../types";
import useOnboardingRestConfig from "./useOnboardingRestConfig";

export default function useOnboardingRestApi() {
  const { doOnboardingConfig, shouldOnboardingRequiredConfig } =
    useOnboardingRestConfig();

  const doOnboarding = async (
    payload: OnboardingRequestPayload
  ): Promise<APIResponse> => {
    return client(doOnboardingConfig.endpoint(), {
      method: "POST",
      data: payload,
      headers: doOnboardingConfig.headers,
    });
  };

  const shouldOnboardingRequired = async (
    email: string
  ): Promise<APIResponse<boolean>> => {
    return client(shouldOnboardingRequiredConfig.endpoint(email), {
      method: "GET",
      headers: shouldOnboardingRequiredConfig.headers,
    });
  };

  return { doOnboarding, shouldOnboardingRequired };
}
